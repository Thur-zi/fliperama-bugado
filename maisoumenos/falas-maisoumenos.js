/* ==========================================================
   Falas do Bugado no Mais ou Menos.
   Variáveis (preenchidas pelo jogo, já com <b> nos nomes):
   {a} card da esquerda (conhecido) · {b} desafiante (escondido)
   {va} valor do {a} · {valor} valor do {b}
   {maior}/{menor} quem tem o valor maior/menor · {vmaior}/{vmenor} os valores
   {n} sequência atual (ou pontos) · {rec} recorde · {metrica} peso/altura/nº/poder
   Nomes de Dragon Ball: sem artigo (tem Bulma, Chi-Chi, Androide 18…).
   ========================================================== */
Bugado.addLines({

/* ---------------- acertos genéricos ---------------- */
mmAcerto: [
  'Acertou. Eu ia comentar, mas fiquei sem argumento.',
  'Certo! Anota aí: {n} seguidas. Eu anoto também, pra usar contra você depois.',
  'Isso! O {maior} ganhou essa. Com {vmaior}. Sem choro.',
  'Acertou de novo. Tá colando de alguém? Olha pros lados. Ninguém. Estranho.',
  'Boa. {n} na conta. Continua que eu tô quase impressionado.',
  'Correto. O {menor} ficou com {vmenor} e cara de paisagem.',
  'Mandou bem. Mas não se acostuma, o próximo tem cara de pegadinha.',
  'Acertou! Toca aqui. Não, eu não tenho mão. Toca no ar.',
  'Certinho. {maior} com {vmaior}, {menor} com {vmenor}. Matemática de padaria.',
  'Sim! Mais um pro saco. {n} e contando.',
  'Uau. Quer dizer, “uau” de leve. Não quero te mimar.',
  'Isso aí. Você tá lendo os números pelo brilho da tela?',
  'Acertou e nem suou. Eu suei por você. Pixel suado é feio.',
  'Correto! Próximo desafiante, pode entrar. Limpa os pés.',
  'Muito bem. O {b} tá com {valor}. Você sabia disso? Sabia nada, chutou bonito.',
  'Acertou! Já pode colocar “especialista em coisa inútil” no currículo.',
  'Bateu! Um pra você, zero pro meu sarcasmo.',
  'Confere. Meu banco de dados concorda contigo. Ele não costuma concordar com ninguém.',
  'Certo! A plateia imaginária aplaude. Eu não, tô com preguiça.',
  'Boa! Sequência {n}. Não olha pra baixo.',
  'Isso! Eu sabia que você sabia. Mentira, eu apostei contra.',
  'Acertou. O {menor} tá indo embora triste. Tchau, {menor}.',
  'Na mosca. Nem o Pokéagenda do Ash é tão preciso.',
  'Correto. Você tá jogando ou fazendo prova de concurso?',
  'Aí sim! {n} seguidas e zero vergonha até agora.',
  'Acertou. O desafiante entrou achando que ia te enganar. Coitado.',
  'Isso! Se fosse no fliperama de verdade, já tinha ficha grátis.',
  'Certo. Pode respirar. Não muito, que o próximo já chegou.',
  'Boa! Tá mais afiado que garra de Scyther.',
  'Acertou. Eu fico feliz. Pouco. Mas fico.',
  'Correto! {vmaior} contra {vmenor}. Deu o que tinha que dar.',
  'Mandou bem! Mais um desses e eu começo a desconfiar que você é um robô.',
  'Acertou. Continua assim que eu preparo um discurso. Curto.',
  'Isso! O {b} revelou o segredo dele e você já sabia. Chato, né, {b}?',
  'Sim, senhor! Pode seguir. O fliperama agradece a preferência.',
  'Acerto confirmado. O VAR revisou e deu bom.',
  'Correto! Vai uma medalha? Não tenho. Aceita um “boa”? Boa.',
  'Isso aí. Seu cérebro tá rodando liso hoje, sem travar.',
  'Acertou mais uma. Tô começando a achar que você decorou o jogo.',
  'Certo! {n} e subindo. Igual preço de videogame.',
  'Boa jogada. O {a} tá orgulhoso. Eu acho. Ele não fala.',
  'Acertou! Sua intuição tá melhor que previsão do tempo.',
  'Correto. Nem precisou pensar muito, né? Deu pra ver.',
  'Isso! Esse desafiante já era. Próximo!',
  'Acertou. O placar sobe, meu respeito sobe junto. Um tiquinho.'
],

/* ---------------- acertos por categoria ---------------- */
mmAcertoPeso: [
  'Isso! O {maior} pesa {vmaior}. Tem que ter cuidado na hora de sentar.',
  'Certo. O {menor} com {vmenor} é praticamente um saco de pão.',
  'Acertou! {vmaior}? O {maior} não passa em ponte de madeira.',
  'Boa. O {menor} pesa {vmenor}. O vento leva, se bobear.',
  'Correto! A balança do Centro Pokémon gemeu com o {maior}.',
  'Isso. {maior}: {vmaior}. Dieta começa segunda. Qual segunda? Nunca se sabe.',
  'Acertou! O {menor} pesa menos que uma mochila de escola.',
  'Certo. Se o {maior} pular, dá terremoto. Literalmente, o golpe.',
  'Correto! Imagina carregar o {maior} no ombro que nem o Ash faz com o Pikachu.',
  'Boa! O {menor} ({vmenor}) cabe na Pokébola com folga e ainda sobra espaço pra lanche.',
  'Acertou. {vmaior} de pura presença.',
  'Isso! Eu pesaria uns 0 kg. Sou pixel. Invejo o {maior}? Não. Talvez.',
  'Correto. O {maior} com {vmaior} precisa de elevador de carga.',
  'Acertou! Pokébola do {maior} deve ser reforçada com concreto.',
  'Certo! O {menor} é peso-pena. O {maior} é peso-“sai da frente”.',
  'Boa! Dá pra levar o {menor} na bolsa. O {maior}, só de caminhão.',
  'Isso! {vmaior} contra {vmenor}. Nem precisava de balança, só de olho.',
  'Acertou. O {maior} não sobe em árvore. A árvore desce.',
  'Correto! Se o {maior} deitar no sofá, o sofá vira tapete.',
  'Isso! O {menor} pesa {vmenor}. É o tipo de Pokémon que some na ventania.',
  'Certo. Peso é documento, e o {maior} tem RG gordinho.',
  'Acertou! Você tem uma balança no olho. Assusta um pouco.',
  'Boa! O {maior} pesa {vmaior}. O pé dele deve deixar cratera.',
  'Correto. Eu nunca carregaria o {maior}. Nem o {menor}. Eu não carrego nada. Sou um fantasma.',
  'Isso! {vmenor} do {menor} é o peso de uma saudade leve.'
],
mmAcertoAltura: [
  'Isso! O {maior} tem {vmaior}. Bate a cabeça em porta de shopping.',
  'Certo. O {menor} com {vmenor} precisa de banquinho pra pegar biscoito.',
  'Acertou! {maior}: {vmaior}. Joga basquete de olho fechado.',
  'Boa! O {menor} mede {vmenor}. Se perde no meio da grama alta. Literalmente, é onde ele mora.',
  'Correto! O {maior} vê o horizonte antes de todo mundo.',
  'Isso. O {maior} tem {vmaior}. Na foto da turma, fica atrás. Sempre.',
  'Acertou. O {menor} fica na primeira fila da foto. E ainda some.',
  'Certo! Pra fazer carinho no {maior} precisa de escada.',
  'Boa! {vmaior} contra {vmenor}. Parece pai e filho num passeio.',
  'Correto. O {menor} cabe dentro do chapéu do Ash. Eu testaria.',
  'Isso! O {maior} troca lâmpada sem subir em nada.',
  'Acertou! O {maior} mede {vmaior}. Tá mais pra prédio que pra Pokémon.',
  'Certo. O {menor} tem {vmenor}. Altura de canela de treinador.',
  'Boa! Você tem uma trena no olho. Uma trena mágica.',
  'Correto! O {maior} dá oi pros Pidgey lá em cima.',
  'Isso. O {menor} olha pro {maior} e só vê joelho.',
  'Acertou! Com {vmaior}, o {maior} não entra no ônibus sem abaixar.',
  'Certo. Mede aí: {vmaior}. Mediu? Pois é. Grandão.',
  'Boa! O {menor} passa por baixo da porta sem abaixar a cabeça.',
  'Correto. Altura não é tudo. Mas nessa rodada foi.',
  'Isso! {maior} com {vmaior}. Alguém avisa o avião que ele tá ali.',
  'Acertou! O {menor} tem {vmenor}. Tamanho de chaveiro.',
  'Certo! Se o {maior} deitar no chão, vira ponte.',
  'Boa! Pra tirar selfie com o {maior} precisa de drone.',
  'Correto! Seu senso de proporção tá melhor que o de desenhista de anime.'
],
mmAcertoDex: [
  'Isso! O {maior} é o {vmaior}. Chegou depois na festa.',
  'Certo. O {menor} é {vmenor}, veterano da Pokédex.',
  'Acertou! Você decorou a Pokédex ou só tem sorte com número?',
  'Boa! {vmenor} vem antes de {vmaior}. Até aí, matemática. O difícil é saber quem é quem.',
  'Correto! O {menor} tem mais tempo de casa. Merece aumento.',
  'Isso! Você sabe a ordem da Pokédex melhor que o Professor Carvalho.',
  'Acertou. O {maior} é mais novinho na lista. Ainda tá tirando a etiqueta.',
  'Certo! {vmaior}. Número de ônibus, mas é Pokémon.',
  'Boa! O Dexter do Ash ficaria orgulhoso. Ou com ciúme.',
  'Correto. O {menor} chegou antes e pegou o melhor lugar da fila.',
  'Isso! Você sabe geração pelo cheiro? Porque tá acertando tudo.',
  'Acertou! {vmenor} contra {vmaior}. Coisa de nerd. Parabéns, nerd.',
  'Certo. Pokédex decorada é superpoder. Inútil, mas superpoder.',
  'Boa! Lembrar número de Pokémon, sim. Lembrar senha do e-mail, não. Prioridades.',
  'Correto! O {maior} é de uma geração mais recente. Dá pra ver pelo design. Ou não.',
  'Isso! Mais um e você recita a Pokédex de trás pra frente.',
  'Acertou. O {menor} é {vmenor}. Clássico. Vintage. Retrô.',
  'Certo! Seu cérebro tem índice remissivo, é isso?',
  'Boa! Se fosse prova de Pokédex, você passava direto.',
  'Correto! Você deve ter jogado muito Pokémon. Muito mesmo. Tá tudo bem em casa?'
],
mmAcertoPoder: [
  'Isso! {maior} é mais forte. Não precisa nem de rastreador.',
  'Certo. {menor} é mais fraco. Doeu, mas é a verdade.',
  'Acertou! O rastreador de {maior} explodiu. O de {menor} nem apitou.',
  'Boa! {maior} com {vmaior}. Isso aí é mais de 8000? É bem mais.',
  'Correto! {menor} ({vmenor}) perde essa sem nem tirar o peso de treino.',
  'Isso! Você sente o ki de longe. Tá treinando com o Kaio do Norte?',
  'Acertou. {maior} ganha, {menor} vai pro hospital. Clássico do anime.',
  'Certo! Se {menor} enfrentasse {maior}, o episódio durava 12 capítulos só de grito.',
  'Boa! Eu sabia. Todo mundo sabia. Menos o {menor}.',
  'Correto. {maior} derrotaria {menor} com um peteleco. Talvez com meio.',
  'Isso! Você entende de nível de poder mais que o Vegeta. E ele vive falando disso.',
  'Acertou! {menor} vai precisar de semente dos deuses depois dessa comparação.',
  'Certo! {vmaior} contra {vmenor}. Luta encerrada antes da abertura.',
  'Boa! Nem precisou de Kamehameha pra decidir.',
  'Correto! {maior} treinou mais. Ou nasceu apelão. Tanto faz.',
  'Isso! Nível de poder é igual boleto: sempre sobe.',
  'Acertou. Se fosse torneio, {menor} saía na primeira rodada.',
  'Certo! Você sabe quem é forte em Dragon Ball. Spoiler: quase nunca é humano.',
  'Boa! O Mr. Satan diria que ganhava dos dois. O Mr. Satan diz muita coisa.',
  'Correto! {maior} só de olhar já faz {menor} suar.',
  'Isso! Tá mais preciso que o scouter do Raditz. Que, convenhamos, errou feio.',
  'Acertou! {menor} pode até treinar mil anos. Vai continuar atrás.',
  'Certo. Ki não mente. Diferente do Mr. Satan.',
  'Boa! Nem o Bills discordaria. E ele discorda de tudo antes do almoço.',
  'Correto! Você entende a escala de poder melhor que o próprio Toriyama.'
],

/* ---------------- peso-pena e baixinhos (os dois valores pequenos) ---------------- */
mmAcertoPesoLeve: [
  'Isso! Briga de peso-mosca: {vmaior} contra {vmenor}. E você viu a diferença.',
  'Certo. Os dois cabem numa mochila. Mas o {maior} pesa mais a mochila.',
  'Acertou! {vmaior} e {vmenor}. Balança de cozinha resolve essa.',
  'Boa! Nada aqui passa de um pacote de arroz, e mesmo assim você acertou.',
  'Correto! Categoria peso-pena. O {maior} é o “gordinho” da turma com {vmaior}.',
  'Isso! O {menor} com {vmenor} voa se você espirrar perto.',
  'Acertou. Pesar bicho pequeno é mais difícil que bicho grande. Respeito.',
  'Certo! {vmaior}. Pra quem é pequenininho, tá até pesadinho.',
  'Boa! Uma disputa de gramas. Tipo pesar pão francês.',
  'Correto! Dá pra carregar os dois no bolso. Um bolso bem grande.',
  'Isso! O {menor} pesa {vmenor}. Levinho como desculpa esfarrapada.',
  'Acertou uma de peso-pluma. Tem olho de balança de farmácia.'
],
mmErroPesoLeve: [
  'Errou! O {maior} pesa {vmaior} e o {menor}, {vmenor}. Coisa de grama, mas errou.',
  'Não! Briga de peso-pena e você apostou no mais levinho. O {maior} tem {vmaior}.',
  'Errou. Os dois são leves, mas o {maior} é menos leve: {vmaior}.',
  'Poxa! {vmaior} contra {vmenor}. Precisava de balança de joalheria, né?',
  'Errado! O {menor} com {vmenor} é mais leve que um livro de escola.',
  'Não era. O {maior} pesa {vmaior}. Pouco, mas mais que o {menor}.',
  'Errou nos gramas! Peso pequeno engana. O {menor} tem só {vmenor}.',
  'Nããão. Disputa de pena contra pena e você escolheu a pena errada.',
  'Errou! O {maior}, com {vmaior}, é o “pesadão” dessa dupla miúda.',
  'Balança de cozinha diz: {maior} {vmaior}, {menor} {vmenor}. Você perdeu pra uma balança de cozinha.'
],
mmAcertoAlturaBaixo: [
  'Isso! Briga de baixinhos: {vmaior} contra {vmenor}. Você mediu certinho.',
  'Certo. Nenhum dos dois alcança a maçaneta. Mas o {maior} chega mais perto.',
  'Acertou! {vmaior}. O {maior} é o gigante da turma dos pequenos.',
  'Boa! Diferença de centímetros e você viu. Régua no olho.',
  'Correto! O {menor} tem {vmenor}. Tamanho de caneca.',
  'Isso! Os dois cabem no colo. O {menor} cabe na mão.',
  'Acertou. Medir baixinho é arte. Você é artista.',
  'Certo! {vmaior} contra {vmenor}. Os dois passam por baixo da mesa sem abaixar.',
  'Boa! O {maior} é “alto” pra quem é pequeno. Tudo é relativo.',
  'Correto! Briga de canela. Você acertou a canela maior.',
  'Isso! O {menor} com {vmenor} precisa de escada pra subir no sofá.',
  'Acertou! Disputa de chaveiro e você escolheu o chaveiro certo.'
],
mmErroAlturaBaixo: [
  'Errou! O {maior} tem {vmaior} e o {menor}, {vmenor}. Briga de centímetros.',
  'Não! Os dois são baixinhos, mas o {maior} é menos baixinho: {vmaior}.',
  'Errou. {vmaior} contra {vmenor}. Precisava de régua escolar, né?',
  'Poxa! O {menor} tem só {vmenor}. Cabe dentro de um sapato.',
  'Errado! Baixinho engana. O {maior} mede {vmaior}.',
  'Não era. Disputa de nanicos e você apostou no mais nanico.',
  'Errou nos centímetros! O {menor} é tamanho de controle remoto.',
  'Nããão. O {maior} com {vmaior} é o “altão” dessa dupla miniatura.',
  'Errou! Diferença pequena, erro grande. O {menor}: {vmenor}.',
  'Na arte oficial os dois parecem iguais. Na régua, o {maior} ganha: {vmaior}.'
],

/* ---------------- pesos-pesados e gigantes (os dois valores grandes) ---------------- */
mmAcertoPesoPesado: [
  'Isso! Briga de peso-pesado: {vmaior} contra {vmenor}. O chão tremeu com os dois.',
  'Certo! Os dois quebram balança de banheiro. O {maior} quebra mais.',
  'Acertou! {vmaior}. Nessa dupla, ninguém sobe em árvore.',
  'Boa! Luta de sumô dos Pokémon e você escolheu o vencedor.',
  'Correto! O {menor} tem {vmenor} e ainda assim é o “magrinho” da dupla.',
  'Isso! Dois tanques de guerra, e o {maior} é o tanque maior.',
  'Acertou. Precisa de guindaste pros dois. Pro {maior}, um guindaste maior.',
  'Certo! {vmaior} contra {vmenor}. Nenhum dos dois entra no elevador junto.',
  'Boa! Pesos-pesados e você sentiu qual afundava mais o chão.',
  'Correto! Se os dois sentarem na gangorra, o {menor} vai pro espaço.'
],
mmErroPesoPesado: [
  'Errou! Os dois são pesadões, mas o {maior} pesa {vmaior}. O {menor}, “só” {vmenor}.',
  'Não! Briga de peso-pesado e você apostou no mais leve dos dois gordos.',
  'Errou. {vmaior} contra {vmenor}. Os dois afundam o chão, um afunda mais.',
  'Poxa! O {maior}, com {vmaior}, venceu a luta de sumô.',
  'Errado! Parecia empate de tanque de guerra, mas o {maior} é mais pesado.',
  'Não era. O {menor} tem {vmenor}. Pesado? Sim. Mais pesado? Não.',
  'Errou! Na gangorra, o {menor} tinha ido pro espaço.',
  'Nããão. Dois caminhões e você escolheu o caminhão vazio.',
  'Errou! {maior}: {vmaior}. Aquilo não é Pokémon, é obra de engenharia.',
  'Não! Pesado contra pesado, o {maior} leva no detalhe.'
],
mmAcertoAlturaAlto: [
  'Isso! Briga de gigantes: {vmaior} contra {vmenor}. O céu ficou apertado.',
  'Certo! Os dois batem a cabeça no teto. O {maior} bate primeiro.',
  'Acertou! Nenhum dos dois cabe numa casa. O {maior} não cabe nem num galpão.',
  'Boa! O {menor} tem {vmenor} e ainda é o “baixinho” da dupla. Coitado.',
  'Correto! Dois prédios de Pokémon e você achou o arranha-céu.',
  'Isso! {vmaior}. O {maior} conversa com passarinho sem pular.',
  'Acertou. Pra fotografar esses dois juntos, só de helicóptero.',
  'Certo! Os dois olham o horizonte. O {maior} vê um pouco mais longe.',
  'Boa! Gigante contra gigante e você mediu certinho.',
  'Correto! O {maior} com {vmaior}. Aviso pros aviões: desviem.'
],
mmErroAlturaAlto: [
  'Errou! Os dois são enormes, mas o {maior} tem {vmaior}. O {menor}, {vmenor}.',
  'Não! Briga de gigantes e você apostou no gigante menor.',
  'Errou. {vmaior} contra {vmenor}. Dois prédios, e você escolheu o mais baixo.',
  'Poxa! O {menor}, com {vmenor}, é enorme. Mas o {maior} é mais.',
  'Errado! Com tanta altura, dá pra se confundir. Deu pra confundir, né?',
  'Não era. O {maior} passa do {menor} por uma boa cabeça. Ou pescoço.',
  'Errou! Na foto dos gigantes, o {menor} fica na frente.',
  'Nããão. O {maior} com {vmaior} olha o {menor} de cima. E você também, errado.',
  'Errou! Gigante contra gigante, o {maior} ganha na régua.',
  'Não! Os dois precisam de escada de bombeiro. A do {maior} é maior.'
],

/* ---------------- acertou, mas foi por um fio ---------------- */
mmPerto: [
  'Ufa! {vmaior} contra {vmenor}. Foi no detalhe.',
  'Acertou por um fio de cabelo. De Saiyajin, que é duro.',
  'Isso foi PERTO. Meu coração de pixel parou por um frame.',
  'Caramba, {vmaior} e {vmenor}. Quase empate técnico. Você tem sangue frio.',
  'Acertou no fotochart! Precisei de câmera lenta pra ver.',
  'Essa foi na unha. {maior} ganhou por pouquinho.',
  'Isso! Diferença mínima. Você chutou ou sabia? Não responde, prefiro o mistério.',
  'Por um triz! Eu já tava preparando a piada da derrota.',
  'Acertou uma que tava no fio da navalha. Respeito.',
  'Olha, {vmaior} contra {vmenor} é covardia do jogo. E você passou. Ok, você venceu.',
  'Quase deu ruim. Quase. A palavra mais bonita do mundo.',
  'Fotografia! {maior} ganhou por um nariz. Se tiver nariz.',
  'Essa era de dar frio na barriga. Minha barriga nem existe e esfriou.',
  'Diferença de nada! Acertou mesmo assim. Nervos de aço, tipo metálico.',
  'Tá de brincadeira. Tão parecidos e você acertou. Aposto que suou.',
  'Isso foi um lance de VAR. E deu pra você.',
  'Por tão pouco que eu ia sugerir empate. Mas você acertou, então tá.',
  'Uau. Nessa até eu teria chutado. E errado.',
  'Acertou no detalhe. Isso não é sorte, é… tá, é um pouco de sorte.',
  'Olha a precisão! Parece ter régua no olho.',
  'Essa era pra separar os fortes dos fracos. Você ficou no lado certo.',
  'Pouquinha diferença e você passou. O jogo tá até com raiva.',
  'Essa foi dura! {vmaior} e {vmenor}. O jogo tentou te derrubar.',
  'Ganhou por um grão de arroz. Um grão! Respeita.',
  'Nossa. Nessa eu ia apostar o contrário. Ainda bem que eu não aposto.'
],

/* ---------------- acertou uma óbvia ---------------- */
mmFacil: [
  'Essa era fácil. {vmaior} contra {vmenor}. Nem conta direito.',
  'Uma óbvia pra aquecer. De nada.',
  'Até um Magikarp acertava essa. Pulando.',
  'Presente do jogo. Aproveita que não dura.',
  'Essa foi de graça. Tipo amostra no mercado.',
  '{maior} contra {menor}? Isso nem é disputa, é humilhação.',
  'Uma dessas eu acertava de olho fechado. E eu nem tenho pálpebra de verdade.',
  'Tá bom, essa não conta muito. Mas conta.',
  'Moleza. Mas moleza também é ponto.',
  'Fácil! Guardei a dificuldade pra daqui a pouco.',
  'Isso foi um aquecimento. Alonga que vem coisa.',
  'Se errasse essa, eu ia chamar a mãe.',
  'Óbvia demais. O desafiante nem queria estar aqui.',
  'Essa foi tipo perguntar se a água é molhada.',
  'Ganhou fácil. {vmenor} contra {vmaior} é briga de formiga com elefante.',
  'Essa até o Mr. Satan acertava. Aí ia dizer que foi difícil.',
  'Rodada bônus de graça. Tá bom, pode comemorar baixinho.',
  'Muito fácil! O jogo tá te iludindo. Cuidado.',
  'Mamão com açúcar. Com açúcar mascavo, que é mais chique.',
  'Essa não valia nem café. Mas ok, ponto.',
  'Qualquer um acertava. Mas você acertou primeiro. Parabéns?',
  'Distância absurda. {vmaior} vs {vmenor}. Fácil demais.',
  'Tão fácil que eu fiquei com vergonha pelo {menor}.',
  'Essa foi pra você ganhar confiança. Agora eu tiro.',
  'Olha, não vou nem comentar. Vou. Foi fácil.'
],

/* ---------------- erros genéricos ---------------- */
mmErro: [
  'Errou! O {b} tem {valor}. O {a} tem {va}. Os números não mentem, você sim.',
  'Não! O {maior} tinha {vmaior}. Fim da linha, parceiro.',
  'Ihhh. Achou que o {menor} ganhava do {maior}? Ganhou nada.',
  'Errado. {vmaior} contra {vmenor}. Fica pra próxima. E pra próxima da próxima.',
  'Nãããão. Eu tava torcendo. Mentira, eu tava com pipoca pronta.',
  'Errou feio, errou rude. O {b} tem {valor}.',
  'Game over. O {maior} venceu, você perdeu, eu ri.',
  'Poxa. O {b} tinha {valor} e você foi pro outro lado.',
  'Que pena! Acabou a sequência. Pelo menos foi com estilo. Não foi.',
  'Errou! Quer que eu finja que não vi? Eu vi. Todo mundo viu.',
  'Não era. {maior}: {vmaior}. {menor}: {vmenor}. Aprende e volta.',
  'Ah não. Você tava indo tão bem. Ou não. Mas tava indo.',
  'Aí não! O {b} revelou {valor} e sua dignidade foi junto.',
  'Errou. O jogo agradece sua participação. Eu também, rindo.',
  'Nop. O {menor} perdeu. Você também, por tabela.',
  'Que chute torto! O {b} tem {valor}.',
  'Errou! Mas não fica triste. Fica um pouquinho. Tá bom, pode ficar triste.',
  'Não, não, não. {vmaior} é maior que {vmenor}. Isso eu sei até dormindo.',
  'Deu ruim! O {maior} ganhou essa com folga.',
  'Aaaah! Tão perto de mais um ponto. Tão longe da verdade.',
  'Errou e eu registrei. Tá no meu caderninho de vergonhas alheias.',
  'Nããão! O {b} tinha {valor}. Chorar é permitido.',
  'Nessa você foi traído pelo instinto. Seu instinto é um traíra.',
  'Errado! Mas foi um erro honesto. Honesto e errado.',
  'Sequência encerrada. {maior} com {vmaior}. Aceita que dói menos.'
],

/* ---------------- erros por categoria ---------------- */
mmErroPeso: [
  'Achou que o {menor} era mais pesado que o {maior}? O {maior} pesa {vmaior}. Come uma salada, {maior}.',
  'Errou! O {maior} pesa {vmaior}. Isso aí não é fofura, é massa.',
  'O {menor} pesa só {vmenor}. Levinho. Você que pesou a mão no chute.',
  'Não! {vmaior} do {maior} contra {vmenor} do {menor}. Balança não perdoa.',
  'Errou o peso. O {maior} tá ofendido. E ele pesa {vmaior}, cuidado com ofender.',
  'O {menor} com {vmenor}? Isso é peso de melancia. Das pequenas.',
  'Achou o {menor} gordinho? Era impressão. O {maior} que é o pesadão: {vmaior}.',
  'Errou! O {maior} tem {vmaior}. Dá pra fazer um churrasco… não. Esquece. Pokémon não.',
  'Peso errado! O {menor} ({vmenor}) é mais leve que um pacote de arroz de 5 kg. Ou quase.',
  'Não era! O {maior} pesa {vmaior}. O chão sabe disso. Você não.',
  'Balança diz: {maior} {vmaior}, {menor} {vmenor}. A balança venceu você.',
  'O {maior} pesa {vmaior}. É praticamente um fusca. Ou vários.',
  'Errou. O {menor} parece pesado, mas é tudo pose. {vmenor}.',
  'Achou mesmo que o {menor} pesava mais? Tadinho, com {vmenor}.',
  'Não! Peso de {maior}: {vmaior}. Peso do seu erro: incalculável.',
  'O {maior} com {vmaior} ri da sua cara. Devagar, porque é pesado.',
  'Errou o peso. Pelo menos o {menor} ficou lisonjeado.',
  'Nem perto! O {maior} tem {vmaior}. Pede um guindaste.',
  'O {menor} pesa {vmenor}. Aquilo ali é mais ar que Pokémon.',
  'Errado! Tamanho não é peso. O {maior} que é o chumbinho aqui: {vmaior}.'
],
mmErroAltura: [
  'Errou! O {maior} tem {vmaior}. O {menor} tem {vmenor}. Mede de novo.',
  'Achou o {menor} alto? Ele tem {vmenor}. Precisa de banquinho.',
  'Não! O {maior} mede {vmaior}. Você tava olhando pro chão?',
  'Errou a altura. O {maior} olha pra você lá de cima agora. Com desdém.',
  'O {menor} tem só {vmenor}. É do tamanho de um gato. Um gato que não sou eu.',
  'Altura errada! {vmaior} contra {vmenor}. Régua neles.',
  'O {maior} tem {vmaior}. Acho que ele até bateu a cabeça no teto do jogo.',
  'Não era. O {menor}, com {vmenor}, fica na ponta dos pés e mesmo assim perde.',
  'Achou que o {menor} era mais alto que o {maior}? Tem {vmaior} de diferença pra cima, amigo.',
  'Errou! O {maior} mede {vmaior}. Isso é altura de poste. Ou de girafa confusa.',
  'O {menor} ({vmenor}) passa por baixo do {maior} sem abaixar. E você errou.',
  'Nããão. A fita métrica ficou triste com você.',
  'O {maior} tem {vmaior}. Mais alto que muita porta. Mais alto que seu chute.',
  'Errou. Ilustração engana, né? O {menor} é pequenininho: {vmenor}.',
  'Altura não se chuta, se mede. O {maior}: {vmaior}.',
  'Errado! O {menor} mede {vmenor}. Cabe numa gaveta. Não coloca.',
  'O {maior} com {vmaior} manda um alô lá de cima. Você não ouviu, tá longe.',
  'Achou o {maior} baixinho? {vmaior}. Ele joga vôlei sem pular.',
  'Errou! Parece que a arte oficial de todo Pokémon tem o mesmo tamanho, né? Pois é, não tem.',
  'Não! {maior}: {vmaior}. {menor}: {vmenor}. Diferença que você não viu.'
],
mmErroDex: [
  'Errou! O {maior} é o {vmaior}. O {menor} é o {vmenor}. Chegou antes.',
  'Não! O {menor} ({vmenor}) é mais antigo que você imagina.',
  'Achou que o {maior} era veterano? {vmaior}. É dos novinhos.',
  'Errou a ordem da Pokédex. O Professor Carvalho tá decepcionado.',
  'Deu {vmaior} contra {vmenor}. Pokédex é igual fila de banco: tem ordem.',
  'Não era! O {menor} vem antes. {vmenor}. Deu branco?',
  'Errou! O {maior} é o {vmaior}. Geração mais nova, rostinho mais novo.',
  'Nããão. A Pokédex tem ordem e você tem… chute.',
  'Achou que o {menor} era de geração nova? {vmenor}. Ele é da velha guarda.',
  'Errou. Mil Pokémon e você trocou justo esses dois de lugar.',
  'Não! {vmaior} do {maior}. Número grande, erro maior ainda.',
  'O {menor} é {vmenor}. Tinha pelo menos que desconfiar do visual retrô.',
  'Errado! Parece que você lê a Pokédex de trás pra frente.',
  'Não era. O {maior} entrou na lista depois. {vmaior}. Fila anda.',
  'Errou o número! Mas acertou no estilo. Mentira, errou nos dois.'
],
mmErroPoder: [
  'Errou! {maior} é bem mais forte que {menor}. {vmaior} contra {vmenor}.',
  'Achou que {menor} ganhava de {maior}? Nem no filler.',
  'Não! {maior} tem {vmaior}. {menor} tem {vmenor}. Nem com a Genki Dama.',
  'Errou. O rastreador explodiu e levou junto sua sequência.',
  'Nããão. {menor} contra {maior} dura meio episódio. E metade é grito.',
  'Errou! {maior} ({vmaior}) apagaria {menor} ({vmenor}) com um olhar.',
  'O ki de {maior} tá lá em cima. Você chutou lá embaixo.',
  'Achou {menor} forte? Tá assistindo Dragon Ball com o olho fechado?',
  'Errou! {menor} precisa de uns 50 anos na Sala do Tempo pra chegar em {maior}.',
  'Não! Até o Mr. Satan sabia essa. Tá, o Mr. Satan não sabia. Mas você devia.',
  'Errado. {maior} tá rindo. {menor} tá fingindo que não ouviu.',
  'Nível de poder errado! {vmaior} contra {vmenor}. Sem fusão que resolva.',
  'Errou! Você subestimou {maior}. Igual todo vilão faz antes de apanhar.',
  'Não era. {menor} com {vmenor} é torcida, não é lutador.',
  'Achou que {menor} tava escondendo o poder? Não tava. Era isso mesmo.',
  'Errou! {maior} é {vmaior}. Isso é tipo apostar no Yamcha. Nunca aposte no Yamcha.',
  'Nããão. Ninguém grita “é mais de 8000” pro {menor}.',
  'O {maior} nem transformou e já ganhou essa comparação.',
  'Errou! Nível de poder não é opinião, é fato. Fato doloroso.',
  'Não! {maior} com {vmaior}. Se {menor} lutar, é Kuririn morrendo de novo.'
],

/* ---------------- errou uma óbvia ---------------- */
mmErroObvio: [
  'Errou ESSA? {vmaior} contra {vmenor}! Eu tô chocado. De verdade.',
  'Como assim?! Era a mais fácil do jogo! O {maior} tem {vmaior}!',
  'Não acredito. Eu tive que olhar duas vezes. O {menor} tem {vmenor}!',
  'Essa era de graça e você recusou o presente.',
  'Você tropeçou numa rodada plana. Sem obstáculo nenhum.',
  'Eu vou fingir que o dedo escorregou. Foi o dedo, né? Diz que foi o dedo.',
  'Errou a óbvia. Isso vai pro meu livro. Capítulo: “inacreditável”.',
  'Tipo errar se o Snorlax é mais pesado que um Pidgey. Enfim, aconteceu.',
  'Era {vmaior} contra {vmenor}! A diferença tava gritando!',
  'Meu processador travou. Como você errou essa?',
  'Até o Psyduck com dor de cabeça acertava.',
  'Isso foi um erro tão grande que vai ter episódio especial.',
  'O jogo te deu a resposta de bandeja e você jogou a bandeja no chão.',
  'Não era pegadinha! Era só óbvio mesmo!',
  'Essa até o Mr. Satan acertava. E olha que ele nunca acertou nada.',
  'Olha, eu não vou nem zoar. Vou. Errou a mais fácil. Pronto, zoei.',
  'Diferença gigante e você foi pro lado errado. Coragem, isso eu admito.',
  'Você viu o {maior}? Olhou pra ele? Ele é enorme nesse quesito!',
  'Erro desse tamanho merece estátua. Na praça. Com placa.',
  'Eu vou contar isso pros outros jogos do fliperama. Todos vão rir.'
],

/* ---------------- errou por pouco ---------------- */
mmErroPerto: [
  'Ahhh, essa foi cruel. {vmaior} contra {vmenor}. Quase nada de diferença.',
  'Errou por um fio! Nessa eu não zoo. Muito.',
  'Poxa, era no detalhe. {maior} ganhou por um tiquinho.',
  'Essa foi maldade do jogo. Mas o jogo não liga pros seus sentimentos.',
  'Diferença mínima e caiu pro lado errado. Acontece com os melhores. E com você.',
  'Nossa, que azar. {vmaior} e {vmenor}. Era cara ou coroa.',
  'Errou por pouco. Pouco, mas errou. O placar não aceita “quase”.',
  'Ah, essa pegou todo mundo. Pegou você também.',
  'Foi na trave! Mas trave não é gol.',
  'Essa até eu errava. Tá, eu não errava. Mas entendo quem erra.',
  'Tão parecidos! O jogo foi desleal. Eu gostei.',
  'Por um grão de areia. Um grão! Revoltante.',
  'Errou no fotochart. Dói mais que errar feio.',
  'Essa era 50/50. Você foi no 50 errado.',
  'Diferencinha de nada e acabou a sequência. A vida é assim, cheia de décimos.'
],

/* ---------------- marcos de sequência ---------------- */
mmMarco5: [
  'Cinco seguidas! Você é oficialmente melhor que um chute aleatório. Por enquanto.',
  'Sequência de 5! Tá lendo a Pokédex de cabeça?',
  'Cinco! Uma mão inteira de acertos. Não conta com a outra ainda.',
  '5 em sequência! Bônus de XP liberado. Eu que liberei. De nada.',
  'Cinco acertos! Já dá pra se achar um pouquinho. Pouquinho.',
  'Cinco! Aquela sensação de “eu sei das coisas”. Aproveita enquanto dura.',
  'Sequência de 5! Se fosse Pokémon, já tinha evoluído.',
  'Cinco seguidas. O jogo começou a te levar a sério.'
],
mmMarco10: [
  'DEZ! Streak de 10! Vitória registrada. Pode contar pros amigos. Eles não vão ligar, mas conta.',
  'Dez seguidas! Isso conta como vitória no fliperama. Tô orgulhoso. Pouco. Mas tô.',
  'Sequência de 10! Você tá jogando com a Pokédex aberta do lado? Eu tô vigiando.',
  '10! Dois dígitos! A partir daqui os pares ficam mais perto. Te avisei.',
  'Dez acertos! O Professor Carvalho quer te contratar. O salário é uma Pokébola.',
  'Dez! Agora é oficial: você é uma enciclopédia de coisa inútil. Parabéns!',
  'Sequência 10! Isso já é nível mestre de ginásio.',
  'DEZ SEGUIDAS! Eu até parei de piscar.'
],
mmMarco15: [
  'QUINZE! Quem é você e o que fez com o jogador normal?',
  'Sequência de 15! Tá difícil te zoar, e eu odeio isso.',
  '15! A essa altura os números tão bem colados e você segue. Respeito.',
  'Quinze seguidas! Isso é nível Liga Pokémon.',
  '15 acertos. Eu preciso de um novo arsenal de piadas.',
  'Quinze! Tô começando a ficar nervoso por você. Continua!'
],
mmMarco20: [
  'VINTE! Isso não é mais sorte, é doença. Das boas.',
  'Sequência de 20! Você é tipo uma Pokédex com pernas.',
  '20 seguidas! Eu tirei o chapéu. Eu não tenho chapéu. Tirei a orelha.',
  'Vinte! O jogo tá sem opção de desafiante pra te parar.',
  '20! Isso é mais de 8000? Proporcionalmente, sim.',
  'VINTE ACERTOS. Alguém chama o Professor Carvalho.'
],
mmMarco30: [
  'TRINTA! Eu não tenho mais palavras. Tenho: você é monstro.',
  'Sequência de 30! Nem o Dexter do Ash acerta tanto.',
  '30 seguidas! Isso vai pro hall da fama do fliperama.',
  'Trinta! Você nasceu dentro de uma Pokédex, é isso?',
  '30! Eu tô com medo. De você. Com carinho, mas medo.',
  'TRINTA. O Zeno Sama ia bater palminha agora.'
],
mmMarcoMuito: [
  'Sequência de {n}! Isso não existe. Mas tá existindo.',
  '{n} seguidas! Já pensou em fazer isso profissionalmente? Não existe essa profissão. Cria.',
  '{n}! Eu desisti de contar. Mentira, o jogo conta. Eu só admiro.',
  '{n} acertos em sequência. Tá quebrando o fliperama.',
  'Sequência {n}! O jogo pediu arrego. Negado, continua.',
  '{n}! Isso é bug? Porque bug aqui sou eu.'
],

/* ---------------- recordes ---------------- */
mmRecordeBatido: [
  'Opa! {n}! Você acabou de passar o seu recorde de {rec}. Agora é território novo.',
  'Recorde batido! {n} é o novo número mágico. Continua que dá pra mais.',
  'Passou seu recorde por 1! Cada acerto daqui pra frente é história.',
  'Superou o antigo recorde de {rec}! O você do passado tá com inveja.',
  '{n}! Novo recorde pessoal em andamento. Não trava agora!',
  'Recorde de {rec} derrubado! Igual Freeza derrubando planeta. Só que bom.',
  'Novo recorde! Eu vou fingir calma, mas tô gritando por dentro.',
  'Olha só, o recorde ficou pequeno. {n} e subindo!',
  'Passou o {rec}! Agora cada ponto é bônus de orgulho.',
  'Recorde superado! Eu anotei. A caneta tremeu.'
],
mmNovoRecorde: [
  'NOVO RECORDE: {n}! Vou emoldurar. Numa moldura de pixel.',
  'Recorde novo! {n} seguidas. Da próxima vez, tenta superar isso. Boa sorte.',
  'Recorde! {n}! Você tá melhorando. Isso me preocupa.',
  '{n} é seu novo recorde! Tira print. Ninguém vai acreditar.',
  'Recorde pessoal: {n}! O você de ontem tá com vergonha.',
  'Novo recorde, {n}! Ganhou um bônus de XP e meu respeito temporário.',
  'Recorde! {n}. Acabou errando, mas acabou em alta.',
  'Olha só, recorde novo: {n}. Perdeu no fim, mas perdeu bonito.',
  '{n} seguidas é seu novo máximo. Não fica muito tempo parado nele.',
  'Recorde quebrado! {n}! Toca a musiquinha da vitória. Ela tocou? Tocou na minha cabeça.'
],

/* ---------------- fim de jogo ---------------- */
mmFimZero: [
  'Zero. Nem um. Você errou a primeira. É um talento raro.',
  'Sequência de 0. Um recorde… ao contrário.',
  'Errou logo de cara! Pelo menos foi rápido, sem sofrimento.',
  'Zero pontos! Nem aqueceu. Bora de novo, sem vergonha.',
  'Primeira rodada e já era. O jogo nem terminou de carregar a piada.',
  'Nenhum acerto. Tudo bem, todo mestre começou no zero. Literalmente.',
  'Zero! Até um Magikarp faria 1 no chute. Estatisticamente.',
  'Nada! Nadica. Mas bora que a próxima vai.',
  'Errou a primeira. Isso aí foi só o tutorial, né?',
  'Zero! Nem deu tempo de eu decorar seu nome.',
  'Sequência zero. Mas a coragem de apertar o botão foi nota dez.',
  'Placar: 0. Mas o potencial é infinito. Ou quase.'
],
mmFimCurto: [
  'Sequência de {n}. Deu pra aquecer. Agora joga de verdade.',
  '{n} seguidas. Curtinho, tipo episódio de resumo.',
  'Só {n}? Tá, foi o dedo frio. Bora de novo.',
  '{n} acertos. É um começo. Um começo bem começo.',
  'Parou em {n}. Nem o Yamcha perde tão cedo. Tá, perde.',
  '{n}! Não é ruim. Não é bom. É {n}.',
  'Acabou em {n}. O jogo sentiu o gostinho e pediu mais.',
  'Sequência de {n}. Eu acredito em você. Com ressalvas.',
  '{n} seguidas. Faltou pouco pro 5. Pouco é relativo.',
  'Parou no {n}. Respira, joga mais uma. É assim que começa o vício.',
  '{n}! Cê tá só testando o jogo, né? Tá. Finjo que acredito.',
  'Fim com {n}. Na próxima, pensa um segundo a mais. Um só.',
  'Sequência {n}. O Pikachu fez mais que isso na primeira temporada. Ou não. Mas parece.',
  '{n} pontos. Dá pra melhorar. E eu vou estar aqui pra ver. E comentar.',
  'Acabou em {n}. Mas foi bonito enquanto durou. Foram uns 20 segundos.'
],
mmFimMedio: [
  '{n} seguidas! Respeitável. Não histórico, mas respeitável.',
  'Sequência de {n}. Você sabe umas coisas. Estranhas, mas sabe.',
  '{n}! Tava ficando bom. Aí o jogo lembrou que existe.',
  'Acabou em {n}. Isso já é nível de treinador com insígnia.',
  '{n} acertos. Se fosse prova, passava de ano.',
  'Parou em {n}. Os números começaram a ficar parecidos, né? Eu vi.',
  'Sequência {n}. Quase dois dígitos! Quase.',
  '{n}! Bom jogo. O Bugado aprova. Com moderação.',
  'Fim em {n}. Uma boa corrida. Faltou fôlego no final.',
  '{n} seguidas. Mais uma dessas e você vira referência. Pra mim. Só pra mim.',
  'Parou no {n}. Agora você sabe que dá. Então vai lá e dá mais.',
  '{n} pontos! Nada mal pra quem não decorou a Pokédex. Decorou?'
],
mmFimLongo: [
  '{n} seguidas! Isso é uma baita sequência. Eu tô orgulhoso e não sei lidar.',
  'Que corrida! {n}! Eu fiquei até sem sarcasmo por um tempo.',
  'Sequência de {n}. Você é um perigo pra enciclopédias.',
  '{n}! Isso vai pro mural do fliperama. Com moldura.',
  'Acabou em {n}. E acabou porque o jogo precisou apelar.',
  'Olha isso: {n}. Nem o Dexter do Ash tem essa memória.',
  '{n} seguidas! Pode respirar. Faz tempo que você não respira, né?',
  'Fim em {n}. Mas que fim. Épico. Tipo final de saga.',
  '{n}! Você chegou tão longe que eu comecei a torcer. Não conta pra ninguém.',
  'Sequência {n}. Você não joga, você consulta o oráculo.',
  '{n} acertos! Tá liberado se gabar no grupo da família.',
  'Parou em {n}. Nível Mestre Pokémon. Com diploma e tudo.'
],

/* ---------------- escolheu a categoria ---------------- */
mmEscolhaPeso: [
  'Peso Pokémon! Hora de descobrir quem precisa de dieta.',
  'Peso! Lembra: tamanho não é documento. Às vezes é.',
  'Categoria Peso. O Snorlax tá se aquecendo lá no fundo.',
  'Pesagem oficial dos Pokémon! Sobe na balança, um de cada vez.',
  'Peso! Fantasma pesa quase nada. Pedra pesa muito. Metal pesa MUITO. Anota.',
  'Bora pesar Pokémon. A balança já tá com medo.',
  'Peso Pokémon. Dica grátis: tipo metálico costuma ser pesadão.',
  'Peso! Vai ter surpresa. Tem bicho pequeno que pesa uma tonelada.'
],
mmEscolhaAltura: [
  'Altura! Pega a fita métrica. E a escada.',
  'Categoria Altura. As artes oficiais têm todas o mesmo tamanho. Não confia nelas.',
  'Altura Pokémon! Tem cobra de 20 metros e flor de 10 centímetros. Boa sorte.',
  'Bora medir Pokémon. Alguns não cabem na sala.',
  'Altura! Serpente e dragão costumam ser compridos. Fada costuma ser pingo de gente.',
  'Altura escolhida. O Wailord já tá rindo lá do alto.',
  'Categoria Altura. Tamanho importa, pelo menos aqui.',
  'Altura! Dica: quem nada no mar costuma ser enorme. Costuma.'
],
mmEscolhaDex: [
  'Número da Pokédex! Quem veio depois? Só nerd acerta. Seja nerd.',
  'Nº da Pokédex. Lembra das gerações: 151, 251, 386, 493… decorou?',
  'Pokédex! Aqui é memória pura. Ou chute com confiança.',
  'Categoria Nº da Pokédex. O Professor Carvalho tá de olho.',
  'Número! Dica: saber a geração do Pokémon já resolve metade.',
  'Pokédex por número. Começa no Bulbasaur, termina no Pecharunt. O resto é com você.',
  'Nº da Pokédex! Os iniciais abrem cada geração. Usa isso.',
  'Bora de número. Mais de mil Pokémon em fila. Quem tá na frente?'
],
mmEscolhaMisto: [
  'Misturado! Cada rodada é peso ou altura. Lê a pergunta, tá?',
  'Modo bagunça! Peso e altura se revezando. Presta atenção no que eu pergunto.',
  'Misturado. Aqui o erro mais comum é responder altura quando é peso. Não seja comum.',
  'Mistura! O Onix é alto mas nem é tão pesado. Pensa nisso.',
  'Misturado escolhido. Seu cérebro vai trocar de marcha toda hora.',
  'Peso e altura no mesmo liquidificador. Bora!',
  'Misto! Grande nem sempre é pesado. Fantasma alto pesa nada. Guarda isso.',
  'Modo misturado. O caos é meu habitat natural. Bem-vindo.'
],
mmEscolhaPoder: [
  'Poder de Luta! Quem é mais forte? Pergunta que dividiu recreios no Brasil inteiro.',
  'Dragon Ball! O rastreador tá ligado. Tenta não explodir ele.',
  'Poder de Luta. Dica: humano quase sempre perde. Quase sempre.',
  'Bora medir ki. Sem transformação no meio da resposta.',
  'Poder de Luta DB! Anjo e Zeno no topo, Mr. Satan lá embaixo. O resto é discussão.',
  'Categoria Poder. Se aparecer o Yamcha, você já sabe.',
  'Poder de Luta! Aqui ninguém empata. Alguém sempre apanha.',
  'É mais de 8000? Vamos descobrir, rodada por rodada.'
],
mmMistoTroca: [
  'Agora é {metrica}! Olha a pergunta antes de apertar.',
  'Mudou pra {metrica}. Não vai no automático.',
  'Atenção: {metrica}! O jogo trocou e não avisou. Eu avisei.',
  'Trocamos pra {metrica}. Seu cérebro trocou junto? Espero.',
  'Pergunta de {metrica}! Tem gente que erra aqui por pressa.',
  'Rodada de {metrica}. Respira e lê.',
  'É {metrica} agora. Cuidado com a pegadinha do tamanho.',
  'Virou {metrica}! Lê a pergunta, lê a pergunta, lê a pergunta.',
  'Pergunta nova: {metrica}. Tudo muda, menos minha vontade de zoar.',
  'Agora vale {metrica}. Esquece o que você achou antes.'
],

/* ---------------- desafio do dia ---------------- */
mmDiarioInicio: [
  'Desafio do Dia #{n}! 15 pares, igual pra todo mundo. Uma chance só. Sem pressão. Muita pressão.',
  'Diário #{n}! Todo mundo recebe os mesmos pares hoje. Bora ser melhor que todo mundo.',
  'Desafio do dia. Errou, acabou. Acertou 15, lenda. O meio-termo é a vida.',
  'Começou o diário #{n}. Os primeiros são fáceis. Os últimos… vamos ver.',
  'Desafio #{n}! Mistura de peso, altura e número. Lê a pergunta!',
  'Diário! Uma tentativa por dia. Não tem “só mais uma”. Joga sério.',
  'Desafio do Dia. 10 acertos já conta como vitória. 15 conta como “para de se exibir”.',
  'Diário #{n}, 15 rodadas. Eu comento todas. Sorte a sua.'
],
mmDiarioRetomou: [
  'Voltou pro diário! Você parou na rodada {n}. Continua daí.',
  'Retomando o desafio. Rodada {n}. Não achou que ia escapar, né?',
  'O diário esperou você. Rodada {n}. Sem trapaça, hein.',
  'De volta! Rodada {n} do diário. Foco.',
  'Continuando do ponto onde você fugiu: rodada {n}.'
],
mmDiarioFeito: [
  'Desafio do dia: {n}/15. Compartilha e humilha o grupo.',
  'Terminou o diário com {n}/15! Amanhã tem outro. Eu vou lembrar desse.',
  '{n} de 15 no diário! Manda pros amigos. Deixa eles sofrerem também.',
  'Fim do diário: {n}/15. Honesto. Bem honesto.',
  'Diário encerrado com {n}. Amanhã, pares novos e piadas novas.',
  '{n}/15! Se passou de 10, é vitória. Se não passou, é aprendizado. Dolorido.',
  'Pronto, {n}/15 registrado. Agora é esperar a meia-noite. Ou jogar o infinito.',
  'Resultado do dia: {n}. Eu vou comparar com o de amanhã. Sem pena.'
],
mmDiarioPerfeito: [
  '15/15! DIÁRIO PERFEITO! Eu nunca vi isso. Vi agora.',
  'Perfeito! Quinze de quinze! Posta isso em outdoor.',
  '15 de 15! Você é a Pokédex. A Pokédex é você.',
  'DIÁRIO ZERADO! Eu tô sem piada. É a primeira vez. Aproveita.',
  'Todas! Todas as 15! Alguém me segura.'
],
mmDiarioJaFeito: [
  'O diário de hoje já foi: {n}/15. Volta amanhã pra outro.',
  'Já jogou o desafio hoje ({n}/15). Uma vez por dia, espertinho.',
  'Diário feito! {n}/15. Enquanto isso, o modo infinito tá ali te esperando.',
  'Hoje já deu: {n}/15. Não adianta me olhar assim.',
  'Já tem {n}/15 no diário de hoje. Quer compartilhar de novo? Pode, eu deixo.',
  'Diário de hoje encerrado com {n}. Amanhã tem par novo. Prometo.',
  'Uma tentativa por dia, lembra? Você fez {n}/15. Vai de infinito.',
  'O desafio de hoje tá guardado: {n}/15. Eu não esqueço. Nunca.'
],

/* ---------------- empate (raro) ---------------- */
mmEmpate: [
  'EMPATE! {va} e {valor}. Vale ponto pra você. O jogo é generoso às vezes.',
  'Deu igualzinho! Empate conta como acerto. Sorte sua.',
  'Empatou! Os dois com o mesmo valor. Nem o jogo sabia o que fazer.',
  'Mesmo valor! Ponto grátis. Não se acostuma.',
  'Empate técnico! O VAR desistiu e deu pra você.',
  'Iguais! Tipo gêmeos. Ponto pra você.',
  'Empate! Conta como certo. Eu não fiz as regras. Fiz sim.',
  'Idênticos! Qualquer resposta valia. Você acertou por existir.'
],

/* ---------------- menu / início ---------------- */
mmInicio: [
  'Mais ou Menos! Escolhe a categoria e tenta não passar vergonha.',
  'Bem-vindo ao jogo em que o Snorlax sempre ganha. Quase sempre.',
  'Escolhe uma categoria. Ou o Desafio do Dia, se você for corajoso.',
  'Peso, altura, número ou poder de luta. Escolhe sua arma.',
  'É simples: o da direita é MAIS ou MENOS? Simples de explicar, difícil de acertar.',
  'Oi! Hoje é dia de descobrir que você não sabe quanto pesa um Pokémon.',
  'Mais ou Menos: o jogo que transforma sua infância em estatística.',
  'Escolhe logo que o Wailord tá esperando. E ele é grande, ocupa espaço.',
  'Chegou! Senta aí e escolhe uma categoria. O resto eu comento.',
  'Aqui é o jogo do “ah, eu achava que era maior”. Bora.',
  'Tem categoria de Dragon Ball também. Pra quem prefere grito a Pokédex.',
  'Cada categoria tem recorde separado. Então dá pra ser ruim em todas separadamente.'
],
mmMenu: [
  'Voltou pro menu. Vai trocar de categoria ou só fugiu?',
  'Menu! Escolhe outra. Ou a mesma, eu não julgo. Julgo sim.',
  'Trocando de categoria? Estratégia ou medo?',
  'De volta ao menu. Os recordes tão aí te olhando.',
  'Menu. Respira, escolhe e volta pra briga.',
  'Fugiu pro menu. Tudo bem, todo herói tem seu momento de pausa.',
  'Escolhe de novo. Dessa vez com convicção.',
  'Voltou! Quer tentar o Desafio do Dia? Se ainda não fez, claro.'
],

/* ---------------- fatos de Pokémon famosos/extremos ----------------
   Categoria mmFato<nº da Pokédex>. Usadas quando o Pokémon aparece revelado. */
mmFato143: [
  'Snorlax pesa 460 kg. Isso é um sofá com fome.',
  'O Snorlax come 400 kg de comida por dia e dorme o resto. Meta de vida.',
  'Snorlax: 2,1 m e 460 kg. Bloqueia estrada desde 1996.'
],
mmFato790: [
  'Cosmoem pesa 999,9 kg e mede 10 cm. Física? Não conheço.',
  'O Cosmoem é um grão de feijão de uma tonelada. Não cai no pé.',
  'Cosmoem: 0,1 m de altura, 999,9 kg. O Pokémon mais bugado. Me identifico.'
],
mmFato789: [
  'Cosmog pesa 0,1 kg. Aí evolui pra Cosmoem e vira 999,9 kg. Pior dieta do mundo.',
  'O Cosmog é uma nuvenzinha de 100 gramas. Cabe na palma da mão. Não aperta.',
  'Cosmog: levinho, fofo e prestes a virar uma bigorna cósmica.'
],
mmFato797: [
  'Celesteela pesa 999,9 kg e tem 9,2 m. É um foguete. Literalmente.',
  'A Celesteela empata com o Cosmoem no peso: 999,9 kg. O teto da balança.',
  'Celesteela: um bambu-foguete de uma tonelada. Ultra Beast não tem limite.'
],
mmFato92: [
  'Gastly pesa 0,1 kg. É 95% gás. Os outros 5%? Rancor.',
  'O Gastly tem 1,3 m e pesa 100 gramas. É basicamente um peido com cara.',
  'Gastly: leve como fumaça. Porque ele é fumaça.'
],
mmFato93: [
  'Haunter tem 1,6 m e pesa 0,1 kg. Um fantasma magro de verdade.',
  'O Haunter pesa 0,1 kg. Aí vira Gengar e pesa 40,5 kg. Quem engordou 400 vezes?',
  'Haunter: 100 gramas de pura língua pra fora.'
],
mmFato94: [
  'Gengar pesa 40,5 kg. O Haunter pesava 0,1. Evoluiu comendo, pelo visto.',
  'O Gengar tem 1,5 m. Menor que o Haunter! Evolução encolhendo. Bug meu favorito.',
  'Gengar: a sombra que sorri. E pesa 40 kg. De sombra.'
],
mmFato890: [
  'Eternatus tem 20 metros. É o Pokémon mais alto de todos. Um prédio de sete andares com raiva.',
  'Eternatus: 20 m e 950 kg. Só 950 kg pra 20 metros? É um dragão oco.',
  'O Eternatus é tão comprido que a arte oficial precisa de zoom out.'
],
mmFato669: [
  'Flabébé mede 0,1 m e pesa 0,1 kg. É uma florzinha com um Pokémon dentro. Ou o contrário.',
  'A Flabébé é tão pequena que carrega a flor como guarda-chuva.',
  'Flabébé: 10 cm, 100 gramas, 100% fofura. Um dos menores Pokémon que existem.'
],
mmFato321: [
  'Wailord tem 14,5 m mas pesa só 398 kg. Menos que o Snorlax! É uma baleia inflável.',
  'O Wailord é gigantesco e pesa menos que um Snorlax. A natureza é piada.',
  'Wailord: o maior Pokémon que você conhece. E ainda assim o Eternatus ri dele.'
],
mmFato95: [
  'Onix tem 8,8 m e pesa 210 kg. Uma cobra de pedra que é quase oca.',
  'O Onix é enorme, mas o Steelix pesa quase o dobro. Metal pesa mais que pedra, anota.',
  'Onix: 8,8 metros de rocha do Brock. E perde pra um Pikachu de vez em quando.'
],
mmFato208: [
  'Steelix: 9,2 m e 400 kg. O Onix virou metal e engordou 190 kg.',
  'O Steelix é mais pesado que o Onix por causa do aço. Musculação de ferro.',
  'Steelix mede 9,2 m. Tipo um ônibus de pé. Um ônibus de aço.'
],
mmFato25: [
  'Pikachu: 0,4 m e 6 kg. O mascote que carregou uma franquia inteira nas costas. Nas costas de 40 cm.',
  'O Pikachu pesa 6 kg. Menos que um saco de ração. E dá choque.',
  'Pikachu é o nº 25. Não é o nº 1. Nunca foi. O Bulbasaur agradece.'
],
mmFato129: [
  'Magikarp pesa 10 kg e só sabe pular. Aí vira Gyarados de 235 kg. Glow up.',
  'O Magikarp tem 0,9 m. Um peixe grande, inútil e querido.',
  'Magikarp: o investimento mais arriscado da Pokédex. Rende muito no fim.'
],
mmFato130: [
  'Gyarados: 6,5 m e 235 kg. Tudo isso saiu de um Magikarp. Nunca subestime ninguém.',
  'O Gyarados tem 6,5 metros de pura raiva acumulada de quando era peixe.',
  'Gyarados pesa 235 kg. O Magikarp pesava 10. Treino pesado. Pesado mesmo.'
],
mmFato383: [
  'Groudon pesa 950 kg. Criou os continentes. Deve ser pesado mesmo.',
  'O Groudon tem 3,5 m e quase uma tonelada. Um vulcão com pernas.',
  'Groudon: 950 kg, o mesmo peso do Eternatus, que tem 20 m. Denso, esse aí.'
],
mmFato750: [
  'Mudsdale pesa 920 kg. Um cavalo de barro de quase uma tonelada.',
  'O Mudsdale tem 2,5 m e 920 kg. Coice dele vale mais que o carro.',
  'Mudsdale: é um cavalo e pesa mais que o Dialga. Fazenda forte.'
],
mmFato798: [
  'Kartana pesa 0,1 kg. É um origami que corta aço.',
  'A Kartana tem 30 cm e 100 gramas. Leve como papel, porque é papel.',
  'Kartana: o Pokémon mais perigoso que cabe num envelope.'
],
mmFato746: [
  'Wishiwashi pesa 0,3 kg sozinho. Em cardume vira monstro. Igual gente em grupo de WhatsApp.',
  'O Wishiwashi tem 20 cm na forma solo. Um peixinho chorão.',
  'Wishiwashi: pequeno sozinho, gigante na turma. Moral da história? Não sei.'
],
mmFato595: [
  'Joltik mede 0,1 m. É um carrapato elétrico. Fofo e nojento ao mesmo tempo.',
  'O Joltik tem 10 cm e 0,6 kg. Gruda em você pra roubar energia. Tipo boleto.',
  'Joltik: um dos Pokémon mais baixinhos que existem. Cuidado onde pisa.'
],
mmFato764: [
  'Comfey tem 10 cm e 0,3 kg. É uma coroa de flores que se acha Pokémon.',
  'O Comfey pesa 300 gramas. Menos que um celular. E cheira melhor.',
  'Comfey: minúsculo e cheiroso. O oposto do Snorlax, em todos os sentidos.'
],
mmFato132: [
  'Ditto: 0,3 m e 4 kg. Pode virar qualquer coisa, mas não consegue virar mais pesado de verdade.',
  'O Ditto pesa 4 kg. Uma gelatina roxa com problemas de identidade.',
  'Ditto é o nº 132. Número de Pokémon que ele pode imitar: todos.'
],
mmFato151: [
  'Mew: 0,4 m e 4 kg. O Pokémon mais raro pesa menos que um gato.',
  'O Mew tem o DNA de todo Pokémon e pesa 4 kg. Compacto.',
  'Mew é o nº 151. Foi escondido no jogo original. Até hoje tem lenda do caminhão.'
],
mmFato150: [
  'Mewtwo: 2 m e 122 kg. Clonaram o Mew e saiu isso. Controle de qualidade falhou.',
  'O Mewtwo pesa 30 vezes mais que o Mew. Clone com fermento.',
  'Mewtwo é o nº 150. O Mew, que veio antes, é o 151. Faz sentido? Não.'
],
mmFato977: [
  'Dondozo tem 12 m e 220 kg. Um bagre gigante que pesa menos que o Snorlax.',
  'O Dondozo é enorme e anda com um Tatsugiri na boca. Parceria estranha.',
  'Dondozo: 12 metros. Chega a ser maior que o Wailord? Não, ele tem 14,5. Mas quase.'
],
mmFato376: [
  'Metagross pesa 550 kg e mede 1,6 m. Um computador de aço com quatro patas.',
  'O Metagross tem quatro cérebros e 550 kg. Pensa pesado.',
  'Metagross: mais pesado que o Wailord, que é dez vezes maior. Aço, sempre o aço.'
],
mmFato384: [
  'Rayquaza tem 7 m e 206,5 kg. Um dragão comprido e surpreendentemente leve.',
  'O Rayquaza mora na camada de ozônio. E pesa menos que um Snorlax.',
  'Rayquaza: 7 metros de dragão verde. Separa briga de Groudon e Kyogre.'
],
mmFato50: [
  'Diglett mede 0,2 m. Pelo menos a parte que aparece. O resto é mistério.',
  'O Diglett pesa 0,8 kg. Ninguém sabe o que tem debaixo da terra. Ninguém.',
  'Diglett: 20 cm visíveis. As pernas são o maior segredo da Pokédex.'
],
mmFato1000: [
  'Gholdengo é o nº 1000! Um Pokémon feito de moedas de ouro. Pesa 30 kg. De ouro!',
  'O nº 1000 da Pokédex é um surfista de moedas. Justo.',
  'Gholdengo: 1,2 m de puro ouro. E pesa 30 kg? Ouro barato, hein.'
],
mmFato1: [
  'Bulbasaur é o nº 1. O primeiro de todos. Respeita o veterano.',
  'Bulbasaur: nº 1 da Pokédex, 6,9 kg. Todo mundo começa em algum lugar.',
  'O Bulbasaur é o nº 1 e não precisa provar nada pra ninguém.'
],
mmFato1025: [
  'Pecharunt é o nº 1025, o último da Pokédex. Veio lá do fim da fila.',
  'Pecharunt: o último da lista. E pesa 0,3 kg. Um pêssego venenoso.',
  'O nº 1025 é uma fruta roxa com cara de golpe. Encerra a Pokédex com estilo.'
],
mmFato799: [
  'Guzzlord pesa 888 kg. Come prédios. Faz sentido pesar isso.',
  'O Guzzlord tem 5,5 m e 888 kg. Um estômago com dentes.',
  'Guzzlord: a Ultra Beast da gula. O Snorlax é aluno dele.'
],
mmFato805: [
  'Stakataka pesa 820 kg. É uma parede. Viva. De tijolos. Que anda.',
  'O Stakataka é um monte de tijolos alienígenas empilhados. 5,5 m de muro.',
  'Stakataka: se você achou que era leve, você nunca carregou tijolo.'
],
mmFato742: [
  'Cutiefly: 0,1 m e 0,2 kg. Uma mosquinha fofa que sente aura.',
  'O Cutiefly pesa 200 gramas. Uma borboleta de bolso.',
  'Cutiefly é tão pequeno que você confunde com poeira brilhante.'
],
mmFato854: [
  'Sinistea mede 0,1 m. É um fantasma que mora numa xícara de chá.',
  'O Sinistea pesa 0,2 kg. É chá assombrado. Não bebe.',
  'Sinistea: tamanho de xícara, energia de filme de terror.'
],
mmFato713: [
  'Avalugg pesa 505 kg. Um iceberg com patas.',
  'O Avalugg tem 2 m e meia tonelada. Porta-aviões de gelo.',
  'Avalugg: mais pesado que o Wailord e sete vezes mais baixo. Gelo compacto.'
],
mmFato487: [
  'Giratina pesa 750 kg e mora num mundo invertido. Até a balança fica de ponta-cabeça.',
  'O Giratina tem 4,5 m. Uma lenda com muito peso nas costas. Literalmente.',
  'Giratina: 750 kg de dragão fantasma. Nada leve pra um fantasma.'
],
mmFato76: [
  'Golem pesa 300 kg. É uma pedra redonda que explode. Carinho, só de longe.',
  'O Golem tem 1,4 m e 300 kg. Rola ladeira abaixo por diversão.',
  'Golem: se ele sentar no seu pé, o pé vira decoração.'
],

/* ---------------- fatos de Dragon Ball ----------------
   Categoria mmFatoDB<nome normalizado, só letras/números>. */
mmFatoDBmrsatan: [
  'Mr. Satan: nível de poder de gente comum. Ego de deus da destruição.',
  'O Mr. Satan “derrotou” o Cell. Todo mundo acredita. Menos quem assistiu.',
  'Mr. Satan é o homem mais forte da Terra. Segundo o Mr. Satan.'
],
mmFatoDByamcha: [
  'Yamcha! Morreu pra um Saibaman. O meme é eterno.',
  'O Yamcha é mais forte que um humano comum. É o máximo que dá pra dizer.',
  'Yamcha: ex-bandido do deserto, ex-namorado da Bulma, ex-vivo várias vezes.'
],
mmFatoDBzenosama: [
  'Zeno Sama apaga universos por tédio. E é fofinho. Combinação perigosa.',
  'O Zeno Sama está no topo de tudo. Nível 10. Nível “não mexe comigo”.',
  'Zeno Sama: o rei de tudo. Tem cara de criança e o poder de um botão de deletar.'
],
mmFatoDBbills: [
  'Bills: deus da destruição, gato egípcio, fã de pudim. Não pega o pudim dele.',
  'O Bills destrói planeta por causa de comida ruim. Crítico gastronômico raiz.',
  'Bills tem nível 9. O Whis, que é o assistente dele, tem 10. Chefe fraco, estagiário forte.'
],
mmFatoDBwhis: [
  'Whis é anjo, nível 10, e trabalha de babá do Bills. Salário? Comida da Terra.',
  'O Whis pode voltar o tempo três minutos. Eu queria isso depois de cada erro seu.',
  'Whis: o mais forte do universo 7 e o mais educado também.'
],
mmFatoDBgoku: [
  'Goku: nível 9. Salva o universo e esquece de trabalhar.',
  'O Goku come por dez e treina por cem. A Chi-Chi paga as contas.',
  'Goku bateu a cabeça quando bebê e virou o cara mais gente boa do universo.'
],
mmFatoDBvegeta: [
  'Vegeta: nível 9 e orgulho nível 10.',
  'O Vegeta é o príncipe dos Saiyajins. Ele vai te lembrar disso. Sempre.',
  'Vegeta: “É mais de 8000!” Foi ele. Ou foi o Nappa. Ninguém lembra direito.'
],
mmFatoDBkuririn: [
  'Kuririn: o humano mais forte. E o que mais morre. Coincidência? Não.',
  'O Kuririn casou com a Androide 18. Venceu na vida, mesmo apanhando.',
  'Kuririn: careca, baixinho, corajoso e colecionador de mortes.'
],
mmFatoDBbulma: [
  'Bulma: nível de poder 1, nível de inteligência infinito.',
  'A Bulma não luta, mas sem ela ninguém acharia esfera nenhuma.',
  'Bulma dá bronca no deus da destruição. Poder de luta 1, coragem 10.'
],
mmFatoDBcell: [
  'Cell: tem DNA de todo mundo. Inclusive do Mr. Satan? Não. Graças a Deus.',
  'O Cell fez um torneio só pra se exibir. Perdeu pra uma criança.',
  'Cell perfeito! E derrotado pelo Gohan com um braço só.'
],
mmFatoDBfreeza: [
  'Freeza: nível 9, educado, destruidor de planetas. Tipo um gerente malvado.',
  'O Freeza voltou dos mortos mais vezes que o Kuririn morreu. Quase.',
  'Freeza tem várias formas. A mais assustadora é a que fala baixinho.'
],
mmFatoDBmajinboo: [
  'Majin Boo transforma gente em chocolate. Pesadelo e sobremesa.',
  'O Boo gordo virou amigo do Mr. Satan. A amizade mais estranha do anime.',
  'Majin Boo: rosa, fofinho e capaz de explodir a Terra. Nessa ordem.'
],
mmFatoDBjiren: [
  'Jiren: nível 9, fala pouco e bate muito.',
  'O Jiren treinou tanto que esqueceu de fazer amigos.',
  'Jiren quase venceu o Torneio do Poder sozinho. Quase. Palavra dolorida.'
],
mmFatoDBbroly: [
  'Broly: o Saiyajin lendário. Grita mais que o Goku. Isso é difícil.',
  'O Broly cresceu num planeta sozinho, sem amigos. Por isso ele grita.',
  'Broly: nível 9 e zero controle da raiva.'
],
mmFatoDBdende: [
  'Dende: o Deus da Terra. Nível de poder de estagiário.',
  'O Dende cura qualquer um, mas não luta nada. O melhor médico do anime.',
  'Dende é Deus e nível 1. A Terra tá em boas mãos? Mais ou menos.'
],
mmFatoDBmestrekame: [
  'Mestre Kame inventou o Kamehameha e ainda assim tem nível 5. Os alunos passaram na frente.',
  'O Mestre Kame é mais velho que a maioria dos planetas. Quase.',
  'Mestre Kame: óculos escuros, tartaruga e um Kamehameha original de fábrica.'
],
mmFatoDBgrandesacerdote: [
  'Grande Sacerdote: nível 10. Pai do Whis. Quem manda de verdade.',
  'O Grande Sacerdote sorri sempre. Ninguém sabe se é simpatia ou ameaça.',
  'Grande Sacerdote: o assistente do Zeno. O cargo mais seguro do multiverso.'
],
mmFatoDBpiccolo: [
  'Piccolo: nível 8, a melhor babá do Gohan. E ainda regenera braço.',
  'O Piccolo era vilão, virou professor. Carreira bonita.',
  'Piccolo bebe só água. E é mais forte que você. Pensa nisso.'
],
mmFatoDBraditz: [
  'Raditz: o irmão do Goku. Nível 4. Morreu no primeiro arco. Família complicada.',
  'O Raditz tinha um rastreador e confiou nele. Erro fatal.',
  'Raditz: cabelo lindo, destino triste.'
],
mmFatoDBchichi: [
  'Chi-Chi: nível 2 no poder, nível 10 na bronca.',
  'A Chi-Chi manda no Goku. Então tecnicamente ela é a mais forte. Tecnicamente.',
  'Chi-Chi quer que o Gohan estude. O universo quer que o Gohan lute. Ela ganha.'
],
mmFatoDBgohan: [
  'Gohan: nível 9 quando quer. O problema é querer.',
  'O Gohan derrotou o Cell e depois foi estudar. Ídolo.',
  'Gohan: poder oculto, óculos de pesquisador. O Clark Kent dos Saiyajins.'
],

/* ---------------- cutucar o mascote ---------------- */
cutucarMaisMenos: [
  'Me cutuca de novo e eu digo que o Snorlax pesa 3 kg.',
  'Ei! Eu não sou o botão MAIS. Nem o MENOS.',
  'Cutucou. Minha altura: 56 pixels. Meu peso: nenhum. Minha paciência: pouca.',
  'Se me cutucar mais, eu viro o próximo desafiante.',
  'Eu peso MAIS ou MENOS que um Gastly? Menos. Eu sou pixel.',
  'Tá procurando resposta aqui? Não tem. Só charme.',
  'Me cutucar não revela o número. Eu já tentei.',
  'Ai! Você cutuca com a força de um Snorlax.',
  'Eu sei o peso de todos os Pokémon. Não vou contar. Tá, o Pikachu pesa 6 kg. Pronto.',
  'Cutucada registrada. Nível de poder: 3. Nível de chatice: 9.',
  'Para de me cutucar e olha o card da direita!',
  'Eu não sou uma balança. Mas se fosse, estaria marcando “chato”.',
  'Cutuca menos, acerta mais. É um conselho grátis.',
  'Você me cutucou MAIS ou MENOS vezes que o recomendado? MAIS.',
  'Ei! Tenho 0,1 kg igual o Gastly. Frágil.',
  'Quer uma dica? A dica é: não me cutucar.',
  'Se você me cutucar 8000 vezes eu viro Super Saiyajin. Mentira. Não tenta.',
  'Me cutucou? Agora eu vou comentar a próxima jogada com o dobro de maldade.',
  'Eu não tenho número na Pokédex. Sou o nº 404.',
  'Cutucar o mascote não aumenta a sequência. Já testaram. Eu anotei.',
  'Ai! Você é mais pesado ou mais leve com o dedo? Mais pesado. Com certeza.',
  'Cutuca eu não, cutuca o botão! O botão gosta.',
  'Eu seria categoria “Poder de Luta 1”. Igual o Mr. Satan. Mas sem a fama.',
  'Toda vez que você me cutuca, um Magikarp pula à toa.',
  'Isso! Me usa de antiestresse enquanto pensa. Mas pensa.',
  'Eu apostei com o Jorge, o pixel rosa, que você passa de 10. Não me faz perder.',
  'Se eu fosse Pokémon, eu seria tipo fantasma/bug. Não existe tipo bug. Existe eu.',
  'Minha altura é MAIS ou MENOS que a do Joltik? Mais. Uns três Joltiks.',
  'Cutucou o mascote. Efeito: nenhum. Mas é fofo.',
  'Pode cutucar. Eu sou peso-pena. Não pesa na consciência.',
  'Você sabia que o Snorlax pesa 460 kg? Sabia, né. Todo mundo sabe. É o fato favorito de todo mundo.',
  'Ai, meu ki! Você drenou meu ki!',
  'Eu não sei se sou mais forte que o Yamcha. Prefiro não testar.',
  'Cuidado! Se me cutucar demais, eu viro Cosmoem: 999,9 kg de má vontade.',
  'Tá, tá, oi. Agora volta pro jogo.',
  'Eu tô aqui pra comentar, não pra ser cutucado. Mas aceito cafuné.',
  'Me cutuca de novo e eu troco todos os pesos por “muito”.',
  'Isso foi um MAIS ou um MENOS? Foi um “para com isso”.',
  'Cada cutucada minha pesa 0,1 kg de culpa em você.',
  'Eu tenho a altura exata de um Pokémon médio. Mentira, não tenho altura nenhuma.',
  'Você tá me cutucando pra ganhar tempo, né? O jogo espera. Eu também. Com julgamento.',
  'Se eu entrasse no jogo, eu ia ser o card mais leve de todos. E o mais bonito.'
]

});

/* ---------------- falas temáticas somadas às gerais ---------------- */
Bugado.extendLines({
  aleatorio: [
    'Curiosidade: o Wailord é enorme e pesa menos que o Snorlax. Até hoje eu não superei.',
    'Se o Gastly pesa 0,1 kg, quanto pesa o cheiro dele? Pergunta séria.',
    'Tô pensando: se o Cosmoem cair do céu, é meteoro ou é Pokémon? Os dois.',
    'O Eternatus tem 20 metros. Eu tenho 56 pixels. Cada um com sua grandeza.',
    'Fato aleatório: tipo metálico quase sempre pesa mais do que parece. Guardou?',
    'Dizem que a Pokédex original do Ash era mais inteligente que ele. Não fui eu que disse.',
    'Imagina a conta de luz do Pikachu. Deve ser negativa.',
    'Já reparou que Pokémon fantasma pesa quase nada e Pokémon pedra pesa tudo? Justiça poética.',
    'Se o Mr. Satan fosse Pokémon, ele seria tipo normal/vacilão.',
    'Eu queria ter o poder do Whis de voltar três minutos. Usaria pra desfazer seus erros. E rir de novo.',
    'O Snorlax dorme 20 horas por dia. As outras 4 ele come. Ídolo.',
    'Pergunta filosófica: o Ditto transformado em Snorlax pesa 460 kg? A Pokédex diz que não. Eu diria que sim.',
    'Acho que eu seria nível de poder 2. Soldado. Mas um soldado muito carismático.',
    'Tem Pokémon de 10 cm e tem de 20 metros. E você achando que a sua família é que era variada.',
    'O Magikarp é a prova de que paciência dá resultado. Demorado. Mas dá.',
    'Se o Kuririn ganhasse um real por cada morte, ele teria… pouco. Mas mais que eu.',
    'Às vezes eu me pergunto se o Onix sente frio. Pedra sente frio? Anota aí pra pesquisar.',
    'Eu já vi o Bills destruir um planeta por causa de pudim. Você já errou coisa por menos.',
    'Pensando aqui: o Flabébé é menor que a flor que ele carrega. Quem carrega quem?',
    'O Zeno Sama apaga universo por tédio. Eu só fico falando. Somos parecidos, eu acho.',
    'Pokédex nova, peso novo. O Pokémon engorda entre as gerações? Às vezes. Mistério.',
    'Imagina subir numa balança e ela marcar 999,9 kg. Coitado do Cosmoem.',
    'Se eu treinar mil anos na Sala do Tempo, eu viro nível 3? Acho que não. Eu fico conversando.',
    'O Diglett nunca mostrou as pernas. Eu respeito o mistério.',
    'Fato: o Gengar é a sombra do Clefable. Teoria de fã. Eu acredito em tudo.',
    'Tem gente que decora a Pokédex inteira. Tem gente que esquece o CEP. Tá tudo bem.',
    'Se a Genki Dama pegasse energia de cada acerto seu, ela ia ser… média.',
    'Eu tô sempre flutuando. Não tenho peso. Nem altura. Nem número. Sou livre.',
    'O Yamcha tá descansando em paz. De novo. Deixa ele.',
    'Às vezes eu penso que o Snorlax tá certo sobre a vida.',
    'Se o Wailord e o Eternatus apostassem corrida de altura, o Eternatus ganhava deitado.',
    'Dizem que o Gohan estudou tanto que virou pesquisador. O poder dele foi pro cérebro.',
    'O Mewtwo foi clonado do Mew e ficou 30 vezes mais pesado. Clone com fermento.',
    'O número 1 da Pokédex é o Bulbasaur. O Pikachu é o 25. Ele nunca foi o primeiro. Nunca esqueça.',
    'O Vegeta falou “é mais de 8000” e a internet nunca mais foi a mesma.',
    'Um Pokémon de gelo de meia tonelada chamado Avalugg. Imagina ele deslizando no seu pé.',
    'Eu queria ter o peso do Gastly e a paz do Snorlax. Tenho o peso. A paz, não.',
    'Se tamanho fosse poder, o Wailord era mais forte que o Mewtwo. Não é. Nem de longe.',
    'Kamehameha. Só queria falar isso. Fala junto: Kameha… meha! Pronto, aliviei.',
    'Quando eu crescer, eu quero ser um Snorlax. Grande, calmo e dormindo em estrada.'
  ],
  parado: [
    'Olha, os dois cards tão te esperando. O da direita tá até com vergonha.',
    'Pensando demais? MAIS ou MENOS. É só isso. Duas opções. Cinquenta por cento!',
    'Tá pesando o Pokémon na mão? Ele é imaginário.',
    'Travou? Aperta qualquer um. Coragem é metade do acerto.',
    'O desafiante tá parado aí faz tempo. Acho que ele dormiu. Igual o Snorlax.',
    'Enquanto você pensa, eu calculei o peso de todos os Pokémon. Não vou contar.',
    'Ô, alguém aí? MAIS ou MENOS? Qualquer coisa serve, menos nada.',
    'Tá tentando lembrar a Pokédex inteira? Leva uns três dias.',
    'O Goku já teria respondido. Errado, mas teria.',
    'Se ficar parado mais um pouco, o card vira fóssil. Tipo Pokémon fóssil.',
    'Tá esperando o card revelar sozinho? Ele não faz isso. Eu já pedi.',
    'Usa o teclado: seta pra cima é MAIS, pra baixo é MENOS. Ou toca na tela. Ou fica aí me olhando.',
    'Quer dica? Não tenho. Mas tenho paciência. Mentira, não tenho.',
    'Tô vendo você. Parado. Pensando. Suando. Tô me divertindo.',
    'Respondeu na cabeça e esqueceu de apertar? Acontece. Aperta.',
    'Tempo não conta aqui. Mas minha paciência conta.',
    'Tanta dúvida assim? Vai no instinto. O instinto erra, mas erra rápido.',
    'Você tá tão parado que parece o Onix esperando o Brock.',
    'Fechou o olho pra pensar? Abre. Os cards tão aqui.',
    'O Kaio do Norte já contou três piadas enquanto você pensava. Todas ruins.'
  ]
});
