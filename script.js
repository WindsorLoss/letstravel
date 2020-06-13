// VARIAVEIS DOS DESTINOS
var destino = 0
var lugar = JSON.parse(localStorage.getItem('destino')) //Recupera o JSON armazenado no local storage

// CATEGORIAS
var h1Cat = document.getElementById('h1Cat')

var naturezaCat = document.querySelectorAll('div[name=natureza]')
var praiaCat = document.querySelectorAll('div[name=praia]')
var historicoCat = document.querySelectorAll('div[name=historico]')
var btnTodos = document.getElementById('todosDestinos')


// LUGAR
var img1 = document.getElementById('img1')
var img2 = document.getElementById('img2')
var img3 = document.getElementById('img3')

var tituloLugar = document.getElementById('tituloLugar')
var subtituloLugar = document.getElementById('subtituloLugar')
var horario = document.getElementById('horario')
var endereco = document.getElementById('endereco')
var distancia = document.getElementById('distancia')
var mapa = document.getElementById('mapa')
var descricao = document.getElementById('descricao')

var imgCard1 = document.getElementById('imgCard1')
var nomeCard1 = document.getElementById('nomeCard1')
var lugarCard1 = document.getElementById('lugarCard1')
var descricaoCard1 = document.getElementById('descricaoCard1')
var aCard1 = document.getElementById('aCard1')

var imgCard2 = document.getElementById('imgCard2')
var nomeCard2 = document.getElementById('nomeCard2')
var lugarCard2 = document.getElementById('lugarCard2')
var descricaoCard2 = document.getElementById('descricaoCard2')
var aCard2 = document.getElementById('aCard2')

var imgCard3 = document.getElementById('imgCard3')
var nomeCard3 = document.getElementById('nomeCard3')
var lugarCard3 = document.getElementById('lugarCard3')
var descricaoCard3 = document.getElementById('descricaoCard3')
var aCard3 = document.getElementById('aCard3')


const cards = [  //INFORMAÇÕES Q VÃO ESTAR PRESENTES NA PÁGINA LUGAR
    {
    nome: 'Pico da Bandeira',
    lugar: 'Alto Caparaó - MG / Ibitirama - ES',
    img: 'imgs/picoDaBandeira2.jpg',
    descricao: 'O Pico da Bandeira é uma divisa natural entre o município de Ibitirama, no Estado do Espírito Santo e do Alto Caparaó, no Estado de Minas Gerais.',
    funcao: 'picoDaBandeira()'
    },

    {
    nome: 'Cachoeira de Salto Grande',
    lugar: 'Iconha - ES',
    img: 'imgs/saltoGrande.jpg',
    descricao: 'Uma das inúmeras cachoeiras banhadas pelo Rio Iconha. Local perfeito para se livrar do estresse do dia a dia.',
    funcao: 'saltoGrande()'
    },

    {
    nome: 'Ruínas do Rio Salinas',
    lugar: 'Anchieta - ES',
    img: 'imgs/ruinasDeAnchieta.jpg',
    descricao: 'As Ruínas do Rio Salinas se situam em meio a natureza, ao lado do Rio Salinas, que é um dos afluentes do Rio Beneventes.',
    funcao: 'ruinas()'
    },

    {
    nome: 'Praia de Ubu',
    lugar: 'Anchieta - ES',
    img: 'imgs/praiaDeUbu.jpg',
    descricao: 'A água que banha a praia possui uma linda cor azul, e a areia é ideal para as crianças poderem se divertir.',
    funcao: 'praiaDeUbu()'
    },

    {
    nome: 'Praia dos Namorados',
    lugar: 'Anchieta - ES',
    img: 'imgs/praiaDosNamorados.jpg',
    descricao: 'Uma das melhores praias do litoral Sul do Estado. Conta com um mar tranquilo e não tão profundo, ideal para a família se divertir.',
    funcao: 'praidaDosNamorados()'
    },

    {
    nome: 'Dunas de Itaúnas',
    lugar: 'Itaúnas - ES',
    img: 'imgs/dunasDeItaúnas.jpg',
    descricao: 'As Dunas de Itaúnas são consideradas Patrimônio Mundia da Humanidade pela UNESCO. As dunas começaram a se formar por volta da década de 70, e atualmente podem ter até 30 metros de altura.',
    funcao: 'dunasDeItaunas()'
    },

    {
    nome: 'Museu Vale',
    lugar: 'Vila Velha - ES',
    img: 'imgs/museuVale.jpg',
    descricao: 'O Museu Vale possui um respeitado acervo com mais de cem anos de história, e também conta com um centro de artes contemporâneas. O lugar perfeito para você que gosta de admirar a nossa história.',
    funcao: 'museuVale()'
    },

    {
    nome: 'Cachoeira de Matilde',
    lugar: 'Alfredo Chaves - ES',
    img: 'imgs/cahcoeiraMatilde.jpg',
    descricao: 'A Cachoeira de Matilde, também conhecida como Cachoeira do Engenheiro Reeve, possui a maior queda livre de água de todo o Estado do Espírito Santo.',
    funcao: 'cachoeiraDeMatilde()'
    },

    {
    nome: 'Parque Estadual Paulo César Vinha',
    lugar: 'Guarapari - ES',
    img: 'imgs/pauloCesar.jpg',
    descricao: 'Se você é daquelas pessoas aventureiras, que gostam de conhecer novos lugares, o Parque Estadual Paulo César Vinha é o local ideal para você.',
    funcao: 'pauloCezar()'
    },

    {
    nome: 'Projeto Tamar - Base Guriri',
    lugar: 'São Mateus - ES',
    img: 'imgs/projetoTamar.jpg',
    descricao: 'Bem como outras bases do Projeto Tamar, a base de Guriri tem como objetivo a proteger as tartarugas marinhas ques estão a beira da extinçãono litoral brasileiro.',
    funcao: 'projetoTamar()'
    },

    {
    nome: 'Praia dos Castelhanos',
    lugar: 'Anchieta - ES',
    img: 'imgs/praiaDosCastelhanos.jpg',
    descricao: 'A Praia dos Castelhanos é uma das praias mais urbanizadas do município de Anchieta. Com uma extensão de aproximadamente 2 km de um lindo litoral, para você poder aproveitar bastante com toda a sua família.',
    funcao: 'praiaDeCastelhanos()'
    },

    {
    nome: 'Zoo Park da Montanha',
    lugar: 'Marechal Floriano - ES',
    img: 'imgs/zooMarechal.jpg',
    descricao: 'Atualmente, o zoológico Zoo Park da Montanha é o único presente no Estado do Espírito Santo.',
    funcao: 'zoo()'
    }
]

//FUNÇÕES PARA ESCOLHER UM CARD ALEATÓRIO DA CONST CARDS

function card1() {
    var pos = Math.floor(Math.random() * cards.length)    
    nomeCard1.innerHTML = cards[pos].nome
    lugarCard1.innerHTML = cards[pos].lugar
    descricaoCard1.innerHTML = cards[pos].descricao
    imgCard1.setAttribute('src', `${cards[pos].img}`)
    aCard1.setAttribute('onclick', `${cards[pos].funcao}`)
}

function card2() {
    var pos = Math.floor(Math.random() * cards.length)
    nomeCard2.innerHTML = cards[pos].nome
    lugarCard2.innerHTML = cards[pos].lugar
    descricaoCard2.innerHTML = cards[pos].descricao
    imgCard2.setAttribute('src', `${cards[pos].img}`)
    aCard2.setAttribute('onclick', `${cards[pos].funcao}`)
}

function card3() {
    var pos = Math.floor(Math.random() * cards.length)
    nomeCard3.innerHTML = cards[pos].nome
    lugarCard3.innerHTML = cards[pos].lugar
    descricaoCard3.innerHTML = cards[pos].descricao
    imgCard3.setAttribute('src', `${cards[pos].img}`)
    aCard3.setAttribute('onclick', `${cards[pos].funcao}`)
}


// Salva a variavel destinho no local storage como um arquivo JSON
function saveToStorage(){
    localStorage.setItem('destino', destino)
}

// Reseta a var destino, resetando assim o valor contido no JSON
function reset() {
    destino = 0
    saveToStorage()
}

// Define o JSON pro valor da categoria
function natureza(){
    destino = 100
    saveToStorage()
}

function praia(){
    destino = 200
    saveToStorage()
}

function historico(){
    destino = 300
    saveToStorage()
}


function verificarCategoria(){
    if(lugar == 100)
    {
        h1Cat.innerHTML = "Separamos esses lugares para você ter um maior contato com a natureza"
        praiaCat.forEach(Element => {
            Element.setAttribute('class', 'invisible')
        });

        historicoCat.forEach(Element => {
            Element.setAttribute('class', 'invisible')
        });
    }
    else if(lugar == 200)
    {
        h1Cat.innerHTML = 'Separamos esses lugares para você poder aproveitar uma boa praia'
        naturezaCat.forEach(Element => {
            Element.setAttribute('class', 'invisible')
        });

        historicoCat.forEach(Element => {
            Element.setAttribute('class', 'invisible')
        });
    }
    else if(lugar == 300)
    {
        h1Cat.innerHTML = 'Separamos esses lugares para você aproveitar a nossa cultura'
        praiaCat.forEach(Element => {
            Element.setAttribute('class', 'invisible')
        });

        naturezaCat.forEach(Element => {
            Element.setAttribute('class', 'invisible')
        });
    }
    else
    {
        h1Cat.innerHTML = 'Descubra novos lugares'
        btnTodos.setAttribute('class', 'invisible')
    }
}

function verificarLocal(){ //Verifica qual foi o local clicado pelo usuário e carrega a página de acordo com o local escolhido
    if(lugar == 1)  //SALTO GRANDE
    {
        img1.setAttribute('src', 'imgs/saltoGrande.jpg')
        img2.setAttribute('src', 'imgs/saltoGrande2.jpg')
        img3.setAttribute('src', 'imgs/saltoGrande3.jpg')

        tituloLugar.innerHTML = 'Cachoeira de Salto Grande'
        subtituloLugar.innerHTML = 'Iconha - ES'
        horario.innerHTML = 'Abre todos os dias - 09:00 às 18:00'
        endereco.innerHTML = 'Rod. Jorge Féres, 205, Iconha - ES, 29280-000'
        distancia.innerHTML = '103 km da capital Vitória - ES'
        mapa.setAttribute('href', 'https://goo.gl/maps/H47ALRxKMjaCSxag7')
        descricao.innerHTML = 'A Cachoeira de Salto Grande é a escolha ideal para passar aquele desejado final de semana tranquilo com toda a família. A cachoeira oferece a chance de se banhar na maravilhosa água do Rio Iconha, além de também possuir uma área para camping, para aqueles que querem aproveitar por mais tempo as maravilhas que este local tem a oferecer. '

                
        card1()
        card2()
        card3()
    }
    else if(lugar == 2)  //PRAIA DOS NAMORADOS
    {
        img1.setAttribute('src', 'imgs/praiaDosNamorados.jpg')
        img2.setAttribute('src', 'imgs/praiaDosNamorados2.jpg')
        img3.setAttribute('src', 'imgs/praiaDosNamorados3.jpg')

        tituloLugar.innerHTML = 'Praia dos Namorados'
        subtituloLugar.innerHTML = 'Anchieta - ES'
        horario.innerHTML = 'Temporariamente interdidata'
        endereco.innerHTML = 'R. Darcy Ribeiro Castro, 121 - Iriri, Anchieta - ES, 29230-000'
        distancia.innerHTML = '93 km da capital Vitória - ES'
        mapa.setAttribute('href', 'https://goo.gl/maps/4C6P48UtueNTjjPP9')
        descricao.innerHTML = 'Escolhida a dedo por nossa equipe, a Praia dos Namorados foi eleita a melhor das praias do Balneário de Iriri. Localizada mais distante do início do balneário, a praia é uma das mais tranquilas da região. Com ondas na medida certa e não sendo tão profunda, toda a família pode aproveitar da diversão sem se preocupar demais. Ela também possui um costão no qual é possível ver tartarugas em certos períodos do ano.'
    
        card1()
        card2()
        card3()
    }
    else if(lugar == 3)  //PAULO CEZAR
    {
        img1.setAttribute('src', 'imgs/pauloCesar.jpg')
        img2.setAttribute('src', 'imgs/pauloCesar2.jpg')
        img3.setAttribute('src', 'imgs/pauloCesar3.jpg')

        tituloLugar.innerHTML = 'Parque Estadual Paulo César Vinha'
        subtituloLugar.innerHTML = 'Guarapari - ES'
        horario.innerHTML = 'Temporariamente fechado'
        endereco.innerHTML = 'Rodovia ES-060, Km 37.5, s/n - Setiba, ES, 29222-360'
        distancia.innerHTML = '44.6 km da capital Vitória - ES'
        mapa.setAttribute('href', 'https://goo.gl/maps/k1jpZvMQhdkcU8Dj7')
        descricao.innerHTML = 'Se você é daquelas pessoas aventureiras, que gostam de conhecer novos lugares, o Parque Estadual Paulo César Vinha é o local ideal para você. O parque ainda possui de um lado, água do mar, e do outro, água de uma incrível lagoa, perfeito para as pessoas que são indecisas. E como se isso já não fosse o bastante, no parque você ainda pode realizar trilhas e passeios de caiaque.'
    
        card1()
        card2()
        card3()
    }
    else if(lugar == 4)  //UBU
    {
        img1.setAttribute('src', 'imgs/praiaDeUbu.jpg')
        img2.setAttribute('src', 'imgs/praiaDeUbu2.jpg')
        img3.setAttribute('src', 'imgs/praiaDeUbu3.jpg')

        tituloLugar.innerHTML = 'Praia de Ubu'
        subtituloLugar.innerHTML = 'Anchieta - ES'
        horario.innerHTML = 'Temporariamente interdidata'
        endereco.innerHTML = 'Av.Francisco Ribeiro- 248, praia - Ubu, Anchieta - ES, 29230-000'
        distancia.innerHTML = '78.6 km da capital Vitória - ES'
        mapa.setAttribute('href', 'https://goo.gl/maps/nH9amhwV5vNCgMH58')
        descricao.innerHTML = 'A Praia de Ubu é conhecida como uma das praias urbanizadas mais tranquilas da cidade de Anchieta - ES. É uma praia extensa, com pouca agitação mas com bastante conforto. A água que banha a praia possui uma linda cor azul, e a areia é ideal para as crianças poderem se divertir. Possui quiosques ao longo de toda a extenção da praia, com comidas mais típicas da região.'
    
        card1()
        card2()
        card3()
    }
    else if(lugar == 5)  //RUINAS
    {
        img1.setAttribute('src', 'imgs/ruinasDeAnchieta.jpg')
        img2.setAttribute('src', 'imgs/ruinasDeAnchieta2.jpg')
        img3.setAttribute('src', 'imgs/ruinasDeAnchieta3.jpg')

        tituloLugar.innerHTML = 'Ruínas do Rio Salinas'
        subtituloLugar.innerHTML = 'Anchieta - ES'
        horario.innerHTML = 'Temporariamente fechado'
        endereco.innerHTML = 'Rua Dezessete, 101 - Anchieta, ES, 29230-000'
        distancia.innerHTML = '88 km da capital Vitória - ES'
        mapa.setAttribute('href', 'https://goo.gl/maps/hPj9JgHVFqyfi5sP6')
        descricao.innerHTML = 'As Ruínas do Rio Salinas se situam em meio a natureza, ao lado do Rio Salinas, que é um dos afluentes do Rio Beneventes. Para chegar até as ruínas, pode-se ir pela estrada ou por meio de embarcações que passam pelo Rio Benevides, que se torna outro passeio por si só, pois é possível admirar toda a exuberância da fauna e flora do manguezal que cerca o rio. Umas das hipóteses mais aceitas era que as ruínas seriam o início de uma igreja que os jesuítas presentes na época queriam construir, pois nessa região haviam muitos povos indígenas.'
    
        card1()
        card2()
        card3()
    }
    else if(lugar == 6)  //MUSEU VALE
    {
        img1.setAttribute('src', 'imgs/museuVale.jpg')
        img2.setAttribute('src', 'imgs/museuVale2.jpg')
        img3.setAttribute('src', 'imgs/museuVale3.jpg')

        tituloLugar.innerHTML = 'Museu Vale'
        subtituloLugar.innerHTML = 'Vila Velha - ES'
        horario.innerHTML = 'Temporariamente fechado'
        endereco.innerHTML = 'R. Vila Isabel, 2-770, Vila Velha - ES'
        distancia.innerHTML = '10 km da capital Vitória - ES'
        mapa.setAttribute('href', 'https://goo.gl/maps/BA9xU9o1HeJ52oAK9')
        descricao.innerHTML = 'O Museu Vale, inaugurado em 15 de outubro de 1998, está situado na Baía de Vitória, na Antiga Estação Ferroviária Pedro Nolasco. Desde a sua fundação, o Museu Vale vem agindo continuamente, realizando ações, projetos e programas socias nas regiões onde a Vale atua. Além de conter um acerco de mais de cem anos de história, o Museu ainda conta com um centro de artes contemporâneas, com obras de artistas consagrados e de novos talentos.'
    
        card1()
        card2()
        card3()
    }
    else if(lugar == 7)  //PICO DA BANDEIRA
    {
        img1.setAttribute('src', 'imgs/picoDaBandeira2.jpg')
        img2.setAttribute('src', 'imgs/picoDaBandeira.jpg')
        img3.setAttribute('src', 'imgs/picoDaBandeira3.jpg')

        tituloLugar.innerHTML = 'Pico da Bandeira'
        subtituloLugar.innerHTML = 'Alto Caparaó - MG / Ibitirama - ES'
        horario.innerHTML = 'Sempre aberto'
        endereco.innerHTML = 'Parque Nacional do Caparaó Portaria do Espírito Santo s/n, Dores do Rio Preto - ES, 36834-000'
        distancia.innerHTML = '287 km da capital Vitória'
        mapa.setAttribute('href', 'https://goo.gl/maps/wBNVUhdF9fJF2KkW6')
        descricao.innerHTML = 'O Pico da Bandeira é uma divisa natural entre o município de Ibitirama, no Estado do Espírito Santo e do Alto Caparaó, no Estado de Minas Gerais. É o ponto mais alto dos dois Estados, bem como de toda a Região Sudeste do Brasil. Além disso, é o terceiro ponto mais alto do Brasil, com cerca de 2891 metros de altitude. O pico recebeu esse nome, pois em meados do século XIX, o então imperador Dom Pedro II ordenou que fosse colocado uma bandeira do Império no cume do monte, que na época era considerado o maior do Brasil.'

        card1()
        card2()
        card3()
    }
    else if(lugar == 8)  //CASTELHANOS
    {
        img1.setAttribute('src', 'imgs/praiaDosCastelhanos.jpg')
        img2.setAttribute('src', 'imgs/praiaDosCastelhanos2.jpg')
        img3.setAttribute('src', 'imgs/praiaDosCastelhanos3.jpg')

        tituloLugar.innerHTML = 'Praia dos Castelhanos'
        subtituloLugar.innerHTML = 'Achieta - ES'
        horario.innerHTML = 'Temporariamente interdidata'
        endereco.innerHTML = 'Av. Beira Mar, 2918-3010 - Guanabara, Anchieta - ES, 29230-000'
        distancia.innerHTML = '83.5 km da capital Vitória - ES'
        mapa.setAttribute('href', 'https://goo.gl/maps/j7oHVqpP42MWTej18')
        descricao.innerHTML = 'A Praia dos Castelhanos é uma das praias mais urbanizadas do município de Anchieta. Com uma extensão de aproximadamente 2 km de um lindo litoral, a Praia dos Castelhanos conta com quiosques, casas e comércios em sua orla, sendo este um local de alta procura no verão. Ainda no verão, a praia serve de palco para diversos eventos organizados para os turistas poderem aproveitar bastante toda a beleza que essa praia tem a oferecer.'
        
        card1()
        card2()
        card3()
    }
    else if(lugar == 9)  //MATILDE
    {
        img1.setAttribute('src', 'imgs/cahcoeiraMatilde.jpg')
        img2.setAttribute('src', 'imgs/cahcoeiraMatilde2.jpg')
        img3.setAttribute('src', 'imgs/cahcoeiraMatilde3.jpg')

        tituloLugar.innerHTML = 'Cachoeira de Matilde'
        subtituloLugar.innerHTML = 'Alfredo Chaves - ES'
        horario.innerHTML = 'Abre todos os dias - 07:00 às 18:00'
        endereco.innerHTML = 'R. Orlindo Donadello, s/n, Alfredo Chaves - ES, 29240-000'
        distancia.innerHTML = '90 km da capital Vitória - ES'
        mapa.setAttribute('href', 'https://goo.gl/maps/xGp6yXenPiUKZqFx5')
        descricao.innerHTML = 'A Cachoeira de Matilde, também conhecida como Cachoeira do Engenheiro Reeve, possui a maior queda livre de água de todo o Estado do Espírito Santo. É possível seguir uma trilha, que fica logo depois do mirante da cachoeira e chegar até por de trás dela, ou se preferir, tomar um banho na lagoa formada pela mesma. Nas redondezas da cachoeira, você também pode visitar uma antiga estação ferroviária que foi construída pelos imigrantes da região.'
    
        card1()
        card2()
        card3()
    }
    else if(lugar == 10)  //PALACIO ANCHIETA
    {
        img1.setAttribute('src', 'imgs/Palácio_Anchieta.jpg')
        img2.setAttribute('src', 'imgs/Palácio_Anchieta2.jpg')
        img3.setAttribute('src', 'imgs/Palácio_Anchieta3.jpg')

        tituloLugar.innerHTML = 'Palácio Anchieta'
        subtituloLugar.innerHTML = 'Vitória - ES'
        horario.innerHTML = `De Terça-feira a Sexta-feria - 09:00 às 17:00 <br> Nos finais de semana - 09:00 às 16:00 <br> Fechado nas Segundas-feiras`
        endereco.innerHTML = 'Praça João Clímaco, 142 - Centro, Vitória - ES, 29015-110'
        distancia.innerHTML = ''
        mapa.setAttribute('href', 'https://goo.gl/maps/yn226DvKqinQanUs9')
        descricao.innerHTML = 'Localizado em frente ao Porto de Vitória, o Palácio Anchieta atualmente é a sede do poder executivo do Estado do Espírito Santo, mas não foi sempre assim. Em 1551, o ano de sua construção, o local havia sido construído como um conjunto formado pela Igreja de São Tiago e pelo Colégio dos Jesuítas. Porém, anos mais tarde o local sofre um incêndio que destroi a parte da igreja, sendo reformada mais tarde como a Casa de São Tiago, com um colégio e seminário. Em 1945 o Palácio recebe o nome de Anchieta em homenagem ao padre, que foi um dos responsáveis pela a reforma do colégio no século XVI.'
    
        card1()
        card2()
        card3()
    }
    else if(lugar == 11)  //DUNAS
    {
        img1.setAttribute('src', 'imgs/dunasDeItaúnas.jpg')
        img2.setAttribute('src', 'imgs/dunasDeItaúnas2.jpg')
        img3.setAttribute('src', 'imgs/dunasDeItaúnas3.jpg')

        tituloLugar.innerHTML = 'Dunas de Itaúnas'
        subtituloLugar.innerHTML = 'Itaúnas - ES'
        horario.innerHTML = 'Temporariamente fechado'
        endereco.innerHTML = 'Conceição da Barra - ES, 29960-000'
        distancia.innerHTML = '267 km da capital Vitória - ES'
        mapa.setAttribute('href', 'https://goo.gl/maps/YPKEGjyHiFahuS486')
        descricao.innerHTML = 'As Dunas de Itaúnas são consideradas Patrimônio Mundial da Humanidade pela UNESCO. As dunas começaram a se formar por volta da década de 70, e atualmente podem ter até 30 metros de altura. Ainda nas dunas, você tem a possibilidade de pagar por um passei de bugue, que o leva pelas redondezas das dunas. Como se tudo isso já não fosse o suficiente, o pôr-do-sol é a coisa mais linda do local, atraindo turistas de diversos locais para tirar as famosas fotos com o sol se pondo.'
    
        card1()
        card2()
        card3()
    }
    else if(lugar == 12)  //ZOO
    {
        img1.setAttribute('src', 'imgs/zooMarechal.jpg')
        img2.setAttribute('src', 'imgs/zooMarechal2.jpg')
        img3.setAttribute('src', 'imgs/zooMarechal3.jpg')

        tituloLugar.innerHTML = 'Zoo Park da Montanha'
        subtituloLugar.innerHTML = 'Marechal Floriano - ES'
        horario.innerHTML = 'De Terça-feira a Sábado - 09:00 às 17:00 <br> Fechado nos Domingos e Segundas-Feiras'
        endereco.innerHTML = 'Estrada do Rio Fundo, s/n, Mal. Floriano - ES, 29255-000'
        distancia.innerHTML = '59.6 km da capital Vitória'
        mapa.setAttribute('href', 'https://goo.gl/maps/oRbfEg2earyaMf1s5')
        descricao.innerHTML = 'Atualmente, o zoológico Zoo Park da Montanha é o único presente no Estado do Espírito Santo. Desde 2012, o ano em que o zoológico foi fundado, ele já conta com as espécies mais variadas de animais, desde aves a primatas, e agora, também já possui felinos de grande porte, como leão e onças-pintadas. Outra parte que chama muito a atenção dos visitantes é a ala dos répteis, que conta com incríveis cobras, serpentes e largatos'
    
        card1()
        card2()
        card3()
    }
    else if(lugar == 13)  //TAMAR
    {
        img1.setAttribute('src', 'imgs/projetoTamar.jpg')
        img2.setAttribute('src', 'imgs/projetoTamar2.jpg')
        img3.setAttribute('src', 'imgs/projetoTamar3.jpg')

        tituloLugar.innerHTML = 'Projeto Tamar - Base Guriri'
        subtituloLugar.innerHTML = 'São Mateus - ES'
        horario.innerHTML = 'De Segunda-feira a Sexta-feira - 09:00 às 17:00 <br> Fechado nos finais de semana'
        endereco.innerHTML = 'Av. Oceano Atlântico, s/n - Guriri Norte, São Mateus - ES, 29946-550'
        distancia.innerHTML = '226 km da capital Vitória - ES'
        mapa.setAttribute('href', 'https://goo.gl/maps/qEtUijPSLrJC2oC67')
        descricao.innerHTML = 'Bem como outras bases do Projeto Tamar, a base de Guriri tem como objetivo proteger as tartarugas marinhas que estão a beira da extinção no litoral brasileiro. Atualmente, o Projeto Tamar não se restinge mais a conservação apenas das tartarugas, mas também de tubarões e de outras espécies de vida marinha. Poucos anos atrás, a base de Guriri passou por uma reforma e agora também conta com espaço onde são ministradas palestras voltadas ao meio ambiente como um todo.'
    
        card1()
        card2()
        card3()
    }
    else if(lugar == 14)  //MOSTEIRO
    {
        img1.setAttribute('src', 'imgs/mosteiro.jpg')
        img2.setAttribute('src', 'imgs/mosteiro2.jpg')
        img3.setAttribute('src', 'imgs/mosteiro3.jpg')

        tituloLugar.innerHTML = 'Mosteiro Zen Morro da Vargem'
        subtituloLugar.innerHTML = 'Ibiraçu - ES'
        horario.innerHTML = 'Aberto somente aos Domingos - 08:00 às 10:00'
        endereco.innerHTML = 'BR 101, Km 217, s/n Zona Rural, Ibiraçu - ES, 29670-000'
        distancia.innerHTML = '65.7 km da capital Vitória - ES'
        mapa.setAttribute('href', 'https://goo.gl/maps/n3C1MnYhMQvzMqw1A')
        descricao.innerHTML = 'O Mosteiro se encontra dentro de uma reserva da Mata Atlântica, no munícipio de Ibiraçu. O Mosteiro Zen Morro da Vargem, foi criado em 1974, sendo o primeiro mosteiro a ser construído no Estado do Espírito Santo. O Mosteiro possui diversos templos, dentre eles: Oração, Alimentação, Mortos, Meditação e entre outros. O Mosteiro tem como objetivo além das atividades espirituais, vários programas de educação ambiental, social e cultura, focados em diversas camadas da sociedade, como crianças, adultos, e até mesmo polícias e bombeiros.'
    
        card1()
        card2()
        card3()
    }
    else if(lugar == 15)  //PEDRA AZUL
    {
        img1.setAttribute('src', 'imgs/pedraAzul.jpg')
        img2.setAttribute('src', 'imgs/pedraAzul2.jpg')
        img3.setAttribute('src', 'imgs/pedraAzul3.jpg')

        tituloLugar.innerHTML = 'Parque Estadual Pedra Azul'
        subtituloLugar.innerHTML = 'Domingos Martins - ES'
        horario.innerHTML = 'Sempre Aberto'
        endereco.innerHTML = 'Domingos Martins - ES, 29260-000'
        distancia.innerHTML = '94.3 km da capital Vitória - ES'
        mapa.setAttribute('href', 'https://goo.gl/maps/b1vXYmYNGuJguD776')
        descricao.innerHTML = 'A antiga Reserva Florestal de Pedra Azul, criada em 1960, foi transformada em Parque Estadual da Pedra Azul, no ano de 1991. O parque abriga um dos principais pontos turísticos do Estado do Espírito Santo, a Pedra Azul com cerca de 1822 metros de altura, sendo este um dos cartões postais mais imponentes de paisagem natural do Estado. Juntamente com a Pedra Azul, há a Pedra do Lagarto, compondo assim um belo cenário natural. Além disso, o parque também abriga diversas espécies vegetais, desde orquídeas e bromélias a cássias e ipês.'
    
        card1()
        card2()
        card3()
    }
    else if(lugar == 16)  //MORRO DO MORENO
    {
        img1.setAttribute('src', 'imgs/morroDoMoreno.jpg')
        img2.setAttribute('src', 'imgs/morroDoMoreno2.jpg')
        img3.setAttribute('src', 'imgs/morroDoMoreno3.jpg')

        tituloLugar.innerHTML = 'Morro do Moreno'
        subtituloLugar.innerHTML = 'Vila Velha - ES'
        horario.innerHTML = 'Temporariamente fechado'
        endereco.innerHTML = '1056, R. Xavantes, 262 - Praia da Costa, Vila Velha - ES, 29101-190'
        distancia.innerHTML = '8.6 km da capital Vitória - ES'
        mapa.setAttribute('href', 'https://goo.gl/maps/9p4h12a2V1qiT5Yv5')
        descricao.innerHTML = 'O Morro do Moreno era usado nos séculos anteriores para vigiar os navios que adentravam na Baía de Vitória. Atualmente, o Morro do Moreno é visitado por turístas para a realização de esportes, como trilhas, rapel, tirolesa e voo de parapente. Além do destino principal, o topo do morro (Barriga), ainda há outros setores, como a Testa da Macaca e a Boca da Macaca. Esses setores receberam esses nomes porque a visão lateral do morro parece uma macaca grávida. A trilha até o setor da Barriga possui cerca de 1,3 km de extensão, sendo esta a maior trilha entre os setores.'
    
        card1()
        card2()
        card3()
    }
    else if(lugar == 17)  //FAROL
    {
        img1.setAttribute('src', 'imgs/farolSantaLuzia.jpg')
        img2.setAttribute('src', 'imgs/farolSantaLuzia2.jpg')
        img3.setAttribute('src', 'imgs/farolSantaLuzia3.jpg')

        tituloLugar.innerHTML = 'Farol de Santa Luzia'
        subtituloLugar.innerHTML = 'Vila Velha - ES'
        horario.innerHTML = 'De Terça-feira a Domingo - 09:00 às 16:30 <br> Fechado nas Segundas-feiras'
        endereco.innerHTML = 'R. Santa Luzia, 2 - Praia da Costa, Vila Velha - ES, 29101-100'
        distancia.innerHTML = '9 km da capital Vitória - ES'
        mapa.setAttribute('href', 'https://goo.gl/maps/cvFqmPxBVoDB4Td89')
        descricao.innerHTML = 'O Farol de Santa Luzia, possui 12 metros de altura e uma luz com capacidade luminosa de alcançar até 27,78 km de distância. O farol, inaugurado em 1871 pelo então Imperador Dom Pedro II, tem por objetivo orientar as embarcações que normalmente transitam entre os portos de Vitória, Vila Velha e Tubarão. O farol é uma área de segurança por pertencer à Capitania dos Portos, e devido à isso, o local não deveria permitir transitação civil, porém a Secretaria de Desenvolvimento de Vila Velha possibilitou a abertura para visitação do farol, com o limite de 25 pessoas por vez, podendo permanecer somente 20 minutos no local.'
    
        card1()
        card2()
        card3()
    }
    else if(lugar == 18)  //CONVENTO
    {
        img1.setAttribute('src', 'imgs/conventoDaPenha.jpg')
        img2.setAttribute('src', 'imgs/conventoDaPenha2.jpg')
        img3.setAttribute('src', 'imgs/conventoDaPenha3.jpg')

        tituloLugar.innerHTML = 'Convento da Penha'
        subtituloLugar.innerHTML = 'Vila Velha - ES'
        horario.innerHTML = 'De Segunda-feira a Sábado - 05:14 às 16:45 <br> Nos Domingos - 04:15 às 16:45'
        endereco.innerHTML = 'R. Vasco Coutinho, 1-3 - Centro de Vila Velha, Vila Velha - ES, 29100-231'
        distancia.innerHTML = '8.5 km da capital Vitória - ES'
        mapa.setAttribute('href', 'https://goo.gl/maps/gPJF1mU3GrVm6Cud9')
        descricao.innerHTML = 'O Convento da Penha teve a sua construção feita no alto de um penhasco de 154 metros de altitude por volta dos anos de 1558, sendo este considerado um dos santuários religiosos mais antigos do Brasil. O convento foi tombado como patrimônio histórico cultural pelo Instituto do Patrimônio Histórico e Artístico Nacional, em 1943. O complexo do convento abriga vários outros atrativos, como a Gruta do Frei Pedro Palácios e o largo do convento, além do Museu. No Altar Mor da Igreja, há mais de 200 peças de 19 tipos diferentes de mármore que adornam o retábulo e colunas.'
    
        card1()
        card2()
        card3()
    }
    else if(lugar == 19)  //PEDRA DA CEBOLA
    {
        img1.setAttribute('src', 'imgs/pedraDaCebola.jpg')
        img2.setAttribute('src', 'imgs/pedraDaCebola2.jpg')
        img3.setAttribute('src', 'imgs/pedraDaCebola3.jpg')

        tituloLugar.innerHTML = 'Parque Pedra da Cebola'
        subtituloLugar.innerHTML = 'Vitória - ES'
        horario.innerHTML = 'Temporariamente fechado'
        endereco.innerHTML = 'R. Ana Viêira Mafra, s/n - Mata da Praia, Vitória - ES, 29066-010'
        distancia.innerHTML = ''
        mapa.setAttribute('href', 'https://goo.gl/maps/5L8mgoourtTTEyht6')
        descricao.innerHTML = 'Anos atrás, o local onde está localizado o Parque Pedra da Cebola era propriedade da mineradora Vale, conhecida como Pedreira de Goiabeiras. Em 1997 ocorreu a implantação do parque como forma de recuperação da área degradada por conta das ativades que eram realizadas. O parque recebeu esse nome devido ao formato de uma grande pedra que lembra o formato de uma cebola. O parque ainda conta com a presença de um jardim oriental, que é usado para realizar meditações, e um mirante, com vista para parte do Maciço Central, o Porto de Tubarão e o Morro do Mestre Álvaro.'
    
        card1()
        card2()
        card3()
    }
    else if(lugar == 20)  //GURIRI
    {
        img1.setAttribute('src', 'imgs/guriri.jpg')
        img2.setAttribute('src', 'imgs/guriri2.jpg')
        img3.setAttribute('src', 'imgs/guriri3.jpg')

        tituloLugar.innerHTML = 'Ilha de Guriri'
        subtituloLugar.innerHTML = 'São Mateus - ES'
        horario.innerHTML = 'Temporariamente interdidata'
        endereco.innerHTML = 'Av. Oceano Atlântico - Guriri, ES'
        distancia.innerHTML = '227 km da capital Vitória - ES'
        mapa.setAttribute('href', 'https://goo.gl/maps/d3YMLY1R2SPAuf6f9')
        descricao.innerHTML = 'A Ilha de Guriri é a maior ilha do Estado do Espírito Santo, possuindo 102 km² de área e 42 km de extensão de praia. A Capela dos Navegantes, que foi construída em 1975 em homenagem a Iemanjá, está localizada na parte centra da faixa litorânea. A Área do Surf, ideal para quem gosta de se aventurar no mar, e fica mais a extrema direita da praia. Além disso, há uma região com bosque à beira mar, para quem gosta de fazer churrasco com os amigos e família. E para os mais aventureiros, há também a opção da Praia do Pontal do Cricaré, localizado a 14 km do Centro de Guriri, sendo necessário realizar uma pequena trilha para chegar a mesma.'
    
        card1()
        card2()
        card3()
    }
}

// TODOS OS DESTINOS (desculpa pelos recursos técnicos avançados, mas foi oq eu consegui pensar rs)

function saltoGrande(){
    destino = 1
    saveToStorage()
}

function praidaDosNamorados(){
    destino = 2
    saveToStorage()
}

function pauloCezar(){
    destino = 3
    saveToStorage()
}

function praiaDeUbu(){
    destino = 4
    saveToStorage()
}

function ruinas(){
    destino = 5
    saveToStorage()
}

function museuVale(){
    destino = 6
    saveToStorage()
}

function picoDaBandeira(){
    destino = 7
    saveToStorage()
}

function praiaDeCastelhanos(){
    destino = 8
    saveToStorage()
}

function cachoeiraDeMatilde(){
    destino = 9
    saveToStorage()
}

function palacioAnchieta(){
    destino = 10
    saveToStorage()
}

function dunasDeItaunas(){
    destino = 11
    saveToStorage()
}

function zoo(){
    destino = 12
    saveToStorage()
}

function projetoTamar(){
    destino = 13
    saveToStorage()
}

function mosteiro(){
    destino = 14
    saveToStorage()
}

function pedraAzul(){
    destino = 15
    saveToStorage()
}

function morroDoMoreno(){
    destino = 16
    saveToStorage()
}

function farol(){
    destino = 17
    saveToStorage()
}

function convento(){
    destino = 18
    saveToStorage()
}

function pedraDaCebola(){
    destino = 19
    saveToStorage()
}

function guriri(){
    destino = 20
    saveToStorage()
}

// SEARCH
const places = [ 
    'Salto Grande',
    'Praia dos Namorados',
    'Paulo César Vinha',
    'Praia de Ubu',
    'Ruínas do Rios Salinas',
    'Museu Vale',
    'Pico da Bandeira',
    'Praia de Castelhanos',
    'Cahoeira de Matilde',
    'Palácio Anchieta',
    'Dunas de Itaúnas',
    'Zoo Park da Montanha',
    'Projeto Tamar - Base Guriri',
    'Mosteiro Zen Morro da Vargem',
    'Parque Estadual de Pedra Azul',
    'Morro do Moreno',
    'Farol de Santa Luzia',
    'Convento da Penha',
    'Parque Pedra da Cebola',
    'Ilha de Guriri'    
]

const busca = document.getElementById('busca');
const lista = document.getElementById('sugestoes')

function setList(group) {
    clearList();
    for(const place of group) 
    {
        const item = document.createElement('option')
        const text = document.createTextNode(place)
        item.appendChild(text)
        lista.appendChild(item)
    }
    if(group.length == 0)
    {
        noResults();
    }
}

function clearList() {
    while(lista.firstChild)
    {
        lista.removeChild(lista.firstChild)
    }
}

function noResults() {
    const item = document.createElement('option')
        const text = document.createTextNode('Nenhum resultado encontrado')
        item.appendChild(text)
        lista.appendChild(item)
}

function relevancia(value, search) {
    if (value === search)
    {
        return 2
    }
    else if (value.startsWith(search))
    {
        return 1
    }
    else
    {
        return 0
    }
} 

busca.addEventListener('input', (event) => {
    let value = event.target.value
    if (value && value.trim().length > 0)
    {
        value = value.trim().toLowerCase();
        setList(places.filter(place => {
            return place.toLowerCase().includes(value);
        }).sort((placeA, placeB) => {
            return relevancia(placeB, value) - relevancia(placeA, value)
        }))
    }
    else
    {
        clearList();
    }
})


function buscar () {
    for(var i = 0; i < places.length; i++)
    {
        if(busca.value == places[i])
        {
            destino = i + 1
            saveToStorage()
            open('lugar.html')
            close('index.html')
            close('sobre.html')
            close('categorias.html')
            return 1
        }
    }
    alert('Não foi encontrado nenhum local com a sua busca :/' )
}