/* ==========================================================
   Falas do Bugado · Quem é esse Guerreiro? (Dragon Ball)
   Variáveis: {nome} = personagem chutado · {n} = nº de chutes
              {raca} = raça do chute · {campo} = atributo · {valor} = valor do atributo
              {alvo} = personagem secreto (só na vitória) · {xp} = XP ganho
   Categorias com prefixo "db". Falas por personagem em DB_FALAS_PERSONAGEM.
   Voz: ver VOZ.md na raiz (curto, zoeira de resenha, sem cara de IA).
   ========================================================== */
(() => {
const L = {

/* ---------- começo de rodada ---------- */
dbInicio: [
  'Tem um guerreiro escondido aí. Chuta um nome que eu vou falando o que bate',
  'Scouter ligado. Bora ver quantos chutes cê vai precisar hoje',
  'Escolhi um guerreiro. Não é o Yamcha. Ou é, sla, chuta aí',
  'Radar apitando, tem guerreiro na área. Manda o primeiro nome',
  'Bora mano, o primeiro chute é de graça',
  'Eu sei quem é e cê não. Tá bom demais isso aqui',
  'Nem adianta pedir pro Shenlong, ele não sabe desse não',
  'Tá valendo. Digita um nome e escolhe na lista',
  'Um guerreiro escondido e você com zero pista. Começou bem KKKKK',
  'Guerreiro novo no radar. Quero ver acertar em menos de 5',
  'Separei um personagem aqui. Se acertar de primeira eu fico bolado',
  'Chuta qualquer um pra começar, as cores vão te guiando',
  'Mais fácil achar as 7 esferas do que acertar esse, confia',
  'Concentra o ki no teclado e manda',
  'Tá escondido igual o poder do Gohan quando ele vai pra escola',
  'Bora que o scouter tá doido pra apitar',
  'Não é o Kuririn morrendo de novo não. Eu acho',
  'Liguei o radar e já achei. Agora é sua vez',
  'Guerreiro do dia saiu do forno. Pode chutar',
  'Pensa num nome, qualquer um, e manda ver',
  'Hora de passar vergonha ou virar lenda. Vambora',
  'Esse aqui vai dar trabalho, papo reto'
],
dbInicioDiarioFeito: [
  'Cê já acertou o de hoje. Amanhã tem outro, vai jogar o Infinito',
  'Diário feito mano. Não adianta ficar olhando que não muda',
  'Esse já foi. Quer mais? O Infinito tá ali do lado',
  'Já resolveu o de hoje uai. Voltou pra me ver né',
  'O de hoje já era. Amanhã tem guerreiro novo',
  'Diário fechado. Nem as esferas reabrem esse',
  'Tá igual o Broly, não aceita que acabou KKKKK',
  'Já foi hoje. Vai pro Infinito que lá não tem limite',
  'Missão de hoje cumprida. Agora é esperar a meia-noite',
  'Voltou no diário que já acabou? Viciado demais',
  'Já acertou esse. Printa o resultado e manda no grupo',
  'Acabou o de hoje, mas meu falatório não acaba nunca'
],
dbModo: [
  'Trocou de modo. Scouter recalibrado',
  'Modo novo, vergonha nova',
  'Mudou de modo mais rápido que o Freeza troca de forma',
  'Trocou? Beleza, eu me adapto igual o Cell',
  'Modo novo carregado. Bora',
  'Mudou tudo. Até eu fiquei tonto',
  'Trocou de modo mais rápido que o Goku some quando chega boleto',
  'Tá testando os modos né. Curioso demais',
  'Modo trocado. Mesmo mascote, mesma zoeira',
  'Beleza, outro modo. Os guerreiros tão prontos'
],

/* ---------- primeiro chute ---------- */
dbPrimeiro: [
  '{nome} de primeira? Corajoso',
  'Abriu com {nome}. Vamo ver as cores',
  'Começou com {nome}. Chute de quem nem pensou KKKKK',
  '{nome} pra abrir. Pode ser, pode ser',
  'Primeiro chute: {nome}. O scouter já tá julgando',
  'Abriu com {nome}, escolha de quem via desenho antes da escola',
  '{nome} logo de cara. Pelo menos agora tem pista',
  'Primeiro já foi. Agora lê as cores e finge que tinha um plano',
  'Primeiro chute é tipo primeiro episódio do Z: pouca ação e muita informação',
  '{nome} abrindo a rodada. Ele nem sabia que tava escalado',
  'Pensou uns 0,3 segundos e mandou {nome}, eu vi',
  'O primeiro é só pra aquecer, relaxa',
  'Chute inicial registrado. Nível de confiança: vai que',
  'Um chute e um monte de pista. Olha a tabela',
  '{nome} pra começar. Não é a pior escolha, também não é a melhor',
  'Primeiro chute dado. Agora cê sabe mais do que sabia',
  'Mandou {nome} primeiro. Clássico de quem já jogou isso',
  '{nome}? Bora, pelo menos tem cor na tabela agora',
  'Começou! Aquecimento feito, agora é pra valer',
  'Abriu com {nome}. Pelo menos não foi o Monaka',
  'Primeiro chute sempre é chute mesmo, fica tranquilo'
],
dbGokuPrimeiro: [
  'Goku de primeira. Igual todo mundo, cê não é especial não KKKKK',
  'Chutou o Goku primeiro. Previsível demais mano',
  'Goku no primeiro chute. É lei, tá no manual',
  'O Goku, que surpresa. Ninguém nunca pensou nisso',
  'Começar com Goku é tipo começar o Pokédle com Pikachu',
  'Goku de cara. Se fosse ele ia ser lindo, mas a vida não é assim',
  'Kakarotto no primeiro chute. O Vegeta tá com ciúme',
  'Chute padrão de fábrica: Goku',
  'Goku primeiro. Pelo menos serve de régua pro resto',
  'Todo mundo chuta Goku primeiro. Todo mundo mesmo',
  'Goku abrindo. Cê e mais umas 700 mil pessoas',
  'O Goku aparece em tudo mesmo, até no seu primeiro chute',
  'Goku, sério? Criatividade nível Yamcha na luta'
],

/* ---------- erro genérico ---------- */
dbErro: [
  'Não é {nome} não',
  '{nome}? Não. O scouter até riu',
  'Errou, mas errou com estilo igual o Vegeta perdendo',
  'Nada de {nome}. Bora de novo',
  'Não é esse não mano',
  '{nome} ficou de fora igual o Yamcha nas lutas importantes',
  'Não foi dessa vez. Olha as cores',
  'Negativo. As cores tão gritando mais que Super Saiyajin',
  '{nome} não é, mas agora cê tem mais pista',
  'Errou. Quem nunca chutou errado que atire a primeira Genki Dama',
  'Não é o {nome}. Ele mandou um abraço',
  'Não é. Continua o treino',
  'Errou, mas o Kuririn já morreu mais vezes que você errou',
  '{nome}? Não. Mas chutou com convicção, respeito',
  'Não é esse. Olha as cores com carinho',
  'O scouter falou não pro {nome}',
  '{nome} errado. Anota e segue',
  'Não é. Tá igual o Goku procurando esfera sem radar',
  'Errou perto? Sei lá, olha as cores, eu só trabalho aqui',
  'Nem é {nome}. O Bills ia te destruir por esse chute',
  'Não é esse aí. Próximo',
  'Errou. Tudo bem, o Vegeta errou a vida inteira e hoje é pai de família',
  'Não é {nome}. Ele também não sabia',
  'Chute errado. A Bulma já tinha inventado uma máquina pra acertar',
  '{nome}? Não. Chute digno de episódio de enchimento',
  'Não é. Respira e chuta de novo',
  'Mais um pra lista dos que não são',
  'Errado KKKKK o Freeza riu',
  '{nome} não. Mas tá esquentando? Olha as cores',
  'Não foi. O Shenlong disse que não pode realizar esse desejo',
  'Não é {nome}. Bora junto igual Goku e Vegeta, brigando mas indo',
  'Chute recusado igual o Vegeta recusa ajuda',
  'Esse não. Chuta outro antes que Namekusei exploda',
  'Errou. Pode xingar, eu deixo',
  'Não é esse. Quase ninguém é, só um é',
  '{nome}? Tá maluco, nem perto',
  'Não é {nome} não, uai',
  'Errou de novo, mas tá aprendendo. Eu acho',
  '{nome} não. A passagem tá 5,75 e cê errando de graça',
  'Nada. O alvo tá rindo de você lá do esconderijo',
  'Não é. Mas o esforço tá valendo, papo reto',
  '{nome}? Mds, não'
],

/* ---------- tudo vermelho ---------- */
dbTudoVermelho: [
  'Tudo vermelho. Achou o oposto exato, isso também é talento',
  'Zero acerto. Tá mais longe que Namekusei',
  'Tudo errado. Pelo lado bom, agora cê sabe tudo que NÃO é',
  'Vermelho total, igual placar do Cruzeiro em dia ruim',
  'Nenhum verdinho. O scouter chorou',
  'Tudo vermelho KKKKKK foi chute ou Kienzan no escuro?',
  'Nada bateu. Chutou de olho fechado?',
  'Zero de oito. Nem o Mr. Satan erra tanto. Erra sim, mas ele é o Mr. Satan',
  'Tudo errado, mas descartou um monte de coisa. Quase um acerto',
  'Nem gênero bateu mano. Tá lutando contra quem?',
  'Parabéns, achou o anti-personagem',
  'Tudo vermelho. Chute nível Yamcha',
  'Nenhum acerto. Pelo menos é consistente',
  'Vermelho geral, igual a tela quando o Kid Boo explode a Terra',
  'Nem um verdinho. Mais perdido que o Goku numa autoescola',
  'Tudo vermelho. Se fosse sinal de trânsito cê tava multado',
  'Zero! Mas zero com informação, o zero mais útil da sua vida',
  'O scouter leu 0. Não é mais de 8000 não, é zero mesmo',
  'Tudo errado, parece o Chaos explodindo no Nappa. Esforço demais, resultado zero',
  'Vermelho absoluto. Até o Vegeta acertava alguma coisa por orgulho',
  'Nem raça, nem planeta, nem cabelo. Patético KKKKK',
  'Tudo vermelho, mas agora dá pra riscar muita gente',
  'Tudo diferente. Se fosse fusão saía um Veku',
  'TUDO VERMELHO MDS',
  'Nada bateu. Coisa ridícula, mas faz parte',
  'Esse chute foi pior que 330 lotado às 18h'
],

/* ---------- quase (muitos verdes) ---------- */
dbQuase: [
  'Quase! Dá pra sentir o ki daqui',
  'Muito verde! O alvo tá logo ali',
  'Tá quase. Igual o Vegeta, sempre quase',
  'Pertíssimo. Mais um pouco e a Genki Dama fica pronta',
  'Quase tudo verde. Não é {nome}, mas é primo, vizinho ou fusão dele',
  'TÁ QUENTE DEMAIS. O scouter tá apitando que nem doido',
  'Tá perto igual o Kuririn da morte. Sempre',
  'Quase! Falta um detalhe só',
  'Mais perto que o Goku da comida',
  'Muita coisa bateu. Pensa em quem parece com {nome}',
  'Quase. Esse tipo de erro vira acerto no próximo, confia',
  'Esquentou! Só não vira Oozaru de emoção',
  'Tá rondando o alvo igual o Cell rondando androide',
  'Quase lá. O personagem certo tá tremendo',
  'Tô até suando aqui, e eu nem tenho glândula',
  'Verde demais pra ser coincidência',
  'Pertinho mano, falta só aquele gás de SSJ2',
  'Mais um pouco e o scouter explode, no bom sentido',
  'Radar apitando rápido: bip bip bip bip',
  'Muito perto. Agora não vai chutar o Yamcha de nervoso'
],

/* ---------- raça ---------- */
dbRacaCerta: [
  'Raça certa: {raca}. Já é alguma coisa',
  '{raca}! Acertou a raça, agora acha quem é',
  'Raça confirmada, {raca}. Um passo pra frente',
  'Isso, é {raca}. Filtra aí na cabeça',
  '{raca} tá certo. Agora imagina a árvore genealógica que cê vai ter que olhar',
  'Raça bateu. O scouter deu joinha',
  'A raça é {raca}. Isso corta bastante gente',
  'Raça verde. Qual {raca} tem esse jeitão?',
  'Acertou a raça. Agora é descobrir qual deles',
  '{raca} confirmado. Olha quem prestou atenção no anime',
  'Mesma raça! Tem uns bem parecidos, boa sorte',
  'Raça certinha, tá chegando',
  'É {raca} mesmo. Não vai chutar outra raça agora hein',
  'Raça ok. Agora lê o resto com calma, sem gritar 3 episódios',
  'Raça batida, isso vale meio Kaioken',
  '{raca}! Tá ficando esperto',
  'A raça tá certa, o resto tá mais bagunçado que a casa do Mestre Kame',
  'Raça verde. Reduziu a lista mais que o Freeza reduziu os Saiyajins',
  'É {raca} uai. Agora vai',
  '{raca} na mosca. Continua nessa'
],
dbRacaParcial: [
  'Raça amarela: parente perto. Tipo Saiyajin e meio-Saiyajin',
  'Amarelo na raça. Mesma família, raça diferente',
  'Quase na raça. Tipo Gohan e Goku, parecidos mas um estuda',
  'Amarelinho: é do mesmo grupo, mas não exatamente',
  'Raça parecida. Tá no bairro certo',
  'Raça amarela. Grupo certo, espécie errada. Tipo pedir coxinha e vir quibe',
  'Parcial na raça. A família tá certa',
  'Amarelo! Mesma turma de gente, de deus ou de máquina. Olha a ajuda se esquecer',
  'Raça quase. Ajusta a mira',
  'Amarelo na raça: mesma turma, carteirinha diferente',
  'Meio certo. Tipo meio-Saiyajin, entendeu? KKKKK',
  'Raça amarela, tá rondando'
],

/* ---------- afiliação ---------- */
dbAfiliacaoCerta: [
  'Afiliação certa. Time certo, agora acha o jogador',
  'Mesma turma: {valor}. Imagina a reunião desse povo',
  'Afiliação batida. {valor} confirmado',
  'É do grupo {valor}. Agora escolhe qual deles',
  'Afiliação verde. Tá na festa certa, falta achar o convidado',
  '{valor}! Acertou o lado',
  'Mesmo time. Tipo saber que é cruzeirense, ainda falta o nome',
  'Afiliação certa, personagem errado. Progresso é progresso',
  'Grupo certo. {valor} tem uma galera hein',
  'Crachá igual! {valor}',
  'Isso, {valor}. Não troca de time no próximo',
  'Mesma afiliação. O scouter aprovou',
  'Acertou o time, falta o número da camisa',
  '{valor} certinho. Corta muita gente',
  'Afiliação verde. Agora é escolher o soldado'
],
dbAfiliacaoParcial: [
  'Afiliação amarela: mesmo lado, grupo diferente',
  'Amarelo na afiliação. Lado certo (bem, mal ou neutro), grupo errado',
  'Lado certo, turma errada. Torce pro time certo mas tá na arquibancada errada',
  'Mesma índole, carteirinha diferente',
  'Amarelinho. O lado bate, o grupo não',
  'Mesmo lado da briga, mas outra gangue',
  'Afiliação quase. Mesma vibe, outro endereço',
  'Amarelo: lado certo. Agora qual time?',
  'Parcial. Descobre de qual esquadrão é',
  'Quase na afiliação. O coração é o mesmo, o uniforme não'
],

/* ---------- poder ---------- */
dbPoderMuitoAcima: [
  'O alvo é MUITO mais forte que {nome}. Mira mais alto',
  'Scouter apitou: o alvo é bem mais forte. {nome} ficou no chinelo',
  'Poder bem acima. É mais de 8000, mais de 8000 MESMO',
  'Seta pra cima. {nome} é fraquinho perto do alvo',
  '{nome} é pouco. Pensa em gente parruda',
  'O alvo tá nível Bills e cê chutou nível Yamcha',
  'Mira nos fortões, o scouter tá quase explodindo',
  'Seta pra cima, e seta forte. Outro patamar',
  'Poder bem maior. {nome} ia tomar um peteleco só',
  'Sobe esse nível mano',
  'Muito mais forte. {nome} não aguenta nem o aquecimento',
  'Scouter: nível do alvo absurdo. Chuta alguém mais forte',
  'O alvo tá lá no céu e cê chutou no porão. Sobe',
  'Poder muito acima. Esquece terráqueo comum',
  'O alvo manda {nome} pro Outro Mundo com um espirro',
  'Bem mais forte. Pensa em quem faz o chão tremer'
],
dbPoderMuitoAbaixo: [
  'O alvo é MUITO mais fraco que {nome}. Desce do salto',
  'Seta pra baixo! O alvo é fraquinho nível Mr. Satan',
  'Poder bem menor. {nome} é forte demais pra ser a resposta',
  'Desce esse nível. O alvo não passa nem de 8000. Nem de 8',
  'Chutou um monstro e o alvo é um gatinho',
  '{nome} apagava o alvo com um peteleco. Pensa em alguém mais humilde',
  'Poder muito abaixo. Esquece deus, anjo e fusão',
  'O scouter quase nem registra o alvo. Desce',
  'Seta pra baixo. O alvo desmaia só com a pressão do ki',
  'Muito mais fraco. Pode ser que nem voe',
  'Mais fraco, bem mais. Tipo Chaos perto do Nappa',
  'Mira nos fracotes, com todo respeito aos fracotes',
  'Chutou alto demais. O alvo tá lá embaixo com o Yamcha',
  'Poder bem abaixo. Pode ser até gente comum',
  'Desce desce desce. O alvo não segura Kamehameha de criança',
  'Poder mais baixo. Pensa em quem só aparece pra levar susto'
],
dbPoderPerto: [
  'Poder quase! Um nível de diferença só',
  'Poder pertinho. Olha a seta e ajusta',
  'Amarelo no poder, diferença de um nível',
  'Quase no poder, tipo SSJ e SSJ2',
  'Poder por um fio. Um acima ou um abaixo, a seta fala',
  'Tá perto no poder, mas perto não é igual',
  'Um degrau de poder só. Esquentou',
  'Poder quase certo. Kaioken x10 ou x20, detalhe',
  'Diferença mínima de poder',
  'Poder amarelo, tá na faixa quase certa',
  'Um nivelzinho de nada. Ajusta',
  'Quase no poder. Mais um treino',
  'Poder colado, sobe ou desce um'
],
dbPoderCerto: [
  'Poder certinho. O scouter bateu exato',
  'Mesmo nível de poder. Scouter orgulhoso',
  'Poder verde, agora é o resto',
  'Acertou o poder. Mais preciso que scouter do Freeza',
  'Poder batido. Esse scouter não explode, ele comemora',
  'Mesmo patamar de força. Filtra por quem é desse nível',
  'Poder na mosca. Pensa em quem tá nessa prateleira',
  'Nível exato. Agora só não erra o resto'
],

/* ---------- estreia ---------- */
dbMesmaSerie: [
  'Mesma série de estreia. Época certa',
  'Estreia certa. Agora é procurar naquela temporada inteira KKKKK',
  'Mesma estreia! Fita VHS certa, agora acha o episódio',
  'É da mesma época que {nome}. Pensa em quem apareceu junto',
  'Estreia batida, conhecimento de anime em dia',
  'Mesma série. Tá na prateleira certa da locadora',
  'Estreia igual. Pensa na galera daquela fase',
  'Época certa. Filtra pelo resto',
  'Estreia verde. Nostalgia acertada',
  'Estreou junto com {nome}, mas não é {nome}',
  'Mesma série. Hora de lembrar dos coadjuvantes esquecidos',
  'Série certa. E teve muito episódio de enchimento naquela época hein',
  'Estreia certa. O scouter até assobiou',
  'Mesma fase da obra, tá afunilando',
  'Acertou a estreia. Não vai chutar alguém do GT do nada agora'
],
dbSerieDepois: [
  'O alvo estreou DEPOIS de {nome}. Pensa mais pra frente',
  'Seta pra cima na estreia: é de série mais nova',
  'Mais recente. Avança a fita',
  'O alvo apareceu depois. Pula uns arcos',
  'Estreia depois. Cê tá muito no passado',
  'Mais pra frente na linha do tempo, tipo o Trunks sem máquina',
  'Estreia mais nova. Esquece a infância',
  'Mais tarde. Na época do {nome} o alvo nem aparecia'
],
dbSerieAntes: [
  'O alvo estreou ANTES de {nome}. Volta no tempo',
  'Seta pra baixo na estreia: é mais antigo, raiz',
  'Mais antigo. Rebobina a fita',
  'O alvo apareceu antes. Pensa lá no começo',
  'Estreia anterior. Da época que o Goku tinha rabo',
  'Mais antigo que {nome}. Antigo tipo Mestre Kame',
  'Volta pro passado, sem máquina do tempo mesmo',
  'Estreou antes. Clássico, mais clássico'
],

/* ---------- planeta ---------- */
dbMesmoPlaneta: [
  'Planeta certo: {valor}. Olha a vizinhança',
  'Mesmo planeta! Conterrâneos',
  'Planeta verde: {valor}. Filtra quem veio de lá',
  'É de {valor} mesmo. Escolhe o morador certo',
  'Planeta batido. Se for Vegeta, cuidado que explode',
  'Acertou o planeta, o radar aprovou',
  'Mesma origem, tipo mesmo CEP galáctico',
  'Planeta certo. Mais esperto que o Nappa',
  'Origem confirmada: {valor}. Agora o resto',
  'Planeta verde. Um planeta mais perto',
  'Mesmo planeta. Se for Namekusei corre que só tem 5 minutos'
],

/* ---------- ignorou pista ---------- */
dbIgnorouPista: [
  'Uai, cê já sabia que {campo} não era {valor}. Chutou de novo por quê?',
  '{valor} já tinha dado vermelho em {campo}. Tá me testando?',
  'Ignorou a pista mano. {campo}: {valor} já era vermelho',
  'Repetiu o erro: {campo} {valor}. Até o Yamcha aprende. Às vezes',
  'Ô, {valor} em {campo} já tava descartado. Lê as cores',
  '{valor} em {campo} de novo? O scouter tá fazendo careta',
  'Esse {campo} ({valor}) já era vermelho. Confia nas cores, não no coração',
  '{campo} {valor} já deu errado antes. Esqueceu ou tá teimoso igual o Vegeta?',
  'Repetiu {valor} em {campo}. Toda vez a mesma coisa mds',
  'Pista ignorada: {campo} não é {valor}, cê já tinha visto',
  'Memória de peixe? {campo} {valor} já era vermelho',
  'Tá ignorando pista igual o Goku ignora boleto. {campo} não é {valor}',
  'Já sabia que não era {valor}. Olha a tabela, tá tudo lá',
  'Não quero ser chato mas {campo} {valor} já tava vermelho. Quero sim KKKKK',
  'Chutou contra as próprias pistas. Coisa ridícula'
],
dbIgnorouVerde: [
  'Peraí, cê já sabia que {campo} era {valor} e chutou outra coisa?',
  'Ô, {campo} já tava VERDE com {valor}. Mudou por quê?',
  'Tinha acertado {campo} ({valor}) e jogou fora. Tá maluco',
  'Largou um verde! {campo} era {valor}. Volta pra ele',
  '{campo} {valor} já tava confirmado. Chutou fora disso na emoção?',
  'Ignorou um acerto. {campo} = {valor}. É tipo esquecer a esfera em casa',
  'O verde é seu amigo. {campo} era {valor} e cê abandonou ele',
  'Traiu o verde do {campo}. O {valor} tá magoado',
  'Tinha verde e chutou fora. Isso é muito Yamcha',
  'Não precisa testar de novo: {campo} é {valor}. Confia'
],

/* ---------- sequência ruim / melhorou ---------- */
dbSequenciaRuim: [
  'Três chutes quase sem acerto. Tá igual o Yamcha na saga Saiyajin',
  'Seca de verde. Respira e olha a tabela',
  'Vários chutes no escuro. Liga o radar pelo amor de Kami',
  'Tá chutando igual o Goku escolhendo curso: sem ler nada',
  'Fase ruim. O Vegeta também teve, a vida toda',
  'Tá difícil hein. Segue os verdes antigos',
  'Três seguidos perdidos. Muda a tática',
  'Chutando no escuro igual quem levou Taiyoken na cara',
  'Mais perdido que eu no Move sem cartão',
  'Seca brava. Tem ajuda ali no ícone de interrogação',
  'Sofrendo, mas o Gohan também apanhou muito antes de explodir',
  'Tá rodando em círculo igual no Caminho da Serpente'
],
dbMelhorou: [
  'Opa, melhor chute até agora. O ki tá subindo',
  'Recorde de verde nessa rodada!',
  'Esse foi o melhor até agora, bora',
  'Melhorou! O treino com o Piccolo fez efeito',
  'Mais verde que antes. Tá virando Super Saiyajin do chute',
  'Melhor palpite da rodada. Continua nesse caminho',
  'O ki tá subindo, mais verde que qualquer chute de antes',
  'Evoluiu igual o Freeza troca de forma, mas pro bem',
  'Novo recorde da rodada. O alvo tá nervoso',
  'Melhorou bastante. O Mestre Kame ficaria orgulhoso',
  'Mais perto que nunca, segue esse fio',
  'AGORA SIM. Isso é treino de gravidade 100x'
],

/* ---------- marcos de quantidade ---------- */
dbMarco5: [
  '5 chutes. Liberou a dica da frase ali em cima',
  'Cinco tentativas. A dica da frase tá liberada, usa sem vergonha',
  '5 chutes e nada. Tem uma frase te esperando lá em cima',
  'Cinco já. Dá pra pedir a frase, custa 10 XP mas salva o orgulho',
  '5 tentativas. A dica da frase tá piscando pra você',
  'Chute número 5. Dica da frase liberada, é só apertar',
  'Cinco chutes. Normal, pânico só lá pelo 20. Mas a frase tá liberada',
  '5 já. Namekusei explodiu mais rápido. Usa a frase',
  'Cinco tentativas, o Kuririn já morreu umas 2 vezes. Tem a frase ali',
  'Olha a dica da frase liberada, tá ali em cima'
],
dbMarco10: [
  '10 chutes. Liberou a foto borrada. O Vegeta nunca pediria ajuda, por isso perde',
  'Dez tentativas. A foto borrada tá liberada, aperta os olhos',
  '10 chutes. Uma luta inteira do Z já. Usa a foto',
  'Dez! Já dava pra juntar as esferas. Tem foto borrada liberada',
  'Chute 10. Foto liberada. Ninguém tá olhando, pode usar',
  '10 chutes e contando. A foto tá ali te chamando',
  'Dez tentativas mds. Foto borrada liberada',
  '10! Mais tentativa que o Yamcha teve de ganhar de alguém. Usa a foto',
  'Dezena completa. Hora da foto borrada, eu acho',
  'Dez chutes. Respira. A foto borrada pode salvar'
],
dbMarco15: [
  '15 chutes. Tá durando mais que Goku contra Freeza',
  'Quinze! Namekusei ia explodir em 5 minutos e já foi 3 vezes',
  '15 tentativas. Olha os verdes com carinho',
  '15 já. Virou arco de enchimento: longo e sem avanço',
  'Chute 15. O Shenlong tá bocejando',
  'Quinze palpites. Não desiste não',
  '15 tentativas. Tô começando a ficar com dó',
  'Quinze. Se fosse Kaioken cê já tava sangrando',
  '15 chutes. Usa as dicas, elas tão ali carentes',
  '15 e eu aqui firme, igual o Piccolo esperando o Gohan crescer'
],
dbMarco20: [
  '{n} chutes. Virou Dragon Ball GT: longo e ninguém pediu',
  '{n} tentativas. 6 séculos mds',
  '{n} chutes. Desbloqueou: persistência de Saiyajin',
  '{n}! O Mestre Kame já leu umas 40 revistas nesse tempo',
  '{n} tentativas. Eu admiro, papo reto',
  '{n} chutes. Tá no Caminho da Serpente, longe pra caramba mas indo',
  '{n} palpites. Com isso dava pra completar umas 3 coleções de esfera',
  '{n}! O Kid Boo explodiu a Terra em menos tempo',
  '{n} chutes. Teimosia de respeito',
  '{n} tentativas. Isso é grito de transformação, não acaba nunca',
  '{n}. Se ajudar, não é o Goku. Cê já chutou ele? Nem lembro mais',
  '{n} chutes. O Vegeta já tinha desistido e culpado o Kakarotto',
  '{n} tentativas e ainda aqui. Guerreiro de verdade',
  '{n} chutes. Nem o 330 às 18h demora tanto',
  '{n}! Cê já sabe quem NÃO é melhor que o próprio Toriyama'
],

/* ---------- dicas ---------- */
dbDicaFrase: [
  'Pediu a frase. Tá tudo bem, o Goku pede comida o tempo todo',
  'Frase aberta. Lê com calma e pensa',
  'A frase tá aí. Se não acertar agora eu vou rir',
  'Olha a frase. Às vezes a resposta tá na cara igual o terceiro olho do Tenshinhan',
  'Usou a dica. O XP diminui, o orgulho também',
  'Frase liberada. Agora vai',
  'Pediu ajuda, humildade que o Vegeta não tem',
  'Dica aberta. Vergonha mesmo é chutar o Yamcha',
  'Leu a frase? Agora pensa em quem faria isso',
  'Frase revelada, bora',
  'Tá aí a frase. O Kaio do Norte daria essa dica com trocadilho ruim',
  'Dica na mão. Menos XP, mais chance'
],
dbDicaFoto: [
  'Foto borrada liberada. Aperta os olhos',
  'Olha a foto. Borrada igual lembrança de quem viu o Z na TV aberta',
  'Foto na tela. Se não reconhecer assim eu chamo o Kami',
  'Dica de foto! Agora até o Goku acertava',
  'Foto borrada aberta. Parece um Oozaru de longe? Olha aí',
  'Usou a foto. Tipo ver o Cell de longe, dá pra ter uma ideia',
  'Borradinha, mas ajuda. Igual os óculos do Mestre Kame',
  'Olha as cores e o formato. Pensa',
  'Foto aberta. Se errar agora eu comento, pode ter certeza',
  'Pista de foto liberada. O scouter agora tem câmera',
  'Viu a foto? Agora não tem desculpa',
  'A dica que salva rodada'
],
dbDicaNome: [
  'Esse não tem foto, então toma a inicial do nome e o tamanho',
  'Sem foto boa desse, liberei a primeira letra',
  'Pista de nome: primeira letra e quantidade de letras',
  'Não tinha foto, mas tem inicial. O scouter se vira'
],

/* ---------- vitória ---------- */
dbWin1: [
  'DE PRIMEIRA?? Cê tem um scouter escondido?',
  'Acertou de primeira. Ou é gênio ou olhou a resposta, vou investigar',
  'UM CHUTE. Nem o Whis é tão rápido',
  'De primeira! O Goku vai querer lutar com você agora',
  'PRIMEIRA TENTATIVA MDSSSS',
  'Na lata. Instinto Superior de chute',
  'Acertou de cara. Chama o Zeno que ele vai querer te conhecer',
  'Um chute só. Tá usando as esferas pra trapacear né',
  'DE PRIMEIRA KKKKKK meu scouter explodiu',
  'Um tiro só. Printa e manda no grupo',
  'Primeira! Mais rápido que o Kuririn morrendo',
  'Acertou no primeiro. Pode se achar, hoje pode'
],
dbWin23: [
  'Em {n} chutes! O Bills aprovaria',
  '{n} tentativas e pronto. Super Saiyajin do chute',
  'Acertou em {n}. Rápido igual o Goku no rodízio',
  'Só {n} chutes? Afiado igual espada do Trunks',
  '{n} tentativas! O Piccolo acenou com a cabeça, ele não sorri',
  'Em {n}! Elegante, o Freeza aplaudiria',
  'Acertou em {n}. Nível de poder bem acima da média',
  '{n} chutes, nem deu tempo de eu zoar',
  '{n} chutes! Genki Dama de raciocínio',
  'Em {n}! Tá jogando demais mano',
  '{n} tentativas. Igual o Vegeta no auge: metido e com motivo',
  'Só {n}! O scouter pediu autógrafo',
  'Só {n}? Assistiu o anime com caderninho né',
  '{n} chutes e tchau. O Hit ficou com inveja',
  'ACERTOUUUU em {n}. Que isso'
],
dbWinMid: [
  'Acertou em {n}. Nada mal',
  '{n} chutes. Honesto, tipo luta do Z com umas trocas antes do golpe final',
  'Em {n}! Sem pressa, igual o Goku carregando Genki Dama',
  'Achou em {n}. Respeitável',
  '{n} chutes e vitória. O Mestre Kame tá satisfeito',
  'Pegou em {n}. Nem rápido pra ser suspeito, nem lento pra eu zoar',
  'Vitória em {n}. Não é Instinto Superior, mas é instinto',
  'Acertou! {n} chutes. Tá treinando bem',
  '{n} palpites. Arco completinho, com começo, meio e fim',
  'É isso! Em {n}. Comemora igual o Mr. Satan, exagerado',
  'Vitória em {n}. O Gohan diria bom trabalho, ele é educado',
  'Em {n} tentativas. Tá ótimo',
  '{n}! Achou o guerreiro. Pode fazer um pedido pro Shenlong',
  'Acertou em {n}. Nível de poder: confiável',
  'Resolvido em {n}. Tá virando mestre nisso'
],
dbWinMuito: [
  '{n} chutes mas ACERTOU. Foi uma saga inteira',
  'Finalmente! {n} tentativas. Durou mais que o grito do Gohan virando SSJ2',
  'Acertou em {n}. Namekusei explodiu e reconstruiu nesse tempo',
  '{n} chutes. Persistência de Saiyajin ou teimosia de Vegeta, dá no mesmo',
  'É ELE! Depois de {n}. Eu já tava fazendo as malas',
  'Vitória depois de {n} chutes. Merecia um filme',
  '{n} chutes e acertou. Demorou 700 séculos mas foi',
  'Acertou! {n} tentativas. Ninguém vai lembrar, só eu',
  '{n}! O alvo tava escondido igual o Yamcha na saga Cell',
  'Depois de {n} chutes, vitória. Torneio do Poder da adivinhação',
  'Achou em {n}. Demorou, mas o Kuririn não morreu dessa vez',
  '{n} chutes. Eu diria que foi rápido, mas não vou mentir pra você',
  'Vitória em {n}. Paciência de Piccolo',
  '{n} chutes. Parece o GT: longo, mas terminou',
  'Ufa, {n} tentativas. Eu cheguei a cochilar KKKKK'
],
dbWinDica: [
  'Ganhou com dica. Tudo bem, o Goku ganha com a energia de todo mundo',
  'Acertou com dica. Menos XP, mas vitória é vitória',
  'Usou dica e acertou. Humildade de Kuririn, resultado de Goku',
  'A dica ajudou né. Sem vergonha nenhuma',
  'Venceu com uma forcinha, igual o Gohan com a espada Z. Que quebrou',
  'Com dica ainda vale, só vale um pouco menos',
  'A dica fez a parte dela, cê fez a sua',
  'Acertou com ajuda. O Shenlong mandou um oi',
  'Vitória assistida, igual o Goku que só ganha com os amigos',
  'Dica usada, alvo achado. Missão cumprida'
],
dbWinDiario: [
  'Diário feito! Manda o resultado e humilha os amigos',
  'O de hoje tá resolvido. Volta amanhã',
  'Diário feito. Pode ir dormir igual o Bills, uns 39 anos',
  'Guerreiro do dia achado! Amanhã tem outro, hoje tem o Infinito',
  'Resolveu o diário. Printa e manda no grupo',
  'Diário completo. Disciplina de Piccolo ou sorte de Mr. Satan',
  'Pronto por hoje. O scouter vai descansar, eu não',
  'Diário no bolso, a sequência agradece'
],
dbDesistiu: [
  'Desistiu? O Goku nunca desiste. Mas ele também não paga conta',
  'Tudo bem desistir. Era {alvo}',
  'Era {alvo}! Da próxima vai',
  'Desistência registrada. Sem XP, mas com aprendizado',
  'Era o {alvo}. Não fica triste, o Yamcha desiste de muita coisa',
  'Revelado: {alvo}. Olha a tabela e vê onde cê se perdeu',
  'Desistiu mds. Nem todo mundo aguenta o Torneio do Poder',
  'O alvo era {alvo}. Bora de novo',
  'Jogou a toalha. Pipoqueiro demais KKKKK',
  'Era {alvo}. Toma uma água e volta mais forte',
  'Era {alvo}, tava na cara né. Tava não, relaxa'
],
dbNovoInfinito: [
  'Novo guerreiro sorteado. Bora',
  'Mais um! Viciado igual o Goku em luta',
  'Outro alvo escondido. O Infinito não para',
  'Sorteei outro. Juro que não é o mesmo',
  'Rodada nova, mais uma chance de me impressionar',
  'Próximo guerreiro. Scouter recarregado',
  'Bora mais uma. Episódio do Z sempre tem mais um',
  'Novo mistério. A duração depende de você',
  'Outro personagem na mira. Chuta aí',
  'Rodada nova, esperança nova, piada velha',
  'Mais um guerreiro. Vai de primeira dessa vez? Duvido',
  'Recarreguei o radar, tem sinal novo',
  'De novo! Cada dia mais me tornando um viciado nisso também'
],
dbShare: [
  'Copiado! Manda no grupo e espera alguém se achar melhor',
  'Resultado copiado. Cola no grupo da família, ninguém vai entender',
  'Copiei! Os quadradinhos coloridos vão impressionar alguém',
  'Tá no Ctrl+V. Espalha',
  'Copiado. Manda pro amigo que se acha fã de Dragon Ball',
  'Resultado copiado mais rápido que Teletransporte',
  'Copiado. Agora é humilhar no grupo',
  'Pronto, copiado. Nem precisa printar, é só colar'
],
dbNaoAchou: [
  'Esse nome não tá na lista. Escolhe um que aparece embaixo',
  'Não conheço esse não. Personagem de fanfic?',
  'Não achei ninguém com esse nome. Radar sem sinal',
  'Esse aí não existe aqui. Só no Dragon Ball AF',
  'Não achei. Tenta outro jeito de escrever ou olha as sugestões',
  'Não reconheci. Escreveu com sotaque de Namekusei?',
  'Ninguém com esse nome. Nem no Outro Mundo',
  'Hã? Esse eu não conheço, e olha que eu conheço até o Monaka',
  'Não achei. Digita um pedaço do nome e escolhe da lista',
  'Nome inválido. Scouter deu erro 404',
  'Esse não tá no elenco. Escolhe alguém da lista',
  'Sla quem é esse. Parece nome de golpe do Gotenks'
],
dbJaChutou: [
  'Cê já chutou {nome}. Tá testando minha memória?',
  '{nome} de novo? Já foi, continua não sendo',
  'Esse já foi. Tipo o Freeza voltando, ninguém pediu',
  'Já chutou {nome}. Tá igual o Broly gritando o mesmo nome',
  'Repetido! Eu não esqueço não',
  '{nome} já tá na tabela, olha embaixo',
  'Já foi esse. Não precisa chutar de novo pra ter certeza',
  '{nome} já tomou o não dele'
],

/* ---------- aleatórias (tagarelice de fundo) ---------- */
aleatorioDB: [
  'O Kuririn não tem nariz e ninguém nunca explicou. Penso nisso toda noite',
  'Se o Goku pagasse pensão a Chi-Chi tava rica',
  'Até hoje não sei como o Mr. Satan convenceu o mundo inteiro. Talento',
  'O Piccolo é babá, motorista e professor do Gohan. E ninguém paga ele',
  'O Yamcha foi o primeiro rival do Goku. Deu no que deu',
  'O Vegeta perde a série toda e continua se achando. Ídolo',
  'Namekusei ia explodir em 5 minutos e levou 10 episódios. Física de anime',
  'Queria uma Nuvem Voadora, mas precisa ter coração puro. Então não',
  'O Freeza troca de visual mais que blogueiro',
  'Imagina ser o Kaio do Norte e ninguém rir das suas piadas por milênios. Me identifico',
  'O Goku morreu, voltou, morreu de novo, voltou de novo. O plano de saúde dele é outro nível',
  'Se eu tivesse uma esfera eu pedia passagem de ônibus de graça pra sempre',
  'Às vezes eu grito pra me transformar. Nada acontece, mas o vizinho reclama',
  'Justiça pelo Chaos. Ele só queria ajudar',
  'O Cell tem DNA do Goku, do Vegeta, do Piccolo e do Freeza. Imagina o almoço de família',
  'Se o Bills acordar com fome, esconde o pudim',
  'O Whis resolvia tudo em 2 segundos. Mas aí não tinha anime',
  'O Gohan largou a luta pra estudar e ainda salva o mundo nas horas vagas',
  'O Oolong pediu uma calcinha pro Shenlong e salvou o mundo. Do jeito dele',
  'Se eu fosse Saiyajin eu ia ter fome o tempo todo. Pera, eu já tenho',
  'A Bulma fez uma máquina do tempo e eu não consigo nem configurar a impressora',
  'O Mestre Kame tem mais de 300 anos e ainda não aprendeu a se comportar',
  'O Kid Boo explodiu a Terra porque quis. Sem discurso, sem nada. Raiz',
  'Tanto pedido nas esferas que o Shenlong já devia ter sindicato',
  'Mais de 8000 é o resumo da internet inteira',
  'Grito de transformação: 3 episódios. Luta: 3 minutos',
  'O Goten e o Trunks acertaram a fusão de primeira. Eu erro a senha do wi-fi',
  'Imagina a conta de luz da Sala do Tempo',
  'O Piccolo aprendeu a dirigir no Super. O Goku em 40 anos nunca',
  'O Majin Boo transforma gente em chocolate. Eu transformo tempo livre em chute errado',
  'O Dende cura qualquer coisa, menos a minha preguiça',
  'O Freeza e o boleto têm uma coisa em comum: sempre voltam',
  'O castelo do Rei Cutelo pegando fogo e ninguém chama bombeiro. Anos 80 era outro nível',
  'O radar acha esfera no planeta inteiro e meu celular não acha nem o wi-fi',
  'O Karin guarda semente dos deuses. Eu guardo sachê de ketchup',
  'O Hit para o tempo por meio segundo. Eu paro o tempo toda segunda de manhã',
  'O Jiren meditou o torneio inteiro. Eu também medito, chamo de cochilo',
  'O Mr. Popo é educado de um jeito que dá medo. Cê sabe do que eu tô falando',
  'O Goku come 50 pratos por refeição. Imagina o mercado da Chi-Chi',
  'O Babidi escrevia M na testa dos outros. Eu escrevo B de Bugado em tudo',
  'O Nappa plantou Saibaman no quintal. A horta mais perigosa do universo',
  'O Vegeta treinou em gravidade 300x e o cabelo continua em pé. Resistência capilar absurda',
  'Vou abrir uma academia chamada Sala do Tempo. Um ano de treino por dia de mensalidade',
  'O Kaioshin tem milhões de anos e cara de adolescente. Qual é o creme?',
  'A 18 casou com o Kuririn. Nariz não é tudo nessa vida',
  'O Gotenks dá nome horrível pros golpes e funciona. Como pode ele ser tão maneiro',
  'O Goku nunca trabalhou e tem casa. Esse é o verdadeiro poder',
  'Instinto Superior: o corpo luta sozinho. Queria isso pra lavar louça',
  'Tentei fazer Kamehameha uma vez. Saiu um espirro',
  'O Mestre Kame destruiu a Lua com Kamehameha. De véio. Respeita',
  'A Launch espirra e vira outra pessoa. Eu espirro e continuo eu. Decepção',
  'Se eu tivesse rabo de Saiyajin ia usar pra segurar o controle enquanto como',
  'O Goku chamou o Zeno de amigo. Eu não chamo nem o porteiro',
  'No Torneio do Poder geral rasgou a roupa. Menos o Jiren, único com roupa decente',
  'Dragon Ball com trilha de Tame Impala ia ficar bom demais, pensa',
  'Queria ver o Vegeta no 330 lotado. Explodia o ônibus no segundo ponto',
  'O Goku faltou em tudo que era compromisso e mesmo assim geral ama ele. Como?',
  'O Duolingo quebra minha ofensiva e o Goku nunca quebrou a dele de treino',
  'O Kaio do Norte tem um carro e mora num planeta que dá pra atravessar a pé',
  'Sala do Tempo: um ano lá dentro, um dia aqui fora. Queria isso pra dormir',
  'O Yajirobe é o verdadeiro vencedor do Dragon Ball: comeu bem e nunca morreu',
  'O Broly ficou 30 anos bravo com o Goku. Eu fico bravo 5 minutos com o Cruzeiro, 6 no máximo',
  'O Shenlong fica de mau humor com pedido difícil. Eu também, tamo junto'
],
paradoDB: [
  'Tá parado? Namekusei vai explodir, em 5 minutos ou 10 episódios',
  'Ô, tá concentrando ki ou dormiu igual o Bills?',
  'Nada de chute? Tá carregando Genki Dama?',
  'O guerreiro secreto tá esperando',
  'Parou? Até o Piccolo meditando faz mais barulho',
  'Scouter apitando: nível de atividade zero',
  'Pode chutar qualquer um, vai',
  'Um chutezinho, nem que seja o Yamcha. Ele gosta de atenção',
  'O radar tá piscando e cê parado',
  'Mais parado que o Tenshinhan depois do soco do Nappa',
  'Tá esperando o Shenlong responder? Ele não vai',
  'Tá tão quieto que dá pra ouvir o grilo do Kaio do Norte',
  'Chuta alguém que ninguém lembra, eles adoram',
  'Travou? Olha as cores dos chutes de antes',
  'Parou pra pensar? O Gohan faz isso. O Goku não',
  'Ô, cê tá vivo?',
  'Tô aqui esperando igual o Kami esperando alguém subir a torre',
  'O Mr. Satan já tinha gritado 3 nomes',
  'O guerreiro misterioso tá ficando entediado',
  'Vai chutar ou vai me deixar falando sozinho?'
],

/* ---------- cutucar o mascote ---------- */
cutucarDB: [
  'Ei! Não sou botão de transformação',
  'Para que eu viro Oozaru de raiva',
  'Me cutucou? Ousadia de mais de 8000',
  'Isso foi golpe? Parece o Yamcha tentando',
  'Para de cutucar que eu conto pro Whis',
  'De novo? Cê é igual o Goku, não sabe a hora de parar',
  'Ai! Doeu mais que Kienzan',
  'Procurando a resposta em mim? Não sou o Shenlong não',
  'Cutuca de novo que eu dou um Taiyoken na sua cara',
  'Não sou esfera do dragão, não adianta esfregar',
  'Toca aqui! Pera, fusão não. Ainda não',
  'Se cutucar muito eu viro Super Saiyajin? Viro Super Irritado',
  'O Bills cutuca assim antes de destruir planeta',
  'Oi, tô aqui. Sempre aqui',
  'Isso foi Instinto Superior ou só dedo mesmo?',
  'Cutucar mascote não dá XP. Eu já tentei',
  'Vou chamar o Mr. Satan pra te enfrentar',
  'Tá me cutucando porque não sabe quem é? Eu sei. Não conto',
  'Assim eu grito 3 episódios e me transformo',
  'Eu tenho cara de saco de pancada do Vegeta?',
  'Tá, dica: é alguém de Dragon Ball. Pronto. Para',
  'Mais uma e eu faço a pose das Forças Especiais Ginyu',
  'Cutucar é o Kamehameha dos fracos',
  'O Goku cutucava o Vegeta pra lutar e ninguém gostava',
  'Pode cutucar, tô no modo Kuririn: aguento tudo e depois morro',
  'Eu vi seu histórico de chutes. Eu ri KKKKK',
  'Não me cutuca que eu solto um Final Flash de purpurina',
  'Vou ficar quieto. Não vou nada, nunca fico',
  'Mais uma e eu viro chocolate igual o Boo faz',
  'Eu tenho mais poder de luta do que parece. Uns 5',
  'O scouter registrou uma cutucada nível Yajirobe',
  'Não me cutuca, tô ocupado julgando seus chutes',
  'Me cutucar não revela nada, mas continua que eu gosto de atenção',
  'Kienzan de dedo? Achei ofensivo',
  'Oi! Quer semente dos deuses? Não tenho. Mas oi',
  'Cada cutucada nasce um Saibaman. Cuidado com o Yamcha',
  'Carinho ou agressão? Com você nunca sei',
  'Ô cutucador, vai chutar um personagem e não o mascote',
  'Se eu fosse o Piccolo te dava um sermão. Como sou eu, KKKKKK',
  'Tá me usando de fidget toy né',
  'Cutucou mais que o Goku quebra promessa',
  'Ai mano, cê tá maluco?',
  'Isso aqui não é botão de dica não',
  'Me cutuca menos e chuta mais',
  'Mds que dedo pesado'
]
};

/* ---------- falas por personagem (quando você chuta ele e erra) ---------- */
const P = {
  'Yamcha': [
    'Chutou o Yamcha. Coitado, até no chute ele perde',
    'Yamcha! Cuidado com o Saibaman. Ah, não é ele. Perdeu de novo, normal',
    'O Yamcha nunca é a resposta. Nunca',
    'Yamcha errado. Deixa ele deitado na cratera, é o habitat natural',
    'Chutar o Yamcha é caridade, ele quase não recebe atenção'
  ],
  'Kuririn': [
    'Kuririn? Não. Morreu de vergonha, mais uma vez',
    'Não é o Kuririn. Pelo menos ele sobreviveu a esse chute, raro',
    'Kuririn errado. Ele disse que tá tudo bem, já tá acostumado',
    'Não é o Kuririn, mas ele tem 6 pontinhos na testa e muito coração'
  ],
  'Mr. Satan': [
    'Mr. Satan? Não é ele. Mas ele vai dizer que te ajudou',
    'Chutou o campeão mundial! Ele já tá dando autógrafo',
    'Não é o Mr. Satan. Se cê acertar depois ele leva o crédito mesmo assim',
    'Mr. Satan errado. Ele disse que foi truque. Sempre é truque'
  ],
  'Goku': [
    'Goku não é. Deve tá treinando, comendo ou esquecendo da família',
    'Não é o Goku. Ele tá em algum lugar gritando oi eu sou o Goku',
    'Chutou o Goku no meio da partida. Pelo menos agora tem régua de poder'
  ],
  'Vegeta': [
    'Vegeta? Não. E ele tá bolado de ter sido chutado e errado',
    'Não é o Vegeta. Ele vai dizer que o Kakarotto roubou o posto',
    'O Príncipe dos Saiyajins recusou ser a resposta. Por orgulho'
  ],
  'Freeza': [
    'Não é o Freeza. Ele disse que pena com a voz mais educada e cruel do mundo',
    'Freeza errado. Mas ele volta no próximo filme, sempre volta',
    'Chutou o Freeza. Não é ele, mas já explodiu seu planeta de raiva'
  ],
  'Piccolo': [
    'Piccolo? Não. Tá ocupado levando a Pan na escola',
    'Não é o Piccolo. Foi dirigir, aprendeu no Super',
    'Piccolo errado. Cruzou os braços e fechou os olhos, é o jeito dele de dizer tenta de novo'
  ],
  'Gohan': [
    'Gohan? Não. Tá estudando ou salvando o mundo de capacete',
    'Não é o Gohan. Potencial ele tem, mas não é ele'
  ],
  'Chaos': [
    'Chaos! Pequenininho demais. Não é ele, mas é fofo',
    'Não é o Chaos. Ele ia se explodir de tristeza, mas não ia adiantar nada'
  ],
  'Tenshinhan': [
    'Tenshinhan não. Tá com os três olhos arregalados',
    'Errou o Tenshinhan. Ele vai se dividir em quatro pra ficar triste em dobro'
  ],
  'Bulma': [
    'A Bulma não. Mas ela já tá montando uma máquina pra descobrir quem é',
    'Bulma errada. Ela vai ficar brava, e quando a Bulma fica brava até o Vegeta treme'
  ],
  'Cell': [
    'Cell? Não. Mas ele tá absorvendo seus erros pra ficar perfeito',
    'Não é o Cell. Ele ia fazer um torneio só pra zoar esse chute'
  ],
  'Majin Boo': [
    'Majin Boo errado. Ele vai te transformar em chocolate por isso',
    'Não é o Boo. Tá comendo doce com o Mr. Satan, de boa'
  ],
  'Bills': [
    'Bills errado. Cuidado que ele destrói planeta quando fica chateado',
    'Não é o Bills. Ele voltou a dormir, deixa quieto'
  ],
  'Whis': [
    'Whis errado. Ele podia voltar 3 minutos no tempo pra você tentar de novo. Não vai, mas podia'
  ],
  'Zeno Sama': [
    'Chutou o Zeno! Ainda bem que ele não apagou o jogo',
    'Não é o Zeno. Ele achou engraçado, ufa, universo salvo'
  ],
  'Saibaman': [
    'Chutou o Saibaman. O Yamcha acabou de ter um flashback',
    'Não é o Saibaman. Cuidado que ele pula e explode'
  ],
  'Nappa': [
    'Nappa não. O Vegeta já avisou que ele não serve pra nada',
    'Nappa errado. Tá plantando Saibaman no quintal'
  ],
  'Raditz': [
    'Raditz? Não. Durou pouco no anime e durou pouco aqui',
    'Não é o Raditz. O irmão mais esquecido do anime'
  ],
  'Capitão Ginyu': [
    'Ginyu errado. Mas a pose foi tão linda que eu perdoo',
    'Não é o Ginyu. Tá trocando de corpo com um sapo agora mesmo'
  ],
  'Broly': [
    'Broly? KAKAROTTO! Ops, errado, não é ele',
    'Não é o Broly. Ele tá gritando há 30 anos'
  ],
  'Jiren': [
    'Jiren errado. Ele nem abriu o olho pra ver seu chute',
    'Não é o Jiren. Ele só confia na força, e a força disse não'
  ],
  'Mestre Kame': [
    'Mestre Kame? Não. Tá lendo revista na ilha',
    'Não é o véio safado. Ele mandou lembrança pra Bulma'
  ],
  'Oolong': [
    'Oolong errado. Ele virou um chute certo, mas durou só 5 minutos'
  ],
  'Yajirobe': [
    'Yajirobe? Não. Tá comendo e fugindo da luta, como sempre',
    'Não é o Yajirobe. Mas ele cortou o rabo do Vegeta, respeita'
  ],
  'Chi-Chi': [
    'Chi-Chi errada. Ela mandou você ir estudar em vez de jogar',
    'Não é a Chi-Chi. Mas ela tá com a frigideira na mão, cuidado'
  ],
  'Monaka': [
    'Monaka! O guerreiro mais forte do universo, segundo o Bills. Não é ele e ele desmaiou de alívio',
    'Chutou o Monaka. Ele é entregador, não lutador. E não é a resposta'
  ],
  'Shenlong': [
    'Chutou o Shenlong. Ele disse que esse desejo tá além do poder dele',
    'Não é o Shenlong. Já voltou pras esferas, tchau'
  ],
  'Kaio do Norte': [
    'Kaio do Norte? Não. Mas ele tem uma piada pronta pra isso. Ruim',
    'Não é o Kaio. O Bubbles e o Gregory mandaram um abraço'
  ],
  'Gotenks': [
    'Gotenks errado. Ele vai dar nome pro seu chute: Super Chute Kamikaze Fracassado'
  ],
  'Trunks': [
    'Trunks não. Tá aprontando com o Goten'
  ],
  'Trunks do Futuro': [
    'Trunks do Futuro errado. Ele volta no tempo e tenta de novo, cê também pode'
  ],
  'Pan': [
    'Pan? Não. E ela ficou brava. Neta do Goku brava é pior que Oozaru'
  ],
  'Imperador Pilaf': [
    'Pilaf? Queria dominar o mundo e nem conseguiu ser a resposta'
  ],
  'Tartaruga Umigame': [
    'Chutou a tartaruga! Não é ela, mas gostei da ousadia'
  ],
  'Androide 18': [
    'Não é a 18. Da última vez que chutaram ela errado ela quebrou um braço'
  ],
  'Androide 16': [
    'Não é o 16. Tá olhando os passarinhos, tranquilo'
  ],
  'Hit': [
    'Hit errado. Ele parou o tempo só pra rir de você'
  ],
  'Goku Black': [
    'Goku Black errado. Ele vai dizer que a culpa é dos mortais, pra ele tudo é'
  ],
  'Launch': [
    'Launch errada. Espirrou e virou a loira, agora ela quer atirar em você'
  ],
  'Dr. Gero': [
    'Dr. Gero? Não. Tá tentando se vingar de um moleque de 12 anos até hoje'
  ]
};

const out = Object.assign({}, L);
Object.keys(P).forEach(k => { out['dbc_' + k] = P[k]; });
window.DB_FALAS_PERSONAGEM = Object.keys(P);
window.DB_FALAS = out;
if (window.Bugado) Bugado.addLines(out);
})();
