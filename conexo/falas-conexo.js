/* Conexo — falas do Bugado específicas do jogo.
   Variáveis: {a} {b} = palavras da jogada · {grupo} = tema · {n} = número · {vidas} */
(function(){
const L = {};

L.cxEmbaralhar = [
  'Embaralhou. As palavras mudaram de lugar. Teu cérebro continua no mesmo.',
  'Isso, sacode que a resposta cai. Funciona com máquina de refri, né?',
  'Embaralhar não é estratégia, é fé.',
  'Mexe mexe mexe... e aí, apareceu alguma coisa? Nem pra mim.',
  'Clássico: quando não sabe, embaralha. Eu respeito.',
  'Nova arrumação, mesma confusão.',
  'Às vezes ver de outro ângulo ajuda mesmo. Às vezes.',
  'Chacoalhou o tabuleiro igual controle remoto sem pilha.',
  'Tá procurando padrão ou só gostou da animação?',
  'Embaralhou! Agora finge que tá tendo uma epifania.',
  'Pronto, misturei. Se não achar agora, a culpa é tua mesmo.',
  'Tipo reiniciar o roteador: não resolve nada mas dá uma paz.',
  'Dica grátis: embaralhar e depois olhar de verdade funciona melhor.',
  'Tô vendo o esforço. Tô vendo pouco resultado, mas o esforço tá lá.',
  'Palavras novas nos mesmos lugares de sempre? Não, ao contrário.',
  'A gente embaralha as palavras, a vida embaralha a gente.',
  'Embaralhar é o "vou pensar no banho" do Conexo.',
  'Olha só, agora {a} tá do lado de {b}. Isso te diz algo? Pra mim não.',
  'Troquei tudo de lugar. Igual tua mãe arrumando teu quarto.',
  'Bora, olho fresco. Mesmo que o olho seja o mesmo.',
  'É isso aí, dá uma chacoalhada que o cérebro acorda.',
  'Tá parecendo DJ, só que mixando palavra.',
  'Nova rodada de "encontre o óbvio que tava na tua cara".',
  'Embaralhou com convicção. Gostei da energia.',
  'Às vezes a resposta tava do lado e você não viu. Agora tá longe. Parabéns.',
  'Sacudiu. Nenhuma palavra caiu. Bom sinal.',
  'Vai que agora o {a} te dá uma ideia, né.',
  'Isso não é roleta, mas tá sendo tratado como uma.',
  'Mistura aí. Eu fico aqui torcendo em silêncio. Mentira, eu falo.',
  'Posições novas. Mesmos 4 grupos escondidos te olhando.'
];

L.cxEmbaralharMuito = [
  'Você já embaralhou {n} vezes. As palavras tão tontas.',
  '{n} embaralhadas. Tá tentando invocar alguma coisa?',
  'Para. As palavras tão enjoando. Eu tô enjoando.',
  'Se embaralhar desse ponto, eu embaralhava junto. Mas não dá.',
  '{n} vezes! Nem o baralho do truco do teu tio sofre tanto.',
  'Tá esperando as palavras formarem os grupos sozinhas? Elas não vão.',
  'Isso já virou hobby. Embaralhar Simulator 2026.',
  'Olha, sério, as palavras são as mesmas. Juro. Conferi.',
  'Mais uma embaralhada e eu cobro taxa.',
  'Você embaralha igual quem abre a geladeira de 5 em 5 minutos esperando comida nova.',
  'O botão de embaralhar tá pedindo férias.',
  '{n} embaralhadas e zero epifanias. Estatística cruel.',
  'Já decorei todas as posições possíveis. Você não.',
  'Tá tratando o botão igual elevador: aperta várias vezes que vem mais rápido.',
  'Ok, vamos fazer um acordo: você pensa, eu embaralho de graça depois.',
  'Eu sou um fantasma de gato e até eu fiquei tonto.'
];

L.cxDesmarcar = [
  'Desmarcou tudo. Arrependimento é humano.',
  'Voltou atrás. Sábio. Ou medroso. Os dois?',
  'Limpou a seleção. Página em branco, igual tua prova de física.',
  'Desistiu dessa ideia? Ela era ruim mesmo, eu acho.',
  'Tudo desmarcado. Zero compromisso, igual crush.',
  'Apagou tudo e fingiu que não aconteceu. Clássico.',
  'Desmarcar é o Ctrl+Z da vida.',
  'Tava tão confiante 3 segundos atrás...',
  'Bom, pelo menos não gastou vida com aquilo.',
  'Faz bem. Aquela combinação tava com cara de erro.',
  'Recomeçar faz parte. Recomeçar 8 vezes também.',
  'Desmarcou. Tô sentindo uma indecisão no ar.',
  'Ninguém viu. Só eu. E eu conto pra todo mundo.',
  'Isso, respira, olha de novo.',
  'O importante é que você não enviou. Às vezes.'
];

L.cxIndeciso = [
  'Marca, desmarca, marca, desmarca... tá fazendo crochê?',
  'Você já clicou em {n} quadradinhos e não enviou nada. Tá tudo bem aí?',
  'Esse vai-e-vem parece eu escolhendo o que comer no iFood.',
  'Indecisão nível: cardápio de rodízio.',
  'Clica com fé. Ou pelo menos com alguma ideia.',
  'Tá testando se os quadradinhos são macios?',
  'Marcou e desmarcou o {a} umas três vezes. Ele tá se sentindo usado.',
  'Isso é Conexo, não é bem-me-quer mal-me-quer.',
  'Tá parecendo eu escolhendo foto de perfil.',
  'Seleciona, pensa, envia. Nessa ordem. Não precisa ser em loop.',
  'Os quadradinhos já tão com LER de tanto clique.',
  'Tá com medo de errar? Normal. Você vai errar de qualquer jeito, então vai.',
  'Seu dedo tá mais confiante que seu cérebro.',
  'Uma hora você vai ter que escolher. Tipo na vida.',
  'Tô vendo teu cérebro fazendo barulho de HD velho.',
  'Hesitação detectada. Sistema Bugado em alerta.',
  'Coragem! O botão Enviar não morde. Eu mordo, ele não.',
  'Você tá no modo "e se...". Perigoso.'
];

L.cxPronto = [
  'Quatro marcados. Vai ou não vai?',
  'Olha, eu não vou falar nada. Mas tô olhando.',
  'Tem certeza? Não tô dizendo que tá errado. Nem certo.',
  'Hmm. Interessante escolha. Manda aí.',
  'Envia logo, meu coração de fantasma não aguenta suspense.',
  'Tá com cara de quem sabe o que tá fazendo. Tá?',
  '{a} e {b} juntos... tô curioso pra ver no que dá.',
  'Aperta Enviar. Seja o que Deus quiser.',
  'Tô segurando a pipoca aqui.',
  'Quatro! Agora é a hora da verdade.',
  'Confia no teu instinto. Ou no meu silêncio.',
  'Se isso der certo eu vou fingir que sabia.',
  'Tá bonito o grupinho. Mas bonito não é certo.',
  'Vai, vai, vai! Não, espera. Vai!'
];

L.cxInicioDiario = [
  'Conexo de hoje! Mesmo tabuleiro pra todo mundo. Não passa vergonha.',
  'O diário chegou. 16 palavras, 4 grupos, 1 cérebro. Boa sorte pro cérebro.',
  'Todo mundo tá jogando esse mesmo. Se você errar, alguém acertou. Pensa nisso.',
  'Bom dia, boa tarde ou boa noite. O puzzle não liga, ele só quer te humilhar.',
  'O diário de hoje foi feito com carinho. E com maldade. Mais maldade.',
  'Quatro grupos. Tem uma pegadinha roxa lá no meio. Eu sei qual é. Você não.',
  'Respira fundo. Olha as palavras. Agora desconfia de todas.',
  'Chegou a hora do teu teste diário de QI. Brincadeira. Mais ou menos.',
  'Tem palavra aí que parece de dois grupos. Não cai. Ou cai, que eu dou risada.',
  'Mesmo puzzle pro Brasil inteiro. A pressão é real.',
  'Bora? Quatro vidas. Gasta com moderação.',
  'Dica de mascote: começa pelo mais óbvio. Ele quase nunca é o que parece.',
  'Olha só quem voltou pro diário. Saudades de errar?',
  'Hoje tem cada palavra... quero ver.',
  'Diário carregado. Teu orgulho também, espero.'
];

L.cxInicioInfinito = [
  'Modo Infinito! Um puzzle novo, porque você é viciado.',
  'Mais um? Ninguém te segura. Nem teu chefe, pelo visto.',
  'Novo tabuleiro sorteado. Esse aqui eu gosto. Tem pegadinha boa.',
  'Infinito é o nome do modo e do tempo que você vai passar aqui.',
  'Puzzle fresquinho. Saiu do forno agora. Cuidado que queima.',
  'Esse aí você nunca viu. Eu já. Umas mil vezes.',
  'Bora de mais um. O XP não se ganha sozinho.',
  'Sorteei esse com carinho. Mentira, foi aleatório.',
  'Novo puzzle! Tuas estatísticas tão torcendo por você.',
  'Olha que tabuleiro bonito. Pena que vai te fazer sofrer.',
  'Próxima fase! Não tem chefão, mas tem um grupo roxo.',
  'Vamo que vamo. Hoje ninguém dorme.',
  'Mais um pra conta. Esse aqui cheira a pegadinha.',
  'Infinito ativado. Tua vida social desativada.'
];

L.cxDiarioFeito = [
  'O diário de hoje já foi. Volta amanhã ou vai pro Infinito.',
  'Você já fez o de hoje! Quer reviver o trauma? Tem o Infinito.',
  'Diário concluído. Não adianta recarregar a página, eu tô vendo.',
  'Já jogou hoje. Amanhã tem outro. Hoje tem Infinito à vontade.',
  'O diário é um por dia. Tipo pão de queijo da vó: tem hora.',
  'Tá tentando jogar o diário de novo? Espertinho. Não rola.',
  'Missão diária cumprida. Agora é só farmar XP no Infinito.',
  'Esse tabuleiro aí já era. O de amanhã tá sendo preparado com crueldade.',
  'Hoje já deu. Mas o Infinito nunca fecha. Tipo padaria 24h.',
  'Diário feito. Tuas estatísticas agradecem. Ou choram, depende.',
  'Voltou pra olhar o que já fez? Nostalgia de 5 minutos atrás?',
  'O diário acabou, mas a vontade de jogar não, né? Te conheço.'
];

Bugado.addLines(L); window.CX_ALL = Object.assign(window.CX_ALL || {}, L);
})();

(function(){
const L = {};

L.cxAcerto1 = [
  'Achou o grupo amarelo. O fácil. Parabéns pelo básico.',
  '<b>{grupo}</b>. Amarelo. Até eu achava, e eu sou um bug.',
  'Amarelinho! O aquecimento tá feito. Agora vem o sofrimento.',
  'Esse era o fácil, hein. Não fica se achando.',
  'Amarelo na conta. Nível: acertar que água é molhada.',
  'Boa! Começou pelo raso. Sensato.',
  'O amarelo é tipo tutorial do jogo. Passou do tutorial, parabéns.',
  '<b>{grupo}</b>! Esse tava gritando, né?',
  'Grupo amarelo: resolvido. Dignidade: preservada. Por enquanto.',
  'Isso! O mais óbvio. Agora os outros vão ficar mais fáceis. Ou não.',
  'Acertou o amarelo. Tua mãe ficaria orgulhosa. Moderadamente.',
  'Fácil, fácil. Quero ver o roxo.',
  'Amarelo tá aí. É o arroz do prato, sem ele não tem refeição.',
  'Viu? Não doeu. O próximo dói.',
  'Esse até meu avô fantasma acertava.',
  'Achou o fácil. Tipo achar o controle no sofá: tava ali o tempo todo.',
  'Amarelo! Base sólida. Agora constrói o prédio.',
  'Muito bem! Achou o grupo que pedia pra ser achado.',
  'Esse amarelo foi mais fácil que senha 123456.',
  'Primeiro degrau da escada. Faltam os que quebram.'
];

L.cxAcerto2 = [
  'Verde! Tá esquentando. Eu tô levemente impressionado.',
  '<b>{grupo}</b>. Esse já exigia um neurônio a mais. Você tinha.',
  'Grupo verde na conta! Médio, mas médio bem feito.',
  'Verdinho! Tipo semáforo: pode seguir.',
  'Esse aí tinha um peguinha leve. Você não caiu. Bom.',
  'Acertou o verde. Tá jogando com a cabeça ou com o coração? Tanto faz, deu certo.',
  '<b>{grupo}</b>! Boa, boa. Não esperava. Mentira, esperava um pouco.',
  'Verde conquistado. Tá quase respeitável.',
  'Dois neurônios trabalhando juntos. Que lindo de ver.',
  'Verde na mesa! O jogo tá ficando sério.',
  'Mandou bem no médio. O difícil tá te esperando com um sorriso.',
  'Esse verde foi limpinho. Nem hesitou. Ou hesitou e eu não vi.',
  'Isso aí! Verde igual a grama que você devia tocar depois de jogar.',
  'Verdão! Não o time. O grupo.',
  'Grupo verde: check. Autoestima: subindo.',
  'Esse eu achei que ia te pegar. Não pegou. Que pena. Parabéns.',
  'Verde! Tipo luz de carregador cheio. Teu cérebro tá carregado hoje.',
  'Acertou <b>{grupo}</b>. Seguimos vivos.',
  'Médio resolvido. Tá subindo de patente.',
  'Olha só, sabe o que faz. Às vezes.'
];

L.cxAcerto3 = [
  'AZUL! Esse era difícil de verdade. Tô de boca aberta. Literalmente, eu sou um desenho.',
  '<b>{grupo}</b>! Isso aí já é nível cursinho.',
  'Grupo azul resolvido. Respeito. Um pouquinho.',
  'Achou o azul! Esse tinha armadilha, e você passou por cima dela.',
  'Azul na conta. Tá jogando como quem já jogou antes.',
  'Esse azul era chatinho. Você foi mais chato. Gostei.',
  '<b>{grupo}</b>... como você sabia disso? Tá pesquisando no Google? Tô de olho.',
  'Azulzinho! Faltou pouco pra eu dizer "uau". Faltou pouco.',
  'Grupo difícil caiu! O roxo tá tremendo agora.',
  'Achou o azul. Esse era o que eu apostava que ia te derrubar.',
  'Mandou muito! Azul resolvido com classe.',
  'Olha o nível subindo! Azul na mesa.',
  'Azul! Tipo tela azul do Windows, só que ao contrário: deu tudo certo.',
  'Isso foi bonito de ver. Quase chorei. Fantasma não chora, mas quase.',
  'Grupo azul, o penúltimo chefe. Derrotado.',
  'Aí sim! <b>{grupo}</b> não é pra qualquer um.',
  'Essa conexão aí era das boas. Você viu. Eu vi você ver.',
  'Azul feito! Teu cérebro hoje veio de terno e gravata.',
  'Tô começando a achar que você é bom nisso. Não conta pra ninguém.',
  'Azul caiu. Agora só falta a pegadinha. Ou já foi?'
];

L.cxAcerto4 = [
  'ROXO! A pegadinha! Como?! Explica pra mim devagar.',
  '<b>{grupo}</b>! Esse era o grupo maldoso. Você foi mais maldoso.',
  'Achou o roxo. Eu escondi tão bem... tô ofendido.',
  'O grupo roxo caiu! Isso é nível mestre do Conexo.',
  'Roxinho! O grupo que ninguém acha. Menos você, pelo visto.',
  'Pegadinha desmontada. Tô orgulhoso e levemente irritado.',
  '<b>{grupo}</b>... quem pensa nisso? Você, aparentemente.',
  'ROXO! Tua mente é estranha. Elogio.',
  'Esse era o chefão final e você deu hadouken nele.',
  'Não acredito que você viu isso. Eu mesmo quase não vi e fui eu que escondi.',
  'A pegadinha roxa se rendeu. Bandeira branca.',
  'Roxo resolvido! Gente, chama a imprensa.',
  'Isso aí é pensamento lateral, diagonal e em 3D.',
  'Achou o roxo! Agora pode colocar no currículo.',
  'O grupo mais difícil. Na conta. Absurdo.',
  'Tu é bruxo? O roxo era pra te derrubar!',
  'Pegadinha? Que pegadinha? Você passou por cima dela de patinete.',
  'Roxo! Esse grupo tinha vergonha de ser achado e você achou.',
  '<b>{grupo}</b>. Eu tenho que parar de subestimar você.',
  'ROXO NA CONTA! Isso merece um "kkkkk" de nervoso.',
  'Viu o que ninguém vê. Tipo eu, que sou um fantasma.',
  'Esse roxo foi escrito por alguém cruel. Você foi mais cruel com ele.'
];

L.cxRoxoPrimeiro = [
  'Espera. Você achou o ROXO primeiro?! Ninguém faz isso. Tá bem?',
  'Começou pela pegadinha? Isso é tipo comer a sobremesa antes. Admiro.',
  'Roxo de primeira! Os outros grupos tão com medo agora.',
  'Achou o mais difícil antes de todos. Ou você é gênio ou chutou lindo.',
  'Pegadinha logo de cara?! Tá jogando de trás pra frente e dando certo.',
  'Isso foi um speedrun de pegadinha. Recorde pessoal, certeza.',
  'Achou o roxo primeiro. Vou ter que caprichar mais nos próximos.',
  'Você simplesmente olhou pro caos e disse "ah, é isso". Assustador.',
  'Roxo primeiro! Isso é raro igual Pokémon shiny.',
  'Começou pelo boss final. Isso é coisa de quem joga Souls.',
  'Primeiro grupo e já é o roxo? Tô chamando o suporte técnico.',
  'Você pulou o tutorial e matou o chefão. Respeito máximo.'
];

L.cxCombo = [
  '{n} acertos seguidos! Tá numa sequência bonita.',
  'Combo de {n}! Nem respira que estraga.',
  'Sequência de {n} sem errar. Tô ficando nervoso.',
  'Combo! Tá voando baixo hoje.',
  '{n} seguidos! Alguém aqui tomou café.',
  'Tá em chamas! Metaforicamente. Não chama os bombeiros.',
  'Nem um erro nessa sequência. Suspeito. Muito suspeito.',
  '{n} no combo! Se fosse fliperama, já tava piscando a tela.',
  'Isso é jogo limpo. Limpinho. Tô emocionado.',
  'Sequência perfeita até agora. Não olha pra baixo.'
];

L.cxQuase = [
  'Um de distância. Tão perto que dá até raiva.',
  'Quase! Três tão certos. Um tá de penetra.',
  'Faltou UM. Um! Tipo pênalti na trave.',
  'Tem um intruso nesse grupinho. Descobre quem é.',
  'Quase, quase, quase. Mas quase não enche barriga.',
  'Três certos! O quarto tá lá rindo de você.',
  'Tão perto! Um desses aí não pertence. Tipo eu em festa.',
  'Chegou pertinho. Troca um e reza.',
  'Um impostor entre nós. Amogus.',
  'Três de quatro. Em prova seria nota boa. Aqui é vida perdida.',
  'Quase! {a} ou {b}? Um deles pode ser o culpado. Ou não. Boa sorte.',
  'Faltou pouco igual Wi-Fi de uma barrinha.',
  'Um fora. Agora é detetive: quem é o infiltrado?',
  'Três! O quarto era de outro grupo, tava só visitando.',
  'Tá esquentando! Tá quente! Tá... errado por um.',
  'Tipo acertar 3 números da Mega. Legal, mas não ganha nada.',
  'Um de distância. Se eu tivesse unha, tava roendo.',
  'Quase! A pegadinha deve estar envolvida nisso.',
  'Olha, três tão certos. Não vou dizer quais. Sou mau.',
  'Faltou um. Tipo faltar um real pro lanche.',
  'Quase! O grupo existe, só tá com um convidado errado.',
  'Esse erro doeu mais em mim do que em você. Mentira, doeu mais em você.',
  'Tem uma palavra aí jogando no time errado.',
  'Três de quatro! Tua intuição tá boa, só tá míope.',
  'Pertíssimo! Troca uma peça e tenta de novo.',
  'Um de distância. O universo tá testando tua paciência.',
  'Quase! Aquela palavra que parece de dois grupos te pegou, né?',
  'Três certas! Agora descobre qual é o cavalo de Troia.',
  'Uma palavra traíra no meio. Clássico.',
  'Chegou tão perto que eu senti o calor.'
];

L.cxErrou = [
  'Juntou <b>{a}</b> com <b>{b}</b>? Qual era a lógica? Tô curioso de verdade.',
  'Não. Só não.',
  'Errou. Mas errou com confiança, e isso eu respeito.',
  '<b>{a}</b> e <b>{b}</b> no mesmo grupo? Nem em sonho, amigo.',
  'Isso aí foi um chute. Um chute de olho fechado.',
  'Menos uma vida. Tá gastando igual salário no dia 5.',
  'Hmm, não. Mas foi criativo.',
  'Tinha dois certos, talvez. Talvez. O resto era poesia.',
  'Errou! Mas errar é humano. Você é humano? Tô começando a duvidar.',
  'Que viagem foi essa? <b>{a}</b> com <b>{b}</b>?',
  'Nope. Nada a ver. Zero conexões encontradas.',
  'Tentou, errou. Faz parte. Errar de novo não faz.',
  'Isso foi tão errado que o jogo tremeu.',
  'Não era isso. Era outra coisa. Uma coisa que você não viu.',
  'Olha, eu entendo o raciocínio. Mentira, não entendo.',
  'Vida perdida! Aquele coraçãozinho não volta mais.',
  'Qual era a teoria? <b>{a}</b> e <b>{b}</b> são o quê, primos?',
  'Errado. Mas o importante é que você se divertiu. Né? Né?',
  'Isso não existe. Nenhum grupo tem essa cara.',
  'Pensou, pensou e mandou isso? Pensa menos então.',
  'Tá misturando grupos igual quem mistura refri no copo.',
  'Nem perto, mas também não longe. Tipo, médio errado.',
  'Esse grupo só existe na tua cabeça. E que cabeça.',
  'Metade certo, talvez. A outra metade tava de férias.',
  'Tu viu uma conexão onde não tinha. Isso tem nome: teoria da conspiração.',
  'Opa! Errou. Respira e olha de novo.',
  'Essa foi pro VAR e o VAR disse não.',
  '<b>{a}</b> tá até ofendido de estar junto com <b>{b}</b>.',
  'Não era isso, meu consagrado.',
  'Às vezes o óbvio é óbvio. Às vezes é armadilha. Essa era armadilha.',
  'Uma vida a menos. O coração partiu. Literalmente, é um ícone.',
  'Errado, mas teve coragem. Coragem não pontua, mas conta pra mim.',
  'O jogo disse não. Eu digo não. Tua mãe diria não.',
  'Essa combinação foi tipo pizza de abacaxi: tem quem goste, mas tá errado.',
  'Hmm, essa não colou. Nem com cola quente.'
];

L.cxErrouFeio = [
  'Cada palavra de um grupo diferente. Tá fazendo de propósito?',
  'Zero em comum. Você achou o anti-grupo. Isso é quase um talento.',
  'Nenhuma dessas combina com nenhuma. Parabéns pela aleatoriedade perfeita.',
  'Isso foi um sorteio? Porque foi 100% sorteio.',
  'Quatro palavras, quatro grupos diferentes. Estatisticamente impressionante.',
  'Você escolheu tão errado que deu a volta e ficou interessante.',
  'Juntou <b>{a}</b>, <b>{b}</b> e mais duas que não têm NADA a ver. Obra de arte.',
  'Nem a pegadinha consegue ser tão confusa quanto essa jogada.',
  'Tá jogando Conexo ou Desconexo?',
  'Cada um de um canto. Parece grupo de trabalho da escola.',
  'Isso não é um grupo, é uma reunião de estranhos.',
  'Tu fechou os olhos e clicou, né? Pode falar, eu não conto.',
  'Olha... nem eu consigo inventar uma explicação pra isso.',
  'Parabéns, você encontrou a combinação mais errada possível.',
  'Isso foi um grito de socorro? Tá tudo bem?',
  'Quatro palavras que nunca deviam ter se conhecido.',
  'Nem as pegadinhas mais cruéis fariam isso com você. Você fez sozinho.',
  'Isso aí é o grupo "coisas que existem". Não conta.',
  'Uma de cada. Tipo salada de fruta, só que de erro.',
  'Olhei, olhei, e não achei nem uma conexão. Nem forçando.'
];

L.cxRepetido = [
  'Você já tentou EXATAMENTE isso. Achou que o jogo ia mudar de ideia?',
  'Mesma combinação de antes. Não vou tirar vida, mas vou tirar sarro.',
  'Déjà vu! Você já errou isso. Errar igual não conta, mas eu anotei.',
  'Tentou de novo a mesma coisa esperando resultado diferente. Einstein chama isso de... você sabe.',
  'Essa aí já foi. Continua errada. Ela não amadureceu.',
  'Repeteco! Não custa vida, mas custa dignidade.',
  'Cara, é a mesma. A MESMA. Eu tenho memória, sabia?',
  'Insistência é bonito em comercial motivacional. Aqui não.',
  'Tentou colar da tua própria prova errada.',
  'Isso já deu errado uma vez. Deu errado agora também. Mas foi de graça.',
  'Ah, reprise. Tipo Sessão da Tarde de erro.',
  'Esse erro de novo? Tô começando a achar que é carinho.',
  'Mesmo grupo, mesmo erro. Pelo menos é consistente.',
  'Eu não vou cobrar. Mas também não vou esquecer.',
  'Tentou a mesma coisa. Poupei tua vida por pena.',
  'Você já sabe que tá errado. Eu sei. O jogo sabe. Todo mundo sabe.',
  'Repetiu! Tá tentando vencer pelo cansaço? O jogo não cansa.',
  'Isso é a mesma tentativa com roupa nova. Não enganou ninguém.',
  'Loop detectado. Reiniciando mascote... não, peraí, eu tô bem.',
  'Mesma jogada. Tipo mandar a mesma mensagem esperando ela responder.'
];

Bugado.addLines(L); window.CX_ALL = Object.assign(window.CX_ALL || {}, L);
})();

(function(){
const L = {};

L.cxDuasVidas = [
  'Metade das vidas foi embora. Começa a pensar antes de clicar, que tal?',
  'Duas vidas. Tá na hora de jogar sério.',
  'Dois coraçõezinhos. Eu cuidaria deles se fosse você.',
  'Duas vidas restantes. Nada de chute agora, combinado?',
  'Tá na zona amarela. Não no grupo, na tensão.',
  'Metade do tanque. E o posto mais próximo é só amanhã.',
  'Duas vidas. Respira. Olha. Pensa. Aí clica.',
  'Tá ficando apertado. Igual calça depois do Natal.',
  'Dois erros já. Mais dois e eu canto a música triste.',
  'Duas vidas é o suficiente. Se você usar a cabeça. Usa a cabeça.',
  'Olha o nível de risco subindo. Gosto de ver.',
  'Tu tá gastando vida igual bateria de celular no 4G.'
];

L.cxUltimaVida = [
  'ÚLTIMA VIDA. Agora é tudo ou nada. Mais pra nada, mas vai.',
  'Um coração só. Clica como se tua vida dependesse disso. Porque depende.',
  'Última chance! Sem pressão. Muita pressão.',
  'Uma vida. Tipo 1% de bateria. Qualquer movimento errado e apaga.',
  'É agora ou nunca. Preferencialmente agora.',
  'Tá no último suspiro. Eu tô nervoso por você.',
  'Uma vida! Se for chutar, chuta com carinho.',
  'Modo hardcore ativado. Erra mais uma e acabou.',
  'Olha, eu acredito em você. Mais ou menos. Uns 40%.',
  'Último coração. Pensa três vezes, clica uma.',
  'Tu tá na corda bamba e a corda tá pegando fogo.',
  'Nem respira. Só pensa. Uma vida.',
  'Ultimo round! Luta!',
  'Isso aqui virou final de Copa. Pênalti. Você cobra.',
  'Se errar agora, eu mostro as respostas e te julgo. Com amor.',
  'Uma vidinha. Cuida dela igual Tamagotchi.',
  'O suspense tá me matando. E eu já sou fantasma.',
  'Último fôlego. Faz valer.',
  'Tá sentindo o suor? Eu tô sentindo o teu suor daqui.',
  'Vida extra não existe aqui. Não adianta procurar cogumelo.'
];

L.cxPerdeu = [
  'Acabou. As vidas foram embora. Vou te mostrar o que você não viu.',
  'Game over! Mas olha que bonitos os grupos que você não achou.',
  'Perdeu. Mas perdeu com estilo. Pouco estilo, mas algum.',
  'Fim de jogo. Não chora. Tá, chora um pouco.',
  'Zero vidas. Os grupos vão aparecer agora pra te assombrar.',
  'Perdeu! Eu avisei que tinha pegadinha. Não avisei? Então tô avisando agora.',
  'Acabou o jogo. Olha as respostas e finge que sabia.',
  'É, hoje não foi. Amanhã também talvez não. Mas vai que.',
  'Derrota! Mas o XP da humildade você ganhou.',
  'Fim da linha. Olha que óbvio era... ou não, era difícil mesmo.',
  'Perdeu, mas quem nunca? Eu. Eu nunca. Sou o mascote.',
  'Game over. Vou revelar os grupos devagar pra doer mais.',
  'Faltou pouco. Ou faltou muito. Depende de quantos você achou.',
  'Hoje o Conexo venceu. Revanche no próximo.',
  'As palavras ganharam essa. Tão comemorando ali no canto.',
  'Perdeu! Mas errar ensina. Ensina que você errou.',
  'Quatro erros. Uma lenda. Uma lenda do erro.',
  'Olha as respostas e fala "aaah" bem alto. Todo mundo faz isso.',
  'Não deu. Mas tua sequência de tentativas foi linda de assistir.',
  'Fim. O roxo tava lá o tempo todo te olhando.',
  'Perdeu, mas pelo menos não embaralhou 50 vezes. Ou embaralhou?',
  'Acabou. Vai tomar uma água e volta mais forte.',
  'Se serve de consolo, esse era difícil. Se não serve, também era difícil.',
  'Derrota registrada nas estatísticas. Pra sempre. Eternamente.',
  'Tá tudo bem. O importante é competir. Mentira, o importante é ganhar. Mas tá tudo bem.',
  'Os grupos tavam escondidos demais. Ou você procurou de menos.',
  'Perdeu! O Bugado tá aqui pra te abraçar. Metaforicamente, eu atravesso gente.',
  'Nada de vitória hoje. Mas tem Infinito, e lá ninguém julga. Só eu.'
];

L.cxGanhouPerfeito = [
  'PERFEITO! Zero erros! Você é real? Vou precisar de prova.',
  'Sem errar nenhuma! Isso é Conexo nível Deus Grego do Tempo Livre.',
  'Zero erros. Eu tô sem palavras. Eu, sem palavras. Histórico.',
  'Jogo perfeito! Tá jogando com cola, né? Brincadeira. Né?',
  'Quatro de quatro de primeira! Chama o Galvão: É TETRA!',
  'Perfeição! Nem um coraçãozinho perdido. Que respeito.',
  'Flawless victory! Isso aqui é fliperama, eu tinha que dizer.',
  'Zero erros e ainda com cara de quem não fez esforço. Odeio. Amo.',
  'Isso foi tão limpo que dá pra comer no chão.',
  'Perfeito! Você viu as pegadinhas e riu da cara delas.',
  'Sem erros! Vou emoldurar essa partida.',
  'Jogo perfeito! Se isso fosse prova, você ganhava estrelinha.',
  'Nem um erro. O puzzle tá chorando no cantinho.',
  'Perfeito! Tá liberado se gabar no grupo da família.',
  'Isso aí foi tipo speedrun com zero dano. Absurdo.',
  'Zero erros. Eu vou ter que fazer puzzles mais cruéis.',
  'Vitória perfeita! Tu é o Goku do Conexo.',
  'Jogou como quem inventou o jogo. Tô ofendido e orgulhoso.',
  'Sem perder vida nenhuma! Isso é raro igual Pokémon lendário.',
  'Perfeição absoluta. Pode printar e mandar pra todo mundo.',
  'Nenhum erro! Se tivesse torcida, tava gritando teu nome.',
  'Tá de parabéns. De verdade. Sem sarcasmo. Tá, com um pouquinho.'
];

L.cxGanhou = [
  'Ganhou! Com uns tropeços, mas ganhou. Contam os pontos, não o estilo.',
  'Vitória! Teve erro no meio, mas quem liga? Eu. Eu ligo. Mas parabéns.',
  'Achou os quatro! Algumas vidas ficaram pelo caminho, que descansem em paz.',
  'Ganhou! Deu uma escorregada, mas levantou bonito.',
  'Vitória! Não foi perfeita, mas foi tua.',
  'Os quatro grupos! Tá aprovado. Com recuperação, mas aprovado.',
  'Ganhou com {n} erro(s). Nada mal. Nada perfeito também.',
  'Resolvido! Eu vi aquele erro, mas vou fingir que não.',
  'Vitória com emoção! Os melhores jogos têm um susto.',
  'Ganhou! Agora bate no peito e diz "eu sabia". Mentira, você não sabia.',
  'Quatro grupos, alguns erros, uma vitória. Equação bonita.',
  'Mandou bem! Errou um pouquinho pra dar graça.',
  'Isso! Chegou lá. Pelo caminho mais longo, mas chegou.',
  'Venceu! Tem gente que erra mais. Tem gente que erra menos. Você errou médio.',
  'Vitória! O XP tá entrando, ouve o barulhinho?',
  'Ganhou! Da próxima vez sem erro, hein. Tô cobrando.',
  'Grupos encontrados! Conta pra todo mundo, só não conta os erros.',
  'Deu certo! Aquela pegadinha tentou, mas você foi mais teimoso.',
  'Vitória! Tipo passar de fase com metade da vida. Ainda vale.',
  'Ganhou! Os erros foram só aquecimento, né?'
];

L.cxGanhouSuado = [
  'GANHOU NA ÚLTIMA VIDA! Meu coração de fantasma quase parou de novo.',
  'Na raça! Com um coraçãozinho só! Isso é cinema.',
  'Ufa! Ganhou no limite. Eu tava roendo as orelhas.',
  'Vitória no sufoco! Isso vale o dobro. Não em XP, mas emocionalmente.',
  'Última vida e ganhou! Isso é roteiro de filme da Sessão da Tarde.',
  'Que sofrimento! Mas deu. Deu certo! Tô suando ectoplasma.',
  'Ganhou por um fio! Um fio de cabelo. De careca.',
  'Na trave e entrou! Que jogo!',
  'Vitória com uma vida! Tipo passar de ano no conselho de classe.',
  'Aos 47 do segundo tempo! GOOOL!',
  'Um coração e muita fé. Funcionou!',
  'Isso foi tenso. Eu vou precisar deitar um pouco.',
  'Quase perdeu tudo e ganhou. O drama! A emoção! O XP!',
  'Sobreviveu! Igual barata na explosão nuclear. Elogio.',
  'Vitória no último suspiro. Ninguém acreditou, só eu. Mentira, eu também não.',
  'Na última vida! Tu gosta de sofrer, né?',
  'Ganhou no limite! Agora respira, bebe água, se acalma.',
  'Isso não foi uma vitória, foi uma novela. Com final feliz.'
];

L.cxRevelar = [
  'Olha aí: <b>{grupo}</b>. Tava na tua cara.',
  'Esse era <b>{grupo}</b>. Faz sentido agora, né?',
  '<b>{grupo}</b>! Aposto que você fez "aaaah".',
  'E esse: <b>{grupo}</b>. Doeu?',
  '<b>{grupo}</b>. Guardei o melhor pro final.',
  'Revelando: <b>{grupo}</b>. Pode chorar.',
  'Esse aqui era <b>{grupo}</b>. Eu sei, eu sei.',
  '<b>{grupo}</b>. Esse foi maldade minha, admito.'
];

L.cxCompartilhou = [
  'Copiado! Agora cola no grupo e espera os comentários.',
  'Resultado copiado. Vai lá se exibir.',
  'Copiei! Os quadradinhos coloridos não mentem.',
  'Pronto! Manda pro grupo da família e confunde todo mundo.',
  'Copiado. Se for pra ostentar, ostenta com classe.',
  'Tá na área de transferência. Espalha a palavra.',
  'Copiei! Agora desafia alguém a fazer melhor.',
  'Resultado copiado. Os quadradinhos contam a história toda.'
];

L.cxStats = [
  'Olha tuas estatísticas. Números não mentem. Às vezes machucam.',
  'Aqui é o teu histórico. Tem glória e tem vergonha.',
  'Estatísticas! Tipo boletim, só que com mais erro.',
  'Olha quanta partida. Você não tem mais o que fazer?',
  'Esses números aí são a tua ficha criminal no Conexo.',
  'Tá bonito o gráfico. Ou feio. Eu não julgo. Julgo sim.'
];

L.cxAjuda = [
  'Leu as regras? Ótimo. Agora esquece tudo e confia no caos.',
  'É simples: acha os 4 grupos. Difícil é o resto.',
  'As regras tão aí. A pegadinha também. Boa sorte.',
  'Manual lido! Você é mais responsável que 90% dos jogadores.',
  'Dúvida? Normal. Todo mundo tem. Menos eu.'
];

Bugado.addLines(L); window.CX_ALL = Object.assign(window.CX_ALL || {}, L);
})();

(function(){
const L = {};

L.cutucarConexo = [
  'Me cutucar não revela grupo nenhum.',
  'Ai! Isso não é uma palavra do tabuleiro, sabia?',
  'Tá procurando conexão comigo? Fofo, mas foca no jogo.',
  'Se eu fosse uma palavra, seria do grupo roxo. Misterioso.',
  'Cutucou o mascote. Grupo: "coisas que não ajudam".',
  'Eu sei as respostas. Não vou contar. Pode cutucar à vontade.',
  'Para! Minhas orelhas são sensíveis.',
  'Isso é cócegas ou desespero?',
  'Não sou botão de dica. Sou botão de sarcasmo.',
  'Me cutucar gasta vida? Não. Mas devia.',
  'Tá me usando pra fugir do puzzle, né?',
  'Oi. Sim. Eu vi o que você tava pensando em juntar. Não.',
  'Cutuca de novo que eu embaralho teu cérebro.',
  'Ai! Eu não faço parte de nenhum grupo. Sou lobo solitário. Gato solitário.',
  'Quer uma dica? Olha pras palavras. Pronto, dei a dica.',
  'Eu sou um fantasma, sabia? Teu dedo atravessa. Mesmo assim, ai.',
  'Me cutucou em vez de pensar. Estratégia ousada.',
  'Isso aí não é o botão Enviar.',
  'Já tentou cutucar as palavras? Elas respondem melhor.',
  'Se eu contar a resposta, perco o emprego de mascote.',
  'Cutucar mascote dá XP? Não. Dá paz interior, talvez.',
  'Tá bom, tá bom, o grupo roxo é... não, não vou falar.',
  'Eu sei qual palavra é a pegadinha. Você não. Hihi.',
  'Ai, meu pixel!',
  'Tô tentando te ajudar ficando quieto. Você não deixa.',
  'Me cutucar é o "procrastinar" do Conexo.',
  'Olha as palavras, não pra mim. Eu sou bonito, eu sei, mas foca.',
  'Tu cutucou e eu quase disse a resposta sem querer. Quase.',
  'Isso é assédio moral a mascote. Vou chamar o sindicato.',
  'Quer conexão? Liga o Wi-Fi.',
  'Tô fazendo hora extra aqui por tua causa.',
  'Mais uma cutucada e eu viro palavra do tabuleiro.',
  'Eu gosto de você. Mas o puzzle tá ali, ó.',
  'Cutucou! Ganhou... nada. Parabéns.',
  'Sou só um bug com orelhas. Não tenho as respostas. Tenho sim.',
  'Se juntar eu, você e o puzzle, o grupo é "gente enrolando".',
  'Já disse que não dou dica. Mas se desse, seria... não.',
  'Hmm, cutucar com tanta força... tá com raiva do roxo?',
  'Eu sou mascote, não sou oráculo. Mas sou meio oráculo.',
  'Tuas cutucadas têm mais conexão que teus grupos até agora.',
  'Cutucada número qualquer. Eu parei de contar. Mentira, eu conto tudo.',
  'Tá sem ideia, né? Tudo bem. Respira. Me deixa em paz. Brincadeira, fica.',
  'Vou fingir que isso foi um carinho.',
  'Toda vez que você me cutuca, uma palavra muda de grupo. Mentira. Mas imagina.'
];

L.cxParado = [
  'Tá pensando ou dormiu? As palavras tão te esperando.',
  'Olá? Terra chamando. As 16 palavras mandaram um oi.',
  'Silêncio no tabuleiro. Isso é concentração ou pânico?',
  'Tá encarando as palavras há um tempão. Elas tão ficando constrangidas.',
  'Dica: às vezes a palavra tem dois sentidos. Às vezes três. Às vezes eu minto.',
  'Pensou demais? Dá uma embaralhada, olha de novo.',
  'Tô vendo tuas engrenagens girando. Devagarzinho.',
  'Se ficar parado mais um pouco eu começo a cantar.',
  'Tô entediado. Faz alguma coisa! Nem que seja errar.',
  'Quer uma dica? Procura a palavra que parece encaixar em dois lugares.',
  'Esse silêncio é de quem tá quase achando ou de quem desistiu?',
  'As palavras não vão se agrupar sozinhas. Eu já tentei pedir.',
  'Pensa em "___ de algo". Às vezes é isso. Às vezes não é nada.',
  'Já considerou que o roxo pode ter palavra escondida dentro de palavra?',
  'Tá parado igual fila de banco.',
  'Oi? Você tá aí? Pisca duas vezes se precisar de ajuda.',
  'Eu esperaria, mas eu sou ansioso. Fantasma ansioso.',
  'Enquanto você pensa, eu vou contar as palavras. 1, 2, 16. Pronto.',
  'Olha o grupo mais óbvio primeiro. Ele tá lá, rindo de você.',
  'A resposta tá na tua frente. Literalmente. Tá na tela.',
  'Pensando... pensando... carregando... 3%...',
  'Tá travado? Eu também travo às vezes. Sou literalmente um bug.',
  'Tenta ler as palavras em voz alta. Os vizinhos vão adorar.',
  'Uma dica: nem tudo que parece fruta é só fruta.',
  'Tu tá no modo estátua. Quem piscar primeiro perde.'
];

L.cxAleatorio = [
  'Curiosidade: a palavra "conexão" tem 7 letras. Isso não ajuda em nada. De nada.',
  'Sabia que o grupo roxo é o favorito de quem faz puzzle? A gente ama ver sofrer.',
  'Se a vida fosse um Conexo, meu grupo seria "coisas que falam demais".',
  'Uma vez juntei PIZZA com SEGUNDA-FEIRA no grupo "coisas que eu odeio". Não era um grupo.',
  'Fun fact: eu sou um gato fantasma. Não tenho grupo. Sou exclusivo.',
  'Às vezes eu fico pensando em quais palavras combinariam comigo. BUG, GATO, FANTASMA, LINDO.',
  'O segredo do Conexo: desconfiar. Tipo desconfiar de promoção de 99%.',
  'Você sabia que "manga" é fruta e parte da camisa? Claro que sabia. Todo mundo sabe.',
  'Eu já vi gente juntar CACHORRO com QUENTE. Não era o puzzle, mas deu fome.',
  'Tem palavra que parece inocente e é a maior pegadinha. Tipo eu.',
  'Se eu tivesse um real pra cada vez que alguém caiu na pegadinha, eu tinha, tipo, uns 40 reais.',
  'Uma vez um jogador acertou tudo de primeira. Eu chorei. De raiva.',
  'Minha palavra favorita é "pavê". Porque é pra ver ou pra comer?',
  'Tô jogando mentalmente junto com você. Tô ganhando.',
  'Uma dica de vida: nunca confie numa palavra que parece fácil demais.',
  'Se pensar muito no mesmo grupo, o cérebro dá tela azul. Eu sei, eu sou a tela azul.',
  'O amarelo é o fácil, o roxo é o cruel. O verde e o azul são os filhos do meio, ninguém liga.',
  'Às vezes eu leio as palavras de trás pra frente pra ver se tem algo escondido. Tem. Às vezes.',
  'Se você tá jogando no banheiro, eu não julgo. Mas eu sei.',
  'Tive um sonho que todas as palavras eram PAÇOCA. Foi o melhor puzzle da minha vida.',
  'Sabe o que tem em comum entre eu e o grupo roxo? Os dois são incompreendidos.',
  'Conexo é tipo encontro às cegas: você junta quatro e reza pra dar certo.',
  'Eu já pensei em fazer um puzzle só com nomes de tios. Grupo: "tios que contam piada do pavê".',
  'Se alguém perguntar, diga que tá treinando o cérebro. Pega bem.',
  'Tem gente que joga Conexo com café. Eu jogo com ectoplasma.',
  'Palavra do dia: "pegadinha". Uso: "caí na pegadinha de novo".',
  'Às vezes as palavras se olham e riem de você. Eu vi.',
  'Eu não tenho mãos, mas se tivesse, estaria roendo as unhas por você.',
  'Uma vez o grupo roxo era "palavras que rimam com coração". Tipo "mamão". Não rima, eu sei.',
  'Cheguei a uma conclusão: todo grupo amarelo é uma armadilha pra fazer você se sentir confiante.',
  'Queria ter um grupo só pra mim. "Mascotes incríveis": BUGADO, BUGADO, BUGADO, BUGADO.',
  'Se isso fosse novela, o grupo roxo seria a vilã que finge ser boazinha.',
  'Uma palavra que parece de dois grupos é tipo aquele amigo que tem dois grupos de WhatsApp com os mesmos nomes.',
  'Eu organizo minhas meias em grupos de quatro. Mentira, eu não tenho pés.',
  'O que mais me diverte é ver você hesitando antes do Enviar. É meu programa favorito.'
];

Bugado.addLines(L); window.CX_ALL = Object.assign(window.CX_ALL || {}, L);
})();
