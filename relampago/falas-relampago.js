/* ==========================================================
   Falas do Bugado para "Relâmpago" (silhueta contra o relógio)
   Variáveis: {nome} (resposta certa), {errado} (o que você marcou),
   {n} (números: combo, erros…), {pts} (pontos), {modo}, {dia}.
   Categorias "rl@<id>" = falas de personagens específicos
   (id = nome sem acento/pontuação: "mrmime", "majinboo"…).
   ========================================================== */
(() => {

/* ---------- personagens famosos (vale pra acerto e erro: é comentário da revelação) ---------- */
const ESP = {
  pikachu: [
    "É O PIKACHU! Até minha avó acertaria. Ela não sabe o que é Pokémon.",
    "Pikachu: o rato mais famoso depois daquele outro rato. Não vou citar, tenho medo de processo.",
    "Pikachu na tela e você piscou? Esse aí é a pergunta bônus da vida."
  ],
  raichu: [
    "É O PIKACHU! …não, é o Raichu. A orelha entrega, treinador.",
    "Raichu: o Pikachu que tomou a Pedra Trovão e perdeu o contrato de mascote.",
    "Raichu! Ninguém lembra dele, e ele sabe. Dá um abraço nele."
  ],
  charizard: [
    "Charizard! Desobedece o dono, mas acerta no coração dos anos 90.",
    "Aquela asa, aquela cauda de fogo… é o Charizard, o dragão que não é tipo dragão.",
    "Charizard na silhueta: a carta holográfica que você nunca teve."
  ],
  charmander: [
    "Charmander! Se a chama da cauda apagar, ele apaga junto. Joga rápido, por ele.",
    "Charmander: fofo agora, arrogante daqui a duas evoluções."
  ],
  bulbasaur: [
    "Bulbasaur! O inicial mais injustiçado. Tem uma planta nas costas e zero reconhecimento.",
    "Bulbasaur. O pessoal escolhe Charmander e depois sofre no primeiro ginásio. Ele ri por dentro."
  ],
  squirtle: [
    "Squirtle! Óculos escuros no bolso, Esquadrão Squirtle no coração.",
    "Squirtle: tartaruga, líder de gangue e ícone fashion. Nessa ordem."
  ],
  psyduck: [
    "Errou o Psyduck? Agora quem tá com dor de cabeça sou eu.",
    "Psyduck! Ele não sabe onde tá. Relaxa, você também não.",
    "Psyduck com a mão na cabeça. É a pose oficial de quem joga isso aqui."
  ],
  magikarp: [
    "Magikarp! Usou Splash. Nada aconteceu. Igual meu salário.",
    "Magikarp: pula, pula, pula… e um dia vira Gyarados. Tenha fé em você também."
  ],
  gyarados: [
    "Gyarados! A prova de que insistir no Magikarp compensa. Mais ou menos.",
    "Gyarados: um peixe inútil que virou um dragão furioso. Motivacional demais."
  ],
  snorlax: [
    "Snorlax! Dormindo até na silhueta. Meu ídolo.",
    "Snorlax: 460 kg de preguiça bloqueando a estrada. Me identifico."
  ],
  eevee: [
    "Eevee! Oito evoluções e nenhuma decisão. Tipo você no cardápio.",
    "Eevee: o Pokémon que ainda não sabe o que quer ser quando crescer."
  ],
  mewtwo: [
    "Mewtwo! Criado em laboratório pra ser o mais forte. Virou pergunta de quiz. Que queda.",
    "Mewtwo leu tua mente e achou… pouca coisa. Brincadeira. Um pouco."
  ],
  mew: [
    "Mew! Dizem que ele tá debaixo do caminhão. Não tá. Eu olhei.",
    "Mew: tão raro que o pessoal inventava truque de Game Boy pra achar."
  ],
  jigglypuff: [
    "Jigglypuff! Se ela cantar agora, você dorme e perde o combo. Anda!",
    "Jigglypuff: canta lindo, ninguém escuta, e ela desenha na tua cara. Justo."
  ],
  meowth: [
    "Meowth! Esse aí fala. Igual eu. A diferença é que ele perde sempre.",
    "Meowth, isso mesmo! Equipe Rocket decolando outra vez!"
  ],
  ditto: [
    "Ditto! A silhueta dele é uma gosma. Qualquer um acertaria. Ou não.",
    "Ditto: pode virar qualquer Pokémon, e escolheu virar pergunta fácil."
  ],
  gengar: [
    "Gengar! Fantasma sorridente. Primo distante meu, a gente não se fala.",
    "Gengar: aquele sorriso é de quem viu você errar a anterior."
  ],
  onix: [
    "Onix! Uma cobra de pedra de 9 metros. Silhueta mais fácil que ela, só a do Ditto.",
    "Onix, do Brock! Ele ainda tá tentando convencer a Enfermeira Joy."
  ],
  slowpoke: [
    "Slowpoke! Ele vai perceber que apareceu aqui só semana que vem.",
    "Slowpoke: o único que joga Relâmpago mais devagar que você. Brincadeira. Quase."
  ],
  lucario: [
    "Lucario! Sente a aura de quem tá indo bem. Ou mal. Principalmente mal.",
    "Lucario: o favorito de quem desenhava no caderno da escola."
  ],
  togepi: [
    "Togepi! Um ovo com pernas. A silhueta é literalmente um ovo.",
    "Togepi: a Misty carregou esse ovo por umas 80 temporadas."
  ],
  machamp: [
    "Machamp! Quatro braços. Imagina a academia desse cara.",
    "Machamp: se ele carregasse sacola de mercado, era uma viagem só."
  ],
  dragonite: [
    "Dragonite! O dragão mais fofo e mais forte ao mesmo tempo. Entrega carta, inclusive.",
    "Dragonite: parece pelúcia, bate igual caminhão."
  ],
  lapras: [
    "Lapras! O barco oficial do Ash. Uber aquático antes de existir Uber.",
    "Lapras: ninguém nunca esquece o Lapras. Nem o choro no episódio."
  ],
  mrmime: [
    "Mr. Mime! Um mímico. Ninguém pediu, mas ele veio.",
    "Mr. Mime: faz parede invisível e passa pano na casa da mãe do Ash."
  ],
  farfetchd: [
    "Farfetch'd! Um pato com um alho-poró. O Game Freak tava inspirado.",
    "Farfetch'd: anda armado de verdura. Respeita."
  ],
  butterfree: [
    "Butterfree! Se lembrou da despedida no anime, pode chorar. Mas chora rápido.",
    "Butterfree: aquele episódio da despedida até hoje dói."
  ],
  geodude: [
    "Geodude! Uma pedra com braços. A silhueta mais honesta do mundo.",
    "Geodude: tem gente que chamava de Pedrinho. Eu chamo de pedra, mesmo."
  ],
  pidgey: [
    "Pidgey! O pombo da Rota 1. Todo mundo tem um no PC que nunca usou.",
    "Pidgey: se tu jogou o Vermelho, capturou uns trinta desse."
  ],
  cubone: [
    "Cubone! Usa o crânio da mãe como capacete. Pesado demais pra um joguinho de 60 segundos.",
    "Cubone: o mais triste da Pokédex. Acerta ele com carinho."
  ],
  goku: [
    "GOKU! Chegou atrasado de novo, mas chegou. Igual você nessa resposta.",
    "Goku: salva o universo e esquece de pagar a conta de luz. Ícone.",
    "Esse cabelo espetado não engana ninguém. É o Kakarotto."
  ],
  vegeta: [
    "Vegeta! O príncipe dos Saiyajins. Nunca deixa ninguém esquecer isso.",
    "Vegeta: tem orgulho, entradas no cabelo e uma rivalidade eterna.",
    "Vegeta na silhueta. O cabelo dele é uma chama que não passa pela porta."
  ],
  piccolo: [
    "Piccolo! O melhor pai do Gohan. Não o biológico, o de verdade.",
    "Piccolo: capa, turbante e cara de quem não dorme desde a Saga Saiyajin."
  ],
  kuririn: [
    "Kuririn! O humano mais forte da Terra e o que mais morreu. Ele merece um acerto.",
    "Kuririn: seis pontinhos na testa e zero sorte."
  ],
  freeza: [
    "Freeza! Educado, cruel e com um trocadilho de geladeira no nome.",
    "Freeza: tem cinco formas e todas são irritantes."
  ],
  cell: [
    "Cell! Um inseto perfeito. Palavras dele, não minhas.",
    "Cell: roubou DNA de meio anime e ainda perdeu pra uma criança."
  ],
  majinboo: [
    "Majin Boo! Transforma gente em chocolate. Vilão ou confeiteiro?",
    "Boo, o gordinho rosa. Adotou um cachorro e amoleceu. Relatable."
  ],
  mrsatan: [
    "Mr. Satan! O campeão mundial que nunca ganhou luta nenhuma. Carisma puro.",
    "Mr. Satan: se ele levou a fama pelo Cell, você pode levar a fama por esse acerto."
  ],
  bills: [
    "Bills! Deus da destruição que destrói planetas por causa de pudim.",
    "Bills: um gato roxo com fome. Primo meu? Não. Mas somos gatos."
  ],
  whis: [
    "Whis! O anjo que treina deuses e vive pedindo comida da Terra.",
    "Whis: aquele cajado dá replay no tempo. Queria um pra desfazer teus erros."
  ],
  yamcha: [
    "Yamcha! Deitado na cratera, na pose mais famosa da história.",
    "Yamcha: guerreiro Z de coração, figurante de profissão."
  ],
  gohan: [
    "Gohan! Poder escondido que só aparece quando alguém grita.",
    "Gohan: podia ser o mais forte do universo e escolheu estudar. Respeito."
  ],
  trunks: [
    "Trunks! Veio do futuro com espada e jaqueta. Nem pediu licença.",
    "Trunks do futuro: cortou o Freeza em pedaços em dez segundos de cena."
  ],
  broly: [
    "Broly! O Saiyajin lendário. Só grita 'Kakarotto' e resolve na força.",
    "Broly: 90% músculo, 10% gritaria."
  ],
  mestrekame: [
    "Mestre Kame! Inventou o Kamehameha e a vergonha alheia.",
    "Mestre Kame: 300 anos, óculos escuros e zero juízo."
  ],
  zenosama: [
    "Zeno Sama! Pode apagar universos com um toque. Trata ele com carinho.",
    "Zeno Sama: o ser mais poderoso de todos tem cara de mascote de bala. Respeita."
  ],
  bulma: [
    "Bulma! Gênia, inventora e a única que manda no Vegeta.",
    "Bulma: sem ela ninguém achava esfera nenhuma. Nem a série existia."
  ],
  gotenks: [
    "Gotenks! Fusão de duas crianças que resultou num moleque convencido. Faz sentido.",
    "Gotenks: fantasmas kamikazes e pose ridícula. Genial."
  ]
};

const L = {

/* ---------- início de rodada, por modo ---------- */
rlInicioGen1: [
  "Gen 1! Os 151 do Vermelho e Azul. Se errar Pikachu, eu desligo o fliperama.",
  "Geração 1, o básico. Tipo aula de revisão, só que com cronômetro e humilhação.",
  "Kanto! Aqui é Bulbasaur, Charmander e aquele Rattata que você capturou sem querer.",
  "151 Pokémon clássicos. Treinador de verdade sabe todos. Vamos ver o que você é.",
  "Gen 1: modo nostalgia. Se sentir cheiro de fita de Game Boy, é normal.",
  "Kanto na área! Sessenta segundos. Pisca não, que você perde um Pidgey.",
  "Hora do clássico. A silhueta aparece, você grita o nome. Pode gritar mesmo.",
  "Gen 1 é o modo fácil. Fácil pra quem cresceu nos anos 90. Pra você, vamos ver.",
  "Começou! Kanto inteiro na fila. Até o Mr. Mime, infelizmente.",
  "Geração 1: onde tudo começou. E onde muita gente termina envergonhada.",
  "Aquecendo com os 151. Se for bem aqui, eu deixo você ir pro modo difícil.",
  "Relâmpago Kanto! A Pokédex tá ligada. O Professor Carvalho tá olhando.",
  "Bora, treinador. Silhueta preta, fundo amarelo, zero desculpa.",
  "Os de sempre: Pikachu, Charizard, Psyduck… e uns Nidoran pra confundir.",
  "Gen 1 valendo! Se errar o Magikarp, eu conto pra todo mundo."
],
rlInicioTodas: [
  "Todas as gerações! 1025 Pokémon. Boa sorte com a Gen 9, porque nem eu sei.",
  "Modo completo. Tem Pokémon aqui que foi desenhado ontem. Coragem.",
  "Todas as gerações: o modo que separa os treinadores dos que pararam no Pokémon Ouro.",
  "Mil e vinte e cinco sombras. Metade parece chaleira. Se vira.",
  "Modo difícil ativado. Se aparecer um Pokémon que parece um poste, provavelmente é Gen 8.",
  "Ah, você é corajoso. Todas as gerações, com os Paradoxos no meio. Respeito.",
  "Pokédex inteira na roleta. Eu já tô rindo antes de começar.",
  "Todas as gerações! Você vai conhecer Pokémon novos. Na marra.",
  "Esse é o modo onde a Gen 5 te encara e você fica mudo. Bora.",
  "Do Bulbasaur ao Pecharunt. Espero que você tenha estudado.",
  "1025 opções e só 60 segundos. A matemática tá contra você.",
  "Modo completo valendo! Se aparecer um sorvete, é Vanillite. De nada.",
  "Todas as gerações: o Nacional completo. Até eu tô nervoso.",
  "Se você acertar um Pokémon de Paldea de primeira, eu te chamo de Professor.",
  "Começou o caos! Mil silhuetas, quatro botões, um treinador suando."
],
rlInicioDB: [
  "Dragon Ball! Troca a Pokédex pelo radar do dragão. Quem é esse guerreiro?",
  "Modo Dragon Ball: silhueta de cabelo espetado não quer dizer que é o Goku. Às vezes quer.",
  "Guerreiros Z na tela! Sessenta segundos, que é menos que um episódio de carregar Genki Dama.",
  "Hora de adivinhar lutador pela sombra. Metade tem o mesmo cabelo. Boa sorte.",
  "Dragon Ball valendo! Se confundir Kibito com Kaioshin, eu entendo. Mas eu julgo.",
  "O rastreador tá ligado. Nível de poder do teu conhecimento: vamos medir.",
  "Modo guerreiro! Aqui tem Saiyajin, namekuseijin, androide e o Mr. Satan.",
  "Dragon Ball: se a silhueta tiver capa e turbante, pode confiar no Piccolo.",
  "Ativando a sala do tempo. Aqui é só um minuto, mas vale um ano.",
  "Silhuetas de Dragon Ball! Se errar o Goku, você volta pra Saga Pilaf.",
  "Kamehame… começou! Foco na sombra e nos nomes.",
  "Modo DB. Dica grátis: o Freeza tem cauda. Muita gente tem cauda. Esquece a dica.",
  "Guerreiros na fila! Quem acertar tudo ganha uma semente dos deuses imaginária.",
  "Dragon Ball! O Oolong não tá aqui porque não tem foto. Ele se escondeu, típico.",
  "Bora! Cinquenta e poucos guerreiros e você com um minuto no relógio."
],
rlInicioMix: [
  "Mistureba! Pokémon e Dragon Ball no mesmo liquidificador. Vai sair vitamina de confusão.",
  "Modo caos: uma hora é Pikachu, outra hora é Piccolo. Ambos começam com P. Coincidência?",
  "Mistureba valendo! Se chamar o Goku de Pokémon, ninguém vai te culpar. Eu vou.",
  "Crossover que ninguém pediu e todo mundo merece. Bora!",
  "Pokébola numa mão, esfera do dragão na outra. Que comece a bagunça.",
  "Mistureba: o Ash e o Goku são praticamente iguais. Nunca envelhecem e nunca estudam.",
  "Liga os dois canais ao mesmo tempo. Silhueta de monstrinho e de guerreiro misturadas.",
  "Modo Mistureba! Se aparecer o Majin Boo e você disser Jigglypuff, eu entendo. Rosa é rosa.",
  "Bagunça autorizada! Troca de anime sem aviso. Fica esperto.",
  "Mistureba: sessenta segundos de zapping entre dois animes. Nostalgia em dobro.",
  "Aqui o Mewtwo pode enfrentar o Freeza. Quer dizer, pode aparecer depois dele. Tanto faz.",
  "Liquidificador ligado! Não sei o que sai daqui, mas vai ser bonito de assistir."
],
rlInicioDiario: [
  "Desafio do Dia! A mesma sequência pra todo mundo. Seus amigos vão ver quem é o melhor.",
  "Diário valendo! Só tem uma chance oficial. Sem pressão. Muita pressão.",
  "Desafio do Dia, gerações 1 a 4. É hoje que você humilha o grupo da família.",
  "Mesma fila de silhuetas pra todo mundo. A diferença é o cérebro. Boa sorte pro seu.",
  "O desafio de hoje começou! Não adianta perguntar pro amigo, ele tá jogando também.",
  "Tentativa oficial! Se errar, fica registrado nos anais do fliperama. É, anais.",
  "Diário na área. Tu tem sessenta segundos pra fazer uma pontuação digna de print.",
  "Desafio do Dia: Kanto, Johto, Hoenn e Sinnoh. A velha guarda inteira.",
  "Vale a honra! O placar de hoje vai pro teu perfil. Capricha.",
  "Todo mundo recebeu essa mesma sequência. Hoje você joga por Pallet Town.",
  "Começou o diário! Respira fundo. Agora para de respirar e joga.",
  "Uma chance, sessenta segundos, glória eterna. Ou vergonha eterna. Bora ver."
],
rlDiarioTreino: [
  "Treino do diário! Não vale pro placar, mas vale pra decorar a sequência. Espertinho.",
  "Jogando o diário de novo? A oficial já foi. Esse aqui é só pelo orgulho.",
  "Replay não oficial. Pode errar à vontade, ninguém vai saber. Só eu.",
  "Segunda volta no diário. Já sabe as respostas? Isso se chama decorar, não jogar.",
  "Treino liberado. A nota oficial já tá guardada, e ela não muda por nada.",
  "Replay do desafio: agora sem pressão. Mentira, eu continuo te julgando.",
  "Voltou pro diário? Tá querendo provar que a primeira foi azar, né?",
  "Modo treino. Se fizer mais pontos agora, doeu, porque não conta."
],

/* ---------- acertos ---------- */
rlAcerto: [
  "Isso!",
  "Acertou. Não se acostuma.",
  "Na mosca!",
  "Boa, treinador!",
  "Certinho. O Professor Carvalho aprova.",
  "Pá! Mais um pra conta.",
  "Isso aí, pode comemorar. Rápido, que já tem outro.",
  "Acertou! A Pokédex fez um barulhinho feliz.",
  "Correto. Eu tinha certeza que você ia errar. Tô chocado.",
  "Mandou bem!",
  "Acerto limpo, sem enrolação.",
  "Uau. Olhou e matou.",
  "Certo! Tá jogando com o coração.",
  "É esse! Bom olho.",
  "Mais um na Pokédex mental.",
  "Isso! Continua que tá bonito.",
  "Certo. Meu respeito subiu de 2 pra 3.",
  "Acertou e nem suou. Ou suou? Não dá pra ver daqui.",
  "Na lata!",
  "Show! Próximo!",
  "Olha só, alguém prestou atenção no desenho.",
  "Acertou. O Bugado tá anotando. Positivamente, dessa vez.",
  "Tá craque, hein.",
  "Resposta certa. Pode tirar print.",
  "Isso mesmo! A sombra não te engana.",
  "Correto! O cronômetro ficou com medo.",
  "Acerto! E o combo agradece.",
  "Uhul! Continua!",
  "Perfeito. Não me decepciona agora.",
  "Boa! Olha o relógio, não para."
],
rlAcertoNome: [
  "É O {nome}! Bonito.",
  "{nome}, isso! Você conhece a sombra dele de longe.",
  "Acertou o {nome}. Ele mandou um tchauzinho.",
  "{nome}! Certíssimo. Ele tá feliz de ser lembrado.",
  "Era o {nome} mesmo. Olho bom, treinador.",
  "{nome}! Até a silhueta sorriu.",
  "Acertou o {nome}. Isso vai pro seu currículo.",
  "{nome} reconhecido com sucesso. Bip bip.",
  "Olha o {nome} aí! Mandou bem.",
  "Isso! {nome}, sem dúvida.",
  "Acertou o {nome} na primeira olhada. Isso é treino ou talento?",
  "{nome}! Ninguém esquece esse.",
  "{nome}, correto. A Pokédex agradece.",
  "O {nome} tava escondido na sombra e você achou. Detetive.",
  "{nome}! Eu ia falar, mas você foi mais rápido.",
  "É o {nome}! Pode gritar igual no desenho.",
  "Certo, é o {nome}. Tô impressionado. Um pouco.",
  "{nome} apareceu e você nem hesitou. Lindo.",
  "Acertou o {nome}! Ele vai contar pros amigos dele.",
  "{nome}! A sombra era tão óbvia pra você assim?",
  "{nome}, na mosca. Próxima sombra!",
  "Olha você reconhecendo o {nome}. Cresceu, hein.",
  "Era o {nome}! Tá jogando fácil demais.",
  "{nome} capturado! Mentalmente.",
  "Acertou! O {nome} te agradece a consideração.",
  "{nome}! Até eu, que sou um bug, fiquei orgulhoso.",
  "É o {nome}, sim senhor. Continua!",
  "O {nome} não conseguiu se esconder de você.",
  "{nome}! Esse foi de lei.",
  "Certinho: {nome}. Mais um pro combo."
],
rlRapido: [
  "Que isso?! Respondeu antes da sombra carregar!",
  "Rápido demais. Você tá colando?",
  "Nem piscou! Relâmpago mesmo.",
  "Meio segundo. Você tem reflexo de Pikachu.",
  "Acertou no susto. Instinto superior?",
  "Foi tão rápido que eu nem terminei de pensar.",
  "Velocidade de Quick Attack. Toma!",
  "Isso foi um reflexo ou uma premonição?",
  "Mais rápido que o Ash trocando de Pokémon no meio da temporada.",
  "Tu nem olhou direito e acertou. Assustador.",
  "Relâmpago! O nome do jogo é você.",
  "Rápido assim só o Flash. O do outro desenho.",
  "Nem deu tempo de eu torcer contra.",
  "Clicou na velocidade da luz. O Whis ficou com inveja.",
  "Quem é esse Pokémon? Você respondeu antes da pergunta.",
  "Tu é um robô? Me responde. Aperta um semáforo aí.",
  "Reflexo de treinador de verdade. Aplausos.",
  "Nem vi seu dedo. Só vi o acerto.",
  "Rapidíssimo! Assim o cronômetro fica deprimido.",
  "Um piscar e pronto. Assim que se joga.",
  "Esse foi no automático. Memória muscular de 1999.",
  "Tão rápido que o {nome} nem terminou de posar."
],
rlDevagar: [
  "Acertou… eventualmente.",
  "Demorou, mas acertou. Tipo o Slowpoke percebendo que mordeu a cauda.",
  "Certo! Mas levou tanto tempo que eu envelheci um pixel.",
  "Acertou, mas o relógio chorou um pouquinho.",
  "Pensou, pensou, pensou… e acertou. Sofrido, mas vale.",
  "Acerto em câmera lenta. Bonito, mas lento.",
  "Deu certo! Só não faz isso toda vez, tá?",
  "Tu tava fazendo carregamento de Genki Dama? Demorou!",
  "Acertou o {nome}, mas quase deu tempo de ele evoluir.",
  "Correto! Da próxima vez, confia no primeiro instinto.",
  "Isso! Ainda que no ritmo de uma lesma de Kanto.",
  "Suspense digno de final de temporada. Acertou.",
  "Acertou, mas eu já tava preparando o discurso de consolo.",
  "Demorou tanto que o combo foi pegar um café.",
  "Certo. Você e o Snorlax têm o mesmo ritmo.",
  "Valeu a espera? Valeu. Mas o tempo não volta.",
  "Acertou na raça. Na raça lenta, mas na raça.",
  "Ufa! Tava achando que ia dar tempo de uma música inteira."
],

/* ---------- erros ---------- */
rlErro: [
  "Era o {nome}! Você marcou {errado}. Bonito, mas não.",
  "{errado}? Não. Era o {nome}. Anota aí.",
  "Nada de {errado}. Era o {nome}, e ele tá ofendido.",
  "Marcou {errado} com toda confiança. Era o {nome}. Adoro.",
  "Errou! Era o {nome}. O {errado} nem tava sabendo que tava no jogo.",
  "{errado}… sério? Olha de novo: {nome}.",
  "Não era o {errado}. Era o {nome}. Menos três segundos e um pouco de dignidade.",
  "O {nome} tá chorando no canto porque você chamou ele de {errado}.",
  "Quase! Mentira, nem quase. Era o {nome}.",
  "Era o {nome}. O {errado} agradece a lembrança, mas não era a vez dele.",
  "Clicou em {errado}? O {nome} viu isso e ficou chateado.",
  "Errou feio: {errado}. O certo era {nome}.",
  "{nome}! Não {errado}. Vou repetir devagar: {nome}.",
  "Opa. Era o {nome}. Tu viu {errado} naquela sombra? Consulta um oftalmologista.",
  "Era o {nome}. Vou fingir que o {errado} foi erro de dedo.",
  "{errado}? Na cara dura? Era o {nome}!",
  "Era o {nome}, gente! O {errado} tá até constrangido.",
  "Não, não. {nome}. O {errado} é outra história.",
  "Menos três segundos! Era o {nome}. Aprende e segue.",
  "Errou. Era o {nome}. Bate na mesa e continua.",
  "O {nome} tá de braços cruzados olhando pra você. Clicou {errado}, né?",
  "{errado} nunca. Era o {nome}. Tatua isso.",
  "Pior que o {errado} até parece, de olho fechado. Era o {nome}.",
  "Era o {nome}! Se quiser, eu finjo que não vi.",
  "Buzina de erro! Era o {nome}.",
  "Aí não, treinador. O certo era {nome}.",
  "Era o {nome}. Esse você vai lembrar pra sempre agora. De raiva.",
  "Errou o {nome}. Tudo bem, ele também não sabe teu nome.",
  "{errado} foi um chute ousado. Errado, mas ousado. Era o {nome}.",
  "Era o {nome}! O relógio agradece os três segundos que você doou."
],
rlConfundiuEvo: [
  "Confundiu {errado} com {nome}! Mesma família, evolução diferente. Dá pra entender. Um pouco.",
  "{errado} e {nome} são parentes. Mas é igual confundir tua mãe com tua avó. Não pode.",
  "Era o {nome}! O {errado} é da mesma linhagem, mas numa fase diferente da vida.",
  "Quase! {errado} é o irmão/primo/versão pokémon do {nome}. Evolução confunde mesmo.",
  "Ai, a família toda! Marcou {errado}, era o {nome}. A Pokédex entende, eu não.",
  "{errado} ou {nome}? Uma Pedra Evolutiva de diferença. Era o {nome}.",
  "Tu confundiu pai com filho! {errado} ≠ {nome}.",
  "Mesma linha evolutiva, mas não. Era o {nome}. A silhueta muda com a idade, igual gente.",
  "O {nome} evoluiu ou desevoluiu na tua cabeça. Marcou {errado}.",
  "Era o {nome}! O {errado} é da mesma família, então pelo menos foi um erro educado.",
  "Clássico: confundir as fases. {errado} não, {nome} sim.",
  "Errou por uma evolução! {nome}. Tá quase lá, treinador.",
  "Até o Professor Carvalho já confundiu {errado} com {nome}. Mentira, ele nunca.",
  "O {errado} é tipo o {nome} depois (ou antes) de um crescimento. Era o {nome}."
],
rlConfundiuTipo: [
  "Marcou {errado}, era o {nome}. Mesmo tipo, mesma vibe, pessoa errada.",
  "{errado} e {nome}: mesmo tipo, silhuetas parecidas. A pegadinha pegou você.",
  "Era o {nome}! O {errado} é do mesmo tipo, então foi um erro com critério.",
  "Mesmo tipo, Pokémon errado. Era o {nome}, não {errado}.",
  "Opa, confundiu os coleguinhas de tipo. {nome}, não {errado}.",
  "Eu coloquei o {errado} de propósito, sabia? Mesmo tipo do {nome}. Caiu.",
  "Erro técnico: acertou o tipo, errou o Pokémon. Era o {nome}.",
  "{errado} parece, mas era o {nome}. Tem que ser mais específico que o tipo.",
  "Caiu na pegadinha do tipo! Era o {nome}.",
  "O {errado} e o {nome} andam juntos no mesmo ginásio. Mas era o {nome}.",
  "Pelo menos o tipo tava certo. Isso vale zero pontos, mas vale um tapinha nas costas.",
  "Era o {nome}. O {errado} é da mesma turma, só que de outra sala."
],
rlDbErro: [
  "Era o {nome}! Você disse {errado}. Seu rastreador tá quebrado.",
  "{errado}? Não. {nome}. Dá uma semente dos deuses pro teu cérebro.",
  "O {nome} ficou ofendido. Chamaram ele de {errado} em rede nacional.",
  "Errou! Era o {nome}. Menos três segundos, igual o Yamcha perdendo luta.",
  "{nome}! Não {errado}. Volta pra Saga Pilaf e estuda.",
  "Era o {nome}. O {errado} tá rindo da tua cara lá do Outro Mundo.",
  "Marcou {errado}? O Kaio do Norte ouviu essa lá de longe e fez uma piada ruim.",
  "Não era o {errado}! Era o {nome}. O nível de poder dessa resposta: 5.",
  "Opa! {nome}. O {errado} nem estava na sala.",
  "Errou o guerreiro. Era o {nome}. O Vegeta teria vergonha.",
  "Era o {nome}! Nem com as sete esferas você mudaria esse erro.",
  "{errado}… {errado}? Era o {nome}, criatura.",
  "O {nome} tá voando pra cá pra tirar satisfação. Você chamou ele de {errado}.",
  "Menos três! Era o {nome}. O Mestre Kame desaprova. E ele aprova quase tudo.",
  "Era o {nome}. Faz as flexões do Goku de castigo."
],
rlDbConfundiu: [
  "Confundiu {errado} com {nome}! Mesma raça, silhueta parecida. Ainda assim, não.",
  "{errado} e {nome}: mesmo tipo de gente. Mas era o {nome}.",
  "Tá, eles se parecem. Mas {nome} é {nome} e {errado} é {errado}.",
  "Na sombra, todo {errado} parece {nome}. Mas era o {nome}.",
  "Saiyajin é tudo igual no escuro, né? Era o {nome}.",
  "A silhueta do {nome} e do {errado} brigam pelo mesmo espaço. Ganhou o {nome}.",
  "Mesmo povo, pessoa errada. Era o {nome}.",
  "Eu sabia que o {errado} ia te enganar. Era o {nome}."
],
rlDbAcerto: [
  "Isso! Nível de poder: mais de oito mil!",
  "Acertou o {nome}! O rastreador explodiu.",
  "{nome}! O Goku daria um sorriso e diria: vamos lutar?",
  "Certo! Ganhou uma semente dos deuses de brinde.",
  "{nome} identificado. Kaio do Norte aprovou.",
  "Acertou! Sente a energia? É o combo subindo.",
  "Isso aí! Você é fã raiz, de fita VHS.",
  "{nome}! Pode gritar o nome igual no anime, com eco.",
  "Correto! O Shenlong realizou teu desejo: um ponto.",
  "Boa! Esse acerto valeu uma transformação.",
  "Acertou o {nome}. O Vegeta nunca vai admitir, mas ficou impressionado.",
  "{nome}! Nem precisou de fusão pra acertar essa.",
  "Certeiro que nem o Tiro Especial do Piccolo. Mas mais rápido.",
  "É o {nome}! Genki Dama de pontos.",
  "Mandou bem! O Mestre Kame vai fazer uma festa. Não vai não."
],
rlMixTroca: [
  "Opa, trocou de canal! Agora é Dragon Ball.",
  "Mistureba: saímos de Kanto e caímos na Corporação Cápsula.",
  "Mudou o anime! Pokébola pra um lado, esfera pro outro.",
  "Alerta de crossover! Olha direito de que desenho é essa sombra.",
  "Troca de fita! Agora são guerreiros, não monstrinhos.",
  "Zapeando! Quem mexeu no controle?",
  "Nova emissora no ar. Atenção à silhueta.",
  "Ei, isso não tem cara de Pokémon, hein. Ou tem?",
  "Crossover valendo. O Ash e o Goku tão trocando figurinha.",
  "Olha a curva! Mudou de universo."
],

/* ---------- combos ---------- */
rlCombo3: [
  "Três seguidos! Combo x2. Agora começa a ficar sério.",
  "Combo x2! Olha só quem acordou.",
  "Três em sequência! Os pontos agora valem o dobro. Não estraga.",
  "x2! Tá pegando fogo. Tipo Charmander.",
  "Três na sequência! Multiplicador ligado.",
  "Combo x2! Não me decepciona agora que eu comecei a acreditar.",
  "Três acertos! O Bugado tá começando a torcer por você. Um pouquinho.",
  "Sequência de três! Isso já é um Pokémon de primeiro estágio de combo.",
  "Três seguidos! Dobrou a pontuação. E minha ansiedade.",
  "x2 ativado! Não pisca."
],
rlCombo6: [
  "SEIS SEGUIDOS! Combo x3! Evoluiu o combo!",
  "x3! O combo evoluiu tipo Charmeleon. Tá ficando malcriado.",
  "Seis em sequência! Tá jogando com o cérebro de Alakazam.",
  "Combo x3! Os pontos agora valem o triplo. Eu tô suando.",
  "Seis! Tu tá num ritmo que nem o Ash chegou nas finais.",
  "x3! Alguém para esse treinador!",
  "Sequência de seis! Se continuar, eu vou ter que te respeitar de verdade.",
  "Seis na fila! O relógio tá com medo de você.",
  "x3! Tá voando baixo, tipo um Pidgeot.",
  "Combo x3! Isso aqui já vira print pro grupo."
],
rlCombo10: [
  "DEZ SEGUIDOS! Combo x4! O Professor Carvalho te daria uma Pokédex nova.",
  "Combo x4! Isso é nível Mestre Pokémon. Eu tô sem palavras. Quase.",
  "Dez em sequência! Tu virou o próprio Relâmpago.",
  "x4! Não tem mais multiplicador, você zerou a vida.",
  "DEZ! Eu vou chamar a Liga Pokémon pra te ver jogar.",
  "Combo máximo! x4! Teu cérebro é uma Pokédex com Wi-Fi.",
  "Dez seguidos! Isso é Super Saiyajin de trivia.",
  "x4! Até o Mewtwo ficou impressionado. Ele não se impressiona com nada.",
  "Dez! Tô com medo de você. Respeitosamente.",
  "COMBO X4! Fliperama inteiro parou pra assistir."
],
rlComboMais: [
  "{n} seguidos! Tu não erra mais não?",
  "Combo de {n}! Isso já é abuso.",
  "{n} em sequência! Eu vou precisar de um novo nível de elogio.",
  "{n} acertos seguidos. Me dá teu autógrafo.",
  "{n}! O combo tá maior que a cauda do Onix.",
  "Sequência de {n}. Tu tá jogando ou tá lendo a resposta?",
  "{n} sem errar! Vai pro Hall da Fama.",
  "{n} seguidos! A Enfermeira Joy já tá preparando teu quarto de campeão.",
  "Combo {n}! Eu queria reclamar de algo e não consigo.",
  "{n}! Nem o Goku acerta tanto, e ele é o protagonista."
],
rlComboQuebrou: [
  "Ih, quebrou o combo de {n}! Tava tão bonito…",
  "Combo de {n} pro chão. Tipo o Yamcha na cratera.",
  "Adeus, combo de {n}. Descanse em paz.",
  "Perdeu uma sequência de {n}! Dói até em mim.",
  "{n} seguidos jogados fora. Uma tragédia em quatro botões.",
  "O combo de {n} desmaiou. Leva pro Centro Pokémon.",
  "Sequência de {n} quebrada! Começa de novo, guerreiro.",
  "Tava em {n} e errou agora? O drama. O suspense. A queda.",
  "Combo de {n} destruído. Eu ouvi um vidro quebrando.",
  "Nãããão! Um combo de {n}! Eu tava até torcendo…",
  "Lá se vai o combo de {n}. Foi bonito enquanto durou.",
  "Quebrou {n} seguidos. O Bugado tira o chapéu. Pra chorar dentro dele.",
  "O combo de {n} usou Autodestruição.",
  "{n} acertos e aí… isso. A vida é assim.",
  "Combo zerado. Mas eu vi os {n}, e ninguém tira isso de você."
],

/* ---------- tempo ---------- */
rlUltimos10: [
  "DEZ SEGUNDOS! Acelera!",
  "Últimos dez! Clica, clica, clica!",
  "Dez segundos! Agora é tudo ou nada.",
  "O relógio tá ficando vermelho. Tipo o Charizard bravo.",
  "Reta final! Dez segundos!",
  "Dez segundos! Não pensa, sente!",
  "Tá acabando! Chuta com fé!",
  "Dez! Nove! Eu não vou contar tudo, joga!",
  "Últimos segundos! Hora do desespero elegante.",
  "Dez segundos restantes! Isso é mais tenso que final de temporada.",
  "Vermelho no relógio! Modo turbo ativado.",
  "Corre, treinador! O tempo tá fugindo igual Abra.",
  "Acaba já já! Vai que dá pra mais uns pontos!",
  "Dez segundos! O Relâmpago de verdade é agora.",
  "Contagem final! Nada de hesitar."
],
rlTempo: [
  "TEMPO! Larga o controle.",
  "Acabou! O relógio venceu. Como sempre.",
  "Fim! O cronômetro zerou e ninguém escapou.",
  "Acabou o tempo! Solta o botão que eu tô vendo.",
  "Tempo esgotado! Hora da verdade.",
  "PIIII! Fim de jogo. Vamos ver o estrago.",
  "Acabou! Sessenta segundos passam rápido, né?",
  "Tempo! Nem deu pra respirar.",
  "Zerou! Vamos ao placar.",
  "Fim do Relâmpago! A tempestade passou.",
  "O tempo acabou, mas as lembranças ficam. E os erros também.",
  "Acabou! O Snorlax até acordou pra ver o resultado.",
  "Tempo! Agora eu vou falar tudo que eu segurei.",
  "Fim! A última silhueta ficou sem resposta, coitada.",
  "Buzina final! Bora contar os pontos."
],
rlSemInternet: [
  "As imagens não tão carregando. Acho que a internet foi pro Monte Prateado.",
  "Não consegui buscar as silhuetas. Confere a internet e tenta de novo.",
  "Sem imagem, sem jogo. A conexão fugiu igual Abra."
],
rlCarregando: [
  "Carregando a próxima sombra… a internet tá de Slowpoke.",
  "Pera, a silhueta tá vindo de Kanto a pé.",
  "Carregando… o relógio tá pausado, relaxa.",
  "A imagem tá atrasada. Eu pausei o tempo, sou bonzinho.",
  "Um segundinho, a sombra tá se arrumando.",
  "A internet usou Descanso. Já volta."
],

/* ---------- fim de rodada ---------- */
rlRecorde: [
  "NOVO RECORDE! {pts} pontos! Chama a imprensa!",
  "Recorde quebrado! {pts} pontos. Eu vou emoldurar isso.",
  "{pts} pontos! Teu melhor de sempre. O Bugado tá orgulhoso. Sério.",
  "RECORDE! Tu superou a ti mesmo. Isso é enredo de anime.",
  "Novo recorde de {pts}! Pode mandar no grupo, eu deixo.",
  "Recorde! {pts} pontos! Tu evoluiu na minha frente.",
  "Olha só, recorde! {pts}. Nem sei mais o que falar mal.",
  "Nova marca: {pts} pontos! A Liga Pokémon já tá sabendo.",
  "RECORDE! O teu eu do passado tá chorando de inveja.",
  "{pts} pontos, novo recorde! Isso merecia uma Master Ball.",
  "Superou o recorde! Agora é tua obrigação superar de novo.",
  "Recorde pessoal! {pts} pontos. Eu vi, eu testemunho.",
  "Novo recorde! Toca a musiquinha de evolução!",
  "{pts}! Recorde! Hoje é feriado no fliperama.",
  "Recorde batido! Se fosse Dragon Ball, teu cabelo tinha ficado loiro."
],
rlFim0: [
  "{pts} pontos. Bom… a silhueta tava escura mesmo.",
  "{pts}. Todo mestre já foi um iniciante. Um bem iniciante.",
  "{pts} pontos. Tá tudo bem, eu não vou contar pra ninguém. Só pro grupo.",
  "Deu {pts}. Tu jogou de olho fechado pra me testar, né?",
  "{pts} pontos. Recomendo o modo Gen 1 e um café.",
  "{pts}. Não é derrota, é aquecimento. Aquecimento longo.",
  "{pts} pontinhos. O Magikarp também começou assim.",
  "{pts}. Eu acredito em você. Não muito, mas acredito.",
  "Fez {pts}. Próxima rodada vai melhor. Estatisticamente, tem que ir.",
  "{pts} pontos. A Pokédex pediu pra você reler o manual."
],
rlFim1: [
  "{pts} pontos! Não é ruim. Também não é bom. É honesto.",
  "{pts}. Um treinador de Rota 3. Tem futuro.",
  "Fez {pts}! Tá pegando o jeito.",
  "{pts} pontos. Dá pra mostrar pra mãe. Ela vai elogiar de qualquer jeito.",
  "{pts}! Já dá pra passar do primeiro ginásio.",
  "{pts} pontos. O Brock te daria a Insígnia da Rocha. Por pena.",
  "{pts}. Nível intermediário de fã. Mais uma e você sobe.",
  "Fez {pts}. Tá esquentando. Tipo Charmander num dia frio.",
  "{pts} pontos! Tô quase dizendo que foi bom.",
  "{pts}! Médio com potencial. Eu anotei."
],
rlFim2: [
  "{pts} pontos! Agora sim, treinador!",
  "{pts}! Isso é placar de quem assistiu o anime inteiro.",
  "Fez {pts}. Bonito! Até eu fiquei feliz.",
  "{pts} pontos! Tá jogando no nível de Líder de Ginásio.",
  "{pts}! O Professor Carvalho te chamaria pelo nome certo.",
  "Mandou {pts}! Isso já dá inveja em alguém.",
  "{pts} pontos. Respeitável. Eu tô respeitando.",
  "{pts}! Esse placar merece um print.",
  "Fez {pts} e eu não tenho nada pra reclamar. Que sensação estranha.",
  "{pts}! Tu tá virando referência no fliperama."
],
rlFim3: [
  "{pts} PONTOS! Nível Elite Four!",
  "{pts}! Tu é uma Pokédex ambulante.",
  "Fez {pts}. Eu tô sem palavras. Que é raro, porque eu sou só palavras.",
  "{pts} pontos! Isso é nível Mestre Pokémon.",
  "{pts}! Quem te ensinou? Foi eu? Foi eu, né.",
  "{pts}! Relâmpago de verdade. O Raichu aprova.",
  "Olha esse {pts}! Chama o Goku que ele quer lutar com você.",
  "{pts} pontos! Tu decorou a Pokédex ou foi mordido por um Porygon?",
  "{pts}. Absurdo. Se fosse competição, tu tava na final.",
  "{pts}! Guardei esse número no meu coração de pixel."
],
rlFim4: [
  "{pts} PONTOS?! Isso é hack? Me responde!",
  "{pts}! Você não é um treinador, você é uma lenda urbana.",
  "{pts}! O fliperama inteiro travou de emoção.",
  "Fez {pts}. Eu vou ter que atualizar meu sistema pra entender isso.",
  "{pts} pontos! Nível Zeno Sama de reconhecimento de sombra.",
  "{pts}! Nem o Professor Carvalho, nem o Carvalho do Carvalho.",
  "{pts}! Isso aqui não é jogo pra você, é aquecimento.",
  "{pts} pontos. Eu me curvo. Metaforicamente, não tenho coluna.",
  "{pts}! Registra em cartório.",
  "{pts}! Tu nasceu com uma Pokédex no lugar do cérebro."
],
rlErrosLista: [
  "Olha a lista de quem te enganou. O {nome} tá rindo.",
  "Errou {n}. Estuda a lista aí embaixo, especialmente o {nome}.",
  "Tá vendo o {nome} na lista? Olha bem. Da próxima vez você não erra.",
  "Esses aí te pegaram. Decora as carinhas, o {nome} principalmente.",
  "{n} erro(s). A lista é teu dever de casa. O {nome} é a pergunta bônus.",
  "Olha o {nome} na lista de quem escapou. Ele vai voltar.",
  "A lista de erros é tipo um álbum de figurinha ao contrário. Começa pelo {nome}.",
  "Quem te derrubou hoje: {nome} e companhia. Grava esses rostos.",
  "Aprende com o {nome}. Ele te humilhou, mas ele tem muito a ensinar.",
  "Eu marquei o {nome} com caneta vermelha. Estuda.",
  "{n} escaparam! Aparece a cara deles ali embaixo. Encara eles.",
  "O {nome} tá na lista porque você chamou ele de outra coisa. Pede desculpa."
],
rlSemErros: [
  "Zero erros! Nenhum Pokémon escapou. Assustador.",
  "Nenhum erro na rodada! Tá jogando com cola? Só pergunto.",
  "Sem nenhum erro. Eu não tenho nem o que comentar, e isso me irrita.",
  "Perfeito! A lista de erros tá vazia. Igual meu estômago.",
  "Zero erros! O Professor Carvalho tá chorando de alegria.",
  "Rodada limpa! Nada pra estudar. Vai tomar um sorvete.",
  "Nenhum escapou. Tu é a Master Ball em forma de gente.",
  "Não errou nada. Vou ter que inventar um jeito de reclamar."
],
rlDiarioFeito: [
  "Desafio do Dia registrado: {pts} pontos! Compartilha e provoca a galera.",
  "Diário concluído! {pts} pontos oficiais. Amanhã tem outro.",
  "Tá no placar: {pts} pontos no desafio de hoje. Manda pro grupo.",
  "Feito! {pts} no diário. Agora é torcer pros teus amigos fazerem menos.",
  "Desafio do dia fechado com {pts}. A tentativa oficial é essa, sem choro.",
  "{pts} pontos no Desafio do Dia! Copia o resultado e espalha.",
  "Diário feito. {pts} pontos. Amanhã a sequência é outra, então nem adianta decorar.",
  "Registrado! {pts} pontos. Pode tentar de novo por diversão, mas o oficial é esse.",
  "{pts} no diário! Isso vai pra história. Pelo menos até amanhã.",
  "Desafio do Dia encerrado! Teu {pts} tá guardado a sete chaves."
],
rlDiarioJaFoi: [
  "Você já fez o desafio de hoje: {pts} pontos. Pode treinar, mas não vale.",
  "O diário de hoje já foi! {pts} oficiais. Quer jogar de novo só pela glória?",
  "Já jogou hoje. {pts} pontos gravados. Volta amanhã pra outra sequência.",
  "Oficial já tá no bolso: {pts} pontos. Agora é só treino.",
  "Diário concluído, treinador. Amanhã tem mais. Enquanto isso, os outros modos te esperam.",
  "Hoje já deu: {pts} pontos. Se quiser, joga o treino. Eu não conto pra ninguém.",
  "Tu já fez o de hoje! Tá tentando me enganar? Eu tenho memória de computador.",
  "O desafio de hoje tá fechado com {pts}. Compartilha antes que esqueça.",
  "Repeteco do diário? Pode, mas o oficial é o primeiro. Sempre.",
  "Tentativa oficial usada: {pts}. Tenta os outros modos que também valem XP."
],

/* ---------- menu / entre rodadas ---------- */
rlOi: [
  "Relâmpago! Sessenta segundos, uma silhueta, quatro nomes. Escolhe o modo e bora.",
  "Chegou! Aqui é rapidez. Silhueta aparece, você aperta. Simples. Difícil.",
  "Bem-vindo ao Relâmpago. Quem é esse Pokémon? Descobre em menos de um segundo.",
  "Voltou pro Relâmpago! O cronômetro tava com saudade. Eu não. Mentira, tava.",
  "Oi! Escolhe um modo. Se for tua primeira vez, vai de Gen 1.",
  "O fundo amarelo girando significa uma coisa: hora do quiz!",
  "Relâmpago ligado! Um minuto de pura adrenalina de sombra.",
  "Ó quem apareceu. Veio bater teu recorde ou passar vergonha?",
  "Aqui não tem tempo pra pensar. Tem tempo pra sentir. E clicar.",
  "Pronto pra ser testado? Silhuetas de Pokémon e Dragon Ball te esperando.",
  "Relâmpago! O jogo que faz você gritar nomes pro monitor. Os vizinhos adoram.",
  "Oi, treinador. O desafio do dia tá aí embaixo, se quiser provar alguma coisa."
],
rlModo: [
  "Modo {modo} selecionado. Boa escolha. Ou não. Vamos ver.",
  "{modo}! Aperta o botão grande quando tiver coragem.",
  "Trocou pra {modo}. Tá fugindo do modo anterior, né?",
  "{modo} na mira. Recorde aqui: tá escrito ali.",
  "Ok, {modo}. Eu já tô preparando as piadas.",
  "Modo {modo}. Sessenta segundos. Nenhuma desculpa.",
  "{modo}? Tu é corajoso ou distraído?",
  "Escolheu {modo}. O Bugado aprova. Hoje.",
  "Beleza, {modo}. Quando tiver pronto, é só apertar.",
  "{modo} ativado. Estica os dedos."
],
rlSairConfirma: [
  "Vai desistir? Toca de novo pra confirmar. Mas pensa nos pontos.",
  "Sair agora? Clica de novo se for sério.",
  "Tem certeza? O Pikachu não sai da Pokébola por nada. Você sai?",
  "Confirma a desistência? O relógio vai rir de você."
],
rlSair: [
  "Desistiu. Tudo bem, até o Ash já fugiu de batalha.",
  "Saiu no meio! O cronômetro ficou sozinho, coitado.",
  "Rodada encerrada antes da hora. Fugiu com sucesso!",
  "Abandonou! Aquele barulhinho de fuga dos jogos antigos tocou aqui.",
  "Fugiu! Mas eu anotei os pontos, viu? Tá tudo registrado.",
  "Parou no meio. O Snorlax também para no meio de tudo. Vocês se entendem."
]
};

/* ---------- cutucar o mascote nesta página ---------- */
L.cutucarRelampago = [
  "Ei! Eu não sou uma das opções! Não precisa me clicar.",
  "Cutucou o Bugado? Isso não conta como resposta.",
  "Tá me confundindo com uma silhueta? Eu sou azul, olha.",
  "Quem é esse Pokémon? Não sou Pokémon! Sou um bug com orelha.",
  "Ai! Isso tira três segundos meus também, sabia?",
  "Me cutucar não aumenta o combo. Eu já testei.",
  "Eu sou tipo Fantasma. Teu dedo passou direto. Quer dizer, quase.",
  "Se eu virar silhueta, você acerta? Aposto que não.",
  "Não me clica, clica nos botões. Os de baixo. Com nome escrito.",
  "Boing! Pronto, agora volta pro jogo.",
  "O relógio não para porque você tá me cutucando. Ou para? Não para.",
  "Eu sou o árbitro, não a bola.",
  "Toca aqui de novo e eu escondo a próxima silhueta. Mentira, não tenho esse poder.",
  "Se eu tivesse uma Pokébola, eu me capturava pra fugir de você.",
  "Tá procurando o botão de dica? Não tem. Relâmpago é na raça.",
  "Eu tenho cara de Raichu? Não. Então para.",
  "Cutucada crítica! Não foi muito efetiva.",
  "Me cutuca que eu grito o nome errado de propósito.",
  "Já te falei que eu sou mascote, não boneco antiestresse?",
  "Eu posso ser um gato fantasma, mas eu sinto tudo. Principalmente isso.",
  "Clicou em mim com a velocidade que devia clicar nas respostas.",
  "Cutucou! Perdeu o combo. Brincadeira. Mas imagina.",
  "Olha a silhueta, não eu. Eu sou lindo, mas não sou a pergunta.",
  "Eu sou o Bugado, e não, eu não evoluo com Pedra Trovão.",
  "Vai que eu sou o Pokémon secreto? Não sou. Mas vai que.",
  "Cada cutucada é uma sombra que passa sem resposta.",
  "Se você me cutucar dez vezes, aparece o MissingNo. Não testa.",
  "Eu não brilho no escuro, não adianta tentar acender.",
  "Tá procurando atenção? Achou. Agora joga.",
  "Ei, eu sou um gato-fantasma-bug, não um Pikachu de pelúcia.",
  "Isso foi um Tackle? Eu resisti.",
  "Cutucou de novo! Minha barra de HP tá amarela.",
  "Sabe o que é mais rápido que teu dedo? Nada. Usa isso nas respostas.",
  "Toca em mim de novo e eu começo a falar do Yamcha.",
  "Me clica que eu dou um spoiler: o próximo é… esqueci.",
  "Eu sei quem é o próximo. Não vou contar. Nem sob cutucada.",
  "Relâmpago é o jogo. Não relampeia em mim.",
  "Eu vou reclamar com o Kaio do Norte. Ele ouve tudo.",
  "Pode me cutucar, eu sou tipo Normal com Fantasma. Nada me acerta.",
  "Eu também quero jogar, mas eu não tenho dedo. Nem mão. Nem paciência.",
  "Opa, calma. Fica esse clique pra hora do combo."
];

/* ---------- temáticas pro 'aleatorio' e 'parado' gerais ---------- */
const ALEATORIO = [
  "Curiosidade: o Rhydon foi o primeiro Pokémon a ser desenhado. Eu fui o primeiro bug. Somos pioneiros.",
  "Às vezes eu penso na silhueta do Ditto. É só um borrão. Ele deve ter uma crise de identidade.",
  "Se o Pikachu anda fora da Pokébola, por que o Ash carrega cinco Pokébolas vazias?",
  "Teoria: o Mr. Mime faz faxina porque ninguém mais quer ele no time.",
  "O Goku come mais que um Snorlax. E ainda luta. Metabolismo Saiyajin é outra coisa.",
  "Já reparou que o Kuririn não tem nariz? Eu também não tenho. Clube dos sem-nariz.",
  "Quem é esse Pokémon? É uma pergunta filosófica. Quem é você, afinal?",
  "Tava pensando: o Psyduck tem dor de cabeça ou ele é a dor de cabeça?",
  "Se eu fosse um Pokémon, seria tipo Bug/Fantasma. Existe? Existe. Sou eu.",
  "O Snorlax pesa 460 kg. Meu ego pesa mais.",
  "Eu gosto do fundo amarelo girando. Me dá uma paz. E uma tontura.",
  "Por que o Team Rocket sempre decola? Fazem parte do programa espacial?",
  "O Vegeta falou 'Kakarotto' umas 4 mil vezes no anime. Eu contei. Mentira, chutei.",
  "A Enfermeira Joy é igual em todas as cidades. Isso me assusta até hoje.",
  "O Magikarp é o único peixe que eu respeito. Por teimosia.",
  "Curiosidade: o Clefairy quase foi o mascote no lugar do Pikachu. Imagina o chaveiro.",
  "Se o Freeza tivesse ido pra terapia, a saga de Namekusei durava três episódios.",
  "A Pokédex do Ash falava com voz de robô. Eu falo com voz de sarcasmo.",
  "Às vezes eu ensaio silhuetas no espelho. A minha é um gato com antena.",
  "Saiyajin fica loiro quando se irrita. Eu fico glitchado.",
  "Existe um Pokémon que é um lustre, o Chandelure. E um que é sorvete. Criatividade tem limite? Não.",
  "O Piccolo é verde, bebe só água e é o pai mais responsável do anime. Coincidência?",
  "O Abra dorme 18 horas por dia. É meu Pokémon de estimação espiritual.",
  "O Mestre Kame tem 300 anos e ainda treina. Eu tenho 3 e já tô cansado.",
  "O Onix é de pedra e mede 9 metros. O Steelix é o Onix que foi pra academia.",
  "Se o Ditto se transformar em mim, ele vira um bug de um bug. Recursão.",
  "Minha fusão preferida? Eu com um pastel. Chamaria Bugastel.",
  "O Slowpoke leva 5 segundos pra sentir dor. Eu levo 5 segundos pra falar mal de você.",
  "Por que a Misty nunca pegou a bicicleta de volta? Esse é o verdadeiro mistério de Kanto.",
  "Sabia que o Yamcha foi o primeiro vilão do Goku? Depois virou alívio cômico. Carreira difícil.",
  "Um dia eu vou fazer o 'Quem é esse Bugado?'. Resposta: sempre eu.",
  "Existe Pokémon que é uma chave, o Klefki. Pena que não abre a porta do sucesso.",
  "O Shenlong realiza qualquer desejo e o Oolong pediu uma calcinha. Humanidade, né?",
  "O Charizard não é tipo Dragão. Isso até hoje me deixa acordado à noite.",
  "Se o Pikachu dá choque, por que ninguém usa ele pra carregar o celular?",
  "O Majin Boo transforma gente em doce. Eu transformo teu tempo livre em derrota.",
  "Diz a lenda que quem acerta 30 silhuetas seguidas ouve a musiquinha da Pokédex tocando sozinha.",
  "O Gengar é a sombra do Clefairy, segundo a teoria. Eu sou a sombra de um erro de digitação.",
  "Já pensou se o Goku encontrasse o Ash? Os dois iam se perder no caminho.",
  "Silhueta preta em fundo amarelo é o maior design da história da TV. Não aceito discussão."
];
const PARADO = [
  "A silhueta tá te esperando. Ela não tem pressa. O relógio tem.",
  "Tá escolhendo o modo ou fazendo meditação? Aperta o botão grandão.",
  "O fundo amarelo já girou umas duzentas vezes. Joga uma aí.",
  "Parado desse jeito você parece uma silhueta. Quem é esse jogador?",
  "Sessenta segundos. É menos do que você já ficou parado aí.",
  "O Pikachu tá batendo o pé esperando você começar.",
  "Se não vai jogar, pelo menos cutuca eu. Não, pera, não cutuca.",
  "O desafio do dia não se joga sozinho. Eu já tentei.",
  "O Snorlax aprova essa pausa. Eu não.",
  "Tô ouvindo o Slowpoke dizer que você tá lento. E ele é o Slowpoke.",
  "Qualquer botão. Qualquer um. Eu só quero ver silhuetas.",
  "Tá esperando o Professor Carvalho te chamar pelo nome? Ele esqueceu.",
  "O cronômetro tá dormindo. Acorda ele.",
  "Se ficar mais um minuto parado, isso já era uma rodada inteira.",
  "Oi? Tem alguém aí? Quem é esse treinador sumido?"
];

Object.keys(ESP).forEach(k => { L['rl@' + k] = ESP[k]; });
Bugado.addLines(L);
Bugado.extendLines({ aleatorio: ALEATORIO, parado: PARADO });
window.RL_ESP = ESP;
})();
