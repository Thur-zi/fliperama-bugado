/* ==========================================================
   Falas do Bugado no Mais ou Menos.
   Variáveis (preenchidas pelo jogo, já com <b> nos nomes):
   {a} card da esquerda (conhecido) · {b} desafiante (escondido)
   {va} valor do {a} · {valor} valor do {b}
   {maior}/{menor} quem tem o valor maior/menor · {vmaior}/{vmenor} os valores
   {n} sequência atual (ou pontos) · {rec} recorde · {metrica} peso/altura/nº/poder
   Falas genéricas (podem sair com Dragon Ball): "o {b}", "do {maior}" etc.
   O jogo troca o artigo sozinho pra personagem feminina (o > a, do > da).
   Nada de "ele/dele" nem adjetivo com gênero falando do {a}/{b} nelas.
   Falas de Poder (só Dragon Ball): nome sem artigo.
   ========================================================== */
Bugado.addLines({

/* ---------------- acertos genéricos ---------------- */
mmAcerto: [
  'Acertou uai, quem diria',
  'Certo! {n} seguidas, tô anotando pra usar contra você depois',
  'Isso! O {maior} levou essa com {vmaior}',
  'Acertou de novo. Tá colando de quem?',
  'Boa, {n} na conta. Continua que eu quase me impressiono',
  'Correto. O {menor} ficou com {vmenor} e cara de paisagem',
  'Mandou bem. Mas o próximo tem cara de pegadinha hein',
  'Acertou! Toca aqui. Não tenho mão, toca no ar',
  'Certinho. {vmaior} contra {vmenor}, matemática de padaria',
  'Sim! Mais um pro saco, {n} e contando',
  'Que isso, tá lendo os números pelo brilho da tela?',
  'Acertou e nem suou. Eu suei por você',
  'Correto! Próximo desafiante pode entrar, limpa o pé',
  'Boa. O {b} tem {valor}, cê sabia? Sabia nada, chutou bonito KKKK',
  'Acertou! Já pode pôr especialista em coisa inútil no currículo',
  'Bateu! Um pra você, zero pra minha zoeira',
  'Confere. Meu banco de dados concordou contigo',
  'Certo! A torcida imaginária aplaude',
  'Boa! {n} seguidas, não olha pra baixo',
  'Isso! Eu tinha apostado contra, perdi',
  'Acertou. O {menor} tá indo embora de cabeça baixa',
  'Na mosca',
  'Correto. Cê tá jogando ou fazendo prova de concurso?',
  'Aí sim! {n} seguidas e zero vergonha até agora',
  'Acertou. O desafiante entrou achando que ia te enganar, tadinho',
  'Isso! No fliperama de verdade já tinha ficha grátis',
  'Certo. Respira, mas não muito que o próximo já chegou',
  'Boa! Tá afiado demais',
  'Acertou. Fico feliz. Pouco, mas fico',
  'Correto! {vmaior} contra {vmenor}, deu o que tinha que dar',
  'Mandou bem! Mais um desses e eu vou achar que cê é robô',
  'Acertou, x{n} que isso mano',
  'Isso! O {b} revelou o segredo e cê já sabia',
  'Sim senhor! Pode seguir',
  'Acerto confirmado, o VAR revisou e deu bom',
  'Correto! Vai uma medalha? Não tenho. Aceita um boa? Boa',
  'Isso aí, cabeça rodando liso hoje',
  'Acertou mais uma, tá decorando o jogo?',
  'Certo! {n} e subindo, igual preço de passagem',
  'Boa jogada, papo reto',
  'Acertou! Intuição melhor que previsão do tempo',
  'Correto, nem precisou pensar muito né',
  'Isso! Esse desafiante já era, próximo',
  'Acertou. Placar sobe e meu respeito sobe junto. Um tiquinho',
  'Tá muito fácil pra você hein'
],

/* ---------------- acertos por categoria ---------------- */
mmAcertoPeso: [
  'Isso! O {maior} pesa {vmaior}, cuidado na hora de sentar',
  'Certo. O {menor} com {vmenor} é praticamente um saco de pão',
  'Acertou! {vmaior}? O {maior} não passa em ponte de madeira',
  'Boa. O {menor} pesa {vmenor}, o vento leva',
  'Correto! A balança do Centro Pokémon gemeu com o {maior}',
  'Isso. {maior} com {vmaior}, a dieta começa segunda. Qual segunda ninguém sabe',
  'Acertou! O {menor} pesa menos que mochila de escola',
  'Certo. Se o {maior} pular dá terremoto, o golpe e o de verdade',
  'Correto! Imagina carregar o {maior} no ombro igual o Ash faz com o Pikachu',
  'Boa! O {menor} ({vmenor}) cabe na Pokébola e ainda sobra espaço pro lanche',
  'Acertou. {vmaior} de pura presença',
  'Isso! Eu peso 0 kg, sou pixel. Invejo o {maior}? Um pouco',
  'Correto. O {maior} com {vmaior} só sobe de elevador de carga',
  'Acertou! A Pokébola do {maior} deve ser de concreto',
  'Certo! O {menor} é peso pena, o {maior} é peso sai da frente',
  'Boa! O {menor} vai na bolsa, o {maior} só de caminhão',
  'Isso! {vmaior} contra {vmenor}, nem precisava de balança',
  'Acertou. O {maior} não sobe em árvore, a árvore que desce',
  'Correto! Se o {maior} deitar no sofá o sofá vira tapete',
  'Isso! O {menor} pesa {vmenor}, some na primeira ventania',
  'Certo. Peso é documento e o {maior} tem RG gordinho',
  'Acertou! Cê tem uma balança no olho, assusta um pouco',
  'Boa! O {maior} pesa {vmaior}, o pé dele deve deixar cratera',
  'Correto. Nem o {maior} nem o {menor} eu carregava, sou fantasma',
  'Isso! Pôr o {maior} no 330 lotado ia ser um problema'
],
mmAcertoAltura: [
  'Isso! O {maior} tem {vmaior}, bate a cabeça em porta de shopping',
  'Certo. O {menor} com {vmenor} precisa de banquinho pra pegar biscoito',
  'Acertou! {maior} com {vmaior} joga basquete de olho fechado',
  'Boa! O {menor} mede {vmenor}, some no meio da grama alta',
  'Correto! O {maior} vê o horizonte antes de geral',
  'Isso. Na foto da turma o {maior} fica atrás, sempre',
  'Acertou. O {menor} fica na primeira fila da foto e ainda some',
  'Certo! Pra fazer carinho no {maior} precisa de escada',
  'Boa! {vmaior} contra {vmenor}, parece pai e filho passeando',
  'Correto. O {menor} cabe dentro do boné do Ash',
  'Isso! O {maior} troca lâmpada sem subir em nada',
  'Acertou! O {maior} mede {vmaior}, tá mais pra prédio que pra Pokémon',
  'Certo. O {menor} tem {vmenor}, altura de canela de treinador',
  'Boa! Cê tem uma trena no olho',
  'Correto! O {maior} dá oi pros Pidgey lá em cima',
  'Isso. O {menor} olha pro {maior} e só vê joelho',
  'Acertou! Com {vmaior} o {maior} não entra no ônibus sem abaixar',
  'Certo. {vmaior}, grandão demais',
  'Boa! O {menor} passa por baixo da porta sem abaixar a cabeça',
  'Correto. Altura não é tudo, mas nessa rodada foi',
  'Isso! {maior} com {vmaior}, alguém avisa o avião',
  'Acertou! O {menor} tem {vmenor}, tamanho de chaveiro',
  'Certo! Se o {maior} deitar no chão vira ponte',
  'Boa! Selfie com o {maior} só de drone',
  'Correto! Teu senso de proporção é melhor que de desenhista de anime'
],
mmAcertoDex: [
  'Isso! O {maior} é o {vmaior}, chegou depois na festa',
  'Certo. O {menor} é o {vmenor}, veterano da Pokédex',
  'Acertou! Decorou a Pokédex ou só tem sorte com número?',
  'Boa! {vmenor} vem antes de {vmaior}. O difícil é saber quem é quem',
  'Correto! O {menor} tem mais tempo de casa, merece aumento',
  'Isso! Sabe a ordem da Pokédex melhor que o Professor Carvalho',
  'Acertou. O {maior} é mais novinho na lista, tá tirando a etiqueta ainda',
  'Certo! {vmaior}, parece número de ônibus mas é Pokémon',
  'Boa! A Pokédex do Ash ficaria orgulhosa. Ou com ciúme',
  'Correto. O {menor} chegou antes e pegou o melhor lugar da fila',
  'Isso! Cê sabe a geração pelo cheiro?',
  'Acertou! {vmenor} contra {vmaior}, coisa de nerd. Parabéns nerd',
  'Certo. Pokédex decorada é superpoder. Inútil, mas superpoder',
  'Boa! Lembra número de Pokémon mas não lembra a senha do email',
  'Correto! O {maior} é de geração mais nova, dá pra ver no design',
  'Isso! Mais um e cê recita a Pokédex de trás pra frente',
  'Acertou. O {menor} é o {vmenor}. Clássico, raiz',
  'Certo! Teu cérebro tem índice, é isso?',
  'Boa! Prova de Pokédex tu passava direto',
  'Correto! Jogou muito Pokémon hein, tá tudo bem em casa?'
],
mmAcertoPoder: [
  'Isso! {maior} é mais forte, nem precisa de rastreador',
  'Certo. {menor} perde essa, doeu mas é verdade',
  'Acertou! O rastreador explodiu com {maior} e nem apitou com {menor}',
  'Boa! {maior} tá em {vmaior}. É mais de 8000? É bem mais',
  'Correto! {menor} ({vmenor}) perde essa sem nem tirar o peso de treino',
  'Isso! Cê sente o ki de longe, tá treinando com o Kaio do Norte?',
  'Acertou. {maior} ganha, {menor} vai pro hospital. Clássico do anime',
  'Certo! {menor} contra {maior} ia ser 12 episódios só de grito',
  'Boa! Todo mundo sabia, menos {menor}',
  'Correto. {maior} resolve essa com um peteleco',
  'Isso! Entende de nível de poder mais que o Vegeta',
  'Acertou! {menor} vai precisar de semente dos deuses depois dessa',
  'Certo! {vmaior} contra {vmenor}, a luta acabou antes da abertura',
  'Boa! Nem precisou de Kamehameha pra decidir',
  'Correto! {maior} treinou mais ou nasceu apelão, tanto faz',
  'Isso! Nível de poder é igual passagem de ônibus, só sobe',
  'Acertou. Se fosse torneio {menor} caía na primeira rodada',
  'Certo! Quase nunca o humano ganha, cê já sacou',
  'Boa! O Mr. Satan ia dizer que ganhava dos dois',
  'Correto! Só de olhar {maior} já faz {menor} suar',
  'Isso! Mais preciso que o rastreador do Raditz, que errou feio',
  'Acertou! {menor} pode treinar mil anos, vai continuar atrás',
  'Certo. Ki não mente, diferente do Mr. Satan',
  'Boa! Nem o Bills discordava, e ele discorda de tudo antes do almoço',
  'Correto! Mano cê entende de Dragon Ball demais'
],

/* ---------------- peso-pena e baixinhos (os dois valores pequenos) ---------------- */
mmAcertoPesoLeve: [
  'Isso! Briga de peso mosca, {vmaior} contra {vmenor}, e cê viu a diferença',
  'Certo. Os dois cabem na mochila, mas o {maior} pesa mais a mochila',
  'Acertou! {vmaior} e {vmenor}, balança de cozinha resolve',
  'Boa! Ninguém aqui passa de um saco de arroz e mesmo assim cê acertou',
  'Correto! Categoria peso pena, o {maior} é o gordinho da turma com {vmaior}',
  'Isso! O {menor} com {vmenor} voa se cê espirrar perto',
  'Acertou. Pesar bicho pequeno é mais difícil que bicho grande, respeito',
  'Certo! {vmaior}, pra quem é pequenininho tá até pesadinho',
  'Boa! Disputa de grama, tipo pesar pão de sal',
  'Correto! Dá pra levar os dois no bolso. Bolso grande',
  'Isso! O {menor} pesa {vmenor}, leve igual desculpa esfarrapada',
  'Acertou uma de peso pluma, olho de balança de farmácia'
],
mmErroPesoLeve: [
  'Errou! O {maior} pesa {vmaior} e o {menor} {vmenor}. Coisa de grama, mas errou',
  'Não! Briga de peso pena e cê foi no mais levinho. O {maior} tem {vmaior}',
  'Errou. Os dois são leves, mas o {maior} é menos leve: {vmaior}',
  'Poxa! {vmaior} contra {vmenor}, precisava de balança de joalheria né',
  'Errado! O {menor} com {vmenor} é mais leve que livro de escola',
  'Não era. O {maior} pesa {vmaior}, pouco mas mais que o {menor}',
  'Errou nas gramas! O {menor} tem só {vmenor}',
  'Nãããão. Pena contra pena e cê escolheu a pena errada',
  'Errou! O {maior} com {vmaior} é o pesadão dessa dupla miúda',
  'A balança de cozinha diz {maior} {vmaior}, {menor} {vmenor}. Perdeu pra balança de cozinha KKKKK'
],
mmAcertoAlturaBaixo: [
  'Isso! Briga de baixinho, {vmaior} contra {vmenor}. Mediu certinho',
  'Certo. Nenhum dos dois alcança a maçaneta, mas o {maior} chega mais perto',
  'Acertou! {vmaior}, o {maior} é o gigante da turma dos pequenos',
  'Boa! Diferença de centímetro e cê viu, régua no olho',
  'Correto! O {menor} tem {vmenor}, tamanho de caneca',
  'Isso! Os dois cabem no colo, o {menor} cabe na mão',
  'Acertou. Medir baixinho é arte e cê é artista',
  'Certo! {vmaior} contra {vmenor}, passam os dois debaixo da mesa',
  'Boa! O {maior} é alto pra quem é pequeno. Tudo é relativo',
  'Correto! Briga de canela, cê acertou a canela maior',
  'Isso! O {menor} com {vmenor} precisa de escada pra subir no sofá',
  'Acertou! Disputa de chaveiro e cê escolheu o chaveiro certo'
],
mmErroAlturaBaixo: [
  'Errou! O {maior} tem {vmaior} e o {menor} {vmenor}. Briga de centímetro',
  'Não! Os dois são baixinhos, mas o {maior} é menos baixinho: {vmaior}',
  'Errou. {vmaior} contra {vmenor}, precisava de régua né',
  'Poxa! O {menor} tem só {vmenor}, cabe dentro de um tênis',
  'Errado! Baixinho engana, o {maior} mede {vmaior}',
  'Não era. Disputa de nanico e cê foi no mais nanico',
  'Errou nos centímetros! O {menor} é do tamanho de controle remoto',
  'Nãããão. O {maior} com {vmaior} é o altão dessa dupla miniatura',
  'Errou! Diferença pequena, erro grande. O {menor} tem {vmenor}',
  'Na arte os dois parecem iguais. Na régua o {maior} ganha: {vmaior}'
],

/* ---------------- pesos-pesados e gigantes (os dois valores grandes) ---------------- */
mmAcertoPesoPesado: [
  'Isso! Briga de peso pesado, {vmaior} contra {vmenor}. O chão tremeu',
  'Certo! Os dois quebram balança de banheiro, o {maior} quebra mais',
  'Acertou! {vmaior}. Nessa dupla ninguém sobe em árvore',
  'Boa! Luta de sumô de Pokémon e cê cravou o vencedor',
  'Correto! O {menor} tem {vmenor} e ainda é o magrinho da dupla',
  'Isso! Dois tanques de guerra, o {maior} é o tanque maior',
  'Acertou. Precisa de guindaste pros dois. Pro {maior}, um maior',
  'Certo! {vmaior} contra {vmenor}, os dois não cabem no elevador junto',
  'Boa! Cê sentiu qual afundava mais o chão',
  'Correto! Na gangorra o {menor} ia pro espaço'
],
mmErroPesoPesado: [
  'Errou! Os dois são pesadões, mas o {maior} pesa {vmaior}. O {menor}, só {vmenor}',
  'Não! Briga de peso pesado e cê apostou no mais leve dos dois',
  'Errou. {vmaior} contra {vmenor}, os dois afundam o chão, um afunda mais',
  'Poxa! O {maior} com {vmaior} ganhou a luta de sumô',
  'Errado! Parecia empate de tanque de guerra, mas o {maior} pesa mais',
  'Não era. O {menor} tem {vmenor}. Pesado sim, mais pesado não',
  'Errou! Na gangorra o {menor} tinha ido pro espaço',
  'Nãããão. Dois caminhões e cê escolheu o caminhão vazio',
  'Errou! {maior} com {vmaior}, aquilo é obra de engenharia',
  'Não! Pesado contra pesado, o {maior} leva no detalhe'
],
mmAcertoAlturaAlto: [
  'Isso! Briga de gigante, {vmaior} contra {vmenor}',
  'Certo! Os dois batem a cabeça no teto, o {maior} bate primeiro',
  'Acertou! Nenhum cabe numa casa, o {maior} nem num galpão',
  'Boa! O {menor} tem {vmenor} e ainda é o baixinho da dupla',
  'Correto! Dois prédios e cê achou o arranha-céu',
  'Isso! {vmaior}, o {maior} conversa com passarinho sem pular',
  'Acertou. Foto desses dois juntos só de helicóptero',
  'Certo! Os dois olham o horizonte, o {maior} vê mais longe',
  'Boa! Gigante contra gigante e cê mediu certinho',
  'Correto! O {maior} com {vmaior}, aviões desviem'
],
mmErroAlturaAlto: [
  'Errou! Os dois são enormes, mas o {maior} tem {vmaior}. O {menor}, {vmenor}',
  'Não! Briga de gigante e cê apostou no gigante menor',
  'Errou. {vmaior} contra {vmenor}, dois prédios e cê escolheu o mais baixo',
  'Poxa! O {menor} com {vmenor} é enorme, mas o {maior} é mais',
  'Errado! Com tanta altura dá pra confundir. E confundiu né',
  'Não era. O {maior} passa o {menor} por uma boa cabeça',
  'Errou! Na foto dos gigantes o {menor} vai na frente',
  'Nãããão. O {maior} com {vmaior} te olhando lá de cima',
  'Errou! Gigante contra gigante, o {maior} ganha na régua',
  'Não! Os dois precisam de escada de bombeiro, a do {maior} é maior'
],

/* ---------------- acertou, mas foi por um fio ---------------- */
mmPerto: [
  'Ufa! {vmaior} contra {vmenor}, foi no detalhe',
  'Acertou por um fio de cabelo. De Saiyajin, que é duro',
  'Essa foi PERTO, meu coração de pixel parou um frame',
  'Mano {vmaior} e {vmenor}, quase empate. Sangue frio hein',
  'Acertou no photochart, precisei de câmera lenta',
  'Essa foi na unha. O {maior} ganhou por pouquinho',
  'Diferença mínima. Chutou ou sabia? Não fala não',
  'Por um triz! Eu já tava preparando a piada da derrota',
  'No fio da navalha, respeito',
  'O jogo foi covarde com {vmaior} contra {vmenor} e cê passou',
  'Quase deu ruim. Quase',
  'Photochart! O {maior} ganhou por um nariz',
  'Essa dava frio na barriga, e eu nem tenho barriga',
  'Diferença de nada e cê acertou, nervos de aço',
  'Tão parecidos e cê acertou. Aposto que suou',
  'Lance de VAR e deu pra você',
  'Tão pouco que eu ia sugerir empate',
  'Uau. Nessa eu chutava. E errava',
  'Acertou no detalhe. Sorte? Um pouquinho sim',
  'Precisão de régua no olho',
  'Essa separava os fortes dos fracos, cê ficou do lado certo',
  'Pouquinha diferença e cê passou. O jogo ficou até com raiva',
  'Essa foi dura! {vmaior} e {vmenor}, o jogo tentou te derrubar',
  'Ganhou por um grão de arroz, respeita',
  'Nessa eu apostava o contrário. Ainda bem que eu não aposto'
],

/* ---------------- acertou uma óbvia ---------------- */
mmFacil: [
  'Essa era fácil. {vmaior} contra {vmenor}',
  'Uma óbvia pra aquecer',
  'Até um Magikarp acertava essa. Pulando',
  'Presente do jogo, aproveita que não dura',
  'Essa foi de graça, tipo amostra no supermercado',
  'O {maior} contra o {menor}? Isso nem é disputa, é humilhação',
  'Essa eu acertava de olho fechado',
  'Tá, essa não conta muito. Mas conta',
  'Moleza. Moleza também é ponto',
  'Fácil! Guardei a dificuldade pra daqui a pouco',
  'Aquecimento. Alonga que vem coisa',
  'Se errasse essa eu ia chamar tua mãe',
  'Óbvia demais, o desafiante nem queria tá aqui',
  'Isso foi tipo perguntar se água é molhada',
  'Ganhou fácil, {vmenor} contra {vmaior} é formiga contra elefante',
  'Essa até o Mr. Satan acertava, e ia dizer que foi difícil',
  'Rodada bônus, pode comemorar baixinho',
  'Fácil demais. O jogo tá te iludindo, cuidado',
  'Mamão com açúcar',
  'Essa não valia nem um café, mas ok, ponto',
  'Qualquer um acertava. Mas cê acertou primeiro',
  'Diferença absurda, {vmaior} vs {vmenor}',
  'Tão fácil que eu fiquei com vergonha pelo {menor}',
  'Essa foi pra te dar confiança. Agora eu tiro',
  'Nem vou comentar. Vou sim: foi fácil'
],

/* ---------------- erros genéricos ---------------- */
mmErro: [
  'Errou! O {b} tem {valor} e o {a} tem {va}',
  'Não! O {maior} tinha {vmaior}. Fim da linha, parceiro',
  'Ihhh. Achou que o {menor} ganhava do {maior}? Ganhou nada',
  'Errado. {vmaior} contra {vmenor}, fica pra próxima',
  'Nãããão. Eu tava torcendo. Tava nada, tava com a pipoca pronta',
  'Errou feio, errou rude. O {b} tem {valor}',
  'Game over. O {maior} venceu, cê perdeu, eu ri',
  'Poxa. O {b} tinha {valor} e cê foi pro outro lado',
  'Acabou a sequência. Pelo menos foi com estilo. Não foi',
  'Errou! Quer que eu finja que não vi? Vi. Geral viu',
  'Não era. {vmaior} contra {vmenor}, aprende e volta',
  'Ah não, cê tava indo tão bem. Ou mais ou menos',
  'Aí não! O {b} revelou {valor} e tua dignidade foi junto',
  'Errou. O jogo agradece a participação',
  'Não. O {menor} perdeu e cê perdeu junto',
  'Que chute torto! O {b} tem {valor}',
  'Errou! Pode ficar triste, tá liberado',
  'Não não não. {vmaior} é maior que {vmenor}, isso eu sei até dormindo',
  'Deu ruim! O {maior} ganhou essa com folga',
  'Aaaah! Tão perto de mais um ponto, tão longe da verdade',
  'Errou e eu anotei no caderninho de vergonha alheia',
  'Nããão! O {b} tinha {valor}. Chorar é permitido',
  'O instinto te traiu. Teu instinto é pipoqueiro',
  'Errado! Mas foi um erro honesto',
  'Sequência encerrada. {vmaior} contra {vmenor}, aceita que dói menos'
],

/* ---------------- erros por categoria ---------------- */
mmErroPeso: [
  'Achou o {menor} mais pesado? O {maior} pesa {vmaior}, come uma salada {maior}',
  'Errou! O {maior} pesa {vmaior}, aquilo não é fofura, é massa',
  'O {menor} pesa só {vmenor}. Levinho, cê que pesou a mão',
  'Não! {vmaior} do {maior} contra {vmenor} do {menor}, balança não perdoa',
  'Errou o peso. O {maior} ficou ofendido, e ele pesa {vmaior}, cuidado',
  'O {menor} com {vmenor}? Peso de melancia pequena',
  'Achou o {menor} gordinho? Era impressão. O pesadão é o {maior}: {vmaior}',
  'Errou! O {maior} tem {vmaior}, tamanho não quer dizer nada',
  'Peso errado! O {menor} ({vmenor}) pesa menos que um saco de arroz de 5 kg',
  'Não era! O {maior} pesa {vmaior}, o chão sabe disso, cê não',
  'A balança falou: {maior} {vmaior}, {menor} {vmenor}. A balança te venceu',
  'O {maior} pesa {vmaior}, sobe na balança e ela pede demissão',
  'Errou. O {menor} parece pesado mas é tudo pose, {vmenor}',
  'Achou mesmo que o {menor} pesava mais? Com {vmenor}?',
  'Não! O {maior} pesa {vmaior}. Teu erro pesa mais ainda',
  'O {maior} com {vmaior} rindo da tua cara. Devagar, que é pesado',
  'Errou o peso. Pelo menos o {menor} ficou lisonjeado',
  'Nem perto! O {maior} tem {vmaior}, chama o guindaste',
  'O {menor} pesa {vmenor}, aquilo é mais ar que Pokémon',
  'Errado! O chumbinho aqui é o {maior}: {vmaior}'
],
mmErroAltura: [
  'Errou! O {maior} tem {vmaior} e o {menor} {vmenor}. Mede de novo',
  'Achou o {menor} alto? Tem {vmenor}, precisa de banquinho',
  'Não! O {maior} mede {vmaior}, cê tava olhando pro chão?',
  'Errou a altura. O {maior} te olha lá de cima agora, com desdém',
  'O {menor} tem só {vmenor}, tamanho de gato',
  'Altura errada! {vmaior} contra {vmenor}, régua neles',
  'O {maior} tem {vmaior}, bateu a cabeça no teto do jogo',
  'Não era. O {menor} com {vmenor} fica na ponta do pé e perde assim mesmo',
  'Achou o {menor} mais alto que o {maior}? O {maior} tem {vmaior}, amigo',
  'Errou! O {maior} mede {vmaior}, altura de poste',
  'O {menor} ({vmenor}) passa debaixo do {maior} sem abaixar',
  'Nãããão. A fita métrica ficou triste com você',
  'O {maior} tem {vmaior}, mais alto que muita porta. E que teu chute',
  'Errou. A arte engana né? O {menor} é pequenininho: {vmenor}',
  'Altura não se chuta, se mede. O {maior} tem {vmaior}',
  'Errado! O {menor} mede {vmenor}, cabe numa gaveta',
  'O {maior} com {vmaior} mandando um alô lá de cima',
  'Achou o {maior} baixinho? {vmaior}, joga vôlei sem pular',
  'Errou! Na arte todo Pokémon parece do mesmo tamanho. Não é',
  'Não! {maior} com {vmaior}, {menor} com {vmenor}. Cê não viu a diferença'
],
mmErroDex: [
  'Errou! O {maior} é o {vmaior} e o {menor} é o {vmenor}, chegou antes',
  'Não! O {menor} ({vmenor}) é mais antigo do que cê imagina',
  'Achou o {maior} veterano? {vmaior}, é dos novinhos',
  'Errou a ordem da Pokédex. O Professor Carvalho ficou decepcionado',
  '{vmaior} contra {vmenor}. Pokédex é fila de banco, tem ordem',
  'Não era! O {menor} vem antes, {vmenor}. Deu branco?',
  'Errou! O {maior} é o {vmaior}, geração mais nova',
  'Nãããão. A Pokédex tem ordem e cê tem chute',
  'Achou o {menor} de geração nova? {vmenor}, é da velha guarda',
  'Errou. Mil Pokémon e cê trocou justo esses dois de lugar',
  'Não! O {maior} é o {vmaior}, número grande e erro maior ainda',
  'O {menor} é o {vmenor}. O visual retrô já dava a dica',
  'Errado! Tá lendo a Pokédex de trás pra frente?',
  'Não era. O {maior} entrou na lista depois, {vmaior}. A fila anda',
  'Errou o número. E o estilo também KKKKK'
],
mmErroPoder: [
  'Errou! {maior} é bem mais forte que {menor}. {vmaior} contra {vmenor}',
  'Achou que {menor} ganhava de {maior}? Nem em filler',
  'Não! {maior} tá em {vmaior}, {menor} em {vmenor}. Nem com Genki Dama',
  'Errou. O rastreador explodiu e levou tua sequência junto',
  'Nãããão. {menor} contra {maior} dura meio episódio, e metade é grito',
  'Errou! {maior} ({vmaior}) apaga {menor} ({vmenor}) só com o olhar',
  'O ki de {maior} tá lá em cima e cê chutou lá embaixo',
  'Achou {menor} forte? Assistiu Dragon Ball de olho fechado?',
  'Errou! {menor} precisa de uns 50 anos na Sala do Tempo pra chegar em {maior}',
  'Não! Até o Mr. Satan sabia essa. Tá, ele não sabia, mas cê devia',
  'Errado. {maior} rindo, {menor} fingindo que não ouviu',
  'Nível de poder errado! {vmaior} contra {vmenor}, nem fusão resolve',
  'Errou! Subestimou {maior} igual todo vilão antes de apanhar',
  'Não era. {menor} com {vmenor} tá mais pra torcida que pra luta',
  'Achou que {menor} tava escondendo poder? Não tava, era isso mesmo',
  'Errou! {maior} tá em {vmaior}. Nunca aposta contra essa escala',
  'Nãããão. Ninguém grita é mais de 8000 pra {menor}',
  '{maior} nem transformou e já ganhou essa',
  'Errou! Nível de poder não é opinião, mano',
  'Não! {maior} com {vmaior}, {menor} ia virar meme de cratera'
],

/* ---------------- errou uma óbvia ---------------- */
mmErroObvio: [
  'Errou ESSA? {vmaior} contra {vmenor}! Tô chocado',
  'Como assim?! Era a mais fácil do jogo, o {maior} tem {vmaior}!',
  'Não acredito, olhei duas vezes. O {menor} tem {vmenor}!',
  'Essa era de graça e cê recusou o presente',
  'Tropeçou numa rodada plana, sem obstáculo nenhum',
  'Foi o dedo que escorregou né? Fala que foi o dedo',
  'Errou a óbvia. Isso vai pro meu livro, capítulo inacreditável',
  'Tipo errar se o Snorlax pesa mais que um Pidgey. Enfim',
  'Era {vmaior} contra {vmenor}! A diferença tava gritando',
  'Meu processador travou. Como cê errou essa?',
  'Até o Psyduck com dor de cabeça acertava',
  'Erro tão grande que vai ganhar episódio especial',
  'O jogo te deu a resposta de bandeja e cê jogou a bandeja no chão',
  'Não era pegadinha! Era só óbvio mesmo',
  'Mds que jogador patético KKKKKK',
  'Não vou nem zoar. Vou sim: errou a mais fácil',
  'Diferença gigante e cê foi pro lado errado. Coragem pelo menos',
  'Cê olhou pro {maior}? Olhou mesmo?',
  'Erro desse tamanho merece estátua na praça',
  'Vou contar isso pros outros jogos do fliperama, geral vai rir'
],

/* ---------------- errou por pouco ---------------- */
mmErroPerto: [
  'Ahhh essa foi cruel. {vmaior} contra {vmenor}, quase nada de diferença',
  'Errou por um fio. Nessa eu nem zoo. Muito',
  'Poxa, era no detalhe. O {maior} ganhou por um tiquinho',
  'Maldade do jogo, mas o jogo não liga pros teus sentimentos',
  'Diferença mínima e caiu pro lado errado',
  'Que azar, {vmaior} e {vmenor}. Era cara ou coroa',
  'Errou por pouco, mas o placar não aceita quase',
  'Essa pegava todo mundo, pegou você',
  'Na trave! Mas trave não é gol',
  'Essa até eu errava, papo reto',
  'Tão parecidos! O jogo foi desleal, e eu gostei',
  'Por um grão de areia, revoltante',
  'Errou no photochart, dói mais que errar feio',
  'Era 50/50 e cê foi no 50 errado',
  'Diferencinha de nada e acabou a sequência. A vida é cheia de décimo'
],

/* ---------------- marcos de sequência ---------------- */
mmMarco5: [
  'Cinco seguidas! Melhor que chute aleatório, oficialmente',
  'x5 que isso mano, tá jogando demais',
  'Cinco! Uma mão inteira de acerto',
  '5 em sequência, bônus de XP liberado',
  'Cinco acertos. Pode se achar um pouquinho',
  'Cinco! Aquela sensação de que sabe das coisas, aproveita',
  'Sequência de 5! Se fosse Pokémon já tinha evoluído',
  'Cinco seguidas, o jogo começou a te levar a sério'
],
mmMarco10: [
  'DEZ! Vitória registrada, pode contar pros amigos',
  'Dez seguidas conta como vitória no fliperama, tô orgulhoso',
  'Sequência de 10! Tá jogando com a Wikipédia aberta do lado?',
  '10! Dois dígitos. Daqui pra frente os pares ficam colados, se prepara',
  'Dez acertos, MDSSSS',
  'Dez! Enciclopédia de coisa inútil oficialmente',
  'Sequência 10, nível mestre de ginásio',
  'DEZ SEGUIDAS! Parei até de piscar'
],
mmMarco15: [
  'QUINZE! Quem é você e o que fez com o jogador?',
  'Sequência de 15, tá difícil te zoar e eu odeio isso',
  '15! Os números tão colados e cê segue. Respeito',
  'Quinze seguidas, nível Liga Pokémon',
  '15 acertos, vou precisar de piada nova',
  'Quinze! Tô nervoso por você, continua'
],
mmMarco20: [
  'VINTE! Isso não é sorte, é doença. Das boas',
  'Sequência de 20, tu é uma enciclopédia com perna',
  '20 seguidas! Tirei o chapéu. Não tenho chapéu, tirei a orelha',
  'Vinte! O jogo tá sem desafiante pra te parar',
  '20! É mais de 8000? Proporcionalmente sim',
  'VINTEEEE, alguém chama o Professor Carvalho'
],
mmMarco30: [
  'TRINTA! Tenho nem nada o que falar não',
  'Sequência de 30, nem a Pokédex do Ash acerta tanto',
  '30 seguidas, vai pro hall da fama do fliperama',
  'Trinta! Nasceu dentro de uma enciclopédia, é isso?',
  '30! Tô com medo de você, com carinho',
  'TRINTA. O Zeno Sama ia bater palminha agora'
],
mmMarcoMuito: [
  'Sequência de {n}! Cada dia mais me tornando teu fã',
  '{n} seguidas! Já pensou em fazer isso profissionalmente? Não existe a profissão, cria',
  '{n}! O jogo conta, eu só admiro',
  '{n} acertos seguidos, tá quebrando o fliperama',
  'Sequência {n}! O jogo pediu arrego. Negado, continua',
  '{n}! Isso é bug? Pq o bug aqui sou eu'
],

/* ---------------- recordes ---------------- */
mmRecordeBatido: [
  'Opa, {n}! Passou teu recorde de {rec}, agora é território novo',
  'Recorde batido! {n} é o número novo, continua',
  'Passou o recorde por 1! Cada acerto daqui pra frente é história',
  'Superou o {rec}! O você do passado tá com inveja',
  '{n}! Recorde novo em andamento, não trava agora',
  'Recorde de {rec} derrubado igual o Freeza derruba planeta, só que do bem',
  'Recorde novo! Tô fingindo calma mas tô gritando por dentro',
  'O recorde ficou pequeno. {n} e subindo!',
  'Passou o {rec}! Agora cada ponto é bônus de orgulho',
  'RECORDEEEE, a caneta até tremeu aqui'
],
mmNovoRecorde: [
  'RECORDE NOVO: {n}! Vou emoldurar',
  'Recorde novo, {n} seguidas. Da próxima supera isso',
  'Recorde! {n}! Tá melhorando, isso me preocupa',
  '{n} é teu novo recorde, printa e manda no grupo',
  'Recorde pessoal: {n}! O você de ontem tá com vergonha',
  'Recorde novo, {n}! Bônus de XP e meu respeito temporário',
  'Recorde! {n}. Acabou errando, mas acabou em alta',
  'Recorde novo de {n}. Perdeu no fim, mas perdeu bonito',
  '{n} seguidas é teu novo máximo, não fica parado nele',
  'Recorde quebrado, {n}! Toca a musiquinha da vitória'
],

/* ---------------- fim de jogo ---------------- */
mmFimZero: [
  'Zero. Nem um. Errou a primeira, talento raro',
  'Sequência 0, um recorde ao contrário',
  'Errou logo de cara! Pelo menos foi rápido',
  'Zero ponto, nem aqueceu. Bora de novo',
  'Primeira rodada e já era, nem terminei de carregar a piada',
  'Nenhum acerto. Todo mestre começou no zero',
  'Zero! Chutando no aleatório dava 1. Estatisticamente',
  'Nada, nadica. Bora que a próxima vai',
  'Errou a primeira, isso foi o tutorial né',
  'Zero! Nem deu tempo de eu decorar teu nome',
  'Sequência zero, mas a coragem de apertar foi nota dez',
  'Perdeu pra primeira carta, patético KKKKK'
],
mmFimCurto: [
  'Sequência de {n}. Deu pra aquecer, agora joga de verdade',
  '{n} seguidas. Curtinho igual episódio de resumo',
  'Só {n}? Foi o dedo frio, bora de novo',
  '{n} acertos. É um começo, bem começo',
  'Parou em {n}. Nem o Yamcha cai tão cedo. Tá, cai',
  '{n}! Nem bom nem ruim, é {n}',
  'Acabou em {n}, o jogo só sentiu o gostinho',
  'Sequência de {n}, eu acredito em você. Com ressalva',
  '{n} seguidas, faltou pouco pro 5. Pouco é relativo',
  'Parou no {n}. Joga mais uma, é assim que começa o vício',
  '{n}! Cê tá só testando o jogo né. Finjo que acredito',
  'Fim com {n}. Na próxima pensa um segundo a mais',
  'Sequência {n}. Com esse joguinho vai longe não',
  '{n} pontos, dá pra melhorar e eu vou tá aqui pra comentar',
  'Acabou em {n}. Foi bonito enquanto durou, uns 20 segundos'
],
mmFimMedio: [
  '{n} seguidas! Respeitável, não histórico, mas respeitável',
  'Sequência de {n}, cê sabe umas coisas estranhas',
  '{n}! Tava ficando bom, aí o jogo lembrou que existe',
  'Acabou em {n}, nível treinador com insígnia',
  '{n} acertos. Se fosse prova passava de ano',
  'Parou em {n}. Os números começaram a ficar parecidos né, eu vi',
  'Sequência {n}, quase dois dígitos. Quase',
  '{n}! Bom jogo, o Bugado aprova',
  'Fim em {n}. Boa corrida, faltou fôlego no fim',
  '{n} seguidas. Mais umas dessas e cê vira referência',
  'Parou no {n}. Agora cê sabe que dá, então vai lá e dá mais',
  '{n} pontos, nada mal pra quem não decorou nada. Decorou?'
],
mmFimLongo: [
  '{n} seguidas! Baita sequência, tô orgulhoso e não sei lidar',
  'Que corrida! {n}! Fiquei até sem zoeira um tempo',
  'Sequência de {n}, cê é um perigo',
  '{n}! Vai pro mural do fliperama',
  'Acabou em {n}, e só acabou pq o jogo apelou',
  'Olha isso, {n}. Memória de elefante',
  '{n} seguidas! Pode respirar, faz tempo que cê não respira',
  'Fim em {n}. Mas que fim, final de saga',
  '{n}! Cê foi tão longe que eu comecei a torcer',
  'Sequência {n}. Cê não joga, cê consulta o oráculo',
  '{n} acertos, tá liberado se gabar no grupo da família',
  'Parou em {n}. MEU DEUS QUE JOGADOR'
],

/* ---------------- escolheu a categoria ---------------- */
mmEscolhaPeso: [
  'Peso! Bora ver quem precisa de dieta',
  'Peso. Tamanho não é documento. Às vezes é',
  'Categoria peso, o Snorlax já tá se aquecendo lá no fundo',
  'Pesagem oficial dos Pokémon, um de cada vez na balança',
  'Peso! Fantasma pesa quase nada, pedra pesa muito, metal pesa MUITO',
  'Bora pesar Pokémon, a balança já tá com medo',
  'Dica: tipo metálico costuma ser pesadão',
  'Peso! Tem bicho pequenininho que pesa uma tonelada, cuidado'
],
mmEscolhaAltura: [
  'Altura! Pega a fita métrica e a escada',
  'Altura. As artes têm todas o mesmo tamanho, não confia nelas',
  'Tem cobra de 20 metros e flor de 10 centímetros. Boa sorte',
  'Bora medir Pokémon, uns nem cabem na sala',
  'Altura! Cobra e dragão costumam ser compridos, fada costuma ser pingo de gente',
  'Altura escolhida, o Wailord já tá rindo lá de cima',
  'Categoria altura, aqui tamanho importa',
  'Dica: quem mora no mar costuma ser enorme. Costuma'
],
mmEscolhaDex: [
  'Número da Pokédex! Quem vem depois? Só nerd acerta, seja nerd',
  'Lembra das gerações: 151, 251, 386, 493... decorou?',
  'Pokédex! Memória pura ou chute com confiança',
  'Número da Pokédex, o Professor Carvalho tá de olho',
  'Dica: saber a geração já resolve metade',
  'Começa no Bulbasaur e termina no Pecharunt. O resto é contigo',
  'Os iniciais abrem cada geração, usa isso',
  'Mais de mil Pokémon em fila. Quem tá na frente?'
],
mmEscolhaMisto: [
  'Misturado! Cada rodada é peso ou altura, lê a pergunta',
  'Modo bagunça, peso e altura revezando. Presta atenção',
  'Aqui o erro mais comum é responder altura quando é peso. Não seja comum',
  'Misturado. O Onix é enorme mas nem é tão pesado, pensa nisso',
  'Teu cérebro vai trocar de marcha toda hora',
  'Peso e altura no mesmo liquidificador, bora',
  'Grande nem sempre é pesado. Fantasma alto pesa nada',
  'Modo misturado. O caos é meu habitat'
],
mmEscolhaPoder: [
  'Poder de luta! A pergunta que dividiu o recreio do Brasil inteiro',
  'Dragon Ball! Rastreador ligado, tenta não explodir ele',
  'Poder de luta. Dica: humano quase sempre perde',
  'Bora medir ki. Sem transformar no meio da resposta',
  'Anjo e Zeno no topo, Mr. Satan lá embaixo. O resto é discussão',
  'Categoria poder. Apareceu o Yamcha, cê já sabe',
  'Poder de luta! Mano eu amo essa categoria',
  'É mais de 8000? Bora descobrir'
],
mmMistoTroca: [
  'Agora é {metrica}! Olha a pergunta antes de apertar',
  'Mudou pra {metrica}, não vai no automático',
  'Atenção, {metrica}! O jogo trocou sem avisar',
  'Trocou pra {metrica}. Teu cérebro trocou junto?',
  'Pergunta de {metrica}! Gente com pressa erra aqui',
  'Rodada de {metrica}. Respira e lê',
  'É {metrica} agora, cuidado com a pegadinha do tamanho',
  'Virou {metrica}! Lê a pergunta mano',
  'Pergunta nova: {metrica}. Tudo muda, menos minha vontade de zoar',
  'Agora vale {metrica}, esquece o que cê achou antes'
],

/* ---------------- desafio do dia ---------------- */
mmDiarioInicio: [
  'Desafio do Dia #{n}! 15 pares iguais pra geral, uma chance só',
  'Diário #{n}! Todo mundo recebe os mesmos pares, bora ser melhor que todo mundo',
  'Desafio do dia. Errou, acabou. Fez 15, lenda',
  'Começou o diário #{n}. Os primeiros são fáceis, os últimos vamo ver',
  'Desafio #{n}! Mistura peso, altura e número. Lê a pergunta!',
  'Diário! Uma tentativa por dia, não tem só mais uma',
  'Desafio do Dia. 10 acertos já é vitória, 15 é pra se exibir',
  'Diário #{n}, 15 rodadas e eu comento todas'
],
mmDiarioRetomou: [
  'Voltou pro diário! Tu parou na rodada {n}, continua daí',
  'Retomando o desafio, rodada {n}. Achou que ia escapar?',
  'O diário te esperou. Rodada {n}',
  'De volta! Rodada {n} do diário, foco',
  'Continuando de onde cê fugiu, rodada {n}'
],
mmDiarioFeito: [
  'Desafio do dia: {n}/15. Copia e manda no grupo',
  'Terminou o diário com {n}/15! Amanhã tem outro',
  '{n} de 15 no diário! Manda pros amigos sofrerem também',
  'Fim do diário, {n}/15. Honesto',
  'Diário encerrado com {n}. Amanhã tem par novo e piada nova',
  '{n}/15! De 10 pra cima é vitória, abaixo é aprendizado',
  'Pronto, {n}/15 registrado. Agora é esperar a meia-noite ou jogar o infinito',
  'Resultado do dia: {n}. Vou comparar com o de amanhã sem dó'
],
mmDiarioPerfeito: [
  '15/15! DIÁRIO PERFEITO! MDSSSS',
  'Perfeito! Quinze de quinze, põe isso num outdoor',
  '15 de 15, tu é a Pokédex',
  'DIÁRIO ZERADO! Tô sem piada, aproveita',
  'Todas as 15! KJJJJJJJ alguém me segura'
],
mmDiarioJaFeito: [
  'O diário de hoje já foi, {n}/15. Volta amanhã',
  'Já jogou o desafio hoje ({n}/15). Uma vez por dia, espertinho',
  'Diário feito, {n}/15. O infinito tá ali te esperando',
  'Hoje já deu, {n}/15. Não adianta me olhar assim',
  'Já tem {n}/15 hoje. Quer copiar de novo? Pode',
  'Diário de hoje fechado com {n}. Amanhã tem par novo',
  'Uma tentativa por dia, lembra? Cê fez {n}/15. Vai de infinito',
  'O desafio de hoje tá guardado: {n}/15. Eu não esqueço'
],

/* ---------------- empate (raro) ---------------- */
mmEmpate: [
  'EMPATE! {va} e {valor}. Vale ponto, o jogo é generoso às vezes',
  'Deu igualzinho! Empate conta como acerto',
  'Empatou! Mesmo valor, nem o jogo sabia o que fazer',
  'Mesmo valor, ponto grátis. Não se acostuma',
  'Empate técnico, o VAR desistiu e deu pra você',
  'Iguais, tipo gêmeos. Ponto pra você',
  'Empate conta como certo. Regra minha',
  'Idênticos! Qualquer resposta valia'
],

/* ---------------- menu / início ---------------- */
mmInicio: [
  'Mais ou Menos! Escolhe a categoria e tenta não passar vergonha',
  'Bem-vindo ao jogo em que o Snorlax quase sempre ganha',
  'Escolhe uma categoria. Ou o Desafio do Dia, se for corajoso',
  'Peso, altura, número ou poder de luta. Escolhe tua arma',
  'É simples, o da direita tem MAIS ou MENOS? Fácil falar, difícil acertar',
  'Oi! Hoje é dia de descobrir que cê não sabe quanto pesa um Pokémon',
  'Mais ou Menos, o jogo que transforma tua infância em estatística',
  'Escolhe logo que o Wailord tá esperando e ele ocupa espaço',
  'Chegou! Senta aí e escolhe uma categoria, o resto eu comento',
  'Aqui é o jogo do "ah, eu achava que era maior". Bora',
  'Tem Dragon Ball também, pra quem prefere grito a Pokédex',
  'Cada categoria tem recorde separado. Dá pra ser ruim em todas separadamente'
],
mmMenu: [
  'Voltou pro menu. Vai trocar de categoria ou só fugiu?',
  'Menu! Escolhe outra. Ou a mesma, eu não julgo',
  'Trocando de categoria? Estratégia ou medo?',
  'De volta ao menu, os recordes tão aí te olhando',
  'Menu. Respira, escolhe e volta pra briga',
  'Fugiu pro menu, todo herói tem seu momento de pausa',
  'Escolhe de novo, dessa vez com convicção',
  'Voltou! Já fez o Desafio do Dia hoje?'
],

/* ---------------- fatos de Pokémon famosos/extremos ----------------
   Categoria mmFato<nº da Pokédex>. Usadas quando o Pokémon aparece revelado. */
mmFato143: [
  'Snorlax pesa 460 kg. É um sofá com fome',
  'O Snorlax come 400 kg de comida por dia e dorme o resto. Meta de vida',
  'Snorlax: 2,1 m e 460 kg. Bloqueia estrada desde 1996'
],
mmFato790: [
  'Cosmoem pesa 999,9 kg e mede 10 cm. A física mandou abraço',
  'O Cosmoem é um grão de feijão de uma tonelada, não deixa cair no pé',
  'Cosmoem: 10 cm e 999,9 kg. O Pokémon mais bugado, me identifico'
],
mmFato789: [
  'Cosmog pesa 0,1 kg. Aí evolui pra Cosmoem e vai pra 999,9 kg. Pior dieta do mundo',
  'O Cosmog é uma nuvenzinha de 100 gramas, não aperta',
  'Cosmog: levinho, fofo e prestes a virar uma bigorna do espaço'
],
mmFato797: [
  'Celesteela pesa 999,9 kg e tem 9,2 m. É um foguete, tá maluco',
  'A Celesteela empata com o Cosmoem no peso: 999,9 kg',
  'Celesteela: um bambu foguete de uma tonelada'
],
mmFato92: [
  'Gastly pesa 0,1 kg, é quase tudo gás',
  'O Gastly tem 1,3 m e pesa 100 gramas. É um peido com cara',
  'Gastly é leve igual fumaça, pq ele é fumaça'
],
mmFato93: [
  'Haunter tem 1,6 m e pesa 0,1 kg. Magro de verdade',
  'O Haunter pesa 0,1 kg e vira Gengar de 40,5 kg. Engordou 400 vezes',
  'Haunter: 100 gramas de língua pra fora'
],
mmFato94: [
  'Gengar pesa 40,5 kg. O Haunter pesava 0,1, evoluiu comendo',
  'O Gengar tem 1,5 m, menor que o Haunter. Evoluiu encolhendo',
  'Gengar: a sombra que sorri, e pesa 40 kg'
],
mmFato890: [
  'Eternatus tem 20 metros, o Pokémon mais alto de todos. Prédio de sete andares com raiva',
  'Eternatus: 20 m e só 950 kg. Dragão oco',
  'O Eternatus é tão comprido que a arte oficial precisa de zoom out'
],
mmFato669: [
  'Flabébé mede 0,1 m e pesa 0,1 kg. Uma florzinha com Pokémon dentro',
  'A Flabébé é tão pequena que usa a flor de guarda-chuva',
  'Flabébé: 10 cm, 100 gramas, fofura no máximo'
],
mmFato321: [
  'Wailord tem 14,5 m mas pesa só 398 kg, menos que o Snorlax. Baleia inflável',
  'O Wailord é gigante e pesa menos que um Snorlax, a natureza é piada',
  'O Wailord é enorme e mesmo assim o Eternatus ri dele'
],
mmFato95: [
  'Onix tem 8,8 m e pesa 210 kg, cobra de pedra quase oca',
  'O Onix é enorme mas o Steelix pesa quase o dobro. Metal pesa mais que pedra',
  'Onix: 8,8 metros de pedra do Brock, e ainda perde pra Pikachu às vezes'
],
mmFato208: [
  'Steelix: 9,2 m e 400 kg. O Onix virou metal e engordou 190 kg',
  'O Steelix pesa mais que o Onix por causa do aço, musculação de ferro',
  'Steelix mede 9,2 m, tipo um ônibus em pé'
],
mmFato25: [
  'Pikachu: 0,4 m e 6 kg. Carregou a franquia nas costas de 40 cm',
  'O Pikachu pesa 6 kg, menos que saco de ração. E dá choque',
  'Pikachu é o nº 25, nunca foi o nº 1. O Bulbasaur agradece'
],
mmFato129: [
  'Magikarp pesa 10 kg e só sabe pular. Aí vira Gyarados de 235 kg',
  'O Magikarp tem 0,9 m. Peixe grande, inútil e querido',
  'Magikarp: o investimento mais arriscado da Pokédex, rende no fim'
],
mmFato130: [
  'Gyarados: 6,5 m e 235 kg. Tudo isso saiu de um Magikarp',
  'O Gyarados tem 6,5 metros de raiva acumulada de quando era peixe',
  'Gyarados pesa 235 kg, o Magikarp pesava 10. Treino pesado'
],
mmFato383: [
  'Groudon pesa 950 kg. Criou os continentes, faz sentido',
  'O Groudon tem 3,5 m e quase uma tonelada, vulcão com perna',
  'O Groudon pesa o mesmo que o Eternatus, que mede 20 m. Denso esse aí'
],
mmFato750: [
  'Mudsdale pesa 920 kg, cavalo de barro de quase uma tonelada',
  'O Mudsdale tem 2,5 m e 920 kg. Coice dele vale mais que o carro',
  'Mudsdale é um cavalo e pesa mais que o Dialga. Fazenda forte'
],
mmFato798: [
  'Kartana pesa 0,1 kg, um origami que corta aço',
  'A Kartana tem 30 cm e 100 gramas, leve igual papel pq é papel',
  'Kartana: o Pokémon mais perigoso que cabe num envelope'
],
mmFato746: [
  'Wishiwashi pesa 0,3 kg sozinho. Em cardume vira monstro, igual gente em grupo de WhatsApp',
  'O Wishiwashi tem 20 cm na forma solo, peixinho chorão',
  'Wishiwashi: pequeno sozinho, gigante na turma'
],
mmFato595: [
  'Joltik mede 0,1 m, carrapato elétrico. Fofo e nojento',
  'O Joltik tem 10 cm e 0,6 kg. Gruda em você pra sugar energia igual boleto',
  'Joltik é dos Pokémon mais baixinhos que existem, cuidado onde pisa'
],
mmFato764: [
  'Comfey tem 10 cm e 0,3 kg, uma coroa de flor que se acha Pokémon',
  'O Comfey pesa 300 gramas, menos que celular. E cheira melhor',
  'Comfey: minúsculo e cheiroso, o oposto do Snorlax'
],
mmFato132: [
  'Ditto: 0,3 m e 4 kg. Uma gelatina roxa com crise de identidade',
  'O Ditto vira qualquer Pokémon, mas na Pokédex segue com 4 kg',
  'Ditto é o nº 132 e imita qualquer um. Menos você, que é único'
],
mmFato151: [
  'Mew: 0,4 m e 4 kg. O Pokémon mais raro pesa menos que um gato',
  'O Mew tem o DNA de todo Pokémon e pesa 4 kg, compacto',
  'Mew é o nº 151. Até hoje tem gente procurando ele debaixo do caminhão'
],
mmFato150: [
  'Mewtwo: 2 m e 122 kg. Clonaram o Mew e saiu isso, controle de qualidade falhou',
  'O Mewtwo pesa 30 vezes mais que o Mew, clone com fermento',
  'Mewtwo é o nº 150 e o Mew, que é o original, é o 151. Vai entender'
],
mmFato977: [
  'Dondozo tem 12 m e 220 kg, bagre gigante que pesa menos que o Snorlax',
  'O Dondozo anda com um Tatsugiri na boca, parceria estranha',
  'Dondozo tem 12 metros. O Wailord ainda passa ele, com 14,5'
],
mmFato376: [
  'Metagross pesa 550 kg e mede 1,6 m, computador de aço com quatro patas',
  'O Metagross tem quatro cérebros e 550 kg, pensa pesado',
  'Metagross pesa mais que o Wailord, que é nove vezes mais alto. Aço mano'
],
mmFato384: [
  'Rayquaza tem 7 m e 206,5 kg, dragão comprido e leve',
  'O Rayquaza mora lá na camada de ozônio e pesa menos que o Snorlax',
  'Rayquaza: 7 metros de dragão verde que separa briga de Groudon e Kyogre'
],
mmFato50: [
  'Diglett mede 0,2 m. A parte que aparece né',
  'O Diglett pesa 0,8 kg, ninguém sabe o que tem debaixo da terra',
  'Diglett: 20 cm visíveis, as pernas são o maior segredo da Pokédex'
],
mmFato1000: [
  'Gholdengo é o nº 1000! Feito de moeda de ouro e pesa 30 kg',
  'O nº 1000 da Pokédex é um surfista de moeda, justo',
  'Gholdengo: 1,2 m de ouro e só 30 kg? Ouro barato hein'
],
mmFato1: [
  'Bulbasaur é o nº 1, respeita o veterano',
  'Bulbasaur: nº 1 da Pokédex, 6,9 kg. Todo mundo começa de algum lugar',
  'O Bulbasaur é o nº 1 e não precisa provar nada pra ninguém'
],
mmFato1025: [
  'Pecharunt é o nº 1025, o último da Pokédex, lá do fim da fila',
  'Pecharunt: o último da lista e pesa 0,3 kg. Pêssego venenoso',
  'O nº 1025 é uma fruta roxa com cara de golpe'
],
mmFato799: [
  'Guzzlord pesa 888 kg. Come prédio, faz sentido',
  'O Guzzlord tem 5,5 m e 888 kg, um estômago com dente',
  'Guzzlord: a Ultra Beast da gula, o Snorlax é aluno dele'
],
mmFato805: [
  'Stakataka pesa 820 kg. É uma parede de tijolo viva que anda',
  'O Stakataka é um monte de tijolo alienígena empilhado, 5,5 m de muro',
  'Stakataka: achou leve? Cê nunca carregou tijolo'
],
mmFato742: [
  'Cutiefly: 0,1 m e 0,2 kg, mosquinha fofa que sente aura',
  'O Cutiefly pesa 200 gramas, borboleta de bolso',
  'Cutiefly é tão pequeno que parece poeira brilhante'
],
mmFato854: [
  'Sinistea mede 0,1 m, fantasma que mora numa xícara',
  'O Sinistea pesa 0,2 kg. Chá assombrado, não bebe',
  'Sinistea: tamanho de xícara, energia de filme de terror'
],
mmFato713: [
  'Avalugg pesa 505 kg, um iceberg com pata',
  'O Avalugg tem 2 m e meia tonelada, porta-aviões de gelo',
  'Avalugg pesa mais que o Wailord e é sete vezes mais baixo'
],
mmFato487: [
  'Giratina pesa 750 kg e mora num mundo invertido',
  'O Giratina tem 4,5 m e 750 kg, pesado demais pra fantasma',
  'Giratina: 750 kg de dragão fantasma'
],
mmFato76: [
  'Golem pesa 300 kg, uma pedra redonda que explode. Carinho só de longe',
  'O Golem tem 1,4 m e 300 kg, rola ladeira abaixo por diversão',
  'Golem: se sentar no teu pé o pé vira decoração'
],
mmFato6: [
  'Charizard: 1,7 m e 90,5 kg. Menor que a fama dele',
  'O Charizard pesa 90,5 kg, peso de zagueiro'
],
mmFato131: [
  'Lapras tem 2,5 m e 220 kg e levava geral nas costas pelo mar',
  'O Lapras é o Move das águas, só que sem lotar'
],
mmFato382: [
  'Kyogre pesa 352 kg, bem menos que o Groudon com 950',
  'O Kyogre tem 4,5 m e dizem que encheu o mar sozinho'
],
mmFato483: [
  'Dialga tem 683 kg e manda no tempo. Queria ele pra chegar no horário',
  'O Dialga pesa menos que o Mudsdale, que é um cavalo. Vergonha'
],
mmFato68: [
  'Machamp: 1,6 m e 130 kg, quatro braços pra carregar a mudança',
  'O Machamp pesa 130 kg de puro músculo'
],

/* ---------------- fatos de Dragon Ball ----------------
   Categoria mmFatoDB<nome normalizado, só letras/números>. */
mmFatoDBmrsatan: [
  'Mr. Satan: poder de gente comum, ego de deus da destruição',
  'O Mr. Satan levou a fama de derrotar o Cell. Geral acredita, menos quem assistiu',
  'Mr. Satan é o homem mais forte da Terra. Segundo o Mr. Satan'
],
mmFatoDByamcha: [
  'Yamcha morreu pra um Saibaman e virou meme eterno',
  'O Yamcha tá no nível 5 aqui. É o máximo de bom que dá pra falar',
  'Yamcha: ex-bandido do deserto, ex-namorado da Bulma, ex-vivo'
],
mmFatoDBzenosama: [
  'Zeno Sama apaga universo por tédio e é fofinho. Combinação perigosa',
  'O Zeno Sama tá no topo de tudo, nível 10',
  'Zeno Sama: cara de criança e poder de um botão de deletar'
],
mmFatoDBbills: [
  'Bills: deus da destruição, gatão, fã de pudim. Não mexe no pudim dele',
  'O Bills destrói planeta por causa de comida ruim, crítico gastronômico raiz',
  'Bills é nível 9 e o Whis, assistente dele, é 10. Chefe fraco, estagiário forte'
],
mmFatoDBwhis: [
  'Whis é anjo, nível 10, e trabalha de babá do Bills. Salário? Comida da Terra',
  'O Whis volta o tempo em três minutos. Queria isso depois de cada erro teu',
  'Whis: o mais forte do Universo 7 e o mais educado'
],
mmFatoDBgoku: [
  'Goku: nível 9. Salva o universo e esquece de trabalhar',
  'O Goku come por dez e treina por cem, a Chi-Chi que paga as contas',
  'Goku bateu a cabeça quando bebê e virou o cara mais gente boa do universo'
],
mmFatoDBvegeta: [
  'Vegeta: nível 9 no poder, 10 no orgulho',
  'O Vegeta é o príncipe dos Saiyajins e vai te lembrar disso sempre',
  'O "é mais de 8000" é do Vegeta, e a internet nunca mais foi a mesma'
],
mmFatoDBkuririn: [
  'Kuririn é o humano mais forte e o que mais morre',
  'O Kuririn casou com a Androide 18, venceu na vida apanhando',
  'Kuririn: careca, baixinho, corajoso e colecionador de morte'
],
mmFatoDBbulma: [
  'Bulma: poder 1, inteligência infinita',
  'A Bulma não luta, mas sem ela ninguém achava esfera nenhuma',
  'A Bulma dá bronca no deus da destruição. Poder 1, coragem 10'
],
mmFatoDBcell: [
  'Cell tem DNA de geral. Do Mr. Satan não, graças a Deus',
  'O Cell fez um torneio só pra se exibir e perdeu pra uma criança',
  'Cell perfeito, derrotado pelo Gohan com um braço só'
],
mmFatoDBfreeza: [
  'Freeza: nível 9, educado, destruidor de planeta. Tipo gerente malvado',
  'O Freeza já voltou dos mortos mais vezes que muito vilão por aí',
  'Freeza tem várias formas, a mais assustadora é a que fala baixinho'
],
mmFatoDBmajinboo: [
  'Majin Boo transforma gente em chocolate. Pesadelo e sobremesa',
  'O Boo gordo virou amigo do Mr. Satan, a amizade mais estranha do anime',
  'Majin Boo: rosa, fofinho e capaz de explodir a Terra. Nessa ordem'
],
mmFatoDBjiren: [
  'Jiren: nível 9, fala pouco e bate muito',
  'O Jiren treinou tanto que esqueceu de fazer amigo',
  'Jiren quase ganhou o Torneio do Poder sozinho. Quase'
],
mmFatoDBbroly: [
  'Broly, o Saiyajin lendário. Grita mais que o Goku e isso é difícil',
  'O Broly cresceu num planeta sozinho, por isso ele grita',
  'Broly: nível 9 e zero controle da raiva'
],
mmFatoDBdende: [
  'Dende é o Deus da Terra com poder de estagiário',
  'O Dende cura qualquer um mas não luta nada. Melhor médico do anime',
  'Dende é Deus e é nível 1. A Terra tá em boas mãos? Mais ou menos'
],
mmFatoDBmestrekame: [
  'Mestre Kame inventou o Kamehameha e tá no nível 5, os alunos passaram na frente',
  'O Mestre Kame é mais velho que muita coisa por aí e segue tarado',
  'Mestre Kame: óculos escuros, tartaruga e Kamehameha original de fábrica'
],
mmFatoDBgrandesacerdote: [
  'Grande Sacerdote: nível 10, pai do Whis, quem manda de verdade',
  'O Grande Sacerdote sorri sempre. Ninguém sabe se é simpatia ou ameaça',
  'Grande Sacerdote: assistente do Zeno, o emprego mais seguro do multiverso'
],
mmFatoDBpiccolo: [
  'Piccolo: nível 8, melhor babá do Gohan. E ainda regenera braço',
  'O Piccolo era vilão e virou professor, carreira bonita',
  'Piccolo só bebe água e é mais forte que você. Pensa nisso'
],
mmFatoDBraditz: [
  'Raditz, irmão do Goku, nível 4. Morreu no primeiro arco. Família complicada',
  'O Raditz confiou no rastreador e deu ruim',
  'Raditz: cabelo lindo, destino triste'
],
mmFatoDBchichi: [
  'Chi-Chi: poder 2, bronca nível 10',
  'A Chi-Chi manda no Goku, então tecnicamente ela é a mais forte',
  'A Chi-Chi quer o Gohan estudando e o universo quer ele lutando. Ela ganha'
],
mmFatoDBgohan: [
  'Gohan: nível 9 quando quer. O problema é querer',
  'O Gohan derrotou o Cell e depois foi estudar, ídolo',
  'Gohan: poder escondido e óculos de pesquisador'
],
mmFatoDBtenshinhan: [
  'Tenshinhan tem três olhos e um canhão em formato de triângulo',
  'O Tenshinhan é nível 6 e treina até hoje. Esforçado demais'
],
mmFatoDBandroide18: [
  'A Androide 18 é nível 7 e casou com o Kuririn. Quem diria',
  'Androide 18: loira, braba e a mais forte da casa sem discussão'
],
mmFatoDBandroide17: [
  'O Androide 17 é nível 8, virou guarda florestal e ainda ganhou o Torneio do Poder',
  'Androide 17: cuida do parque de dia e salva o universo no fim de semana'
],
mmFatoDBandroide16: [
  'O Androide 16 só queria cuidar dos passarinhos',
  'Androide 16: grandão, calado e o mais gente boa da Red Ribbon'
],
mmFatoDBtrunks: [
  'Trunks criança já virava Super Saiyajin brincando, nível 7',
  'O Trunks junta com o Goten e vira o Gotenks. Caos garantido'
],
mmFatoDBgotenks: [
  'Gotenks: nível 8 e zero juízo',
  'O Gotenks inventou o Ataque Fantasma Kamikaze. Nome ruim, golpe bom'
],
mmFatoDBvegetto: [
  'Vegetto: Goku e Vegeta com brinco Potara, nível 9 e muita marra',
  'O Vegetto zoou tanto o Boo que deixou virar doce de propósito'
],
mmFatoDBgogeta: [
  'Gogeta: Goku e Vegeta na dança da fusão, nível 9',
  'A fusão do Gogeta dura pouco mas resolve tudo'
],
mmFatoDBbardock: [
  'Bardock, pai do Goku, nível 4. Viu o futuro e ninguém acreditou',
  'O Bardock encarou o Freeza sozinho. Perdeu, mas foi com estilo'
],
mmFatoDBzarbon: [
  'Zarbon é bonitão até transformar. Aí vira um monstrão',
  'O Zarbon tá no nível 4, a beleza não ajudou'
],
mmFatoDBdodoria: [
  'Dodoria: rosa, cheio de espinho e nível 4',
  'O Dodoria tomou uma do Vegeta e sumiu da história'
],
mmFatoDBcapitaoginyu: [
  'Capitão Ginyu troca de corpo e faz pose. Nível 5',
  'O Ginyu trocou de corpo com um sapo. Carreira encerrada'
],
mmFatoDBkaiodonorte: [
  'O Kaio do Norte é nível 3 e só ri das próprias piadas',
  'Kaio do Norte ensinou o Kaioken e a Genki Dama pro Goku. Professor bom, piada ruim'
],
mmFatoDBkaioshin: [
  'Kaioshin é deus e é nível 6. Deus júnior',
  'O Kaioshin fundiu com o Kibito e nunca mais desfez. Fusão pra sempre'
],
mmFatoDBbabidi: [
  'Babidi é nível 1 e ainda assim quase acabou com tudo. Mago esperto',
  'O Babidi controla a mente de geral mas não controlou o Boo'
],
mmFatoDBjanemba: [
  'Janemba é nível 8 e deixou o Outro Mundo de cabeça pra baixo',
  'O Janemba nasceu de um monte de energia ruim junta. Tipo torcida depois de derrota'
],
mmFatoDBtoppo: [
  'Toppo: bigodudo da justiça, nível 8 e candidato a deus da destruição',
  'O Toppo faz pose de herói e bate igual deus'
],
mmFatoDBdyspo: [
  'Dyspo é o mais rápido da tropa da justiça, nível 7',
  'O Dyspo corre muito e fala mais ainda'
],
mmFatoDBmarcarita: [
  'Marcarita é anjo, nível 10, e nunca perde a calma',
  'A Marcarita acompanha o Vermoud e sorri pra tudo'
],
mmFatoDBvermoud: [
  'Vermoud: deus da destruição com cara de palhaço, nível 9',
  'O Vermoud faz discurso de justiça antes de apagar geral'
],
mmFatoDBdrgero: [
  'Dr. Gero virou o próprio androide pra não morrer. Nível 5',
  'O Dr. Gero criou os androides e foi eliminado por eles'
],
mmFatoDBlaunch: [
  'A Launch espirra e troca de personalidade. Poder 2, metralhadora 10'
],
mmFatoDBnail: [
  'O Nail segurou o Freeza sozinho pra ganhar tempo, nível 5'
],

/* ---------------- cutucar o mascote ---------------- */
cutucarMaisMenos: [
  'Me cutuca de novo e eu digo que o Snorlax pesa 3 kg',
  'Ei! Eu não sou o botão MAIS. Nem o MENOS',
  'Minha altura: 56 pixels. Meu peso: nenhum. Minha paciência: pouca',
  'Se me cutucar mais eu viro o próximo desafiante',
  'Eu peso mais ou menos que um Gastly? Menos, sou pixel',
  'Procurando resposta aqui? Não tem. Só charme',
  'Me cutucar não revela número, já tentei',
  'Ai! Cutucada com força de Snorlax',
  'Sei o peso de todo Pokémon e não vou contar. Tá, o Pikachu pesa 6 kg, pronto',
  'Cutucada registrada. Poder de luta 3, chatice 9',
  'Para de me cutucar e olha o card da direita!',
  'Não sou balança. Se fosse, marcava chato',
  'Cutuca menos, acerta mais. Conselho grátis',
  'Cê me cutucou MAIS ou MENOS que o recomendado? MAIS',
  'Ei! Sou frágil igual Gastly',
  'Quer dica? A dica é não me cutucar',
  'Se me cutucar 8000 vezes eu viro Super Saiyajin. Não tenta',
  'Me cutucou? Agora comento a próxima com o dobro de maldade',
  'Eu não tenho número na Pokédex, sou o nº 404',
  'Cutucar o mascote não aumenta a sequência, já testaram',
  'Ai, que dedo pesado. Mais pesado que o Cosmoem',
  'Cutuca o botão, não eu. O botão gosta',
  'Eu seria poder de luta 1, igual o Mr. Satan, mas sem a fama',
  'Toda vez que cê me cutuca um Magikarp pula à toa',
  'Pode me usar de antiestresse enquanto pensa. Mas pensa',
  'Apostei com o Jorge, o pixel rosa, que cê passa de 10. Não me faz perder',
  'Se eu fosse Pokémon eu era tipo fantasma. Com bug de brinde',
  'Sou mais alto que o Joltik. Uns três Joltiks',
  'Cutucou. Efeito nenhum, mas foi fofo',
  'Pode cutucar, sou peso pena, não pesa na consciência',
  'Snorlax pesa 460 kg, todo mundo sabe, é o fato favorito de geral',
  'Ai, meu ki! Cê drenou meu ki',
  'Se eu sou mais forte que o Yamcha? Prefiro nem testar',
  'Cutuca demais que eu viro Cosmoem, 999,9 kg de má vontade',
  'Tá tá, oi. Agora volta pro jogo',
  'Tô aqui pra comentar, não pra ser cutucado. Mas aceito cafuné',
  'Mais uma e eu troco todos os pesos por "muito"',
  'Isso foi um MAIS ou um MENOS? Foi um para com isso',
  'Cada cutucada é 0,1 kg de culpa em você',
  'Me cutucando pra ganhar tempo né? O jogo espera, eu também',
  'Se eu entrasse no jogo eu era o card mais leve. E o mais bonito',
  'Mano para KKKKKK tô tentando me concentrar'
]

});

/* ---------------- falas temáticas somadas às gerais ---------------- */
Bugado.extendLines({
  aleatorio: [
    'O Wailord é enorme e pesa menos que o Snorlax. Até hoje não superei',
    'Se o Gastly pesa 0,1 kg, quanto pesa o cheiro dele?',
    'Se o Cosmoem cair do céu é meteoro ou Pokémon? Os dois',
    'O Eternatus tem 20 metros. Eu tenho 56 pixels. Cada um com sua grandeza',
    'Tipo metálico quase sempre pesa mais do que parece, guarda essa',
    'Dizem que a Pokédex do Ash era mais esperta que ele',
    'Imagina a conta de luz do Pikachu. Deve ser negativa',
    'Pokémon fantasma pesa nada e Pokémon pedra pesa tudo',
    'Se o Mr. Satan fosse Pokémon ia ser tipo normal/vacilão',
    'Queria o poder do Whis de voltar três minutos. Usava pra ver teus erros de novo',
    'O Snorlax dorme 20 horas por dia e come nas outras 4. Ídolo',
    'Ditto virando Snorlax pesa 460 kg? A Pokédex diz que não. Eu acho que sim',
    'Eu seria nível de poder 2, soldado. Mas bem carismático',
    'Tem Pokémon de 10 cm e de 20 metros e cê achando tua família variada',
    'O Magikarp é a prova de que paciência dá resultado. Demora, mas dá',
    'Se o Kuririn ganhasse um real por morte ainda não pagava a passagem do mês',
    'Será que o Onix sente frio? Pedra sente frio?',
    'Já vi o Bills destruir planeta por pudim. Cê já errou por menos',
    'A Flabébé é menor que a flor que ela carrega. Quem carrega quem?',
    'O Zeno Sama apaga universo por tédio. Eu só falo muito, somos parecidos',
    'Imagina subir na balança e marcar 999,9 kg. Coitado do Cosmoem',
    'Se eu treinar mil anos na Sala do Tempo eu viro nível 3? Acho que não',
    'O Diglett nunca mostrou as pernas, respeito o mistério',
    'Teoria de fã: o Gengar é a sombra do Clefable. Acredito em tudo',
    'Tem gente que decora a Pokédex inteira e esquece o próprio CEP. Tá tudo bem',
    'Se a Genki Dama pegasse energia de cada acerto teu ia sair uma bolinha',
    'Eu não tenho peso, nem altura, nem número. Sou livre',
    'O Yamcha tá descansando em paz. De novo',
    'Às vezes acho que o Snorlax tá certo sobre a vida',
    'Wailord e Eternatus medindo altura? O Eternatus ganha deitado',
    'O Gohan estudou tanto que o poder foi pro cérebro',
    'O Mewtwo ficou 30 vezes mais pesado que o Mew. Clone com fermento',
    'O nº 1 da Pokédex é o Bulbasaur. O Pikachu é o 25 e nunca vai ser o primeiro',
    'O Vegeta falou é mais de 8000 e a internet nunca mais foi a mesma',
    'Avalugg, iceberg de meia tonelada. Imagina ele deslizando no teu pé',
    'Eu tenho o peso do Gastly mas não tenho a paz do Snorlax',
    'Se tamanho fosse poder o Wailord batia no Mewtwo. Não bate',
    'Kamehameha. Só queria falar isso, aliviei',
    'Quando crescer quero ser Snorlax. Grande, calmo e dormindo na estrada',
    'O Lapras levava geral nas costas pelo mar, o Move das águas'
  ],
  parado: [
    'Os dois cards tão te esperando. O da direita tá até com vergonha',
    'MAIS ou MENOS, só isso. Duas opções, 50%!',
    'Tá pesando o Pokémon na mão? Ele é imaginário',
    'Travou? Aperta qualquer um, coragem é metade do acerto',
    'O desafiante dormiu igual Snorlax de tanto esperar',
    'Enquanto cê pensa eu pesei todos os Pokémon. Não vou contar',
    'Ô, cê tá vivo? MAIS ou MENOS?',
    'Tentando lembrar a Pokédex inteira? Leva uns três dias',
    'O Goku já tinha respondido. Errado, mas tinha',
    'Fica parado mais um pouco que o card vira fóssil',
    'O card não revela sozinho não, já pedi',
    'Seta pra cima é MAIS, pra baixo é MENOS. Ou toca na tela',
    'Quer dica? Não tenho. Paciência também não',
    'Tô te vendo parado aí suando frio, tô adorando',
    'Respondeu na cabeça e esqueceu de apertar? Aperta',
    'Tempo não conta aqui, minha paciência conta',
    'Tanta dúvida? Vai no instinto, erra mas erra rápido',
    'Parado igual o Onix esperando o Brock',
    'Fechou o olho pra pensar? Abre, os cards tão aqui',
    'O Kaio do Norte já contou três piadas enquanto cê pensava. Todas ruins'
  ]
});
