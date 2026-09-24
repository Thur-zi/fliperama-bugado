/* ==========================================================
   Conexo: ache os 4 grupos escondidos entre 16 palavras.
   Diário (igual pra todo mundo) + Infinito (puzzle não jogado).
   ========================================================== */
(() => {
const B = window.Bugado;
const ALL = window.CONEXO || [];
const N = ALL.length;
const EMOJI = { 1:'🟨', 2:'🟩', 3:'🟦', 4:'🟪' };
const LEVEL_NAME = { 1:'amarelo', 2:'verde', 3:'azul', 4:'roxo' };
const BURST_COLOR = { 1:'#FFD23F', 2:'#3DDC84', 3:'#4FA8FF', 4:'#C07BFF' };
const DKEY = 'fliperama.conexo.daily', IKEY = 'fliperama.conexo.inf', PKEY = 'fliperama.conexo.played', MKEY = 'fliperama.conexo.mode';
const $ = id => document.getElementById(id);
const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;' }[c]));
const pick = arr => arr[Math.floor(Math.random() * arr.length)];

/* ---------- falas misturadas (gerais + do Conexo) ---------- */
const F = window.FALAS || {}, X = window.CX_ALL || {};
B.addLines({
  cxMixAleatorio: [...(F.aleatorio || []), ...(X.cxAleatorio || [])],
  cxMixParado: [...(F.parado || []), ...(X.cxParado || [])]
});
let lastTalk = 0;
function talk(cat, vars, mood = 'talk', hold){ lastTalk = Date.now(); B.talk(cat, vars, mood, hold); }
function sayRaw(html, mood = 'talk', hold){ lastTalk = Date.now(); B.say(html, mood, hold); }

/* ---------- qual puzzle ---------- */
const today = B.dayNumber();
const PERM = B.shuffle([...Array(N).keys()], B.rng(20260101));
const dailyIdx = d => PERM[((d % N) + N) % N];

function fresh(idx, seed){
  const words = ALL[idx].grupos.flatMap(g => g.palavras);
  const r = seed != null ? B.rng(seed) : Math.random;
  return { idx, order: B.shuffle(words.slice(), r), solved: [], revealed: [], attempts: [], tried: [], mistakes: 0, found: 0, done: false, won: false, xp: 0 };
}
function valid(s){
  if (!s || !ALL[s.idx] || !Array.isArray(s.order) || !Array.isArray(s.solved)) return false;
  const words = new Set(ALL[s.idx].grupos.flatMap(g => g.palavras));
  return s.order.every(w => words.has(w)) && s.order.length + s.solved.length * 4 === 16;
}
function loadDaily(){
  let s = B.store.get(DKEY);
  if (!valid(s) || s.day !== today || s.idx !== dailyIdx(today)){ s = fresh(dailyIdx(today), today * 7919 + 13); s.day = today; B.store.set(DKEY, s); }
  return s;
}
function played(){ return B.store.get(PKEY) || []; }
function markPlayed(idx){ const p = played(); if (!p.includes(idx)){ p.push(idx); B.store.set(PKEY, p); } }
function pickInf(except){
  // evita o diário de hoje e dos próximos 3 dias, pra não estragar surpresa
  const avoid = new Set([0, 1, 2, 3].map(k => dailyIdx(today + k)));
  if (except != null) avoid.add(except);
  let p = played();
  let pool = [...Array(N).keys()].filter(i => !p.includes(i) && !avoid.has(i));
  if (!pool.length){ B.store.set(PKEY, []); pool = [...Array(N).keys()].filter(i => !avoid.has(i)); }
  if (!pool.length) pool = [...Array(N).keys()];
  return pick(pool);
}
function loadInf(){
  let s = B.store.get(IKEY);
  if (!valid(s) || s.day != null){ s = fresh(pickInf()); B.store.set(IKEY, s); }
  return s;
}

let SD = loadDaily(), SI = loadInf();
let mode = (SD.done && B.store.get(MKEY) === 'inf') ? 'inf' : 'daily';
let S = mode === 'daily' ? SD : SI;
let gmap = {};                 // palavra -> índice do grupo
let sel = [];                  // palavras selecionadas (ordem do clique)
let busy = false;
let shuffles = 0, toggles = 0, saidIndeciso = false, combo = 0, perWord = {};

function save(){ B.store.set(mode === 'daily' ? DKEY : IKEY, S); }
function buildMap(){ gmap = {}; ALL[S.idx].grupos.forEach((g, i) => g.palavras.forEach(w => { gmap[w] = i; })); }
function resetCounters(){ shuffles = 0; toggles = 0; saidIndeciso = false; combo = 0; perWord = {}; }
const livesLeft = () => 4 - S.mistakes;

/* ---------- desenho ---------- */
const board = $('board');
const HEART = '<svg class="heart" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21s-7.5-4.6-9.5-9.3C1 8 3.4 4.5 7 4.5c2 0 3.6 1.1 5 3 1.4-1.9 3-3 5-3 3.6 0 6 3.5 4.5 7.2C19.5 16.4 12 21 12 21z"/></svg>';

function render(anim){
  const P = ALL[S.idx];
  board.innerHTML = '';
  S.solved.forEach(gi => {
    const g = P.grupos[gi], d = document.createElement('div');
    d.className = `solved l${g.nivel}` + (S.revealed.includes(gi) ? ' revealed' : '') + (anim === gi ? ' in' : '');
    d.setAttribute('role', 'group');
    d.setAttribute('aria-label', `Grupo ${LEVEL_NAME[g.nivel]}: ${g.tema}. ${g.palavras.join(', ')}`);
    d.innerHTML = `<b>${esc(g.tema)}</b><span>${g.palavras.map(esc).join(' · ')}</span>`;
    board.appendChild(d);
  });
  S.order.forEach((w, k) => {
    const b = document.createElement('button');
    b.type = 'button'; b.dataset.w = w;
    b.className = 'tile' + (sel.includes(w) ? ' sel' : '') + (anim === 'enter' ? ' enter' : '');
    if (anim === 'enter') b.style.animationDelay = (k * 18) + 'ms';
    b.setAttribute('aria-pressed', sel.includes(w) ? 'true' : 'false');
    b.innerHTML = `<span class="w">${esc(w)}</span>`;
    board.appendChild(b);
  });
  fitAll(); renderLives(); renderControls();
}
function renderLives(breaking){
  const el = $('lives'); const left = livesLeft();
  el.setAttribute('aria-label', `Vidas: ${left} de 4`);
  el.innerHTML = '<span class="lbl">VIDAS</span>' + [0, 1, 2, 3].map(i => HEART.replace('class="heart"', `class="heart${i >= left ? ' lost' : ''}${breaking && i === left ? ' breaking' : ''}"`)).join('');
}
function renderControls(){
  const done = S.done;
  $('actPlay').hidden = done; $('actPost').hidden = !done;
  $('bSubmit').disabled = sel.length !== 4 || busy;
  $('bClear').disabled = !sel.length || busy;
  $('bShuffle').disabled = busy;
  $('selCount').textContent = `${sel.length}/4`;
  $('bNext').textContent = mode === 'daily' ? 'Jogar Infinito' : 'Próximo puzzle';
  $('tabDaily').classList.toggle('on', mode === 'daily'); $('tabDaily').setAttribute('aria-selected', mode === 'daily');
  $('tabInf').classList.toggle('on', mode === 'inf'); $('tabInf').setAttribute('aria-selected', mode === 'inf');
  $('dayNo').innerHTML = `#${today}` + (SD.done ? '<i class="done-dot" title="Diário feito"></i>' : '');
  const h = $('hint');
  if (!done) h.innerHTML = S.solved.length ? `Falta${S.solved.length === 3 ? '' : 'm'} <b>${4 - S.solved.length}</b> grupo${S.solved.length === 3 ? '' : 's'}` : 'Acha <b>4 grupos</b> de 4 palavras que têm algo em comum';
  else if (mode === 'daily') h.innerHTML = S.won ? 'Diário de hoje <b>feito!</b> Amanhã tem outro' : 'Perdeu o de hoje. Amanhã tem revanche';
  else h.innerHTML = S.won ? 'Resolvido! Bora pro <b>próximo</b>?' : 'Esse não foi, bora pro próximo';
}

/* palavras sempre cabem: diminui a fonte até caber (até 2 linhas).
   Palavra comprida que ficaria miúda numa linha só quebra em duas com hífen (MORAN-GUINHO). */
const VOW = /[AEIOUYÁÉÍÓÚÂÊÔÃÕÀÜ]/;
function hyphenAt(word){
  // ponto de quebra perto do meio: antes de consoante+vogal, sem separar CH/LH/NH nem BR/CL etc.
  let best = -1, bd = 99;
  for (let i = 3; i <= word.length - 3; i++){
    if (VOW.test(word[i]) || !VOW.test(word[i + 1])) continue;
    let j = i;
    if (word[i] === 'H' && /[CLNPT]/.test(word[i - 1])) j = i - 1;
    else if (/[RL]/.test(word[i]) && /[BCDFGKPTV]/.test(word[i - 1])) j = i - 1;
    const d = Math.abs(j - word.length / 2);
    if (j >= 3 && word.length - j >= 3 && d < bd){ bd = d; best = j; }
  }
  return best;
}
function fitTile(t){
  const w = t.firstElementChild; if (!w) return;
  const word = t.dataset.w || w.textContent, base = innerWidth >= 880 ? 20 : 17, ch = t.clientHeight - 8;
  const fit = () => {
    let fs = base, guard = 0; w.style.fontSize = fs + 'px';
    while (fs > 8.5 && (w.scrollWidth > w.clientWidth + .5 || w.offsetHeight > ch) && guard++ < 40){ fs -= .5; w.style.fontSize = fs + 'px'; }
    return fs;
  };
  w.textContent = word;
  w.style.letterSpacing = word.length >= 9 ? '-.02em' : '';
  let fs = fit();
  const cut = !/\s/.test(word) && fs < 12.5 ? hyphenAt(word) : -1;
  if (cut > 0){
    w.innerHTML = `${esc(word.slice(0, cut))}-<br>${esc(word.slice(cut))}`;
    const fs2 = fit();
    if (fs2 >= fs + 2) t.setAttribute('aria-label', word);
    else { w.textContent = word; fit(); }
  }
}
function fitBar(d){
  const b = d.querySelector('b'), s = d.querySelector('span'); if (!b || !s) return;
  const wide = innerWidth >= 880; let fb = wide ? 24 : 20, fsz = wide ? 14.5 : 13, guard = 0;
  const apply = () => { b.style.fontSize = fb + 'px'; s.style.fontSize = fsz + 'px'; };
  // palavras numa linha só (encolhe até 12px; se nem assim couber, quebra em duas linhas)
  s.style.whiteSpace = 'nowrap'; apply();
  while (s.scrollWidth > s.clientWidth + .5 && fsz > 12 && guard++ < 20){ fsz -= .5; apply(); }
  if (s.scrollWidth > s.clientWidth + .5){ s.style.whiteSpace = 'normal'; fsz = wide ? 14 : 13; apply(); }
  guard = 0;
  while ((b.offsetHeight + s.offsetHeight + 2 > d.clientHeight - 8 || b.scrollWidth > b.clientWidth + .5) && (fb > 13 || fsz > 12) && guard++ < 40){
    fb = Math.max(13, fb - 1); if (fb <= 15) fsz = Math.max(12, fsz - .5); apply();
  }
}
function fitAll(){ board.querySelectorAll('.tile').forEach(fitTile); board.querySelectorAll('.solved').forEach(fitBar); }
let fitT; new ResizeObserver(() => { clearTimeout(fitT); fitT = setTimeout(fitAll, 60); }).observe(board);
if (document.fonts && document.fonts.ready) document.fonts.ready.then(fitAll);

function burst(text, color){ B.burst($('burst'), text, color); }
function tilesOf(words){ return words.map(w => board.querySelector(`.tile[data-w="${CSS.escape(w)}"]`)).filter(Boolean); }
function animate(els, cls, stagger = 0){ els.forEach((el, i) => { el.classList.remove(cls); el.style.animationDelay = (i * stagger) + 'ms'; void el.offsetWidth; el.classList.add(cls); }); }
// duas palavras da jogada, pra citar nas falas
function two(words){ const w = B.shuffle(words.slice()); return { a: w[0] || '', b: w[1] || w[0] || '' }; }

/* ---------- jogadas ---------- */
function toggle(w, t){
  if (busy || S.done) return;
  const i = sel.indexOf(w);
  if (i >= 0){ sel.splice(i, 1); B.sfx.tap(); }
  else if (sel.length < 4){ sel.push(w); B.sfx.place(sel.length * 2); }
  else { B.sfx.meh(); animate([t], 'shake'); return; }
  t.classList.toggle('sel', sel.includes(w)); t.setAttribute('aria-pressed', sel.includes(w) ? 'true' : 'false');
  animate([t], 'pop');
  renderControls();
  toggles++; perWord[w] = (perWord[w] || 0) + 1;
  if (toggles >= 12 && !saidIndeciso && Date.now() - lastTalk > 4000){
    saidIndeciso = true;
    const most = Object.keys(perWord).sort((a, b) => perWord[b] - perWord[a])[0];
    talk('cxIndeciso', { n: toggles, a: most }, 'smug', 5500);
  } else if (sel.length === 4 && i < 0 && Math.random() < .22 && Date.now() - lastTalk > 9000){
    talk('cxPronto', two(sel), 'smug', 4500);
  }
}

function submit(){
  if (busy || S.done || sel.length !== 4) return;
  const P = ALL[S.idx];
  const key = sel.slice().sort().join('|');
  const tw = two(sel);
  toggles = 0; saidIndeciso = false; perWord = {};
  if (S.tried.includes(key)){
    B.sfx.meh(); animate(tilesOf(sel), 'shake');
    B.toast('Já tentou essa', 'Repetir não gasta vida, só a dignidade');
    talk('cxRepetido', tw, 'smug', 6000);
    return;
  }
  const gis = sel.map(w => gmap[w]);
  const counts = {}; gis.forEach(g => { counts[g] = (counts[g] || 0) + 1; });
  const best = Math.max(...Object.values(counts));
  S.attempts.push(gis.map(g => P.grupos[g].nivel));
  if (best === 4) correct(gis[0]); else wrong(best, key, tw);
}

function correct(gi){
  const P = ALL[S.idx], g = P.grupos[gi];
  busy = true; renderControls();
  const els = tilesOf(sel);
  animate(els, 'hop', 70);
  B.sfx.unit(); combo++;
  setTimeout(() => {
    animate(els, 'gone', 40);
    setTimeout(() => {
      S.order = S.order.filter(w => !g.palavras.includes(w));
      S.solved.push(gi); S.found = S.solved.length; sel = [];
      busy = false; save(); render(gi);
      burst(g.nivel === 4 ? 'PEGADINHA!' : pick(['ISSO!', 'BOA!', 'ACHOU!', 'AÍ SIM!', 'NA MOSCA!']), BURST_COLOR[g.nivel]);
      if (S.solved.length === 4) return win();
      if (S.solved.length === 1 && g.nivel === 4) talk('cxRoxoPrimeiro', { grupo: g.tema }, 'shock', 6500);
      else if (combo >= 3 && Math.random() < .5) talk('cxCombo', { n: combo }, 'happy', 5000);
      else talk('cxAcerto' + g.nivel, { grupo: g.tema }, g.nivel >= 3 ? 'happy' : 'smug', 5500);
    }, 330);
  }, 480);
}

function wrong(best, key, tw){
  S.tried.push(key); S.mistakes++; combo = 0;
  const left = livesLeft();
  B.sfx.err(); B.glitch();
  animate(tilesOf(sel), 'shake');
  renderLives(true); save();
  if (left <= 0) return lose();
  if (best === 3){ B.toast('Quase! Faltou 1', '3 dessas são do mesmo grupo'); burst('QUASE!', '#FF4F9A'); }
  else burst(pick(['ERROU!', 'NÃO!', 'EITA!', 'XIII!']), '#FF3B3B');
  if (left === 1) talk('cxUltimaVida', tw, 'shock', 6500);
  else if (best === 3) talk('cxQuase', tw, 'shock', 6000);
  else if (left === 2 && Math.random() < .4) talk('cxDuasVidas', tw, 'smug', 6000);
  else talk(best === 2 ? 'cxErrou' : 'cxErrouFeio', tw, 'smug', 6500);
  renderControls();
}

function lose(){
  const P = ALL[S.idx];
  busy = true; S.found = S.solved.length; sel = [];
  B.sfx.lose(); burst('GAME OVER', '#FF4F9A');
  talk('cxPerdeu', null, 'dead', 9000);
  const rest = P.grupos.map((g, i) => i).filter(i => !S.solved.includes(i)).sort((a, b) => P.grupos[a].nivel - P.grupos[b].nivel);
  let k = 0;
  (function next(){
    if (k >= rest.length){ busy = false; finish(false); setTimeout(openResult, 900); return; }
    const gi = rest[k++];
    S.order = S.order.filter(w => !P.grupos[gi].palavras.includes(w));
    S.solved.push(gi); S.revealed.push(gi);
    render(gi); B.sfx.flip();
    setTimeout(next, 850);
  })();
}

function win(){
  busy = true;
  B.sfx.win(); B.confetti();
  const perfect = S.mistakes === 0;
  setTimeout(() => burst(perfect ? 'PERFEITO!' : 'VITÓRIA!', '#FFD23F'), 350);
  if (perfect) talk('cxGanhouPerfeito', null, 'happy', 8000);
  else if (S.mistakes === 3) talk('cxGanhouSuado', null, 'happy', 8000);
  else talk('cxGanhou', { n: S.mistakes }, 'happy', 8000);
  finish(true);
  setTimeout(() => { busy = false; renderControls(); openResult(); }, 1800);
}

function finish(won){
  S.done = true; S.won = won;
  const g = B.game('conexo');
  g.played = (g.played || 0) + 1;
  g.dist = Object.assign({ 0:0, 1:0, 2:0, 3:0, x:0 }, g.dist || {});
  if (won){
    g.dist[S.mistakes]++; g.streak = (g.streak || 0) + 1; g.bestStreak = Math.max(g.bestStreak || 0, g.streak);
    if (!S.mistakes) g.perfect = (g.perfect || 0) + 1;
  } else { g.dist.x++; g.streak = 0; }
  if (mode === 'daily'){ g.lastDaily = { day: today, won }; g.dailyPlayed = (g.dailyPlayed || 0) + 1; }
  else g.infPlayed = (g.infPlayed || 0) + 1;
  B.saveProfile();
  markPlayed(S.idx);
  S.xp = won ? 40 + 10 * livesLeft() + (S.mistakes === 0 ? 25 : 0) : 5 * S.found;
  if (won) B.registerWin('conexo');
  if (S.xp) B.gainXP(S.xp);
  save(); renderControls();
}

function shuffleBoard(){
  if (busy || S.done) return;
  S.order = B.shuffle(S.order.slice()); save(); render('enter');
  B.sfx.flip(); shuffles++;
  if (shuffles >= 6 && shuffles % 3 === 0) talk('cxEmbaralharMuito', { n: shuffles }, 'shock', 5500);
  else if (Math.random() < .6 && Date.now() - lastTalk > 2500) talk('cxEmbaralhar', two(S.order), 'smug', 5000);
}
function clearSel(){
  if (busy || S.done || !sel.length) return;
  animate(tilesOf(sel), 'pop'); sel = [];
  board.querySelectorAll('.tile.sel').forEach(t => { t.classList.remove('sel'); t.setAttribute('aria-pressed', 'false'); });
  B.sfx.meh(); renderControls();
  if (Math.random() < .55 && Date.now() - lastTalk > 3000) talk('cxDesmarcar', null, 'smug', 4500);
}

/* ---------- resultado / compartilhar ---------- */
function shareText(){
  const head = mode === 'daily' ? `Fliperama Bugado · Conexo #${S.day}` : `Fliperama Bugado · Conexo Infinito #${S.idx + 1}`;
  const tail = S.won ? (S.mistakes ? `Venci com ${S.mistakes} erro${S.mistakes > 1 ? 's' : ''}` : 'Zero erro, perfeito') : `Perdi, achei ${S.found} de 4`;
  const rows = S.attempts.map(a => a.map(l => EMOJI[l]).join(''));
  return [head, tail, ...rows, location.origin + location.pathname].join('\n');
}
async function share(){
  const text = shareText();
  if (await B.copyText(text)){ B.toast('Copiado!', 'Cola no grupo e se exibe'); talk('cxCompartilhou', null, 'happy'); return; }
  if (navigator.share){ try { await navigator.share({ text }); return; } catch(e){} }
  const box = document.querySelector('.bg-card #shareBox');
  if (box){ box.hidden = false; box.value = text; box.focus(); box.select(); }
}
function openResult(){
  const P = ALL[S.idx], g = B.game('conexo');
  const title = S.won ? (S.mistakes === 0 ? 'PERFEITO!' : S.mistakes === 3 ? 'NO SUFOCO!' : 'VENCEU!') : 'GAME OVER';
  const label = mode === 'daily' ? `Diário #${S.day}` : `Infinito · puzzle ${S.idx + 1}`;
  const sub = S.won ? (S.mistakes ? `Achou os 4 com ${S.mistakes} erro${S.mistakes === 1 ? '' : 's'}` : 'Achou os 4 sem errar nenhuma') : `Achou ${S.found} de 4 antes de acabar as vidas`;
  const rows = S.attempts.map(a => `<div>${a.map(l => `<i class="l${l}"></i>`).join('')}</div>`).join('');
  const groups = P.grupos.slice().sort((a, b) => a.nivel - b.nivel).map(gr => `<div class="l${gr.nivel}"><b>${esc(gr.tema)}</b>${gr.palavras.map(esc).join(' · ')}</div>`).join('');
  const roxo = P.grupos.find(gr => gr.nivel === 4);
  const quote = S.won ? B.line('vitoriaGeral') : B.line('cxRevelar', { grupo: roxo ? esc(roxo.tema) : '' });
  B.openModal(`<h2 class="big">${title}</h2>
    <p class="sub">${label} · ${sub}</p>
    <div class="grid-emoji" aria-label="Tentativas">${rows}</div>
    <div class="pills"><span class="pill sun">+${S.xp} XP</span><span class="pill">Sequência: ${g.streak || 0}</span>${S.won && !S.mistakes ? '<span class="pill pink">Zero erro</span>' : ''}</div>
    <div class="m-actions res"><button class="btn primary" data-act="share">Compartilhar</button><button class="btn cool" data-act="next">${mode === 'daily' ? 'Jogar Infinito' : 'Próximo puzzle'}</button></div>
    <textarea id="shareBox" hidden readonly rows="6" aria-label="Resultado pra copiar"></textarea>
    ${quote ? `<div class="quote">${quote}</div>` : ''}
    <div class="res-groups">${groups}</div>
    <div class="m-actions"><button class="btn" data-act="close">Fechar</button></div>`);
}
function nextInf(){
  B.closeModal(true);
  if (mode === 'inf' && !SI.done && !busy) return;
  if (SI.done){ SI = fresh(pickInf(SI.idx)); B.store.set(IKEY, SI); }
  setMode('inf', true);
  talk('cxInicioInfinito', null, 'happy');
}
B.onAct('share', share);
B.onAct('next', nextInf);

/* ---------- estatísticas / ajuda ---------- */
function openStats(){
  const g = B.game('conexo');
  const played = g.played || 0, wins = Math.min(g.wins || 0, played);
  const d = Object.assign({ 0:0, 1:0, 2:0, 3:0, x:0 }, g.dist || {});
  const max = Math.max(1, ...Object.values(d));
  const row = (k, lbl) => `<div class="r${k === 'x' ? ' lose' : ''}${S.done && ((S.won && String(S.mistakes) === String(k)) || (!S.won && k === 'x')) ? ' hl' : ''}"><span>${lbl}</span><i style="width:${Math.max(8, d[k] / max * 100)}%">${d[k]}</i></div>`;
  const ld = g.lastDaily && g.lastDaily.day === today ? (g.lastDaily.won ? 'ganhou' : 'perdeu') : 'ainda não jogou';
  B.openModal(`<h2>Tuas estatísticas</h2>
    <p class="sub">Diário de hoje: <b>${ld}</b></p>
    <div class="stat-grid">
      <div class="stat"><b>${played}</b><span>Jogos</span></div>
      <div class="stat"><b>${played ? Math.round(wins / played * 100) : 0}%</b><span>Vitórias</span></div>
      <div class="stat"><b>${g.streak || 0}</b><span>Sequência</span></div>
      <div class="stat"><b>${g.bestStreak || 0}</b><span>Melhor</span></div>
      <div class="stat"><b>${g.perfect || 0}</b><span>Perfeitos</span></div>
    </div>
    <h3>Erros por vitória</h3>
    <div class="dist">${row(0, 'Zero')}${row(1, '1 erro')}${row(2, '2 erros')}${row(3, '3 erros')}${row('x', 'Perdeu')}</div>
    <div class="m-actions">${S.done ? '<button class="btn primary" data-act="share">Compartilhar</button>' : ''}<button class="btn" data-act="close">Fechar</button></div>`);
  talk('cxStats', null, 'smug');
}
function openHelp(){
  B.openModal(`<h2>Como joga o Conexo</h2>
    <p class="sub">São 16 palavras e no meio delas tem <b>4 grupos de 4</b> que têm alguma coisa em comum. Teu trabalho é achar os quatro.</p>
    <h3>Passo a passo</h3>
    <ul>
      <li><span class="tag2">1</span><span>Toca em <b>4 palavras</b> que cê acha que combinam.</span></li>
      <li><span class="tag2">2</span><span>Aperta <b>Enviar</b>. Se acertar, o grupo vira uma faixa colorida lá em cima.</span></li>
      <li><span class="tag2">3</span><span>Errou, perde um coração. São <b>4 vidas</b>. Se 3 das 4 tiverem certas eu aviso: "Quase!"</span></li>
      <li><span class="tag2">4</span><span>Mandar de novo uma combinação que já deu errado <b>não gasta vida</b>. Mas eu vou rir.</span></li>
    </ul>
    <div class="ex"><span class="sel">MANGA</span><span class="sel">UVA</span><span class="sel">CAJU</span><span class="sel">BANANA</span><span class="bar">FRUTAS</span></div>
    <h3>As cores</h3>
    <div class="cx-legend">
      <div><i style="background:var(--g1)"></i><span>Amarelo: o fácil, até teu tio acha</span></div>
      <div><i style="background:var(--g2)"></i><span>Verde: médio, pede um neurônio a mais</span></div>
      <div><i style="background:var(--g3)"></i><span>Azul: difícil, tem armadilha</span></div>
      <div><i style="background:var(--g4)"></i><span>Roxo: a pegadinha. Palavra escondida, "___ de pão", anagrama... maldade pura</span></div>
    </div>
    <h3>Dicas do Bugado</h3>
    <ul>
      <li><span class="tag2" style="--c:var(--pink)">!</span><span>Tem palavra que parece servir em dois grupos. É de propósito, desconfia.</span></li>
      <li><span class="tag2" style="--c:var(--cyan)">?</span><span>Travou? <b>Embaralha</b>. Ver as palavras em outra ordem ajuda de verdade.</span></li>
      <li><span class="tag2">★</span><span><b>Diário</b>: um por dia, igual pra todo mundo. <b>Infinito</b>: quantos cê aguentar.</span></li>
    </ul>
    <div class="m-actions"><button class="btn primary" data-act="close">Bora jogar</button></div>`);
  talk('cxAjuda', null, 'smug');
}

/* ---------- modos ---------- */
function setMode(m, silent){
  if (busy) return;
  mode = m; S = m === 'daily' ? SD : SI;
  B.store.set(MKEY, m);
  sel = []; resetCounters(); buildMap(); render('enter');
  if (!silent) greet();
}
function greet(){
  if (S.done){
    if (mode === 'daily') talk('cxDiarioFeito', null, 'smug', 6000);
    else sayRaw('Esse já foi mano. Aperta <b>Próximo puzzle</b> que eu sorteio outro', 'smug');
  } else talk(mode === 'daily' ? 'cxInicioDiario' : 'cxInicioInfinito', null, 'talk', 6000);
}
$('tabDaily').addEventListener('click', () => { B.sfx.tap(); if (mode !== 'daily') setMode('daily'); });
$('tabInf').addEventListener('click', () => { B.sfx.tap(); if (mode !== 'inf') setMode('inf'); });

/* ---------- controles ---------- */
board.addEventListener('click', e => { const t = e.target.closest('.tile'); if (t) toggle(t.dataset.w, t); });
$('bShuffle').addEventListener('click', shuffleBoard);
$('bClear').addEventListener('click', clearSel);
$('bSubmit').addEventListener('click', submit);
$('bResult').addEventListener('click', () => { B.sfx.tap(); openResult(); });
$('bNext').addEventListener('click', () => { B.sfx.tap(); if (mode === 'daily') setMode('inf'); else nextInf(); });
document.addEventListener('keydown', e => {
  if (B.isModalOpen() || e.ctrlKey || e.metaKey || e.altKey) return;
  const onTile = document.activeElement && document.activeElement.classList.contains('tile');
  if (e.key === 'Enter' && (onTile || !document.activeElement || document.activeElement === document.body)){
    if (sel.length === 4){ e.preventDefault(); submit(); }
  } else if (e.key === 'Escape'){ clearSel(); }
  else if ((e.key === 'e' || e.key === 'E') && !onTile){ shuffleBoard(); }
});

/* ---------- montagem ---------- */
const soundBtn = { id: 'bSound', icon: B.profile().sound ? 'on' : 'off', label: 'Som', onClick: () => {
  B.setSound(!B.profile().sound); document.getElementById('bSound').innerHTML = B.ICON[B.profile().sound ? 'on' : 'off'];
} };
B.mountBar($('bar'), { title: 'Conexo', color: '#FF4F9A', buttons: [
  { icon: 'help', label: 'Como jogar', onClick: openHelp },
  { icon: 'stats', label: 'Estatísticas', onClick: openStats },
  soundBtn
] });
B.mountMascot($('mascot'), { pokeCat: 'cutucarConexo' });
const mq = matchMedia('(min-width:880px)');
const applyStack = () => { B.setStack(mq.matches); setTimeout(fitAll, 30); };
(mq.addEventListener ? mq.addEventListener('change', applyStack) : mq.addListener(applyStack));
applyStack();
/* balão de altura fixa no celular: fala comprida encolhe a letra (até 12px) em vez de empurrar o tabuleiro */
const bubble = document.querySelector('#mascot .bg-bubble'), bubbleP = bubble && bubble.querySelector('p');
function fitBubble(){
  if (!bubbleP) return;
  bubbleP.style.fontSize = ''; bubbleP.style.lineHeight = ''; bubble.classList.remove('grow');
  if (mq.matches) return;
  let fs = parseFloat(getComputedStyle(bubbleP).fontSize), g = 0;
  while (bubbleP.scrollHeight > bubbleP.clientHeight + 1 && fs > 12 && g++ < 8){ fs -= .5; bubbleP.style.fontSize = fs + 'px'; bubbleP.style.lineHeight = '1.2'; }
  if (bubbleP.scrollHeight > bubbleP.clientHeight + 1) bubble.classList.add('grow');
}
if (bubbleP) new MutationObserver(fitBubble).observe(bubbleP, { childList: true, characterData: true, subtree: true });
B.chatter({ active: () => !S.done && !busy && !B.isModalOpen(), idleCat: 'cxMixParado', randomCat: 'cxMixAleatorio' });

buildMap(); render('enter');
setTimeout(greet, 450);
// primeira vez: mostra a ajuda
const g0 = B.game('conexo');
if (!g0.seenHelp){ g0.seenHelp = true; B.saveProfile(); setTimeout(openHelp, 700); }
})();
