/* ==========================================================
   Falas do Bugado para "Quem é esse Pokémon?"
   Variáveis: {pokemon} (nome chutado, ou o secreto nas vitórias),
   {n} (nº de chutes), {tipo}, {geracao}, {cor}.
   Categorias "pk@<id>" = falas de Pokémon específicos (id = nome
   sem acento/pontuação, ex.: "mrmime", "farfetchd").
   Voz: ver VOZ.md na raiz.
   ========================================================== */
(() => {
const F = window.FALAS || {};

/* ---------- Pokémon específicos ---------- */
const ESP = {
  magikarp: [
    "Magikarp usou Splash. nada aconteceu. igual esse chute",
    "chutou Magikarp mano KKKKK nem o Magikarp acredita em si mesmo",
    "Magikarp não. mas respeito, um dia ele vira Gyarados e cê vira gente"
  ],
  psyduck: [
    "Psyduck com a mão na cabeça. mesma cara que eu fiz vendo esse chute",
    "o Psyduck olhou essa tabela e a dor de cabeça dele dobrou",
    "Psyduck não. ele nem sabe onde tá, cê também não pelo visto"
  ],
  snorlax: [
    "Snorlax nem acordou pra dizer que não é ele. tá roncando na tabela",
    "Snorlax tem 460 kg, usa isso pra calibrar a seta de peso pelo menos",
    "chutou Snorlax. deitou no meio da tabela e ninguém tira ele de lá"
  ],
  charizard: [
    "Charizard não uai. e se fosse ele nem ia te obedecer",
    "Charizard: fogo e voador, dragão não. todo mundo erra isso",
    "chutou Charizard pq é o favorito né. aqui não tem favoritismo não"
  ],
  eevee: [
    "Eevee tem oito evoluções e nenhuma decisão. igual esse chute",
    "Eevee não. mas se for uma das evoluções dele eu não conto nada"
  ],
  mewtwo: [
    "Mewtwo leu tua mente e respondeu: não sou eu não, humano",
    "criaram o Mewtwo pra ser o mais forte, não pra ser resposta de diário"
  ],
  mew: [
    "Mew não tava debaixo do caminhão e não tá na resposta também",
    "chutou Mew. ele deu uma risadinha e ficou invisível"
  ],
  gengar: [
    "Gengar não. esse sorrisão aí é dele rindo do teu chute",
    "Gengar é primo distante meu, só que sorri demais. não é ele"
  ],
  jigglypuff: [
    "Jigglypuff não. cuidado que ele canta e cê dorme no meio da partida",
    "chutou Jigglypuff e ele já pegou a caneta pra rabiscar tua cara"
  ],
  ditto: [
    "Ditto pode virar qualquer um, até o secreto. hoje ele é só gosma mesmo",
    "chutou Ditto KKKKK ele copiou até tua cara de dúvida"
  ],
  lucario: [
    "Lucario sente a aura de tudo e mesmo assim não sentiu a resposta",
    "Lucario não mano. o filme dele me quebrou, esse chute também"
  ],
  greninja: [
    "Greninja sumiu na fumaça. não era ele",
    "Greninja: sapo, ninja e errado. três em um"
  ],
  bulbasaur: [
    "Bulbasaur não. o mais injustiçado dos iniciais, e hoje injustiçado de novo",
    "Bulbasaur é escolha de gente sábia. hoje nem tanto"
  ],
  squirtle: [
    "Squirtle não. pode guardar os óculos escuros do Esquadrão",
    "Squirtle usou Bolha. a bolha estourou igual esse chute"
  ],
  charmander: [
    "Charmander não. cuida da chama do rabo dele que esse chute tá apagando",
    "o Damian largou o Charmander na chuva e cê largou ele na tabela. triste"
  ],
  meowth: [
    "Meowth, é isso aí! só que não. errado mano",
    "Meowth aprendeu a falar sozinho e mesmo assim não é a resposta"
  ],
  slowpoke: [
    "Slowpoke vai perceber que não é ele daqui uns 5 segundos",
    "chutou Slowpoke. ele ainda tá processando isso, relaxa"
  ],
  onix: [
    "Onix tem 8,8 metros e só 210 kg. o bicho é oco, não tem outra explicação",
    "Onix não. mas o tamanho dele ajuda a entender a seta de altura"
  ],
  gyarados: [
    "Gyarados é o Magikarp que deu certo na vida. não é ele",
    "Gyarados é água e voador, dragão não. e resposta também não"
  ],
  lapras: [
    "Lapras não. mas te dava carona pra casa se pedisse com jeitinho",
    "Lapras, o ônibus mais confortável de Kanto. melhor que o 330 lotado"
  ],
  dragonite: [
    "Dragonite trouxe a notícia em mãos: não é ele",
    "Dragonite: carinha de pelúcia, bate igual caminhão. errado"
  ],
  togepi: [
    "Togepi não. a Misty carregou esse ovo por umas 80 temporadas",
    "chutou Togepi. toge toge priiii. errado"
  ],
  wobbuffet: [
    "WOBBUFFEEEET. não é ele. ele só sabe revidar",
    "Wobbuffet saiu da Pokébola só pra bater continência. errado"
  ],
  sudowoodo: [
    "Sudowoodo finge que é árvore e é tipo Pedra. esse chute finge que é certo",
    "Sudowoodo não. joga água nele pra ver sair correndo"
  ],
  mimikyu: [
    "Mimikyu só quer ser amado de fantasia de Pikachu. não é ele, coitado",
    "chutou Mimikyu. não levanta o pano dele não, sério"
  ],
  garchomp: [
    "Garchomp não. a Cynthia aprovaria, a tabela não",
    "Garchomp: tubarão dragão a jato. chute rápido e errado"
  ],
  rayquaza: [
    "Rayquaza mora na camada de ozônio. longe da resposta também",
    "Rayquaza desceu do céu só pra dizer que não"
  ],
  arceus: [
    "cê chutou Deus. Deus falou não KKKKK",
    "Arceus criou o universo inteiro e não é o Pokémon de hoje"
  ],
  bidoof: [
    "Bidoof! ele tá feliz só de ser lembrado. deixa ele",
    "Bidoof não. mas respeita o Bidoof que ele é o cara"
  ],
  tauros: [
    "Tauros não. o Ash pegou uns 30 na Zona Safári e nenhum era a resposta",
    "Tauros chutado. tá rodando em volta igual ele na Zona Safári"
  ],
  porygon: [
    "Porygon não. e até hoje ele leva a culpa daquele episódio, injustiça",
    "chutou Porygon. cuidado com as luzes piscando aí"
  ],
  machamp: [
    "Machamp: quatro braços e zero acerto",
    "Machamp tentou levantar a resposta, pesada demais"
  ],
  cubone: [
    "Cubone não. dá um abraço nele que ele tá precisando",
    "Cubone usa o crânio da mãe de capacete. não é ele e eu fiquei triste"
  ],
  pidgey: [
    "Pidgey! primeiro Pokémon de todo mundo e ninguém usa depois",
    "Pidgey não. vibe total de Rota 1"
  ],
  rattata: [
    "Rattata não. top porcentagem de Rattata mas não",
    "chutou Rattata. tá chutando o mato alto inteiro agora?"
  ],
  zubat: [
    "Zubat. DE NOVO. pq sempre tem Zubat mds",
    "Zubat não. ninguém gosta dele e todo mundo trombou uns 400"
  ],
  wailord: [
    "Wailord tem 14,5 metros e pesa só 398 kg. balão de ar em forma de baleia",
    "Wailord: gigante, leve e errado"
  ],
  shedinja: [
    "Shedinja tem 1 de HP. esse chute tem menos",
    "Shedinja é uma casca oca. parente meu? não. e não é ele"
  ],
  metapod: [
    "Metapod usou Endurecer. o chute amoleceu",
    "Metapod não. a emoção de ver um casulo existindo"
  ],
  mrmime: [
    "Mr. Mime tá fazendo mímica de ERRADO",
    "Mr. Mime bateu na parede invisível igual cê nesse chute"
  ],
  sableye: [
    "Sableye: olho de diamante, chute de bijuteria",
    "Sableye tá rindo no escuro. ele sabe que não é ele"
  ],
  lickitung: [
    "Lickitung não. aquela língua, ninguém pediu aquela língua",
    "chutou Lickitung. eca. errado"
  ],
  mudkip: [
    "Mudkip! so i herd u liek mudkipz. não é ele",
    "Mudkip é clássico da internet, não da resposta"
  ],
  lugia: [
    "Lugia chegou do fundo do mar e falou não",
    "Lugia é lindo demais mas não é ele"
  ],
  hooh: [
    "Ho-Oh apareceu no episódio 1 e o Ash nunca pegou. cê também não pegou a resposta",
    "Ho-Oh chutado. arco-íris, brilho, tudo lindo. errado"
  ],
  wooper: [
    "Wooper não tem braço e tem carisma sobrando. não é ele",
    "Wooper tá sorrindo mesmo errado. seja mais Wooper"
  ],
  slaking: [
    "Slaking é tão preguiçoso que nem se deu o trabalho de ser a resposta",
    "Slaking deitou no meio da tabela. não é ele"
  ],
  geodude: [
    "Geodude não. cê chutou uma pedra com braço",
    "Geodude: pedra, terrestre e errado"
  ],
  alakazam: [
    "Alakazam tem QI de 5000 e mesmo assim não é ele",
    "Alakazam entortou a colher de nervoso. errado"
  ],
  kangaskhan: [
    "Kangaskhan não. nem ela nem o filhote",
    "o filhote na bolsa do Kangaskhan acenou dizendo que não"
  ],
  voltorb: [
    "Voltorb parece Pokébola e explode na tua cara. errado",
    "Voltorb não. esse aí não era item não, cuidado"
  ],
  gardevoir: [
    "Gardevoir: elegante, psíquica e errada",
    "a Gardevoir previu teu chute. previu que tava errado também"
  ]
};
window.PK_ESP = ESP;

const L = {

/* ---------- início de partida ---------- */
pkInicioDiario: [
  "Pokémon do dia no ar. o Brasil inteiro chutando o mesmo, sem pressão",
  "diário novo. um Pokémon secreto e chute infinito, vambora",
  "eu sei quem é e cê não. amo essa dinâmica",
  "hoje o secreto é o... quase contei KKKKK chuta aí",
  "1025 Pokémon possíveis. se for um por segundo cê termina antes do almoço",
  "regra 1: não chuta Pikachu. regra 2: cê vai chutar Pikachu",
  "verde é certo, amarelo é quase, vermelho é errado. até o Psyduck entende",
  "primeiro chute é sempre no escuro, igual o Zubat que nem olho tem",
  "se acertar de primeira eu vou pedir antidoping",
  "o de hoje tá escondido no mato alto e cê sem Repel",
  "bora mano, papo reto, esse de hoje é bom",
  "diário liberado. manda o primeiro e lê as cores com calma"
],
pkInicioFacil: [
  "Fácil: só Kanto, Johto e Hoenn. se errar aqui devolve o Game Boy",
  "só as três primeiras gerações. nostalgia pura",
  "Pokémon da época que cê trocava tazo no recreio",
  "Fácil ligado. nada de Pokémon novo com nome de iogurte",
  "gerações 1 a 3. se não sabe essas o problema é de infância",
  "fácil mas não subestima não, tem Pokémon de Hoenn que nem a mãe lembra",
  "386 bichos, um secreto. vambora",
  "modo pra esquentar os dedos, tipo Rota 1",
  "Pokémon raiz. se errar muito eu vou zoar dms",
  "Fácil é o nome do modo, não é promessa não"
],
pkInicioInfinito: [
  "Infinito: sorteio aleatório, dá pra jogar até o sol nascer",
  "acertou, sorteia outro. é o ciclo da vida",
  "aqui não tem diário nem limite. só chute",
  "sorteei um qualquer dos 1025. até eu tô curioso. tá, eu já sei",
  "bem-vindo ao grind, farmar XP chutando Pokémon",
  "Infinito dá metade do XP e o dobro de vício",
  "pode ser qualquer um, inclusive aquele que parece sorvete. tem vários",
  "modo sem fim igual a jornada do Ash, só que cê tem chance de terminar",
  "pode ser lendário, pode ser Bidoof. a vida é assim",
  "o único limite aqui é tua bateria"
],
pkNovaRodada: [
  "novo Pokémon sorteado. o anterior foi pro PC do Bill",
  "outro! lá vamos nós igual Equipe Rocket depois de decolar",
  "rodada nova, chute duvidoso novo",
  "sorteado. esse aqui é bom, não vou falar mais nada",
  "mais um? viciou né KKKKK",
  "um Pokémon selvagem apareceu! só não sei se cê vai saber qual",
  "zerei a tabela. teu histórico de vergonha sumiu por enquanto",
  "se sair Magikarp de novo juro que não fui eu",
  "mais um aí. bora manter a sequência",
  "só mais uma né. todo mundo fala isso",
  "outro escondido no mato. pisa com cuidado",
  "vambora de novo, a Pokédex não completa sozinha"
],
pkSilhuetaInicio: [
  "QUEM É ESSE POKÉMON? sempre quis falar isso com a voz da TV",
  "Silhueta: só a sombra e teu instinto de criança da TV aberta",
  "olha essa sombra. olha bem. agora finge que sabe",
  "aqui é só o nome. sem tabela, sem seta, raiz total",
  "sombra preta, fundo amarelo, a musiquinha já tocou na cabeça",
  "se for Pikachu te dou um biscoito. não vai ser Pikachu",
  "pode ser lendário, pode ser Ditto fingindo",
  "vale apertar o olho e entortar a cabeça, eu deixo",
  "isso aí é um Pokémon, isso eu garanto. o resto é contigo",
  "o clássico do intervalo, só faltou o comercial de salgadinho",
  "todo mundo já gritou resposta errada pra TV. tradição",
  "chuta pelo formato. orelha, rabo, barriga. Pokémon é isso"
],
pkRetomou: [
  "voltou! teus {n} chutes continuam aqui, todos errados",
  "ô, cê de novo. deixei tudo do jeito que cê largou",
  "voltando de onde parou. a tabela sentiu tua falta",
  "o secreto não mudou e tua situação também não KKKKK",
  "{n} chutes até agora, caso cê não lembre",
  "salvei teu progresso, diferente do Ash que zera tudo a cada região",
  "bem-vindo de volta, a Pokédex ficou aberta te esperando",
  "acabou o lanche? bora continuar"
],

/* ---------- primeiro chute e chutes especiais ---------- */
pkPrimeiro: [
  "primeiro chute: <b>{pokemon}</b>. começo clássico de quem não faz ideia",
  "abriu com <b>{pokemon}</b>. estratégia ou apego emocional?",
  "<b>{pokemon}</b> de cara? tá bom, todo mestre começa errando",
  "primeiro chute é só pra ver as cores, ninguém julga. eu julgo um pouco",
  "<b>{pokemon}</b>, começo corajoso. errado, mas corajoso",
  "começou com <b>{pokemon}</b>. agora olha as cores e finge que tem plano",
  "primeiro chute registrado na Pokédex da vergonha",
  "todo mundo tem Pokémon de abertura. o teu é <b>{pokemon}</b>, uai",
  "<b>{pokemon}</b> pra esquentar, tipo Pidgey no começo do jogo",
  "largou! agora é ir apertando o cerco",
  "chute 1. faltam uns... sei lá. depende de você",
  "<b>{pokemon}</b>? eu teria ido em outro. mas eu sei a resposta, então não vale",
  "começou! lê as cores com calma, só eu tô te apressando",
  "<b>{pokemon}</b>... interessante. errado, mas interessante",
  "abertura com <b>{pokemon}</b>, o xadrez dos treinadores",
  "primeiro chute feito, agora cê tem informação. usa aí",
  "chutar <b>{pokemon}</b> primeiro diz muito sobre você KKKKK",
  "o importante é chutar. o Magikarp só sabe Splash e tá aí até hoje"
],
pkPikachu: [
  "chutou Pikachu? ousado. original. errado",
  "Pikachu é o que todo mundo chuta quando não sabe nada. tipo falar batata no Stop",
  "NUNCA é o Pikachu mano. ele tá de férias com o Ash",
  "Pikachu sério? a Nintendo te pagou pra isso?",
  "pika pika errou",
  "o Pikachu não entra na Pokébola e não entra na resposta também",
  "chutar Pikachu é o tutorial desse jogo. parabéns, passou do tutorial",
  "Pikachu te deu um choque de realidade: não é ele",
  "até o Pikachu ficou com vergonha, olha a bochecha vermelha dele",
  "se fosse Pikachu o jogo ia chamar Óbvio. chuta de novo",
  "o mascote aqui sou eu, não gostei desse chute não",
  "Pikachu usou Choque do Trovão. não foi muito efetivo KKKKK"
],
pkInicial: [
  "<b>{pokemon}</b>, inicial né? a primeira escolha de todo mundo",
  "chutou inicial. o Professor Carvalho ficou orgulhoso, a tabela não",
  "<b>{pokemon}</b>: aquele que cê escolheu e depois largou no PC",
  "inicial de novo? tá revivendo a infância ou chutando Pokémon?",
  "três Pokébolas na mesa e cê foi logo no <b>{pokemon}</b>. previsível",
  "o nome dos iniciais todo mundo sabe. o problema são os outros mil",
  "<b>{pokemon}</b>! eu sabia que cê era do time dele, tava na cara",
  "chutar inicial é chantagem emocional. pegou meu coração, a resposta não",
  "a nostalgia bateu, mas a tabela bateu mais forte",
  "o <b>{pokemon}</b> foi parceiro de muita gente. hoje não é o secreto",
  "fogo, água ou planta? escolheu errado. nem tinha certo",
  "<b>{pokemon}</b>, o eterno escolhido. menos hoje",
  "voltou pro laboratório do professor? pelo menos a informação vale",
  "inicial é o primeiro que a gente aprende e o primeiro que a gente erra"
],
pkLendario: [
  "<b>{pokemon}</b>?! chutou lendário. mirou alto hein",
  "lendário? cê acha que o de hoje é especial assim?",
  "<b>{pokemon}</b>. gastou uma Master Ball num chute, respeito",
  "chutar lendário é tipo jogar na Mega-Sena. acontece, raramente",
  "o <b>{pokemon}</b> desceu dos céus só pra dizer que não é ele",
  "lendário no chute. tá com fé, gosto de fé. não ajuda mas gosto",
  "<b>{pokemon}</b>! até a música de batalha mudou aqui na minha cabeça",
  "um lendário apareceu e foi embora. não era ele",
  "chutou <b>{pokemon}</b> igual quem joga Pokébola comum em lendário. na esperança",
  "acertar lendário no chute é mais raro que o Cruzeiro jogar bonito",
  "<b>{pokemon}</b> tem cara de resposta de diário mesmo. hoje não, fera",
  "chutou um ser divino. o ser divino não aprovou",
  "se fosse fácil assim a Equipe Rocket já tinha pegado",
  "<b>{pokemon}</b>? mirou no chefão. às vezes o secreto é um Caterpie mesmo"
],

/* ---------- reações às pistas ---------- */
pkTudoVermelho: [
  "tudo vermelho mano. TUDO. a Pokédex pegou fogo",
  "nenhum acerto. isso já é quase um talento",
  "<b>{pokemon}</b> não tem nada a ver com o secreto. nem o CEP",
  "vermelho de ponta a ponta. até o Charmander ficou com inveja da cor",
  "zero verde. pelo menos agora cê sabe tudo que NÃO é",
  "completamente errado KKKKKK",
  "esse chute foi tão longe que a Equipe Rocket viu passar",
  "tabela toda vermelha, parece o placar do Cruzeiro fora de casa",
  "<b>{pokemon}</b> e o secreto nem se cumprimentam na rua",
  "errou tudo mas errou com convicção. isso conta. pra mim não, mas conta",
  "nem tipo, nem geração, nem tamanho. cê pescou um Magikarp de informação",
  "tudo vermelho. relaxa que isso elimina um monte de coisa",
  "isso não foi chute, foi pênalti na arquibancada",
  "<b>{pokemon}</b> é o oposto perfeito do secreto. usa de bússola ao contrário",
  "nenhum verde. mais perdido que o Ash em Hoenn sem mapa",
  "vermelhinho total, pelo menos combina com a Pokédex",
  "chute {n} e zero acerto nesse. respira, Pokémon também erra golpe",
  "tudo errado com <b>{pokemon}</b>. patético KKKKK",
  "zero de sete. estatisticamente impressionante",
  "agora cê descobriu tudo que o secreto não é. só falta o resto"
],
pkTipoCerto: [
  "tipo <b>{tipo}</b> certinho! agora tem um fio pra puxar",
  "opa, <b>{tipo}</b> bateu. o cerco tá fechando",
  "acertou o <b>{tipo}</b>. agora é só achar o resto, moleza. nem tanto",
  "<b>{tipo}</b> no lugar certo. o cérebro de treinador ligou",
  "tipo certo! tá esquentando, e não é tipo Fogo",
  "um verdinho no tipo. guarda isso com carinho",
  "é <b>{tipo}</b> sim. agora lista na cabeça todo <b>{tipo}</b> que cê lembra",
  "o <b>{tipo}</b> tá confirmado, o resto ainda tá uma bagunça",
  "<b>{tipo}</b> acertado. os líderes de ginásio desse tipo tão de olho",
  "tipo certo. o secreto começou a suar",
  "<b>{tipo}</b> no alvo! agora não sai chutando Pokémon de outro tipo pelo amor",
  "acertou o tipo. falta só geração, tamanho, peso, cor, evolução e o nome. pouca coisa",
  "verde no <b>{tipo}</b>, quase chorei aqui",
  "<b>{tipo}</b> confirmado. não vai chutar um Normal por impulso agora hein",
  "o tipo tá certo, o resto tá torto. mas é progresso",
  "tipo <b>{tipo}</b>. tá virando detetive igual o Pikachu de chapéu"
],
pkTipoTrocado: [
  "amarelo no tipo! o <b>{tipo}</b> tá lá, só que no outro espaço",
  "<b>{tipo}</b> existe no secreto mas trocado, tipo sapato no pé errado",
  "quase! o tipo é esse mas na outra posição. Pokémon é chato com ordem",
  "amarelinho! <b>{tipo}</b> tá no secreto, só que invertido",
  "o secreto tem <b>{tipo}</b>, mas não onde cê botou",
  "amarelo é o quase do Pokémon. <b>{tipo}</b> certo, lugar errado",
  "pensa num Pokémon que tem <b>{tipo}</b> do outro lado",
  "o <b>{tipo}</b> tá no time, só que jogando em outra posição",
  "tipo no lugar errado. festa certa, dia errado",
  "amarelou! não desperdiça essa pista não",
  "<b>{tipo}</b> confirmado mas de ladinho. inverte o raciocínio",
  "o secreto tem <b>{tipo}</b> como o outro tipo dele. pensa aí",
  "o tipo existe mas a ordem não bate",
  "amarelo no tipo. não é verde mas também não é vergonha"
],
pkTiposCertos: [
  "os dois tipos certinhos! agora é achar quem mais tem essa combinação",
  "tipagem completa, o secreto é <b>{tipo}</b> mesmo",
  "tipos perfeitos. tem menos <b>{tipo}</b> do que cê imagina, pensa",
  "dois verdes nos tipos. cê tá no cangote do secreto",
  "acertou os dois tipos! cruza com a geração e pronto. pronto na teoria",
  "tipagem idêntica. <b>{pokemon}</b> e o secreto são praticamente primos",
  "tipos 100%. agora olha tamanho e peso",
  "os tipos batem! <b>{pokemon}</b> e o secreto podiam dividir apartamento",
  "combinação de tipo certa, o cerco fechou. o secreto tá nervoso",
  "tipo 1 e tipo 2 verdinhos. dá pra sentir o cheiro da vitória",
  "tipagem certa! não vai estragar agora chutando outra coisa hein",
  "é <b>{tipo}</b>. o resto é detalhe, mas detalhe importante"
],
pkGeracaoCerta: [
  "geração {geracao} certinha! agora lembra de todo mundo dessa região",
  "acertou a geração, a gen {geracao} é o bairro do secreto",
  "gen {geracao} confirmada. cê jogou essa né? né?",
  "geração certa. pensa no mapa dessa região e sai caçando",
  "verde na geração! o secreto é da gen {geracao} igual o <b>{pokemon}</b>",
  "gen {geracao} bateu. agora filtra tipo, tamanho e peso",
  "mesma geração. <b>{pokemon}</b> e o secreto estudaram na mesma escola",
  "geração certa, bicho errado. tá rodando em volta",
  "gen {geracao}! lembra da trilha sonora dessa? não ajuda mas é bonita",
  "a geração tá certa, o resto é discutível",
  "mesma geração, Pokémon errado. prédio certo, andar errado",
  "gen {geracao} confirmada. se cê só jogou a primeira, boa sorte",
  "acertou a gen! não sai da gen {geracao} agora pelo amor de Arceus",
  "verde na geração. o calendário cê acertou pelo menos"
],
pkGeracaoSobe: [
  "o secreto é de geração mais nova. sobe",
  "seta pra cima na geração: o secreto é mais novo que o <b>{pokemon}</b>",
  "gen {geracao} é velha demais, o secreto chegou depois",
  "mais recente! avança no tempo aí",
  "sobe a geração. sim, vai ter que lembrar dos Pokémon de nome esquisito",
  "gen mais alta. os clássicos ficaram pra trás, vovô",
  "seta pra cima. nada de Kanto agora",
  "mais novo que a gen {geracao}. tua Pokédex mental precisa de atualização",
  "geração acima, bora pro futuro",
  "é mais moderno. daqueles que cê olhou e falou isso nem parece Pokémon"
],
pkGeracaoDesce: [
  "o secreto é de geração mais antiga. volta no tempo",
  "seta pra baixo: o secreto é mais velho que o <b>{pokemon}</b>",
  "gen {geracao} é nova demais, o secreto é mais clássico",
  "mais antigo! tira o Game Boy da gaveta",
  "desce a geração. o secreto é da época do cartucho provavelmente",
  "o secreto é vintage, mais velho que a gen {geracao}",
  "seta pra baixo. menos modernidade, mais nostalgia",
  "o secreto já existia quando o <b>{pokemon}</b> nem era rascunho",
  "volta umas gerações. coragem",
  "mais antigo. Pokémon raiz, daqueles que vinham no tazo"
],
pkMaior: [
  "o secreto é MUITO mais alto que o <b>{pokemon}</b>. olha pra cima",
  "seta pra cima na altura, e das grandes",
  "<b>{pokemon}</b> é um nanico perto do secreto",
  "o secreto não cabe na tua sala provavelmente",
  "pensa maior. bem maior. tipo Onix, mas não necessariamente Onix",
  "o secreto bate a cabeça no teto e cê chutou um de chinelo",
  "sobe! o secreto tem que abaixar pra entrar no Centro Pokémon",
  "diferença de altura gigante mano",
  "o secreto olha pro <b>{pokemon}</b> igual a gente olha pra formiga",
  "bem mais alto. troca a lupa pelo binóculo"
],
pkMenor: [
  "o secreto é MUITO menor que o <b>{pokemon}</b>. pensa pequeno",
  "seta pra baixo na altura, o secreto cabe no bolso",
  "<b>{pokemon}</b> é um prédio perto do secreto",
  "diminui! o secreto é tamanho chaveiro",
  "pensa em coisa pequenininha. fofa ou venenosa, mas pequenininha",
  "o secreto passa por baixo da porta tranquilo",
  "menor, bem menor. tipo Joltik que cê nem enxerga",
  "o <b>{pokemon}</b> pisava no secreto sem querer",
  "desce a altura. muito",
  "cê chutou um gigante e o secreto é tampinha"
],
pkMaisPesado: [
  "o secreto é MUITO mais pesado. tipo Snorlax depois do almoço",
  "peso bem acima. <b>{pokemon}</b> é uma pena perto dele",
  "seta pra cima no peso. pensa em coisa que quebra balança",
  "o secreto pesa uma tonelada perto do <b>{pokemon}</b>",
  "bem mais pesado. coisa de pedra, de metal ou de rodízio",
  "o secreto afundava o barco da Misty",
  "o <b>{pokemon}</b> voa com o vento, o secreto nem com furacão",
  "pensa pesado. em quilo, não em sentimento",
  "a balança pediu socorro, o secreto é bem mais pesado",
  "esquece os fofinhos, pensa em trator"
],
pkMaisLeve: [
  "o secreto é MUITO mais leve. tipo Gastly que é basicamente gás",
  "peso bem abaixo. <b>{pokemon}</b> é uma geladeira perto dele",
  "seta pra baixo no peso, o secreto voa com um espirro",
  "bem mais leve. pensa em pena, balão, fantasminha",
  "o secreto pesa menos que tua mochila da escola",
  "pesado demais esse chute, o secreto é levinho",
  "o secreto sobe na balança e ela nem percebe",
  "o <b>{pokemon}</b> esmagava o secreto sem querer",
  "pensa leve, tipo Hoppip que o vento carrega",
  "bem menos. tira o Snorlax da cabeça"
],
pkPertoTamanho: [
  "tamanho e peso bem parecidos! <b>{pokemon}</b> e o secreto usam a mesma roupa",
  "quase o mesmo porte, tá chegando",
  "altura e peso quase batendo, é só ajustar um tiquinho",
  "pertinho no tamanho! o secreto é tipo primo do <b>{pokemon}</b>",
  "porte parecido, de longe dava pra confundir",
  "tá quente no tamanho. pena que tamanho não é documento",
  "medidas quase iguais. olha as setas e ajusta",
  "altura e peso na vizinhança. agora acerta o resto",
  "bateu quase certinho no tamanho, tá rondando",
  "mais ou menos o mesmo tamanho. o resto é que tá atrapalhando",
  "quase o mesmo tamanho! agora é ajuste fino",
  "se fosse luta era na mesma categoria de peso"
],
pkCorCerta: [
  "cor certa, o secreto também é <b>{cor}</b>",
  "<b>{cor}</b> confirmado. imagina todo Pokémon desse tom que cê conhece",
  "acertou a cor. Pokédex de colorir, nível 1",
  "cor igual! a paleta cê acertou",
  "o secreto é <b>{cor}</b> mesmo, mas não qualquer um",
  "a cor bateu. começo estético",
  "mesma cor na Pokédex, os dois combinam numa foto",
  "a cor tá certa. quem mais é <b>{cor}</b> e tem esse jeitão?",
  "<b>{cor}</b> igual. a Game Freak gosta dessa cor pelo visto",
  "cor certinha. já é alguma coisa uai"
],
pkQuase: [
  "UOU. quase tudo verde, tá na ponta da língua",
  "tá pertíssimo, falta um detalhe ou dois",
  "<b>{pokemon}</b> é quase o secreto. olha o que ficou vermelho",
  "muito verde! o secreto tá suando frio",
  "tão perto que dá pra ouvir o grito do Pokémon",
  "quase! pensa num parente próximo do <b>{pokemon}</b>",
  "se fosse Pokébola já tinha balançado duas vezes",
  "quase mano. tipo a Pokébola que treme três vezes e abre",
  "olha esse tanto de verde, cê tá a um chute de distância",
  "que chute! agora é ajuste fino",
  "<b>{pokemon}</b> é quase ele! evolução, pré-evolução, primo... pensa",
  "ficou tão perto que eu até me assustei",
  "isso aí é praticamente gêmeo do secreto. praticamente",
  "MDSSS o radar tá apitando"
],
pkMisto: [
  "<b>{pokemon}</b>. olha as cores e vai ajustando",
  "tem coisa certa, tem coisa errada. tipo a vida",
  "chute {n}: <b>{pokemon}</b>. tá indo, devagar mas tá",
  "tem pista boa aí, não desperdiça",
  "mais um pro histórico. a tabela tá ficando colorida pelo menos",
  "<b>{pokemon}</b> não é, mas ajudou. valeu <b>{pokemon}</b>",
  "meio certo meio errado, tipo Ditto imitando de memória",
  "tá chegando ou se afastando? só as setas sabem",
  "escolha interessante. lê as setas aí",
  "não é o <b>{pokemon}</b>. lá no fundo cê já sabia",
  "cada chute errado é um a menos. filosofia de ônibus lotado",
  "<b>{pokemon}</b> eliminado. restam bem menos se cê usar as pistas",
  "vai por eliminação que dá bom",
  "pistas misturadas. pensa com calma, isso aqui não é speedrun",
  "<b>{pokemon}</b> contribuiu com a ciência, obrigado pelo serviço",
  "mais uma linha na tabela, mais uma camada de mistério",
  "tá rodando igual Tauros, uma hora cê tromba nele",
  "nem quente nem frio. morno tipo café de Centro Pokémon",
  "o secreto riu desse chute. baixinho, mas riu",
  "palpite {n}. persistência é a maior arma do treinador, depois do Hiper Raio",
  "legal. não é ele, mas legal",
  "<b>{pokemon}</b>, é? olha as setas de altura e peso, elas tão gritando",
  "um verdinho ali, um vermelhão lá. equilíbrio",
  "nada mal, nada bem. continua"
],

/* ---------- marcos de chutes ---------- */
pkMarco5: [
  "5 chutes. o Ash levou 25 anos, cê tá indo bem",
  "quinto chute! liberou dica ali embaixo, só avisando",
  "cinco palpites, tá virando jornada. pega um lanche",
  "5 tentativas. respira e lê as setas",
  "chute 5! tem dica disponível ali, usa sem vergonha",
  "cinco chutes. finge que cê tá acima da média",
  "5 já. a dica existe por um motivo mano",
  "quinto chute e o secreto já tá bocejando",
  "cinco! metade do caminho pra dez, e isso não é elogio",
  "5 chutes. menos perdido que a Equipe Rocket pelo menos"
],
pkMarco10: [
  "10 chutes! dá pra montar um time e ainda sobra reserva",
  "DEZ. a primeira letra liberou, usa sem vergonha",
  "chute 10. o Professor Carvalho mandou mensagem perguntando se tá tudo bem",
  "dez tentativas. cê já viu mais Pokémon hoje que muita gente na vida",
  "10 chutes. maratona, mas maratona também acaba",
  "décimo palpite. o Magikarp já teria evoluído",
  "10! a primeira letra tá ali te esperando",
  "dez chutes e ainda de pé. guerreiro ou teimoso, os dois",
  "chegou no 10, a tabela tá virando pergaminho",
  "10 chutes. o Ash perdeu liga atrás de liga e continuou, bora"
],
pkMarco15: [
  "15 chutes. cê tá colecionando os errados né",
  "quinze! dá pra abrir um Centro Pokémon só com os errados",
  "15 tentativas. a Enfermeira Joy já tá preparando a maca",
  "chute 15. cê não desiste né, igual o James com aquele cabelo",
  "quinze. dica não é vergonha, vergonha é chute 30",
  "15 chutes, isso aqui virou novela mexicana",
  "quinze palpites, o secreto já tá com peninha",
  "15 KKKKK tá sofrendo mais que eu vendo o Cruzeiro"
],
pkMarco20: [
  "20 chutes. isso já é uma temporada do anime",
  "vinte! mais longo que filler do Naruto",
  "20 tentativas. tô fazendo pipoca aqui",
  "chute 20. eu acredito em você. uns 40%",
  "vinte. se fosse luta o juiz já tinha parado",
  "20 chutes, tua Pokédex mental tá levando uma surra",
  "vinte palpites. persistência nível Equipe Rocket",
  "20 chutes mds. mais demorado que o 330 às 18h"
],
pkMarcoMuito: [
  "{n} chutes. isso não é mais jogo, é estilo de vida",
  "chute {n}. eu já decorei tua tabela, e cê?",
  "{n}! a Pokédex inteira tá assistindo",
  "{n} tentativas. mais chute que o Hitmonlee",
  "chute {n}. tô aqui contigo. rindo, mas tô aqui",
  "{n} palpites e firme. admiro e me preocupo",
  "chute {n}. tem gente que zera o jogo com menos esforço",
  "{n}. respira, olha as setas e chuta com carinho",
  "{n} chutes. 700 séculos jogando esse diário",
  "chute {n}. o secreto mandou avisar que tá com sono",
  "{n}! se chute desse XP cê já tava nível 100",
  "{n} tentativas. determinação ou teimosia, linha fina"
],

/* ---------- dicas ---------- */
pkDicaLiberada: [
  "dica liberada! tá ali embaixo piscando pra você",
  "liberei uma dica. custa XP mas salva a dignidade",
  "tem dica disponível, usar não é crime",
  "dica nova no ar, o Professor Carvalho mandou pelo correio",
  "liberou dica. eu fingia que não vi mas tá ali",
  "dica desbloqueada, tipo item escondido atrás da árvore",
  "apareceu uma dica, olha a carinha dela pedindo pra ser usada",
  "dica pronta. cê decide: orgulho ou XP"
],
pkDicaSilhueta: [
  "silhueta na tela! QUEM É ESSE POKÉMON?",
  "tá aí a sombra, agora não tem desculpa",
  "aperta o olho, entorta a cabeça, chama a criança de dentro",
  "olha a sombrinha dele. fofo ou assustador?",
  "silhueta liberada. se errar agora eu vou rir KKKKK",
  "pronto, a sombra. agora é igual intervalo de desenho",
  "menos XP, mais chance. boa",
  "tá aí o formato. orelha, rabo, barriga, tudo que cê precisa",
  "a sombra fala mais que mil setas",
  "olha quem apareceu no escuro. reconhece?"
],
pkDicaLetra: [
  "primeira letra liberada. agora é caça-palavras",
  "começa com essa letra aí, pode me agradecer depois",
  "letra inicial liberada, isso filtra muito",
  "agora pensa em todo Pokémon com essa inicial",
  "mais fácil que isso só se eu soletrar",
  "olha a letra aí. faz o alfabeto na cabeça",
  "a letra tá dada, o resto é tua memória",
  "é tipo colar na prova, só que liberado",
  "o XP chorou um pouco mas tudo bem",
  "com a primeira letra fica fácil né? né?"
],
pkDicaTipo: [
  "tipos na mesa! agora a sombra ganhou personalidade",
  "junta os tipos com a silhueta e mata a charada",
  "tá aí os tipos, isso filtra bastante",
  "olha a sombra de novo sabendo os tipos",
  "sombra mais tipo é quase certeza. quase",
  "revelei os tipos. se errar agora eu conto pro Brock"
],

/* ---------- vitórias ---------- */
pkVitoria1: [
  "DE PRIMEIRA?! isso é suspeito mano. tá com a Pokédex aberta aí?",
  "acertou de primeira. gênio ou viajante do tempo",
  "UM chute. vou chamar a Oficial Jenny pra investigar",
  "de primeira?! nem o Mewtwo prevê o futuro assim",
  "DE PRIMEIRAAAA. hackeou o jogo? leu minha mente?",
  "um chute só. que isso mano, tô sem reação",
  "acertou de primeira, joga na loteria hoje",
  "primeira. tentativa. quero replay em câmera lenta",
  "de primeira... alguém te contou né? NÉ?",
  "um chute e acabou. isso não é jogo, é assalto",
  "primeira tentativa! o Alakazam de QI 5000 tá com inveja",
  "MDSSSS QUE ISSO, printa e manda no grupo"
],
pkVitoriaRapida: [
  "em {n} chutes! o Ash que lute",
  "é o <b>{pokemon}</b>! rapidinho hein, tá treinando escondido?",
  "{n} chutes só. tá jogando demais",
  "pegou o <b>{pokemon}</b> rapidão, a Pokébola nem balançou",
  "{n} chutes e pronto. pode ir tomar um café",
  "mais rápido que Ninjask com Speed Boost",
  "<b>{pokemon}</b> capturado em {n}. o Professor Carvalho tá orgulhoso",
  "vitória relâmpago! que isso",
  "{n} chutes, nem deu tempo de eu zoar. poxa",
  "acertou rapidinho, tem a Pokédex tatuada no cérebro?",
  "é o <b>{pokemon}</b>! direto ao ponto, gostei",
  "{n} chutes mano. como pode ser tão maneiro"
],
pkVitoria: [
  "É O <b>{pokemon}</b>! capturado em {n} chutes",
  "acertou uai! <b>{pokemon}</b> na Pokédex, {n} chutes",
  "isso! <b>{pokemon}</b>! sabia que cê ia chegar lá",
  "<b>{pokemon}</b> capturado! a musiquinha da captura tá tocando aqui",
  "{n} chutes. nem rápido nem lento, perfeitamente treinador",
  "olha ele aí: <b>{pokemon}</b>! boa caçada",
  "acertou! eu fingia que não torcia mas torcia",
  "é o <b>{pokemon}</b>! dá um apelido carinhoso pra ele",
  "vitória! {n} chutes e muita dedução",
  "gotcha! <b>{pokemon}</b> foi capturado",
  "conseguiu! nada como ver a linha toda verde",
  "<b>{pokemon}</b>! achei que cê ia travar mas foi lindo",
  "pegou! {n} chutes. o Brock te dava uma insígnia, ele dá pra qualquer um",
  "é ele! o <b>{pokemon}</b>! pode comemorar, eu deixo"
],
pkVitoriaSofrida: [
  "FINALMENTE! {n} chutes! é o <b>{pokemon}</b>! eu já tava cochilando",
  "é o <b>{pokemon}</b>. demorou 700 séculos mas foi",
  "suado, sofrido, mas foi. tipo o Ash ganhando liga depois de 25 anos",
  "{n} chutes mas quem liga, vitória é vitória",
  "acertou! demorou tanto que o <b>{pokemon}</b> quase evoluiu",
  "<b>{pokemon}</b>! enfim! tô emocionado aqui",
  "vitória na raça! {n} chutes, persistência de Magikarp",
  "FOI! {n} tentativas mas FOI. a Enfermeira Joy pode guardar a maca",
  "é o <b>{pokemon}</b>! levou um tempinho. um tempão. mas levou",
  "aleluia! {n} chutes, gol saiu depois de correr uma maratona sem tênis",
  "capturado depois de {n} Pokébolas. ele resistiu, cê resistiu mais",
  "pegou o <b>{pokemon}</b>. quem conta os chutes? eu. foram {n} KKKKK"
],

/* ---------- modo silhueta ---------- */
pkSilhuetaErro: [
  "não é o <b>{pokemon}</b>. olha o formato de novo",
  "a sombra não bate com <b>{pokemon}</b> nem de longe",
  "<b>{pokemon}</b>? olha as orelhas dessa silhueta. olha",
  "errou! a TV ia gritar É O... e não ia ser <b>{pokemon}</b>",
  "não é. aperta o olho e tenta de novo",
  "<b>{pokemon}</b> tem outro formato, a sombra não mente",
  "a silhueta diz não. com voz de narrador",
  "<b>{pokemon}</b>? essa sombra nem parece, vai",
  "errado! volta pro intervalo e presta atenção",
  "não é <b>{pokemon}</b>. pensa no formato, não no nome",
  "hmm não. a sombra balançou a cabeça",
  "<b>{pokemon}</b> não, mas foi chute com personalidade",
  "chute {n} na silhueta, a sombra tá rindo de você. eu também",
  "nada! imagina o bicho colorido que ajuda",
  "se fosse <b>{pokemon}</b> a sombra tinha outra barriga",
  "errou mas errou com estilo de criança gritando pra TV"
],
pkSilhuetaVitoria: [
  "É O <b>{pokemon}</b>! com a voz da TV e tudo",
  "QUEM É ESSE POKÉMON? é o <b>{pokemon}</b> e cê acertou",
  "a sombra ganhou cor! <b>{pokemon}</b> confirmado",
  "acertou pela silhueta. criança da TV aberta detectada",
  "<b>{pokemon}</b>! olho de Pidgeot",
  "reconheceu o <b>{pokemon}</b> pela sombra, isso é cultura",
  "é ele! <b>{pokemon}</b>! se fosse na TV cê ganhava um tazo",
  "silhueta decifrada, o narrador te aplaude",
  "<b>{pokemon}</b> pela sombra! treino de intervalo de desenho",
  "acertou! voltou o intervalo, voltou a infância, voltou tudo"
],

/* ---------- outros ---------- */
pkDiarioFeito: [
  "cê já fez o de hoje. volta amanhã ou joga o Infinito",
  "diário concluído. sei que dá vontade de jogar de novo, mas só amanhã",
  "já acertou hoje! vai viver tua vida. ou joga Infinito",
  "o de hoje já foi. o de amanhã ainda tá chocando no ovo",
  "diário feito. o Infinito tá logo ali piscando",
  "esse já tá na Pokédex, volta amanhã",
  "já foi! se quiser mais tem a Silhueta, clássico de intervalo",
  "terminou o diário. agora vem a pior parte: esperar",
  "diário resolvido, rápido ou demorado tanto faz",
  "nada de novo aqui até meia-noite. os Pokémon também dormem",
  "hoje já deu, mas o Infinito não tem hora pra acabar",
  "cê já ganhou hoje. fico aqui guardando a tabela pra você admirar"
],
pkDesistirConfirma: [
  "vai desistir? aperta de novo se for fugir mesmo",
  "certeza? a Equipe Rocket desiste sempre, olha onde eles tão",
  "aperta outra vez pra confirmar a fuga. não vou julgar. muito",
  "fugir da batalha? mais um toque e cê escapa"
],
pkDesistiu: [
  "desistiu? era o <b>{pokemon}</b>. pode chorar um pouco",
  "era o <b>{pokemon}</b>! tava na cara. tá, não tava",
  "a Equipe Rocket decolou de novo! ah não, foi você. era o <b>{pokemon}</b>",
  "jogou a toalha. o <b>{pokemon}</b> manda lembranças",
  "era o <b>{pokemon}</b>. grava esse nome pra próxima",
  "desistência aceita. o <b>{pokemon}</b> manda um abraço",
  "tudo bem desistir, o Ash soltou o Butterfree e sobreviveu",
  "o <b>{pokemon}</b>! agora cê nunca mais esquece ele",
  "fugiu da batalha com sucesso! era o <b>{pokemon}</b>",
  "era o <b>{pokemon}</b>. com esse futebolzinho vai longe não KKKKK"
],
pkNaoExiste: [
  "esse Pokémon não existe. manda a ideia pra Game Freak",
  "não achei ninguém com esse nome, cê inventou agora né",
  "isso não tá na Pokédex, confere o que cê digitou",
  "Pokémon desconhecido. tá parecendo nome de Digimon",
  "não conheço esse aí, e olha que eu conheço 1025",
  "isso é nome de Pokémon ou cê sentou no teclado?",
  "nada com esse nome. escolhe um da lista, vai",
  "MissingNo? não obrigado. escolhe um que existe",
  "esse aí cê inventou agora né KKKKK",
  "não achei. digita as primeiras letras e deixa a lista te ajudar"
],
pkRepetido: [
  "cê já chutou esse! memória de peixinho",
  "esse já foi, tá na tabela olha lá",
  "repetido! chutar o mesmo duas vezes não muda a resposta, eu testei",
  "já tentou <b>{pokemon}</b>. não virou certo desde então",
  "déjà vu, esse já tá na lista",
  "o mesmo chute de novo? o Psyduck faz isso. não seja o Psyduck"
],

/* ---------- tagarelice aleatória (somada às gerais) ---------- */
pkAleatorio: [
  "o Ash tem 10 anos há uns 25 anos. mais assustador que Gengar",
  "a Enfermeira Joy é a mesma pessoa em toda cidade? ninguém investiga isso",
  "o Magikarp é inútil e mesmo assim virou dragão. tem esperança pra todo mundo",
  "pq o Snorlax sempre dorme justo na estrada mais importante? ele sabe",
  "o Ditto vira qualquer coisa e escolheu ser uma gosma rosa. respeito",
  "se eu fosse Pokémon eu era Fantasma/Elétrico. tipo um Rotom de fliperama",
  "ninguém fala do trauma de quem gastou 80 Ultra Balls no Mewtwo",
  "a Equipe Rocket gasta mais em robô gigante do que ganharia com o Pikachu. péssimo negócio",
  "o Cubone usa o crânio da mãe de capacete. desenho infantil, né",
  "o Professor Carvalho esquece o nome do próprio neto. coitado do Gary",
  "tem um Pokémon que é um saco de lixo, o Trubbish. e ele evolui. pra um saco maior",
  "tem Pokémon sorvete, chaveiro, lustre e espada. só falta um boleto",
  "o Slowpoke demora 5 segundos pra sentir dor. eu demoro isso pra entender piada",
  "o Brock passou o anime inteiro tentando arrumar namorada e cê reclamando da vida",
  "o Onix é de pedra, tem 8,8 metros e pesa 210 kg. o bicho é oco, ninguém me convence",
  "se o Charizard não obedecia o Ash, imagina se eu vou obedecer você",
  "a Enfermeira Joy trabalha 24 horas de graça. quem paga hora extra dela?",
  "o Mr. Mime faz faxina na casa da mãe do Ash. melhor funcionário de Pallet",
  "o Bidoof ninguém leva a sério. igual eu. a gente devia fundar um clube",
  "Ekans ao contrário é snake. Arbok ao contrário é kobra. a Game Freak é zoeira",
  "a Pokédex diz que o Magcargo é mais quente que a superfície do sol. e ele lá numa caverna de boa",
  "aposto que cê lembra de uns 150 Pokémon no máximo. normal",
  "o Farfetch'd anda com um alho-poró. pra quê? ninguém sabe",
  "Red e Blue, Gold e Silver, Ruby e Sapphire. um dia sai Pokémon Arroz e Feijão",
  "Metapod usou Endurecer. Metapod usou Endurecer. Metapod usou Endurecer. minha vida",
  "o melhor Pokémon é aquele que cê usou até o fim e largou no PC pra sempre. tadinho",
  "o Jigglypuff canta, todo mundo dorme e ele fica bravo. eu falo, ninguém escuta, mesma vibe",
  "aposto que cê já jogou Pokébola comum em lendário de HP cheio",
  "o Voltorb parece Pokébola pra explodir na tua cara. game design de gênio",
  "quantos Zubat cê já encontrou na vida? uns 6 séculos de Zubat",
  "o Wailord é gigante e pesa só 398 kg. é um balão",
  "o Machamp tem quatro braços e nenhum celular. desperdício",
  "o Psyduck se fosse gente era aquele que chega na reunião perguntando que dia é hoje",
  "a Misty seguiu o Ash por anos por causa de uma bicicleta. isso que é cobrar dívida",
  "Pokémon só fala o próprio nome. imagina eu fazendo isso. bugado bugado",
  "o mundo Pokémon tem teleporte mas criança de 10 anos viaja sozinha. prioridades",
  "se um Snorlax dormisse na tua rua cê chamava a prefeitura ou tocava flauta?",
  "o Exeggcute são seis ovos que pensam juntos. ninguém acha isso estranho?",
  "o mar do mundo Pokémon é 80% Tentacool, papo reto",
  "o Porygon leva a culpa daquele episódio até hoje. justiça pro Porygon",
  "tem Pokémon que é um chaveiro, o Klefki. ele coleciona chave. ele É a chave",
  "o Rhydon foi o primeiro Pokémon desenhado. respeita o Rhydon",
  "o Clefairy quase foi o mascote no lugar do Pikachu. imagina",
  "tem teoria que o Gengar é a sombra do Clefairy. faz sentido demais",
  "o Abra dorme 18 horas por dia. meu ídolo",
  "o Ho-Oh apareceu no episódio 1 e ninguém entendeu nada por anos",
  "a Game Freak fez um Pokémon que é um lustre, o Chandelure. e ficou bonito",
  "me joga no 330 lotado, mas não me pede pra lembrar todos os Pokémon de Paldea",
  "tem Pokémon que é uma bola de sorvete de duas cabeças. Vanilluxe. procura aí",
  "cada dia mais me tornando um maluco que isso, amo muito Pokémon",
  "a passagem é 5,75 e o Lapras leva de graça. só dizendo",
  "Charizard não é tipo Dragão. isso me tira o sono até hoje"
],
pkParado: [
  "tá pensando ou tá pesquisando no Google? tô vendo hein",
  "esse Pokémon não vai se chutar sozinho",
  "ô, cê tá vivo? até o Slowpoke já tinha reagido",
  "travou? digita qualquer letra que a lista ajuda",
  "se ficar parado assim um Snorlax vai deitar na frente da tela",
  "silêncio... dá pra ouvir o secreto rindo",
  "tá procurando no mato alto? anda em círculo que aparece",
  "isso aqui não é Pokémon GO, ele não vai aparecer sozinho",
  "ei, olha as setas. elas tão dando dica de graça",
  "tô aqui. esperando. flutuando",
  "travou? pensa em todo Pokémon que cê lembra desse tipo",
  "tá mais parado que Metapod usando Endurecer",
  "dormiu? o Jigglypuff ficaria orgulhoso",
  "a tabela tá cheia de pista, lê comigo devagarinho",
  "chuta qualquer coisa mano, até Bidoof",
  "tá com cara de Psyduck pensando",
  "parado assim cê perdia corrida pro Slowpoke",
  "sabe o que ajuda? chutar. sabe o que não ajuda? ficar parado",
  "o secreto foi fazer um lanche, volta quando cê chutar",
  "essas horas é respirar, ter paciência e chutar"
],

/* ---------- cutucar o mascote nesta página ---------- */
cutucarPokemon: [
  "ai! me cutucou igual o Ash cutuca a bochecha do Pikachu. só que sem choque",
  "para de me cutucar e chuta um Pokémon, vai",
  "eu não sou Pokébola pra ficar clicando não",
  "me cutucou. usei Olhar Fulminante, a defesa do teu dedo caiu",
  "tô segurando a resposta aqui, não me distrai",
  "se eu tivesse golpe era Frustração, cuidado",
  "cê cutucou o Bugado! o Bugado ficou confuso! ele se machucou na confusão!",
  "não adianta me cutucar que eu não conto. nem por pizza. por pizza talvez",
  "clicar no fantasma não revela o Pokémon, eu sei que cê tinha esperança",
  "sou fantasma igual Gengar, só que mais bonito",
  "cutuca de novo e eu troco o secreto. será?",
  "quer me capturar? precisa de Master Ball e um pouco de respeito",
  "eu não evoluo com carinho. evoluo com XP. o teu, no caso",
  "opa, quase derrubei a Pokédex",
  "para! tô tentando lembrar se o Wooper tem braço",
  "cutucou! não foi muito efetivo",
  "foi um golpe crítico. no meu orgulho",
  "se eu fosse Pokémon selvagem já tinha fugido, mas tô preso no código",
  "eu sei quem é o secreto e cê não. cutucar não muda isso",
  "me cutucar dá XP? não. mas me irrita, que é quase a mesma coisa",
  "o Bugado usou Esquiva! teu dedo errou",
  "carrego a Pokédex inteira na cabeça, tá pesado aqui dentro",
  "o Psyduck tem dor de cabeça, eu tenho dor de cutucada",
  "cê não é o Professor Carvalho pra ficar mexendo em mim",
  "sou fantasma mas tenho sentimento uai",
  "cutucada registrada no meu diário, página: gente insistente",
  "sabe qual Pokémon eu sou? o que fala demais. não existe, eu sou o primeiro",
  "para de me clicar, parece que tá caçando shiny",
  "cada cutucada tira 1 de HP meu. ainda tenho 998",
  "se clicar cem vezes aparece o Mew debaixo do caminhão. é lenda, não clica",
  "me cutucou? vou contar pra Enfermeira Joy",
  "não sou o Pikachu, aqui não tem choque. só decepção",
  "ei! eu tô torcendo por você. não parece mas tô",
  "cutucar o mascote: 100% de precisão, zero de poder",
  "sou tipo Fantasma, golpe Normal não me pega",
  "sou tipo um Rotom de fliperama. moro na máquina e reclamo",
  "quer uma dica? a dica é: não me cutuca",
  "tô aqui flutuando sem te julgar. tá, julgo um pouquinho",
  "se me capturassem era na Pokébola mais barata, e eu ainda escapava",
  "o Bugado tá bem. o Bugado só tá bravinho",
  "clica de novo e eu começo a cantar igual Jigglypuff",
  "não sou Magikarp pra ficar pulando quando cê mexe. tá, pulei",
  "cutucar não é chutar. chutar é ali na caixinha de texto",
  "KKKKK para mano",
  "tá maluco, dedo nervoso esse",
  "papo reto, me cutucar não ajuda em nada"
]
};

// junta as falas gerais (aleatórias e de "tá parado?") com as do Pokémon
L.pkAleatorio = L.pkAleatorio.concat(F.aleatorio || []);
L.pkParado = L.pkParado.concat(F.parado || []);
Object.keys(ESP).forEach(k => { L['pk@' + k] = ESP[k]; });
Bugado.addLines(L);
})();
