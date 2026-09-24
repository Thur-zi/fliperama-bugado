/* Conexo — puzzles feitos à mão.
   Cada P(...) recebe 4 grupos em ordem de dificuldade (1 amarelo → 4 roxo):
   ['Tema', 'PALAVRA', 'PALAVRA', 'PALAVRA', 'PALAVRA']
   Resultado: window.CONEXO = [ {grupos:[{tema, nivel, palavras:[...]}, ...]}, ... ] */
window.CONEXO = window.CONEXO || [];
(function(){
const P = (...g) => window.CONEXO.push({ grupos: g.map((x, i) => ({ tema: x[0], nivel: i + 1, palavras: x.slice(1) })) });

P(['Frutas', 'BANANA','MANGA','UVA','CAJU'],
  ['Partes da camisa (a MANGA ficou com fome)', 'GOLA','PUNHO','BOLSO','BOTÃO'],
  ['Times do Rio', 'FLAMENGO','VASCO','BOTAFOGO','FLUMINENSE'],
  ['Pão de ___', 'QUEIJO','AÇÚCAR','LÓ','MEL']);

P(['Cores da bandeira do Brasil', 'VERDE','AMARELO','AZUL','BRANCO'],
  ['Turma da Mônica', 'CEBOLINHA','CASCÃO','MAGALI','FRANJINHA'],
  ['Jeitos de tomar café', 'EXPRESSO','CAPPUCCINO','PINGADO','COADO'],
  ['Começam com nota musical (DÓ-mingo, MI-ojo, FA-rofa, SOL-teiro)', 'DOMINGO','MIOJO','FAROFA','SOLTEIRO']);

P(['Bichos da fazenda', 'VACA','PORCO','GALINHA','CABRA'],
  ['Dragon Ball', 'GOKU','VEGETA','PICCOLO','KURIRIN'],
  ['Instrumentos de samba', 'PANDEIRO','CUÍCA','TAMBORIM','SURDO'],
  ['Número escondido (br-ONZE, NOVE-la, CEM-itério, MIL-ho)', 'BRONZE','NOVELA','CEMITÉRIO','MILHO']);

P(['Partes do corpo', 'BRAÇO','JOELHO','COTOVELO','OMBRO'],
  ['Signos', 'ÁRIES','TOURO','CÂNCER','VIRGEM'],
  ['Marcas que viraram nome do produto', 'GILETE','BOMBRIL','DANONE','MAISENA'],
  ['Pé de ___', 'MOLEQUE','MEIA','CABRA','VALSA']);

P(['Comidas de festa junina', 'PAMONHA','CANJICA','QUENTÃO','PAÇOCA'],
  ['Pokémon da primeira geração', 'CHARMANDER','BULBASAUR','SQUIRTLE','PIKACHU'],
  ['Novelas da Globo', 'PANTANAL','TIETA','RENASCER','CLONE'],
  ['Anagramas uns dos outros', 'AMOR','RAMO','MORA','ROMA']);

P(['Meios de transporte', 'ÔNIBUS','METRÔ','TREM','BARCO'],
  ['Gírias pra dinheiro', 'GRANA','BUFUNFA','TUTU','DINDIN'],
  ['Turma do Chaves', 'QUICO','CHIQUINHA','MADRUGA','FLORINDA'],
  ['Cor escondida (AZUL-ejo, p-ROSA, medí-OCRE, m-ANIL-ha)', 'AZULEJO','PROSA','MEDÍOCRE','MANILHA']);

P(['Doces de festa de aniversário', 'BRIGADEIRO','BEIJINHO','CAJUZINHO','CASADINHO'],
  ['Craques da Seleção', 'PELÉ','ROMÁRIO','KAKÁ','RONALDINHO'],
  ['Posições no futebol', 'GOLEIRO','ZAGUEIRO','LATERAL','VOLANTE'],
  ['Começam com bicho (GALO-cha, PATO-logia, RATO-eira, BODE-ga)', 'GALOCHA','PATOLOGIA','RATOEIRA','BODEGA']);

P(['Planetas', 'MARTE','VÊNUS','SATURNO','JÚPITER'],
  ['Deuses gregos', 'ZEUS','HERMES','ATENA','POSEIDON'],
  ['Cavaleiros do Zodíaco', 'SEIYA','SHIRYU','HYOGA','SHUN'],
  ['Astro escondido (SOL-dado, TERRA-ço, MARTE-lo, LUA-u)', 'SOLDADO','TERRAÇO','MARTELO','LUAU']);

P(['Coisas de cozinha', 'PANELA','CONCHA','ESPÁTULA','FRIGIDEIRA'],
  ['Capitais do Nordeste', 'RECIFE','NATAL','FORTALEZA','MACEIÓ'],
  ['Presidentes do Brasil', 'LULA','DILMA','TEMER','SARNEY'],
  ['Palíndromos (lê igual de trás pra frente)', 'OSSO','ARARA','RADAR','REVIVER']);

P(['Tipos de pão', 'FRANCÊS','BISNAGA','BAGUETE','CIABATTA'],
  ['Ritmos brasileiros', 'SAMBA','FORRÓ','PAGODE','AXÉ'],
  ['Coisas que aparecem no Carnaval', 'ABADÁ','CONFETE','SERPENTINA','FANTASIA'],
  ['Bate-___', 'PAPO','BOCA','ESTACA','VOLTA']);

P(['Material escolar', 'LÁPIS','BORRACHA','CADERNO','ESTOJO'],
  ['Matérias da escola', 'HISTÓRIA','QUÍMICA','FÍSICA','ARTES'],
  ['Pokémon de água', 'SQUIRTLE','PSYDUCK','MAGIKARP','GYARADOS'],
  ['Tira a 1ª letra e vira outra (s-ALTO, b-ARCO, l-UVA, t-RATO)', 'SALTO','BARCO','LUVA','TRATO']);

P(['Temperos', 'ALHO','CEBOLA','COMINHO','SALSA'],
  ['Danças de salão', 'TANGO','BOLERO','MAMBO','VALSA'],
  ['Naruto', 'NARUTO','SASUKE','SAKURA','KAKASHI'],
  ['Gírias pra dormir', 'CAPOTAR','APAGAR','MIMIR','NANAR']);

P(['Bichos do mar', 'TUBARÃO','BALEIA','GOLFINHO','POLVO'],
  ['Sítio do Picapau Amarelo', 'EMÍLIA','NARIZINHO','PEDRINHO','VISCONDE'],
  ['Coisas do BBB', 'PAREDÃO','LÍDER','ANJO','ESPIADINHA'],
  ['Gírias pra cabeça (a CUCA não é do Sítio aqui)', 'CUCA','COCO','MELÃO','CACHOLA']);

P(['Cômodos da casa', 'SALA','COZINHA','BANHEIRO','VARANDA'],
  ['Jogos de baralho', 'TRUCO','BURACO','POKER','CANASTRA'],
  ['Brincadeiras de rua', 'AMARELINHA','QUEIMADA','PIQUE','ELÁSTICO'],
  ['Ordinais que têm outro sentido', 'QUARTO','SEGUNDO','SEXTA','OITAVA']);

P(['Heróis da Marvel', 'HULK','THOR','VISÃO','GROOT'],
  ['Sentidos (sem a visão, que foi pros Vingadores)', 'TATO','OLFATO','PALADAR','AUDIÇÃO'],
  ['Pedras preciosas', 'RUBI','SAFIRA','ESMERALDA','TOPÁZIO'],
  ['Ao contrário vira outra (ATOR↔ROTA, ROMA↔AMOR, SACO↔OCAS, OVAL↔LAVO)', 'ATOR','ROMA','SACO','OVAL']);

P(['Profissões', 'MÉDICO','PEDREIRO','PADEIRO','BOMBEIRO'],
  ['Os Simpsons', 'HOMER','MARGE','BART','LISA'],
  ['Cortes de churrasco', 'PICANHA','FRALDINHA','MAMINHA','CUPIM'],
  ['Terminam em -INHA mas não são diminutivo', 'CAMPAINHA','RAINHA','VIZINHA','FARINHA']);

P(['Árvores', 'IPÊ','CEDRO','PINHEIRO','JACARANDÁ'],
  ['Passarinhos', 'SABIÁ','TUCANO','CANÁRIO','PAPAGAIO'],
  ['Escolas de samba do Rio', 'MANGUEIRA','PORTELA','SALGUEIRO','BEIJA-FLOR'],
  ['Mascotes de time (Fla, Galo, Cruzeiro, Palmeiras)', 'URUBU','GALO','RAPOSA','PORCO']);

P(['Videogames', 'XBOX','SWITCH','WII','DREAMCAST'],
  ['Turma do Mario', 'LUIGI','YOSHI','BOWSER','WARIO'],
  ['Pokémon lendários', 'MEWTWO','ZAPDOS','LUGIA','RAYQUAZA'],
  ['Saiyajins com nome de vegetal (vegetable, radish, napa, broccoli)', 'VEGETA','RADITZ','NAPPA','BROLY']);

P(['Jeitos de rir na internet', 'KKKK','RSRS','HAHAHA','HUEHUE'],
  ['Abreviações de zap', 'TMJ','BLZ','VLW','FLW'],
  ['Redes sociais que já morreram', 'ORKUT','MSN','FOTOLOG','MYSPACE'],
  ['Jogos de lan house', 'COUNTER','TIBIA','RAGNAROK','GUNBOUND']);

P(['Partes da árvore', 'TRONCO','GALHO','FOLHA','CASCA'],
  ['Família', 'TIO','AVÓ','SOGRA','PRIMO'],
  ['Coisas da aula de matemática', 'SENO','FRAÇÃO','POTÊNCIA','RAIZ'],
  ['Com S na frente vira outra (s-ALTO, s-ANTA, s-ELO, s-ALA)', 'ALTO','ANTA','ELO','ALA']);

})();

(function(){
const P = (...g) => window.CONEXO.push({ grupos: g.map((x, i) => ({ tema: x[0], nivel: i + 1, palavras: x.slice(1) })) });

P(['Sobremesas', 'PUDIM','MOUSSE','PAVÊ','SORVETE'],
  ['Doces de padaria', 'SONHO','BOMBA','ROSCA','CAROLINA'],
  ['A mesma fruta, cada região chama de um jeito', 'TANGERINA','MEXERICA','BERGAMOTA','PONKAN'],
  ['Flor que também é nome de mulher', 'MARGARIDA','ROSA','VIOLETA','HORTÊNSIA']);

P(['Coisas da sala de aula', 'LOUSA','GIZ','APAGADOR','MURAL'],
  ['Coisas que ficam no bolso', 'CELULAR','MOEDA','CARTEIRA','ISQUEIRO'],
  ['Moedas do mundo', 'REAL','DÓLAR','EURO','IENE'],
  ['Coisas que têm dentes', 'PENTE','SERRA','ALHO','CHAVE']);

P(['Canais de TV', 'GLOBO','SBT','RECORD','BAND'],
  ['Insetos', 'BARATA','FORMIGA','GRILO','MOSCA'],
  ['Apresentadores de TV', 'FAUSTÃO','XUXA','GUGU','RATINHO'],
  ['Estilos de nado', 'BORBOLETA','PEITO','COSTAS','CACHORRINHO']);

P(['Palavras japonesas que o Brasil adotou', 'SUSHI','KARAOKÊ','EMOJI','TSUNAMI'],
  ['One Piece', 'LUFFY','ZORO','NAMI','SANJI'],
  ['Técnicas de Dragon Ball', 'KAMEHAMEHA','GENKIDAMA','KIENZAN','KAIOKEN'],
  ['Parente escondido (FILHO-te, PAI-nel, PRIMO-roso, TIA-ra)', 'FILHOTE','PAINEL','PRIMOROSO','TIARA']);

P(['Coisas do futebol', 'APITO','CHUTEIRA','CARTÃO','BANDEIRINHA'],
  ['Times paulistas', 'PALMEIRAS','SANTOS','CORINTHIANS','GUARANI'],
  ['Gírias pra "fácil"', 'MOLEZA','BARBADA','FICHINHA','SUSSA'],
  ['Lances de futebol com nome de objeto', 'FRANGO','CHAPÉU','CANETA','LENÇOL']);

P(['Salgados de festa', 'EMPADA','ESFIHA','KIBE','ENROLADINHO'],
  ['Pratos típicos', 'FEIJOADA','MOQUECA','ACARAJÉ','TACACÁ'],
  ['Feitos de mandioca', 'TAPIOCA','FAROFA','POLVILHO','TUCUPI'],
  ['Comida que virou xingamento', 'COXINHA','PAMONHA','BANANA','MORTADELA']);

P(['Instrumentos de corda', 'VIOLÃO','GUITARRA','CAVAQUINHO','VIOLINO'],
  ['Cantoras brasileiras', 'ANITTA','IVETE','LUDMILLA','GAL'],
  ['Bandas de rock BR (primeiro nome)', 'TITÃS','SKANK','MAMONAS','RAIMUNDOS'],
  ['Instrumento escondido (en-SINO, TUBA-rão, ab-SURDO, a-BAIXO)', 'ENSINO','TUBARÃO','ABSURDO','ABAIXO']);

P(['Estados do Brasil', 'BAHIA','PARANÁ','GOIÁS','AMAPÁ'],
  ['Bairros do Rio', 'COPACABANA','IPANEMA','LEBLON','TIJUCA'],
  ['Bairros de São Paulo', 'MOOCA','PINHEIROS','LIBERDADE','BRÁS'],
  ['Capitais que também são palavra comum', 'NATAL','VITÓRIA','PALMAS','SALVADOR']);

P(['Jogos de tabuleiro', 'XADREZ','LUDO','WAR','DOMINÓ'],
  ['Minecraft', 'CREEPER','ENDERMAN','STEVE','NETHER'],
  ['Peças do xadrez', 'TORRE','BISPO','PEÃO','DAMA'],
  ['Street Fighter', 'RYU','KEN','BLANKA','GUILE']);

P(['Móveis', 'SOFÁ','CAMA','MESA','ARMÁRIO'],
  ['Eletrodomésticos', 'GELADEIRA','FOGÃO','BATEDEIRA','TORRADEIRA'],
  ['Nome clássico de cachorro', 'REX','BIDU','BOLINHA','PIPOCA'],
  ['Jogos de boteco (o TOTÓ não era cachorro)', 'SINUCA','TOTÓ','BILHAR','TRUCO']);

P(['Partes do rosto', 'NARIZ','BOCA','QUEIXO','TESTA'],
  ['Sabores de pizza', 'CALABRESA','MUSSARELA','PORTUGUESA','MARGUERITA'],
  ['Nacionalidades no feminino', 'FRANCESA','INGLESA','CHINESA','JAPONESA'],
  ['Parte do corpo escondida (PERNA-mbuco, aci-DENTE, ex-PULSO, a-BRAÇO)', 'PERNAMBUCO','ACIDENTE','EXPULSO','ABRAÇO']);

P(['Doenças de criança', 'CATAPORA','SARAMPO','CAXUMBA','RUBÉOLA'],
  ['Heróis da DC', 'BATMAN','SUPERMAN','AQUAMAN','ROBIN'],
  ['Coisas de fotógrafo', 'LENTE','TRIPÉ','ZOOM','FLASH'],
  ['Super ___', 'TRUNFO','MERCADO','NOVA','NINTENDO']);

P(['Estações do ano', 'VERÃO','INVERNO','OUTONO','PRIMAVERA'],
  ['Coisas do tempo', 'RAIO','TROVÃO','GRANIZO','NEBLINA'],
  ['Biomas brasileiros', 'CERRADO','CAATINGA','PANTANAL','AMAZÔNIA'],
  ['Carros das antigas (a PAMPA era picape)', 'GOL','UNO','FUSCA','PAMPA']);

P(['Coisas de casamento', 'ALIANÇA','BUQUÊ','VÉU','GRINALDA'],
  ['Coisas de aniversário', 'BALÃO','BOLO','PARABÉNS','CONVITE'],
  ['Bodas de ___', 'PAPEL','ALGODÃO','PRATA','OURO'],
  ['Coisas que têm pavio', 'VELA','BOMBA','DINAMITE','ROJÃO']);

P(['Tipos de Pokémon', 'ÁGUA','GRAMA','PEDRA','DRAGÃO'],
  ['Evoluções da Eevee', 'VAPOREON','JOLTEON','FLAREON','UMBREON'],
  ['Líderes de ginásio', 'BROCK','MISTY','ERIKA','SABRINA'],
  ['Coisas que a gente apaga', 'LUZ','FOGO','LOUSA','MENSAGEM']);

P(['Peixes', 'TRUTA','TILÁPIA','PACU','BAGRE'],
  ['Gírias pra "legal"', 'MASSA','IRADO','DAORA','TOP'],
  ['Gírias pra "amigo" (e a TRUTA não entrou)', 'PARÇA','MANO','BRODER','CHAPA'],
  ['Interjeição regional (NE, Sul, MG, Pará)', 'OXE','BAH','UAI','ÉGUA']);

P(['Sinais de pontuação', 'VÍRGULA','TRAVESSÃO','ASPAS','PARÊNTESES'],
  ['Classes gramaticais', 'VERBO','ADVÉRBIO','PRONOME','ARTIGO'],
  ['Figuras de linguagem', 'METÁFORA','IRONIA','HIPÉRBOLE','ANTÍTESE'],
  ['___ final', 'PONTO','JUÍZO','CONSUMIDOR','PROVA']);

P(['Shrek e companhia', 'SHREK','FIONA','BISCOITO','PINÓQUIO'],
  ['Bicho que vira xingamento de lerdo', 'ANTA','JUMENTO','TOUPEIRA','BURRO'],
  ['Princesas da Disney', 'ARIEL','JASMINE','MULAN','RAPUNZEL'],
  ['Gírias pra pessoa bonita', 'GATO','BROTO','PITEL','PÃO']);

P(['Produtos de limpeza', 'SABÃO','AMACIANTE','ALVEJANTE','DETERGENTE'],
  ['Coisas do banheiro', 'CHUVEIRO','BIDÊ','BOX','PRIVADA'],
  ['Outros nomes pra privada', 'TRONO','VASO','PATENTE','LATRINA'],
  ['Patentes do Exército (PATENTE não é uma)', 'CABO','SARGENTO','MAJOR','CORONEL']);

P(['Coisas de praia', 'GUARDA-SOL','CANGA','AREIA','BIQUÍNI'],
  ['Vendido na areia do Rio', 'GLOBO','PICOLÉ','MILHO','QUEIJO'],
  ['Termos de xadrez', 'XEQUE','ROQUE','GAMBITO','MATE'],
  ['País escondido (PERU-ca, r-OMÃ, p-IRÃ-o, MALTA-do)', 'PERUCA','ROMÃ','PIRÃO','MALTADO']);

})();

(function(){
const P = (...g) => window.CONEXO.push({ grupos: g.map((x, i) => ({ tema: x[0], nivel: i + 1, palavras: x.slice(1) })) });

P(['Peças do computador', 'TECLADO','MOUSE','MONITOR','GABINETE'],
  ['Teclas', 'ENTER','ESC','TAB','SHIFT'],
  ['Inglês que virou verbo em português', 'DELETAR','PRINTAR','LOGAR','STALKEAR'],
  ['Gírias gamer', 'NOOB','LAG','BUFF','NERF']);

P(['Legumes', 'CENOURA','BETERRABA','ABOBRINHA','QUIABO'],
  ['Apelidos de casal', 'MOZÃO','BEBÊ','DENGO','CHUCHU'],
  ['Coisas de bebê', 'CHUPETA','FRALDA','MAMADEIRA','BERÇO'],
  ['Filmes da Pixar', 'UP','CARROS','VALENTE','VIVA']);

P(['Calçados', 'SANDÁLIA','CHINELO','BOTA','MOCASSIM'],
  ['Esportes de raquete', 'TÊNIS','BADMINTON','SQUASH','FRESCOBOL'],
  ['Escola de samba', 'BATERIA','PASSISTA','ALEGORIA','ENREDO'],
  ['Outros nomes pra mentira', 'LOROTA','CASCATA','BALELA','PATRANHA']);

P(['Anime de monstrinho e brinquedo', 'POKÉMON','DIGIMON','YU-GI-OH','BEYBLADE'],
  ['Vilões de Dragon Ball', 'FREEZA','CELL','JANEMBA','ZAMASU'],
  ['Filmes do Studio Ghibli', 'TOTORO','PONYO','KIKI','MONONOKE'],
  ['Inimigos do Mario (esse BOO é o fantasminha)', 'GOOMBA','KOOPA','BLOOPER','BOO']);

P(['Talheres e afins', 'GARFO','FACA','COLHER','CONCHA'],
  ['Coisas de churrasqueira', 'ESPETO','CARVÃO','GRELHA','TÁBUA'],
  ['Lâminas', 'FACÃO','CANIVETE','ADAGA','BISTURI'],
  ['Anagramas de PRATO', 'PRATO','PORTA','TROPA','PARTO']);

P(['Notas musicais', 'DÓ','RÉ','FÁ','LÁ'],
  ['Astros', 'SOL','LUA','ESTRELA','COMETA'],
  ['Horóscopo chinês', 'RATO','TIGRE','DRAGÃO','MACACO'],
  ['Letras gregas (MI não era nota)', 'PI','GAMA','DELTA','MI']);

P(['Ferramentas', 'MARTELO','ALICATE','SERROTE','FURADEIRA'],
  ['Partes do carro', 'VOLANTE','PNEU','FAROL','CAPÔ'],
  ['Partes do navio', 'PROA','POPA','CONVÉS','MASTRO'],
  ['Ferramenta escondida (em-PREGO, c-LIMA, RODO-via, CUNHA-do)', 'EMPREGO','CLIMA','RODOVIA','CUNHADO']);

P(['Feriados', 'CARNAVAL','PÁSCOA','FINADOS','TIRADENTES'],
  ['Folclore brasileiro', 'SACI','CURUPIRA','IARA','BOITATÁ'],
  ['Monstros de filme de terror', 'ZUMBI','VAMPIRO','MÚMIA','LOBISOMEM'],
  ['Fruta no começo (COCO-ricó, PERA-lta, AMORA-l, es-PINHA)', 'COCORICÓ','PERALTA','AMORAL','ESPINHA']);

P(['Esportes com bola', 'FUTEBOL','BASQUETE','VÔLEI','HANDEBOL'],
  ['Artes marciais', 'JUDÔ','KARATÊ','CAPOEIRA','JIU-JITSU'],
  ['Coisas de academia', 'ESTEIRA','HALTER','ANILHA','SUPINO'],
  ['Futebol de ___', 'BOTÃO','AREIA','SABÃO','VÁRZEA']);

P(['Partes da bicicleta', 'PEDAL','GUIDÃO','SELIM','CORRENTE'],
  ['Joias', 'ANEL','BRINCO','COLAR','PULSEIRA'],
  ['Coisas de pirata', 'TESOURO','GANCHO','PAPAGAIO','MAPA'],
  ['Tem ANEL escondido', 'PANELA','JANELA','CANELA','FLANELA']);

P(['Brinquedos de antigamente', 'PIÃO','IOIÔ','BAMBOLÊ','PETECA'],
  ['Turma do Scooby-Doo', 'SALSICHA','VELMA','DAPHNE','FRED'],
  ['Vai no cachorro-quente', 'VINAGRETE','PURÊ','MILHO','KETCHUP'],
  ['Destino turístico que também é palavra comum', 'PIPA','BÚZIOS','BONITO','ARRAIAL']);

P(['Sabores de sorvete', 'NAPOLITANO','PISTACHE','MORANGO','BAUNILHA'],
  ['Tipos de cabelo', 'LISO','CACHEADO','CRESPO','ONDULADO'],
  ['Cortes de cabelo', 'MOICANO','CHANEL','TIGELINHA','JOÃOZINHO'],
  ['___ de milho', 'FLOCOS','CREME','PÃO','BOLO']);

P(['Aves', 'PATO','AVESTRUZ','EMA','PERU'],
  ['Países da América do Sul', 'CHILE','BOLÍVIA','URUGUAI','PARAGUAI'],
  ['Pimentas', 'MALAGUETA','BIQUINHO','CUMARI','HABANERO'],
  ['Gírias pra mulherengo (a GALINHA não era ave)', 'GALINHA','GARANHÃO','PEGADOR','CAFAJESTE']);

P(['Gêneros musicais', 'ROCK','FUNK','RAP','SERTANEJO'],
  ['Instrumentos de sopro', 'FLAUTA','SAXOFONE','TROMPETE','CLARINETE'],
  ['Partes de uma música', 'REFRÃO','ESTROFE','VERSO','INTRO'],
  ['Coisas que a gente atravessa', 'PONTE','RUA','RIO','FAIXA']);

P(['Queijos', 'COALHO','PARMESÃO','CHEDDAR','GORGONZOLA'],
  ['Bebidas de bar', 'CACHAÇA','CERVEJA','CAIPIRINHA','CHOPE'],
  ['Apelidos da cachaça', 'PINGA','BRANQUINHA','MARVADA','CANINHA'],
  ['Gírias pra bêbado', 'MAMADO','TRINCADO','CHUMBADO','CALIBRADO']);

P(['Signos', 'PEIXES','GÊMEOS','ESCORPIÃO','SAGITÁRIO'],
  ['Bichos da savana', 'LEÃO','ZEBRA','GIRAFA','HIPOPÓTAMO'],
  ['Raças de cachorro', 'POODLE','PUG','BEAGLE','VIRA-LATA'],
  ['Filmes nacionais', 'CARANDIRU','BACURAU','AQUARIUS','COMPADECIDA']);

P(['Bichos de estimação', 'CACHORRO','GATO','CALOPSITA','PERIQUITO'],
  ['Roedores', 'CAPIVARA','ESQUILO','CASTOR','HAMSTER'],
  ['Felinos (tirando o de casa)', 'ONÇA','JAGUATIRICA','PUMA','LINCE'],
  ['Bichos das notas de Real', 'TARTARUGA','GARÇA','ARARA','MICO']);

P(['Coisas do céu', 'LUA','NUVEM','ESTRELA','ARCO-ÍRIS'],
  ['Clima', 'VENTO','NEVE','GAROA','GEADA'],
  ['Coisas de inverno', 'CACHECOL','LUVA','GORRO','JAQUETA'],
  ['Guarda-___', 'CHUVA','ROUPA','COSTAS','SOL']);

P(['Coisas do fliperama', 'FICHA','JOYSTICK','BOTÃO','PLACAR'],
  ['Turma do Sonic', 'SONIC','TAILS','KNUCKLES','EGGMAN'],
  ['Clássicos do fliperama', 'PAC-MAN','GALAGA','FROGGER','ASTEROIDS'],
  ['Mortal Kombat', 'SCORPION','SUB-ZERO','RAIDEN','KITANA']);

P(['Bebidas quentes', 'CAFÉ','CHOCOLATE','QUENTÃO','CHIMARRÃO'],
  ['Tipos de chá', 'CAMOMILA','HORTELÃ','ERVA-DOCE','BOLDO'],
  ['Jeitos de chamar o sovina', 'PÃO-DURO','MUQUIRANA','MÃO-DE-VACA','UNHA-DE-FOME'],
  ['Chá de ___', 'BEBÊ','PANELA','CADEIRA','SUMIÇO']);

})();

(function(){
const P = (...g) => window.CONEXO.push({ grupos: g.map((x, i) => ({ tema: x[0], nivel: i + 1, palavras: x.slice(1) })) });

P(['Flores', 'GIRASSOL','ORQUÍDEA','TULIPA','LÍRIO'],
  ['Partes do olho (a ÍRIS não era flor)', 'PUPILA','RETINA','CÓRNEA','ÍRIS'],
  ['Partes dos óculos', 'LENTE','HASTE','ARMAÇÃO','PONTE'],
  ['Tem OLHO escondido', 'REPOLHO','PIOLHO','FERROLHO','MOLHO']);

P(['Café da manhã', 'PÃO','MANTEIGA','LEITE','CUSCUZ'],
  ['Estampas de roupa', 'LISTRADO','POÁ','FLORAL','ONCINHA'],
  ['Feito de cana-de-açúcar', 'RAPADURA','MELADO','GARAPA','ETANOL'],
  ['Outros nomes pra cadeia', 'XILINDRÓ','XADREZ','CANA','PRESÍDIO']);

P(['Harry Potter', 'HARRY','RONY','HERMIONE','DUMBLEDORE'],
  ['Casas de Hogwarts', 'GRIFINÓRIA','SONSERINA','CORVINAL','LUFA-LUFA'],
  ['Senhor dos Anéis', 'FRODO','GANDALF','GOLLUM','LEGOLAS'],
  ['Transporte mágico (bruxa, Aladdin, Cinderela, Goku)', 'VASSOURA','TAPETE','ABÓBORA','NUVEM']);

P(['Cores do arco-íris', 'VERMELHO','AMARELO','VERDE','VIOLETA'],
  ['Coisas de Dragon Ball', 'ESFERA','SHENLONG','CÁPSULA','SENZU'],
  ['Família do Goku', 'GOHAN','GOTEN','CHICHI','PAN'],
  ['Palíndromos (o RADAR não era do Dragon Ball)', 'OVO','ASA','SAIAS','RADAR']);

P(['Tipos de massa', 'ESPAGUETE','LASANHA','RAVIÓLI','NHOQUE'],
  ['Molhos de macarrão', 'BOLONHESA','PESTO','SUGO','ALFREDO'],
  ['Cidades italianas', 'ROMA','VENEZA','MILÃO','NÁPOLES'],
  ['Massa com nome de objeto', 'PARAFUSO','GRAVATINHA','CONCHINHA','ARGOLINHA']);

P(['Gente da escola', 'DIRETOR','PROFESSOR','INSPETOR','MERENDEIRA'],
  ['Coisas de prova', 'GABARITO','QUESTÃO','NOTA','COLA'],
  ['Coisas do recreio', 'LANCHE','MERENDA','PÁTIO','SINAL'],
  ['Tem COLA escondida', 'ESCOLA','CHOCOLATE','SACOLA','COLAR']);

P(['Coisas da TV', 'TELA','CONTROLE','ANTENA','CABO'],
  ['Novelas mexicanas do SBT', 'MARIMAR','USURPADORA','CARROSSEL','MARISOL'],
  ['Vilãs de novela', 'NAZARÉ','CARMINHA','ODETE','FLORA'],
  ['Pedra preciosa que virou nome de gente', 'RUBI','ESMERALDA','PÉROLA','JADE']);

P(['Doces com coco', 'COCADA','QUINDIM','MANJAR','BOM-BOCADO'],
  ['Comida do Norte', 'AÇAÍ','MANIÇOBA','TUCUNARÉ','CUPUAÇU'],
  ['Comida do Sul', 'CUCA','BARREADO','SAGU','CARRETEIRO'],
  ['Outros nomes pra beijo', 'SELINHO','BITOCA','BEIJOCA','BEIJINHO']);

P(['Redes sociais', 'INSTAGRAM','TIKTOK','YOUTUBE','TWITCH'],
  ['Coisas de celular', 'CARREGADOR','CAPINHA','FONE','CHIP'],
  ['Gírias da internet', 'TRETA','CRINGE','LACROU','SHIPPAR'],
  ['Coisas de cinema (a PELÍCULA não era do celular)', 'PELÍCULA','ROTEIRO','TRAILER','CLAQUETE']);

P(['Classes de RPG', 'GUERREIRO','MAGO','ARQUEIRO','LADINO'],
  ['Criaturas de fantasia', 'ORC','GOBLIN','OGRO','GÁRGULA'],
  ['Chatos da internet', 'HATER','SPAMMER','STALKER','TROLL'],
  ['Zelda', 'LINK','ZELDA','GANON','NAVI']);

P(['Frutinhas', 'GROSELHA','FRAMBOESA','MIRTILO','JABUTICABA'],
  ['Vai em cima do bolo', 'COBERTURA','GRANULADO','CEREJA','VELA'],
  ['Gírias pra bobo', 'PATETA','BOBOCA','TONTO','LESADO'],
  ['Sem a última letra vira outra (AMOR-a, MAR-é, SAL-a, PERU-a)', 'AMORA','MARÉ','SALA','PERUA']);

P(['Pokémon elétricos', 'PIKACHU','RAICHU','MAGNEMITE','VOLTORB'],
  ['Pokémon gato', 'MEOWTH','PERSIAN','SKITTY','LITTEN'],
  ['Tipos de Pokébola', 'MASTER','ULTRA','GREAT','PREMIER'],
  ['Pokémon fantasma', 'GASTLY','HAUNTER','GENGAR','MISDREAVUS']);

P(['Capitais do mundo', 'PARIS','LONDRES','TÓQUIO','LISBOA'],
  ['Cidades dos EUA', 'CHICAGO','MIAMI','BOSTON','DALLAS'],
  ['Times da NBA', 'BULLS','LAKERS','CELTICS','KNICKS'],
  ['São ___ (cidade)', 'PAULO','LUÍS','CARLOS','GONÇALO']);

P(['Órgãos', 'CORAÇÃO','PULMÃO','RIM','FÍGADO'],
  ['Ossos', 'FÊMUR','TÍBIA','CRÂNIO','COSTELA'],
  ['Cortes de carne', 'ACÉM','ALCATRA','MÚSCULO','PICANHA'],
  ['Bicho no diminutivo que é outra coisa', 'PATINHO','MACAQUINHO','CAVALINHO','CACHORRINHO']);

P(['Festa junina', 'FOGUEIRA','ARRAIÁ','PESCARIA','QUENTÃO'],
  ['Coisas de pescador', 'ANZOL','ISCA','VARA','MOLINETE'],
  ['Grupo de bandido', 'BANDO','GANGUE','MÁFIA','QUADRILHA'],
  ['Arbitragem (a BANDEIRINHA não era junina)', 'APITO','CARTÃO','VAR','BANDEIRINHA']);

P(['Gente do hospital', 'MÉDICO','ENFERMEIRA','CIRURGIÃO','ANESTESISTA'],
  ['Coisas do hospital', 'MACA','SORO','SERINGA','GESSO'],
  ['Coisas de pedreiro', 'CIMENTO','TIJOLO','PRUMO','BETONEIRA'],
  ['Siglas da saúde', 'SUS','UTI','UPA','SAMU']);

P(['Animes de luta', 'BLEACH','NARUTO','INUYASHA','SAMURAI X'],
  ['Sailor Moon (nomes BR)', 'SERENA','AMY','RAY','LITA'],
  ['Digimon', 'AGUMON','GABUMON','PATAMON','TENTOMON'],
  ['Japonês de otaku', 'SENPAI','KAWAII','NAKAMA','BAKA']);

P(['Coisas de igreja', 'ALTAR','BANCO','SINO','VITRAL'],
  ['Capitais do Norte', 'MANAUS','MACAPÁ','PALMAS','BELÉM'],
  ['Cidades bíblicas', 'JERICÓ','CANAÃ','BABILÔNIA','NAZARÉ'],
  ['Divas que viraram meme', 'GRETCHEN','INÊS','VALESCA','JOELMA']);

P(['Coisas do carro', 'BUZINA','RETROVISOR','CINTO','PARA-CHOQUE'],
  ['Coisas do trânsito', 'SEMÁFORO','RADAR','LOMBADA','PLACA'],
  ['Gírias pra carro velho', 'LATA-VELHA','CALHAMBEQUE','BANHEIRA','CARROÇA'],
  ['Faixa ___', 'PRETA','ETÁRIA','BÔNUS','AZUL']);

P(['Comida de cinema', 'PIPOCA','NACHOS','CHOCOLATE','REFRI'],
  ['Gêneros de filme', 'TERROR','COMÉDIA','AÇÃO','FAROESTE'],
  ['Gêneros literários', 'POESIA','CRÔNICA','ROMANCE','FÁBULA'],
  ['Gíria pra "real" (o dinheiro)', 'CONTO','PILA','MANGO','PAU']);

P(['Coisas da roça', 'CURRAL','GALINHEIRO','POMAR','ESTÁBULO'],
  ['Bichos da roça', 'BOI','CAVALO','JEGUE','CARNEIRO'],
  ['Lugar bagunçado', 'ZONA','MUQUIFO','PARDIEIRO','CHIQUEIRO'],
  ['Cavalo de ___', 'TROIA','PAU','RAÇA','BALANÇO']);

P(['Esportes olímpicos', 'NATAÇÃO','ATLETISMO','GINÁSTICA','ESGRIMA'],
  ['Times do Norte e Nordeste', 'BAHIA','SPORT','CEARÁ','REMO'],
  ['Atletas olímpicos do Brasil', 'REBECA','RAYSSA','DAIANE','ÍTALO'],
  ['Provas da ginástica artística', 'ARGOLAS','TRAVE','SOLO','CAVALO']);

P(['Frutas tropicais', 'MARACUJÁ','GOIABA','ACEROLA','PITANGA'],
  ['Árvores que dão fruta', 'GOIABEIRA','MANGUEIRA','CAJUEIRO','BANANEIRA'],
  ['Nomes regionais do geladinho', 'SACOLÉ','GELADINHO','DINDIN','CHUP-CHUP'],
  ['Mulher ___ (funk dos anos 2000)', 'MELANCIA','JACA','MELÃO','MORANGUINHO']);

P(['Crustáceos', 'CAMARÃO','LAGOSTA','CARANGUEJO','CRACA'],
  ['Moluscos', 'LULA','POLVO','CARAMUJO','LESMA'],
  ['Bob Esponja', 'PATRICK','SIRIGUEIJO','PLANKTON','SANDY'],
  ['Assistentes virtuais (o SIRI não era crustáceo)', 'SIRI','ALEXA','CORTANA','BIXBY']);

P(['Partes da casa', 'TELHADO','PAREDE','PORTÃO','GARAGEM'],
  ['Gírias pra casa', 'CAFOFO','BARRACO','MOCÓ','MUQUIFO'],
  ['Tipos de moradia', 'KITNET','SOBRADO','CHALÉ','BANGALÔ'],
  ['Tem RATO escondido', 'BARATO','PRATO','CONTRATO','RETRATO']);

})();
