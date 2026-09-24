/* ==========================================================
   Falas do Bugado — Quem é esse Guerreiro? (Dragon Ball)
   Variáveis: {nome} = personagem chutado · {n} = nº de chutes
              {raca} = raça do chute · {campo} = atributo · {valor} = valor do atributo
              {alvo} = personagem secreto (só na vitória) · {xp} = XP ganho
   Categorias com prefixo "db". Falas por personagem em DB_FALAS_PERSONAGEM.
   ========================================================== */
(() => {
const L = {

/* ---------- começo de rodada ---------- */
dbInicio: [
  'Tem um guerreiro escondido aqui. Não, não é o Yamcha. Ou é? Nunca se sabe.',
  'Bora adivinhar! Dica grátis: não é o Goku. Talvez. Provavelmente. Chuta aí.',
  'O radar tá apitando! Tem um guerreiro misterioso por perto. Ou é só a bateria acabando.',
  'Novo mistério carregado. Mais rápido que o Goku carregando uma Genki Dama, pelo menos.',
  'Quem é esse guerreiro? Eu sei. Você não. Adoro essa dinâmica.',
  'Liguei o scouter. Tá lendo um guerreiro aí. Poder? Mistério. Nome? Problema seu.',
  'Tá valendo! E não vale pedir pro Shenlong a resposta. Eu já tentei, ele disse que é “complicado demais”.',
  'Primeiro chute é o mais bonito. Ou o mais vergonhoso. Vamos descobrir juntos.',
  'Um guerreiro foi escolhido. Ele não sabe. Você não sabe. Só eu e o Whis sabemos.',
  'Hora do quiz! Prometo que não é o Saibaman. Ou prometo? Olha minha cara de quem não promete.',
  'Tem 7 esferas no mundo e 1 guerreiro escondido aqui. As esferas são mais fáceis.',
  'Aperta o cinto: vai ser mais longo que a transformação do Goku em Super Saiyajin 3.',
  'Seu cérebro tá em qual nível? Base? Então chuta com calma.',
  'Escolhi alguém. Juro que não é o Kuririn só pra ele morrer de novo.',
  'Vamos lá, guerreiro. Concentra o ki no teclado.',
  'Se você acertar de primeira, eu vou desconfiar. Tipo o Vegeta desconfia de tudo.',
  'O personagem de hoje tá escondido. Mais escondido que o poder do Gohan quando ele vai pra escola.',
  'Bem-vindo à Câmara do Tempo das adivinhações. Aqui um minuto parece um ano.',
  'Pode chutar qualquer um. Menos o Goku. Brincadeira, pode. Mas eu vou comentar.',
  'Um novo desafio surge! Duração estimada: menos que Namekusei explodindo. Espero.',
  'Radar do Dragão ligado. Seta apontando pra… sua ignorância. Brincadeira. Chuta aí.',
  'Sem pressão. É só o destino do universo 7 nas suas mãos. Tranquilo.'
],
dbInicioDiarioFeito: [
  'Você já achou o de hoje! Volta amanhã. Ou joga o Infinito, seu viciado.',
  'Diário concluído. Até o Goku descansa às vezes. Tá, não descansa. Mas você pode.',
  'Esse já foi. Amanhã tem outro. Enquanto isso, o Infinito tá ali te olhando.',
  'Já resolveu esse. Voltar aqui não faz o dia passar mais rápido. Nem na Sala do Tempo.',
  'Missão de hoje: completa. Próxima missão: esperar. A mais difícil de todas.',
  'Você voltou pro diário que já terminou. Tá com saudade de mim, né? Assume.',
  'Diário resolvido. Pode ir treinar no Infinito, igual o Vegeta na gravidade 300x.',
  'Já foi! Quer mais? Troca pro Infinito. Não tem limite. Igual a fome do Goku.',
  'Esse aqui tá fechado. Nem as esferas do dragão reabrem. Só amanhã.',
  'Terminado! Volta amanhã, que eu vou ter outro guerreiro e piadas novas. Algumas.',
  'Ô, já acabou esse aqui. Tá igual o Broly: não aceita que acabou.',
  'O diário acabou mas meu falatório não. Clica no Infinito que eu continuo.'
],
dbModo: [
  'Modo trocado. Igual o Freeza trocando de forma: mesma pessoa, outro problema.',
  'Mudou de modo! Não precisa gritar por três episódios pra isso.',
  'Novo modo, nova chance de passar vergonha.',
  'Trocou? Beleza. Eu me adapto. Tipo o Cell absorvendo gente.',
  'Clássico Z: só Dragon Ball e Z. Nada de anjo, nada de Zeno. Raiz.',
  'Infinito: pode chutar até cansar. Igual briga do Z: nunca acaba.',
  'Modo diário: um por dia, todo mundo pega o mesmo. Sem colar do amigo. Ou cola, sei lá.',
  'Mudança de modo! O scouter recalibrou.',
  'Trocou de modo mais rápido que o Goku some quando tem boleto.',
  'Tá explorando os modos. Curioso igual o Oolong. Mas com intenção mais pura. Espero.'
],

/* ---------- primeiro chute ---------- */
dbPrimeiro: [
  'Primeiro chute: {nome}. Corajoso. Ou aleatório. Tanto faz.',
  'Começou com {nome}! Clássico ou chute no escuro? Não responde, eu vejo nas cores.',
  'Abriu com {nome}. Tipo abrir o jogo com um Kamehameha: pode dar certo, pode ser o Yamcha.',
  '{nome} de primeira? Tá, agora as cores falam por mim.',
  'Primeiro chute é tipo o primeiro episódio do Z: pouca ação, muita informação.',
  'Chutou {nome}. O scouter anotou. O scouter julga em silêncio.',
  'Estratégia interessante começar com {nome}. Eu não entendi, mas é interessante.',
  'Pronto, o primeiro já foi. Agora é só ler as cores e fingir que tinha um plano.',
  'Primeiro chute, primeiras pistas. É assim que o Bulma acha esfera: aos poucos.',
  '{nome} abrindo a rodada. Ele não pediu isso, mas agradece a atenção.',
  'Começou pelo {nome}? Ok, ok. Mestre Kame também começava pelas revistas.',
  'Primeiro palpite! Quero ver se você lê as dicas ou só chuta igual o Goku lê manual.',
  'Chute inicial: {nome}. Dá pra ver que você pensou uns 0,3 segundos.',
  'Começou! O primeiro é o mais fácil de errar. O segundo também. Todos, na verdade.',
  'Ahh, {nome}. Escolha de quem assistiu desenho de manhã antes da escola.',
  'O primeiro é pra aquecer. Tipo alongamento antes de levar surra do Freeza.',
  'Abriu com {nome}. Vou fingir que foi estratégia.',
  'Primeiro chute registrado no scouter. Nível de confiança: “vai que”.',
  'Primeiro palpite dado. Agora a gente sabe mais. Eu já sabia tudo, mas você agora sabe mais.',
  'Chutou {nome}. Bom, pelo menos não foi o Monaka. Ou foi? Tanto faz.',
  'Um chute, mil possibilidades. Menos agora. Um pouco menos.'
],
dbGokuPrimeiro: [
  'Goku de primeira. O clássico dos clássicos. Todo mundo faz. Eu esperava mais de você.',
  'Chutou o Goku primeiro. Aposto que você também pede pizza de muçarela. Sem julgamento. Com julgamento.',
  'Goku no primeiro chute, igual todo mundo. O protagonismo dele é contagioso.',
  'O Goku! Que surpresa. Nunca ninguém pensou nisso. (Todo mundo pensou nisso.)',
  'Primeiro chute Goku. É tipo começar Pokédle com Pikachu. Previsível e fofo.',
  'Goku de cara. Olha, se desse certo seria lindo. Mas não é assim que funciona, né.',
  'Kakarotto no primeiro chute! O Vegeta ficaria com ciúme. Ele fica com ciúme de tudo.',
  'Goku primeiro? Vai que é ele. O cara aparece em tudo mesmo. Até onde não devia.',
  'Chute padrão de fábrica: Goku. Parabéns, você é um ser humano.',
  'Goku! O herói, o mito, o pai ausente. Serve de régua pra medir o resto, pelo menos.',
  'Começou pelo Goku. Pelo menos agora você sabe o que o guerreiro NÃO é. Muito útil. Eu acho.',
  'Todo mundo chuta Goku primeiro. É lei. Tá escrito no manual do Shenlong.',
  'Goku, sério? A criatividade tá igual a do Yamcha nas lutas.'
],

/* ---------- erro genérico ---------- */
dbErro: [
  'Não é {nome}. Mas foi bonito. Não foi, mas vou ser gentil.',
  '{nome}? Não. O scouter até riu.',
  'Errou. Mas errou com estilo, igual o Vegeta perdendo.',
  'Nada de {nome}. Continua! O Goku também apanhou muito antes de aprender.',
  'Não é esse. Se fosse fácil, o nome do jogo era “Quem é o Goku?”.',
  '{nome} ficou de fora. Tipo o Yamcha em todas as lutas importantes.',
  'Não foi dessa vez. Nem da outra. Mas da próxima, quem sabe.',
  'Negativo! Olha as cores, elas estão gritando mais que Super Saiyajin.',
  '{nome} não é. Mas agora você tem mais pistas. É assim que se chega no Super Saiyajin: apanhando.',
  'Errado. Mas quem nunca chutou errado que atire a primeira Genki Dama.',
  'Não é o {nome}. Mas ele mandou um abraço.',
  'Nope. Continua o treino. Tem Câmara do Tempo sobrando.',
  'Não é. Mas fica tranquilo, o Kuririn já morreu mais vezes que você errou.',
  '{nome}? Hmm, não. Mas foi um chute com convicção, isso eu respeito.',
  'Errou! Mas errar faz parte, dizia o Mestre Kame, enquanto errava a revista.',
  'Não é esse. As cores tão aí pra te ajudar. Olha pra elas. Com carinho.',
  'Resposta negativa do scouter. Ele diz: “tente outra vez, terráqueo”.',
  '{nome} errado. Mas a gente anota e segue, igual o Piccolo anotando os erros do Gohan.',
  'Não é. Tá igual Goku procurando esfera sem radar.',
  'Errou, mas errou perto? Não sei. Olha as cores, eu só trabalho aqui.',
  'Nem é {nome}. O Bills ia te destruir por esse chute. Sorte que eu sou bonzinho.',
  'Não é esse aí. Próximo! Tipo fila de reencarnação do Rei Enma.',
  'Errou. Tudo bem. O Vegeta errou a vida inteira e hoje é pai de família.',
  'Não é {nome}. Se serve de consolo, ele também não sabia.',
  'Chute errado. A Bulma já teria inventado uma máquina pra acertar.',
  '{nome}? Não. Mas foi um palpite digno de filler.',
  'Negativo. Mas negativo com aprendizado. Tipo o Gohan depois de cada surra.',
  'Não é. Respira. Concentra. Eleva o ki. Chuta de novo.',
  'Mais um pra lista dos que não são. A lista cresce, a esperança continua.',
  'Não foi. Mas tá valendo pelo esforço. Não vale ponto, mas vale.',
  'Errado! O Freeza riria. Eu só dou um sorrisinho.',
  'Não é esse guerreiro. Nem esse, nem aquele. Mas algum é. Isso é certo.',
  '{nome} não. Mas o scouter tá esquentando? Talvez. Talvez não. Olha as cores.',
  'Tentativa registrada. Resultado: não. Moral: intacta. Eu acho.',
  'Nop. O Shenlong disse que não pode realizar esse desejo.',
  'Errou, mas errou menos que o Yamcha no Saibaman. Ou não. Difícil errar mais que aquilo.',
  'Não é {nome}. Vamos juntos, como Goku e Vegeta: brigando mas indo.',
  'Não foi. Mas daqui a pouco vai. Ou daqui a muito. Tô aqui de qualquer jeito.',
  'Chute recusado! Igual o Vegeta recusa ajuda.',
  'Esse não. Chuta outro antes que o Namekusei exploda. Ainda tem uns 5 minutos. Que duram 10 episódios.',
  'Errou. Pode xingar, eu deixo. Mas baixinho.',
  'Não é esse. Quase ninguém é. Só um é.'
],

/* ---------- tudo vermelho ---------- */
dbTudoVermelho: [
  'Tudo vermelho. Nem raça, nem nada. Você achou o oposto exato. Isso também é talento.',
  'Zero acertos! Tá mais longe que Namekusei da Terra.',
  'Tudo errado. Mas olha pelo lado bom: agora você sabe tudo que NÃO é.',
  'Vermelho total. Parece a Saga do Freeza: só sofrimento.',
  'Nenhum quadradinho verde. O scouter explodiu de tristeza.',
  'Tudo vermelho! Isso foi um chute ou um Kienzan no escuro?',
  'Cor nenhuma bateu. Você chutou com os olhos fechados igual o Karin?',
  'Zero de oito. Nem o Mr. Satan erraria tanto. Ele erraria mais, na verdade. Mas ele é o Mr. Satan.',
  'Tudo errado. Mas descartou um monte de coisa. Um erro tão bom que quase é acerto.',
  'Vermelho que nem o cabelo do Androide 16. Quer dizer, nem isso bateu.',
  'Parabéns, você encontrou o anti-personagem. Informação valiosa, na verdade.',
  'Tudo vermelho. É o tipo de chute que o Yamcha daria. E perderia.',
  'Nenhum acerto. Pelo menos você é consistente.',
  'Nada bateu. Nem gênero! Tá lutando contra quem, contra o destino?',
  'Vermelho geral. Igual a tela quando o Kid Boo explode a Terra.',
  'Tudo diferente! Você e o personagem secreto são tipo Goku e o Imposto de Renda.',
  'Nem um verdinho. Tá mais perdido que o Goku na autoescola.',
  'Tudo vermelho. Se fosse sinal de trânsito, você tava multado.',
  'Zero! Mas zero com informação. O zero mais útil da sua vida.',
  'O scouter leu: 0. Não, não é mais de 8000. É zero mesmo.',
  'Tudo errado. Parece a tentativa do Chaos de explodir o Nappa. Muito esforço, zero resultado.',
  'Vermelho absoluto. Até o Vegeta acertaria alguma coisa. Por orgulho.',
  'Nem raça, nem planeta, nem cabelo. É o oposto do oposto do certo. Ou seja, errado.',
  'Todos vermelhos. Descartou tanta coisa que agora quase dá pra ver o alvo. Quase.',
  'Tudo diferente. Se isso fosse fusão, dava um Veku gordo.',
  'Nenhum atributo! Você mira igual Stormtrooper. Ops, anime errado.'
],

/* ---------- quase (muitos verdes) ---------- */
dbQuase: [
  'Quase! Tá tão perto que dá pra sentir o ki.',
  'Muito verde! O alvo tá logo ali. Tipo esfera debaixo do sofá.',
  'Tá quase. Igual o Vegeta: quase lá, sempre quase.',
  'Pertíssimo! Mais um pouco e a Genki Dama fica pronta.',
  'Quase tudo verde! Não é {nome}, mas é primo, vizinho ou fusão dele.',
  'Tá quentíssimo! O scouter tá apitando que nem louco.',
  'Olha esse verde todo. Tá perto igual o Kuririn da morte: sempre.',
  'Quase acertou! Só falta um detalhe. Ou dois. Mas detalhe.',
  'Tá no caminho! Mais perto que o Goku da comida.',
  'Muita coisa bateu. Pensa em quem é parecido com {nome}…',
  'Quase! É o tipo de erro que vira acerto no próximo. Confia.',
  'Esquentou! Só não vai dar Oozaru de emoção.',
  'Tá rondando o alvo que nem o Cell rondando androide.',
  'Quase lá. O personagem certo tá tremendo de medo.',
  'Isso tá tão perto que eu tô suando. Eu nem tenho glândula.',
  'Verdinho demais pra ser coincidência. Tá quase!',
  'Pertinho! Faltou só aquele gás de Super Saiyajin 2.',
  'Um pouco mais e o scouter explode. No bom sentido.',
  'Tá chegando! O Radar do Dragão apitando rápido: bip bip bip bip.',
  'Muito perto. Agora é só não chutar o Yamcha por nervosismo.'
],

/* ---------- raça ---------- */
dbRacaCerta: [
  'Raça certa: {raca}! Já é alguma coisa. O resto tá igual a pontaria do Yamcha.',
  '{raca}! Acertou a raça. Agora é só achar o indivíduo. Fácil. Só que não.',
  'Raça confirmada. {raca}. Um passo pra frente, dois pra Namekusei.',
  'Mesma raça, poder errado? Tá igual Vegeta: quase lá, sempre quase.',
  'Isso! É {raca}. Agora filtra aí na cabeça.',
  '{raca} tá certo. Imagina o tamanho da árvore genealógica que você vai ter que olhar.',
  'Raça bateu! O scouter deu um joinha.',
  'A raça é {raca}. Isso corta bastante gente. Não o suficiente, mas bastante.',
  'Raça verde! Agora pensa: qual {raca} tem esse jeitão?',
  'Acertou a raça. É tipo acertar o sobrenome: Son. Mas qual Son?',
  '{raca} confirmado. Olha só quem prestou atenção no anime.',
  'Mesma raça! Agora é só descobrir qual deles. Tem uns bem parecidos, boa sorte.',
  'Raça certinha. Tá mais perto que o Goku do buffet.',
  'É {raca} mesmo. Agora não chuta outra raça, hein. Eu tô de olho.',
  'Raça: check. Agora é ler o resto. Com calma. Sem gritar por 3 episódios.',
  'Raça batida! Isso aí vale meio Kaioken.',
  'Olha só, acertou que é {raca}! Isso eu não esperava. Mentira, esperava sim.',
  '{raca}. Anotado. Agora só erra o resto com classe.',
  'A raça tá certa, o resto tá mais bagunçado que a casa do Mestre Kame.',
  'Raça verde. Isso reduz a lista mais do que o Freeza reduziu os Saiyajins.'
],
dbRacaParcial: [
  'Raça amarela: parente próximo. Tipo Saiyajin e meio-Saiyajin. Família, mas não igual.',
  'Amarelo na raça! Mesma família, raça diferente. Pensa em primos.',
  'Quase na raça. Tipo o Gohan e o Goku: parecidos, mas um estuda.',
  'Amarelinho: é do mesmo grupo, mas não exatamente. Refina aí.',
  'Raça parecida! Não é igual, mas tá no bairro certo.',
  'Raça amarela. Tá no grupo certo, espécie errada. Tipo pedir coxinha e vir quibe.',
  'Parcial na raça! A família tá certa, o sangue não é bem esse.',
  'Amarelo! É do mesmo tipo de gente. Ou de deus. Ou de máquina. Olha a ajuda se não lembrar.',
  'Raça parcial. Tá perto. Mais perto que o Trunks da Mai.',
  'Amarelo na raça: mesma turma, carteirinha diferente.',
  'Meio certo! Tipo meio-Saiyajin. Entendeu? Hein? Hein?',
  'Raça quase! Ajusta um pouquinho a mira.'
],

/* ---------- afiliação ---------- */
dbAfiliacaoCerta: [
  'Afiliação certa! Tá no time certo. Agora acha o jogador.',
  'Mesma turma! {valor}. Imagina a reunião de condomínio.',
  'Afiliação batida. {valor} confirmado.',
  'Olha, é do mesmo grupo: {valor}. Agora é só escolher qual cara.',
  'Afiliação verde! Tá na festa certa, falta achar o convidado.',
  '{valor}! Acertou o lado. Agora olha o resto.',
  'Mesmo time! É tipo acertar que é do Palmeiras. Ainda falta o nome.',
  'Afiliação: certa. Personagem: errado. Progresso: real.',
  'Tá no grupo certo. {valor} tem uma galera, hein.',
  'Afiliação confirmada. O crachá é o mesmo!',
  'Isso! {valor}. Agora não troca de time no próximo chute.',
  'Mesma afiliação. O scouter aprovou com um bipe feliz.',
  'Acertou o time. Agora falta só o número da camisa.',
  'Grupo certo! {valor}. Isso corta muita gente.',
  'Afiliação verde. Tá igual o Freeza reunindo o exército: agora é escolher o soldado.'
],
dbAfiliacaoParcial: [
  'Afiliação amarela: mesmo lado da força, grupo diferente.',
  'Amarelo na afiliação! Tá do lado certo (bem, mal ou neutro), mas não no grupo exato.',
  'Lado certo, turma errada. Tipo torcer pro time certo no estádio errado.',
  'Afiliação parcial. Mesma índole, carteirinha diferente.',
  'Amarelinho! O alinhamento moral bate, o grupo não.',
  'É do mesmo lado, mas de outra gangue. Refina aí.',
  'Afiliação quase! Mesma vibe, outro endereço.',
  'Amarelo: tá do lado certo da força. Mas qual time?',
  'Parcial! Mesmo lado da briga. Agora descobre de qual esquadrão.',
  'Quase na afiliação. O coração é o mesmo, o uniforme não.'
],

/* ---------- poder ---------- */
dbPoderMuitoAcima: [
  'O poder do alvo é MUITO maior que o de {nome}. Mira mais alto!',
  'Scouter apitou: o alvo é bem mais forte. {nome} ficou no chinelo.',
  'Poder muito acima! É mais de 8000! Bem mais!',
  'Olha a setinha pra cima. O alvo é forte demais pra {nome}.',
  '{nome} é fraquinho perto do alvo. Pensa em gente parruda.',
  'O alvo tá num nível bem acima. Tipo Bills comparado com o Yamcha.',
  'Mira nos fortões! O scouter tá quase explodindo aqui.',
  'Seta pra cima, e seta forte. O alvo é de outro patamar.',
  'Poder bem maior. {nome} ia tomar um peteleco só.',
  'Sobe esse nível! O alvo não tá brincando de Torneio de Artes Marciais.',
  'Muito mais forte! O {nome} não aguentaria nem o aquecimento.',
  'Scouter: “Nível de poder do alvo: absurdo”. Chuta alguém mais forte.',
  'O alvo tá lá no céu e você chutou no porão. Sobe!',
  'Poder muito acima. Esquece os terráqueos comuns.',
  'Seta pra cima gigante. O alvo manda {nome} pro Outro Mundo com um espirro.',
  'Mais forte, bem mais forte. Pensa em quem faz o chão tremer.'
],
dbPoderMuitoAbaixo: [
  'O alvo é MUITO mais fraco que {nome}. Desce do salto!',
  'Seta pra baixo! O alvo é bem mais fraquinho. Tipo nível Mr. Satan de fraquinho.',
  'Poder bem menor. {nome} é forte demais pra ser a resposta.',
  'Desce esse nível! O alvo não passa nem de 8000. Talvez nem de 8.',
  'Chutou um monstro, o alvo é um gatinho. Mira mais baixo.',
  '{nome} apagaria o alvo com um peteleco. Pensa em alguém mais humilde.',
  'Poder muito abaixo. Esquece deus, anjo e fusão. Pensa pequeno.',
  'O scouter nem registra direito o alvo de tão fraco. Desce!',
  'Seta pra baixo. O alvo é do tipo que desmaia com a pressão do ki.',
  'Muito mais fraco! Talvez nem voe. Talvez nem lute.',
  'O alvo é mais fraco. Bem mais. Tipo Chaos contra Nappa de fraco.',
  'Mira nos fracotes. Com todo respeito aos fracotes.',
  'Chutou alto demais! O alvo tá lá embaixo, junto com o Yamcha.',
  'Nível de poder bem abaixo. Pode ser até gente comum. Olha lá.',
  'Desce, desce, desce! O alvo não segura nem um Kamehameha de criança.',
  'Poder mais baixo. Quem sabe alguém que só aparece pra levar susto?'
],
dbPoderPerto: [
  'O poder tá quase! Só um nível de diferença.',
  'Poder pertinho. Olha a seta e ajusta um tiquinho.',
  'Amarelo no poder: diferença de um nível só. Tá afinando!',
  'Quase no poder! Tipo Super Saiyajin e Super Saiyajin 2: parecido, mas não igual.',
  'Poder por um fio. Um nível acima ou abaixo, olha a seta.',
  'O scouter diz: tá perto. Mas perto não é igual.',
  'Só um degrau de poder! Tá esquentando.',
  'Poder quase certo. Tipo Kaioken x10 e x20. Detalhe.',
  'Diferença mínima de poder. O alvo é só um pouquinho diferente.',
  'Poder amarelo! Você tá na faixa certa, quase.',
  'Um nivelzinho de nada. Ajusta a mira.',
  'Quase no poder! Mais um treino e acerta.',
  'Poder colado. Olha a setinha e sobe ou desce um.'
],
dbPoderCerto: [
  'Poder certinho! O scouter bateu exato.',
  'Nível de poder idêntico. O scouter tá orgulhoso de você.',
  'Poder verde! Mesma faixa. Agora é o resto.',
  'Acertou o nível de poder. Isso é mais preciso que scouter do Freeza.',
  'Poder batido. Esse scouter não explode, ele comemora.',
  'Mesmo patamar de força! Agora filtra por quem é desse nível.',
  'Poder na mosca! Pensa em quem tá nessa mesma prateleira.',
  'Nível exato. Agora é só não errar todo o resto.'
],

/* ---------- estreia ---------- */
dbMesmaSerie: [
  'Mesma série de estreia! Tá na época certa.',
  'Estreia certa. Agora é só procurar naquela temporada inteira. Moleza. Não.',
  'Mesma estreia! A fita VHS certa, agora acha o episódio.',
  'É da mesma época que {nome}. Pensa em quem apareceu junto.',
  'Estreia batida. Seu conhecimento de anime tá afiado.',
  'Mesma série! Tá na prateleira certa da locadora.',
  'A estreia é igual. Agora pensa na galera daquela fase.',
  'Época certa! Agora filtra pelos outros atributos.',
  'Estreia verde. Nostalgia acertada.',
  'Estreou junto com {nome}. Mas não é {nome}. Isso eu garanto.',
  'Mesma série. Hora de lembrar dos coadjuvantes esquecidos.',
  'Série certa. E olha que teve muito episódio de enchimento naquela época.',
  'Estreia certa. O scouter até assobiou.',
  'Mesma fase da obra. Tá afunilando!',
  'Acertou a estreia! Agora não chuta alguém do GT do nada, hein.'
],
dbSerieDepois: [
  'O alvo estreou DEPOIS de {nome}. Pensa mais pra frente na história.',
  'Seta pra cima na estreia: é de uma série mais nova.',
  'Mais recente! Avança a fita.',
  'O alvo apareceu depois. Pula uns arcos aí.',
  'Estreia posterior. Tá pensando no passado demais.',
  'Mais pra frente na linha do tempo. Tipo o Trunks, mas sem máquina.',
  'Estreia mais nova. Esquece a infância, pensa no que veio depois.',
  'Mais tarde! O alvo nem tinha nascido na época do {nome}. Ou tinha, mas não aparecia.'
],
dbSerieAntes: [
  'O alvo estreou ANTES de {nome}. Volta no tempo!',
  'Seta pra baixo na estreia: é mais antigo. Raiz.',
  'Mais antigo! Rebobina a fita.',
  'O alvo apareceu antes. Pensa nos primórdios.',
  'Estreia anterior. Vai buscar lá atrás, no tempo em que o Goku tinha rabo.',
  'Mais antigo que {nome}. Tipo Mestre Kame de antigo.',
  'Volta pro passado! Sem máquina do tempo, na raça.',
  'Estreou antes. Clássico, mais clássico.'
],

/* ---------- planeta ---------- */
dbMesmoPlaneta: [
  'Planeta certo! {valor}. Agora é olhar a vizinhança.',
  'Mesmo planeta! Conterrâneos. Deve ter churrasco junto.',
  'Planeta verde: {valor}. Filtra aí quem veio de lá.',
  'É de {valor} mesmo. Agora escolhe o morador certo.',
  'Planeta batido. Se fosse Vegeta, cuidado, ele explode.',
  'Acertou o planeta! O Radar do Dragão aprova.',
  'Mesma origem. Tipo mesmo CEP galáctico.',
  'Planeta certo. Tá mais esperto que o Nappa, que nem sabia onde tava.',
  'Origem confirmada: {valor}. Agora é o resto.',
  'Planeta verde! Um passo mais perto. Ou um planeta mais perto.',
  'Mesmo planeta! Se for Namekusei, corre que só tem cinco minutos.'
],

/* ---------- ignorou pista ---------- */
dbIgnorouPista: [
  'Hã? Você já sabia que {campo} não era {valor}. E chutou de novo. Por quê?',
  'Olha, {valor} já tinha dado vermelho em {campo}. Tá testando se eu tô atento?',
  'Ignorou a dica! {campo}: {valor} já era vermelho. Tipo o Goku ignorando a Chi-Chi.',
  'Você repetiu um erro: {campo} {valor}. Até o Yamcha aprende. Às vezes.',
  'Ô, {valor} em {campo} já tava descartado. Lê as cores, guerreiro!',
  'Chutou {valor} em {campo} de novo? O scouter tá fazendo cara feia.',
  'Esse {campo} ({valor}) já era vermelho. Tá confiando no coração? Confia nas cores.',
  'Hmm, {campo} {valor} já deu errado antes. Você esqueceu ou tá sendo teimoso tipo Vegeta?',
  'Repetiu {valor} em {campo}! Tipo o Freeza repetindo que vai destruir tudo e perdendo.',
  'Pista ignorada: {campo} não é {valor}. Já tinha visto isso.',
  'Você tem memória de peixe ou de Saiyajin? {campo} {valor} já era vermelho!',
  'Tá ignorando as pistas igual o Goku ignora boleto. {campo}: {valor} não é.',
  'Já sabia que não era {valor}! Olha pra cima na tabela, tá tudo lá.',
  'Eu não quero ser chato, mas {campo} {valor} já tava vermelho. Tá, eu quero ser chato.',
  'Chutou contra as próprias pistas. É uma estratégia. Ruim, mas é.'
],
dbIgnorouVerde: [
  'Peraí! Você já sabia que {campo} era {valor}… e chutou outra coisa?',
  'Ô, o {campo} já tava VERDE com {valor}. Por que mudou?',
  'Você tinha acertado {campo} ({valor}) e jogou fora. Tipo o Vegeta largando o poder do Babidi.',
  'Largou um verde! {campo} era {valor}. Volta pra ele.',
  'Já tinha {campo} {valor} confirmado. Chutou fora disso por quê? Emoção?',
  'Ignorou um acerto! {campo} = {valor}. Isso é tipo esquecer a esfera em casa.',
  'O verde é seu amigo! {campo} era {valor} e você abandonou ele.',
  'Traiu o verde do {campo}! O {valor} tá magoado.',
  'Verde confirmado e você chutou fora. Isso é Yamcha-core.',
  'Não precisa testar de novo: {campo} é {valor}. Confia!'
],

/* ---------- sequência ruim / melhorou ---------- */
dbSequenciaRuim: [
  'Três chutes quase sem acerto. Tá igual o Yamcha na saga Saiyajin.',
  'Seca de verdes! Respira e olha a tabela com calma.',
  'Vários chutes no escuro. Liga o Radar, pelo amor de Kami.',
  'Tá chutando que nem o Goku escolhendo curso: aleatório e sem ler.',
  'Sequência ruim. Mas até o Vegeta teve fase ruim. Várias. A vida toda.',
  'Tá difícil, hein? Olha pros verdes antigos e segue eles.',
  'Três seguidos meio perdidos. Hora de mudar de tática.',
  'Chutando no escuro igual o Tenshinhan com o Taiyoken na cara.',
  'Tá mais perdido que o Goku no primeiro dia de trabalho.',
  'Seca brava. Que tal ler a ajuda? Tem um ícone de interrogação ali, sabia?',
  'Sequência sofrida. Mas o Gohan também apanhou muito antes de explodir.',
  'Tá rodando em círculos que nem o Goku no Caminho da Serpente.'
],
dbMelhorou: [
  'Opa, melhor chute até agora! Tá subindo o ki!',
  'Recorde de verdes nessa rodada! Tá esquentando!',
  'Esse foi o melhor até agora. O scouter tá subindo!',
  'Melhorou! Tipo o Gohan depois do treino com o Piccolo.',
  'Olha isso, mais verde que antes. Tá virando Super Saiyajin do chute!',
  'Seu melhor palpite dessa rodada! Continua nesse caminho.',
  'O ki tá subindo! Mais verdes que qualquer chute anterior.',
  'Evolução! Tipo o Freeza trocando de forma, mas pro bem.',
  'Novo recorde da rodada! O alvo tá ficando nervoso.',
  'Melhorou bastante! O Mestre Kame ficaria orgulhoso. E depois pediria uma revista.',
  'Mais perto que nunca! Segue esse fio.',
  'Isso! Agora sim tá parecendo treino de gravidade 100x.'
],

/* ---------- marcos de quantidade ---------- */
dbMarco5: [
  '5 chutes! Liberou a dica da frase. Usa, que não é vergonha. Só um pouquinho.',
  'Cinco tentativas. A dica “Frase” tá disponível. O Piccolo também precisou de ajuda às vezes.',
  '5 chutes e nada. Tem uma frase esperando você ali em cima.',
  'Cinco! Já dá pra pedir dica. Custa um pouco de XP, mas salva o orgulho. Ou não.',
  '5 tentativas. Já saiu mais rápido que o grito de transformação do Goku, pelo menos.',
  'Chute número 5! Dica de frase desbloqueada. Igual o Shenlong: só pedir.',
  'Cinco chutes. Normal. Tranquilo. Nada de pânico. Pânico só lá pelo 20.',
  '5 já! Namekusei explodiu mais rápido que isso. E olha que demorou 10 episódios.',
  'Cinco tentativas. O Kuririn já morreu umas duas vezes nesse tempo.',
  'Olha a dica da frase liberada! Tá ali, piscando pra você.'
],
dbMarco10: [
  '10 chutes! Liberou a foto borrada. O Vegeta nunca pediria ajuda. Por isso ele perde.',
  'Dez tentativas. A foto borrada tá disponível. Aperta os olhos e tenta.',
  '10 chutes. Isso já é tempo de uma luta do Z inteira. Sem os gritos.',
  'Dez! Já dava pra ter juntado as esferas e pedido a resposta.',
  'Chute 10. A dica da foto tá liberada. Ninguém tá olhando, pode usar.',
  '10 chutes e contando. O Goku já teria esquecido o que tava fazendo.',
  'Dez tentativas! Foto borrada liberada. Pode apertar sem medo. Com um pouco de medo.',
  '10! Isso é mais tentativa que o Yamcha teve de vencer alguém.',
  'Dezena completa! Hora da foto borrada? Eu acho que sim.',
  'Dez chutes. Respira. O Gohan demorou uma saga inteira pra virar SSJ2.'
],
dbMarco15: [
  '15 chutes. Tá durando mais que a luta do Goku contra o Freeza. Quase.',
  'Quinze! O Namekusei ia explodir em 5 minutos e já foi 3 vezes.',
  '15 tentativas. Olha pros verdes com carinho, eles querem te ajudar.',
  '15 já! Tá ficando tipo arco de filler: longo e com poucos avanços.',
  'Chute 15. O Shenlong tá bocejando.',
  'Quinze palpites. Não desiste! Goku também tomou surra por 15 episódios seguidos.',
  '15 tentativas. Tô começando a ficar com pena. Mas só começando.',
  'Quinze! Se fosse nível de Kaioken, você já tava sangrando.',
  '15 chutes. Usa as dicas! Elas estão ali, carentes.',
  '15. Eu tô aqui. Firme. Como o Piccolo esperando o Gohan crescer.'
],
dbMarco20: [
  '{n} chutes! Isso aqui virou Dragon Ball GT: longo e ninguém pediu.',
  '{n} tentativas. A Saga do Freeza teve menos episódios. Mentira, teve mais. Mas tá chegando lá.',
  '{n} chutes. Parabéns, você desbloqueou: persistência de Saiyajin.',
  '{n}! O Mestre Kame já teria lido umas 40 revistas nesse tempo.',
  '{n} tentativas. Olha, eu admiro. De verdade. Um pouco.',
  '{n} chutes. Tá tipo o Goku no Caminho da Serpente: longe pra caramba mas indo.',
  '{n} palpites! Se cada chute fosse uma esfera, você tinha umas três coleções.',
  '{n}! O Kid Boo explodiu a Terra em menos tempo.',
  '{n} chutes. Tô impressionado. Com a sua teimosia. É um elogio. Acho.',
  '{n} tentativas. Isso é tipo grito de transformação: não acaba nunca.',
  '{n}. Olha, se ajudar, não é o Goku. Você já chutou ele? Eu nem lembro mais.',
  '{n} chutes! O Vegeta já teria desistido e culpado o Kakarotto.',
  '{n} tentativas. Ainda tá aqui? Respeito. Guerreiro de verdade.',
  '{n} chutes e sem desistir. O Mr. Satan ia chamar isso de “truque”.',
  '{n}! A essa altura você já sabe quem NÃO é o personagem melhor que o próprio Toriyama.'
],

/* ---------- dicas ---------- */
dbDicaFrase: [
  'Pediu a frase! Tá tudo bem. O Goku pede comida o tempo todo.',
  'Dica de frase aberta. Lê com carinho e pensa.',
  'A frase tá aí. Se ainda assim não descobrir, eu vou rir. Com respeito.',
  'Olha a frase! Às vezes a resposta tá na cara, igual o terceiro olho do Tenshinhan.',
  'Usou a dica. O XP diminui, mas o orgulho… também diminui. Tudo diminui.',
  'Frase liberada! Agora o scouter lê até pensamento.',
  'Pediu ajuda, que humildade. Diferente do Vegeta.',
  'Dica aberta. Isso não é vergonha. É estratégia. Vergonha é chutar o Yamcha.',
  'Leu a frase? Agora pensa em quem faria isso.',
  'Frase revelada! Agora vai que vai.',
  'Usou a frase. O Kaio do Norte daria uma dica assim, mas com trocadilho ruim.',
  'Aí sim, dica na mão. Menos XP, mais chance. A troca equivalente. Ops, anime errado de novo.'
],
dbDicaFoto: [
  'Foto borrada liberada! Aperta os olhos. Mais. Mais. Isso.',
  'Olha a foto! Borrada que nem memória de quem viu o Z na TV aberta.',
  'Foto na tela. Se não reconhecer nem assim, eu vou chamar o Kami.',
  'Dica visual! Até o Goku acertaria assim. Talvez.',
  'Foto borrada aberta. Parece um Oozaru de longe? Não sei, olha aí.',
  'Usou a foto! Agora é tipo ver o Cell de longe: dá pra ter uma ideia.',
  'Borradinha, mas ajuda. Igual óculos do Mestre Kame.',
  'Olha a silhueta aí. Cores, formato… pensa!',
  'Foto aberta! Se ainda errar, eu não comento. Mentira, eu comento.',
  'Pista visual liberada. Agora o scouter tá até com imagem.',
  'Viu a foto? Agora tem que ir. Sem desculpa.',
  'A dica que salva vidas. Ou pelo menos rodadas.'
],
dbDicaNome: [
  'Sem foto pra esse, então toma a pista do nome: primeira letra e tamanho.',
  'Esse aí não tem foto boa, então liberei a inicial do nome. Olha lá.',
  'Pista de nome aberta! Primeira letra e quantidade de letras. De nada.',
  'Não tinha foto, mas tem inicial. O scouter improvisa.'
],

/* ---------- vitória ---------- */
dbWin1: [
  'DE PRIMEIRA?! Isso é suspeito. Você tem um scouter escondido?',
  'Acertou de primeira! Ou você é gênio, ou olhou a resposta. Não vou investigar. Vou sim.',
  'UM CHUTE! Nem o Whis faz isso tão rápido.',
  'De primeira! O Goku ia querer lutar com você agora.',
  'Primeira tentativa! Eu vou fingir que acredito. Parabéns. Suspeito, mas parabéns.',
  'Na lata! Isso é Instinto Superior de chute.',
  'Acertou de cara! Chamem o Zeno, ele vai querer te conhecer.',
  'Um chute só. Tá usando as esferas do dragão pra trapacear, né?',
  'DE PRIMEIRA! Meu scouter explodiu. De verdade. Vou ter que comprar outro.',
  'Um tiro só! Tipo o Vegeta no Freeza. Não, pera, o Vegeta nunca acertou o Freeza assim.',
  'Primeira! Isso foi mais rápido que o Kuririn morrendo.',
  'Acertou no primeiro. Tá bom, pode se achar. Hoje pode.'
],
dbWin23: [
  'Em {n} chutes! Que eficiência. O Bills aprovaria.',
  '{n} tentativas e pronto! Isso é poder de Super Saiyajin do chute.',
  'Acertou em {n}! Rápido que nem o Goku no buffet.',
  'Só {n} chutes? Tá afiado igual espada do Trunks.',
  '{n} tentativas! Muito bom. O Piccolo acenaria com a cabeça. Ele não sorri.',
  'Em {n}! Isso foi elegante. O Freeza aplaudiria educadamente.',
  'Acertou em {n}. Nível de poder: muito acima da média.',
  'Rapidinho! {n} chutes. Nem deu tempo de eu fazer piada.',
  '{n} chutes! Genki Dama de raciocínio. Todo mundo te emprestou energia.',
  'Em {n}! Olha, eu tô impressionado. Não conta pra ninguém.',
  '{n} tentativas e acertou! Tá igual o Vegeta no auge: arrogante e com motivo.',
  'Apenas {n}! O scouter pediu seu autógrafo.',
  'Só {n}? Você assistiu o anime com caderninho, né?',
  '{n} chutes e tchau! O Hit ficaria com inveja da velocidade.',
  'Acertou em {n}. Rápido que nem o Kuririn na hora de morrer. Eficiente.'
],
dbWinMid: [
  'Acertou em {n}! Nada mal. Nem bem. Mas nada mal.',
  '{n} chutes. Honesto. Tipo luta do Z: umas trocas antes do golpe final.',
  'Em {n}! Isso aí, sem pressa, igual o Goku carregando Genki Dama.',
  'Achou! {n} tentativas. Tá no nível respeitável.',
  '{n} chutes e vitória. O Mestre Kame ficaria satisfeito.',
  'Pegou em {n}! Nem rápido demais pra ser suspeito, nem lento demais pra eu zoar.',
  'Vitória em {n}! Não é Instinto Superior, mas é instinto.',
  'Acertou! {n} chutes. Tá treinando bem.',
  '{n} palpites. Um arco de anime completinho, com introdução, meio e fim.',
  'É isso! Em {n}. Pode comemorar tipo Mr. Satan: exagerado.',
  'Vitória! {n} chutes. O Gohan ia dizer “bom trabalho”. Ele é educado.',
  'Em {n} tentativas. Bom. Médio. Bom-médio. Tá ótimo.',
  '{n}! Achou o guerreiro. Pode pedir um desejo pro Shenlong. Ele não vai atender, mas pode pedir.',
  'Acertou em {n}. Nível de poder: confiável.',
  'Resolvido em {n}. Tá virando um mestre de artes marciais da adivinhação.'
],
dbWinMuito: [
  '{n} chutes… mas ACERTOU! Isso foi uma saga inteira. Com filler.',
  'Finalmente! {n} tentativas. Isso durou mais que o grito do Gohan virando SSJ2.',
  'Acertou em {n}. O Namekusei explodiu, reconstruiu e explodiu de novo nesse tempo.',
  '{n} chutes! Persistência de Saiyajin. Ou teimosia de Vegeta. Mesma coisa.',
  'É ELE! Depois de {n} tentativas. Eu já tava fazendo as malas.',
  'Vitória depois de {n} chutes. Que jornada. Merecia um filme. Não canônico.',
  '{n} chutes e acertou. O Goku ficaria orgulhoso: nunca desistir. Nem que demore.',
  'Acertou! {n} tentativas. Ninguém vai lembrar quantas foram. Só eu. E o scouter.',
  '{n}! Finalmente! O alvo tava tão escondido quanto o Yamcha na saga Cell.',
  'Depois de {n} chutes, a vitória! Isso é o Torneio do Poder da adivinhação.',
  'Achou em {n}. Demorou, mas o importante é que o Kuririn não morreu dessa vez.',
  '{n} chutes. Eu diria que foi rápido, mas eu não minto. Muito.',
  'Vitória em {n}! A paciência de Piccolo cuidando do Gohan. Admirável.',
  'É isso! {n} chutes. Parece o GT: longo, mas terminou.',
  'Uff! {n} tentativas. Eu cheguei a cochilar. Parabéns!'
],
dbWinDica: [
  'Ganhou com ajuda de dica. Tudo bem. O Goku ganhou com ajuda de todo mundo na Genki Dama.',
  'Acertou com dica! Menos XP, mas vitória é vitória. O Mr. Satan que o diga.',
  'Usou dica e acertou. Humildade de Kuririn, resultado de Goku.',
  'Dica ajudou, né? Sem vergonha. O Vegeta tá com vergonha por você, mas você não precisa.',
  'Venceu com uma forcinha. Igual o Gohan com a espada Z. Que quebrou. Mas enfim.',
  'Com dica ainda vale! Só vale um pouquinho menos.',
  'A dica fez o trabalho dela. Você fez o seu. Time bonito.',
  'Acertou com ajuda. O Shenlong manda um oi.',
  'Vitória assistida! Tipo o Goku que só ganha com ajuda dos amigos. Ou seja, sempre.',
  'Dica usada, alvo encontrado. Missão cumprida.'
],
dbWinDiario: [
  'Diário feito! Compartilha aí e humilha os amigos.',
  'O de hoje tá resolvido. Volta amanhã, guerreiro.',
  'Diário concluído! Agora você pode ir dormir, igual o Bills. Por 39 anos.',
  'Guerreiro do dia descoberto! Amanhã tem outro. Hoje tem o Infinito.',
  'Resolveu o diário! Seus amigos vão ter inveja. Manda o resultado.',
  'Diário completo. Isso é disciplina de Piccolo. Ou sorte de Mr. Satan.',
  'Pronto por hoje! O scouter vai descansar. Eu não, eu nunca descanso.',
  'Diário no bolso! A sequência agradece.'
],
dbDesistiu: [
  'Desistiu? O Goku nunca desiste. Mas ele também não paga conta. Cada um com seu estilo.',
  'Tudo bem desistir. O Vegeta desistiu do orgulho uma vez. Durou 5 minutos.',
  'Era {alvo}! Agora você sabe. Da próxima vai de primeira. Talvez.',
  'Desistência registrada. Sem XP, mas com aprendizado.',
  'Era o {alvo}! Não fica triste. O Yamcha também desiste de muita coisa.',
  'Revelado: {alvo}. Olha a tabela e vê onde você se perdeu.',
  'Desistiu! Tudo bem. Nem todo mundo aguenta o Torneio do Poder.',
  'O alvo era {alvo}. Próximo! Bora de novo.',
  'Jogou a toalha. Tipo o Gohan jogando a toalha contra o Cell. Não, pera, ele venceu.',
  'Era {alvo}. Respira. Toma uma água. Volta mais forte, igual Saiyajin depois de quase morrer.',
  'Desistir também é uma forma de… não, desistir é desistir. Mas bora de novo!'
],
dbNovoInfinito: [
  'Novo guerreiro sorteado! Bora de novo.',
  'Mais um! Viciado igual o Goku em luta.',
  'Outro alvo escondido. O Infinito não para, igual a fome do Goku.',
  'Sorteei outro. Juro que não é o mesmo. A não ser que seja. Brincadeira. Não é.',
  'Nova rodada! Mais uma chance de você me impressionar. Ou não.',
  'Próximo guerreiro! O scouter recarregou.',
  'Bora mais uma! É tipo episódio do Z: sempre tem mais um.',
  'Novo mistério. Duração: depende de você. E do Yamcha não atrapalhar.',
  'Outro personagem na mira. Chuta aí.',
  'Rodada nova, esperanças novas, piadas nem tanto.',
  'Mais um guerreiro misterioso. Dessa vez vai de primeira? Duvido. Mas torço.',
  'Recarreguei o Radar do Dragão. Tem sinal novo!',
  'De novo! O Infinito é tipo Genki Dama: sempre dá pra pedir mais energia.'
],
dbShare: [
  'Copiado! Agora manda pro grupo e espera alguém se achar melhor que você.',
  'Resultado copiado. Pode colar no grupo da família, eles não vão entender, mas tudo bem.',
  'Copiei! Os quadradinhos coloridos vão impressionar alguém. Talvez.',
  'Tá no seu Ctrl+V. Espalha a palavra do guerreiro.',
  'Copiado! Manda pro amigo que se acha fã de Dragon Ball.',
  'Resultado na área de transferência! Mais rápido que o Instant Transmission.',
  'Copiado. Agora é humilhar nos grupos. Com amor.',
  'Pronto! Seu resultado tá pronto pra ser compartilhado. Igual a fama do Mr. Satan.'
],
dbNaoAchou: [
  'Esse nome não tá na minha lista. Escolhe um da lista que aparece.',
  'Hmm, não conheço esse guerreiro. É algum personagem de fanfic?',
  'Não achei ninguém com esse nome. O Radar do Dragão tá sem sinal.',
  'Esse aí não existe no meu banco. Talvez no Dragon Ball AF.',
  'Personagem não encontrado. Tenta outra grafia, ou olha as sugestões.',
  'Não reconheci. Escreveu com sotaque de Namekusei?',
  'Nenhum guerreiro com esse nome. Nem no Outro Mundo.',
  'Hã? Esse eu não conheço. E eu conheço até o Monaka.',
  'Não achei. Digita um pedacinho do nome e escolhe da lista.',
  'Nome inválido. O scouter deu erro 404.',
  'Esse não tá no elenco. Escolhe alguém da lista, vai.',
  'Não sei quem é. Mas parece nome de golpe do Gotenks.'
],
dbJaChutou: [
  'Você já chutou {nome}! Tá testando minha memória?',
  '{nome} de novo? Já foi. A resposta continua sendo não.',
  'Esse já foi! Tipo o Freeza voltando: ninguém pediu.',
  'Já chutou {nome}. Tá igual o Broly gritando o mesmo nome.',
  'Repetido! Eu não esqueço, eu sou um bug com memória.',
  '{nome} já tá na tabela. Olha pra baixo.',
  'Já foi esse. Não precisa chutar de novo pra ter certeza.',
  'Repeteco! {nome} já recebeu o não dele.'
],

/* ---------- aleatórias (tagarelice de fundo) ---------- */
aleatorioDB: [
  'Curiosidade: o Kuririn não tem nariz. Ninguém nunca explicou. Eu penso nisso toda noite.',
  'Se o Goku pagasse pensão, a Chi-Chi tava rica.',
  'Até hoje eu não sei como o Mr. Satan convenceu o mundo inteiro. Talento é talento.',
  'O Piccolo é babá, motorista e professor do Gohan. E ninguém paga ele.',
  'Pensamento do dia: o Yamcha foi o primeiro rival do Goku. Deu no que deu.',
  'Sabia que o Vegeta passou a série toda perdendo e continua se achando? Ídolo.',
  'O Namekusei ia explodir em 5 minutos. Levou 10 episódios. Física do anime é outra coisa.',
  'Eu queria uma Nuvem Voadora. Mas eu teria que ter coração puro. Então não.',
  'O Freeza teve 4 formas, depois dourado, depois preto. Esse cara troca de visual mais que blogueiro.',
  'Imagina ser o Kaio do Norte e ninguém rir das suas piadas por milênios. Me identifico.',
  'O Goku morreu, foi pro céu, voltou, morreu de novo, voltou. O plano de saúde dele é outro nível.',
  'Se eu tivesse uma esfera do dragão, eu pedia uma calcinha. Brincadeira, eu pedia wi-fi melhor.',
  'Às vezes eu grito pra me transformar. Nada acontece. Mas o vizinho reclama.',
  'O Chaos não tem culpa de nada. Só queria ajudar. Justiça pelo Chaos.',
  'O Cell tinha DNA do Goku, do Vegeta, do Piccolo e do Freeza. Imagina a festa de família.',
  'Se o Bills acordar com fome, esconde o pudim. Sério.',
  'O Whis podia resolver tudo em 2 segundos. Mas aí não teria anime.',
  'O Gohan largou a luta pra estudar. Hoje é pai, pesquisador e ainda salva o mundo às terças.',
  'Sabia que o Oolong pediu uma calcinha pro Shenlong? Salvou o mundo. De certo jeito.',
  'Se eu fosse um Saiyajin, eu ia ficar com fome o tempo todo. Ah, peraí, eu já fico.',
  'A Bulma construiu uma máquina do tempo. Eu não consigo nem configurar a impressora.',
  'O Trunks do futuro é o único que chega na hora certa. Ele viaja no tempo, mas ok.',
  'O Mestre Kame tem mais de 300 anos. E ainda não aprendeu a se comportar.',
  'O Kid Boo explodiu a Terra só porque quis. Sem vilão monólogo, sem nada. Raiz.',
  'Os Guerreiros Z desejaram tanta coisa pras esferas que o Shenlong deve ter um sindicato.',
  'O Vegeta disse “é mais de 8000” e eu sinto que é o resumo da internet inteira.',
  'Grito de transformação: 3 episódios. Luta de verdade: 3 minutos. Economia.',
  'O Tenshinhan tem 3 olhos e ainda não viu que o Yamcha precisava de ajuda.',
  'O Goten e o Trunks fizeram uma fusão perfeita na primeira. Eu não acerto nem a senha do wi-fi.',
  'Se o Zeno apagar esse universo, pelo menos o jogo diário acaba sem você perder a sequência.',
  'Imagina a conta de luz da Câmara do Tempo.',
  'O Piccolo aprendeu a dirigir no Super. Mais do que o Goku fez em 40 anos.',
  'O Majin Boo transforma gente em chocolate. Eu transformo tempo livre em chute errado.',
  'O Dende cura qualquer coisa. Menos a minha preguiça.',
  'Sabe o que o Freeza e o boleto têm em comum? Sempre voltam.',
  'Cada vez que o Kuririn morre, um anjo ganha asas. Ele já deu asas pra metade do céu.',
  'O Rei Cutelo tem um castelo pegando fogo e ninguém chama o bombeiro. Anos 80.',
  'O Radar do Dragão cabe no bolso e acha esferas no planeta todo. O meu celular não acha nem o Wi-Fi.',
  'O Karin guarda sementes dos deuses. Eu guardo sachê de ketchup. Cada um com seu tesouro.',
  'O Hit para o tempo por meio segundo. Eu paro o tempo toda segunda-feira de manhã.',
  'O Jiren meditou o torneio inteiro. Eu também medito. Chamo de “cochilo”.',
  'O Mr. Popo é educado de um jeito que dá medo. Você sabe do que eu tô falando.',
  'Se o Saibaman tivesse agente, o Yamcha taria processado.',
  'O Goku come 50 pratos por refeição. Imagina o grupo de WhatsApp da cozinha da Chi-Chi.',
  'O Babidi escrevia M na testa dos outros. Eu escrevo B de Bugado em tudo. Menos na testa.',
  'O Nappa plantou os Saibaman no quintal. A horta mais perigosa do universo.',
  'O Vegeta treinou em gravidade 300x e ainda tem cabelo em pé. Resistência capilar absurda.',
  'Um dia vou abrir uma academia chamada Câmara do Tempo. Um ano de treino por dia de mensalidade.',
  'O Kaioshin tem uns 5 milhões de anos e cara de adolescente. Qual é o creme?',
  'Qual é o sentido da vida? Pro Goku é comida e luta. Pra mim é zoar você. Todo mundo tem um propósito.',
  'O Androide 18 casou com o Kuririn. Prova de que personalidade vale mais que nariz.',
  'Se o Yamcha ganhasse uma luta, eu acho que o anime acabava. Por falta de propósito.',
  'O Gotenks dá nomes horríveis pros golpes. Tipo “Super Ghost Kamikaze Attack”. E funciona.',
  'Já reparou que o Goku nunca trabalha e ainda tem casa? Esse é o verdadeiro poder.',
  'Instinto Superior: o corpo luta sozinho. Eu quero isso pra lavar louça.',
  'Uma vez eu tentei fazer Kamehameha. Saiu um espirro. Carregado de ki, mas um espirro.',
  'O Shenlong só realiza um desejo por vez. Desde que ele não seja complicado. E desde que ele não esteja de mau humor.',
  'O Mestre Kame destruiu a Lua uma vez. Com Kamehameha. De velhinho. Respeita.',
  'A Launch espirra e vira outra pessoa. Eu espirro e continuo sendo eu. Que decepção.',
  'Se eu tivesse um rabo de Saiyajin, eu ia usar pra segurar o controle enquanto como.',
  'O Goku conheceu o Zeno e chamou ele de amigo. Eu não chamo nem o porteiro de amigo.',
  'Sabia que Shenlong em chinês significa “dragão deus”? Tá. Agora você sabe. De nada.',
  'Todo mundo que foi pro Torneio do Poder perdeu roupa. Menos o Jiren. Ele é o único com roupa decente.'
],
paradoDB: [
  'Tá parado? O Namekusei vai explodir. Em 5 minutos. Ou 10 episódios.',
  'Oi? Tá concentrando ki? Ou dormiu no teclado igual o Bills?',
  'Nada de chute? Tá tipo o Goku carregando Genki Dama: esperando energia do mundo.',
  'O guerreiro secreto tá esperando. Ele não tem o dia todo. Tem, na verdade. Mas vai.',
  'Parou? Até o Piccolo meditando faz mais barulho.',
  'Scouter apitando: nível de atividade zero.',
  'Tá pensando ou tá só olhando a parede? Pode chutar qualquer um, vai.',
  'Ei! Um chutezinho. Nem que seja o Yamcha. Ele gosta de atenção.',
  'O Radar tá piscando e você parado. Vai lá!',
  'Você tá mais parado que o Tenshinhan depois de levar um soco do Nappa.',
  'Tá esperando o Shenlong responder? Ele não vai. Chuta você.',
  'Silêncio total. Tô ouvindo até o grilo do Kaio do Norte.',
  'Chuta alguém! Dica: tem gente aí que ninguém lembra. Eles adorariam.',
  'Tá travado? Olha as cores dos chutes anteriores. Elas falam.',
  'Parou pra pensar? Bonito. O Gohan faz isso. O Goku não.',
  'Tá tão quieto que parece o Androide 17 cuidando da floresta.',
  'Oi, tô aqui. Esperando. Como o Kami esperando alguém subir a torre.',
  'Hora de chutar! O Mr. Satan já teria gritado três nomes.',
  'O guerreiro misterioso tá ficando entediado. E ele é perigoso entediado.',
  'Vai chutar ou vai me deixar falando sozinho? Eu gosto, mas não assim.'
],

/* ---------- cutucar o mascote ---------- */
cutucarDB: [
  'Ei! Não me cutuca. Eu não sou botão de transformação.',
  'Para! Assim eu viro Oozaru. De raiva.',
  'Me cutucou? Nível de ousadia: mais de 8000.',
  'Isso foi um golpe? Parece o Yamcha tentando algo.',
  'Para de cutucar! Eu vou contar pro Whis.',
  'Cutucou de novo! Você é tipo o Goku: não sabe a hora de parar.',
  'Ai! Isso doeu mais que o Kienzan do Kuririn.',
  'Tá procurando a resposta em mim? Eu não sou o Shenlong.',
  'Me cutuca de novo e eu faço um Taiyoken na sua cara.',
  'Eu não sou uma esfera do dragão, não adianta esfregar.',
  'Toca aqui! Não, pera, fusão não. Ainda não.',
  'Você acha que se cutucar muito eu viro Super Saiyajin? Eu viro Super Irritado.',
  'Me cutucou! O Bills cutuca assim antes de destruir planeta.',
  'Oi! Tô aqui. Sempre aqui. Igual o Piccolo esperando alguém precisar de babá.',
  'Isso foi Instinto Superior ou só dedo mesmo?',
  'Cutucar mascote não dá XP. Eu já tentei convencer o sistema.',
  'Ai! Vou chamar o Mr. Satan pra te enfrentar. Ele diz que foi ele que derrotou o Cell.',
  'Tá me cutucando porque não sabe quem é o personagem? Eu sei. Não conto.',
  'Assim eu grito por três episódios pra me transformar.',
  'Eu tenho cara de saco de pancada do Vegeta?',
  'Ok, ok, uma dica: é alguém do Dragon Ball. Pronto. Não me cutuca mais.',
  'Se me cutucar mais uma vez, eu faço a pose das Forças Especiais Ginyu.',
  'Cutucar é o Kamehameha dos fracos.',
  'Isso me lembra o Goku cutucando o Vegeta pra lutar. Ninguém gostava.',
  'Pode cutucar. Tô em modo Kuririn: aguento tudo e depois morro.',
  'Você sabe que eu posso ver o seu histórico de chutes, né? Eu vi. Eu ri.',
  'Não me cutuca que eu solto um Final Flash. De purpurina.',
  'Tá, tá. Vou ficar quieto. Mentira, nunca fico.',
  'Mais uma cutucada e eu viro um chocolate. Igual o Majin Boo faz.',
  'O Kaio do Norte levou um golpe assim e virou meme. Não me faz virar meme.',
  'Eu tenho mais poder de luta que parece. Uns 5. O Mr. Satan tem 4.',
  'Opa! O scouter registrou uma cutucada de nível Yajirobe.',
  'Não me cutuca, eu tô ocupado julgando seus chutes.',
  'Oi, sou o Bugado, seu guia nessa jornada. E você é o cara que me cutuca. Prazer.',
  'Me cutucar não revela a resposta. Mas continua, que eu gosto de atenção.',
  'Isso foi um Kienzan de dedo? Achei ofensivo.',
  'Para de me cutucar, eu não sou o Oolong transformado em algo útil.',
  'Oi! Quer uma semente dos deuses? Não tenho. Mas oi.',
  'Toda vez que você me cutuca, um Saibaman nasce. Cuidado com o Yamcha.',
  'Ahh, carinho! Ou agressão? Com você nunca sei.',
  'O Vegeta disse que só cutuca quem tem orgulho. Você tem orgulho de cutucar mascote?',
  'Ei, respeito! Eu sou um mascote com nível de poder desconhecido. Talvez 9. Talvez 1.',
  'Ô cutucador! Vai chutar um personagem, não o mascote.',
  'Se eu fosse o Piccolo, eu te dava um sermão. Como sou eu, dou uma risada. HAHA.',
  'Olha só, tá me usando de fidget toy. Tudo bem, eu cobro em XP. Brincadeira.'
]
};

/* ---------- falas por personagem (quando você chuta ele e erra) ---------- */
const P = {
  'Yamcha': [
    'Chutou o Yamcha. Coitado. Até no chute ele perde.',
    'Yamcha! Cuidado com o Saibaman. Ah, não é ele? Ele perdeu de novo. Normal.',
    'O Yamcha não é a resposta. Ele nunca é a resposta. De nada.',
    'Yamcha chutado e errado. Deixa ele deitado na cratera, é o habitat natural.',
    'Chutar o Yamcha é um ato de bondade. Ele raramente recebe atenção.'
  ],
  'Kuririn': [
    'Kuririn? Não. Mas ele morreu de vergonha. Mais uma vez.',
    'Não é o Kuririn. Pelo menos ele sobreviveu a esse chute. Raro.',
    'Kuririn errado! Ele manda dizer que tá tudo bem, ele tá acostumado.',
    'O Kuririn não é. Mas ele tem 6 pontinhos na testa e muito coração. Merece o chute.'
  ],
  'Mr. Satan': [
    'Mr. Satan? Não é ele. Mas ele vai dizer que foi ele que te ajudou.',
    'Chutou o campeão mundial! Ele agradece e já tá dando autógrafo.',
    'Não é o Mr. Satan. Mas ele vai levar o crédito se você acertar mesmo assim.',
    'Mr. Satan errado. Ele disse que era um truque. Sempre é um truque.'
  ],
  'Goku': [
    'Goku! Não é ele. Ele deve estar treinando, ou comendo, ou esquecendo da família.',
    'Não é o Goku. Ele tá em algum lugar gritando “Oi, eu sou o Goku!”.',
    'Chutou o Goku no meio da partida. Pelo menos agora você tem uma régua de poder.'
  ],
  'Vegeta': [
    'Vegeta? Não. E ele tá furioso de ter sido chutado e errado. O orgulho doeu.',
    'Não é o Vegeta. Ele diria que é porque o Kakarotto roubou o posto.',
    'O Príncipe dos Saiyajins recusou ser a resposta. Por orgulho.'
  ],
  'Freeza': [
    'Não é o Freeza. Ele disse “que pena” com a voz mais educada e cruel do mundo.',
    'Freeza errado! Mas ele deve voltar no próximo filme. Sempre volta.',
    'Chutou o Freeza. Ele não é o alvo, mas já destruiu seu planeta de raiva.'
  ],
  'Piccolo': [
    'Piccolo? Não. Ele tá ocupado levando a Pan na escola.',
    'Não é o Piccolo. Ele foi dirigir. Aprendeu no Super.',
    'Piccolo errado. Ele cruzou os braços e fechou os olhos. É o jeito dele de dizer “tente de novo”.'
  ],
  'Gohan': [
    'Gohan? Não. Ele tá estudando. Ou salvando o mundo de capacete de Saiyaman.',
    'Não é o Gohan. Ele tinha potencial. Olha, ainda tem.'
  ],
  'Chaos': [
    'Chaos! Ele é tão pequenininho. Não é a resposta, mas é fofo.',
    'Não é o Chaos. Ele ia explodir de tristeza, mas não adiantaria nada.'
  ],
  'Tenshinhan': [
    'Tenshinhan não. Ele tá com os três olhos arregalados de surpresa.',
    'Errou o Tenshinhan. Ele se multiplicaria em quatro pra ficar triste em dobro.'
  ],
  'Bulma': [
    'A Bulma não. Mas ela já tá construindo uma máquina pra descobrir quem é.',
    'Bulma errada! Ela vai ficar brava. E quando a Bulma fica brava, até o Vegeta treme.'
  ],
  'Cell': [
    'Cell? Não. Mas ele tá absorvendo seus erros pra ficar perfeito.',
    'Não é o Cell. Ele ia organizar um torneio só pra zoar esse chute.'
  ],
  'Majin Boo': [
    'Majin Boo errado. Ele vai te transformar em chocolate por isso.',
    'Não é o Boo. Ele tá comendo doce com o Mr. Satan, tá tudo bem.'
  ],
  'Bills': [
    'Bills errado. Cuidado, ele destrói planeta quando fica chateado.',
    'Não é o Bills. Ele voltou a dormir. Deixa quieto.'
  ],
  'Whis': [
    'Whis errado! Mas ele pode voltar três minutos no tempo pra você tentar de novo. Não vai, mas pode.'
  ],
  'Zeno Sama': [
    'Chutou o Zeno! Ainda bem que ele não apagou o jogo.',
    'Não é o Zeno. Ele achou engraçado. Ufa, universo salvo.'
  ],
  'Saibaman': [
    'Chutou o Saibaman! O Yamcha acabou de ter um flashback traumático.',
    'Não é o Saibaman. Mas cuidado, ele pula e explode.'
  ],
  'Nappa': [
    'Nappa não! O Vegeta já disse: Nappa, você não serve pra nada.',
    'Nappa errado. Ele tá plantando Saibaman no quintal.'
  ],
  'Raditz': [
    'Raditz? Não. Ele durou pouco no anime e durou pouco aqui também.',
    'Não é o Raditz. O irmão mais esquecido do anime.'
  ],
  'Capitão Ginyu': [
    'Ginyu errado! Mas ele fez uma pose tão linda que eu perdoo.',
    'Não é o Ginyu. Ele tá trocando de corpo com um sapo agora mesmo.'
  ],
  'Broly': [
    'Broly? KAKAROTTO! Ops, errado. Não é ele.',
    'Não é o Broly. Ele tá gritando isso há 30 anos.'
  ],
  'Jiren': [
    'Jiren errado. Ele nem abriu os olhos pra ver seu chute.',
    'Não é o Jiren. Ele só confia na força. E a força disse não.'
  ],
  'Mestre Kame': [
    'Mestre Kame? Não. Ele tá lendo revista na ilha.',
    'Não é o velho safado. Ele pediu pra você mandar lembranças pra Bulma.'
  ],
  'Oolong': [
    'Oolong errado! Ele se transformou num chute certo, mas durou só cinco minutos.'
  ],
  'Yajirobe': [
    'Yajirobe? Não. Ele tá comendo e fugindo da luta. Como sempre.',
    'Não é o Yajirobe. Mas ele cortou o rabo do Vegeta, respeita.'
  ],
  'Chi-Chi': [
    'Chi-Chi errada! Ela mandou você ir estudar em vez de jogar.',
    'Não é a Chi-Chi. Mas ela tá com a frigideira na mão. Cuidado.'
  ],
  'Monaka': [
    'Monaka! O guerreiro mais forte do universo… segundo o Bills. Não é ele, e ele desmaiou de alívio.',
    'Chutou o Monaka. Ele é entregador, não lutador. E não é a resposta.'
  ],
  'Shenlong': [
    'Chutou o Shenlong! Ele disse que esse desejo tá além do poder dele.',
    'Não é o Shenlong. Ele já voltou pras esferas, tchau.'
  ],
  'Kaio do Norte': [
    'Kaio do Norte? Não. Mas ele tem uma piada pronta pra isso. Uma ruim.',
    'Não é o Kaio. O Bubbles e o Gregory mandam um abraço.'
  ],
  'Gotenks': [
    'Gotenks errado! Ele vai dar um nome ridículo pro seu chute: Super Chute Kamikaze Fracassado.'
  ],
  'Trunks': [
    'Trunks não. Tá lá aprontando com o Goten.'
  ],
  'Trunks do Futuro': [
    'Trunks do Futuro errado! Ele volta no tempo e tenta de novo. Você também pode. Sem máquina.'
  ],
  'Pan': [
    'Pan? Não. E ela tá brava. Neta do Goku brava é pior que Oozaru.'
  ],
  'Imperador Pilaf': [
    'Pilaf? Ele queria dominar o mundo e nem conseguiu ser a resposta.'
  ],
  'Tartaruga Umigame': [
    'Chutou a tartaruga! Lenta mas persistente. Não é ela, mas gostei da ousadia.'
  ],
  'Androide 18': [
    'Não é a 18. Ela quebrou o braço de quem chutou errado da última vez. Brincadeira. Ou não.'
  ],
  'Androide 16': [
    'Não é o 16. Ele tá olhando os passarinhos, tranquilo.'
  ],
  'Hit': [
    'Hit errado! Ele parou o tempo pra rir de você por meio segundo.'
  ],
  'Goku Black': [
    'Goku Black errado. Ele diria que isso é culpa dos mortais. Tudo é culpa dos mortais pra ele.'
  ],
  'Launch': [
    'Launch errada! Espirrou e virou a loira. Agora ela quer atirar em você.'
  ],
  'Dr. Gero': [
    'Dr. Gero? Não. Ele tá tentando se vingar de um menino de 12 anos. Até hoje.'
  ]
};

const out = Object.assign({}, L);
Object.keys(P).forEach(k => { out['dbc_' + k] = P[k]; });
window.DB_FALAS_PERSONAGEM = Object.keys(P);
window.DB_FALAS = out;
if (window.Bugado) Bugado.addLines(out);
})();
