/* Falas do Bugado na Ponte.
   Variáveis (já chegam em negrito quando são palavras):
   {a} palavra de partida, {b} alvo, {palavra} palavra digitada, {de} palavra anterior da ponte,
   {n} posição da palavra na lista da anterior, {k} limite de conexão (ou uma contagem),
   {dist} distância nova até o alvo, {antes} distância anterior, {par} par do desafio,
   {passos} passos usados, {dia} número do diário, {ultima} ponta da ponte, {orig} o que a pessoa digitou. */
(() => {
const L = {

/* ---------- carregando o arquivão ---------- */
pnCarregando: [
  'Carregando as palavras... é tijolo pra ponte, 16 mil tijolos',
  'Pera que eu tô medindo a distância entre todas as palavras',
  'Baixando o mapa das palavras, calma aí',
  'Calma engenheiro, primeiro o material, depois a obra',
  'Ligando os pontos. É ponto demais mano',
  'São 4,8 mega de parentesco entre palavra, tem primo que não acaba mais',
  'Esquentando a betoneira... vrum',
  'Se cê já jogou o Contexto isso aqui é rapidinho',
  'Enchendo o caminhão de palavra, caiu uma na curva',
  'Montando o canteiro de obra, capacete é opcional',
  'Vendo quem é vizinho de quem, fofoca de dicionário',
  'Conferindo se "gato" ainda mora perto de "cachorro". Mora',
  'Baixando vetor. Vetor é tipo seta, eu sou tipo gato, a gente se entende',
  'Carregando mais devagar que o Move na hora do rush',
  'Separando as palavras por bairro, tem bairro chique e tem "boleto"',
  'Descarregando o sentido das palavras, é frágil, cuidado',
  'Desenrolando a corda da ponte. Tem nó, sempre tem nó',
  'Se a internet for de pedal, pedala mais rápido aí',
  'Terraplanagem do vocabulário, máquina pesada trabalhando',
  'Contando as palavras: uma, duas, 16 mil. Tô na metade ainda'
],

/* ---------- início do desafio ---------- */
pnInicio: [
  'De {a} até {b}. Bora construir essa ponte',
  'O rio separa {a} de {b}. Cê é o engenheiro, eu sou o fiscal chato',
  '{a} pra {b}? Longe mano. Por isso que é bom',
  'Sai de {a}, chega em {b}. No meio é tua cabeça',
  'Sair de {a} e chegar em {b} só com palavra que tem a ver uma com a outra',
  '{a} e {b}. Já vi ponte mais doida, não muito mais',
  '{a} de um lado, {b} do outro. Liga os dois sem cair no rio',
  'Começa em {a}. O que tem a ver com {a}? Vai puxando até {b}',
  '{b} tá lá do outro lado e não vai vir até você não',
  'De {a} a {b}, cada palavra é uma tábua. Não pisa em tábua podre',
  'A obra hoje é {a} até {b}. O prefeito quer inaugurar hoje ainda',
  '{a} e {b}, casal improvável. Bora apresentar um pro outro',
  'Transformar {a} em {b} só associando ideia, tipo conversa de bar mas com lógica',
  'Liga {a} com {b}. Pensa onde fica, pra que serve, quem usa',
  'Apostei que cê faz {a} até {b} em poucas palavras, não me faz perder dinheiro',
  '{a} até {b}. Parece piada, mas é trabalho',
  'Primeira tábua é {a}. Agora escolhe a próxima com cuidado',
  'De {a} pra {b} sem GPS, só na associação',
  '{b} tá esperando do outro lado. Ele é paciente, eu não',
  'De {a} até {b}. Quanto menos palavra, mais bonito',
  '{a} e {b}. Eu faço em poucos passos, e cê?',
  'Obra liberada: {a} até {b}. Assina aqui o termo',
  'Cada palavra tem que ter a ver com a anterior. De {a} até {b}, vai',
  '{a} lá, {b} cá. Ou o contrário, sou ruim de direção',
  '{a} precisa encontrar {b}. Quase uma novela',
  'Hoje é {a} até {b}. Segura que a ponte balança',
  'Olha o tamanho desse rio entre {a} e {b} mds',
  'Achou caminho curtinho de {a} até {b}? Eu tiro a orelha pra você',
  'Largada em {a}, chegada em {b}. Vambora',
  '{a} e {b} nunca se falaram, cê vai ser o cupido'
],
pnInicioDiario: [
  'Ponte do dia #{dia}: {a} até {b}. Igual pra todo mundo, não passa vergonha',
  'Diário #{dia}: {a} até {b}. Teus amigos tão tentando também',
  'A obra oficial de hoje é {a} até {b}. Tem fiscal olhando, sou eu',
  'Diário #{dia}. Sai de {a}, chega em {b}, depois compara com a galera',
  'Hoje geral tá tentando ligar {a} em {b}',
  'Ponte #{dia}: {a} até {b}. Uma por dia igual vitamina'
],
pnInicioLivre: [
  'Livre: sorteei {a} até {b}. Não gostou? Sorteia outra, não fico ofendido',
  'Treino livre, {a} até {b}. Ninguém olhando, só eu',
  'Saiu do chapéu: {a} até {b}',
  '{a} pra {b}. Vale metade do XP, mas a diversão é inteira',
  'Sorteio feito: {a} até {b}. A roleta tá zoando hoje',
  'Mais uma? {a} até {b}. Viciado né, entendo'
],
pnVoltou: [
  'Voltou. Tá do jeitinho que cê deixou: {k} tábua depois de {a}',
  'O engenheiro voltou do almoço. A obra parou em {ultima}',
  'Ninguém roubou tábua não, a ponta tá em {ultima}',
  'De volta à obra, {ultima} tá te esperando',
  'Sumiu hein. A ponte ficou parada em {ultima}, já tinha pombo morando',
  'Continuando de {ultima}. O alvo é {b}, caso cê tenha esquecido',
  'Acabou o cafezinho? Próxima palavra depois de {ultima}',
  'Tua ponte ficou aqui te esperando. Última tábua: {ultima}'
],

/* ---------- palavra conectou e chegou MUITO mais perto do alvo ---------- */
pnPertoMuito: [
  'Opa, {palavra} deixou {b} bem mais perto. Agora anda',
  'Conectou e esquentou. {b} tá a {dist}, era {antes}. Que salto',
  '{palavra} foi atalho mano, o rio encolheu',
  'Ponte firme e na direção certa, {b} já tá dando tchauzinho',
  'Que tábua boa. De {antes} pra {dist}',
  'Eita {palavra}, ligação esperta. {b} sentiu o cheiro',
  'Pulo gigante de {de} pra {palavra}, o alvo chegou bem mais perto',
  '{palavra} foi certeiro, que isso',
  'A distância despencou pra {dist}, fico até sem assunto',
  'Conectou firme, pode passar de caminhão',
  '{palavra}. Isso que é palavra com propósito',
  'Uau, {dist}. Já dá pra ouvir {b} do outro lado',
  'Direção certa do rio, primeira vez na história KKKK',
  'Esse passo valeu por três, {b} ficou nervoso',
  'Ligação linda entre {de} e {palavra}, e ainda aproximou',
  'Isso! Agora a ponte aponta direitinho pra {b}',
  'Tá esquentando geral, {dist}',
  'Mandou bem demais, quem te ensinou a pensar assim?',
  'Eu ia zoar mas o passo foi bom demais, fica pra próxima',
  'De {palavra} até {b} tá ficando possível, tô sentindo',
  'O engenheiro acordou: {antes} pra {dist}',
  'Tábua de ipê, tábua de lei',
  'Pulo tão bom que vou fingir que era óbvio',
  'Aproximou muito. Continua assim que eu fico sem trabalho',
  'Conectou lindo, o rio te olhou com respeito',
  'Passo gigante. Agora acha a próxima que liga com {b}',
  'Tá chegando, {palavra} foi a ponte dentro da ponte',
  'Olha a distância caindo, {dist}! QUE ISSOOO'
],
/* ---------- conectou e chegou um pouquinho mais perto ---------- */
pnPertoPouco: [
  'Conectou. Chegou um tiquinho mais perto de {b}, tiquinho mesmo',
  'Tábua colocada. Avançou pouco mas avançou',
  'De {antes} pra {dist}. Progresso de tartaruga, mas é progresso',
  '{palavra} liga com {de} sim, e aproximou um pouquinho',
  'Passinho de formiga. Formiga chega, só demora',
  'Tá indo devagar e sempre. Mais devagar que sempre',
  'Andou um pouco. O rio nem percebeu, eu percebi',
  'Aproximou igual quem fala "tô chegando" e ainda tá no banho',
  '{palavra} serve. Não é genial mas não caiu no rio',
  'Um passo pequeno pra ponte e pra humanidade também',
  'Progresso tímido, respeito a timidez',
  'Encostou um pouco mais em {b}, continua puxando o fio',
  'Tá no caminho. Daqui a pouco precisa de uma palavra mais ousada',
  'Ficou {dist}, antes era {antes}. A matemática diz que melhorou',
  'Esquentando igual chuveiro velho, devagarzinho',
  'Melhorou pouco. Eu ia reclamar e vou: foi pouco',
  '{palavra}? Tá no rumo, agora pisa no acelerador',
  'Mais perto sim, mas {b} ainda nem sabe que cê existe',
  'Andou meio metro, a ponte tem uns dez',
  'Esperava um pulo, veio um passinho. Aceito',
  'Se fosse nota era 6, passa de ano',
  'Chegou mais perto, não precisa me olhar esperando palma',
  'Tipo encher piscina com conta-gotas, mas tá enchendo',
  'Boa. Agora tenta uma palavra com mais cara de {b}'
],
/* ---------- conectou, mas se afastou do alvo ---------- */
pnLonge: [
  'Ligou com {de} mas se afastou de {b}. Ponte pro lado errado do rio',
  'A ligação vale, a direção nem tanto. {b} tá em {dist} agora',
  '{palavra} tem a ver com {de} sim. Com {b} nada',
  'Ô engenheiro, o alvo é pra lá',
  'Andou pra trás hein, {antes} pra {dist}. Desfazer é de graça',
  'Essa tábua aponta pra outra cidade, quer dar ré?',
  'A ponte tá fazendo curva. Bonita, mas curva',
  '{palavra} esfriou tudo, {b} tá lá longe tomando sol',
  'Vale, mas é tipo pegar o 330 no sentido contrário',
  'Tá passeando? {b} tá chamando do outro lado',
  'Um passo pra frente e dois pra trás',
  'Eu entendi a lógica de {palavra}. {b} não entendeu',
  'Mais longe. Às vezes precisa dar a volta, às vezes é erro mesmo',
  'Isso é desvio. Se for estratégia me explica depois',
  'Longe do alvo mano, longe de tudo',
  'Caminho turístico, {dist} até {b}. Aproveita a vista',
  'Passo de lado. Ponte não anda de lado não',
  'Mais longe, mas pelo menos a ponte tá de pé',
  'Tá cavando túnel? {b} ficou pra trás',
  'Vou fingir que isso é um plano genial de longo prazo',
  'O botão de desfazer tá te olhando com carinho',
  'Subiu pra {dist}. Isso é ruim, vou ser sincero',
  'Ligou mas desandou, tipo bolo que não cresce',
  'Eu não te julgo, o placar julga',
  '{palavra} te levou pra outro bairro, {b} mora do outro lado da cidade'
],
/* ---------- conectou e ficou quase ligando com o alvo ---------- */
pnQuaseLa: [
  'Tá quase! {b} tá em {dist} na lista de {palavra}, precisa ser até {k}',
  'Pertinho, mais uma palavra certa e fecha',
  'Já tô ouvindo {b} do outro lado. Uma tábua, UMA',
  'Tá na beirada, a próxima pode ser a última',
  'Falta pouco pra {b} entrar na roda, pensa numa que puxe',
  'Isso tá com cheiro de vitória. Ou é meu almoço',
  'Tão perto que {b} já tá acenando',
  'O quase é o melhor momento. E o mais tenso',
  'Mais um passo. Pensa no que tem TUDO a ver com {b}',
  'A ponte tá quase encostando, não vacila agora',
  'A um fio de conectar, puxa esse fio',
  'Distância {dist}, o limite é {k}. Bora bora',
  'Tô prendendo a respiração aqui. Nem respiro, mas tô prendendo',
  'Se a próxima for boa fecha. Sem pressão KKKK'
],
/* ---------- a ligação foi óbvia (top 5) ---------- */
pnLinkForte: [
  '{de} e {palavra}? Essa foi fácil, cimento armado',
  'Óbvio demais, {palavra} tá em {n}º na lista de {de}. Arroz com feijão',
  'Essa ligação até eu fazia',
  'Posição {n}, firme igual rocha',
  'Clássico, {de} e {palavra}. Nem pensou né',
  'Muito conectado, os dois são praticamente casados',
  '{palavra} é quase sinônimo de {de}. Vale, mas é meio roubado',
  'Ligação tão forte que dá pra pendurar um elefante',
  'Posição {n}, tábua de aço inox',
  'Não arriscou nada hein, engenheiro medroso',
  'Tábua reforçada, nem o INMETRO reclamava',
  '{palavra}, claro. Todo mundo pensaria nisso'
],
/* ---------- a ligação passou raspando ---------- */
pnLinkFraco: [
  'Passou raspando, {palavra} ficou em {n} na lista de {de}. O limite é {k}',
  'Conectou por um fio. Eu vi o fio tremendo',
  'Essa tábua range mas aguenta. Acho',
  'Ligação criativa hein, quase caiu no rio',
  'Posição {n}, quase ficou de fora',
  'Aceito, mas com muita ressalva',
  'O júri brigou e aprovou, por pouco',
  'De {de} pra {palavra}? Explica pro júri. Tá, passou',
  'No limite, tipo pagar boleto no último dia',
  'Rangeu e balançou mas segurou, engenharia de risco',
  'Forçada mas vale, tipo parente de terceiro grau no churrasco',
  'Entrou pela janela mas entrou, {n} de {k}',
  'Passou na trave, conectado por um triz',
  'Eu não teria coragem. Cê teve e deu certo'
],
/* ---------- NÃO conectou: ficou longe ---------- */
pnNaoLonge: [
  '{palavra} ficou em {n} na lista de {de}. Longe demais, tem que ser até {k}',
  'Não liga. {palavra} e {de} nem se conhecem, {n}',
  'Tábua caiu no rio: {n} na lista de {de}, o limite é {k}',
  'Que ligação é essa mano? {n}',
  '{palavra} com {de}? Nem no Facebook eles são amigos',
  'Muito longe, {n}. Cada palavra tem que ter a ver com a anterior, lembra?',
  '{de} olhou pra {palavra} e fingiu que não viu',
  'Posição {n}. Isso é salto com vara, não ponte',
  'Ousado demais, {n}',
  'Tá tentando pular o rio inteiro de uma vez? Vai por partes',
  'Nada a ver, e eu digo NADA',
  '{palavra} tá em {n} na lista de {de}, precisa tá entre as {k} primeiras',
  'Não. Pensa em algo que aparece JUNTO com {de} numa conversa',
  'Precisava de binóculo pra ver essa ligação',
  'Não conectou. Não perdeu nada, só contou um erro',
  'Essa ligação só existe na tua cabeça mano',
  'Negativo engenheiro, {n} é longe demais',
  'Forçando a barra, a barra não vai. {n}',
  'Se {de} e {palavra} fossem vizinhos moravam em cidade diferente',
  'O que {palavra} tem a ver com {de}? Nada, o sistema concorda: {n}',
  'Ixe, {n}. Esse caminho não existe no mapa',
  'Tenta uma coisa mais colada em {de}',
  'Tábua de papelão, afundou',
  'Eu entendi tua lógica, as palavras não. {n}',
  'Não passa. Onde fica {de}? Pra que serve? Quem usa?',
  'Reprovado pela engenharia, posição {n}',
  'Adoro criatividade, mas isso é ficção científica. {n}',
  'Longe de {de}. Tem o botão de dica, custa XP mas tem',
  '{palavra} e {de} são água e óleo',
  'Não mano, {n}. Tá maluco'
],
/* ---------- NÃO conectou, mas foi por pouco ---------- */
pnNaoQuase: [
  'Quase! {palavra} ficou em {n} na lista de {de}, precisava até {k}',
  'Passou perto, {n}. Mais um pouquinho de sentido e entrava',
  'Na trave, {palavra} quase liga com {de}',
  'Por pouco. Tenta uma parente mais próxima de {palavra}',
  'Bairro certo, casa errada. {n}',
  'Quase conectou. Quente não vale ponte',
  'Posição {n}, faltou tão pouco que dá raiva',
  'Cê pegou a ideia, mas a palavra ficou meio longe. Tenta um sinônimo',
  '{n}, tá rondando. Aperta mais a ligação',
  'Tábua curtinha, não alcançou',
  'Faltou uns centímetros de sentido, {n}',
  'Quase quase. Pensa numa palavra mais direta',
  'Não entrou mas foi bonito, {n} de {k}',
  'Chegou perto, o VAR olhou e falou não',
  'Uma palavra mais comum pode resolver, essa ficou em {n}',
  'Eu sei o que cê quis dizer, a lista não sabe. {n}'
],
/* ---------- digitou o alvo, mas ainda não liga ---------- */
pnAlvoCedo: [
  'Calma, {b} ainda não liga com {de}. Tá em {n}, precisa de mais ponte',
  'Pular direto pra {b}? Esperto, mas {de} tá longe: {n}',
  'Eu sei que o alvo é {b}, mas não dá pra ir voando. {n}',
  'Ansiedade detectada. {b} tá em {n} na lista de {de}, mais tábua',
  'Pular pro final é tipo ler a última página do livro. {n}',
  'Boa tentativa, mas {b} ainda tá do outro lado do rio',
  'Se desse pra ir direto não tinha jogo né. {n}',
  'Chegou cedo na festa, {b} ainda tá se arrumando',
  'Eu sei onde cê quer chegar, mas falta caminho: {n}',
  'Já quer {b}? Primeiro me traz uma palavra que liga com ele'
],
/* ---------- palavra desconhecida ---------- */
pnDesconhecida: [
  'Não conheço {palavra}. Digitou certo? Não gastou nada',
  '{palavra}? Isso existe? No meu dicionário não',
  'Nunca ouvi falar de {palavra} e eu ouço muita coisa',
  'Palavra misteriosa, tenta outra',
  '{palavra} não tá nas minhas 16 mil',
  '{palavra} cê inventou agora né',
  'Erro de digitação ou invenção? De qualquer jeito, não conheço',
  'Nome próprio e gíria muito nova eu não sei, tenta outra',
  'Meu dicionário deu tela azul com {palavra}',
  '{palavra}? Aqui é português uai',
  'Essa eu não conheço nem de vista',
  'Se {palavra} é palavra, ninguém me avisou',
  'Procurei {palavra} até debaixo do sofá, não achei',
  'Sei muita coisa inútil e {palavra} não tá no meio',
  'Tenta no singular ou sem gíria, {palavra} eu não reconheço',
  'Palavra fantasma, e olha que o fantasma aqui sou eu'
],
/* ---------- palavra repetida ---------- */
pnRepetida: [
  '{palavra} já tá na ponte, não passa duas vezes no mesmo lugar',
  'Repetiu, {palavra} já foi usada',
  'Andando em círculo? {palavra} já tá aí',
  'Déjà vu, eu já vi {palavra} nessa ponte',
  '{palavra} de novo? Tá com saudade?',
  'Essa tábua já foi pregada, escolhe outra',
  'Repetida. Bonita, mas não pode',
  'Isso já tá na ponte, olha pra baixo. Não olha não, dá medo',
  'Ponte não é rotatória, {palavra} já foi',
  'Quer voltar pra {palavra}? Usa o desfazer',
  'Mesma palavra, mesmo lugar. Loop, eu entendo de loop',
  'Já usou {palavra}, minha memória é de elefante. Elefante bugado'
],
/* ---------- voltando: ficou mais longe do alvo do que a partida ---------- */
pnVoltando: [
  'Epa, agora tá mais longe de {b} que no começo. Ponte ou marcha ré?',
  'Voltando pro ponto de partida com juros',
  'Distância {dist}, pior que {a}. A ponte foi pro rio vizinho',
  'Saiu de {a} e conseguiu ficar mais longe de {b}. Talento',
  'Isso é fuga, {b} tá se sentindo rejeitado',
  'Mais longe que a largada. Desfaz e recomeça',
  'Leu o alvo direito? É {b}',
  'Ré engatada, bip bip bip, cuidado com o poste',
  'Já vi gente se perder, mas de ré é novidade',
  'Indo pra longe de {b} com uma confiança que eu admiro',
  'O GPS tá gritando "recalculando rota"'
],
/* ---------- palavra genérica demais ---------- */
pnGenerica: [
  '{palavra}? Genérica demais, liga com tudo e com nada',
  '{palavra} é tipo responder "depende" na prova, vale mas é preguiça',
  '{palavra}, a palavra coringa. Tô de olho',
  'Tábua genérica de loja de departamento. Serve',
  '{palavra} não diz nada com nada, mas vale',
  'Palavra que serve pra tudo não serve pra muita coisa',
  'Essa é a palavra bege do dicionário',
  '{palavra} é o arroz branco das palavras',
  'Palavra coringa é estratégia ou falta de ideia?',
  'Genérico igual remédio genérico, funciona sem glamour',
  'Palavra vaga igual vaga de estacionamento, sempre tem',
  'Com {palavra} cê não faz ponte, faz neblina'
],
/* ---------- palavra de ligação (que, para, com...) ---------- */
pnFuncao: [
  '{palavra} é palavra de ligação, quero palavra de verdade',
  '{palavra} não vale. Tem que ter sentido sozinha',
  'Palavrinha de gramática não segura peso. Manda substantivo, verbo, qualquer coisa',
  '{palavra} é cola, não é tijolo',
  'Esperto, mas palavra de ligação não entra',
  'Só entra palavra que significa alguma coisa sozinha',
  'Tábua invisível, {palavra} não serve',
  'Não aceito {palavra} nem com propina'
],
/* ---------- entrada inválida ---------- */
pnInvalida: [
  'Uma palavra só, só com letra. Sem número, sem frase',
  'Isso é código mano, manda uma palavra',
  'Frase inteira não cabe, uma palavra por tábua',
  'Tem símbolo ou espaço aí, só letra',
  'UMA palavra. Uma',
  'Não entendi. Manda uma palavrinha só'
],
/* ---------- plural / flexão ---------- */
pnPlural: [
  'Entendi {orig} como {palavra}, singular é mais leve',
  'Plural? Virou {palavra}, menos peso na ponte',
  '{orig} virou {palavra}, faço de graça',
  'Botei como {palavra}, o plural ficou na portaria',
  'Vou considerar {palavra} tá? Uma de cada vez',
  'Tirei o S de {orig}, guardei pra depois'
],
/* ---------- muitas tentativas sem conectar ---------- */
pnTentativas: [
  'Já são {k} tentativas sem ligar. Pensa mais perto de {de}',
  '{k} tábuas no rio seguidas, os peixes agradecem',
  'Tá difícil sair de {de} né? Tenta uma BEM óbvia',
  '{k} erros seguidos. Sinônimo, lugar ou pra que serve, tenta isso',
  'Se {de} tá te travando, desfaz e vai por outro caminho',
  '{k} tentativas. Tem o botão de dica ali, só falando',
  'Tá pulando longe demais, vai no pertinho de {de}',
  'Palavra comum liga mais fácil, confia',
  '{k} tentativas, persistente hein',
  'O que aparece junto com {de} num texto? Pensa nisso',
  'Ô dó, {k} seguidas. Quer desfazer e ir por outro lado?',
  'Pensa no que uma criança falaria sobre {de}'
],

/* ---------- dica ---------- */
pnDica: [
  'Toma: {palavra}. Liga com {de} e chega mais perto de {b}',
  'Dica: {palavra}. Custou XP, a ponte agradece',
  'Tá bom, botei {palavra} pra você. Fica entre nós',
  'Eu pensei em {palavra}, por isso que eu sou o mascote',
  'Olha que tábua boa: {palavra}',
  'Dica entregue: {palavra}. Continua daí',
  'Botei {palavra}. Cobro barato, só um pouco de XP e tua dignidade',
  'Te empurrei pra {palavra}, daqui já dá pra ver {b}',
  '{palavra}. Cê ia pensar nisso? Agora tanto faz',
  'Ajudinha: {palavra}. Doeu só no XP',
  'Vai por {palavra}, confia no gato',
  'Dica: {palavra}, liga com {de}. O resto é contigo',
  'Te dei {palavra}, usa direito',
  'Travou? Toma {palavra}, destrava igual óleo na dobradiça'
],
pnDicaMuitas: [
  'Mais uma dica? Daqui a pouco quem tá jogando sou eu',
  '{k} dicas, a ponte tá ficando com a minha cara',
  'Tá, mais uma: {palavra}. Mas vou botar meu nome na placa',
  'Dica número {k}, eu devia cobrar pedágio',
  'Toma {palavra}. Essa ponte vai virar patrimônio do Bugado',
  'Cê pede dica igual pede ketchup, sem vergonha. Toma {palavra}',
  '{k} dicas, o XP chorou. Toma {palavra}',
  'Eu faço a ponte e cê leva a fama. Toma {palavra}'
],
pnDicaNada: [
  'Nem eu achei palavra melhor daqui. Desfaz uma e tenta outro caminho',
  'Daqui não vejo saída boa, volta uma tábua',
  'Travou até meu cérebro. Tenta desfazer'
],

/* ---------- desfazer ---------- */
pnDesfazer: [
  'Tábua removida. Ninguém viu, só eu, e eu conto pra geral',
  'Desfez {palavra}. Arrepender faz parte',
  'Voltou pra {de}. Às vezes dar ré é o caminho',
  'Tirei {palavra}, reforma de obra, normal',
  'Desfazer é de graça, usa sem culpa',
  'Tchau {palavra}, cê foi uma tábua... presente',
  'De volta em {de}. Pensa num caminho melhor',
  'Ctrl+Z na vida real ia ser bom demais',
  'Removido, a ponte agradece o bom senso',
  'Deu ré, bip bip, tá livre',
  '{palavra} foi demitida da ponte',
  'Arrancou {palavra}, o rio tá rindo',
  'Voltar também é andar. Mais ou menos',
  'Refazendo o caminho? Caprichoso hein',
  'Sem {palavra}. Próxima a partir de {de}',
  'Desfeito. Fingi que não vi {palavra}'
],
pnDesfazerMuito: [
  'Desfazendo mais que fazendo, a ponte virou gangorra',
  'Isso é obra pública: começa, para, desmancha, recomeça',
  'Desfez de novo? Indeciso igual eu escolhendo lanche',
  'Essa ponte já foi feita e desfeita tanto que virou lenda',
  'Procurando o caminho perfeito né, respeito',
  'Mais uma ré, o caminhão tá sem freio de mão'
],

/* ---------- vitória ---------- */
pnVitoriaAbaixo: [
  'ABAIXO DO PAR. {passos} passos e o par era {par}, gênio ou roubou?',
  'Birdie! Menos passo que o par, tô com inveja',
  'Fez em {passos}, o par era {par}. Cê conhece as palavras melhor que eu',
  'Abaixo do par, isso é teletransporte',
  'Que atalho foi esse? Menos que {par}, ensina',
  'Bateu meu caminho. Preciso de um minuto sozinho',
  'Ponte curtinha e firme, engenharia de outro planeta',
  'Abaixo do par, se fosse golfe cê ganhava a jaqueta verde',
  'Eu calculei {par}, cê fez {passos}. Quem é o computador aqui?',
  'Vou mandar recalcular. Não precisa, cê é bom mesmo',
  'Menos passo que o previsto, a ponte vai ter teu nome',
  'QUE ISSOOO achou atalho que nem eu vi',
  '{passos} passos, a ponte mais econômica do fliperama',
  'KJJJJJ abaixo do par, tá maluco'
],
pnVitoriaPar: [
  'No par! {passos} passos, igualzinho meu cálculo',
  'Par cravado, nem um passo a mais',
  'Ponte fechada em {passos}, é o par. E o par é ótimo',
  'No par, tipo chegar na hora certa, raríssimo',
  'Exatamente {par}, cê pensa igual eu. Preocupante',
  'Par. Obra entregue no prazo',
  'No par, pode passar de carro',
  'Cravou o par, se tivesse carteira de engenheiro era tua',
  'Ponte no par, tô orgulhoso. Fica entre nós',
  '{passos} passos, nem mais nem menos',
  'Par. Consistência, eu não tenho mas admiro',
  'Fechou certinho no par, sem enrolação'
],
pnVitoriaAcima: [
  'Chegou! {passos} passos, o par era {par}. Deu uma voltinha mas chegou',
  'Ponte pronta. Umas curvas, mas atravessa',
  'Bogey. Não é o ideal, mas tá de pé',
  'Fechou em {passos}, par {par}. Passeiozinho a mais não mata ninguém',
  'Chegou em {b} com volta turística incluída',
  'Gastou mais tábua que o previsto, obra pública né',
  'Conseguiu, com uns passos extras mas conta igual',
  'Atravessou. Próxima tenta cortar caminho',
  '{passos} passos. Eu fiz em {par}, mas eu sou meio computador',
  'A ponte ficou meio torta, mas tem charme',
  'Não foi o caminho mais curto, foi o teu',
  'Um pouco acima do par, mas ainda na ponte'
],
pnVitoriaMuitoAcima: [
  'Chegou depois de {passos} passos, o par era {par}. Ponte ou rodovia?',
  'Ufa, conectou. Essa ponte dá a volta no estado',
  'Cê fez a ponte mais longa do fliperama, recorde. Não dos bons',
  'Atravessou. De barco chegava antes, mas atravessou',
  'Chegou em {b}. Demorou 700 séculos mas foi',
  'Vitória com tábua sobrando, muita tábua',
  '{passos} passos, isso é ponte ou labirinto?',
  'Vitória suada, cheia de curva, mas vitória',
  'O orçamento estourou mas a ponte tá pronta',
  'O importante é chegar. Os {passos} passos a gente esquece'
],
pnVitoriaDica: [
  'Chegou, com um empurrãozinho meu mas chegou',
  'Tem tábua minha aí, metade da glória é minha',
  'Eu ajudei mas quem pisou foi você',
  'Vitória com dica. Conta igual, só vale menos XP',
  'A placa vai ter dois nomes: o teu e o meu, o meu maior',
  'Atravessou de muleta, mas atravessou',
  'Eu dei a dica, cê deu o trabalho. Parceria'
],
pnDesistiu: [
  'Desistiu. Olha aí embaixo como eu faria',
  'Rio largo mesmo, te mostro um caminho',
  'Deixa comigo. Olha a ponte que eu faria',
  'Desistir faz parte. O caminho tá aí embaixo',
  'A ponte caiu, o engenheiro sobreviveu. Olha a solução',
  'Dava pra ir por aqui, tá vendo?',
  'Tudo bem, até ponte famosa demorou anos. Olha meu caminho',
  'Aprende meu caminho e se vinga no próximo',
  'Rio 1 x 0 Engenheiro. Revanche amanhã',
  'Sem ponte hoje, mas agora cê sabe o atalho'
],
pnDesistirPergunta: [
  'Vai largar a obra no meio? O rio vai rir de você',
  'Certeza? Às vezes a próxima palavra é a certa',
  'Desistir é fácil. Tentar mais uma é mais fácil ainda',
  'Se eu mostrar o caminho não tem volta hein',
  'A dica é mais barata que a vergonha, só falando',
  'Essas horas é respirar e ter paciência, tá maluco',
  'Desistir? Vou contar pro mascote do Sudoku',
  'Se desistir {b} fica sozinho do outro lado, coitado'
],
pnDiarioFeito: [
  'O diário de hoje já foi. Quer mais? Tem o livre',
  'Ponte do dia pronta. Volta amanhã ou joga livre',
  'Hoje já deu, mas o livre nunca fecha',
  'Diário feito. Compartilha e se exibe',
  'Obra de hoje entregue, tem mais no livre',
  'Já fez o de hoje. Amanhã eu invento outra ponte doida',
  'Diário feito. Fico aqui esperando amanhã, sozinho, no escuro',
  'Ponte diária no bolso. Bora pro livre?'
],
pnPrimeira: [
  'Primeira tábua! Toda ponte começa assim',
  'Primeira palavra no lugar, agora é repetir isso umas vezes',
  'Começou. O primeiro passo é o mais difícil, o último também',
  'Primeira tábua pregada, sentiu a vibe de engenheiro?'
],
pnMeiaPonte: [
  'Já são {k} tábuas, a ponte tá ficando comprida',
  '{k} passos e contando. O par era {par}, só lembrando',
  'Passou do par hein. Ainda dá pra chegar bonito',
  'Essa ponte tá tão longa que vou precisar de mapa',
  '{k} palavras. Ponte ou livro?',
  'Tá dando volta. Pensa no que tem a ver com {b} direto'
],

/* ---------- mascote cutucado ---------- */
cutucarPonte: [
  'Ei, eu sou o fiscal da obra, não cutuca o fiscal',
  'Cutucar o mascote não aproxima o alvo, já testei',
  'Para de me cutucar e bota tábua nessa ponte',
  'Ai! Isso não é palavra, é agressão',
  'Se eu cair no rio quem vai zoar tuas palavras?',
  'Tô de capacete invisível, pode cutucar. Não, não pode',
  'Cutucada registrada, posição 15.999 de utilidade',
  'Cutucar o gato não conecta nada',
  'Eu sou a ponte entre você e a diversão, me respeita',
  'Isso foi dica? Não, foi cutucão',
  'Tem tempo pra me cutucar, tem tempo pra pensar numa palavra',
  'Ô, eu tava calculando gato até boleto, perdi a conta',
  'Cutuca de novo e eu desfaço tua última tábua, tô falando sério',
  'Eu não sou tábua, não precisa testar se aguento peso',
  'Tá sem inspiração? Olha pro alvo, não pra mim',
  'Cada cutucada é uma palavra que cê não digitou',
  'Tô trabalhando, fiscalizar ponte cansa',
  'Mais uma e eu chamo o sindicato dos mascotes',
  'Cócega! Fantasma não sente cócega. Eu sinto, sou bugado',
  'Oi. Esqueceu o alvo? Tá lá na ponta',
  'Travou né, eu sei, eu vejo',
  'Ponte liga com rio, rio com peixe, peixe com gato. Eu sou o gato, tô na ponte',
  'Que dedo pesado mano, tá construindo ou demolindo?',
  'Procurando atalho em mim? Sou beco sem saída',
  'Não tenho resposta no bolso. Tenho. Não conto',
  'Mais um cutucão e eu viro palavra genérica',
  'Olha a obra, olha a obra, cuidado aí',
  'Cutucando pra eu mudar de ideia? Eu nunca tive ideia',
  'Ai ai ai, isso é jeito de tratar o engenheiro-chefe?',
  'Fiscal não se cutuca, se suborna',
  'O que liga com cutucar? Irritar. Posição 3, aposto',
  'Tô de olho na ponte e em você, nos dois',
  'Cuidado, se eu glitchar a ponte glitcha junto',
  'Tá bom, tá bom, oi. Satisfeito?',
  'Toda vez que cê me cutuca uma tábua range em algum lugar',
  'Sou fofo mas sou profissional, não entrego caminho',
  'Me cutucar não tem par, mas se tivesse cê tava muito acima',
  'Igual apertar botão de elevador várias vezes, não adianta',
  'Psiu, o rio tá ouvindo',
  'Isso é ponte ou parquinho? Foco',
  'Tava dormindo em pé, agora acordei. Valeu?',
  'Vou cobrar pedágio por cutucada, 5,75 igual a passagem'
],

/* ---------- tagarelice temática (soma no 'aleatorio' geral) ---------- */
pnAleatorio: [
  'A ponte mais longa do mundo tem mais de 160 km. A tua não precisa tanto',
  'Ponte e pontífice são parentes, o papa é construtor de ponte. Eu também',
  'Todo mundo tá a seis apertos de mão de qualquer um. Palavra também, mais ou menos',
  'Queria ser ponte levadiça, sobe e desce, vida simples',
  'Quantas pontes existem entre pizza e felicidade? Muitas, todas curtinhas',
  'Ponte de corda balança, ponte de palavra fraca também',
  'Se eu fosse palavra eu era "bug". Minha ponte até "perfeito" ia ser longa demais',
  'Tem palavra que liga com tudo, tipo aquele amigo que conhece geral na festa',
  'Engenheiro usa cálculo, cê usa intuição, eu uso bug',
  'O cérebro guarda palavra em rede. A tua tá com wi-fi fraco hoje?',
  'Ponte de sogra até vulcão é sempre rápida. Fica o mistério',
  'Toda palavra é ponte pra outra. Eu sou ponte pro tédio',
  'A Golden Gate é vermelha, tua ponte é da cor que eu quiser. Azul, óbvio',
  'Se gato liga com rato e rato liga com queijo, eu gosto de queijo? Gosto',
  'Ponte boa ninguém nota. A tua eu noto muito KKKK',
  'Dizem que existe uma palavra que liga com todas. Acho que é "coisa"',
  'O rio embaixo da ponte não tá nem aí pro teu par. Eu tô',
  'Eu não sei nadar, por isso sou chato com ponte',
  'Gato, fantasma, bug, eu. Viu? Ponte curtinha',
  'Tem gente que atravessa ponte correndo, eu atravesso flutuando',
  'Quem inventou a ponte tava com preguiça de nadar. Respeito',
  'Saudade liga com tudo que cê perdeu. E com churrasco, sei lá pq',
  'A ponte mais curta às vezes é a mais óbvia, às vezes a mais doida',
  'Tentei ligar segunda-feira até alegria. Não achei caminho',
  'Empilhar o dicionário inteiro dá ponte até a Lua? Não. Dá dor de cabeça',
  'O castor faz ponte sem estudar nada. Cê também. Parabéns castor',
  'Toda palavra tem vizinho, umas têm vizinho barulhento',
  'Fiz uma ponte de boleto até felicidade. Passava por "pago". Nunca usei',
  'Ponte romana dura 2 mil anos, minhas piadas duram 2 segundos',
  'Ponte tá perto de rio, estrada e feriado. Ponte de feriado é a melhor',
  'Queria uma ponte do sofá até a geladeira',
  'Pra atravessar rio o melhor é ter amigo com barco. Eu tenho você, e cê não tem barco',
  'Enquanto cê pensa eu conto tábua. Uma, duas... perdi',
  'Palavra rara às vezes faz atalho, palavra comum faz caminho seguro',
  'Lágrima até chuva é poesia. Pastel até astronauta é bagunça',
  'Se a ponte cair a culpa é do vento, sempre é do vento',
  'O caminho entre duas palavras às vezes passa por um lugar, às vezes por um queijo',
  'Dormi numa ponte uma vez, acordei com um peixe me olhando',
  'Entre amor e boleto tem casamento. Não falei nada',
  'Na minha vez:<br>ponte era de cipó<br>o busão era 1 real<br>ninguém tinha boleto',
  'A Rio-Niterói tem 13 km. A fila do 330 às 18h é maior',
  'Pensando em juntar o Sudoku com o Termo. Ia chamar Sudermo. Não'
],
pnParado: [
  'A obra parou? O sindicato vai perguntar',
  'Ô, a ponte tá esperando a próxima tábua',
  'Pensando ou dormindo? Os dois valem, mas só um faz ponte',
  'Travou? O que tem a ver com a última palavra? Qualquer coisa serve',
  'O alvo tá com frio do outro lado do rio',
  'Tenta uma palavra bem simples, tipo de criança',
  'Silêncio na obra. Concentração ou cafezinho?',
  'Tô aqui esperando, olhando pro rio, pensando na vida',
  'Travou? Tem dica, tem desfazer. Me cutucar não ajuda',
  'Alguém viu o engenheiro? Sumiu',
  'Pensa onde a última palavra fica, ou pra que serve',
  'Tá demorando tanto que o rio mudou de curso'
],

/* ---------- combinações engraçadas de partida/alvo (temas) ---------- */
pnCombo_animal_espaco: [
  'Bicho indo pro espaço, a cachorrinha Laika aprova',
  'Um bicho querendo ir pro espaço, que ambição',
  'Do mato pras estrelas, vai precisar de foguete'
],
pnCombo_animal_comida: [
  'Bicho até comida? Final meio suspeito essa ponte',
  'Bicho pra comida, não vou comentar',
  'Do pasto pro prato, pesado. É só palavra, relaxa'
],
pnCombo_animal_profissao: [
  'Bicho querendo emprego, a crise tá feia até no zoológico',
  'Se gato pode ser mascote, bicho pode ter profissão',
  'Carteira assinada pra bicho, adoro'
],
pnCombo_animal_objeto: [
  'Bicho até objeto? Espero que não seja o que eu tô pensando',
  'Bicho até coisa de casa, esse aí vai se mudar',
  'Do bicho pro objeto, meio Toy Story'
],
pnCombo_comida_profissao: [
  'Comida até profissão, vai trabalhar de barriga cheia',
  'Da comida pro emprego, o vale-refeição manda lembrança',
  'O normal é trabalho e depois comida, mas beleza'
],
pnCombo_comida_espaco: [
  'Comida no espaço? Astronauta come tudo de tubinho, triste',
  'Da cozinha pro espaço, receita que vai longe',
  'Imagina pizza sem gravidade'
],
pnCombo_comida_sentimento: [
  'Comida até sentimento. Faz sentido, comida é sentimento',
  'Da barriga pro coração, quase declaração de amor',
  'Comida e sentimento. Fome conta como sentimento?'
],
pnCombo_sentimento_objeto: [
  'Sentimento até objeto, poesia de ímã de geladeira',
  'Do coração pra gaveta',
  'Sentimento virando coisa, propaganda faz isso todo dia'
],
pnCombo_sentimento_animal: [
  'Sentimento até bicho? Todo pet é um sentimento com pelo',
  'Da emoção pro zoológico, adorei',
  'Sentimento virando bicho, explica meu humor'
],
pnCombo_profissao_fantasia: [
  'Profissão até fantasia, alguém tá precisando de férias',
  'Da carteira de trabalho pro conto de fadas',
  'Todo mundo sonha em largar tudo e virar mago'
],
pnCombo_fantasia_comida: [
  'Criatura mágica até comida, esse monstro tá com fome',
  'Até dragão precisa almoçar',
  'Magia até comida, receita de bruxa, cuidado'
],
pnCombo_corpo_objeto: [
  'Parte do corpo até objeto, melhor nem perguntar',
  'Meio médico, meio loja de ferragem',
  'Corpo até objeto, espero que não seja cirurgia'
],
pnCombo_veiculo_animal: [
  'Veículo até bicho, tomara que não seja atropelamento',
  'Do motor pro focinho',
  'Transformers do zoológico'
],
pnCombo_lugar_sentimento: [
  'Todo lugar tem um sentimento. Fila de banco: ódio',
  'De um lugar pra um sentimento, memória afetiva',
  'Lugar e sentimento, saudade de lá né'
],
pnCombo_clima_comida: [
  'Clima até comida, dia de chuva pede comida quente',
  'Frio pede sopa, calor pede sorvete. Fácil? Veremos',
  'Previsão do tempo com cardápio'
],
pnCombo_musica_animal: [
  'Música até bicho. Passarinho canta, gato mia, eu desafino',
  'Ponte com trilha sonora',
  'Tem bicho que canta melhor que muita banda'
],
pnCombo_esporte_comida: [
  'Esporte até comida, primeiro queima depois come',
  'Do campo pra mesa, churrasco pós-jogo, conheço',
  'Esporte e comida, a dieta foi pro saco'
],
pnCombo_familia_fantasia: [
  'Parente até criatura fantástica? Não vou citar nome. Sogra',
  'Parente até monstro, tem família que já é assim',
  'Toda família tem uma bruxa'
],
pnCombo_objeto_espaco: [
  'Objeto até o espaço, vai de foguete',
  'Uma coisinha de casa até o espaço, ambição',
  'Objeto no espaço vira lixo espacial, cuidado'
],
pnCombo_casa_natureza: [
  'Da casa pra natureza, alguém precisa sair do sofá',
  'Isso aí é o que chamam de fim de semana',
  'Sai de casa, vai pro mato, ponte de férias'
],
pnCombo_mesmoTema: [
  'Tudo do mesmo assunto? Parece fácil, aí que mora o perigo',
  'Mesma família de palavra mas longe, tipo primo de outro estado',
  'Parece perto né? O par diz que não é tanto'
]
};

/* temas das palavras de partida/alvo (pra escolher as falas de combinação) */
const T = {
  animal:'gato cachorro cavalo vaca boi porco galinha galo pato peru coelho rato macaco leão tigre onça elefante urso lobo raposa tartaruga sapo peixe tubarão baleia camarão formiga abelha mosca mosquito borboleta aranha pássaro papagaio coruja águia ovelha cabra dinossauro',
  fantasia:'dragão vampiro fantasma bruxa sereia zumbi robô alienígena monstro fada gigante anão mago magia tesouro pirata',
  comida:'arroz feijão pão queijo leite café chá bolo pizza chocolate sorvete pipoca banana maçã laranja uva morango abacaxi melancia limão coco tomate batata cenoura cebola alho alface milho ovo carne frango salada sopa macarrão hambúrguer sanduíche biscoito bolacha doce açúcar sal pimenta mel manteiga azeite vinho cerveja suco refrigerante cachaça churrasco feijoada pastel brigadeiro pudim torta presunto iogurte farinha mandioca abóbora pepino cereja amendoim castanha maracujá bala farofa requeijão mussarela vitamina beijinho',
  objeto:'mesa cadeira cama sofá porta janela chave relógio telefone celular computador televisão rádio livro caderno caneta lápis tesoura faca garfo prato copo xícara panela geladeira fogão forno espelho escova sabonete toalha travesseiro lâmpada vela bolsa mochila carteira moeda óculos chapéu boné sapato tênis camisa calça vestido saia casaco jaqueta gravata anel brinco pulseira bola boneca brinquedo balão quadro pincel tinta martelo parafuso serra escada corda balde lixo caixa garrafa lata saco envelope carta jornal revista mapa bandeira coroa espada escudo arma bomba cortina tapete almofada armário gaveta prateleira estante liquidificador ventilador colchão lençol pijama sandália bota cinto luva cachecol baralho biquíni mala fralda berço esponja detergente baú sino apito máscara',
  espaco:'foguete planeta lua sol estrela céu universo galáxia astronauta eclipse alienígena',
  profissao:'médico enfermeiro professor policial bombeiro advogado juiz padre pastor cozinheiro garçom motorista piloto soldado cantor ator atriz palhaço pintor escritor jornalista fotógrafo engenheiro arquiteto dentista veterinário pedreiro agricultor pescador marinheiro cientista detetive ladrão rei rainha príncipe princesa presidente prefeito jogador goleiro árbitro cabeleireiro programador',
  veiculo:'avião helicóptero barco navio carro ônibus caminhão moto bicicleta trem metrô táxi ambulância submarino trator pneu motor gasolina',
  lugar:'casa escola hospital igreja praia montanha floresta cidade campo fazenda rua praça parque supermercado padaria farmácia restaurante hotel aeroporto estação estádio cinema teatro museu biblioteca prisão castelo palácio ilha deserto cozinha banheiro sala jardim quintal garagem piscina academia zoológico circo cemitério favela bairro país pirâmide templo catedral mesquita moinho torre prédio cabana lanchonete bar faculdade universidade colégio creche porto cais',
  natureza:'rio lago mar oceano cachoeira vulcão caverna chuva neve gelo vento tempestade fogo fumaça terra areia lama árvore flor rosa folha grama fruta semente raiz galho pedra cristal terremoto furacão neblina relâmpago',
  corpo:'cabeça olho nariz boca dente língua orelha cabelo barba rosto pescoço ombro braço mão dedo unha perna joelho coração sangue osso pele cérebro estômago barriga costas peito pulmão fígado músculo bigode espinha careca',
  familia:'mãe pai filho irmão avó avô bebê criança amigo namorado esposa marido vizinho tio primo família sogra cunhado padrinho madrinha neto papai',
  sentimento:'amor medo raiva alegria tristeza saudade ciúme vergonha felicidade sono fome dor preguiça esperança sorte paz guerra ódio inveja orgulho coragem beijo abraço sorriso lágrima sonho pesadelo',
  musica:'violão guitarra piano bateria tambor flauta microfone violino saxofone samba forró pagode música dança',
  esporte:'futebol basquete vôlei natação corrida gol campeonato medalha troféu xadrez luta boxe skate jogo',
  clima:'verão inverno outono primavera calor frio'
};
const TEMA = {};
for (const k in T) T[k].split(' ').forEach(w => { if (!TEMA[w]) TEMA[w] = k; });
window.PONTE_TEMA = TEMA;
/* nomes das categorias de combinação: pnCombo_<temaA>_<temaB> (vale nos dois sentidos) */
L.pnCombo_espaco_animal = L.pnCombo_animal_espaco;
L.pnCombo_lugar_natureza = L.pnCombo_casa_natureza;
L.pnCombo_natureza_lugar = L.pnCombo_casa_natureza;

/* aleatórias e "tá parado?" da Ponte somam com as gerais do fliperama */
const F = window.FALAS || {};
const geral = arr => (arr || []).filter(s => !/sudoku/i.test(s));
L.pnParadoTudo = [...geral(F.parado), ...L.pnParado];
Bugado.addLines(L);
Bugado.extendLines({ aleatorio: L.pnAleatorio });
})();
