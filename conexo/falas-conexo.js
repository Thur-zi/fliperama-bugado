/* Conexo: falas do Bugado específicas do jogo.
   Variáveis: {a} {b} = palavras da jogada · {grupo} = tema · {n} = número */
(function(){
const L = {};

L.cxEmbaralhar = [
  'Embaralhou e continua sem saber nada né KKKK',
  'Sacode aí que a resposta cai, vai que',
  'Embaralhar é fé mano, só fé',
  'Mexeu tudo e o cérebro ficou no mesmo lugar',
  'Não sabe o que fazer, embaralha. Clássico',
  'Mudou as palavras de lugar, a confusão ficou',
  'Chacoalhou igual controle remoto sem pilha',
  'Tá procurando grupo ou só curtiu a animação?',
  'Embaralhou, agora finge que teve uma ideia',
  'Misturei tudo, se não achar agora a culpa é tua',
  'Tipo reiniciar o roteador, não resolve mas dá uma paz',
  'Embaralha e OLHA de verdade dessa vez, combinado?',
  'Esforço eu tô vendo, resultado nem tanto',
  '{a} do lado de {b} agora. Te diz alguma coisa? Pra mim nada',
  'Embaralhar é o "vou pensar no banho" do Conexo',
  'Arrumou igual mãe arrumando teu quarto, sumiu tudo',
  'Olho fresco mano, bora',
  'Deu uma chacoalhada, vê se o cérebro acorda agora',
  'Tá parecendo DJ mixando palavra KKKKK',
  'Nova rodada de achar o óbvio que tava na tua cara',
  'Embaralhou com uma convicção que eu respeito',
  'O grupo tava tudo do lado, agora espalhou. Boa',
  'Vai que o {a} te dá uma luz agora',
  'Tá tratando o tabuleiro igual roleta',
  'Mistura aí que eu fico torcendo daqui',
  'Posição nova, os mesmos 4 grupos te encarando',
  'Mexeu igual técnico do Cruzeiro no intervalo, sem resultado nenhum',
  'Parece o 330 fazendo curva, palavra caindo pra todo lado',
  'Agora olha pro {b} com carinho',
  'Embaralhou de novo, o {a} já tá tonto'
];

L.cxEmbaralharMuito = [
  '{n} embaralhadas mano, as palavras tão tontas',
  '{n} vezes. Tá invocando alguma coisa?',
  'Para de embaralhar pelo amor de Deus, tô enjoado',
  '{n} vezes KKKKK nem baralho de truco sofre tanto',
  'As palavras não vão se juntar sozinhas não',
  'Virou hobby já né. Embaralhar Simulator',
  'São as mesmas palavras, eu juro, conferi',
  'Mais uma embaralhada e eu começo a cobrar',
  'Cê embaralha igual quem abre a geladeira de 5 em 5 minutos',
  'O botão de embaralhar pediu férias',
  '{n} embaralhadas e zero ideia, estatística cruel',
  'Já decorei todas as posições possíveis. Cê não',
  'Apertando igual botão de elevador, não vem mais rápido não',
  'Faz o seguinte: pensa um pouco e depois embaralha',
  'Até eu fiquei tonto e eu sou um fantasma',
  '{n} vezes, tá maluco, já deu né'
];

L.cxDesmarcar = [
  'Desmarcou tudo, arrependeu né',
  'Voltou atrás. Sábio ou medroso, sla',
  'Limpou tudo igual prova de física em branco',
  'Desistiu da ideia? Tava ruim mesmo',
  'Desmarcou. Zero compromisso igual crush',
  'Apagou e fingiu que nada aconteceu KKKK',
  'Ctrl+Z da vida real',
  'Tava tão confiante 3 segundos atrás...',
  'Pelo menos não gastou vida com aquilo',
  'Fez bem, aquilo tava com cara de erro',
  'Recomeçar faz parte. Recomeçar 8 vezes também',
  'Tô sentindo uma indecisão no ar',
  'Ninguém viu. Só eu, e eu conto pra geral',
  'Isso, respira e olha dnv',
  'Desmarcou antes de mandar, esperto'
];

L.cxIndeciso = [
  'Marca, desmarca, marca... tá fazendo crochê?',
  '{n} cliques e nenhum envio. Tá tudo bem aí?',
  'Parece eu escolhendo lanche no iFood',
  'Indecisão nível cardápio de rodízio',
  'Clica com fé mano, ou pelo menos com uma ideia',
  'Tá testando se os quadradinhos são macios?',
  'O {a} já foi marcado e desmarcado umas 3 vezes, ele tá se sentindo usado',
  'Isso aqui não é bem-me-quer mal-me-quer não',
  'Parece eu escolhendo foto de perfil, 700 séculos',
  'Seleciona, pensa e manda. Não precisa ser em loop',
  'Os quadradinhos já tão com LER de tanto clique',
  'Vai errar de qualquer jeito, então vai logo KKKK',
  'Teu dedo tá mais confiante que teu cérebro',
  'Uma hora vai ter que escolher, igual na vida',
  'Tô ouvindo teu cérebro fazendo barulho de HD velho',
  'O Enviar não morde não uai',
  'Cê tá no modo "e se...", perigoso',
  'Larga o {a} mano, deixa o menino em paz'
];

L.cxPronto = [
  '4 marcados. Vai ou não vai?',
  'Não vou falar nada, mas tô olhando',
  'Certeza? Não tô dizendo que tá errado. Nem certo',
  'Hmm, escolha interessante. Manda',
  'Manda logo, meu coração não aguenta',
  'Cê tá com cara de quem sabe o que tá fazendo. Sabe?',
  '{a} com {b}... quero ver no que dá',
  'Aperta Enviar e seja o que Deus quiser',
  'Tô segurando a pipoca aqui',
  'Hora da verdade mano',
  'Se der certo eu vou fingir que sabia',
  'Bonito o grupinho. Bonito não é certo',
  'Vai vai vai. Não, espera. VAI',
  '{a} e {b} juntos, cê que sabe'
];

L.cxInicioDiario = [
  'Conexo do dia, igual pra todo mundo. Não passa vergonha',
  '16 palavras, 4 grupos, 1 cérebro. Boa sorte pro cérebro',
  'Geral tá jogando esse. Se cê errar alguém acertou, pensa nisso',
  'O de hoje tá com maldade, já vou falando',
  'Tem uma pegadinha roxa aí no meio. Eu sei qual é KKKK',
  'Olha as palavras e desconfia de todas',
  'Hora do teu teste de QI diário',
  'Tem palavra aí que parece de dois grupos, não cai',
  'O Brasil inteiro tá nesse mesmo, a pressão é real',
  'Bora? 4 vidas, gasta com calma',
  'Começa pelo óbvio. Se bem que o óbvio aqui quase nunca é óbvio',
  'Olha quem voltou pro diário. Saudade de errar?',
  'Hoje tem cada palavra mano... quero ver',
  'Diário carregado. Teu orgulho também, espero',
  'O de hoje tá mais apertado que o 330 às 18h'
];

L.cxInicioInfinito = [
  'Infinito. Puzzle novo pq cê é viciado',
  'Mais um? Ninguém te segura né',
  'Sorteei esse aqui, tem pegadinha boa',
  'Infinito é o nome do modo e do tempo que cê vai passar aqui',
  'Puzzle saindo do forno, cuidado que queima',
  'Esse cê nunca viu. Eu já vi umas mil vezes',
  'Bora de mais um, XP não cai do céu',
  'Sorteado com carinho. Foi aleatório, mas com carinho',
  'Puzzle novo, tuas estatísticas tão torcendo',
  'Olha que tabuleiro bonito. Vai te fazer sofrer',
  'Próxima fase. Sem chefão, mas tem um roxo',
  'Vambora, hoje ninguém dorme',
  'Mais um pra conta, esse cheira a pegadinha',
  'Infinito ligado, vida social desligada KKKK'
];

L.cxDiarioFeito = [
  'O de hoje já foi. Volta amanhã ou vai pro Infinito',
  'Cê já fez o de hoje, quer sofrer mais? Tem o Infinito',
  'Não adianta recarregar a página, eu tô vendo',
  'Já jogou hoje. Amanhã tem outro, hoje tem Infinito',
  'O diário é um por dia, tipo pão de queijo quentinho, tem hora',
  'Tentando jogar o diário de novo? Espertinho, não rola',
  'Missão do dia feita, agora é farmar XP no Infinito',
  'O de amanhã tá sendo feito com crueldade, aguarda',
  'Hoje já deu. O Infinito fica aberto igual padaria 24h',
  'Diário feito. Tuas estatísticas agradecem ou choram, depende',
  'Veio olhar o que já fez? Saudade de 5 minutos atrás?',
  'O diário acabou mas a vontade de jogar não né, te conheço'
];

Bugado.addLines(L); window.CX_ALL = Object.assign(window.CX_ALL || {}, L);
})();

(function(){
const L = {};

L.cxAcerto1 = [
  'Achou o amarelo, o fácil. Parabéns pelo básico',
  '<b>{grupo}</b>. Até eu achava e eu sou um bug',
  'Amarelinho. Aquecimento feito, agora vem o sofrimento',
  'Esse era o fácil hein, não fica se achando',
  'Amarelo na conta. Nível: água é molhada',
  'Começou pelo raso, sensato',
  'O amarelo é tipo tutorial, passou do tutorial parabéns',
  '<b>{grupo}</b>, esse tava gritando né',
  'Amarelo feito, dignidade preservada. Por enquanto',
  'O óbvio foi. Agora os outros ficam mais fáceis, ou não',
  'Acertou o amarelo, tua mãe ficaria orgulhosa. Mais ou menos',
  'Fácil fácil. Quero ver o roxo',
  'Amarelo é o arroz do prato, sem ele nem começa',
  'Viu? Não doeu. O próximo dói',
  'Esse até meu vô acertava',
  'Achou o fácil igual achar o controle no sofá',
  'Amarelo na base, agora constrói o prédio',
  'Achou o grupo que tava pedindo pra ser achado',
  'Esse foi mais fácil que senha 123456',
  '<b>{grupo}</b> foi. Primeiro degrau, os outros quebram'
];

L.cxAcerto2 = [
  'Verde. Tá esquentando hein',
  '<b>{grupo}</b>, esse pedia um neurônio a mais e cê tinha',
  'Verde na conta. Médio, mas bem feito',
  'Verdinho, tipo semáforo: pode seguir',
  'Tinha um peguinha e cê não caiu, boa',
  'Acertou o verde. Com a cabeça ou no chute? Tanto faz',
  '<b>{grupo}</b>! Não esperava. Esperava um pouco',
  'Verde feito, tá quase respeitável',
  'Dois neurônios trabalhando junto, que lindo',
  'Verde na mesa, agora o jogo ficou sério',
  'Mandou bem no médio, o difícil tá te esperando',
  'Verde limpinho, nem hesitou',
  'Verde igual a grama que cê devia ir tocar depois',
  'Verde feito, autoestima subindo',
  'Achei que esse ia te pegar. Não pegou, que pena',
  'Verde igual luz de carregador cheio, cérebro carregado hoje',
  'Acertou <b>{grupo}</b>, seguimos vivos',
  'Médio resolvido, subiu de patente',
  'Olha só, sabe o que faz. Às vezes',
  'Verde. Nem pensou muito, que isso'
];

L.cxAcerto3 = [
  'AZUL. Esse era difícil de verdade, que isso',
  '<b>{grupo}</b>! Isso aí já é nível cursinho',
  'Azul feito, respeito. Um pouquinho',
  'Achou o azul, tinha armadilha e cê passou por cima',
  'Azul na conta. Jogando igual quem já jogou antes',
  'O azul era chatinho, cê foi mais chato ainda',
  '<b>{grupo}</b>... como cê sabia disso? Tá no Google né',
  'Azulzinho. Faltou pouco pra eu falar uau',
  'O difícil caiu, o roxo tá tremendo agora',
  'Eu apostava que o azul ia te derrubar, perdi a aposta',
  'Azul resolvido com classe, mandou muito',
  'Olha o nível subindo, azul na mesa',
  'Azul igual a camisa do Cabuloso, bonito demais',
  'Isso foi bonito de ver, quase chorei',
  'Penúltimo chefe derrotado',
  'Aí sim, <b>{grupo}</b> não é pra qualquer um',
  'Conexão boa essa. Cê viu, eu vi cê ver',
  'Azul feito, teu cérebro veio de terno hoje',
  'Tô começando a achar que cê é bom nisso',
  'Azul caiu, só falta a pegadinha. Ou já foi?'
];

L.cxAcerto4 = [
  'ROXOOO, a pegadinha! Como mano??',
  '<b>{grupo}</b>. Esse era o grupo maldoso e cê foi mais maldoso',
  'Achou o roxo, eu escondi tão bem... tô ofendido',
  'O roxo caiu, isso é nível mestre',
  'Roxinho, o grupo que ninguém acha. Menos você pelo visto',
  'Pegadinha desmontada. Orgulhoso e irritado ao mesmo tempo',
  '<b>{grupo}</b>... quem pensa nisso? Cê, pelo visto',
  'ROXO. Tua cabeça é estranha, é elogio',
  'O chefão final tomou um kamehameha',
  'Não acredito que cê viu isso, nem eu via',
  'A pegadinha se rendeu, bandeira branca',
  'Roxo resolvido, chama a imprensa',
  'Isso é pensamento lateral, diagonal e 3D',
  'Achou o roxo, pode botar no currículo',
  'O grupo mais difícil na conta. Bizarro',
  'Cê é bruxo? O roxo era pra te derrubar',
  'Passou por cima da pegadinha de patinete KKKK',
  'Esse roxo tinha vergonha de ser achado e cê achou',
  '<b>{grupo}</b>. Tenho que parar de te subestimar',
  'ROXO NA CONTA KKKKKK nervoso',
  'Viu o que ninguém vê, que isso',
  'Quem fez esse roxo é cruel, cê foi mais'
];

L.cxRoxoPrimeiro = [
  'Pera. Cê achou o ROXO primeiro?? Ninguém faz isso',
  'Começou pela pegadinha, tipo comer a sobremesa antes',
  'Roxo de primeira, os outros grupos tão com medo',
  'O mais difícil antes de tudo. Gênio ou chute lindo',
  'Pegadinha logo de cara, jogando de trás pra frente e dando certo',
  'Speedrun de pegadinha, recorde pessoal certeza',
  'Roxo primeiro. Vou ter que caprichar mais nos próximos',
  'Olhou pro caos e falou "ah, é isso". Assustador',
  'Roxo primeiro é raro igual Pokémon shiny',
  'Começou pelo boss final, coisa de quem joga Souls',
  'Primeiro grupo e já é o roxo? Tô chamando o suporte',
  'MDSSS pulou o tutorial e matou o chefão'
];

L.cxCombo = [
  '{n} seguidos, sequência bonita',
  'Combo de {n}, nem respira que estraga',
  '{n} sem errar, tô ficando nervoso',
  'Combo! Tá voando hoje',
  '{n} seguidos. Alguém tomou café',
  'x{n} que isso mano, tá jogando demais',
  'Nenhum erro nessa sequência, suspeito',
  'Combo de {n}, se fosse fliperama a tela tava piscando',
  'Jogo limpo, limpinho, tô emocionado',
  'Sequência perfeita até agora. Não olha pra baixo'
];

L.cxQuase = [
  'Um de distância. Tão perto que dá raiva',
  'Quase, 3 tão certos e um tá de penetra',
  'Faltou UM. Um! Bola na trave',
  'Tem um intruso aí, descobre quem é',
  'Quase não enche barriga não',
  'Três certos, o quarto tá rindo da tua cara',
  'Um desses não pertence. Tipo eu em festa',
  'Chegou pertinho. Troca um e reza',
  'Tem um impostor aí. Amogus',
  '3 de 4. Em prova era nota boa, aqui é vida perdida',
  '{a} ou {b}? Um deles pode ser o culpado. Ou não',
  'Faltou pouco igual wi-fi de uma barrinha',
  'Agora é detetive: quem é o infiltrado?',
  'O quarto era de outro grupo, tava só de visita',
  'Tá quente, tá quente... tá errado por um',
  'Tipo acertar 3 números da Mega, legal mas não ganha nada',
  'Um de distância, se eu tivesse unha tava roendo',
  'Aposto que a pegadinha tá metida nisso',
  'Três tão certos. Não vou falar quais KKKK',
  'Faltou um igual faltar 1 real pra passagem',
  'O grupo existe, só tem um convidado errado',
  'Essa doeu em mim. Mais em você, mas doeu em mim',
  'Tem uma palavra jogando no time errado',
  'Tua intuição tá boa, só tá míope',
  'Pertíssimo, troca uma e tenta dnv',
  'Um de distância. Respira e tem paciência',
  'Aquela palavra que parece de dois grupos te pegou né',
  'Três certas. Qual que é o cavalo de Troia?',
  'Uma palavra traíra no meio, clássico',
  'Chegou tão perto que eu senti o calor'
];

L.cxErrou = [
  'Juntou <b>{a}</b> com <b>{b}</b>? Qual foi a lógica mano',
  'Não mano. Só não',
  'Errou, mas errou com confiança, respeito',
  '<b>{a}</b> e <b>{b}</b> no mesmo grupo? Nem em sonho',
  'Isso foi chute de olho fechado',
  'Menos uma vida, gastando igual salário no dia 5',
  'Errado, mas criativo',
  'Tinha dois certos ali, o resto era poesia',
  'Errar é humano. Cê é humano? Tô duvidando',
  'Que viagem foi essa? <b>{a}</b> com <b>{b}</b>?',
  'Zero conexão encontrada',
  'Tentou, errou, faz parte. Errar dnv aí já não faz',
  'Tão errado que o jogo tremeu',
  'Era outra coisa, uma coisa que cê não viu',
  'Tentei entender o raciocínio e desisti',
  'Vida perdida, aquele coraçãozinho não volta mais',
  '<b>{a}</b> e <b>{b}</b> são o quê, primos?',
  'Errado. Mas o importante é se divertir né? Né?',
  'Nenhum grupo tem essa cara não',
  'Pensou tanto e mandou isso? Pensa menos então KKKK',
  'Misturou grupo igual misturar refri no copo',
  'Nem perto nem longe, errado médio',
  'Esse grupo só existe na tua cabeça',
  'Metade certo talvez, a outra metade tava de férias',
  'Viu conexão onde não tinha, teoria da conspiração',
  'Opa, errou. Respira e olha de novo',
  'Foi pro VAR e o VAR disse não',
  '<b>{a}</b> tá até ofendido de tá junto com <b>{b}</b>',
  'Não era isso não, meu consagrado',
  'O óbvio às vezes é armadilha. Esse era',
  'Uma vida a menos, coração partido',
  'Errado, mas teve coragem. Coragem não pontua',
  'O jogo disse não, eu digo não, tua mãe diria não',
  'Foi tipo pizza de abacaxi, tem quem goste mas tá errado',
  'Não colou nem com cola quente'
];

L.cxErrouFeio = [
  'Cada palavra de um grupo. Tá fazendo de propósito?',
  'Zero em comum. Achou o anti-grupo, quase um talento',
  'Nenhuma combina com nenhuma, aleatoriedade perfeita',
  'Isso foi sorteio né? 100% sorteio',
  '4 palavras, 4 grupos diferentes, estatisticamente bizarro',
  'Errou tanto que deu a volta e ficou interessante',
  'Juntou <b>{a}</b>, <b>{b}</b> e mais duas que não têm NADA a ver KKKKK',
  'Nem a pegadinha é tão confusa quanto essa jogada',
  'Tá jogando Conexo ou Desconexo?',
  'Cada uma de um canto, parece trabalho em grupo da escola',
  'Isso não é grupo, é reunião de estranho',
  'Fechou o olho e clicou né, pode falar',
  'Nem eu consigo inventar explicação pra isso',
  'A combinação mais errada possível, parabéns',
  'Isso foi um pedido de socorro? Tá tudo bem?',
  '4 palavras que nunca deviam ter se conhecido',
  'Nem o roxo faria isso com você, cê fez sozinho',
  'Isso é o grupo "coisas que existem", não conta',
  'Uma de cada, salada de fruta de erro',
  'Procurei conexão ali e não achei nem forçando'
];

L.cxRepetido = [
  'Cê já tentou EXATAMENTE isso. Achou que o jogo ia mudar de ideia?',
  'Mesma combinação de antes. Não tiro vida, mas tiro sarro',
  'Déjà vu. Cê já errou isso aí',
  'Fazer a mesma coisa esperando resultado diferente, cê sabe o nome disso',
  'Essa aí já foi e continua errada, não amadureceu',
  'Repeteco. Não custa vida, custa dignidade',
  'Mano é a MESMA. Eu tenho memória',
  'Insistência é bonito em comercial, aqui não',
  'Colou da tua própria prova errada KKKK',
  'Deu errado antes, deu errado agora, pelo menos foi de graça',
  'Reprise, Sessão da Tarde do erro',
  'Esse erro de novo? Tô achando que é carinho',
  'Mesmo grupo, mesmo erro, pelo menos é consistente',
  'Não vou cobrar, mas não vou esquecer',
  'Mesma tentativa, poupei tua vida por pena',
  'Cê sabe que tá errado, eu sei, o jogo sabe',
  'Vencer pelo cansaço? O jogo não cansa',
  'Mesma tentativa com roupa nova, não enganou ninguém',
  'Loop detectado. Reiniciando mascote... não, tô bem',
  'Mesma jogada, tipo mandar a mesma mensagem esperando resposta'
];

Bugado.addLines(L); window.CX_ALL = Object.assign(window.CX_ALL || {}, L);
})();

(function(){
const L = {};

L.cxDuasVidas = [
  'Metade das vidas foi embora, pensa antes de clicar',
  'Duas vidas. Hora de jogar sério',
  'Dois coraçãozinhos, cuida deles',
  'Duas vidas, nada de chute agora combinado?',
  'Zona de perigo. Não o grupo, a tensão',
  'Meio tanque, e o posto só abre amanhã',
  'Duas vidas. Olha com calma antes de mandar',
  'Tá apertado igual calça depois do Natal',
  'Mais dois erros e eu canto a música triste',
  'Duas vidas dá, se usar a cabeça',
  'Olha o risco subindo, adoro',
  'Gastando vida igual bateria no 4G'
];

L.cxUltimaVida = [
  'ÚLTIMA VIDA. Agora é tudo ou nada',
  'Um coração só. Clica como se tua vida dependesse disso, pq depende',
  'Última chance, sem pressão. Muita pressão',
  'Uma vida, tipo 1% de bateria',
  'Agora ou nunca. De preferência agora',
  'Último suspiro, eu tô nervoso por você',
  'Se for chutar, chuta com carinho',
  'Modo hardcore ligado, errou acabou',
  'Eu acredito em você. Uns 40%',
  'Último coração. Pensa três vezes e clica uma',
  'Corda bamba e a corda tá pegando fogo',
  'Nem respira mano. Uma vida',
  'Último round, FIGHT',
  'Virou final de Copa, pênalti, cê que bate',
  'Errou agora eu mostro as respostas e te julgo',
  'Uma vidinha, cuida igual Tamagotchi',
  'O suspense tá me matando e eu já sou fantasma',
  'Mais tenso que Cruzeiro nos acréscimos',
  'Tô sentindo teu suor daqui',
  'Não tem cogumelo de vida extra aqui não'
];

L.cxPerdeu = [
  'Acabaram as vidas. Vou te mostrar o que cê não viu',
  'Game over. Olha que bonito os grupos que cê não achou',
  'Perdeu, mas perdeu com estilo. Pouco estilo',
  'Fim de jogo. Pode chorar um pouco',
  'Zero vida, os grupos vão aparecer pra te assombrar',
  'Perdeu. Tinha pegadinha, eu falei no começo',
  'Acabou. Olha as respostas e finge que sabia',
  'Hoje não foi. Amanhã quem sabe',
  'Derrota, mas o XP da humildade veio',
  'Fim da linha. Era óbvio... ou não, era difícil mesmo',
  'Perdeu, quem nunca? Eu nunca, sou o mascote',
  'Game over. Vou revelar devagar pra doer mais',
  'Faltou pouco ou faltou muito, depende de quantos cê achou',
  'Hoje o Conexo venceu. Revanche no próximo',
  'As palavras ganharam essa, tão comemorando ali no canto',
  'Perdeu pra 16 palavras, patético KKKKK',
  '4 erros. Uma lenda do erro',
  'Olha as respostas e fala "aaah" bem alto, todo mundo faz',
  'Não deu, mas foi divertido de assistir',
  'O roxo tava ali o tempo todo te olhando',
  'Perdeu, pelo menos não embaralhou 50 vezes. Ou embaralhou?',
  'Acabou. Toma uma água e volta mais forte',
  'Se serve de consolo esse era difícil. Se não serve, era difícil igual',
  'Derrota registrada nas estatísticas pra sempre',
  'Jogou igual o Cruzeiro fora de casa, perdeu',
  'Os grupos tavam escondidos demais. Ou cê procurou de menos',
  'Tô aqui pra te abraçar. Eu atravesso gente, mas a intenção vale',
  'Nada de vitória hoje. No Infinito ninguém julga, só eu'
];

L.cxGanhouPerfeito = [
  'PERFEITOOO zero erro, cê é real?',
  'Sem errar nenhuma, isso é Conexo nível Deus Grego do Tempo Livre',
  'Zero erro. Fiquei sem palavra, eu, sem palavra',
  'Jogo perfeito. Tá de cola né? Né?',
  'É TETRAAAA quatro de quatro de primeira',
  'Perfeito, nem um coraçãozinho perdido',
  'Flawless victory, isso aqui é fliperama, tinha que falar',
  'Zero erro e com cara de quem nem se esforçou, odeio',
  'Tão limpo que dá pra comer no chão',
  'Viu as pegadinhas e riu da cara delas',
  'Sem erro, vou emoldurar essa partida',
  'Se fosse prova ganhava estrelinha',
  'Nem um erro, o puzzle tá chorando no canto',
  'Perfeito, liberado pra se gabar no grupo da família',
  'Speedrun zero dano, bizarro',
  'Zero erro. Vou ter que fazer puzzle mais cruel',
  'Cê é o Goku do Conexo mano',
  'Jogou igual quem inventou o jogo, tô ofendido e orgulhoso',
  'Sem perder vida, raro igual Pokémon lendário',
  'MDSSSS QUE ISSO, printa e manda no grupo',
  'Se tivesse torcida tava gritando teu nome no Mineirão',
  'KJJJJJJ perfeito, tá jogando demais'
];

L.cxGanhou = [
  'Ganhou, com uns tropeços mas ganhou',
  'Vitória. Teve erro no meio mas quem liga? Eu, mas parabéns',
  'Achou os 4, umas vidas ficaram pelo caminho, descansem em paz',
  'Escorregou mas levantou bonito',
  'Não foi perfeita mas foi tua',
  'Aprovado. De recuperação, mas aprovado',
  'Ganhou com {n} erro no meio. Nada mal, nada perfeito',
  'Resolvido. Eu vi aquele erro mas vou fingir que não',
  'Vitória com emoção, jogo bom tem susto',
  'Bate no peito e fala "eu sabia". Cê não sabia KKKK',
  '4 grupos, uns erros, uma vitória. Conta bonita',
  'Mandou bem, errou um pouquinho pra dar graça',
  'Chegou lá pelo caminho mais longo, mas chegou',
  'Tem gente que erra mais, tem gente que erra menos, cê errou médio',
  'Vitória, ouve o barulhinho do XP entrando?',
  'Ganhou. Próxima sem erro hein, tô cobrando',
  'Conta pra geral, só não conta os erros',
  'A pegadinha tentou mas cê foi mais teimoso',
  'Passou de fase com meia vida, vale igual',
  'Ganhou, os erros foram só aquecimento né'
];

L.cxGanhouSuado = [
  'GANHOU NA ÚLTIMA VIDA, meu coração quase parou',
  'Na raça, com um coraçãozinho só. Cinema',
  'Ufa, no limite. Eu tava roendo a orelha',
  'Vitória no sufoco vale o dobro, emocionalmente',
  'Última vida e ganhou, roteiro de Sessão da Tarde',
  'Que sofrimento mano, mas deu',
  'Ganhou por um fio. Fio de cabelo de careca',
  'Na trave e entrou KAKAKAKA',
  'Passou de ano no conselho de classe',
  'Aos 47 do segundo tempo, GOOOOL',
  'Um coração e muita fé, funcionou',
  'Isso foi tenso, vou precisar deitar',
  'Quase perdeu tudo e ganhou, que drama',
  'Sobreviveu igual barata. É elogio',
  'Ganhou no último suspiro, ninguém acreditou nem eu',
  'Na última vida, cê gosta de sofrer né',
  'Ganhou no limite. Respira e bebe uma água',
  'Saiu depois de correr uma maratona sem tênis, mas saiu'
];

L.cxRevelar = [
  'Olha aí: <b>{grupo}</b>. Tava na tua cara',
  'Esse era <b>{grupo}</b>. Faz sentido agora né',
  '<b>{grupo}</b>. Aposto que cê fez "aaaah"',
  'E o roxo: <b>{grupo}</b>. Doeu?',
  '<b>{grupo}</b>. Guardei o melhor pro final',
  'O roxo era <b>{grupo}</b>, pode chorar',
  'Esse aqui era <b>{grupo}</b>. Eu sei, eu sei',
  '<b>{grupo}</b>. Maldade minha, admito'
];

L.cxCompartilhou = [
  'Copiado, cola no grupo e espera os comentários',
  'Copiei. Vai lá se exibir',
  'Os quadradinhos coloridos não mentem',
  'Manda no grupo da família e confunde geral',
  'Copiado. Se for ostentar, ostenta direito',
  'Tá copiado, espalha aí',
  'Copiei, agora desafia alguém a fazer melhor',
  'Os quadradinhos contam a história toda KKKK'
];

L.cxStats = [
  'Tuas estatísticas. Número não mente, às vezes machuca',
  'Aqui tem glória e tem vergonha',
  'Tipo boletim, só que com mais erro',
  'Olha quanta partida, cê não tem mais nada pra fazer?',
  'Isso aí é tua ficha criminal no Conexo',
  'Bonito o gráfico. Ou feio, eu não julgo. Julgo sim'
];

L.cxAjuda = [
  'Leu? Agora esquece tudo e confia no caos',
  'É simples: acha os 4 grupos. O difícil é o resto',
  'Regra lida. A pegadinha tá te esperando',
  'Leu o manual, cê é mais responsável que 90% da galera',
  'Dúvida é normal, todo mundo tem. Menos eu'
];

Bugado.addLines(L); window.CX_ALL = Object.assign(window.CX_ALL || {}, L);
})();

(function(){
const L = {};

L.cutucarConexo = [
  'Me cutucar não revela grupo nenhum não',
  'Ai, eu não sou palavra do tabuleiro',
  'Procurando conexão comigo? Fofo, mas foca',
  'Se eu fosse palavra eu era do roxo',
  'Grupo: coisas que não ajudam. Eu tô nele',
  'Eu sei as respostas e não vou contar, pode cutucar',
  'Para, minha orelha é sensível',
  'Isso é cócega ou desespero?',
  'Não sou botão de dica mano',
  'Me cutucar não gasta vida. Mas devia',
  'Tá me usando pra fugir do puzzle né',
  'Eu vi o que cê ia juntar. Não',
  'Cutuca de novo que eu embaralho teu cérebro',
  'Sou gato solitário, não tenho grupo',
  'Quer dica? Olha pras palavras. Pronto, dei',
  'Teu dedo atravessa, sou fantasma. Mesmo assim ai',
  'Me cutucou em vez de pensar, ousado',
  'Isso aqui não é o botão Enviar',
  'Cutuca as palavras, elas respondem melhor',
  'Se eu contar a resposta perco o emprego',
  'Cutucar mascote dá XP? Não',
  'Tá bom, o roxo é... não, não vou falar',
  'Eu sei qual é a pegadinha. Cê não KKKK',
  'Ai meu pixel',
  'Tô te ajudando ficando quieto, cê não deixa',
  'Me cutucar é a procrastinação do Conexo',
  'Olha pras palavras, não pra mim. Eu sou lindo eu sei',
  'Quase falei a resposta sem querer, quase',
  'Vou chamar o sindicato dos mascotes',
  'Quer conexão? Liga o wi-fi',
  'Tô fazendo hora extra por tua causa',
  'Mais uma cutucada e eu viro palavra do tabuleiro',
  'Gosto de você, mas o puzzle tá ali ó',
  'Cutucou e ganhou... nada',
  'Sou só um bug com orelha, sem resposta nenhuma. Tenho sim',
  'Eu, você e o puzzle: grupo "gente enrolando"',
  'Já falei que não dou dica. Se desse seria... não',
  'Cutucando com essa força, tá com raiva do roxo?',
  'Sou mascote, não oráculo. Meio oráculo vai',
  'Tuas cutucadas têm mais conexão que teus grupos',
  'Eu conto todas as cutucadas, pode ter certeza',
  'Tá sem ideia né, tudo bem, fica aí',
  'Vou fingir que foi carinho',
  'Ô, me deixa, vai jogar'
];

L.cxParado = [
  'Tá pensando ou dormiu?',
  'Ô, as 16 palavras mandaram um oi',
  'Silêncio no tabuleiro. Concentração ou pânico?',
  'Encarando as palavras faz tempo, elas tão constrangidas',
  'Tem palavra com dois sentidos aí. Às vezes três',
  'Travou? Embaralha e olha de novo',
  'Tô vendo tuas engrenagens girando, devagarzinho',
  'Fica parado mais um pouco que eu começo a cantar',
  'Faz alguma coisa, nem que seja errar',
  'Dica: procura a palavra que encaixa em dois lugares',
  'Esse silêncio é de quem tá quase ou de quem desistiu?',
  'As palavras não se juntam sozinhas, já pedi',
  'Pensa em "___ de alguma coisa", às vezes é isso',
  'O roxo pode ter palavra escondida dentro de palavra, só digo isso',
  'Parado igual fila de banco',
  'Ô, cê tá vivo?',
  'Eu sou ansioso mano, faz alguma coisa',
  'Contei as palavras enquanto cê pensava: 16. Pronto',
  'Olha o grupo mais óbvio primeiro, ele tá rindo de você',
  'A resposta tá na tua frente, tá na tela',
  'Pensando... carregando... 3%...',
  'Travou? Eu também travo, sou um bug',
  'Lê as palavras em voz alta, os vizinhos vão adorar',
  'Nem tudo que parece fruta é só fruta',
  'Modo estátua ativado, quem piscar primeiro perde'
];

L.cxAleatorio = [
  'A palavra "conexão" tem 7 letras. Isso não ajuda em nada',
  'Quem faz puzzle ama o roxo, a gente gosta de ver sofrer',
  'Se a vida fosse Conexo meu grupo era "coisas que falam demais"',
  'Uma vez juntei PIZZA com SEGUNDA-FEIRA no grupo "coisas que eu odeio". Não era grupo',
  'Sou um gato fantasma, não tenho grupo, sou exclusivo',
  'Meu grupo seria BUG, GATO, FANTASMA, LINDO',
  'O segredo é desconfiar, tipo promoção de 99%',
  'Manga é fruta e parte da camisa. Sim, todo mundo sabe',
  'Já vi gente juntar CACHORRO com QUENTE. Não era o puzzle mas deu fome',
  'Tem palavra que parece inocente e é a maior pegadinha, tipo eu',
  'Se eu ganhasse 1 real por cada um que caiu na pegadinha já tinha pago uns 8 busão',
  'Uma vez um cara acertou tudo de primeira. Chorei de raiva',
  'Minha palavra favorita é pavê. É pra ver ou pra comer?',
  'Tô jogando junto na minha cabeça. Tô ganhando',
  'Nunca confia em palavra que parece fácil demais',
  'Pensa muito no mesmo grupo e o cérebro dá tela azul',
  'Amarelo é o fácil, roxo é o cruel, verde e azul são os filhos do meio',
  'Às vezes eu leio as palavras de trás pra frente. Às vezes tem coisa',
  'Se cê tá jogando no banheiro eu não julgo. Mas eu sei',
  'Sonhei que todas as palavras eram PAÇOCA. Melhor puzzle da vida',
  'Eu e o roxo somos dois incompreendidos',
  'Conexo é tipo encontro às cegas, junta 4 e reza',
  'Se alguém perguntar fala que tá treinando o cérebro, pega bem',
  'Tem gente que joga Conexo com café. Eu jogo com ectoplasma',
  'Palavra do dia: pegadinha. Uso: caí na pegadinha de novo',
  'As palavras ficam se olhando e rindo de você, eu vi',
  'Se eu tivesse mão eu tava roendo a unha por você',
  'Quase fiz um grupo "rima com coração" e botei MAMÃO. Não rima',
  'Todo amarelo é armadilha pra te deixar confiante',
  'Queria um grupo só meu: BUGADO, BUGADO, BUGADO, BUGADO',
  'Se fosse novela o roxo era a vilã que finge ser boazinha',
  'Palavra de dois grupos é aquele amigo que tá em dois grupos do zap',
  'Na minha vez:<br>o roxo era fácil<br>a passagem era 2 reais<br>ninguém errava',
  'Te ver hesitando antes do Enviar é meu programa favorito',
  'Se o Conexo fosse o Mineirão lotado cê já tava sendo vaiado KKKK'
];

Bugado.addLines(L); window.CX_ALL = Object.assign(window.CX_ALL || {}, L);
})();
