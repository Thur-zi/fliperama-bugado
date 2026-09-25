# CLAUDE.md

Este arquivo orienta o Claude Code (claude.ai/code) a trabalhar neste repositório.

## O que é

**Fliperama Bugado** é um site estático (HTML/CSS/JS puro, sem build e sem dependências) com 12 joguinhos diários em português do Brasil, chamados de "cartuchos": Sudoku, Termo, Conexo, Contexto, Soletra, Ponte, Pokémon, Dragon Ball, Relâmpago, Mais ou Menos, Forca Bugada e Memória. Todos compartilham o mesmo perfil (XP, nível, título, sequência de dias) salvo no `localStorage`, e o **Bugado**, um mascote cartoon que comenta cada jogada com milhares de falas que quase nunca se repetem. O projeto nasceu como um Sudoku de arquivo único (repo antigo `sudoku-bugado`) e virou fliperama. É projeto de fã, sem fins lucrativos. Publicado em https://thur-zi.github.io/fliperama-bugado/.

O dono (Thur) usa Windows/PowerShell. Todo texto de interface, comentário de código e mensagem de commit é em pt-BR.

## Rodar, versionar, publicar

- **Servir localmente** (obrigatório: Contexto e Ponte usam `fetch` para `contexto/vetores.bin`, que não funciona via `file://`):
  `powershell -ExecutionPolicy Bypass -File serve.ps1` (porta padrão 5178, aceita outra como argumento) e abre http://localhost:5178/.
  O `serve.ps1` responde com `Cache-Control: no-store`. O `.claude/launch.json` já tem a configuração `fliperama` (porta 5178) pro preview do Claude.
  Sem PowerShell (Linux/mac), qualquer servidor estático na raiz funciona (ex.: `python3 -m http.server 5178`), mas aí o navegador pode cachear.
- **Antes de publicar:** `powershell -ExecutionPolicy Bypass -File versao.ps1`. Ele troca todo `?v=<números>` em `index.html` da raiz e das pastas de jogo (profundidade 1) por um carimbo `yyMMddHHmm`. Só pega o que já tem `?v=`.
- **Publicar:** GitHub Pages servindo os arquivos da branch `main` como estão. Não há workflow, build nem teste automatizado no repo.
- **Regerar dados do Soletra** (raro): `powershell -ExecutionPolicy Bypass -File soletra\build-soletra.ps1`. Precisa de `.cache/lexico.txt` e `.cache/icf.txt` (do fserb/pt-br), que estão no `.gitignore` e não vêm no repo. Lê também `contexto/vocab.js`, `soletra/bloqueio.txt` e `soletra/proibidas.txt`. Gera `soletra/aceitas.js` e `soletra/puzzles.js`.
- Não existe lint nem suíte de testes. Validar = abrir no navegador servido, em largura de celular (360 px) e de desktop.

## Arquitetura

```
index.html            home (hub): lista de cartuchos, painel "Diários de hoje", perfil
shared/base.css       visual inteiro: tokens de cor/fonte, botões, barra, mascote, balão, modal, toast
shared/bugado.js      núcleo: window.Bugado (perfil/XP, falas, mascote, sons, modal, utilidades)
shared/falas.js       window.FALAS: falas gerais do Bugado (aleatorio, parado, cutucar, levelup...)
<jogo>/index.html     página do jogo: <style> e <script> inline com toda a lógica
<jogo>/falas-<jogo>.js falas específicas do jogo
<jogo>/<dados>.js     dados como window.GLOBAL (palavras, puzzles, pokedex...)
VOZ.md                guia de tom de voz do Bugado (ler antes de escrever qualquer texto)
serve.ps1 / versao.ps1
```

Exceção: no Conexo a lógica fica em `conexo/conexo.js`, não inline.

**Dados compartilhados entre jogos** (carregados por caminho relativo `../`):
- `pokemon/pokedex.js` (`window.POKEDEX`, 1025 linhas `[num, nome, geração, tipo1, tipo2, altura, peso, cor, estágio]`) é usado por Pokémon, Relâmpago, Mais ou Menos, Forca e Memória. Imagens vêm do repo PokeAPI/sprites no raw.githubusercontent (arte oficial, com sprite como reserva).
- `dragonball/personagens.js` (`window.DB_CHARS`, 123 personagens com `img`, `img2` de reserva da wiki e `render`) é usado por Dragon Ball, Relâmpago, Mais ou Menos, Forca e Memória.
- `contexto/vocab.js` (`window.CTX_VOCAB`, 16 mil palavras) + `contexto/vetores.bin` (16000 × 300 int8, fastText quantizado, 4,8 MB) são usados por Contexto e Ponte. O binário é cacheado na Cache Storage `fliperama-contexto` com chave = hash do vocabulário.
- `contexto/segredos.js` e `conexo/puzzles.js` também alimentam a Forca.
- `ponte/pares.js` foi gerado e conferido offline com os vetores reais (o script não está no repo). Se mudar vocab/vetores, os pares podem ficar inválidos.

**Como um cartucho é montado** (padrão seguido por todos):
1. `<head>` igual em todos: charset, viewport com `viewport-fit=cover`, `theme-color #2A1650`, `<title>Nome · Fliperama Bugado</title>`, description, Google Fonts (Bangers, Lilita One, Nunito 600/800/900) e `../shared/base.css?v=...`.
2. Corpo: `.wrap` com `<header id="bar">`, `<div id="mascot">`, a área do jogo e um `.burst` (texto de gibi).
3. Scripts nessa ordem, todos com `?v=`: `../shared/falas.js`, `../shared/bugado.js`, arquivos de dados, `falas-<jogo>.js`, e o `<script>` inline numa IIFE com `const B = Bugado`.
4. Na inicialização: `B.mountBar(el, {title, color, buttons})` (botões de estatística, ajuda e novo jogo via `B.ICON`), `B.mountMascot(el, {pokeCat:'cutucar<Jogo>'})`, `B.setStack(matchMedia('(min-width:880px)').matches)` (no desktop o balão fica embaixo do mascote) e `B.chatter({active, idleCat, randomCat, every, idleAfter})`.
5. Estado: `B.game('<id>')` devolve o objeto do jogo dentro do perfil global (e marca esse jogo como "desta aba"). A partida em andamento fica em chaves próprias `fliperama.<id>.*` via `B.store` (o Sudoku usa a chave legada `bugado.game`).
6. Diário: `B.dayNumber()` (dias desde 1/1/2026, no horário local) escolhe o desafio com uma permutação fixa (`B.shuffle(lista, B.rng(semente))`). Ao terminar, grava `G.lastDaily = { day, won, ... }`, chama `B.registerWin(id)` se ganhou, `B.gainXP(n)` e `B.saveProfile()`. Só a primeira partida do dia vale como oficial. Modos infinitos/treino dão menos XP (geralmente metade).
7. Compartilhar: `B.copyText()` com texto no formato `Fliperama Bugado · <Jogo> #<dia>` + resumo (emoji pode aqui) + URL.

**API do núcleo (`window.Bugado`)**: `store`, `dayNumber`, `dayKey`, `rng`, `shuffle`, `normalize` (tira acento), `fill`, `fmtTime`; perfil: `profile`, `saveProfile`, `game`, `peekGame` (só leitura), `syncProfile`, `levelInfo`, `titleOf`, `streakNow`, `gainXP`, `registerWin`; falas: `line`, `talk`, `say`, `addLines`, `extendLines`, `lines`; mascote: `mountMascot`, `setStack`, `mood`, `glitch`, `chatter`, `idle`; UI: `mountBar`, `refreshBar`, `openModal`, `closeModal`, `onAct`, `isModalOpen`, `toast`, `burst`, `confetti`, `copyText`; som: `sfx`, `tone`, `setSound`; `ICON`; `RM` (prefers-reduced-motion).

- Perfil em `fliperama.profile`: `{ xp, sound, streak, lastWin, seen, games:{<id>:{...}} }`. Nível começa pedindo 120 XP e cada nível pede 20% a mais. 10 títulos, de "Estagiário do Fliperama" a "Isso Não Existe". Sequência = ganhou algo hoje e ontem.
- Várias abas: `saveProfile()` junta com o que outras abas gravaram (XP soma a diferença, jogos não tocados vêm do storage). Por isso a home e leituras de outros jogos usam `peekGame`, nunca `game`.
- Falas sem repetição: `fliperama.used` guarda hashes das falas já sorteadas por categoria. Só repete quando esgota a categoria.
- Modal: `B.openModal(html)`; botões com `data-act="close"` fecham, outros chamam o handler de `B.onAct(nome, fn)`.
- "Zerar tudo" na home apaga todas as chaves `fliperama.*` e `bugado.*`.

**Home (`index.html`)**: array `GAMES` (id, href, name, color, daily, tag, art em SVG inline 80×80) e `SECTIONS` (Palavras / Pokémon & Anime / Clássicos). O painel "DIÁRIOS DE HOJE" conta os jogos com `daily:true` cujo `peekGame(id).lastDaily.day === B.dayNumber()`. Cada cartucho mostra "diário novo/feito/perdido", nº de vitórias e o selo "NOVO!" se o jogo nunca foi aberto. Passar o mouse/foco num cartucho faz o Bugado falar da categoria `hub<Jogo>` (mapa `CAT`). Aceita `locked:true` ("em breve"). A home tem polyfill pra `peekGame`/`syncProfile` caso o núcleo antigo venha do cache.

## Convenções

- **Código**: JS vanilla em IIFE, estilo compacto (linhas longas, `const`, arrow functions, template strings), nada de framework, bundler ou módulo ES. CSS de cada jogo inline no `<style>` da página, reaproveitando tokens de `base.css`. Comentários curtos em pt-BR explicando o porquê. Arquivos em UTF-8 sem BOM.
- **Cache/versão**: todo `<script src>` e `<link>` local leva `?v=<número>` (hoje `2609242000`). Arquivo novo entra já com `?v=`, senão o `versao.ps1` não enxerga. Rodar `versao.ps1` antes de cada push.
- **Falas**: cada jogo usa um prefixo de categoria (`sd`, `termo`, `cx`, `ctx`, `sol`, `pn`, `pk`, `db`, `rl`, `mm`, `forca`, `mem`, e `hub` na home). `B.addLines({cat:[...]})` cria/substitui categorias. `B.extendLines({aleatorio:[...], parado:[...]})` soma a categorias que já existem (use essa pra não apagar as falas gerais). Variáveis `{n}`, `{palavra}`, `{nome}`... via `B.line(cat, vars)`. As falas são HTML: `<b>` destaca, `<br>` quebra linha.
- **Tom de voz**: ler `VOZ.md` antes de escrever qualquer texto de tela ou fala. Resumo: o Bugado fala igual o Thur no X, zoeira de resenha de BH (Barreiro, cruzeirense). Frase curta (3 a 15 palavras), minúscula, gíria sem forçar (mano, namoral, papo reto, tá maluco, mds, uai, sla, cê, pq), risada KKKKKK e CAPS esticado só às vezes (umas 1 em 6), exagero absurdo ("700 séculos", "nem o 330 às 18h"), referências de Cruzeiro, ônibus de BH, anime, Pokémon, DB de vez em quando. **Proibido**: travessão (—), reticências de um caractere (…), aspas curvas, emoji nas falas, os tiques de IA listados no VOZ.md ("Mentira.", "Plot twist:", "Não é X, é Y", trio de frases curtas, frase de coach). Textos de ajuda/modal podem ser mais explicativos, mas no mesmo jeito solto.
- **Identidade visual** (tudo em `shared/base.css`): só tema escuro. Fundo roxo `--night #2A1650` com bolinhas e brilhos rosa/ciano; tinta `--ink #1B1030`; papel `--paper #FFF7E6`; destaques `--sun #FFD23F`, `--pink #FF4F9A`, `--cyan #2EE6D6`, `--violet #5B3DF5`, `--red`, `--green`, `--orange`. Fontes: Bangers (`--display`, títulos), Lilita One (`--chunky`, números/botões), Nunito 800 (`--body`). Estilo cartoon/adesivo: contorno grosso da cor da tinta, sombra sólida deslocada, botões que "afundam" no `:active`, leve rotação. Cada jogo tem sua cor (usada na barra e no cartucho da home).
- **Mascote**: SVG inline no `bugado.js`, bicho ciano de orelhas pontudas (miolo rosa), olhões com íris violeta e pixels rosa/amarelo piscando ao lado. Humores: neutral, talk, smug, happy, shock, dead, sleep. Clicar nele ("cutucar") faz ele reagir.
- **Qualidade**: celular primeiro (360 px sem rolagem horizontal, `overflow-x:clip` já está no base), área de toque de pelo menos ~40 px, texto nunca menor que 12 px, `env(safe-area-inset-*)`, balão com `aria-live`, `aria-label` nos botões de ícone, `:focus-visible`, atalhos de teclado no PC, e respeitar `prefers-reduced-motion` (`B.RM`).

## Adicionar um jogo novo

1. Escolher um `id` curto em minúsculas e sem acento (ex.: `cruzadinha`), uma cor e um prefixo de falas.
2. Criar `<id>/index.html` copiando o `<head>` e o esqueleto de um jogo parecido (Sudoku é o mais completo; Conexo mostra lógica em arquivo separado). Todas as URLs locais com `?v=`.
3. Criar `<id>/falas-<id>.js` seguindo o VOZ.md: chegada, retorno, acerto, erro, vitória, derrota, dica, parado, `cutucar<Id>`, e `extendLines` para `aleatorio`/`parado` temáticos.
4. Dados em `<id>/<dados>.js` como `window.ALGO = ...`. Reaproveitar pokedex, personagens, vocab/vetores, puzzles do Conexo quando der.
5. No script: `mountBar`, `mountMascot`, `setStack` com `matchMedia('(min-width:880px)')`, `chatter`, `const G = B.game('<id>')`, estado salvo em `fliperama.<id>.*`, modal de ajuda (abre sozinho ou pulsa o botão `?` na primeira visita, usando `B.profile().seen` ou `G.seenHelp`), modal de estatística, diário com `dayNumber` + `rng`, `G.lastDaily`, `registerWin`, `gainXP`, `copyText`.
6. Na home: adicionar em `GAMES` (tag curta na voz do Bugado + arte SVG 80×80), em `SECTIONS`, no mapa `CAT` e as falas `hub<Id>` no `B.addLines` da home.
7. Atualizar a tabela de cartuchos no `README.md` (e os créditos, se usar dado de terceiros).
8. Rodar `versao.ps1`, servir com `serve.ps1` e testar: 360 px, desktop, diário de hoje contando no painel da home, duas abas abertas ao mesmo tempo, recarregar no meio da partida.

## Armadilhas conhecidas (do histórico)

- **`[hidden]` fora do preview do Claude** (commit fd0b049): no preview parecia tudo certo, mas no navegador de verdade o modal vazio aparecia por cima, porque um `display:grid/flex` do autor vence o `display:none` do atributo `hidden`. O `base.css` tem `[hidden]{display:none!important}`: não remover, e toda página nova carrega o `base.css`. Sempre conferir num navegador normal, não só no preview.
- **Cache misturado** (commit 9ba1e07): o GitHub Pages cacheia, e página nova com `bugado.js` velho quebrava. Por isso existe o `?v=` + `versao.ps1`. Ao adicionar método novo no núcleo e usar na home, pensar em quem ainda tem o núcleo antigo (a home já faz fallback de `peekGame`/`syncProfile`).
- `vetores.bin` não usa `?v=`: fica na Cache Storage com chave = hash do `vocab.js`. Trocar os vetores sem mudar o vocabulário deixa todo mundo com o binário antigo.
- **Nome de classe colidindo com o `base.css`**: no Relâmpago uma classe local `.sun` batia com `.pill.sun` e cobria a tela de amarelo (virou `.rays`). Antes de criar classe no CSS do jogo, conferir se ela já existe no `base.css` (`.sun`, `.pink`, `.pill`, `.chip`, `.stat`, `.btn`, `.tag2`, `.burst`...).
- **Várias abas**: escrever só com `B.game(id)` do próprio jogo. Ler de outro jogo com `B.peekGame(id)`, senão uma aba apaga o progresso da outra.
- **Falas**: `addLines` numa categoria que já existe substitui tudo (use `extendLines`). Editar o texto de uma fala muda o hash dela (conta como fala nova no sorteio).
- **Balão do mascote**: altura fixa por jogo, pra layout não pular. Fala comprida demais encolhe até 11 px (`fitBubble`). Mantenha falas curtas e teste as mais longas no celular.
- **Silhueta de Dragon Ball**: só personagem com `render:true` (recorte com fundo transparente). Print com fundo vira um retângulo preto.
- **Imagens externas** (PokeAPI no GitHub raw, dragonball-api.com, wiki do Fandom) podem falhar. Todo `<img>` tem `onerror` com reserva (`img2`/sprite) e depois some sem ícone quebrado. Manter esse padrão.
- **Celular**: a revisão de design (commit b9e066e) consertou título cortado na barra em 360 px, botões pequenos, textos de 10 a 11 px, tabela do Dragon Ball (virou cartões no celular). Não reintroduzir.
- Abrir o HTML direto (`file://`) quebra Contexto e Ponte: usar sempre o servidor.
