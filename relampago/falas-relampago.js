/* ==========================================================
   Falas do Bugado para "Relâmpago" (silhueta contra o relógio)
   Variáveis: {nome} (resposta certa), {errado} (o que você marcou),
   {n} (números: combo, erros...), {pts} (pontos), {modo}, {dia}.
   Categorias "rl@<id>" = falas de personagens específicos
   (id = nome sem acento/pontuação: "mrmime", "majinboo"...).
   Voz: ver VOZ.md na raiz.
   ========================================================== */
(() => {

/* ---------- personagens famosos (vale pra acerto e erro: é comentário da revelação) ---------- */
const ESP = {
  pikachu: [
    "Pikachu mano. até minha vó acertava e ela nem sabe o que é Pokémon",
    "o rato mais famoso do mundo depois daquele outro. não vou citar, tenho medo de processo",
    "se piscou no Pikachu cê precisa de férias"
  ],
  raichu: [
    "Raichu! a orelha entrega, não é o Pikachu não",
    "Raichu é o Pikachu que tomou Pedra Trovão e perdeu o emprego de mascote",
    "ninguém lembra do Raichu e ele sabe. dá um abraço nele"
  ],
  charizard: [
    "Charizard. desobedece o dono mas mora no coração dos anos 90",
    "Charizard, o dragão que não é tipo dragão. até hoje não superei",
    "Charizard na sombra: a carta holográfica que cê nunca teve"
  ],
  charmander: [
    "Charmander! se a chama do rabo apagar ele apaga junto. joga rápido por ele",
    "Charmander: fofo agora, marrento daqui duas evoluções"
  ],
  bulbasaur: [
    "Bulbasaur, o inicial mais injustiçado da história",
    "Bulbasaur ri por dentro de quem pegou Charmander e sofreu no primeiro ginásio"
  ],
  squirtle: [
    "Squirtle! óculos escuros no bolso e Esquadrão Squirtle no coração",
    "Squirtle: tartaruga, líder de gangue e ícone da moda"
  ],
  psyduck: [
    "Psyduck com a mão na cabeça, a pose oficial de quem joga isso aqui",
    "Psyduck não sabe onde tá. relaxa, cê também não",
    "Psyduck! agora quem tá com dor de cabeça sou eu"
  ],
  magikarp: [
    "Magikarp usou Splash. nada aconteceu. igual meu salário",
    "Magikarp pula pula pula e um dia vira Gyarados. fé"
  ],
  gyarados: [
    "Gyarados, a prova de que insistir no Magikarp compensa",
    "Gyarados: peixe inútil que virou dragão furioso. e nem é tipo dragão"
  ],
  snorlax: [
    "Snorlax dormindo até na silhueta. meu ídolo",
    "Snorlax, 460 kg de preguiça no meio da estrada. me identifico"
  ],
  eevee: [
    "Eevee: oito evoluções e nenhuma decisão. igual cê no cardápio",
    "Eevee ainda não sabe o que quer ser quando crescer"
  ],
  mewtwo: [
    "Mewtwo foi criado pra ser o mais forte e virou pergunta de quiz. que queda",
    "Mewtwo leu tua mente e achou pouca coisa KKKKK"
  ],
  mew: [
    "Mew! dizem que tá debaixo do caminhão. não tá, eu olhei",
    "Mew é tão raro que o povo inventava truque de Game Boy pra achar"
  ],
  jigglypuff: [
    "Jigglypuff! se cantar agora cê dorme e perde o combo. anda",
    "Jigglypuff canta, ninguém escuta, e ela rabisca tua cara. justo"
  ],
  meowth: [
    "Meowth, é isso aí! Equipe Rocket decolando de novo",
    "Meowth fala igual eu. a diferença é que ele perde sempre"
  ],
  ditto: [
    "Ditto: a sombra é uma gosma. qualquer um acerta. ou não",
    "Ditto pode virar qualquer Pokémon e escolheu virar pergunta fácil"
  ],
  gengar: [
    "Gengar! primo distante meu, a gente não se fala",
    "esse sorriso do Gengar é de quem viu cê errar a anterior"
  ],
  onix: [
    "Onix, cobra de pedra de quase 9 metros. silhueta mais fácil só a do Ditto",
    "Onix do Brock! o Brock ainda tá tentando com a Enfermeira Joy"
  ],
  slowpoke: [
    "Slowpoke vai perceber que apareceu aqui só semana que vem",
    "Slowpoke: o único que joga Relâmpago mais devagar que você KKKKK"
  ],
  lucario: [
    "Lucario sente a aura de quem tá indo bem. ou mal. mais mal",
    "Lucario, o favorito de quem desenhava no caderno da escola"
  ],
  togepi: [
    "Togepi é um ovo com perna. a silhueta é um ovo",
    "Togepi: a Misty carregou esse ovo por umas 80 temporadas"
  ],
  machamp: [
    "Machamp, quatro braços. imagina a academia desse cara",
    "Machamp levava todas as sacolas do mercado numa viagem só"
  ],
  dragonite: [
    "Dragonite: parece pelúcia, bate igual caminhão",
    "Dragonite, o dragão mais fofo e ainda entrega carta"
  ],
  lapras: [
    "Lapras, o Uber aquático do Ash antes de existir Uber",
    "Lapras ninguém esquece. nem o choro no episódio"
  ],
  mrmime: [
    "Mr. Mime, um mímico. ninguém pediu mas ele veio",
    "Mr. Mime faz parede invisível e faxina na casa da mãe do Ash"
  ],
  farfetchd: [
    "Farfetch'd, um pato com alho-poró. a Game Freak tava inspirada",
    "Farfetch'd anda armado de verdura. respeita"
  ],
  butterfree: [
    "Butterfree! lembrou da despedida no anime? chora rápido que o tempo tá correndo",
    "Butterfree: aquele episódio dói até hoje"
  ],
  geodude: [
    "Geodude, uma pedra com braço. a silhueta mais honesta do mundo",
    "Geodude é pedra e pronto"
  ],
  pidgey: [
    "Pidgey, o pombo da Rota 1. todo mundo tem um esquecido no PC",
    "Pidgey: se cê jogou o Red, pegou uns 30 desse"
  ],
  cubone: [
    "Cubone usa o crânio da mãe de capacete. pesado demais pra um jogo de 60 segundos",
    "Cubone, o mais triste da Pokédex. acerta ele com carinho"
  ],
  goku: [
    "GOKU! chegou atrasado de novo mas chegou",
    "Goku salva o universo e esquece de pagar a conta de luz",
    "esse cabelo espetado não engana ninguém, é o Kakarotto"
  ],
  vegeta: [
    "Vegeta, o príncipe dos Saiyajins. ele não deixa ninguém esquecer",
    "Vegeta: orgulho, entrada no cabelo e rivalidade eterna",
    "o cabelo do Vegeta é uma chama que não passa na porta"
  ],
  piccolo: [
    "Piccolo, o melhor pai do Gohan. não o biológico, o de verdade",
    "Piccolo: capa, turbante e cara de quem não dorme desde a saga Saiyajin"
  ],
  kuririn: [
    "Kuririn, o humano mais forte da Terra e o que mais morreu",
    "Kuririn: seis pontinhos na testa e zero sorte"
  ],
  freeza: [
    "Freeza: educado, cruel e com nome de geladeira",
    "Freeza tem várias formas e todas irritam"
  ],
  cell: [
    "Cell, o ser perfeito. palavras dele, não minhas",
    "Cell pegou DNA de meio anime e ainda perdeu pra uma criança KKKKK"
  ],
  majinboo: [
    "Majin Boo transforma gente em chocolate. vilão ou confeiteiro?",
    "Boo adotou um cachorrinho e amoleceu. real"
  ],
  mrsatan: [
    "Mr. Satan, campeão mundial que nunca ganhou nada. carisma puro",
    "se o Mr. Satan levou a fama do Cell, cê pode levar a fama desse"
  ],
  bills: [
    "Bills, o deus da destruição que quase explode a Terra por causa de pudim",
    "Bills: um gato roxo com fome. somos gatos, mas não somos parentes"
  ],
  whis: [
    "Whis, o anjo que treina deus e vive pedindo comida da Terra",
    "o Whis volta o tempo com o cajado. queria um pra desfazer teus erros"
  ],
  yamcha: [
    "Yamcha! deitado na cratera, a pose mais famosa da história",
    "Yamcha: guerreiro Z de coração, figurante de profissão"
  ],
  gohan: [
    "Gohan, poder escondido que só aparece quando alguém grita",
    "Gohan podia ser o mais forte do universo e escolheu estudar. respeito"
  ],
  trunks: [
    "Trunks veio do futuro com espada e jaqueta, nem pediu licença",
    "Trunks picou o Freeza em pedaços em dez segundos de cena"
  ],
  broly: [
    "Broly, o Saiyajin lendário. só grita KAKAROTTO e resolve na força",
    "Broly: 90% músculo, 10% gritaria"
  ],
  mestrekame: [
    "Mestre Kame inventou o Kamehameha e a vergonha alheia",
    "Mestre Kame: velho safado de óculos escuros morando numa ilha"
  ],
  zenosama: [
    "Zeno Sama apaga universo com um toque. trata ele bem",
    "o ser mais poderoso de todos tem cara de mascote de bala"
  ],
  bulma: [
    "Bulma, gênia, inventora e a única que manda no Vegeta",
    "sem a Bulma ninguém achava esfera nenhuma. nem tinha anime"
  ],
  gotenks: [
    "Gotenks, fusão de duas crianças que virou um moleque convencido",
    "Gotenks: fantasma kamikaze e pose ridícula. gênio"
  ]
};

const L = {

/* ---------- início de rodada, por modo ---------- */
rlInicioGen1: [
  "Gen 1! os 151 do Red e Blue. se errar Pikachu eu desligo o fliperama",
  "geração 1, o básico. aula de revisão com cronômetro",
  "Kanto! Bulbasaur, Charmander e aquele Rattata que cê pegou sem querer",
  "151 clássicos. vamos ver se cê é treinador de verdade",
  "Gen 1, modo nostalgia. cheiro de fita de Game Boy é normal",
  "Kanto na área, 60 segundos. pisca não",
  "a sombra aparece e cê grita o nome. pode gritar mesmo",
  "Gen 1 é fácil pra quem cresceu nos anos 90. pra você vamos ver",
  "Kanto inteiro na fila, até o Mr. Mime infelizmente",
  "geração 1, onde tudo começou. e onde muita gente passa vergonha",
  "se for bem aqui eu deixo cê ir pro Todas",
  "Relâmpago Kanto, bora que o Professor Carvalho tá olhando",
  "sombra preta, fundo amarelo, zero desculpa",
  "Pikachu, Charizard, Psyduck e uns Nidoran pra confundir",
  "vambora! se errar o Magikarp eu conto pra todo mundo"
],
rlInicioTodas: [
  "todas as gerações! 1025 Pokémon, boa sorte com a Gen 9",
  "modo completo. tem Pokémon aqui que foi desenhado ontem",
  "Todas: separa os treinadores de quem parou no Pokémon Gold",
  "mil e vinte e cinco sombras e metade parece chaleira",
  "se aparecer um Pokémon que parece poste, provavelmente é Gen 8",
  "todas as gerações, com os Paradoxo no meio. cê é corajoso",
  "Pokédex inteira na roleta. tô rindo antes de começar KKKKK",
  "cê vai conhecer Pokémon novo hoje, na marra",
  "o modo onde a Gen 5 te encara e cê fica mudo",
  "do Bulbasaur ao Pecharunt. espero que cê tenha estudado",
  "1025 opções e 60 segundos. a matemática tá contra você",
  "se aparecer um sorvete é Vanillite, anota",
  "a Pokédex nacional inteira. até eu tô nervoso",
  "acertou um de Paldea de primeira? te chamo de Professor",
  "começou o caos. mil sombras, quatro botões, um treinador suando"
],
rlInicioDB: [
  "Dragon Ball! troca a Pokédex pelo radar do dragão",
  "cabelo espetado não quer dizer que é o Goku. às vezes quer",
  "60 segundos. menos que o Goku carregando uma Genki Dama",
  "adivinhar lutador pela sombra, e metade tem o mesmo cabelo",
  "se confundir o Kibito com o Kaioshin eu entendo. mas eu zoo",
  "rastreador ligado. bora medir teu nível de poder",
  "tem Saiyajin, namekuseijin, androide e o Mr. Satan",
  "capa e turbante na sombra? pode confiar que é o Piccolo",
  "sala do tempo ativada. aqui é só um minuto mas vale um ano",
  "se errar o Goku cê volta pra saga do Pilaf",
  "KAMEHAME... começou! foco na sombra",
  "dica: o Freeza tem cauda. muita gente tem cauda. esquece a dica",
  "quem acertar tudo ganha uma semente dos deuses imaginária",
  "o Oolong não veio pq não tem foto. se escondeu, típico",
  "vambora que o torneio de artes marciais começou"
],
rlInicioMix: [
  "Mistureba! Pokémon e Dragon Ball no mesmo liquidificador",
  "uma hora é Pikachu, outra é Piccolo. os dois com P, coincidência?",
  "se chamar o Goku de Pokémon ninguém te culpa. eu culpo",
  "crossover que ninguém pediu e todo mundo merece",
  "Pokébola numa mão, esfera do dragão na outra. vambora",
  "o Ash e o Goku são iguais: nunca envelhecem e nunca estudam",
  "liga os dois canais ao mesmo tempo e segura",
  "se aparecer o Majin Boo e cê falar Jigglypuff eu entendo. rosa é rosa",
  "troca de anime sem aviso, fica esperto",
  "60 segundos de zapping entre dois animes",
  "aqui o Mewtwo aparece logo depois do Freeza. tanto faz a ordem",
  "liquidificador ligado, não sei o que sai mas vai ser bonito"
],
rlInicioDiario: [
  "Desafio do Dia! a mesma sequência pra todo mundo",
  "diário valendo. só uma chance oficial, sem pressão. muita pressão",
  "gerações 1 a 4. é hoje que cê humilha o grupo da família",
  "mesma fila de sombra pra todo mundo. a diferença é o cérebro",
  "não adianta perguntar pro amigo, ele tá jogando também",
  "tentativa oficial! errou, fica registrado",
  "60 segundos pra fazer uma pontuação digna de print",
  "Kanto, Johto, Hoenn e Sinnoh. a velha guarda toda",
  "vale a honra. o placar de hoje vai pro teu perfil",
  "todo mundo recebeu essa sequência. joga por Pallet Town",
  "respira fundo. agora para de respirar e joga",
  "uma chance, 60 segundos. bora ver"
],
rlDiarioTreino: [
  "treino do diário. não vale placar, mas decora a sequência aí",
  "jogando de novo? a oficial já foi, esse aqui é pelo orgulho",
  "replay não oficial, pode errar à vontade",
  "segunda volta. já sabe as respostas né? isso se chama decorar",
  "a nota oficial tá guardada e não muda por nada",
  "treino sem pressão. eu continuo te zoando mesmo assim",
  "voltou pra provar que a primeira foi azar né",
  "se fizer mais ponto agora vai doer, pq não conta KKKKK"
],

/* ---------- acertos ---------- */
rlAcerto: [
  "isso!",
  "acertou uai, quem diria",
  "na mosca",
  "boa mano",
  "certinho, o Professor Carvalho aprova",
  "pá! mais um",
  "isso aí, comemora rápido que já tem outro",
  "acertou! a Pokédex fez um barulhinho feliz",
  "achei que cê ia errar. tô chocado",
  "mandou bem",
  "acerto limpo",
  "olhou e matou",
  "certo! tá jogando com o coração",
  "é esse! olho bom",
  "mais um na Pokédex mental",
  "continua que tá bonito",
  "meu respeito subiu de 2 pra 3",
  "acertou e nem suou",
  "na lata",
  "show, próximo",
  "alguém prestou atenção no desenho",
  "tá craque hein",
  "certo. pode printar",
  "a sombra não te engana",
  "o cronômetro ficou com medo",
  "o combo agradece",
  "vambora, continua",
  "não me decepciona agora",
  "boa! olha o relógio, não para",
  "tá muito fácil pra você né"
],
rlAcertoNome: [
  "{nome}! bonito",
  "{nome}, isso! cê conhece essa sombra de longe",
  "{nome} mandou um tchauzinho",
  "{nome}! certíssimo",
  "era {nome} mesmo, olho bom",
  "{nome}! até a silhueta sorriu",
  "{nome}, isso vai pro teu currículo",
  "{nome} reconhecido. bip bip",
  "olha {nome} aí! mandou bem",
  "{nome}, sem dúvida",
  "{nome} na primeira olhada. treino ou talento?",
  "{nome}! ninguém esquece",
  "{nome}, correto. a Pokédex agradece",
  "{nome} tava escondido na sombra e cê achou",
  "{nome}! eu ia falar mas cê foi mais rápido",
  "{nome}! pode gritar igual no desenho",
  "{nome}, certo. que isso mano",
  "{nome} apareceu e cê nem hesitou",
  "{nome}! vai contar pros amigos que foi lembrado",
  "{nome}! a sombra era tão óbvia assim pra você?",
  "{nome}, na mosca. próxima",
  "reconheceu {nome}. cresceu hein",
  "{nome}! tá jogando fácil demais",
  "{nome} capturado. mentalmente",
  "{nome} agradece a consideração",
  "{nome}! até eu fiquei orgulhoso",
  "{nome}, sim senhor. continua",
  "{nome} não conseguiu se esconder de você",
  "{nome}! esse foi de lei",
  "certinho: {nome}. mais um pro combo"
],
rlRapido: [
  "QUE ISSO?! respondeu antes da sombra carregar",
  "rápido demais, cê tá colando?",
  "nem piscou. relâmpago mesmo",
  "meio segundo. reflexo de Pikachu",
  "acertou no susto, instinto superior?",
  "foi tão rápido que eu nem terminei de pensar",
  "velocidade de Ataque Rápido",
  "isso foi reflexo ou premonição?",
  "mais rápido que o Ash trocando de Pokémon",
  "nem olhou direito e acertou. assustador",
  "o nome do jogo é você",
  "rápido assim só o Flash, o do outro desenho",
  "nem deu tempo de eu torcer contra",
  "velocidade da luz, o Whis ficou com inveja",
  "respondeu antes da pergunta KKKKKK",
  "cê é robô? clica nos semáforos aí",
  "reflexo de treinador de verdade",
  "nem vi teu dedo, só vi o acerto",
  "assim o cronômetro fica deprimido",
  "um piscar e pronto",
  "memória muscular de 1999",
  "tão rápido que {nome} nem terminou de posar"
],
rlDevagar: [
  "acertou... eventualmente",
  "demorou mas foi, tipo Slowpoke percebendo que mordeu o rabo",
  "certo, mas levou tanto tempo que eu envelheci um pixel",
  "acertou, mas o relógio chorou um pouquinho",
  "pensou, pensou, pensou e acertou. sofrido mas vale",
  "acerto em câmera lenta",
  "deu certo, só não faz isso toda vez",
  "tava carregando uma Genki Dama? demorou",
  "{nome}, mas quase deu tempo de evoluir",
  "da próxima confia no primeiro instinto",
  "no ritmo de ônibus em horário de pico, mas foi",
  "suspense de final de temporada, e acertou",
  "eu já tava preparando o discurso de consolo",
  "demorou tanto que o combo foi pegar um café",
  "cê e o Snorlax têm o mesmo ritmo",
  "valeu a espera, mas o tempo não volta",
  "acertou na raça. na raça lenta, mas na raça",
  "demorou 700 séculos mas foi"
],

/* ---------- erros ---------- */
rlErro: [
  "era {nome}! cê marcou {errado}. bonito, mas não",
  "{errado}? não. era {nome}",
  "nada de {errado}. era {nome}, e ficou ofendido",
  "marcou {errado} com toda confiança. era {nome} KKKKK",
  "errou! era {nome}. o {errado} nem sabia que tava no jogo",
  "{errado}... sério? olha de novo: {nome}",
  "era {nome}. menos três segundos e um pouco de dignidade",
  "{nome} tá chorando no canto pq cê chamou de {errado}",
  "nem quase. era {nome}",
  "era {nome}. o {errado} agradece a lembrança mas não era a vez dele",
  "clicou em {errado}? {nome} viu isso e ficou chateado",
  "errou feio: {errado}. o certo era {nome}",
  "{nome}! não {errado}. vou repetir devagar: {nome}",
  "cê viu {errado} naquela sombra? marca um oftalmo aí. era {nome}",
  "era {nome}. vou fingir que foi erro de dedo",
  "{errado} na cara dura? era {nome}!",
  "era {nome}, gente! o {errado} tá até constrangido",
  "não não. {nome}. o {errado} é outra história",
  "menos três segundos! era {nome}, aprende e segue",
  "errou. era {nome}. bate na mesa e continua",
  "clicou {errado} né? {nome} tá de braço cruzado te olhando",
  "{errado} nunca. era {nome}, tatua isso",
  "o {errado} até parece de olho fechado. era {nome}",
  "era {nome}! se quiser eu finjo que não vi",
  "buzina de erro! era {nome}",
  "aí não mano. o certo era {nome}",
  "era {nome}. agora cê vai lembrar pra sempre, de raiva",
  "errou {nome}. tudo bem, ele também não sabe teu nome",
  "{errado} foi chute ousado. errado, mas ousado. era {nome}",
  "era {nome}! o relógio agradece os três segundos doados"
],
rlConfundiuEvo: [
  "confundiu {errado} com {nome}. mesma família, fase diferente",
  "{errado} e {nome} são parentes. mas é igual confundir tua mãe com tua vó, não pode",
  "era {nome}! o {errado} é da mesma linha, só que em outra fase da vida",
  "quase! {errado} é da família do {nome}. evolução confunde mesmo",
  "a família toda! marcou {errado}, era {nome}",
  "uma pedra evolutiva de diferença. era {nome}",
  "cê confundiu pai com filho! {errado} não, {nome}",
  "mesma linha evolutiva, mas não. a silhueta muda com a idade igual gente",
  "{nome} evoluiu ou desevoluiu na tua cabeça. marcou {errado}",
  "era {nome}. pelo menos foi erro educado, mesma família",
  "clássico: confundir as fases. {errado} não, {nome} sim",
  "errou por uma evolução! era {nome}",
  "até o Professor Carvalho já confundiu {errado} com {nome}. nunca, mas vai que",
  "o {errado} é o {nome} antes ou depois de crescer. era {nome}"
],
rlConfundiuTipo: [
  "marcou {errado}, era {nome}. mesmo tipo, mesma vibe, bicho errado",
  "{errado} e {nome}: mesmo tipo e sombra parecida. caiu na pegadinha",
  "era {nome}! pelo menos o {errado} é do mesmo tipo, erro com critério",
  "mesmo tipo, Pokémon errado. era {nome}, não {errado}",
  "confundiu os coleguinhas de tipo. {nome}, não {errado}",
  "botei o {errado} de propósito, mesmo tipo do {nome}. caiu",
  "acertou o tipo e errou o Pokémon. era {nome}",
  "o {errado} parece, mas era {nome}. tem que ser mais específico",
  "caiu na pegadinha do tipo KKKKK era {nome}",
  "{errado} e {nome} treinam no mesmo ginásio. mas era {nome}",
  "o tipo tava certo. vale zero ponto e um tapinha nas costas",
  "era {nome}. o {errado} é da mesma turma, só que de outra sala"
],
rlDbErro: [
  "era {nome}! cê disse {errado}. teu rastreador tá quebrado",
  "{errado}? não. {nome}. come uma semente dos deuses aí",
  "{nome} ficou ofendido. chamaram de {errado} em rede nacional",
  "errou! era {nome}. menos três segundos, igual o Yamcha perdendo luta",
  "{nome}! não {errado}. volta pra saga do Pilaf e estuda",
  "era {nome}. o {errado} tá rindo de você lá do Outro Mundo",
  "marcou {errado}? o Kaio do Norte ouviu e fez uma piada ruim",
  "não era {errado}, era {nome}. nível de poder dessa resposta: 5",
  "opa! {nome}. o {errado} nem tava na sala",
  "errou o guerreiro, era {nome}. o Vegeta ia ter vergonha",
  "era {nome}! nem com as sete esferas cê desfaz esse erro",
  "{errado}? {errado} mano? era {nome}",
  "{nome} tá voando pra cá pra tirar satisfação. cê chamou de {errado}",
  "menos três! era {nome}. o Mestre Kame desaprova, e ele aprova quase tudo",
  "era {nome}. faz as flexões do Goku de castigo"
],
rlDbConfundiu: [
  "confundiu {errado} com {nome}. mesma raça, sombra parecida, mas não",
  "{errado} e {nome}: mesmo povo. mas era {nome}",
  "tá, eles se parecem. mas {nome} é {nome} e {errado} é {errado}",
  "na sombra todo {errado} parece {nome}. era {nome}",
  "Saiyajin é tudo igual no escuro né. era {nome}",
  "a sombra do {nome} e do {errado} brigam pelo mesmo espaço. ganhou {nome}",
  "mesmo povo, pessoa errada. era {nome}",
  "eu sabia que o {errado} ia te enganar KKKKK era {nome}"
],
rlDbAcerto: [
  "nível de poder: mais de oito mil!",
  "{nome}! o rastreador explodiu",
  "{nome}! o Goku ia sorrir e falar: bora lutar?",
  "certo! ganhou uma semente dos deuses de brinde",
  "{nome} identificado. o Kaio do Norte aprovou",
  "sente a energia? é o combo subindo",
  "fã raiz, da época da fita VHS",
  "{nome}! grita o nome igual no anime, com eco",
  "o Shenlong realizou teu desejo: um ponto",
  "esse acerto valeu uma transformação",
  "{nome}. o Vegeta nunca vai admitir mas ficou impressionado",
  "{nome}! nem precisou de fusão",
  "certeiro igual o Makankosappo do Piccolo, só que mais rápido",
  "{nome}! Genki Dama de pontos",
  "mandou bem, o Mestre Kame vai dar uma festa"
],
rlMixTroca: [
  "opa, trocou de canal! agora é Dragon Ball",
  "saímos de Kanto e caímos na Corporação Cápsula",
  "mudou o anime, fica esperto",
  "alerta de crossover! olha de que desenho é essa sombra",
  "trocou a fita! agora é guerreiro, não monstrinho",
  "zapeando! quem mexeu no controle?",
  "outra emissora no ar, atenção na silhueta",
  "isso não tem cara de Pokémon hein. ou tem?",
  "crossover valendo, o Ash e o Goku trocando figurinha",
  "olha a curva! mudou de universo"
],

/* ---------- combos ---------- */
rlCombo3: [
  "três seguidos! combo x2, agora ficou sério",
  "combo x2! olha quem acordou",
  "três em sequência, ponto valendo dobrado. não estraga",
  "x2! tá pegando fogo",
  "três na sequência, multiplicador ligado",
  "combo x2! agora que eu comecei a acreditar, não me decepciona",
  "três acertos, tô começando a torcer por você",
  "x2 que isso mano",
  "três seguidos! dobrou o ponto e minha ansiedade",
  "x2 ativado, não pisca"
],
rlCombo6: [
  "SEIS SEGUIDOS! combo x3!",
  "x3! o combo evoluiu tipo Charmeleon, tá ficando malcriado",
  "seis em sequência, cérebro de Alakazam",
  "combo x3, ponto valendo triplo. tô suando aqui",
  "seis! nem o Ash nas finais tava nesse ritmo",
  "x3! alguém para esse treinador",
  "sequência de seis, vou ter que te respeitar",
  "seis na fila, o relógio tá com medo de você",
  "x3 que isso mano, tá jogando demais",
  "combo x3, isso aqui já é print pro grupo"
],
rlCombo10: [
  "DEZ SEGUIDOS! combo x4!",
  "combo x4. nível Mestre Pokémon, tô sem palavras",
  "dez em sequência! cê virou o próprio Relâmpago",
  "x4! não tem mais multiplicador, cê zerou a vida",
  "DEZ! vou chamar a Liga Pokémon pra te ver",
  "combo máximo! teu cérebro é uma Pokédex com wi-fi",
  "dez seguidos, Super Saiyajin de quiz",
  "x4! até o Mewtwo ficou impressionado",
  "dez mano. papo reto auge do meu dia foi isso aqui",
  "COMBO X4 KJJJJJJ o fliperama parou pra ver"
],
rlComboMais: [
  "{n} seguidos! cê não erra mais não?",
  "combo de {n}. isso já é abuso",
  "{n} em sequência, preciso de elogio novo",
  "{n} acertos seguidos, me dá teu autógrafo",
  "{n}! o combo tá maior que o Onix",
  "sequência de {n}. tá jogando ou lendo a resposta?",
  "{n} sem errar, vai pro Hall da Fama",
  "{n} seguidos! a Enfermeira Joy já arrumou teu quarto de campeão",
  "combo {n}. queria reclamar de algo e não consigo",
  "{n}! nem o Goku acerta tanto e ele é o protagonista"
],
rlComboQuebrou: [
  "quebrou o combo de {n}! tava tão bonito",
  "combo de {n} pro chão, tipo o Yamcha na cratera",
  "adeus combo de {n}, descansa em paz",
  "perdeu uma sequência de {n}. doeu até em mim",
  "{n} seguidos jogados fora, patético KKKKK",
  "o combo de {n} desmaiou, leva pro Centro Pokémon",
  "sequência de {n} quebrada, começa de novo guerreiro",
  "tava em {n} e errou agora? o drama",
  "combo de {n} destruído, ouvi até o vidro quebrando",
  "NÃOOOO um combo de {n}! eu tava torcendo",
  "lá se vai o combo de {n}. foi bonito enquanto durou",
  "quebrou {n} seguidos. elenco pipoqueiro",
  "o combo de {n} usou Autodestruição",
  "{n} acertos e aí isso. a vida é assim",
  "combo zerado, mas eu vi os {n} e ninguém tira isso de você"
],

/* ---------- tempo ---------- */
rlUltimos10: [
  "DEZ SEGUNDOS! acelera",
  "últimos dez, clica clica clica",
  "dez segundos, agora é tudo ou nada",
  "o relógio ficou vermelho, tipo Charizard bravo",
  "reta final! dez segundos",
  "dez segundos! não pensa, sente",
  "tá acabando, chuta com fé",
  "dez, nove... não vou contar tudo, joga",
  "últimos segundos, hora do desespero elegante",
  "mais tenso que final de campeonato",
  "vermelho no relógio, modo turbo",
  "corre mano! o tempo tá fugindo igual Abra",
  "acaba já já, vai que dá mais uns pontos",
  "o relâmpago de verdade é agora",
  "contagem final, nada de hesitar"
],
rlTempo: [
  "TEMPO! larga o controle",
  "acabou, o relógio venceu. como sempre",
  "fim! o cronômetro zerou",
  "acabou o tempo, solta o botão que eu tô vendo",
  "tempo esgotado, hora da verdade",
  "PIIIII! fim de jogo, bora ver o estrago",
  "acabou! 60 segundos passam rápido né",
  "tempo! nem deu pra respirar",
  "zerou, vamos ao placar",
  "fim do Relâmpago, a tempestade passou",
  "o tempo acabou mas os erros ficam KKKKK",
  "acabou! o Snorlax até acordou pra ver o resultado",
  "tempo! agora eu vou falar tudo que eu segurei",
  "fim! a última sombra ficou sem resposta, coitada",
  "apitou! bora contar os pontos"
],
rlSemInternet: [
  "as imagens não tão carregando. a internet foi pro Monte Prateado",
  "não consegui puxar as sombras. confere a internet e tenta de novo",
  "sem imagem sem jogo. a conexão fugiu igual Abra"
],
rlCarregando: [
  "carregando a próxima sombra, a internet tá de Slowpoke",
  "pera, a sombra tá vindo de Kanto a pé",
  "carregando... o relógio tá pausado, relaxa",
  "a imagem atrasou. pausei o tempo, sou bonzinho",
  "um segundinho, a sombra tá se arrumando",
  "a internet usou Descanso, já volta"
],

/* ---------- fim de rodada ---------- */
rlRecorde: [
  "NOVO RECORDE! {pts} pontos! chama a imprensa",
  "recorde quebrado! {pts} pontos, vou emoldurar",
  "{pts} pontos, teu melhor de sempre. tô orgulhoso de verdade",
  "RECORDEEEE. cê superou você mesmo, enredo de anime",
  "recorde de {pts}! manda no grupo que eu deixo",
  "recorde! {pts} pontos! cê evoluiu na minha frente",
  "recorde, {pts}. nem sei mais o que falar mal",
  "nova marca: {pts} pontos! a Liga Pokémon já tá sabendo",
  "RECORDE! o teu eu do passado tá chorando de inveja",
  "{pts} pontos, recorde! merecia uma Master Ball",
  "superou o recorde. agora é tua obrigação superar de novo",
  "recorde pessoal! {pts} pontos, eu vi, sou testemunha",
  "MDSSSS QUE ISSO, {pts} pontos, printa e manda no grupo",
  "{pts}! recorde! hoje é feriado no fliperama",
  "recorde batido! se fosse Dragon Ball teu cabelo tinha ficado loiro"
],
rlFim0: [
  "{pts} pontos. bom... a sombra tava escura mesmo",
  "{pts}. todo mestre já foi iniciante. um bem iniciante",
  "{pts} pontos. não conto pra ninguém, só pro grupo KKKKK",
  "deu {pts}. jogou de olho fechado pra me testar né",
  "{pts} pontos. recomendo o Gen 1 e um café",
  "{pts}. isso foi aquecimento, aquecimento longo",
  "{pts} pontinhos. o Magikarp também começou assim",
  "{pts}. eu acredito em você. não muito, mas acredito",
  "{pts}. patético KKKKK bora de novo",
  "{pts} pontos. com esse futebolzinho vai longe não"
],
rlFim1: [
  "{pts} pontos. não é ruim, também não é bom. é honesto",
  "{pts}. treinador de Rota 3, tem futuro",
  "{pts}! tá pegando o jeito",
  "{pts} pontos. dá pra mostrar pra mãe, ela elogia de qualquer jeito",
  "{pts}! já passa do primeiro ginásio",
  "{pts} pontos. o Brock te dava a insígnia da Rocha por pena",
  "{pts}. fã intermediário, mais uma e cê sobe",
  "{pts}. tá esquentando, tipo Charmander num dia frio",
  "{pts} pontos, tô quase dizendo que foi bom",
  "{pts}! médio com potencial"
],
rlFim2: [
  "{pts} pontos! agora sim",
  "{pts}! placar de quem assistiu o anime inteiro",
  "{pts}. bonito, até eu fiquei feliz",
  "{pts} pontos, nível Líder de Ginásio",
  "{pts}! o Professor Carvalho ia até lembrar teu nome",
  "{pts}! isso já dá inveja em alguém",
  "{pts} pontos. respeitável",
  "{pts}! esse placar merece print",
  "fez {pts} e eu não tenho do que reclamar. sensação estranha",
  "{pts}! tá virando referência no fliperama"
],
rlFim3: [
  "{pts} PONTOS! nível Elite Four",
  "{pts}! cê é uma Pokédex ambulante",
  "{pts}. tô sem palavras, e eu sou só palavras",
  "{pts} pontos, nível Mestre Pokémon",
  "{pts}! quem te ensinou? fui eu né",
  "{pts}! relâmpago de verdade, o Raichu aprova",
  "olha esse {pts}! chama o Goku que ele quer lutar com você",
  "{pts} pontos. decorou a Pokédex ou foi mordido por um Porygon?",
  "{pts}. absurdo, se fosse campeonato cê tava na final",
  "{pts}! como pode ser tão maneiro"
],
rlFim4: [
  "{pts} PONTOS?! isso é hack? me responde",
  "{pts}! cê não é treinador, é lenda urbana",
  "{pts}! o fliperama inteiro travou de emoção",
  "{pts}. vou ter que atualizar meu sistema pra entender isso",
  "{pts} pontos, nível Zeno Sama de reconhecer sombra",
  "{pts} KJJJJJJ QUE ISSOOOO",
  "{pts}! isso aqui não é jogo pra você, é aquecimento",
  "{pts} pontos. eu me curvo, e olha que eu nem tenho coluna",
  "{pts}! registra em cartório",
  "MEU DEUS QUE PARTIDA, {pts} PONTOS MEU DEUS"
],
rlErrosLista: [
  "olha a lista de quem te enganou. {nome} tá rindo",
  "errou {n}. estuda a lista aí embaixo, principalmente {nome}",
  "tá vendo {nome} na lista? olha bem que da próxima cê não erra",
  "esses aí te pegaram. decora as carinhas, {nome} principalmente",
  "{n} na lista. teu dever de casa. {nome} é a pergunta bônus",
  "{nome} escapou hoje. vai voltar",
  "a lista de erro é um álbum de figurinha ao contrário. começa por {nome}",
  "quem te derrubou hoje: {nome} e companhia. grava esses rostos",
  "aprende com {nome}. te humilhou mas tem muito a ensinar",
  "marquei {nome} de caneta vermelha. estuda",
  "{n} escaparam. a cara deles tá ali embaixo, encara",
  "{nome} tá na lista pq cê chamou de outra coisa. pede desculpa"
],
rlSemErros: [
  "zero erro! ninguém escapou. assustador",
  "nenhum erro na rodada. tá colando? só pergunto",
  "sem nenhum erro. não tenho nem o que comentar e isso me irrita",
  "a lista de erros tá vazia. igual minha geladeira",
  "zero erro! o Professor Carvalho tá chorando de alegria",
  "rodada limpa, nada pra estudar. vai tomar um sorvete",
  "ninguém escapou. cê é uma Master Ball em forma de gente",
  "não errou nada. vou ter que inventar um jeito de reclamar"
],
rlDiarioFeito: [
  "Desafio do Dia registrado: {pts} pontos! compartilha e provoca a galera",
  "diário feito! {pts} pontos oficiais, amanhã tem outro",
  "tá no placar: {pts} pontos hoje. manda no grupo",
  "{pts} no diário. agora é torcer pros teus amigos fazerem menos",
  "desafio de hoje fechado com {pts}. a oficial é essa, sem choro",
  "{pts} pontos no Desafio do Dia! copia o resultado e espalha",
  "diário feito, {pts} pontos. amanhã a sequência é outra, nem adianta decorar",
  "registrado! {pts} pontos. pode jogar de novo por diversão, mas o oficial é esse",
  "{pts} no diário, vai pra história. pelo menos até amanhã",
  "desafio encerrado, teu {pts} tá guardado"
],
rlDiarioJaFoi: [
  "cê já fez o de hoje: {pts} pontos. pode treinar mas não vale",
  "o diário de hoje já foi, {pts} oficiais. quer jogar só pela glória?",
  "já jogou hoje, {pts} pontos gravados. volta amanhã",
  "a oficial já tá no bolso: {pts} pontos. agora é só treino",
  "diário feito. amanhã tem mais, os outros modos tão aí te esperando",
  "hoje já deu, {pts} pontos. se quiser treina, fica entre nós",
  "tá tentando me enganar? eu tenho memória de computador",
  "o desafio de hoje fechou com {pts}. compartilha antes que esqueça",
  "pode jogar de novo, mas o oficial é o primeiro. sempre",
  "tentativa oficial usada: {pts}. os outros modos também dão XP"
],

/* ---------- menu / entre rodadas ---------- */
rlOi: [
  "Relâmpago! 60 segundos, uma sombra, quatro nomes. escolhe o modo e bora",
  "aqui é rapidez. a sombra aparece, cê aperta. simples e difícil",
  "quem é esse Pokémon? descobre em menos de um segundo",
  "voltou pro Relâmpago! o cronômetro tava com saudade",
  "primeira vez? vai de Gen 1",
  "fundo amarelo girando significa uma coisa: hora do quiz",
  "Relâmpago ligado. um minuto de adrenalina",
  "veio bater teu recorde ou passar vergonha?",
  "aqui não tem tempo pra pensar. só pra clicar",
  "sombra de Pokémon e de Dragon Ball te esperando",
  "o jogo que faz cê gritar nome pro monitor. os vizinhos amam",
  "o desafio do dia tá aí embaixo se quiser provar alguma coisa"
],
rlModo: [
  "{modo}. boa escolha. ou não, vamos ver",
  "{modo}! aperta o botão grande quando tiver coragem",
  "trocou pra {modo}. tá fugindo do outro né",
  "{modo} na mira. o recorde tá escrito ali",
  "{modo}. já tô preparando as piadas",
  "{modo}, 60 segundos. nenhuma desculpa",
  "{modo}? corajoso ou distraído?",
  "{modo}, aprovado. por hoje",
  "beleza, {modo}. quando tiver pronto é só apertar",
  "{modo} ligado, estica os dedos"
],
rlSairConfirma: [
  "vai desistir? aperta de novo pra confirmar",
  "sair agora? aperta outra vez se for sério",
  "certeza? o Pikachu não sai por nada e cê vai sair?",
  "confirma a fuga? o relógio vai rir de você"
],
rlSair: [
  "desistiu. tudo bem, até o Ash já fugiu de batalha",
  "saiu no meio! o cronômetro ficou sozinho coitado",
  "rodada encerrada antes da hora. fugiu com sucesso",
  "aquele barulhinho de fuga de jogo antigo tocou aqui",
  "fugiu, mas eu guardei os pontos. tá tudo registrado",
  "parou no meio igual o Snorlax. vocês se entendem"
]
};

/* ---------- cutucar o mascote nesta página ---------- */
L.cutucarRelampago = [
  "ei! eu não sou uma das opções, não precisa me clicar",
  "cutucar o Bugado não conta como resposta",
  "tá me confundindo com uma sombra? eu sou azul, olha",
  "não sou Pokémon! sou um bug com orelha",
  "ai! isso tira três segundos meus também sabia",
  "me cutucar não aumenta o combo, eu testei",
  "sou tipo Fantasma, teu dedo passou direto. quase",
  "se eu virasse silhueta cê acertava? aposto que não",
  "clica nos botões mano. os de baixo, com nome escrito",
  "boing! pronto, agora volta pro jogo",
  "o relógio não para pq cê tá me cutucando",
  "eu sou o juiz, não a bola",
  "toca de novo e eu escondo a próxima sombra. não tenho esse poder, mas imagina",
  "se eu tivesse Pokébola eu me capturava pra fugir de você",
  "procurando botão de dica? não tem. Relâmpago é na raça",
  "tenho cara de Raichu? não. então para",
  "cutucada crítica! não foi muito efetiva",
  "me cutuca que eu grito o nome errado de propósito",
  "sou mascote, não boneco antiestresse",
  "sou gato fantasma mas sinto tudo. principalmente isso",
  "clicou em mim na velocidade que devia clicar nas respostas",
  "cutucou! perdeu o combo. calma, não perdeu, mas imagina",
  "olha a silhueta, não eu. sou lindo mas não sou a pergunta",
  "eu sou o Bugado e não evoluo com Pedra Trovão",
  "vai que eu sou o secreto? não sou. mas vai que",
  "cada cutucada é uma sombra passando sem resposta",
  "cutuca dez vezes que aparece o MissingNo. não testa",
  "não brilho no escuro, não adianta tentar acender",
  "procurando atenção? achou. agora joga",
  "sou um gato fantasma bug, não um Pikachu de pelúcia",
  "isso foi um Investida? resisti",
  "cutucou de novo, minha barra de HP tá amarela",
  "sabe o que é mais rápido que teu dedo? nada. usa isso nas respostas",
  "toca de novo e eu começo a falar do Yamcha",
  "me clica que eu dou spoiler do próximo. esqueci",
  "eu sei quem é o próximo e não conto",
  "Relâmpago é o jogo. não relampeia em mim",
  "vou reclamar com o Kaio do Norte, ele ouve tudo",
  "também queria jogar mas não tenho dedo. nem mão. nem paciência",
  "calma mano, guarda esse clique pra hora do combo",
  "KKKKK para, tá maluco"
];

/* ---------- temáticas pro 'aleatorio' e 'parado' gerais ---------- */
const ALEATORIO = [
  "o Rhydon foi o primeiro Pokémon desenhado. eu fui o primeiro bug, somos pioneiros",
  "a silhueta do Ditto é só um borrão. ele deve ter crise de identidade",
  "se o Pikachu anda fora da Pokébola, pra que o Ash carrega Pokébola vazia?",
  "o Mr. Mime faz faxina pq ninguém quer ele no time",
  "o Goku come mais que um Snorlax e ainda luta. metabolismo Saiyajin",
  "o Kuririn não tem nariz. eu também não. clube dos sem nariz",
  "quem é esse Pokémon? pergunta filosófica. quem é você afinal",
  "o Psyduck tem dor de cabeça ou ele é a dor de cabeça?",
  "o Snorlax pesa 460 kg. meu ego pesa mais",
  "gosto do fundo amarelo girando. dá paz e tontura",
  "pq a Equipe Rocket sempre decola? é o programa espacial deles?",
  "o Vegeta falou Kakarotto umas 4 mil vezes. chutei o número mas tá perto",
  "a Enfermeira Joy é igual em toda cidade e isso me assusta até hoje",
  "o Magikarp é o único peixe que eu respeito. por teimosia",
  "o Clefairy quase foi o mascote no lugar do Pikachu. imagina o chaveiro",
  "se o Freeza fizesse terapia a saga de Namekusei durava três episódios",
  "ensaio silhueta no espelho. a minha é um gato com antena",
  "Saiyajin fica loiro quando se irrita. eu fico bugado",
  "tem Pokémon que é lustre, o Chandelure. criatividade não tem limite",
  "o Piccolo é verde, só bebe água e é o pai mais responsável do anime",
  "o Abra dorme 18 horas por dia. meu Pokémon espiritual",
  "o Mestre Kame tem mais de 300 anos e ainda treina. eu tô cansado já",
  "o Steelix é o Onix que foi pra academia",
  "se o Ditto virar eu, vira um bug de um bug",
  "minha fusão preferida: eu com um pastel. Bugastel",
  "o Slowpoke demora 5 segundos pra sentir dor. eu demoro isso pra te zoar",
  "pq a Misty nunca pegou a bicicleta de volta? o maior mistério de Kanto",
  "o Yamcha começou como vilão do Goku e virou alívio cômico. carreira difícil",
  "um dia eu faço o Quem é esse Bugado. resposta: sempre eu",
  "o Shenlong realiza qualquer desejo e o Oolong pediu uma calcinha. humanidade",
  "o Charizard não é tipo Dragão. isso me tira o sono",
  "se o Pikachu dá choque, pq ninguém carrega o celular nele?",
  "o Majin Boo transforma gente em doce. eu transformo teu tempo livre em derrota",
  "tem teoria que o Gengar é a sombra do Clefairy. tô convencido",
  "o Goku e o Ash juntos iam se perder no caminho",
  "silhueta preta em fundo amarelo é o maior design da história da TV",
  "dizem que quem acerta 30 seguidos ouve a musiquinha da Pokédex tocando sozinha",
  "o Cell é o ser perfeito e perdeu pra uma criança KKKKK",
  "o Bills destrói planeta e perde a linha por causa de pudim",
  "o Kaio do Norte faz piada ruim e ninguém ri. me identifico"
];
const PARADO = [
  "a sombra tá te esperando. ela não tem pressa, o relógio tem",
  "tá escolhendo o modo ou meditando? aperta o botão grandão",
  "o fundo amarelo já girou umas duzentas vezes, joga uma aí",
  "parado assim cê parece uma silhueta. quem é esse jogador?",
  "60 segundos é menos do que cê já ficou parado aí",
  "o Pikachu tá batendo o pé esperando cê começar",
  "se não vai jogar pelo menos me cutuca. não, pera, não cutuca",
  "o desafio do dia não se joga sozinho, eu já tentei",
  "o Snorlax aprova essa pausa. eu não",
  "até o Slowpoke falou que cê tá lento",
  "qualquer botão mano. só quero ver sombra",
  "o cronômetro tá dormindo, acorda ele",
  "mais um minuto parado e já dava uma rodada inteira",
  "ô, cê tá vivo?",
  "essas horas é respirar, ter paciência e apertar VALENDO"
];

Object.keys(ESP).forEach(k => { L['rl@' + k] = ESP[k]; });
Bugado.addLines(L);
Bugado.extendLines({ aleatorio: ALEATORIO, parado: PARADO });
window.RL_ESP = ESP;
})();
