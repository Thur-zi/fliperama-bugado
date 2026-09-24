/* ==========================================================
   Falas do Bugado para "Quem é esse Pokémon?"
   Variáveis: {pokemon} (nome chutado, ou o secreto nas vitórias),
   {n} (nº de chutes), {tipo}, {geracao}, {cor}.
   Categorias "pk@<id>" = falas de Pokémon específicos (id = nome
   sem acento/pontuação, ex.: "mrmime", "farfetchd").
   ========================================================== */
(() => {
const F = window.FALAS || {};

/* ---------- Pokémon específicos ---------- */
const ESP = {
  magikarp: [
    "Magikarp! O Pokémon mais inútil e mais inspirador da história. Usou Splash. Nada aconteceu.",
    "Chutou Magikarp. Se acertasse, virava Gyarados. Como errou, continua pulando no chão.",
    "Magikarp? Comprou do vendedor suspeito do Centro Pokémon por 500, né? Eu sabia."
  ],
  psyduck: [
    "Psyduck! Com dor de cabeça, igualzinho você tentando adivinhar.",
    "O Psyduck olhou pra essa tabela e a dor de cabeça dele piorou.",
    "Chutou Psyduck. Ele não sabe por que tá aqui. Sinceramente, você também não."
  ],
  snorlax: [
    "Snorlax! Ele nem acordou pra dizer que não é ele. Tá roncando na tabela.",
    "Snorlax bloqueou o caminho. Não é ele. Vai precisar da Pokéflauta pra seguir.",
    "Snorlax: 460 kg de preguiça. Usa esse peso pra calibrar a setinha, pelo menos."
  ],
  charizard: [
    "Charizard! O favorito de 9 entre 10 crianças e 10 entre 10 adultos nostálgicos.",
    "Não é o Charizard. E se fosse, ele não ia te obedecer mesmo.",
    "Chutou Charizard. Detectei uma carta holográfica de 1999 guardada no seu coração."
  ],
  eevee: [
    "Eevee! Tem oito evoluções e nenhuma é o secreto. Tá, talvez uma. Não conto.",
    "Eevee: o Pokémon indeciso. Combina com esse chute."
  ],
  mewtwo: [
    "Mewtwo! Criado em laboratório pra ser o mais forte. Não pra ser a resposta.",
    "O Mewtwo leu sua mente e respondeu: não sou eu, humano."
  ],
  mew: [
    "Mew! Tá debaixo do caminhão? Não. Tá na resposta? Também não.",
    "Chutou o Mew. Ele deu uma risadinha e ficou invisível."
  ],
  gengar: [
    "Gengar! Primo distante meu. Mas ele sorri demais, eu sou mais discreto.",
    "O Gengar tá rindo da sua cara. Eu também, mas por motivos acadêmicos."
  ],
  jigglypuff: [
    "Jigglypuff! Cuidado que ele canta e você dorme no meio do jogo.",
    "O Jigglypuff tá rabiscando sua cara porque você dormiu nesse chute."
  ],
  ditto: [
    "Ditto! Ele pode virar qualquer Pokémon, até o secreto. Mas hoje ele é só uma gosma.",
    "Chutou Ditto. Ele copiou sua cara de dúvida com perfeição."
  ],
  lucario: [
    "Lucario! Sente a aura de tudo, mas não sentiu a resposta.",
    "Chutou Lucario. Quem viu o filme dele chorou. Eu chorei. Não conta pra ninguém."
  ],
  greninja: [
    "Greninja! Ninja, sapo e errado. Três em um.",
    "O Greninja sumiu numa cortina de fumaça. Não era ele."
  ],
  bulbasaur: [
    "Bulbasaur! A escolha dos sábios. Hoje, nem tão sábios.",
    "Bulbasaur: planta, veneno e eternamente injustiçado. Não é ele."
  ],
  squirtle: [
    "Squirtle! Bota os óculos escuros do Esquadrão Squirtle. Não é ele.",
    "Squirtle usou Bolha. A bolha estourou. Igual esse chute."
  ],
  charmander: [
    "Charmander! Cuida bem da chama do rabo. E desse chute, que tá apagando.",
    "Chutou Charmander. O Damian abandonou ele na chuva e você chutou ele sem querer. Ciclo triste."
  ],
  meowth: [
    "Meowth! O único que aprendeu a falar. Eu também aprendi. Somos colegas de profissão.",
    "Meowth, é isso aí! ...não, não é isso aí."
  ],
  slowpoke: [
    "Slowpoke! Ele vai perceber que não é a resposta daqui a uns cinco segundos.",
    "Chutou Slowpoke. O Slowpoke ainda tá processando esse chute."
  ],
  onix: [
    "Onix! 8,8 metros de pedra e só 210 kg. Ele é oco. Não tem outra explicação.",
    "Não é o Onix. Mas a altura dele ajuda a entender as setas."
  ],
  gyarados: [
    "Gyarados! O Magikarp que deu certo na vida.",
    "Gyarados chutado. Cheio de fúria, mas não é dragão. Nem a resposta."
  ],
  lapras: [
    "Lapras! A carona mais fofa dos sete mares.",
    "Não é o Lapras. Mas ele te levaria pra casa se você pedisse com jeitinho."
  ],
  dragonite: [
    "Dragonite! O dragão mais fofo e carteiro nas horas vagas.",
    "O Dragonite entregou a notícia em mãos: não é ele."
  ],
  togepi: [
    "Togepi! O ovo mais famoso da Misty. Não chocou a resposta.",
    "Chutou Togepi. Toge-toge-priiii. Errado."
  ],
  wobbuffet: [
    "WOBBUFFEEEET! Ele só grita e revida. Não é ele.",
    "O Wobbuffet saiu da Pokébola só pra bater continência. Errado."
  ],
  sudowoodo: [
    "Sudowoodo! Finge ser árvore, é Pedra. Igual esse chute: finge ser certo.",
    "Não é o Sudowoodo. Joga água nele pra ver ele sair correndo."
  ],
  mimikyu: [
    "Mimikyu! Só quer ser amado fantasiado de Pikachu. Coitadinho. Não é ele.",
    "Chutou Mimikyu. Não levanta o pano dele. Sério. Não."
  ],
  garchomp: [
    "Garchomp! Tubarão-dragão a jato. Chute rápido, mas errado.",
    "Garchomp! A Cynthia aprovaria. A tabela, não."
  ],
  rayquaza: [
    "Rayquaza! Mora na camada de ozônio. Tá bem longe da resposta também.",
    "O Rayquaza desceu do céu só pra dizer não."
  ],
  arceus: [
    "Arceus! Você chutou deus. Deus disse não.",
    "O Arceus criou o universo, mas não é o Pokémon de hoje."
  ],
  bidoof: [
    "Bidoof! O Pokémon mais subestimado do mundo. E hoje, o mais errado.",
    "Bidoof! Ele tá feliz só de ter sido lembrado. Deixa ele."
  ],
  tauros: [
    "Tauros! Tá rodando em volta igual Tauros na Zona Safari.",
    "O Ash tinha uns trinta Tauros. Nenhum era a resposta."
  ],
  porygon: [
    "Porygon! Aquele que ninguém explica por que sumiu do anime.",
    "Porygon chutado. Cuidado com as luzes piscando."
  ],
  machamp: [
    "Machamp! Quatro braços e zero acertos.",
    "O Machamp tentou levantar a resposta. Pesada demais."
  ],
  cubone: [
    "Cubone... o do capacete triste. Não é ele. Dá um abraço nele.",
    "Chutou Cubone. Eu chorei um pouquinho. Não é ele."
  ],
  pidgey: [
    "Pidgey! O primeiro Pokémon de todo mundo, que ninguém usa depois.",
    "Pidgey chutado. Vibe total de Rota 1."
  ],
  rattata: [
    "Rattata! O famoso Rattata top percentage. Mas não é ele.",
    "Rattata? Tá chutando o mato alto inteiro agora?"
  ],
  zubat: [
    "Zubat! Ninguém gosta, todo mundo encontra. Não é ele.",
    "Zubat. De novo. Por que SEMPRE tem Zubat?"
  ],
  wailord: [
    "Wailord! 14,5 metros. Pelo menos agora você sabe o tamanho do exagero.",
    "Wailord: enorme, leve e errado."
  ],
  shedinja: [
    "Shedinja! Um ponto de vida e muitas perguntas existenciais.",
    "Shedinja: um casco oco de fantasma. Parente meu? Não é ele."
  ],
  metapod: [
    "Metapod usou Endurecer! O chute não endureceu, amoleceu.",
    "Metapod! A emoção de assistir um casulo existindo."
  ],
  mrmime: [
    "Mr. Mime! Ele tá fazendo mímica de ERRADO.",
    "O Mr. Mime bateu na parede invisível. Igual você nesse chute."
  ],
  sableye: [
    "Sableye! Olho de diamante, chute de bijuteria.",
    "O Sableye tá rindo no escuro. Ele sabe que não é ele."
  ],
  lickitung: [
    "Lickitung! Aquela língua. Ninguém pediu aquela língua.",
    "Chutou Lickitung. Eca. Não é ele."
  ],
  mudkip: [
    "Mudkip! So I herd u liek Mudkipz. Não é ele.",
    "Mudkip: clássico da internet. Não da resposta."
  ],
  lugia: [
    "Lugia! O guardião dos mares chegou e disse não.",
    "O Lugia é lindo, mas não é ele."
  ],
  hooh: [
    "Ho-Oh! O Ash viu ele no episódio 1 e nunca pegou. Você também não pegou a resposta.",
    "Ho-Oh chutado. Brilhou, arco-íris, tudo lindo. Errado."
  ],
  wooper: [
    "Wooper! Sem braço, com muito carisma. Não é ele.",
    "O Wooper tá sorrindo mesmo errado. Seja mais Wooper."
  ],
  slaking: [
    "Slaking! Tão preguiçoso que nem se deu ao trabalho de ser a resposta.",
    "O Slaking deitou no meio da tabela. Não é ele."
  ],
  geodude: [
    "Geodude! Uma pedra com braço. Você chutou uma pedra.",
    "Geodude chutado. Pedra, terrestre e errado."
  ],
  alakazam: [
    "Alakazam! QI de 5000 e mesmo assim não é ele.",
    "O Alakazam entortou a colher de nervoso. Não é ele."
  ],
  kangaskhan: [
    "Kangaskhan! Mamãe canguru. Não é ela, nem o filhote.",
    "Chutou Kangaskhan. O filhote na bolsa acenou dizendo não."
  ],
  voltorb: [
    "Voltorb! Parece Pokébola, explode na sua cara. Errado.",
    "Voltorb chutado. Cuidado, esse aí não era item."
  ],
  gardevoir: [
    "Gardevoir! Elegante, psíquica e errada.",
    "A Gardevoir previu que você ia chutar ela. E previu que tava errado."
  ]
};
window.PK_ESP = ESP;

const L = {

/* ---------- início de partida ---------- */
pkInicioDiario: [
  "Pokémon do dia carregado. Todo mundo no Brasil tá chutando o mesmo. Sem pressão. Muita pressão.",
  "Diário novo! Um Pokémon secreto, chutes infinitos e zero dignidade garantida.",
  "Bem-vindo à Pokédex bugada. Eu sei quem é. Você não. Adoro essa dinâmica.",
  "Hoje o secreto é o... ah, quase contei. Quase. Chuta aí.",
  "São 1025 Pokémon possíveis. Se chutar um por segundo, termina antes do almoço. Não recomendo.",
  "Regra número 1: não chuta Pikachu. Regra número 2: você vai chutar Pikachu.",
  "Mais um dia, mais um bicho misterioso. O Professor Carvalho conta com você. Mentira, ele esqueceu seu nome.",
  "Diário liberado. Verde é bom, vermelho é ruim, amarelo é quase. Até o Psyduck entende. Às vezes.",
  "Prepara a Pokébola mental. O de hoje é bem... Pokémon. É tudo que eu posso dizer.",
  "Começou! Primeiro chute é sempre no escuro. Tipo o Zubat, que nem olho tem.",
  "Novo dia, novo desafio. Se acertar de primeira eu vou exigir exame antidoping.",
  "O Pokémon de hoje tá escondido no mato alto. E você sem Repel."
],
pkInicioFacil: [
  "Modo Fácil: só Kanto, Johto e Hoenn. Os clássicos. Se errar aqui, devolve o Game Boy.",
  "Fácil! Só as três primeiras gerações. Nostalgia pura, dificuldade de menos.",
  "Aqui só tem Pokémon da época em que você trocava cartinha no recreio.",
  "Modo Fácil ativado. Nada de Pokémon novo com nome de marca de iogurte. Só raiz.",
  "Gerações 1 a 3. Se você não sabe essas, o problema é de infância.",
  "Fácil, mas não subestima. Tem Pokémon de Hoenn que nem a mãe dele lembra.",
  "Kanto, Johto, Hoenn. Três regiões, 386 bichos, um só secreto.",
  "Modo pra aquecer os dedos. Tipo a Rota 1: Pidgey, Rattata e talvez um trauma.",
  "Pokémon raiz, dificuldade Nutella. Vai lá.",
  "Fácil é o nome do modo, não uma promessa."
],
pkInicioInfinito: [
  "Infinito: sorteio aleatório, dá pra jogar até o sol nascer. Eu não durmo mesmo.",
  "Modo Infinito. Acertou, sorteia outro. É o ciclo da vida, versão Pokédex.",
  "Aqui não tem diário, não tem limite, não tem vergonha. Só chute.",
  "Infinito ligado. Sorteei um Pokémon totalmente aleatório. Até eu tô curioso. Mentira, eu já sei.",
  "Bem-vindo ao grind. Farmar XP chutando Pokémon. A mãe do Ash aprovaria.",
  "Infinito: XP pela metade, diversão em dobro. Matemática de treinador.",
  "Pode ser qualquer um dos 1025. Inclusive aquele que parece um sorvete. Existem vários, aliás.",
  "Modo sem fim. Tipo a jornada do Ash, só que você tem chance de terminar.",
  "Sorteei um. Pode ser lendário, pode ser um Bidoof. A vida é uma caixinha de surpresas.",
  "Infinito! O único limite é a sua bateria. E a minha paciência, que também é infinita. Mais ou menos."
],
pkNovaRodada: [
  "Novo Pokémon sorteado. O anterior já foi pro PC do Bill.",
  "Outro! Lá vamos nós de novo, igual Equipe Rocket depois de decolar.",
  "Rodada nova, esperança nova, chutes duvidosos novos.",
  "Sorteado. Esse aqui é... interessante. Não vou falar mais nada.",
  "Mais um? Viciou, né. Eu avisei que ia viciar.",
  "Um Pokémon selvagem apareceu! ...você só não sabe qual.",
  "Zerei o tabuleiro. Seu histórico de vergonha foi apagado. Por enquanto.",
  "Novo sorteio. Se for Magikarp de novo, juro que não fui eu.",
  "Tá aí mais um. Bora manter a sequência, treinador.",
  "Nova rodada. Eu sei, eu sei: só mais uma. Todo mundo fala isso.",
  "Um novo Pokémon se escondeu na grama. Pisa com cuidado.",
  "Bora de novo! A Pokédex não vai se completar sozinha."
],
pkSilhuetaInicio: [
  "QUEM É ESSE POKÉMON? Eu sempre quis falar isso com a voz da TV.",
  "Modo Silhueta: só a sombra e o seu instinto de criança da TV aberta.",
  "Olha essa silhueta. Olha bem. Agora finge que sabe.",
  "Aqui é só nome. Nada de tabela, nada de setinha. Raiz total, igual intervalo do desenho.",
  "Silhueta preta, fundo amarelo, musiquinha na cabeça. Você sabe qual.",
  "Se for o Pikachu eu te dou um biscoito. Não vai ser o Pikachu.",
  "Sombra misteriosa detectada. Pode ser um lendário, pode ser um Ditto fingindo.",
  "Modo Silhueta! Vale olhar de longe, apertar os olhos e entortar a cabeça.",
  "Parece um Pokémon. Isso eu garanto. O resto é com você.",
  "O clássico dos intervalos. Só faltou o comercial de salgadinho com tazo.",
  "Silhueta na tela. Todo mundo já gritou a resposta errada pra TV, é tradição.",
  "Chuta pelo formato. Orelha, rabo, barriga. Pokémon é basicamente isso."
],
pkRetomou: [
  "Voltou! Seus {n} chutes continuam aqui, intactos e errados.",
  "Ah, você de novo. Deixei tudo do jeitinho que você largou.",
  "Retomando de onde parou. A tabela sentiu sua falta. Eu não. Tá, um pouco.",
  "Oi de novo. O Pokémon secreto não mudou. Nem a sua situação.",
  "Voltou pro crime. {n} chutes até agora, caso você não lembre.",
  "Salvei seu progresso. Diferente do Ash, que zerava tudo a cada região.",
  "Bem-vindo de volta. A Pokédex ficou aberta te esperando.",
  "A pausa pro lanche acabou? Bora continuar."
],

/* ---------- primeiro chute e chutes especiais ---------- */
pkPrimeiro: [
  "Primeiro chute: <b>{pokemon}</b>. Clássico começo de quem não faz ideia.",
  "Abriu com <b>{pokemon}</b>. Estratégia ou apego emocional?",
  "<b>{pokemon}</b> de cara? Tá bom. Todo mestre começa errando.",
  "O primeiro chute é só pra ver as cores. Ninguém julga. Eu julgo um pouquinho.",
  "<b>{pokemon}</b>! Um começo corajoso. Errado, mas corajoso.",
  "Começou com <b>{pokemon}</b>. Agora olha a tabela e finge que tem um plano.",
  "Primeiro chute registrado na Pokédex da vergonha.",
  "Todo mundo tem um Pokémon de abertura. O seu é <b>{pokemon}</b>. Anotado.",
  "<b>{pokemon}</b> pra aquecer. Tipo um Pidgey no começo do jogo.",
  "Aí sim, largou! Agora é só ir estreitando. Tipo Onix passando numa caverna.",
  "Chute número 1. Faltam só uns... sei lá. Muitos. Poucos? Depende de você.",
  "Primeiro palpite: <b>{pokemon}</b>. Eu teria escolhido outro. Mas eu sei a resposta, então não conta.",
  "Começou! Lê as cores com calma, ninguém tá te apressando. Só eu.",
  "<b>{pokemon}</b>... interessante. Muito interessante. Não é ele, mas interessante.",
  "Abertura com <b>{pokemon}</b>. O xadrez dos treinadores.",
  "Primeiro chute feito. Agora você tem informação. Use com sabedoria. Ou não.",
  "Chutar <b>{pokemon}</b> primeiro diz muito sobre você. Não vou dizer o quê.",
  "O importante é chutar. O Magikarp só sabe Splash e tá aí até hoje."
],
pkPikachu: [
  "Chutou Pikachu? Ousado. Original. Errado.",
  "Pikachu. Claro. O que todo mundo chuta quando não sabe nada. Tipo falar batata no Stop.",
  "É o Pikachu? NÃO. Nunca é o Pikachu. Ele tá de férias com o Ash.",
  "Pikachu, sério? A Nintendo te pagou pra isso?",
  "Pika-pika-errou.",
  "O Pikachu se recusou a entrar na Pokébola e se recusou a ser a resposta também.",
  "Chutar Pikachu é o olá mundo desse jogo. Parabéns, você rodou o tutorial.",
  "Pikachu te deu um choque de realidade: não é ele.",
  "Até o Pikachu ficou com vergonha. Olha a bochecha vermelha dele.",
  "Se fosse o Pikachu, esse jogo se chamaria Óbvio. Chuta de novo.",
  "O Pikachu é o mascote da franquia. Aqui o mascote sou eu. Não gostei desse chute.",
  "Pikachu usou Choque do Trovão! Não foi muito efetivo."
],
pkInicial: [
  "<b>{pokemon}</b>! Inicial, né? A primeira escolha de todo mundo. A segunda também.",
  "Chutou um inicial. O Professor Carvalho ficaria orgulhoso. A resposta, nem tanto.",
  "<b>{pokemon}</b>: aquele que você escolheu no começo e depois largou no PC.",
  "Inicial de novo? Tá revivendo a infância ou chutando Pokémon?",
  "Três Pokébolas na mesa do professor e você foi logo no <b>{pokemon}</b>. Previsível.",
  "Todo mundo sabe o nome dos iniciais. O problema é lembrar dos outros mil.",
  "<b>{pokemon}</b>! Eu sabia que você era do time dele. Tava na sua cara.",
  "Chutar inicial é quase chantagem emocional. Acertou meu coração, não o jogo.",
  "Inicial detectado. A nostalgia bateu, mas a tabela bateu mais forte.",
  "O <b>{pokemon}</b> foi o parceiro de alguém em algum lugar. Hoje ele não é o secreto.",
  "Fogo, água ou planta? Você escolheu errado. Aliás, nem tinha certo.",
  "<b>{pokemon}</b>, o eterno escolhido. Menos hoje.",
  "Voltou pro laboratório do professor, é? Bom, pelo menos a informação vale.",
  "Iniciais são os primeiros que a gente aprende. E os primeiros que a gente erra, pelo visto."
],
pkLendario: [
  "<b>{pokemon}</b>?! Chutou um lendário. Mira alta, hein.",
  "Lendário! Tá achando que o de hoje é especial assim? Talvez seja. Talvez não.",
  "<b>{pokemon}</b>. Você gastou uma Master Ball num chute. Respeito.",
  "Chutar lendário é tipo jogar na Mega-Sena. Acontece. Raramente.",
  "O <b>{pokemon}</b> desceu dos céus só pra te dizer que não é ele.",
  "Lendário no chute? Tá com fé. Eu gosto de fé. Não ajuda, mas gosto.",
  "<b>{pokemon}</b>! Até a música de batalha mudou na minha cabeça.",
  "Um lendário apareceu! ...e foi embora. Não era ele.",
  "Você chutou <b>{pokemon}</b> igual quem joga Pokébola comum em lendário. Com esperança.",
  "Lendários são raros. Acertar lendário no chute é mais raro ainda.",
  "<b>{pokemon}</b> tem mesmo cara de resposta de diário. Mas hoje não, fera.",
  "Chutou um ser divino. O ser divino não aprovou.",
  "Lendário anotado. Se fosse fácil assim, a Equipe Rocket já tinha pegado.",
  "<b>{pokemon}</b>, é? Mirou no chefão. Às vezes o secreto é um Caterpie mesmo."
],

/* ---------- reações às pistas ---------- */
pkTudoVermelho: [
  "Tudo vermelho. TUDO. Parece a Pokédex pegando fogo.",
  "Nenhum acerto. Nenhum. Isso é quase um talento.",
  "<b>{pokemon}</b> não tem nada a ver com o secreto. Nada. Nem o CEP.",
  "Vermelho de ponta a ponta. Até o Charmander ficou com inveja da cor.",
  "Zero verde. Pelo menos agora você sabe tudo que NÃO é. Isso é ciência.",
  "Uau. Completamente errado. Tipo o Psyduck tentando fazer conta.",
  "Esse chute foi tão longe que a Equipe Rocket viu passar decolando.",
  "Tabela toda vermelha. Tá parecendo o placar do meu time.",
  "Nada bate. <b>{pokemon}</b> e o secreto nem se cumprimentariam na rua.",
  "Errou tudo, mas errou com convicção. Isso conta alguma coisa. Pra mim não, mas conta.",
  "Nem tipo, nem geração, nem tamanho. Você pescou um Magikarp de informação.",
  "Tudo vermelho! Relaxa, isso elimina um monte de coisa. Tô tentando te animar aqui.",
  "Isso não foi um chute, foi um pênalti na arquibancada.",
  "<b>{pokemon}</b>: o oposto perfeito do secreto. Quase dá pra usar como bússola ao contrário.",
  "Nenhuma pista verde. Tá mais perdido que o Ash em Hoenn sem mapa.",
  "Vermelhinho total. Pelo menos combina com a Pokédex.",
  "Chute {n} e zero acertos nesse. Respira. Pokémon também erra ataque.",
  "Tudo errado com <b>{pokemon}</b>. O Professor Carvalho perguntaria seu nome de novo.",
  "Zero de sete. Estatisticamente impressionante.",
  "Parabéns, você descobriu tudo que o secreto NÃO é. Faltam só os outros detalhes."
],
pkTipoCerto: [
  "Tipo <b>{tipo}</b> certinho! Agora tem um fio pra puxar.",
  "Opa, <b>{tipo}</b> bateu. O cerco tá fechando.",
  "Acertou o tipo <b>{tipo}</b>. Agora é só achar o resto. Moleza. Mentira.",
  "<b>{tipo}</b> no lugar certo. Seu cérebro de treinador tá funcionando.",
  "Tipo certo! Tá esquentando. Não tipo Fogo, tipo chegando perto.",
  "Um verdinho no tipo. Guarda essa informação com carinho.",
  "É <b>{tipo}</b> sim. Agora lista na cabeça todos os <b>{tipo}</b> que você lembra.",
  "Boa! O tipo <b>{tipo}</b> tá confirmado. O resto ainda tá uma bagunça.",
  "<b>{tipo}</b> acertado. Os líderes de ginásio desse tipo estão te observando.",
  "Tipo certo. O secreto começou a suar.",
  "Aí sim! <b>{tipo}</b> no alvo. Agora não sai chutando Pokémon de outro tipo, pelo amor.",
  "Acertou o tipo. Faltam só geração, tamanho, peso, cor, evolução e o nome. Pouca coisa.",
  "Verde no <b>{tipo}</b>. Que emoção. Quase chorei. Fantasma chora?",
  "<b>{tipo}</b> confirmado pela Pokédex. Agora usa isso, não chuta um Normal por impulso.",
  "O tipo tá certo, o resto tá torto. Mas é progresso.",
  "Tipo <b>{tipo}</b>, anotado. Você tá virando detetive. Tipo o Pikachu de chapéu."
],
pkTipoTrocado: [
  "Amarelo no tipo! O <b>{tipo}</b> tá lá, só que no outro slot.",
  "<b>{tipo}</b> existe no secreto, mas trocado. Tipo sapato no pé errado.",
  "Quase! O tipo é esse, mas na outra posição. Pokémon é chato com ordem.",
  "Amarelinho! <b>{tipo}</b> tá no secreto, só que invertido. Procura um com a ordem trocada.",
  "Tipo trocado. O secreto tem <b>{tipo}</b>, mas não onde você botou.",
  "Amarelo é o quase do Pokémon. <b>{tipo}</b> tá certo, lugar errado.",
  "Boa pista! Agora pensa num Pokémon que tem <b>{tipo}</b> do outro lado.",
  "O <b>{tipo}</b> tá no time, mas jogando em outra posição.",
  "Tipo no lugar errado. Tipo chegar na festa certa no dia errado.",
  "Amarelou! Isso é informação valiosa, não desperdiça.",
  "<b>{tipo}</b> confirmado, mas de ladinho. Inverte o raciocínio.",
  "Olha o amarelo aí! O secreto tem <b>{tipo}</b>, só que como o outro tipo dele.",
  "Tá perto: o tipo existe, mas a ordem não bate. Pokémon tem mania de organização.",
  "Amarelo no tipo. Não é verde, mas também não é vergonha."
],
pkTiposCertos: [
  "Os dois tipos certinhos! Agora é só achar quem mais tem essa combinação.",
  "Tipagem completa! O secreto é <b>{tipo}</b> mesmo. Filtro ligado.",
  "Tipos perfeitos. Existem menos Pokémon <b>{tipo}</b> do que você imagina. Ou mais. Pensa.",
  "Dois verdes nos tipos. Você tá fungando no cangote do secreto.",
  "Acertou os dois tipos! Agora cruza com a geração e pronto. Pronto em teoria.",
  "Tipagem idêntica. <b>{pokemon}</b> e o secreto são praticamente primos.",
  "Tipos 100%. Agora olha o tamanho e o peso, detetive.",
  "Os tipos batem! <b>{pokemon}</b> e o secreto poderiam dividir apartamento.",
  "Combinação de tipos certa. O cerco fechou. O Pokémon tá nervoso.",
  "Tipo 1 e tipo 2 verdinhos. Dá até pra sentir o cheiro da vitória.",
  "Tipagem certa! Agora não vai estragar chutando outra coisa, hein.",
  "Os tipos são <b>{tipo}</b>. O resto é detalhe. Detalhe importante, mas detalhe."
],
pkGeracaoCerta: [
  "Geração {geracao} certinha! Agora é só lembrar de todo mundo dessa região.",
  "Acertou a geração! A gen {geracao} é o bairro do secreto.",
  "Gen {geracao} confirmada. Você jogou essa, né? Né?",
  "Geração certa. Agora pensa no mapa dessa região e sai caçando.",
  "Verde na geração! O secreto nasceu na gen {geracao}, igual <b>{pokemon}</b>.",
  "Geração {geracao} bateu. Agora filtra: tipo, tamanho, peso. Pokédex mental ligada.",
  "Opa, mesma geração. <b>{pokemon}</b> e o secreto estudaram na mesma escola.",
  "Geração certa, bicho errado. Tá rodando em volta igual Tauros.",
  "Gen {geracao}! Lembra da trilha sonora dessa? Não ajuda, mas é bonita.",
  "A geração tá certa. O resto tá discutível.",
  "Mesma geração, Pokémon errado. Prédio certo, andar errado.",
  "Geração {geracao} confirmada. Se você só jogou a primeira, boa sorte.",
  "Acertou a gen! Agora não sai da gen {geracao}, pelo amor de Arceus.",
  "Verde na geração. Pelo menos o calendário você acertou."
],
pkGeracaoSobe: [
  "O secreto é de uma geração mais nova. Sobe, sobe, sobe.",
  "Seta pra cima na geração: o secreto é mais novinho que o <b>{pokemon}</b>.",
  "Geração {geracao} é antiga demais. O secreto chegou depois.",
  "Mais recente! Tem que avançar no tempo. Pega o DeLorean.",
  "Sobe a geração. Sim, você vai ter que lembrar de Pokémon com nome esquisito.",
  "O secreto é de gen mais alta. Os clássicos ficaram pra trás, vovô.",
  "Seta pra cima. Nada de Kanto nostálgico agora.",
  "Mais novo que a gen {geracao}. Sua Pokédex mental precisa de atualização.",
  "Geração acima. Bora pro futuro, treinador.",
  "É mais moderno. Tipo aquele que você olhou e falou: isso nem parece Pokémon."
],
pkGeracaoDesce: [
  "O secreto é de uma geração mais antiga. Volta no tempo.",
  "Seta pra baixo na geração: o secreto é mais velho que o <b>{pokemon}</b>.",
  "Gen {geracao} é nova demais. O secreto é mais clássico.",
  "Mais antigo! Tira o Game Boy da gaveta.",
  "Desce a geração. O secreto é da época do cartucho, provavelmente.",
  "O secreto é vintage. Mais velho que a gen {geracao}.",
  "Seta pra baixo. Menos modernidade, mais nostalgia.",
  "Geração abaixo. O secreto já existia quando o <b>{pokemon}</b> nem era rascunho.",
  "Volta umas gerações. Sim, isso inclui lembrar da gen 3. Coragem.",
  "Mais antigo. Pokémon raiz. Daqueles que vinham no tazo."
],
pkMaior: [
  "O secreto é MUITO mais alto que o <b>{pokemon}</b>. Olha pra cima.",
  "Seta pra cima na altura, e das grandes. Pensa em coisa enorme.",
  "<b>{pokemon}</b> é um nanico perto do secreto.",
  "Altura muito errada. O secreto provavelmente não cabe na sua sala.",
  "Pensa maior. Bem maior. Tipo Onix, mas não necessariamente Onix.",
  "O secreto bate a cabeça no teto. Você chutou de chinelo.",
  "Sobe, sobe! O secreto teria que se abaixar pra entrar no Centro Pokémon.",
  "Diferença de altura gigante. Literalmente.",
  "O secreto olharia pro <b>{pokemon}</b> igual a gente olha pra formiga.",
  "Altura: bem mais alto. Troca a lupa por um binóculo."
],
pkMenor: [
  "O secreto é MUITO menor que o <b>{pokemon}</b>. Pensa pequeno.",
  "Seta pra baixo na altura. O secreto cabe no bolso.",
  "<b>{pokemon}</b> é um prédio perto do secreto.",
  "Diminui! O secreto é tamanho chaveiro.",
  "Pensa em coisa pequenininha. Fofa ou venenosa, mas pequenininha.",
  "Altura muito acima. O secreto passa por baixo da porta.",
  "Menor, bem menor. Tipo Joltik, que você nem enxerga.",
  "O secreto é miudinho. O <b>{pokemon}</b> pisaria nele sem querer.",
  "Desce a altura. Muito. Tipo Metapod caindo da árvore.",
  "Você chutou um gigante. O secreto é tampinha."
],
pkMaisPesado: [
  "O secreto é MUITO mais pesado. Tipo Snorlax depois do almoço.",
  "Peso bem acima. <b>{pokemon}</b> é uma pena perto dele.",
  "Seta pra cima no peso. Pensa em coisa que quebra balança.",
  "O secreto pesa uma tonelada perto do <b>{pokemon}</b>. Às vezes literalmente.",
  "Mais pesado, muito mais. Coisa de pedra, de metal ou de rodízio.",
  "Peso: o secreto afundaria o barco da Misty.",
  "O <b>{pokemon}</b> voa com o vento. O secreto, nem com furacão.",
  "Pensa pesado. Não emocionalmente. Em quilos.",
  "A balança pediu socorro. O secreto é bem mais pesado.",
  "Muito mais pesado. Esquece os fofinhos, pensa em trator."
],
pkMaisLeve: [
  "O secreto é MUITO mais leve. Tipo Gastly, que é basicamente gás.",
  "Peso bem abaixo. <b>{pokemon}</b> é uma geladeira perto dele.",
  "Seta pra baixo no peso. O secreto voa com um espirro.",
  "Mais leve, bem mais. Pensa em pena, balão, fantasminha.",
  "O secreto pesa menos que a sua mochila da escola.",
  "Pesado demais esse chute. O secreto tá de dieta.",
  "Desce o peso. O secreto subiria na balança e ela nem notaria.",
  "O <b>{pokemon}</b> esmagaria o secreto sem querer. Cuidado aí.",
  "Pensa leve. Leve tipo Hoppip, que o vento carrega.",
  "Peso: bem menos. Tira o Snorlax da cabeça."
],
pkPertoTamanho: [
  "Tamanho e peso bem parecidos! <b>{pokemon}</b> e o secreto usariam a mesma roupa.",
  "Quase o mesmo porte físico. Tá chegando perto, treinador.",
  "Altura e peso quase batendo. É só ajustar um tiquinho.",
  "Pertinho no tamanho! O secreto é tipo um primo do <b>{pokemon}</b>.",
  "Porte parecido. Lado a lado, dava pra confundir de longe.",
  "Tá quente no tamanho! Pena que tamanho não é documento.",
  "Medidas quase iguais. A costureira da Game Freak agradece.",
  "Altura e peso na vizinhança. Agora acerta o resto.",
  "Bateu quase certinho no tamanho. Tá rondando.",
  "Mesmo tamanho, mais ou menos. O resto é que tá atrapalhando.",
  "Quase o mesmo tamanho! Olha as setinhas, agora é ajuste fino.",
  "Porte bem parecido. Se fosse luta, era na mesma categoria de peso."
],
pkCorCerta: [
  "Cor certa! O secreto também é <b>{cor}</b>.",
  "<b>{cor}</b> confirmado. Agora imagina todos os Pokémon desse tom que você conhece.",
  "Acertou a cor. Pokédex de colorir, nível 1 concluído.",
  "Cor igual! Pelo menos a paleta você acertou.",
  "O secreto é <b>{cor}</b> mesmo. Mas não qualquer um.",
  "Verde na cor. Mesmo que a cor não seja verde. Entendeu? Eu entendi.",
  "A cor bateu. É um começo estético.",
  "Mesma cor na Pokédex! Os dois combinariam numa foto.",
  "A cor tá certa. Pensa em quem mais é <b>{cor}</b> e tem esse jeitão.",
  "<b>{cor}</b> igual. Os designers da Game Freak gostam dessa cor, pelo visto."
],
pkQuase: [
  "UOU. Quase tudo verde! Tá na pontinha da língua.",
  "Tá pertíssimo! Só falta um detalhe. Ou dois. Mas pequenos.",
  "<b>{pokemon}</b> é quase o secreto. Quase. Olha o que ficou vermelho.",
  "Muito verde! O secreto tá suando frio.",
  "Tão perto que dá pra ouvir o grito do Pokémon.",
  "Isso foi quase! Pensa num parente próximo do <b>{pokemon}</b>.",
  "Tá esquentando muito! Se fosse Pokébola, já tinha balançado duas vezes.",
  "Quase! Faltou pouco. Tipo a Pokébola que treme três vezes e abre.",
  "Olha esse monte de verde! Você tá a um chute de distância. Talvez.",
  "Que chute! Quase certeiro. Agora é ajuste fino.",
  "<b>{pokemon}</b> é quase ele! Evolução, pré-evolução, primo... pensa.",
  "Ficou tão perto que até eu me assustei.",
  "Isso aí é praticamente um gêmeo do secreto. Mas não é ele.",
  "O radar tá apitando! Muito verde, pouco vermelho."
],
pkMisto: [
  "<b>{pokemon}</b>. Anotado. Olha as cores e vai ajustando.",
  "Hum. Tem coisa certa, tem coisa errada. Tipo a vida.",
  "Chute {n}: <b>{pokemon}</b>. Tá indo. Devagar, mas tá indo.",
  "Algumas pistas boas aí. Não desperdiça.",
  "Mais um pro histórico. A tabela tá ficando bonita. Colorida, pelo menos.",
  "<b>{pokemon}</b> não é, mas ajudou. Obrigado, <b>{pokemon}</b>.",
  "Meio certo, meio errado. Tipo o Ditto imitando alguém de memória.",
  "Tá chegando. Ou se afastando. Só as setinhas sabem.",
  "Escolha interessante. Analisa as setas, treinador.",
  "Não é o <b>{pokemon}</b>. Mas você já sabia disso lá no fundo, né?",
  "Cada chute errado é um passo a menos. Diz o livro de autoajuda do Bugado.",
  "<b>{pokemon}</b> eliminado. Restam só uns mil. Mentira, bem menos, se você usar as pistas.",
  "Vai por eliminação. O Sherlock Holmes jogaria assim. Sherlock jogaria Pokémon?",
  "Pistas mistas. Pensa com calma, isso aqui não é speedrun.",
  "<b>{pokemon}</b> contribuiu com a ciência. Obrigado pelo serviço prestado.",
  "Mais uma linha na tabela. Mais uma camada de mistério.",
  "Tá rodando em volta igual Tauros. Uma hora você tromba nele.",
  "Nem quente nem frio. Morno. Tipo café de Centro Pokémon.",
  "O secreto riu desse chute. Baixinho, mas riu.",
  "Palpite {n}. A persistência é a maior arma do treinador. Depois do Hiper Raio.",
  "Legal, legal. Não é ele. Mas legal.",
  "<b>{pokemon}</b>, é? Olha as setas de altura e peso, elas tão gritando.",
  "Um verdinho ali, um vermelhão lá. Equilíbrio. Namastê.",
  "Nada mal. Nada bem também. Continua."
],

/* ---------- marcos de chutes ---------- */
pkMarco5: [
  "5 chutes. O Ash levou 25 anos, você tá indo bem.",
  "Quinto chute! Tem dica liberada ali embaixo. De nada.",
  "Cinco palpites. Tá virando uma jornada. Pega um lanche.",
  "5 tentativas e contando. Respira fundo e lê as setas.",
  "Chute número 5! Já tô com pena. Tem dica disponível, só dizendo.",
  "Cinco chutes. A média nacional é... não sei. Finge que você tá acima.",
  "5 já. Olha, a dica existe por um motivo.",
  "Quinto chute. O Pokémon secreto já tá bocejando.",
  "Cinco! Metade do caminho pra dez. Isso não é um elogio.",
  "5 chutes. Tá menos perdido que a Equipe Rocket, pelo menos."
],
pkMarco10: [
  "10 chutes! Já dá pra montar um time e ainda sobra reserva.",
  "Dez. DEZ. A segunda dica tá liberada, usa sem vergonha.",
  "Chute 10. O Professor Carvalho mandou mensagem perguntando se tá tudo bem.",
  "Dez tentativas. Você já viu mais Pokémon hoje do que muita gente na vida.",
  "10 chutes! Tá sendo uma maratona, mas maratona também acaba.",
  "Décimo palpite. O Magikarp já teria evoluído a essa altura.",
  "10! A primeira letra tá à disposição ali. Só falando.",
  "Dez chutes e ainda de pé. Guerreiro. Teimoso. Os dois.",
  "Chegou no 10. A tabela tá virando um pergaminho.",
  "10 chutes. Relaxa, o Ash perdeu várias ligas seguidas e continuou."
],
pkMarco15: [
  "15 chutes. Tô começando a achar que você coleciona os errados.",
  "Quinze! Já dá pra abrir um Centro Pokémon só com os errados.",
  "15 tentativas. A Enfermeira Joy tá preparando uma maca pra você.",
  "Chute 15. Você não desiste, né? Igual o James com aquele cabelo.",
  "Quinze. Olha, dica não é vergonha. Vergonha é chute 30.",
  "15 chutes e contando. Isso aqui virou novela mexicana.",
  "Quinze palpites! O secreto já tá com peninha.",
  "15. Se cada chute fosse uma insígnia, você tinha quase duas ligas."
],
pkMarco20: [
  "20 chutes. Isso já é uma temporada inteira do anime.",
  "Vinte! Tá mais longo que filler do Naruto.",
  "20 tentativas. Tô fazendo pipoca aqui.",
  "Chute 20. Eu acredito em você. Mais ou menos. Uns 40%.",
  "Vinte. Se isso fosse luta, o juiz já tinha parado.",
  "20 chutes. Sua Pokédex mental tá levando uma surra hoje.",
  "Vinte palpites. Isso é persistência nível Equipe Rocket.",
  "20! Nem o Pikachu demorou tanto pra... ah, ele nunca evoluiu. Péssimo exemplo."
],
pkMarcoMuito: [
  "{n} chutes. Isso não é mais um jogo, é um estilo de vida.",
  "Chute {n}. Eu já decorei sua tabela. Você já decorou?",
  "{n}! A Pokédex inteira tá assistindo.",
  "{n} tentativas. Tá com mais chute que o Hitmonlee.",
  "Tá no chute {n}. Só quero que você saiba que eu tô aqui. Rindo, mas aqui.",
  "{n} palpites e ainda firme. Admiro. Me preocupo, mas admiro.",
  "Chute {n}. Tem gente que zera o jogo com menos esforço.",
  "{n}. Respira, olha as setas e chuta com carinho.",
  "{n} chutes. Isso vai pro meu livro de recordes, seção uau.",
  "Chute número {n}. O secreto mandou avisar que tá com sono.",
  "{n}! Se chute desse XP, você já era nível 100.",
  "{n} tentativas. Isso é determinação ou teimosia. Linha tênue."
],

/* ---------- dicas ---------- */
pkDicaLiberada: [
  "Dica liberada! Tá ali embaixo piscando pra você.",
  "Liberei uma dica. Custa um pouco de XP, mas salva a dignidade.",
  "Tem dica disponível. Usar não é crime. É só um pouquinho vergonhoso.",
  "Dica nova no ar! O Professor Carvalho mandou pelo correio.",
  "Olha, liberou dica. Eu fingiria que não vi, mas tá ali.",
  "Dica desbloqueada. Tipo item escondido atrás da árvore.",
  "Uma dica apareceu! Ela quer ser usada. Olha a carinha dela.",
  "Dica pronta. Você decide: orgulho ou XP."
],
pkDicaSilhueta: [
  "Silhueta revelada! QUEM É ESSE POKÉMON? Sempre quis dizer isso.",
  "Aí está a sombra. Agora não tem desculpa.",
  "Silhueta na tela. Aperta os olhos, entorta a cabeça, invoca a criança interior.",
  "Olha a sombrinha dele! Fofo ou assustador? Você que sabe.",
  "Silhueta liberada. Se ainda assim errar, eu vou rir. Com carinho.",
  "Pronto, a sombra. Agora é igual intervalo de desenho.",
  "Dica usada: silhueta. Menos XP, mais chance. Sábio.",
  "Tá aí o formato. Orelha, rabo, barriga, tudo que você precisa.",
  "A sombra fala mais que mil setinhas.",
  "Olha só quem apareceu no escuro. Reconhece?"
],
pkDicaLetra: [
  "Primeira letra revelada! Agora é praticamente um caça-palavras.",
  "Começa com essa letra aí. Pode me agradecer depois.",
  "Letra inicial liberada. Isso reduz muito. Muito mesmo.",
  "Dica da letra usada. Agora pensa em todo Pokémon com essa inicial.",
  "Pronto, a primeira letra. Mais fácil que isso só se eu soletrar.",
  "Olha a letra aí. Faz o alfabeto na cabeça.",
  "A letra tá dada. O resto é com você e sua memória.",
  "Primeira letra na mão. É tipo colar na prova, só que liberado.",
  "Letrinha revelada. O XP chorou um pouco, mas tudo bem.",
  "Com a primeira letra fica fácil. Fica, né? Né?"
],
pkDicaTipo: [
  "Tipos revelados! Agora a sombra ganhou personalidade.",
  "Dica de tipos usada. Junta com a silhueta e mata a charada.",
  "Aí estão os tipos. Isso filtra bastante.",
  "Tipos na mão! Olha a sombra de novo com outros olhos.",
  "Sombra mais tipos é igual a quase certeza. Quase.",
  "Revelei os tipos. Se errar agora, eu conto pro Brock."
],

/* ---------- vitórias ---------- */
pkVitoria1: [
  "De PRIMEIRA?! Isso é suspeito. Muito suspeito. Tá com a Pokédex aberta aí do lado?",
  "Acertou de primeira. Ou você é gênio ou viajante do tempo. Talvez os dois.",
  "UM chute. Um. Vou chamar a Oficial Jenny pra investigar.",
  "Primeira tentativa?! Nem o Mewtwo prevê o futuro assim.",
  "De primeira! Hackeou o jogo? Leu minha mente? Eu nem tenho mente, sou um bug.",
  "Um chute só. Tô sem palavras. Mentira, tenho várias, mas todas são suspeito.",
  "Acertou na lata de primeira! Joga na loteria hoje.",
  "Primeira. Tentativa. Eu exijo replay em câmera lenta.",
  "De primeira... alguém te contou, né? NÉ?",
  "Um chute e acabou. Isso não é jogo, é assalto.",
  "Primeira tentativa! O Alakazam com QI de 5000 tá com inveja.",
  "Acertou de primeira. Vou fingir que acredito. Parabéns. Suspeito, mas parabéns."
],
pkVitoriaRapida: [
  "Em {n} chutes! Isso é talento de Mestre Pokémon. O Ash que lute.",
  "É o <b>{pokemon}</b>! Rapidinho, hein. Tá treinando escondido?",
  "{n} chutes só. Eficiência nível Pokédex de verdade.",
  "Pegou o <b>{pokemon}</b> rapidão! A Pokébola nem balançou.",
  "Rápido! {n} chutes e pronto. Pode ir tomar um café.",
  "Olha a velocidade! Mais rápido que Ninjask com Speed Boost.",
  "<b>{pokemon}</b> capturado em {n}. Seu Professor Carvalho interno tá orgulhoso.",
  "Vitória relâmpago! O Pikachu aprovaria. Não era ele, mas aprovaria.",
  "{n} chutes. Eu nem tive tempo de zoar. Poxa.",
  "Acertou rapidinho! Tem a Pokédex tatuada no cérebro?",
  "É o <b>{pokemon}</b>! Direto ao ponto. Gostei.",
  "Mandou bem demais. {n} chutes. Tô quase respeitando você."
],
pkVitoria: [
  "É O <b>{pokemon}</b>! Capturado em {n} chutes.",
  "Acertou! <b>{pokemon}</b> registrado na Pokédex. {n} chutes, respeitável.",
  "Isso! <b>{pokemon}</b>! Eu sabia que você ia chegar lá. Mais ou menos.",
  "<b>{pokemon}</b> capturado! A musiquinha da captura tá tocando na minha cabeça.",
  "Boa! {n} chutes. Nem rápido nem lento. Perfeitamente treinador.",
  "Olha ele aí: <b>{pokemon}</b>! Foi uma boa caçada.",
  "Acertou! Eu fingia que não torcia, mas torcia.",
  "É o <b>{pokemon}</b>! Tá registrado. Pode dar um apelido carinhoso pra ele.",
  "Vitória! {n} chutes e muita dedução. Sherlock Pokémon.",
  "Gotcha! <b>{pokemon}</b> foi capturado! Eu sempre quis dizer isso.",
  "Conseguiu! Nada como ver a linha toda verde.",
  "<b>{pokemon}</b>! Achei que você ia travar, mas foi lindo.",
  "Pegou! {n} chutes. O Brock te daria uma insígnia. Ele dá pra qualquer um mesmo.",
  "É ele! O <b>{pokemon}</b>! Pode comemorar, eu deixo."
],
pkVitoriaSofrida: [
  "FINALMENTE! {n} chutes! É o <b>{pokemon}</b>! Eu já tava cochilando.",
  "É o <b>{pokemon}</b>! Depois de {n} tentativas. Isso foi um arco inteiro do anime.",
  "Conseguiu! Suado, sofrido, mas conseguiu. Igual o Ash ganhando a liga depois de 25 anos.",
  "{n} chutes! Mas quem liga? Vitória é vitória.",
  "Acertou! Demorou tanto que o <b>{pokemon}</b> já teria evoluído, se pudesse.",
  "<b>{pokemon}</b>! Enfim! Tô emocionado. Isso é suor de fantasma?",
  "Vitória na raça! {n} chutes. Persistência de Magikarp que virou Gyarados.",
  "FOI! {n} tentativas, mas foi. A Enfermeira Joy pode guardar a maca.",
  "É o <b>{pokemon}</b>! Levou um tempinho. Um tempão. Mas levou.",
  "Aleluia! {n} chutes! Vou até soltar confete. Ah, já soltei.",
  "Capturado depois de {n} Pokébolas! Ele resistiu, mas você resistiu mais.",
  "Pegou o <b>{pokemon}</b>! Quem conta os chutes? Eu. Eu conto. Foram {n}."
],

/* ---------- modo silhueta ---------- */
pkSilhuetaErro: [
  "Não é o <b>{pokemon}</b>. Olha o formato de novo.",
  "Nope. A sombra não bate com <b>{pokemon}</b>. Nem de longe.",
  "<b>{pokemon}</b>? Olha as orelhas dessa silhueta. Olha.",
  "Errou! A TV gritaria É O... e não seria <b>{pokemon}</b>.",
  "Não é. Aperta os olhos e tenta de novo.",
  "<b>{pokemon}</b> tem outro formato. A sombra não mente.",
  "A silhueta diz não. Com voz de narrador.",
  "<b>{pokemon}</b>? Essa sombra aí nem parece, vai.",
  "Errado! Volta pro intervalo e presta atenção dessa vez.",
  "Não é <b>{pokemon}</b>. Pensa no formato, não no nome.",
  "Hmm, não. A sombra balançou a cabeça. Metaforicamente.",
  "<b>{pokemon}</b> não. Mas foi um chute com personalidade.",
  "Chute {n} na silhueta. A sombra tá rindo de você. Eu também.",
  "Nada! Tenta imaginar o bicho colorido. Ajuda.",
  "<b>{pokemon}</b>? Se fosse ele, a sombra teria outra barriga.",
  "Errou, mas errou com estilo de criança gritando pra TV."
],
pkSilhuetaVitoria: [
  "É O <b>{pokemon}</b>! Com a voz da TV e tudo!",
  "QUEM É ESSE POKÉMON? É o <b>{pokemon}</b>! E você acertou!",
  "A sombra ganhou cor! <b>{pokemon}</b>, confirmado.",
  "Acertou pela silhueta! Criança da TV aberta detectada.",
  "<b>{pokemon}</b>! Olho de águia. Olho de Pidgeot, no caso.",
  "Você reconheceu o <b>{pokemon}</b> pela sombra. Isso é cultura.",
  "É ele! <b>{pokemon}</b>! Se fosse na TV, você ganhava um tazo.",
  "Silhueta decifrada! O narrador te aplaude.",
  "<b>{pokemon}</b>! Pela sombra! Isso é treino de intervalo de desenho.",
  "Acertou! Voltou o intervalo, voltou a infância, voltou tudo."
],

/* ---------- outros ---------- */
pkDiarioFeito: [
  "Você já fez o de hoje. Volta amanhã. Ou joga o Infinito, eu não cobro nada.",
  "Diário concluído. Eu sei que dá vontade de jogar de novo. Não dá. Amanhã.",
  "Já acertou hoje! Pode ir viver sua vida. Ou jogar Infinito, que é melhor que a vida.",
  "O de hoje já foi. O de amanhã ainda tá sendo chocado no ovo.",
  "Diário feito, missão cumprida. O Infinito tá logo ali, piscando.",
  "Esse já tá na Pokédex. Volta amanhã pra outro.",
  "Já foi! Se quiser mais, tem o modo Silhueta. Clássico de intervalo.",
  "Terminou o diário. Agora vem a pior parte: esperar.",
  "Diário resolvido. Rápido ou demorado, tanto faz: resolveu.",
  "Nada de novo aqui até meia-noite. Os Pokémon também dormem.",
  "Hoje já deu. Mas o Infinito não tem hora pra acabar. Só dizendo.",
  "Você já ganhou hoje. Eu fico aqui guardando a tabela pra você admirar."
],
pkDesistirConfirma: [
  "Vai desistir? Clica de novo se for fugir mesmo.",
  "Tem certeza? A Equipe Rocket também desiste sempre, olha onde eles tão.",
  "Clica outra vez pra confirmar a fuga. Eu não vou julgar. Muito.",
  "Fugir da batalha? Mais um clique e você escapa com segurança."
],
pkDesistiu: [
  "Desistiu? Era o <b>{pokemon}</b>. Não chora. Chora um pouco.",
  "Era o <b>{pokemon}</b>! Tava na cara. Tá, não tava. Mas tava.",
  "A Equipe Rocket decolou de novo! Ah não, foi você. Era o <b>{pokemon}</b>.",
  "Jogou a toalha. O <b>{pokemon}</b> manda lembranças.",
  "Era o <b>{pokemon}</b>. Anota aí pra próxima.",
  "Desistência aceita. O <b>{pokemon}</b> manda um abraço.",
  "Tudo bem desistir. O Ash soltou o Butterfree e ficou tudo bem. Mais ou menos.",
  "O <b>{pokemon}</b>! Olha só. Agora você nunca mais esquece ele.",
  "Você fugiu da batalha com sucesso! Era o <b>{pokemon}</b>.",
  "Era o <b>{pokemon}</b>. Tudo bem, eu também não ia acertar. Mentira, eu ia."
],
pkNaoExiste: [
  "Esse Pokémon não existe. Ainda. Manda a ideia pra Game Freak.",
  "Não achei ninguém com esse nome. Inventou um Pokémon agora?",
  "Hmm, isso não tá na Pokédex. Confere a digitação.",
  "Pokémon desconhecido! Tá parecendo nome de Digimon.",
  "Não conheço esse aí. E olha que eu conheço 1025.",
  "Isso é nome de Pokémon ou você sentou no teclado?",
  "Nada na Pokédex com esse nome. Escolhe um da lista, vai.",
  "MissingNo? Não, obrigado. Escolhe um que existe.",
  "Esse não existe. Mas se existisse, seria tipo Normal, com certeza.",
  "Não encontrei. Digita as primeiras letras e deixa a lista te ajudar."
],
pkRepetido: [
  "Você já chutou esse! Memória de peixinho, hein.",
  "Esse aí já foi. Tá na tabela, olha lá.",
  "Repetido! Chutar o mesmo duas vezes não muda a resposta. Eu testei.",
  "Já tentou <b>{pokemon}</b>. Não virou certo desde então.",
  "Déjà vu! Esse já tá na lista.",
  "O mesmo chute de novo? O Psyduck faz isso. Não seja o Psyduck."
],

/* ---------- tagarelice aleatória (somada às gerais) ---------- */
pkAleatorio: [
  "Já parou pra pensar que o Ash tem 10 anos há mais de 25 anos? Isso é mais assustador que Gengar.",
  "O Psyduck vive com dor de cabeça. Eu vivo dentro de um fliperama bugado. Estamos quites.",
  "A Enfermeira Joy é a mesma pessoa em todas as cidades? Ninguém investiga isso.",
  "O Magikarp é inútil e mesmo assim virou dragão. Tem esperança pra todo mundo. Até pra você.",
  "Por que o Snorlax sempre dorme justo na estrada mais importante? Ele sabe. Ele sempre sabe.",
  "O Ditto vira qualquer coisa, mas escolheu ser uma gosma rosa. Respeito a autenticidade.",
  "Se eu fosse um Pokémon, seria Fantasma/Elétrico. Meio Rotom, meio assombração de fliperama.",
  "Ninguém fala do trauma de quem gastou 80 Ultra Balls no Mewtwo.",
  "A Equipe Rocket gasta mais em robô gigante do que ganharia vendendo o Pikachu. Péssimo plano de negócios.",
  "O Cubone usa o crânio da mãe como capacete. Pokémon é desenho infantil. Pensa nisso.",
  "O Professor Carvalho esquece o nome do próprio neto. Coitado do Gary.",
  "Tem um Pokémon que é literalmente um saco de lixo. Chama Trubbish. E ele evolui. Pra um saco maior.",
  "Tem Pokémon que é sorvete, chaveiro, lustre e espada. Falta um que seja boleto.",
  "O Slowpoke leva cinco segundos pra sentir dor. Eu levo cinco segundos pra entender piada.",
  "O Gastly é 95% gás. Eu sou 95% sarcasmo. Somos parecidos.",
  "O Brock passou o anime inteiro tentando arrumar namorada. E você aí reclamando da vida.",
  "O Wobbuffet só sabe revidar. Eu também, mas com palavras.",
  "O Onix é de pedra, tem 8,8 metros e pesa 210 kg. Ele é oco. Ninguém me convence do contrário.",
  "Se o Charizard não obedecia o Ash, imagina se eu vou obedecer você.",
  "A Enfermeira Joy cura Pokémon de graça, 24 horas por dia. Alguém paga hora extra pra ela?",
  "O Mr. Mime é um mímico. Um Pokémon mímico. Quem aprovou isso? E ainda fizeram o Mime Jr.",
  "O Bidoof é um Pokémon que ninguém leva a sério. Tipo eu. A gente devia fundar um clube.",
  "A Pokédex do Ash falava. A minha também. E é bem mais divertida, né?",
  "Se o Bugado tivesse verbete na Pokédex seria: assombra fliperamas e fala demais. Justo.",
  "Ekans é snake ao contrário. Arbok é kobra ao contrário. Me conta mais segredos, Game Freak.",
  "A Pokédex diz que o Magcargo é mais quente que o sol. E ele lá, de boa numa caverna.",
  "Existem mais de mil Pokémon e aposto que você lembra de uns 150. Tudo bem, é o normal.",
  "O Farfetch'd anda com um alho-poró. Pra quê? Ninguém sabe. Ele sabe.",
  "O Kadabra entortou tanta colher que até a carta dele ficou anos sumida. Poder psíquico é isso.",
  "Pokémon Red e Blue. Gold e Silver. Ruby e Sapphire. Um dia vai sair Pokémon Arroz e Feijão.",
  "Um dia eu vou evoluir. Provavelmente num bug maior.",
  "Metapod usou Endurecer. Metapod usou Endurecer. Metapod usou Endurecer. Essa é a minha vida.",
  "O melhor Pokémon é aquele que você usou até o fim e depois largou no PC pra sempre. Tadinho.",
  "Minha teoria: o Arceus criou o universo e depois foi criar Pokémon com cara de objeto.",
  "O Jigglypuff canta, todo mundo dorme e ele fica bravo. Eu falo, ninguém escuta e eu fico bravo. Mesma vibe.",
  "Aposto que você já jogou Pokébola comum num lendário com HP cheio. Aposto.",
  "Se falar Pikachu três vezes no espelho, nada acontece. Eu testei. Fiquei triste.",
  "O Voltorb parece uma Pokébola. Pra quê? Pra explodir na sua cara. Game design de gênio.",
  "Quantos Zubat você já encontrou na vida? Eu perdi a conta. O Zubat também.",
  "O Wailord é enorme e pesa só 398 kg. Ele é basicamente um balão de ar.",
  "Tenho saudade da época em que eram só 151 e todo mundo sabia de cor. Eu nem existia, mas tenho.",
  "O Machamp tem quatro braços e nenhum celular. Desperdício de braço.",
  "Se o Psyduck fosse gente, seria aquele que chega na reunião e pergunta que dia é hoje.",
  "A Misty seguiu o Ash por anos por causa de uma bicicleta. Isso que é cobrar dívida.",
  "Pokémon só fala o próprio nome. Imagina se a gente fizesse isso. Bugado! Bugado bugado!",
  "O mundo Pokémon tem TV, videogame e teleporte, mas criança de 10 anos viaja sozinha. Prioridades.",
  "Se um Snorlax dormisse na sua rua, você chamaria a prefeitura ou tocaria flauta?",
  "Às vezes acho que sou o MissingNo do fliperama. Só que com carisma.",
  "O Exeggcute são seis ovos. Seis. Que pensam juntos. Ninguém acha isso estranho?",
  "O Tentacool aparece a cada dois passos no mar. O mar do mundo Pokémon é 80% Tentacool.",
  "O Porygon fez o anime inteiro tremer e até hoje leva a culpa. Justiça pro Porygon.",
  "Tem um Pokémon que é um par de chaves. Klefki. Ele coleciona chaves. Ele É chaves."
],
pkParado: [
  "Tá pensando ou tá pesquisando no Google? Eu tô vendo, hein.",
  "Tá parado. Esse Pokémon não vai se chutar sozinho.",
  "Oi? Treinador? Tá aí? Até o Slowpoke já teria reagido.",
  "Parou pra pensar? Pensa em voz alta. Ah, é, eu não escuto.",
  "Travou? Digita qualquer letra, a lista te ajuda.",
  "Se você ficar parado assim, um Snorlax vai deitar na frente da tela.",
  "Silêncio... dá pra ouvir o Pokémon secreto rindo.",
  "Tá procurando a resposta no mato alto? Anda em círculo que aparece.",
  "Tá esperando o Pokémon aparecer sozinho? Isso aqui não é Pokémon GO.",
  "Ei, olha as setinhas. Elas tão dando dica de graça.",
  "Hmm. Tô aqui. Esperando. Flutuando. Assombrando.",
  "Travou? Pensa em todos os Pokémon que você lembra com esse tipo.",
  "Tá tão parado que parece Metapod usando Endurecer.",
  "Dormiu? O Jigglypuff ficaria orgulhoso.",
  "A tabela tá cheia de pistas. Lê comigo. Devagarinho.",
  "Quer uma dica? Chuta alguma coisa. Qualquer coisa. Até Bidoof.",
  "Olha o treinador pensativo. Tipo o Psyduck, mas sem a dor de cabeça. Ou com?",
  "Parado assim, você perdia uma corrida pro Slowpoke.",
  "Sabe o que ajuda? Chutar. Sabe o que não ajuda? Ficar parado.",
  "O Pokémon secreto foi fazer um lanche. Volta quando você chutar."
],

/* ---------- cutucar o mascote nesta página ---------- */
cutucarPokemon: [
  "Ai! Me cutucou igual o Ash cutuca a bochecha do Pikachu. Só que sem choque. Por enquanto.",
  "Para de me cutucar e chuta um Pokémon, vai.",
  "Eu não sou Pokébola pra você ficar clicando.",
  "Você me cutucou. Eu usei Olhar Fulminante. A defesa do seu dedo caiu.",
  "Tô ocupado segurando a resposta. Não me distrai.",
  "Se eu tivesse golpe, seria Frustração. Cuidado.",
  "Você cutucou o Bugado! O Bugado ficou confuso! Ele se machucou na confusão!",
  "Não adianta me cutucar, eu não conto. Nem sob tortura. Talvez sob pizza.",
  "Clicar no fantasma não revela o Pokémon. Eu sei, você tinha esperança.",
  "Eu sou um fantasma. Tipo Gengar, só que mais bonito e menos sorridente.",
  "Cutuca de novo e eu troco o Pokémon secreto. Brincadeira. Será?",
  "Tá tentando me capturar? Precisa de Master Ball e um pouco de respeito.",
  "Eu não evoluo com carinho. Evoluo com XP. O seu, no caso.",
  "Opa! Quase derrubei a Pokédex.",
  "Para! Tô tentando lembrar se o Wooper tem braço.",
  "Cutucou! Não foi muito efetivo.",
  "Foi um golpe crítico! ...no meu orgulho.",
  "Se eu fosse Pokémon selvagem, já tinha fugido. Mas sou fiel. E preso no código.",
  "Eu sei quem é o secreto e você não. Cutucar não muda isso. Mas é divertido.",
  "Me cutucar dá XP? Não. Mas me irrita, que é quase a mesma coisa.",
  "O Bugado usou Esquiva! Seu dedo errou.",
  "Eu carrego a Pokédex inteira na cabeça. Literalmente. Tá pesado aqui dentro.",
  "O Psyduck tem dor de cabeça. Eu tenho dor de cutucada.",
  "Você não é o Professor Carvalho pra ficar mexendo em mim.",
  "Posso ser fantasma, mas tenho sentimentos. Três, pra ser exato.",
  "Cutucada registrada no meu diário. Página: pessoas insistentes.",
  "Sabe qual Pokémon eu sou? O que fala demais. Não existe esse. Eu sou o primeiro.",
  "Para de me clicar, parece que tá caçando Shiny.",
  "Cada cutucada tira 1 HP meu. Ainda tenho 998.",
  "Eu fiz faculdade de Pokédex. Tá, não fiz. Mas sei tudo.",
  "Se clicar cem vezes, aparece o Mew debaixo do caminhão. Mentira, isso é lenda.",
  "Olha a mão boba! Aqui é um Centro Pokémon respeitável.",
  "Me cutucou? Vou contar pra Enfermeira Joy.",
  "Eu não sou o Pikachu, não tem choque aqui. Só decepção.",
  "Ei, ei! Eu tô torcendo por você. Não pareço, mas tô.",
  "Cutucar o mascote: 100% de precisão, zero de poder.",
  "Tá me testando? Sou tipo Fantasma. Golpe Normal não me afeta.",
  "Sou praticamente um Rotom de fliperama. Moro na máquina e reclamo.",
  "Quer uma dica? A dica é: não me cutuca.",
  "Tô aqui flutuando, sem te julgar. Mentira, eu julgo.",
  "Se me capturassem, seria na Pokébola mais barata. E eu ainda escapava.",
  "O Bugado está bem! O Bugado só tá bravinho.",
  "Clica em mim de novo e eu começo a cantar igual Jigglypuff.",
  "Não sou Magikarp pra ficar pulando quando você mexe. ...tá, pulei.",
  "Cutucar não é chutar. Chutar é ali na caixinha de texto."
]
};

// junta as falas gerais (aleatórias e de "tá parado?") com as do Pokémon
L.pkAleatorio = L.pkAleatorio.concat(F.aleatorio || []);
L.pkParado = L.pkParado.concat(F.parado || []);
Object.keys(ESP).forEach(k => { L['pk@' + k] = ESP[k]; });
Bugado.addLines(L);
})();
