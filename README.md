# Fliperama Bugado

Um fliperama de joguinhos diários com o **Bugado**, um mascote sarcástico que comenta cada jogada sua e quase nunca repete fala.

**Jogar:** https://thur-zi.github.io/fliperama-bugado/

## Cartuchos

**Palavras**

| Jogo | O que é |
| --- | --- |
| Termo | A palavra de 5 letras em 6 chutes. Tem Dueto e Quarteto. |
| Conexo | 16 palavras, 4 grupos escondidos. |
| Contexto | A palavra secreta pela proximidade de sentido. |
| Soletra | Colmeia de 7 letras: monta palavras sempre com a letra do meio. |
| Ponte | De uma palavra até outra só por palavras de sentido parecido, com par igual golfe. |

**Pokémon & anime**

| Jogo | O que é |
| --- | --- |
| Pokémon | Quem é esse Pokémon? Compara geração, tipos, altura, peso… |
| Dragon Ball | Quem é esse guerreiro? Raça, saga, poder… |
| Relâmpago | Silhuetas contra o relógio: 60 segundos, 4 opções, combo. |
| Mais ou Menos | Quem é mais pesado, mais alto, mais forte? Sequência até errar. |

**Clássicos**

| Jogo | O que é |
| --- | --- |
| Sudoku | Números de 1 a 9, com lápis, dica que explica o truque e 4 dificuldades (de Bebê a Sofrência). |
| Forca Bugada | Forca em que cada erro apaga um pedaço do mascote. |
| Memória | Pares de Pokémon e Dragon Ball, com fases de evolução, sombra e bagunça. |

Todos têm um desafio **diário** (igual pra todo mundo no dia), e a home mostra quantos você já fez hoje.

O XP é um só pra todos os jogos. Os títulos vão de "Estagiário do Fliperama" até "Isso Não Existe", e ganhar alguma coisa em dias seguidos acende o foguinho de sequência. O progresso fica salvo no navegador (localStorage), separado em cada aparelho.

## Rodar localmente

É um site estático, sem build. Os jogos carregam arquivos com `fetch`, então use o servidorzinho incluso em vez de abrir o HTML direto:

```powershell
powershell -ExecutionPolicy Bypass -File serve.ps1
```

e abra http://localhost:5178/

Antes de subir mudanças pro GitHub, rode `versao.ps1`: ele troca o `?v=` dos arquivos em todas as páginas, pra ninguém pegar página nova com script velho do cache.

## Estrutura

- `shared/base.css`: visual cartoon (cores, botões, modal, mascote)
- `shared/bugado.js`: perfil/XP, mascote, sons, sorteio de falas sem repetição
- `shared/falas.js`: falas gerais do Bugado (cada jogo tem as suas em `falas-*.js`)
- uma pasta por jogo

## Créditos dos dados

- Contexto: vetores de palavras [fastText](https://fasttext.cc/docs/en/crawl-vectors.html) (Facebook, CC BY-SA 3.0), filtrados pelo léxico de [fserb/pt-br](https://github.com/fserb/pt-br).
- Pokémon: dados do Pokémon Showdown e sprites do [PokéAPI](https://github.com/PokeAPI/sprites). Pokémon © Nintendo/Game Freak.
- Dragon Ball: imagens da [Dragon Ball API](https://dragonball-api.com). Dragon Ball © Akira Toriyama/Toei.
- Projeto de fã, sem fins lucrativos.
