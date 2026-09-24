/* ==========================================================
   Fliperama Bugado — núcleo compartilhado
   Perfil global (XP/nível/sequência), mascote que fala, sons,
   modal, toast, confete e o sorteio de falas sem repetição.
   Uso: <script src="../shared/falas.js"></script>
        <script src="../shared/bugado.js"></script>
   ========================================================== */
(() => {
const RM = matchMedia('(prefers-reduced-motion: reduce)').matches;
const $ = s => document.querySelector(s);

/* ---------------- storage ---------------- */
const store = {
  get(k){ try { return JSON.parse(localStorage.getItem(k)); } catch(e){ return null; } },
  set(k,v){ try { localStorage.setItem(k, JSON.stringify(v)); } catch(e){} }
};

/* ---------------- utils ---------------- */
const fmtTime = s => `${String(Math.floor(s/60)).padStart(2,'0')}:${String(s%60).padStart(2,'0')}`;
const dayKey = (off=0) => { const d=new Date(); d.setDate(d.getDate()+off); return `${d.getFullYear()}-${d.getMonth()+1}-${d.getDate()}`; };
// número do dia (local) desde 1/1/2026 — base dos jogos diários
const dayNumber = () => { const d=new Date(); const a=Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()); return Math.floor((a - Date.UTC(2026,0,1))/864e5); };
function rng(seed){ let a = seed>>>0; return () => { a |= 0; a = a + 0x6D2B79F5 | 0; let t = Math.imul(a ^ a>>>15, 1 | a); t = t + Math.imul(t ^ t>>>7, 61 | t) ^ t; return ((t ^ t>>>14)>>>0) / 4294967296; }; }
const shuffle = (a, r=Math.random) => { for (let i=a.length-1;i>0;i--){ const j=Math.floor(r()*(i+1)); [a[i],a[j]]=[a[j],a[i]]; } return a; };
const normalize = s => String(s).normalize('NFD').replace(/[̀-ͯ]/g,'').toLowerCase().trim();
const fill = (s, v={}) => String(s).replace(/\{(\w+)\}/g, (m,k) => v[k] !== undefined ? v[k] : m);

/* ---------------- perfil global ---------------- */
const PKEY = 'fliperama.profile';
const TITLES = ['Estagiário do Fliperama','Apertador de Botão','Chutador Profissional','Passageiro do 330','Rato de Fliperama','Viciado em Diário','Titular no Mineirão','Lenda do Recreio','Cabuloso Demais','Isso Não Existe'];
function defaults(){ return { xp:0, sound:true, streak:0, lastWin:null, seen:{}, games:{} }; }
let P = store.get(PKEY);
if (!P){
  P = defaults();
  const old = store.get('bugado.profile'); // migração do Sudoku Bugado antigo
  if (old){ P.xp = old.xp||0; P.sound = old.sound !== false; P.streak = old.streak||0; P.lastWin = old.lastWin||null; P.games.sudoku = { wins:old.wins||0, played:old.games||0, best:old.best||{}, ach:old.ach||{} }; }
}
P = Object.assign(defaults(), P);

/* Várias abas abertas ao mesmo tempo: antes de salvar, junta com o que
   as outras abas gravaram. XP soma a diferença feita aqui; jogos que esta
   aba não mexeu vêm do armazenamento; sequência fica com a vitória mais recente. */
let syncedXp = P.xp;
const touched = new Set();
const dayVal = k => { if (!k) return 0; const [y,m,d] = k.split('-').map(Number); return new Date(y, m-1, d).getTime(); };
function mergeStored(){
  const cur = store.get(PKEY); if (!cur) return;
  P.xp = Math.max(0, (cur.xp || 0) + (P.xp - syncedXp));
  syncedXp = cur.xp || 0;
  for (const id in (cur.games || {})){
    if (touched.has(id)) continue;
    if (P.games[id]){ for (const k in P.games[id]) delete P.games[id][k]; Object.assign(P.games[id], cur.games[id]); }
    else P.games[id] = cur.games[id];
  }
  if (dayVal(cur.lastWin) > dayVal(P.lastWin) || (cur.lastWin === P.lastWin && (cur.streak||0) > (P.streak||0))){ P.lastWin = cur.lastWin; P.streak = cur.streak; }
  P.seen = Object.assign({}, cur.seen || {}, P.seen);
}
function saveProfile(){ mergeStored(); store.set(PKEY, P); syncedXp = P.xp; }
const game = id => { touched.add(id); return (P.games[id] = P.games[id] || {}); };
const peekGame = id => P.games[id] || {}; // só leitura (não marca o jogo como desta aba)
window.addEventListener('storage', e => { if (e.key === PKEY){ mergeStored(); refreshBar(); } });

function levelInfo(xp=P.xp){ let lvl=1, need=120, rest=xp; while (rest>=need){ rest-=need; lvl++; need=Math.round(need*1.2); } return { lvl, into:rest, need }; }
const titleOf = lvl => TITLES[Math.min(lvl-1, TITLES.length-1)];
const streakNow = () => (P.lastWin===dayKey(0) || P.lastWin===dayKey(-1)) ? P.streak : 0;

function gainXP(n, opts={}){
  const before = levelInfo().lvl; P.xp = Math.max(0, P.xp + n); saveProfile();
  const after = levelInfo().lvl; refreshBar();
  if (after > before && !opts.quiet){
    sfx.lvl(); toast(`Nível ${after}!`, `Novo título: ${titleOf(after)}`);
    say(line('levelup', {n:after, t:titleOf(after)}), 'happy', 6000);
  }
  return after > before;
}
// vitória em qualquer jogo conta pra sequência de dias
function registerWin(gameId){
  const g = game(gameId); g.wins = (g.wins||0) + 1;
  const today = dayKey(0);
  if (P.lastWin !== today){ P.streak = P.lastWin===dayKey(-1) ? P.streak+1 : 1; P.lastWin = today; }
  saveProfile(); refreshBar(); return P.streak;
}

/* ---------------- falas sem repetição ----------------
   Pra cada categoria o navegador guarda quais falas já saíram (um hashzinho
   de cada texto). Só repete depois de sair TODAS — e continua valendo mesmo
   se um jogo somar falas novas à categoria. */
const BKEY = 'fliperama.used';
const used = store.get(BKEY) || {};
const hash = s => { let h = 2166136261; for (let i=0;i<s.length;i++){ h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); } return (h>>>0).toString(36); };
const banks = Object.assign({}, window.FALAS || {});
function addLines(obj){ Object.assign(banks, obj); }
// soma falas a categorias que já existem (ex.: mais 'aleatorio' temático) em vez de substituir
function extendLines(obj){ for (const k in obj) banks[k] = (banks[k] || []).concat(obj[k]); }
const lines = cat => (banks[cat] || []).slice();
function line(cat, vars){
  const arr = banks[cat];
  if (!arr || !arr.length) return '';
  const fresh = store.get(BKEY); if (fresh) Object.assign(used, fresh); // outras abas também sorteiam
  const seen = new Set(used[cat] || []);
  let pool = arr.filter(s => !seen.has(hash(s)));
  if (!pool.length){ // esgotou: recomeça, mas sem repetir a última que saiu
    const last = (used[cat] || []).slice(-1)[0];
    used[cat] = []; seen.clear();
    pool = arr.length > 1 ? arr.filter(s => hash(s) !== last) : arr;
  }
  const s = pool[Math.floor(Math.random() * pool.length)];
  (used[cat] = used[cat] || []).push(hash(s));
  store.set(BKEY, used);
  return fill(s, vars);
}

/* ---------------- sons ---------------- */
let AC = null;
function ac(){ if (!AC){ try { AC = new (window.AudioContext||window.webkitAudioContext)(); } catch(e){} } if (AC && AC.state==='suspended') AC.resume(); return AC; }
function tone(f, dur=.1, type='square', vol=.05, when=0, slide){
  if (!P.sound) return; const a=ac(); if (!a) return;
  const t=a.currentTime+when, o=a.createOscillator(), g=a.createGain();
  o.type=type; o.frequency.setValueAtTime(f,t); if (slide) o.frequency.exponentialRampToValueAtTime(slide, t+dur);
  g.gain.setValueAtTime(vol,t); g.gain.exponentialRampToValueAtTime(.0001, t+dur);
  o.connect(g).connect(a.destination); o.start(t); o.stop(t+dur+.03);
}
const st = n => 523.25*Math.pow(2,n/12);
const sfx = {
  tap:  () => tone(700,.04,'triangle',.035),
  type: () => tone(900+Math.random()*200,.03,'triangle',.025),
  place:c => { const n=Math.min(c||0,14); tone(st(n),.08,'square',.045); tone(st(n+7),.12,'triangle',.04,.05); },
  good: () => { tone(st(7),.08,'square',.045); tone(st(12),.14,'triangle',.045,.06); },
  note: () => tone(1180,.04,'sine',.04),
  err:  () => { tone(190,.28,'sawtooth',.06,0,70); tone(120,.3,'square',.03,.02,60); },
  meh:  () => tone(300,.12,'triangle',.04,0,240),
  unit: () => [0,4,7,12].forEach((s,k) => tone(st(s),.12,'square',.045,k*.065)),
  hint: () => [12,7,19].forEach((s,k) => tone(st(s),.14,'sine',.06,k*.08)),
  boing:() => tone(180,.28,'sine',.08,0,640),
  flip: () => tone(420,.06,'square',.03,0,820),
  lvl:  () => [0,4,7,11,12,16].forEach((s,k) => tone(st(s),.15,'square',.045,k*.08)),
  win:  () => [0,4,7,12,7,12,16,19,24].forEach((s,k) => tone(st(s),.18,k%2?'triangle':'square',.05,k*.1)),
  lose: () => [7,4,0,-5].forEach((s,k) => tone(st(s),.3,'sawtooth',.045,k*.18))
};
function setSound(on){ P.sound = !!on; saveProfile(); if (on){ ac(); sfx.unit(); } }
document.addEventListener('pointerdown', () => { if (P.sound) ac(); }, { once:true });

/* ---------------- ícones ---------------- */
const ICON = {
  home:'<svg viewBox="0 0 24 24"><path d="m3 10 9-7 9 7"/><path d="M5 9v11h14V9"/><path d="M10 20v-6h4v6"/></svg>',
  help:'<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M9.1 9a3 3 0 0 1 5.8 1c0 2-3 3-3 3"/><path d="M12 17h.01"/></svg>',
  stats:'<svg viewBox="0 0 24 24"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/></svg>',
  plus:'<svg viewBox="0 0 24 24"><path d="M12 5v14M5 12h14"/></svg>',
  on:'<svg viewBox="0 0 24 24"><path d="M11 5 6 9H2v6h4l5 4V5z"/><path d="M15.5 8.5a5 5 0 0 1 0 7"/><path d="M19 5a10 10 0 0 1 0 14"/></svg>',
  off:'<svg viewBox="0 0 24 24"><path d="M11 5 6 9H2v6h4l5 4V5z"/><path d="m22 9-6 6"/><path d="m16 9 6 6"/></svg>',
  star:'<svg viewBox="0 0 24 24"><path d="m12 2 3.1 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.8 21l1.2-6.8-5-4.9 6.9-1z"/></svg>',
  lock:'<svg viewBox="0 0 24 24"><rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/></svg>',
  flame:'<svg viewBox="0 0 24 24"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.07-2.14-.22-4.05 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.15.43-2.29 1-3a2.5 2.5 0 0 0 2.5 2.5z"/></svg>',
  shuffle:'<svg viewBox="0 0 24 24"><path d="M16 3h5v5"/><path d="M4 20 21 3"/><path d="M21 16v5h-5"/><path d="m15 15 6 6"/><path d="M4 4l5 5"/></svg>',
  back:'<svg viewBox="0 0 24 24"><path d="m15 18-6-6 6-6"/></svg>',
  share:'<svg viewBox="0 0 24 24"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>'
};

/* ---------------- mascote ---------------- */
const MASCOT_SVG = `<svg viewBox="0 0 120 120" aria-hidden="true"><g data-m="neutral" class="bg-mood">
<ellipse cx="60" cy="113" rx="30" ry="5" fill="#140a2a" opacity=".6"/>
<path d="M27 50 L21 10 L52 30 Z" fill="#2EE6D6" stroke="#1B1030" stroke-width="5" stroke-linejoin="round"/>
<path d="M93 50 L99 10 L68 30 Z" fill="#2EE6D6" stroke="#1B1030" stroke-width="5" stroke-linejoin="round"/>
<path d="M29 36 L27 20 L40 29 Z" fill="#FF4F9A"/><path d="M91 36 L93 20 L80 29 Z" fill="#FF4F9A"/>
<path d="M18 70 C18 36 38 22 60 22 C82 22 102 36 102 70 C102 98 84 108 60 108 C36 108 18 98 18 70Z" fill="#2EE6D6" stroke="#1B1030" stroke-width="5"/>
<rect class="bg-pixel" x="100" y="16" width="8" height="8" fill="#FF4F9A" stroke="#1B1030" stroke-width="2"/>
<rect class="bg-pixel" x="110" y="28" width="5" height="5" fill="#FFD23F" stroke="#1B1030" stroke-width="1.5" style="animation-delay:.7s"/>
<g class="m-eyes">
<ellipse cx="43" cy="63" rx="12" ry="15" fill="#fff" stroke="#1B1030" stroke-width="4"/><ellipse cx="45" cy="65" rx="7.5" ry="10" fill="#1B1030"/><ellipse cx="45" cy="68" rx="5" ry="5" fill="#5B3DF5"/><circle cx="42" cy="60" r="3.4" fill="#fff"/><circle cx="48" cy="70" r="1.6" fill="#fff"/>
<ellipse cx="77" cy="63" rx="12" ry="15" fill="#fff" stroke="#1B1030" stroke-width="4"/><ellipse cx="79" cy="65" rx="7.5" ry="10" fill="#1B1030"/><ellipse cx="79" cy="68" rx="5" ry="5" fill="#5B3DF5"/><circle cx="76" cy="60" r="3.4" fill="#fff"/><circle cx="82" cy="70" r="1.6" fill="#fff"/>
</g>
<g class="m-lid"><path d="M29 62 H58 V44 H29Z" fill="#2EE6D6"/><path d="M31 62 H56" stroke="#1B1030" stroke-width="4" stroke-linecap="round"/><path d="M63 62 H92 V44 H63Z" fill="#2EE6D6"/><path d="M65 62 H90" stroke="#1B1030" stroke-width="4" stroke-linecap="round"/></g>
<g class="m-happy" fill="none" stroke="#1B1030" stroke-width="5" stroke-linecap="round"><path d="M32 66 Q43 52 54 66"/><path d="M66 66 Q77 52 88 66"/></g>
<g class="m-sleep" fill="none" stroke="#1B1030" stroke-width="5" stroke-linecap="round"><path d="M33 62 Q43 70 53 62"/><path d="M67 62 Q77 70 87 62"/></g>
<g class="m-shock"><ellipse cx="43" cy="62" rx="13" ry="16" fill="#fff" stroke="#1B1030" stroke-width="4"/><circle cx="43" cy="63" r="3.5" fill="#1B1030"/><ellipse cx="77" cy="62" rx="13" ry="16" fill="#fff" stroke="#1B1030" stroke-width="4"/><circle cx="77" cy="63" r="3.5" fill="#1B1030"/></g>
<g class="m-x" stroke="#1B1030" stroke-width="5" stroke-linecap="round"><path d="M35 55 L51 71 M51 55 L35 71"/><path d="M69 55 L85 71 M85 55 L69 71"/></g>
<g class="m-blush" fill="#FF4F9A" opacity=".55"><ellipse cx="31" cy="80" rx="7" ry="4"/><ellipse cx="89" cy="80" rx="7" ry="4"/></g>
<path class="m-mw" d="M51 84 Q55.5 90 60 84 Q64.5 90 69 84" fill="none" stroke="#1B1030" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
<path class="m-msmug" d="M50 87 Q61 91 71 81" fill="none" stroke="#1B1030" stroke-width="3.5" stroke-linecap="round"/>
<g class="m-mopen"><path d="M49 82 Q60 101 71 82 Z" fill="#1B1030" stroke="#1B1030" stroke-width="3" stroke-linejoin="round"/><path d="M54 91 Q60 87 66 91 Q60 97 54 91Z" fill="#FF4F9A"/></g>
<ellipse class="m-mo" cx="60" cy="89" rx="6" ry="8" fill="#1B1030"/>
<g class="m-mdead"><path d="M50 86 Q55 82 60 86 Q65 90 70 86" fill="none" stroke="#1B1030" stroke-width="3.5" stroke-linecap="round"/><path d="M62 88 Q63 97 68 95 Q70 92 67 87Z" fill="#FF4F9A" stroke="#1B1030" stroke-width="2"/></g>
<path class="m-sweat" d="M97 40 Q104 52 97 55 Q90 52 97 40Z" fill="#9FE8FF" stroke="#1B1030" stroke-width="2.5"/>
<g class="m-zz" fill="#FFF7E6" stroke="#1B1030" stroke-width="1.5" font-family="Lilita One, sans-serif"><text x="92" y="22" font-size="16">z</text><text x="104" y="10" font-size="11">z</text></g>
</g></svg>`;

let mascotEl = null, moodEl = null, sayEl = null, typeTimer = null, moodTimer = null, lastSaid = 0, pokes = 0;
// monta <button mascote> + balão dentro de `el`. opts.stack = balão embaixo.
function mountMascot(el, opts={}){
  el.classList.add('bg-strip'); if (opts.stack) el.classList.add('stack');
  el.innerHTML = `<button class="bg-mascot" type="button" aria-label="Bugado, o mascote. Cutuca ele.">${MASCOT_SVG}</button><div class="bg-bubble" aria-live="polite"><p>...</p></div>`;
  mascotEl = el.querySelector('.bg-mascot'); moodEl = el.querySelector('.bg-mood'); sayEl = el.querySelector('.bg-bubble p');
  mascotEl.addEventListener('click', () => {
    ac(); sfx.boing(); glitch('boing'); pokes++;
    const cat = (opts.pokeCat && Math.random() < .5 && banks[opts.pokeCat]) ? opts.pokeCat : 'cutucar';
    say(pokes > 12 && pokes % 6 === 0 ? line('cutucarMuito') : line(cat), pokes % 3 === 0 ? 'shock' : 'smug', 5000);
    idle.touch();
  });
}
function setStack(on){ if (mascotEl) mascotEl.parentElement.classList.toggle('stack', !!on); }
function mood(m){ if (moodEl) moodEl.setAttribute('data-m', m); }
function say(html, m='talk', hold=4500){
  if (!sayEl || !html) return;
  clearInterval(typeTimer); clearTimeout(moodTimer);
  lastSaid = Date.now();
  mood(m);
  const plain = html.replace(/<br\s*\/?>/gi, '\n').replace(/<[^>]+>/g,''); // <br> vira quebra de linha já durante a digitação
  sayEl.classList.toggle('long', plain.length > 105);
  sayEl.style.fontSize = '';
  if (RM){ sayEl.innerHTML = html; fitBubble(); }
  else {
    let n = 0; sayEl.textContent = '';
    typeTimer = setInterval(() => {
      n += 2;
      if (n >= plain.length){ clearInterval(typeTimer); sayEl.innerHTML = html; fitBubble(); if (m==='talk') mood('neutral'); return; }
      sayEl.textContent = plain.slice(0, n);
      fitBubble();
    }, 16);
  }
  moodTimer = setTimeout(() => mood('neutral'), hold);
}
// se o balão tiver altura fixa e a fala não couber, diminui a letra (até 11px) em vez de cortar
function fitBubble(){
  const box = sayEl && sayEl.parentElement; if (!box) return;
  let fs = parseFloat(getComputedStyle(sayEl).fontSize);
  while (sayEl.scrollHeight > box.clientHeight - 6 && fs > 11){ fs -= .5; sayEl.style.fontSize = fs + 'px'; }
}
// fala uma linha de uma categoria (com variáveis)
const talk = (cat, vars, m='talk', hold) => say(line(cat, vars), m, hold);
function glitch(cls='glitch'){ if (!mascotEl) return; mascotEl.classList.remove('glitch','boing'); void mascotEl.offsetWidth; mascotEl.classList.add(cls); setTimeout(() => mascotEl.classList.remove(cls), 550); }

/* ---------------- tagarelice: falas aleatórias e de "tá parado?" ----------------
   Bugado.chatter({ active: () => bool, idleCat:'idle', every:[45,80] })
   - se o jogador ficar parado ~40s, fala algo de 'idle'
   - de tempos em tempos (se ninguém falou nada), solta um 'aleatorio' */
const idle = { last: Date.now(), said:false, touch(){ this.last = Date.now(); this.said = false; } };
let chatterCfg = null, nextRandom = 0;
function chatter(cfg={}){
  chatterCfg = Object.assign({ active: () => true, idleCat:'parado', randomCat:'aleatorio', every:[50,95], idleAfter:40 }, cfg);
  scheduleRandom();
}
function scheduleRandom(){ const [a,b] = chatterCfg.every; nextRandom = Date.now() + (a + Math.random()*(b-a))*1000; }
setInterval(() => {
  if (!chatterCfg || document.hidden || modalOpen || !chatterCfg.active()) return;
  const now = Date.now();
  if (!idle.said && now - idle.last > chatterCfg.idleAfter*1000){
    idle.said = true; talk(chatterCfg.idleCat, null, Math.random()<.3 ? 'sleep' : 'smug', 6000); scheduleRandom(); return;
  }
  if (now > nextRandom && now - lastSaid > 12000){
    talk(chatterCfg.randomCat, null, pickMood(), 6500); scheduleRandom();
  }
}, 1000);
const pickMood = () => ['talk','smug','happy','shock','talk'][Math.floor(Math.random()*5)];
['pointerdown','keydown'].forEach(ev => document.addEventListener(ev, () => idle.touch(), true));

/* ---------------- barra de topo ----------------
   mountBar(el, { title:'Sudoku', color:'#2EE6D6', buttons:[{id, icon, label, onClick, cls}] }) */
let barEl = null;
function mountBar(el, opts={}){
  barEl = el; el.classList.add('bg-bar');
  const home = opts.home !== false ? `<a class="icon-btn home" href="../" aria-label="Voltar pro fliperama">${ICON.home}</a>` : '';
  el.innerHTML = `${home}<div class="bar-title" style="--c:${opts.color||'var(--sun)'}"><small>FLIPERAMA BUGADO</small><b>${opts.title||''}</b></div>
    <a class="lvl-chip" href="${opts.home===false ? '#' : '../'}" title="Teu nível"><span class="n" data-lvl>1</span><span class="mini"><i data-xp></i></span></a>`;
  (opts.buttons||[]).forEach(b => {
    const btn = document.createElement('button'); btn.type='button'; btn.className = 'icon-btn ' + (b.cls||''); if (b.id) btn.id = b.id;
    btn.setAttribute('aria-label', b.label); btn.title = b.label; btn.innerHTML = ICON[b.icon] || b.icon;
    btn.addEventListener('click', e => { sfx.tap(); if (e.detail) btn.blur(); b.onClick(e); });
    el.appendChild(btn);
  });
  refreshBar();
}
function refreshBar(){
  if (!barEl) return;
  const li = levelInfo(); const n = barEl.querySelector('[data-lvl]'), x = barEl.querySelector('[data-xp]');
  if (n) n.textContent = li.lvl; if (x) x.style.width = Math.round(li.into/li.need*100) + '%';
  const chip = barEl.querySelector('.lvl-chip'); if (chip) chip.title = `Nível ${li.lvl}: ${titleOf(li.lvl)} (${li.into}/${li.need} XP)`;
}

/* ---------------- modal ---------------- */
let modalEl, cardEl, modalOpen = false, modalLocked = false; const acts = {};
function ensureChrome(){
  if (modalEl) return;
  modalEl = document.createElement('div'); modalEl.className = 'bg-modal'; modalEl.hidden = true;
  modalEl.innerHTML = '<div class="bg-card" role="dialog" aria-modal="true"></div>';
  cardEl = modalEl.firstChild; document.body.appendChild(modalEl);
  const t = document.createElement('div'); t.className = 'bg-toasts'; t.id = 'bg-toasts'; document.body.appendChild(t);
  const c = document.createElement('canvas'); c.id = 'bg-fx'; document.body.appendChild(c);
  cardEl.addEventListener('click', e => { const b = e.target.closest('[data-act]'); if (!b) return; sfx.tap(); const f = acts[b.dataset.act]; if (b.dataset.act === 'close') closeModal(true); else if (f) f(b); });
  modalEl.addEventListener('click', e => { if (e.target === modalEl) closeModal(); });
  document.addEventListener('keydown', e => { if (modalOpen && e.key === 'Escape') closeModal(); });
}
function openModal(html, opts={}){
  ensureChrome(); cardEl.innerHTML = html; modalEl.hidden = false; modalOpen = true; modalLocked = !!opts.locked; cardEl.scrollTop = 0;
  const f = cardEl.querySelector('button'); if (f) f.focus({preventScroll:true});
}
function closeModal(force){
  if (modalLocked && !force) return; if (!modalEl) return;
  if (modalEl.contains(document.activeElement)) document.activeElement.blur(); // não deixa o foco preso num botão escondido
  modalEl.hidden = true; modalOpen = false; modalLocked = false;
}
const onAct = (name, fn) => { acts[name] = fn; };

/* ---------------- toast / burst / confete ---------------- */
function toast(title, sub=''){
  ensureChrome(); const t = document.createElement('div'); t.className = 'bg-toast';
  t.innerHTML = `${ICON.star}<div><b>${title}</b>${sub}</div>`;
  document.getElementById('bg-toasts').appendChild(t); setTimeout(() => t.remove(), 3700);
}
function burst(el, text, color='#FFD23F'){
  if (!el) return; el.textContent = text; el.style.color = color;
  const k = RM ? [{opacity:0},{opacity:1,offset:.2},{opacity:1,offset:.8},{opacity:0}]
    : [{transform:'translate(-50%,-50%) scale(.2) rotate(-14deg)',opacity:0},{transform:'translate(-50%,-50%) scale(1.18) rotate(-5deg)',opacity:1,offset:.22},{transform:'translate(-50%,-50%) scale(1) rotate(-6deg)',opacity:1,offset:.72},{transform:'translate(-50%,-50%) scale(1.35) rotate(-6deg)',opacity:0}];
  el.animate(k, { duration:1150, easing:'ease-out' });
}
function confetti(){
  if (RM) return; ensureChrome();
  const cv = document.getElementById('bg-fx'), ctx = cv.getContext('2d'), dpr = Math.min(devicePixelRatio||1, 2);
  cv.width = innerWidth*dpr; cv.height = innerHeight*dpr; ctx.setTransform(dpr,0,0,dpr,0,0);
  const cols = ['#FFD23F','#FF4F9A','#2EE6D6','#5B3DF5','#FFF7E6'];
  const ps = Array.from({length:170}, () => ({ x:innerWidth/2 + (Math.random()-.5)*120, y:innerHeight*.45, vx:(Math.random()-.5)*16, vy:-Math.random()*17-5, r:Math.random()*Math.PI, vr:(Math.random()-.5)*.4, w:6+Math.random()*8, h:4+Math.random()*6, c:cols[Math.floor(Math.random()*cols.length)] }));
  const t0 = performance.now();
  (function frame(t){
    ctx.clearRect(0,0,innerWidth,innerHeight);
    ps.forEach(p => { p.vy += .42; p.vx *= .99; p.x += p.vx; p.y += p.vy; p.r += p.vr; ctx.save(); ctx.translate(p.x,p.y); ctx.rotate(p.r); ctx.fillStyle=p.c; ctx.strokeStyle='#1B1030'; ctx.lineWidth=1.5; ctx.fillRect(-p.w/2,-p.h/2,p.w,p.h); ctx.strokeRect(-p.w/2,-p.h/2,p.w,p.h); ctx.restore(); });
    if (t - t0 < 3400) requestAnimationFrame(frame); else ctx.clearRect(0,0,innerWidth,innerHeight);
  })(t0);
}
// copia texto (resultado do diário); devolve Promise<boolean>
async function copyText(text){
  try { await navigator.clipboard.writeText(text); return true; } catch(e){}
  try { // plano B: textarea escondida + execCommand
    const ta = document.createElement('textarea'); ta.value = text; ta.setAttribute('readonly','');
    ta.style.cssText = 'position:fixed;top:0;left:0;opacity:0;pointer-events:none';
    document.body.appendChild(ta); ta.select(); const ok = document.execCommand('copy'); ta.remove(); return ok;
  } catch(e){ return false; }
}

document.addEventListener('DOMContentLoaded', ensureChrome);

window.Bugado = {
  RM, store, fmtTime, dayKey, dayNumber, rng, shuffle, normalize, fill,
  profile: () => P, saveProfile, game, peekGame, syncProfile: mergeStored, levelInfo, titleOf, streakNow, gainXP, registerWin,
  line, talk, addLines, extendLines, lines, say, mood, glitch, mountMascot, setStack, chatter, idle,
  sfx, tone, setSound, ICON, mountBar, refreshBar,
  openModal, closeModal, onAct, isModalOpen: () => modalOpen,
  toast, burst, confetti, copyText
};
})();
