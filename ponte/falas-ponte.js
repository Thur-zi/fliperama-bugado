/* Falas do Bugado na Ponte.
   Variáveis (já chegam em negrito quando são palavras):
   {a} palavra de partida, {b} alvo, {palavra} palavra digitada, {de} palavra anterior da ponte,
   {n} posição da palavra na lista da anterior, {k} limite de conexão (ou uma contagem),
   {dist} distância nova até o alvo, {antes} distância anterior, {par} par do desafio,
   {passos} passos usados, {dia} número do diário. */
(() => {
const L = {

/* ---------- carregando o arquivão ---------- */
pnCarregando: [
  'Carregando as palavras… é tipo buscar tijolo pra ponte. Dezesseis mil tijolos.',
  'Um instante: tô medindo a distância entre todas as palavras. Com régua de sentido.',
  'Baixando o mapa do significado. Ponte boa precisa de terreno estudado.',
  'Calma, engenheiro. Primeiro o material, depois a obra.',
  'Tô ligando os pontos. São muitos pontos. Eu não sou pago pra isso. Eu não sou pago.',
  'Carregando 4,8 megas de parentesco entre palavras. Tem primo distante que não acaba mais.',
  'Aquecendo a betoneira semântica. Vrum.',
  'Se você já jogou Contexto, isso aqui é instantâneo. Se não, respira fundo.',
  'Enchendo o caminhão de palavras. Uma caiu na curva. Era “parágrafo”. Descansa em paz.',
  'Montando o canteiro de obras. Capacete é opcional, criatividade não.',
  'Estudando qual palavra é vizinha de qual. É fofoca de condomínio, só que de dicionário.',
  'Quase lá. Tô conferindo se “gato” ainda mora perto de “cachorro”. Mora.',
  'Baixando vetores. Vetor é tipo seta. Eu sou tipo gato. A gente se entende.',
  'Paciência: nem a ponte Rio–Niterói ficou pronta em um dia.',
  'Organizando as palavras em bairros. Tem bairro nobre e tem “boleto”.',
  'Descarregando a carga de sentido. Cuidado que é frágil.',
  'Tô desenrolando a corda da ponte. Tem nó. Sempre tem nó.',
  'Carregando… se a internet for de pedal, pedala mais rápido aí.',
  'Terraplanagem do vocabulário em andamento. Máquina pesada trabalhando.',
  'Contando palavras: uma, duas, dezesseis mil. Pronto. Mentira, ainda tô na metade.'
],

/* ---------- início do desafio ---------- */
pnInicio: [
  'De {a} até {b}. Bora construir essa ponte, palavra por palavra.',
  'Hoje o rio separa {a} de {b}. Você é o engenheiro. Eu sou o fiscal chato.',
  '{a} pra {b}? Parece longe. E é. Por isso é divertido.',
  'Partida: {a}. Chegada: {b}. No meio: tua cabeça trabalhando.',
  'Missão: sair de {a} e chegar em {b} só com palavras que têm a ver uma com a outra.',
  'De {a} pra {b}. Eu já vi ponte mais doida. Não muito mais doida, mas já vi.',
  'Olha só: {a} de um lado, {b} do outro. Liga os dois sem cair no rio.',
  'Começa em {a}. Pensa: o que tem a ver com {a}? Vai puxando o fio até {b}.',
  'Tá vendo {b} lá do outro lado? Ele não vem até você. Você vai até ele.',
  'De {a} a {b}. Cada tábua da ponte é uma palavra. Não pisa em tábua podre.',
  'Hoje a obra é {a} → {b}. O prefeito quer inaugurar ainda hoje.',
  '{a}… {b}… que casal improvável. Bora apresentar um pro outro.',
  'Desafio do dia: transformar {a} em {b} por associação de ideias. Tipo conversa de bêbado, mas com lógica.',
  'Liga {a} com {b}. Se precisar de inspiração, pensa em onde fica, pra que serve, quem usa.',
  'Ponte nova: {a} até {b}. Eu apostei que você faz em poucas palavras. Não me faz perder dinheiro.',
  '{a} → {b}. Parece piada. É trabalho.',
  'Primeira tábua já tá lá: {a}. Agora escolhe a próxima com cuidado.',
  'Do {a} pro {b}. Sem GPS, sem atalho, só associação de ideias.',
  'O {b} tá esperando do outro lado do rio. Ele é paciente. Eu não.',
  'Vamos lá: de {a} até {b}. Quanto menos palavras, mais bonito.',
  'Hmm, {a} e {b}. Eu consigo em poucos passos. Você consegue? Mostra.',
  'Ponte {a}–{b} liberada pra obra. Assina aqui o termo de responsabilidade.',
  'Regra de ouro: cada palavra tem que ter a ver com a anterior. De {a} até {b}. Vai.',
  '{a} lá, {b} cá. Ou o contrário. Eu sou ruim de direção, você que se vire.',
  'Chegou o desafio: {a} precisa encontrar {b}. É quase uma novela.',
  'Hoje a gente vai de {a} a {b}. Aperta o cinto que a ponte balança.',
  'Olha o tamanho desse rio entre {a} e {b}. Bora encurtar.',
  'Se você achar um caminho curtinho de {a} até {b}, eu tiro o chapéu. Eu não tenho chapéu. Tiro a orelha.',
  'Tá dada a largada: {a}. A bandeirada é em {b}.',
  '{a} e {b} nunca se falaram. Você vai ser o cupido semântico.'
],
pnInicioDiario: [
  'Ponte do dia #{dia}: {a} até {b}. É a mesma pra todo mundo. Não passa vergonha.',
  'Diário #{dia} na área: {a} → {b}. Teus amigos tão tentando também. Talvez.',
  'A obra oficial de hoje é {a} → {b}. Tem fiscal da prefeitura olhando. Sou eu.',
  'Diário #{dia}! Sai de {a}, chega em {b}. Compara com a galera depois.',
  'Hoje, no mundo inteiro (tá, no teu celular), a ponte é {a} até {b}.',
  'Ponte #{dia}: {a} → {b}. Um diário por dia, igual vitamina.'
],
pnInicioLivre: [
  'Modo livre: sorteei {a} → {b}. Se não gostar, sorteia outra, eu não me ofendo.',
  'Treino livre! {a} até {b}. Aqui ninguém tá olhando. Só eu. Sempre eu.',
  'Ponte aleatória: {a} → {b}. Saiu do chapéu. Do meu chapéu imaginário.',
  'Livre: {a} pra {b}. Vale metade do XP, mas vale inteira de diversão.',
  'Sorteio feito: {a} → {b}. A roleta tá de brincadeira hoje.',
  'Mais uma? {a} até {b}. Viciado, né? Eu entendo.'
],
pnVoltou: [
  'Voltou! Tua ponte tá do jeitinho que você deixou: {k} tábua(s) depois de {a}.',
  'Ah, o engenheiro voltou do almoço. A obra parou em {ultima}.',
  'Deixei tudo no lugar. Ninguém roubou tábua. Tua ponta tá em {ultima}.',
  'Bem-vindo de volta à obra. {ultima} tá te esperando.',
  'Sumiu, hein? A ponte ficou parada em {ultima}. Os pombos já estavam morando nela.',
  'Continuando de {ultima}. Lembra onde queria chegar? {b}. De nada.',
  'Opa, voltou. Pausa pro café acabou. Próxima palavra depois de {ultima}.',
  'Tua ponte tava aqui me esperando. Quer dizer, te esperando. Última tábua: {ultima}.'
],

/* ---------- palavra conectou e chegou MUITO mais perto do alvo ---------- */
pnPertoMuito: [
  'Opa! {palavra} deixou {b} bem mais perto. Agora sim a obra anda.',
  'Conectou E esquentou! {b} tá a {dist} agora. Era {antes}. Que salto.',
  'Isso! {palavra} foi um atalho. O rio encolheu.',
  'Ponte firme e na direção certa. {b} já tá dando tchauzinho.',
  'Que tábua boa! Saiu de {antes} pra {dist}. Engenharia de primeira.',
  'Eita, {palavra}! Essa ligação foi esperta. {b} sentiu o cheiro.',
  'Pulo gigante! De {de} pra {palavra} e o alvo ficou muito mais perto.',
  'Tô impressionado. Pouco, mas tô. {palavra} foi certeiro.',
  'Olha isso: a distância despencou pra {dist}. Assim eu fico sem assunto.',
  'Conectou! Ponte firme. Pode passar de carro. E de caminhão.',
  '{palavra}! Isso é o que eu chamo de palavra com propósito.',
  'Uau, {dist}. Tá quase dando pra ouvir {b} do outro lado.',
  'Boa! Tá indo na direção certa do rio. Pela primeira vez na história.',
  'Esse passo valeu por três. {b} ficou nervoso.',
  'Que ligação linda entre {de} e {palavra}. E ainda aproximou. Chorei.',
  'Isso aí! A ponte agora aponta direitinho pra {b}.',
  'Tá esquentando geral. {dist}. Eu diria “quente”, mas aqui é ponte, não termômetro.',
  'Mandou bem! Quem te ensinou a pensar assim? Não fui eu. Fui eu.',
  'Eu ia fazer piada, mas foi um passo bom demais. Fica pra próxima.',
  '{palavra} → {b} tá ficando possível. Tô sentindo.',
  'O engenheiro acordou! Distância de {antes} pra {dist}.',
  'Grande tábua. Tábua de lei. Tábua de ipê.',
  'Esse pulo foi tão bom que eu vou fingir que era óbvio.',
  'Aproximou muito. Se continuar assim, eu vou ter que pagar hora extra pra ninguém.',
  'Conectou lindo. O rio olhou pra você com respeito.',
  'Passo gigante! Agora é só achar a próxima que liga com {b}.',
  'Tá chegando! {palavra} foi a ponte dentro da ponte.',
  'Olha a distância caindo! {dist}! Isso é quase um tobogã.'
],
/* ---------- conectou e chegou um pouquinho mais perto ---------- */
pnPertoPouco: [
  'Conectou. Ficou um tiquinho mais perto de {b}. Tiquinho mesmo.',
  'Tábua colocada. Avançou pouco, mas avançou.',
  'De {antes} pra {dist}. É progresso. De tartaruga, mas é.',
  '{palavra} liga com {de}, sim. E aproximou um pouquinho. Tá valendo.',
  'Passinho de formiga. Formiga também chega, só demora.',
  'Tá indo. Devagar e sempre. Mais devagar que sempre, mas tá.',
  'Andou um pouco. O rio nem percebeu, mas eu percebi.',
  'Aproximou. Pouquinho. Tipo quando você diz “tô chegando” e ainda tá no banho.',
  'Ok, {palavra} serve. Não é genial, mas não caiu no rio.',
  'Um passo pequeno pra ponte, um passo pequeno pra humanidade também.',
  'Progresso tímido. Eu respeito a timidez.',
  'Encostou um pouco mais em {b}. Continua puxando o fio.',
  'Boa, tá no caminho. Só precisa de uma palavra mais ousada daqui a pouco.',
  'Ficou {dist}. Antes era {antes}. É. Matemática diz que melhorou.',
  'Tá esquentando igual chuveiro elétrico velho: devagarzinho.',
  'Conectou e melhorou. Pouco, mas eu não vou reclamar. Vou sim: foi pouco.',
  '{palavra}? Legal. Tá no rumo. Agora pisa no acelerador.',
  'Mais perto, sim. Mas {b} ainda nem sabe que você existe.',
  'Andou meio metro. A ponte tem uns dez. Segue.',
  'Tá ok. Eu esperava um pulo, veio um passinho. Aceito.',
  'Melhorou. Se fosse nota, era 6. Passa de ano.',
  'Tá bom, tá bom. Chegou mais perto. Não precisa me olhar esperando aplauso.',
  'Pequeno avanço. É tipo encher piscina com conta-gotas, mas tá enchendo.',
  'Bom! Agora tenta uma palavra que tenha mais a cara de {b}.'
],
/* ---------- conectou, mas se afastou do alvo ---------- */
pnLonge: [
  'Conectou com {de}, mas se afastou de {b}. Tá construindo ponte pro lado errado do rio.',
  'Ligação válida. Direção… questionável. {b} ficou mais longe: {dist}.',
  '{palavra} tem a ver com {de}, sim. Com {b}, nem um pouco.',
  'Ô engenheiro, o alvo é pra lá. Você foi pra cá.',
  'Andou pra trás, hein. De {antes} pra {dist}. Mas pode desfazer, é de graça.',
  'Essa tábua aponta pra outra cidade. Quer dar ré? Tem o botão.',
  'A ponte tá fazendo curva. Curva bonita, mas curva.',
  'Hmm, {palavra} esfriou tudo. {b} tá lá longe tomando sol.',
  'É válido, mas é tipo pegar o ônibus no sentido contrário.',
  'Tá passeando? Porque parece passeio. {b} tá chamando do outro lado.',
  'Conectou. Mas se afastou. É o famoso “um passo pra frente, dois pra trás”.',
  '{palavra}… eu entendi a lógica. {b} não entendeu.',
  'Ficou mais longe. Às vezes precisa dar a volta mesmo. Às vezes é só erro.',
  'Isso aí é desvio. Se for estratégico, me explica depois.',
  'Longe do alvo, mas perto do coração. Brincadeira, longe de tudo.',
  'Caminho turístico escolhido. {dist} até {b}. Aproveita a paisagem.',
  'Esse passo foi pra lateral. Ponte não anda de lado.',
  'Mais longe. Mas ei, pelo menos a ponte continua de pé.',
  'Tá cavando túnel em vez de fazer ponte? {b} ficou pra trás.',
  'Vou fingir que isso é um plano genial de longo prazo.',
  'Se afastou de {b}. O botão “desfazer” tá olhando pra você com carinho.',
  'A distância subiu pra {dist}. Isso não é bom. Nem ruim. Tá, é ruim.',
  'Ligou, mas desandou. Tipo receita de bolo que não cresce.',
  'Eu não te julgo. O placar te julga.',
  '{palavra} te levou pra outro bairro. {b} mora do outro lado.'
],
/* ---------- conectou e ficou quase ligando com o alvo ---------- */
pnQuaseLa: [
  'Tá quase! {b} tá em {dist} na lista de {palavra}. Precisa ser até {k}.',
  'Pertinho! Mais uma palavra certa e a ponte fecha.',
  'Eu já tô ouvindo {b} do outro lado. Uma tábua. Uma!',
  'Tá na beirada! A próxima palavra pode ser a última.',
  'Falta pouco pra {b} entrar na roda. Pensa numa palavra que puxe ele.',
  'Isso tá cheirando a vitória. Ou é o meu almoço. Não, é vitória.',
  'Chegou tão perto que o {b} já tá acenando.',
  'Tá no quase. O quase é o melhor momento. E o mais tenso.',
  'Mais um passo! Pensa no que tem TUDO a ver com {b}.',
  'A ponte tá quase encostando. Cuidado pra não errar agora.',
  'Tá a um fio de conectar. Um fio! Puxa!',
  'Distância {dist}. O limite é {k}. Bora!',
  'Tá pertinho. Eu vou até prender a respiração. Eu não respiro. Mas vou prender.',
  'Se a próxima for boa, fecha. Sem pressão. Muita pressão.'
],
/* ---------- a ligação foi óbvia (top 10) ---------- */
pnLinkForte: [
  '{de} e {palavra}? Essa foi fácil. Ligação de cimento armado.',
  'Óbvio demais! {palavra} tá em {n}º na lista de {de}. Tipo feijão com arroz.',
  'Essa ligação até o Bugado faria. E o Bugado é bugado.',
  'Ligação de primeira: posição {n}. Firme feito rocha.',
  'Clássico! {de} → {palavra}. Nem precisou pensar, né?',
  'Muito conectado. Os dois são praticamente casados.',
  '{palavra} é quase sinônimo de {de}. Vale. Mas é meio roubado.',
  'Ligação tão forte que dava pra pendurar um elefante.',
  'Posição {n}! Essa tábua é de aço inox.',
  'Seguro, hein? Não arriscou nada. Engenheiro conservador.',
  'Tábua reforçada! Nem o INMETRO reclamaria.',
  'Ah, {palavra}. Claro. Todo mundo pensaria nisso. Eu pensei primeiro.'
],
/* ---------- a ligação passou raspando ---------- */
pnLinkFraco: [
  'Passou raspando! {palavra} ficou em {n} na lista de {de}. O limite é {k}.',
  'Conectou por um fio. Eu vi o fio tremendo.',
  'Essa tábua range. Mas aguenta. Acho.',
  'Ligação criativa, hein. Por pouco não caiu no rio.',
  'Posição {n}. Quase ficou de fora. Sorte de principiante?',
  'Aceito, mas com ressalvas. Muitas ressalvas.',
  'O júri discutiu, brigou, e aprovou. Por pouco.',
  'De {de} pra {palavra}? Que ligação é essa? Explica pro júri. Tá, passou.',
  'Essa foi no limite. Tipo pagar boleto no último dia.',
  'Rangeu, balançou, mas segurou. Engenharia de risco.',
  'Ligação forçada, mas válida. Tipo parente de terceiro grau no churrasco.',
  'Entrou pela janela, mas entrou. Posição {n} de {k}.',
  'Passou na trave! Conectado, mas por um triz.',
  'Eu não teria coragem. Você teve. E deu certo. Por pouco.'
],
/* ---------- NÃO conectou: ficou longe ---------- */
pnNaoLonge: [
  '{palavra} ficou na posição {n} de {de}. Longe demais, precisa ser até {k}.',
  'Não liga. {palavra} e {de} nem se conhecem. Posição {n}.',
  'Essa tábua caiu no rio. {n} na lista de {de}, e o limite é {k}.',
  'Que ligação é essa? O júri riu. Posição {n}.',
  '{palavra}? Com {de}? Nem no Facebook eles são amigos.',
  'Muito longe: {n}. Cada palavra tem que ter a ver com a anterior, lembra?',
  'Não rolou. {de} olhou pra {palavra} e fingiu que não viu.',
  'Posição {n}. Isso não é ponte, é salto com vara.',
  'Tentativa ousada. Ousada demais. {n}.',
  'Tá tentando pular o rio inteiro de uma vez? Não dá. Vai por partes.',
  'Nada a ver. Tipo pizza com… não, pizza combina com tudo. Isso aí não.',
  '{palavra} tá em {n} na lista de {de}. Precisa estar entre as {k} primeiras.',
  'Hmm, não. Pensa em algo que aparece JUNTO com {de} numa conversa.',
  'Longe. Muito longe. Eu precisaria de binóculo pra ver essa ligação.',
  'Não conectou. Não gastou nada, mas a tentativa ficou anotada.',
  'Essa ligação só existe na tua cabeça. E olha que tua cabeça é grande.',
  'Negativo, engenheiro. {n} é longe demais.',
  'Tá forçando a barra. A barra não vai. Posição {n}.',
  'Se {de} e {palavra} fossem vizinhos, morariam em cidades diferentes.',
  'O que {palavra} tem a ver com {de}? Nada. O sistema concorda: {n}.',
  'Ixe. {n}. Esse caminho não existe no meu mapa.',
  'Chegou perto de nada. Tenta algo mais colado em {de}.',
  'Essa tábua era de papelão. Afundou.',
  'Tá, eu entendo tua lógica. Mas as palavras não entendem. {n}.',
  'Não passa. Pensa: onde fica {de}? Pra que serve? Quem usa?',
  'Rejeitado pela engenharia. Motivo: posição {n}.',
  'Eu adoro criatividade. Mas isso é ficção científica. {n}.',
  'Muito longe de {de}. Quer uma dica? Tem o botão. Custa XP, mas tem.',
  'Não deu. {palavra} e {de} são tipo água e óleo.',
  'Não. Só não. Posição {n}.'
],
/* ---------- NÃO conectou, mas foi por pouco ---------- */
pnNaoQuase: [
  'Quase! {palavra} ficou em {n} na lista de {de}. Precisava ser até {k}.',
  'Passou perto! {n}. Mais um pouquinho de sentido e entrava.',
  'Uh, na trave! {palavra} quase liga com {de}.',
  'Por pouco. Tenta uma parente mais próxima de {palavra}.',
  'Tá no bairro certo, mas errou a casa. {n}.',
  'Quase conectou! Tá quente. Mas quente não vale ponte.',
  'Posição {n}. Faltou tão pouco que dá até raiva.',
  'Você entendeu o espírito, mas a palavra ficou meio longe. Tenta um sinônimo.',
  'Hmm, {n}. Tá rondando. Aperta mais a ligação.',
  'Na beirada! Essa tábua ficou curtinha, não alcançou.',
  'Faltou uns centímetros de sentido. {n}.',
  'Quase, quase. Pensa numa palavra mais direta.',
  'Não entrou, mas foi bonito. {n} de {k}.',
  'Chegou perto. O juiz olhou o VAR e disse não.',
  'Uma palavra mais comum pode resolver. Essa ficou em {n}.',
  'Sabe o que tu quis dizer? Eu sei. A lista não sabe. {n}.'
],
/* ---------- digitou o alvo, mas ainda não liga ---------- */
pnAlvoCedo: [
  'Calma! {b} ainda não liga com {de}. Tá em {n}. Precisa construir mais ponte.',
  'Tentou pular direto pro {b}? Esperto. Mas {de} tá longe dele: {n}.',
  'O alvo é {b}, eu sei. Mas não dá pra chegar voando. Posição {n}.',
  'Ansiedade detectada. {b} tá em {n} na lista de {de}. Mais tábuas!',
  'Pular direto pro final? É tipo ler a última página do livro. Não pode. {n}.',
  'Boa tentativa, mas {b} ainda tá do outro lado do rio.',
  'Se desse pra ir direto, não tinha jogo. {n}.',
  'Chegou cedo demais na festa. {b} ainda nem se arrumou.',
  'Eu sei onde você quer chegar. Mas ainda falta caminho: {n}.',
  'Já quer o {b}? Primeiro me traz uma palavra que liga com ele.'
],
/* ---------- palavra desconhecida ---------- */
pnDesconhecida: [
  'Não conheço {palavra}. Digitou certo? Não gastou nada.',
  '{palavra}? Isso existe? Se existe, não tá no meu dicionário.',
  'Nunca ouvi falar de {palavra}. E eu ouço muita coisa.',
  'Palavra misteriosa. Não conheço. Tenta outra.',
  '{palavra} não tá entre minhas 16 mil. Eu decorei tudo, juro.',
  'Hmm, {palavra}. Soa inventado. Tenta uma palavra de dicionário.',
  'Erro de digitação ou invenção? Nos dois casos: não conheço.',
  'Não conheço essa. Nome próprio e gíria muito nova eu não sei.',
  'Meu dicionário deu tela azul com {palavra}. Tenta outra.',
  '{palavra}? Tá falando outra língua? Aqui é português, fio.',
  'Essa aí eu não conheço. Nem de vista.',
  'Se {palavra} é palavra, meu dicionário não foi avisado.',
  'Procurei {palavra} até debaixo do sofá. Não tá aqui.',
  'Não sei o que é {palavra}. E olha que eu sei muita coisa inútil.',
  'Tenta no singular ou sem gíria. {palavra} eu não reconheço.',
  'Palavra fantasma. Eu sou fantasma e nem eu vi.'
],
/* ---------- palavra repetida ---------- */
pnRepetida: [
  '{palavra} já tá na ponte. Ponte não passa duas vezes pelo mesmo lugar.',
  'Repetiu! {palavra} já foi usada. Ponte circular não existe.',
  'Andando em círculo? {palavra} já tá aí.',
  'Déjà vu! Eu já vi {palavra} nessa ponte.',
  '{palavra} de novo? Tá com saudade dela?',
  'Essa tábua já foi pregada. Escolhe outra.',
  'Repetida. Eu sei que ela é bonita, mas não pode.',
  'Isso aí já tá na ponte. Olha pra baixo. Não, não olha, dá medo.',
  'A ponte não é rotatória. {palavra} já foi.',
  'Voltar pra {palavra}? Quer andar pra trás? Desfaz, então.',
  'Mesma palavra, mesmo lugar. Isso é loop. Eu entendo de loop.',
  'Já usou {palavra}. Minha memória é de elefante. De elefante bugado, mas é.'
],
/* ---------- voltando: ficou mais longe do alvo do que a partida ---------- */
pnVoltando: [
  'Epa, agora tá mais longe de {b} do que no começo. Isso é ponte ou marcha à ré?',
  'Tá voltando pro ponto de partida. Com juros.',
  'Distância {dist}. Pior que {a}. A ponte tá indo pro rio vizinho.',
  'Você saiu de {a} e conseguiu se afastar ainda mais de {b}. Talento.',
  'Isso não é caminho, é fuga. {b} tá se sentindo rejeitado.',
  'Mais longe que a largada. Respira, desfaz, recomeça.',
  'A ponte tá apontando pro lado contrário. Tem certeza que leu o alvo? É {b}.',
  'Ré engatada. Bip, bip, bip. Cuidado com o poste.',
  'Olha, eu já vi gente se perder. Mas se perder de ré é novidade.',
  'Tá indo pra longe de {b} com uma confiança que eu admiro.',
  'O GPS tá gritando “recalculando rota”.'
],
/* ---------- palavra genérica demais ---------- */
pnGenerica: [
  '{palavra}? Genérica demais. Liga com tudo e com nada.',
  'Usar {palavra} é tipo responder “depende” numa prova. Válido, mas preguiçoso.',
  '{palavra}. A palavra coringa. Eu tô de olho em você.',
  'Tábua genérica de loja de departamento. Serve, mas não emociona.',
  '{palavra} não diz nada com nada. Mas vale, se ligar.',
  'Hmm, {palavra}. Palavra que serve pra tudo não serve pra muita coisa.',
  'Essa é a palavra “bege” do dicionário.',
  '{palavra} é o arroz branco das palavras. Combina, mas ninguém lembra.',
  'Tá jogando com palavra curinga? É estratégia ou falta de ideia?',
  'Genérico. Tipo remédio genérico. Funciona, mas sem glamour.',
  'Palavra vaga. Vaga igual vaga de estacionamento: sempre tem uma.',
  'Com {palavra} você não constrói ponte, constrói neblina.'
],
/* ---------- palavra de ligação (que, para, com…) ---------- */
pnFuncao: [
  '{palavra} é palavra de ligação, não de ponte. Quero palavra de verdade.',
  '“{palavra}” não vale. Tem que ser uma palavra com sentido próprio.',
  'Palavrinha de gramática não segura peso. Tenta um substantivo, um verbo, alguma coisa.',
  '{palavra}? Isso é cola, não é tijolo. Não conta.',
  'Esperto, mas não. Palavra de ligação não entra.',
  'Aqui só entra palavra que significa alguma coisa sozinha. {palavra} não significa.',
  'Tábua invisível! {palavra} não serve pra ponte.',
  'Não aceito {palavra}. Nem com propina. Eu aceito propina, mas não essa.'
],
/* ---------- entrada inválida ---------- */
pnInvalida: [
  'Uma palavra só, só com letras. Sem número, sem frase.',
  'Isso não é palavra, é código. Uma palavra só, por favor.',
  'Frase inteira não cabe na ponte. Uma palavra por tábua.',
  'Hmm, isso tem símbolo ou espaço. Só letras, engenheiro.',
  'Uma palavra! Singular! Sozinha! Sem companhia!',
  'Não entendi. Manda só uma palavrinha.'
],
/* ---------- plural / flexão ---------- */
pnPlural: [
  'Entendi {orig} como {palavra}. Singular é mais leve pra ponte.',
  'Plural? Transformei em {palavra}. Menos peso na estrutura.',
  '{orig} virou {palavra}. Eu faço isso de graça.',
  'Anotei como {palavra}. O plural ficou na portaria.',
  'Vou considerar {palavra}, tá? Uma de cada vez.',
  'Tirei o S de {orig}. Guardei pra depois.'
],
/* ---------- muitas tentativas sem conectar ---------- */
pnTentativas: [
  'Já são {k} tentativas sem ligar. Respira. Pensa mais perto de {de}.',
  '{k} tábuas no rio seguidas. Os peixes agradecem a madeira.',
  'Tá difícil sair de {de}, né? Tenta uma palavra BEM óbvia.',
  '{k} erros seguidos. Dica de amigo: sinônimo, lugar, ou pra que serve.',
  'Se {de} tá te travando, desfaz e tenta outro caminho.',
  'Hmm, {k} tentativas. O botão de dica tá brilhando. Não tá. Mas podia.',
  'Tá tentando saltar muito longe. Vai no pertinho de {de}.',
  'Vou te dar uma dica grátis: palavras bem comuns ligam mais fácil.',
  '{k} tentativas! Tu é persistente. Eu admiro. De longe.',
  'Sabe o que liga com {de}? Coisa que aparece junto com {de} num texto. Pensa nisso.',
  'Ô dó. {k} seguidas. Quer desfazer e ir por outro lado?',
  'Eu apostaria em algo mais simples. Tipo o que uma criança diria sobre {de}.'
],

/* ---------- dica ---------- */
pnDica: [
  'Toma: {palavra}. Liga com {de} e chega mais perto de {b}.',
  'Dica: {palavra}. Custou XP, mas a ponte agradece.',
  'Tá bom, tá bom. Coloquei {palavra} pra você. Não conta pra ninguém.',
  'Eu pensei em {palavra}. Por isso eu sou o mascote e você o jogador.',
  'Olha só que tábua boa: {palavra}. De nada.',
  'Dica entregue: {palavra}. Agora continua daí.',
  'Botei {palavra} na ponte. Eu cobro barato: só um pouco de XP e toda tua dignidade.',
  'Te empurrei pra {palavra}. Daqui já dá pra enxergar {b}.',
  '{palavra}! Essa você não ia pensar. Ou ia. Agora não importa.',
  'Ajudinha: {palavra}. Nem doeu. Doeu no XP.',
  'Vai por {palavra}. Confia no gato-fantasma.',
  'Olha a dica: {palavra}. Liga com {de}. O resto é contigo.',
  'Te dei {palavra}. Usa com sabedoria. Ou sem. Tanto faz.',
  'Tá travado? Toma {palavra}. Destrava igual óleo em dobradiça.'
],
pnDicaMuitas: [
  'Mais uma dica? Daqui a pouco quem tá jogando sou eu.',
  '{k} dicas! A ponte tá ficando com a minha cara.',
  'Tá bom, mais uma: {palavra}. Mas eu vou colocar meu nome na placa da ponte.',
  'Dica número {k}. Eu devia cobrar pedágio.',
  'Toma {palavra}. Essa ponte vai ser tombada como patrimônio do Bugado.',
  'Você pede dica igual quem pede ketchup: sem vergonha. Toma {palavra}.',
  '{k} dicas. O XP chorou. Mas toma: {palavra}.',
  'Eu tô fazendo a ponte e você tá levando a fama. Toma {palavra}.'
],
pnDicaNada: [
  'Nem eu achei uma palavra melhor daqui. Desfaz uma e tenta outro caminho.',
  'Daqui eu não vejo saída boa. Volta uma tábua.',
  'Travou até o meu cérebro. Tenta desfazer.'
],

/* ---------- desfazer ---------- */
pnDesfazer: [
  'Tábua removida. Ninguém viu. Só eu. E eu conto pra todo mundo.',
  'Desfez {palavra}. Arrependimento é sinal de inteligência. Às vezes.',
  'Voltou pra {de}. Às vezes dar ré é o melhor caminho.',
  'Tirei {palavra}. Reforma de obra, normal.',
  'Desfazer é de graça. Dignidade não, mas desfazer sim.',
  'Adeus, {palavra}. Você foi uma tábua… presente.',
  'Voltamos a {de}. Pensa num caminho melhor agora.',
  'Ctrl+Z na vida real ia ser ótimo, né?',
  'Removido. A ponte agradece o bom senso.',
  'Deu ré. Bip, bip. Beleza, tá livre.',
  '{palavra} foi demitida da ponte.',
  'Arrancou a tábua {palavra}. O rio tá rindo.',
  'Voltar também é andar. Mentira, é voltar. Mas tá valendo.',
  'Tá refazendo o caminho? Engenheiro caprichoso.',
  'Ok, sem {palavra}. Próxima tentativa a partir de {de}.',
  'Desfeito. Eu fingi que não vi {palavra}.'
],
pnDesfazerMuito: [
  'Tá desfazendo mais que fazendo. A ponte tá indo e voltando igual gangorra.',
  'Isso é obra pública: começa, para, desmancha, recomeça.',
  'Desfez de novo? Tá indeciso igual eu escolhendo lanche.',
  'Olha, a ponte já foi feita e desfeita tantas vezes que virou lenda urbana.',
  'Tá procurando o caminho perfeito, né? Eu respeito o perfeccionismo.',
  'Mais uma ré. O caminhão tá sem freio de mão.'
],

/* ---------- vitória ---------- */
pnVitoriaAbaixo: [
  'ABAIXO DO PAR! {passos} passos, e o par era {par}. Você é um gênio ou roubou. Vou acreditar em gênio.',
  'Birdie! Menos passos que o par. Eu tô oficialmente com inveja.',
  'Fez em {passos}! O par era {par}. Eu achei que conhecia as palavras. Você conhece melhor.',
  'Abaixo do par. Isso não é ponte, é teletransporte.',
  'Que atalho foi esse? Menos que {par}! Ensina.',
  'Você bateu o meu caminho. Eu preciso de um minuto sozinho.',
  'Ponte curtinha e firme. Engenharia de outro planeta.',
  'Abaixo do par! Se isso fosse golfe, você ganhava jaqueta verde.',
  'Eu calculei {par}. Você fez {passos}. Quem é o computador aqui?',
  'Inacreditável. Vou mandar recalcular. Não precisa. Você é bom mesmo.',
  'Menos passos que o previsto! O prefeito vai inaugurar com teu nome.',
  'Que isso, hein! Você achou um atalho que nem eu vi.',
  '{passos} passos! A ponte mais econômica da história do fliperama.',
  'Birdie! Ou águia! Ou sei lá, algum passarinho muito bom.'
],
pnVitoriaPar: [
  'No par! {passos} passos, igualzinho ao meu cálculo. Tá afiado.',
  'Par cravado. Nem um passo a mais. Profissional.',
  'Ponte fechada em {passos}. É o par. É o esperado. E o esperado é ótimo.',
  'Fez no par! Tipo chegar na hora certa. Raríssimo.',
  'Exatamente {par}. Você pensa igual a mim. Isso é preocupante.',
  'Par! Engenheiro certinho. A obra saiu no prazo.',
  'No par, sem choro. Pode passar de carro na ponte.',
  'Cravou o par. Se o fliperama tivesse carteira de engenheiro, era tua.',
  'Ponte no par! Eu tô orgulhoso. Não conta pra ninguém.',
  '{passos} passos! Nem mais, nem menos. Equilíbrio perfeito.',
  'Par! Isso é consistência. Eu não tenho, mas admiro.',
  'Fechou certinho no par. Tábua por tábua, sem enrolação.'
],
pnVitoriaAcima: [
  'Chegou! {passos} passos, o par era {par}. Um pouco de volta, mas chegou.',
  'Ponte pronta! Deu umas curvas, mas atravessa o rio.',
  'Bogey! Não é o ideal, mas a ponte tá de pé.',
  'Fechou em {passos}. Par {par}. Um passeiozinho a mais nunca matou ninguém.',
  'Chegou em {b}! Com uma volta turística, mas chegou.',
  'Ponte concluída! Custou um pouco mais de tábua que o previsto. Obra pública, né.',
  'Conseguiu! Com uns passos extras, mas conta igual.',
  'Atravessou! Da próxima, tenta cortar caminho.',
  'Tá feito! {passos} passos. Eu fiz em {par}, mas eu sou um computador. Mais ou menos.',
  'A ponte ficou meio sinuosa, mas é charmosa.',
  'Chegou! Não foi o caminho mais curto, mas foi o teu caminho.',
  'Deu certo! Um pouco acima do par, mas acima do par ainda é na ponte.'
],
pnVitoriaMuitoAcima: [
  'Chegou! Depois de {passos} passos. O par era {par}. Você fez uma ponte ou uma estrada?',
  'Ufa, conectou! Mas essa ponte dá a volta no estado.',
  'Parabéns! Você construiu a ponte mais longa do fliperama. Isso é um recorde. Não dos bons.',
  'Atravessou! Dava pra ter ido de barco e chegado antes. Mas atravessou.',
  'Chegou em {b}! O caminho foi tão longo que eu fiz aniversário no meio.',
  'Vitória! Com tábua sobrando. Muita tábua sobrando.',
  'Conseguiu! {passos} passos. Isso é uma ponte ou um labirinto?',
  'É vitória, é vitória! Suada, cheia de curva, mas vitória.',
  'Ponte pronta. Cara, mas pronta. O orçamento estourou, mas quem liga?',
  'Chegou lá! O importante é chegar. O menos importante são os {passos} passos.'
],
pnVitoriaDica: [
  'Chegou! Com um empurrãozinho meu, mas chegou.',
  'Ponte pronta! Tem umas tábuas minhas aí. Metade da glória é minha.',
  'Conseguiu! Eu ajudei, mas quem pisou foi você.',
  'Vitória com dica. Conta igual, só vale menos XP. E menos orgulho.',
  'Feito! A placa da ponte vai ter dois nomes: o teu e o meu. O meu maior.',
  'Atravessou! Com muleta, mas atravessou.',
  'A ponte ficou pronta. Eu dei as dicas, você deu o trabalho. Parceria.'
],
pnDesistiu: [
  'Desistiu. Olha como eu faria: tá aí embaixo o caminho.',
  'Tudo bem, rio largo mesmo. Eu te mostro um caminho possível.',
  'Deixa comigo. Olha a ponte que eu faria. Nem é tão difícil. É sim.',
  'Desistir faz parte. O caminho tá aí. Amanhã tem outro.',
  'A ponte caiu, mas o engenheiro sobreviveu. Olha a solução.',
  'Tá bom, eu conto: dava pra ir por aqui. Tá vendo?',
  'Desistiu? Tudo bem, até ponte famosa demorou anos. Olha meu caminho.',
  'Não rolou dessa vez. Aprende o meu caminho e se vinga no próximo.',
  'Rio 1 × 0 Engenheiro. Revanche amanhã.',
  'Sem ponte hoje. Mas agora você sabe o atalho. Guarda pra vida.'
],
pnDesistirPergunta: [
  'Vai largar a obra no meio? O rio vai rir de você.',
  'Tem certeza? Às vezes a próxima palavra é a certa.',
  'Desistir é fácil. Tentar mais uma é mais fácil ainda.',
  'Olha que eu mostro o caminho e aí não tem volta, hein.',
  'Pensa bem. A dica é mais barata que a vergonha.',
  'Você chegou tão longe. Mentira, não chegou. Mas pode chegar.',
  'Desistir? Tá bom. Mas eu vou contar pro mascote do Sudoku.',
  'Se desistir agora, o {b} vai ficar sozinho do outro lado. Coitado.'
],
pnDiarioFeito: [
  'O diário de hoje já foi. Quer mais? Tem o modo livre.',
  'Ponte do dia pronta. Volta amanhã pra outra. Ou joga livre agora.',
  'Hoje já deu. Mas o livre nunca fecha.',
  'Diário resolvido. Pode compartilhar e se gabar.',
  'A obra de hoje tá entregue. Tem mais obra no modo livre.',
  'Já fez o de hoje. Amanhã eu invento outra ponte doida.',
  'Diário concluído. Eu fico aqui, esperando amanhã, sozinho, no escuro. Tudo bem.',
  'Ponte diária no bolso. Bora pro livre?'
],
pnPrimeira: [
  'Primeira tábua! Toda ponte começa assim.',
  'Primeira palavra colocada. Agora é só repetir isso umas vezes.',
  'Começou! O primeiro passo é o mais difícil. Mentira, é o último.',
  'Primeira tábua pregada. Tá sentindo a vibe de engenheiro?'
],
pnMeiaPonte: [
  'Já são {k} tábuas. A ponte tá ficando comprida.',
  '{k} passos e contando. O par era {par}, só lembrando.',
  'Tá passando do par, hein. Ainda dá pra chegar bonito.',
  'Essa ponte tá ficando tão longa que vou precisar de um mapa.',
  '{k} palavras! Tá fazendo uma ponte ou um livro?',
  'Tá dando volta. Tenta pensar no que tem a ver com {b} diretamente.'
],

/* ---------- mascote cutucado ---------- */
cutucarPonte: [
  'Ei! Eu sou o fiscal da obra. Não pode cutucar o fiscal.',
  'Cutucar o mascote não aproxima o alvo. Já testei.',
  'Para de me cutucar e bota tábua nessa ponte.',
  'Ai! Isso não é palavra, é agressão.',
  'Se eu cair no rio, quem vai reclamar das tuas palavras?',
  'Tô de capacete invisível. Pode cutucar. Não, não pode.',
  'Cutucada registrada. Posição 15.999 de utilidade.',
  'Cutucar o gato-fantasma não conecta nada. Nem a gente.',
  'Eu sou ponte entre você e a diversão. Me respeita.',
  'Isso foi uma dica? Não. Foi um cutucão. Diferente.',
  'Tá com tempo pra me cutucar, tá com tempo pra pensar numa palavra.',
  'Ô! Eu tava calculando a distância entre “gato” e “boleto”. Perdi a conta.',
  'Cutuca mais uma vez e eu desfaço tua última tábua. Mentira. Mas imagina.',
  'Eu não sou tábua. Não precisa testar se eu aguento peso.',
  'Hmm, tá precisando de inspiração? Olha pro alvo. Não pra mim.',
  'Cada cutucada é uma palavra que você não digitou.',
  'Eu tô trabalhando, tá? Fiscalizar ponte cansa.',
  'Se me cutucar de novo eu vou chamar o sindicato dos mascotes.',
  'Cócegas! Não. Fantasmas não sentem cócegas. Eu sinto. Sou bugado.',
  'Oi. Sim. Eu. O que foi? Esqueceu o alvo? Tá lá na ponta da ponte.',
  'Me cutucar é o que você faz quando trava. Eu sei. Eu vejo.',
  'Você sabia que a palavra “ponte” liga com “rio”, “rio” com “peixe”, “peixe” com “gato”? Eu sou o gato. Tô na ponte.',
  'Nossa, que dedo pesado. Tá construindo ponte ou demolindo?',
  'Tá procurando atalho em mim? Eu sou um beco sem saída.',
  'Eu não tenho resposta no bolso. Tenho? Não. Tenho. Não conto.',
  'Mais um cutucão e eu viro palavra genérica.',
  'Olha a obra! Olha a obra! Cuidado aí!',
  'Tá cutucando pra ver se eu mudo de ideia? Eu nunca tive ideia.',
  'Ai, ai, ai. Isso não é jeito de tratar o engenheiro-chefe.',
  'Eu já disse que sou o fiscal? Fiscal não se cutuca. Se suborna.',
  'Sabe o que liga com “cutucar”? “Irritar”. Posição 3. Aposto.',
  'Tô de olho na ponte, não em você. Mentira, tô de olho nos dois.',
  'Cuidado! Se eu glitchar, a ponte glitcha junto.',
  'Tá bom, tá bom. Oi. Satisfeito?',
  'Toda vez que você me cutuca, uma tábua range em algum lugar.',
  'Eu sou fofo, mas sou profissional. Não entrego caminho.',
  'Me cutucar não tem par. Mas se tivesse, você tava muito acima.',
  'Você cutuca igual quem aperta botão de elevador várias vezes. Não adianta.',
  'Psiu. O rio tá ouvindo. Não faz barulho.',
  'Isso é uma ponte ou um parquinho? Foco!',
  'Ei, eu tava dormindo em pé. Fantasma dorme em pé. Agora acordei. Obrigado?',
  'Eu vou cobrar pedágio por cutucada. Dois reais. Aceito pix de mentira.'
],

/* ---------- tagarelice temática (soma no 'aleatorio' geral) ---------- */
pnAleatorio: [
  'Curiosidade: a ponte mais longa do mundo tem mais de 160 km. A tua não precisa tanto.',
  'Sabia que “ponte” e “pontífice” são parentes? O papa é tipo um construtor de pontes. Eu também.',
  'Todo mundo tá a seis apertos de mão de qualquer pessoa. Palavra também, mais ou menos.',
  'Eu queria ser ponte levadiça. Sobe, desce, sobe, desce. Vida simples.',
  'Às vezes eu penso em quantas pontes existem entre “pizza” e “felicidade”. Muitas. Todas curtas.',
  'Fato: pontes de corda balançam. Pontes de palavra também, se a palavra for fraca.',
  'Se eu fosse uma palavra, eu seria “bug”. Minha ponte até “perfeito” seria longuíssima.',
  'Tem palavra que é hub: liga com tudo. Tipo aquele amigo que conhece todo mundo na festa.',
  'Engenheiro de verdade usa cálculo. Você usa intuição. Eu uso bugs.',
  'Sabia que o cérebro guarda palavras em redes? A tua rede tá com wi-fi fraco hoje?',
  'Eu adoro quando alguém faz ponte de “sogra” até “vulcão”. É sempre rápida. Fica o mistério.',
  'Pensamento: toda palavra é uma ponte pra outra. Eu sou uma ponte pro tédio.',
  'A ponte Golden Gate é vermelha. A tua ponte é da cor que eu quiser. Eu escolho roxo.',
  'Se “gato” liga com “rato” e “rato” liga com “queijo”, então eu gosto de queijo? Gosto.',
  'Ponte boa é aquela que ninguém nota que existe. A tua eu noto. Muito.',
  'Diz a lenda que existe uma palavra que liga com todas. Eu procuro até hoje. Acho que é “coisa”.',
  'Você sabia que o rio embaixo da ponte não tá nem aí pro teu par? Eu tô.',
  'Eu não sei nadar. Por isso sou tão exigente com ponte.',
  'Associação livre: gato, fantasma, bug, eu. Viu? Ponte curtinha.',
  'Tem gente que atravessa ponte correndo. Eu atravesso flutuando. Vantagem de fantasma.',
  'Quem inventou a ponte provavelmente só tava com preguiça de nadar. Respeito.',
  'Fato inútil: a palavra “saudade” liga com tudo que você perdeu. E com “churrasco”, por algum motivo.',
  'Às vezes a menor ponte é a mais óbvia. Às vezes é a mais doida. Nunca é a do meio.',
  'Eu tentei fazer ponte de “segunda-feira” até “alegria”. Não achei caminho.',
  'Se você empilhar todas as palavras do dicionário, dá uma ponte até a Lua? Não. Mas dá uma dor de cabeça.',
  'O castor constrói ponte sem nunca ter estudado. Você também. Parabéns, castor.',
  'Toda palavra tem vizinhos. Algumas têm vizinhos barulhentos.',
  'Eu já fiz uma ponte de “boleto” até “felicidade”. Passava por “pago”. Nunca foi usada.',
  'Pensa numa palavra. Agora pensa na que vem depois. Pronto, você fez uma ponte. Eu ensino muito.',
  'Pontes romanas duram dois mil anos. Minhas piadas duram dois segundos.',
  'Sabia que a palavra “ponte” tá a poucos passos de “rio”, “estrada” e “feriado”? Ponte de feriado é a melhor.',
  'Eu queria uma ponte até a geladeira. Longe demais do sofá.',
  'O melhor jeito de atravessar um rio é ter um amigo com barco. Eu não tenho barco. Nem amigo. Tenho você.',
  'Enquanto você pensa, eu fico aqui contando tábuas. Uma, duas… perdi.',
  'Palavras raras às vezes fazem atalho. Palavras comuns fazem caminho seguro. Escolhe teu estilo.',
  'Tem ponte que é pura poesia: “lágrima” até “chuva”. Tem ponte que é pura bagunça: “pastel” até “astronauta”.',
  'Se a ponte cair, a culpa é do vento. Sempre é do vento.',
  'Às vezes o caminho entre duas palavras passa por um lugar. Às vezes por um sentimento. Às vezes por um queijo.',
  'Eu dormi numa ponte uma vez. Acordei com um peixe me olhando. Nunca mais.',
  'Sabe o que tem entre “amor” e “boleto”? Casamento. Eu não disse nada.',
  'A menor ponte do mundo tem 4 metros. A menor ponte de palavras tem 1 passo. Se você tiver sorte.',
  'Tô pensando em fazer uma ponte entre o Sudoku e o Termo. Ia se chamar “Sudermo”. Não.'
],
pnParado: [
  'A obra parou? O sindicato vai perguntar.',
  'Oi? A ponte tá esperando a próxima tábua.',
  'Tá pensando ou tá dormindo? Os dois são válidos, mas um constrói ponte.',
  'Se não sabe, pensa: o que tem a ver com a última palavra? Qualquer coisa serve.',
  'O alvo tá ficando com frio do outro lado do rio.',
  'Travou? Tenta uma palavra bem simples, tipo de criança.',
  'Silêncio na obra. Ou é concentração ou é hora do cafezinho.',
  'Tô aqui. Esperando. Olhando pro rio. Pensando na vida.',
  'Se tiver travado, tem dica ali. Ou desfazer. Ou me cutucar. Não me cutuca.',
  'O engenheiro sumiu? Alguém viu o engenheiro?',
  'Dica de graça: pensa onde a última palavra fica, ou pra que ela serve.',
  'Tá demorando tanto que o rio mudou de curso.'
],

/* ---------- combinações engraçadas de partida/alvo (temas) ---------- */
pnCombo_animal_espaco: [
  'Bicho no espaço! A cachorrinha Laika aprovaria essa ponte.',
  'Um animal querendo ir pro espaço? Que ambição. Mais que a minha.',
  'Do mato pras estrelas. Essa ponte vai precisar de propulsão.'
],
pnCombo_animal_comida: [
  'Animal até comida? Essa ponte tem um final meio suspeito…',
  'Hmm, bicho pra comida. Eu não vou comentar. Vegetarianos, tampem os olhos.',
  'Do pasto pro prato? Pesado. Mas é só palavra.'
],
pnCombo_animal_profissao: [
  'Um bicho querendo emprego. A crise tá feia até no zoológico.',
  'Animal virando profissional. Se o gato pode ser mascote, tudo pode.',
  'Bicho até profissão. Carteira assinada pra animal. Adoro.'
],
pnCombo_animal_objeto: [
  'Bicho até objeto? Tomara que não seja o que eu tô pensando.',
  'Animal até coisa de casa. Esse bicho vai se mudar.',
  'Do bicho pro objeto. Ponte meio Toy Story.'
],
pnCombo_comida_profissao: [
  'Comida até profissão? Esse aí vai trabalhar de barriga cheia.',
  'Da comida pro emprego. O vale-refeição mandou lembranças.',
  'Comida → trabalho. A ordem certa seria trabalho → comida, mas tudo bem.'
],
pnCombo_comida_espaco: [
  'Comida no espaço? Astronauta come tudo em tubinho. Triste.',
  'Da cozinha pro cosmos. Essa receita vai longe.',
  'Comida até o espaço. Imagina uma pizza em gravidade zero.'
],
pnCombo_comida_sentimento: [
  'Comida até sentimento. Faz sentido: comida é sentimento.',
  'Da barriga pro coração. Essa ponte é quase uma declaração de amor.',
  'Comida e sentimento. Eu sinto fome. É sentimento?'
],
pnCombo_sentimento_objeto: [
  'Sentimento até objeto? Isso é quase poesia de geladeira.',
  'Do coração pra gaveta. Ponte emocional.',
  'Transformar sentimento em coisa. Isso é o que a propaganda faz.'
],
pnCombo_sentimento_animal: [
  'Sentimento até bicho? Todo pet é um sentimento com pelo.',
  'Da emoção pro zoológico. Adorei.',
  'Sentimento virando bicho. Isso explica o meu humor.'
],
pnCombo_profissao_fantasia: [
  'Um profissional sério até o mundo da fantasia? Tá precisando de férias.',
  'Da carteira de trabalho pro conto de fadas. Isso é aposentadoria.',
  'Profissão até fantasia. Todo mundo sonha em largar tudo e virar mago.'
],
pnCombo_fantasia_comida: [
  'Criatura mágica até comida? Esse monstro tá com fome.',
  'Da fantasia pra cozinha. Até dragão precisa almoçar.',
  'Magia até comida. Receita de bruxa, cuidado.'
],
pnCombo_corpo_objeto: [
  'Parte do corpo até objeto. Tem coisa que é melhor nem perguntar.',
  'Do corpo pra coisa. Ponte meio médica, meio loja de ferragens.',
  'Corpo até objeto. Espero que não seja cirurgia.'
],
pnCombo_veiculo_animal: [
  'Veículo até bicho? Tomara que não seja atropelamento.',
  'Do motor pro focinho. Ponte com cheiro de gasolina e pelo.',
  'Veículo virando bicho. Tipo Transformers do zoológico.'
],
pnCombo_lugar_sentimento: [
  'Lugar até sentimento. Todo lugar tem um sentimento. Até a fila do banco: ódio.',
  'De um lugar pra um sentimento. Isso é memória afetiva.',
  'Lugar e sentimento. Saudade de lá, né?'
],
pnCombo_clima_comida: [
  'Clima até comida? Dia de chuva pede comida quente, eu sei.',
  'Do tempo pro prato. Frio pede sopa, calor pede sorvete. Ponte fácil? Veremos.',
  'Clima e comida. Previsão do tempo com cardápio.'
],
pnCombo_musica_animal: [
  'Música até bicho? Passarinho canta, gato mia. Eu desafino.',
  'Da música pro zoológico. Ponte com trilha sonora.',
  'Instrumento até animal. Tem bicho que toca melhor que muita banda.'
],
pnCombo_esporte_comida: [
  'Esporte até comida. Primeiro queima, depois come. Ou ao contrário.',
  'Do campo pra mesa. Churrasco pós-jogo, conheço.',
  'Esporte e comida. A dieta tá indo pro saco.'
],
pnCombo_familia_fantasia: [
  'Família até criatura fantástica? Não vou citar nomes. Sogra.',
  'Parente até monstro. Tem família que já é assim.',
  'Da família pro conto de fadas. Toda família tem uma bruxa.'
],
pnCombo_objeto_espaco: [
  'Objeto até o espaço. Vai ser lançado de foguete, esse aí.',
  'De uma coisinha de casa até o cosmos. Ambição.',
  'Objeto no espaço vira lixo espacial. Cuidado.'
],
pnCombo_casa_natureza: [
  'Da casa pra natureza. Alguém tá precisando sair do sofá.',
  'Casa até natureza. Isso é o que chamam de “fim de semana”.',
  'Sai de casa, vai pro mato. Ponte de férias.'
],
pnCombo_mesmoTema: [
  'Tudo do mesmo assunto? Parece fácil. É aí que mora o perigo.',
  'Mesma família de palavras, mas longe. Tipo primo que mora em outro estado.',
  'Parece perto, né? O par diz que não é tão perto assim.'
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

/* aleatórias e “tá parado?” da Ponte somam com as gerais do fliperama */
const F = window.FALAS || {};
const geral = arr => (arr || []).filter(s => !/sudoku/i.test(s));
L.pnParadoTudo = [...geral(F.parado), ...L.pnParado];
Bugado.addLines(L);
Bugado.extendLines({ aleatorio: L.pnAleatorio });
})();
