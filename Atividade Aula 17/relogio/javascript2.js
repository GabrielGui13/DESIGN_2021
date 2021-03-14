setInterval(() => {

    const relogio = document.getElementById("relogio")
    let data = new Date();

    let hora = data.getHours().toString().padStart(2, '0')
    let minuto = data.getMinutes().toString().padStart(2, '0')
    let segundo = data.getSeconds().toString().padStart(2, '0')
    return relogio.innerHTML = `${hora}:${minuto}:${segundo}`
    
}, 1000)


setInterval(() => {

    const setData = document.getElementById("data")
    let data = new Date();

    let ano = data.getFullYear().toString()
    let mes = data.getMonth()
    let dia = data.getDate().toString().padStart(2, '0')

    switch (mes) {
        case '0': 
            mes = 'Janeiro'
            break
        case 1:
            mes = 'Fevereiro'
            break
        case 2:
            mes = 'Março'
            break
        case 3: 
            mes = 'Abril'
            break
        case 4:
            mes = 'Maio'
            break
        case 5:
            mes = 'Junho'
            break
        case 6: 
            mes = 'Julho'
            break
        case 7:
            mes = 'Agosto'
            break
        case 8:
            mes = 'Setembro'
            break
        case 9: 
            mes = 'Outubro'
            break
        case 10:
            mes = 'Novembro'
            break
        case 11:
            mes = 'Dezembro'
            break
    }

    return setData.innerHTML = `${dia} de ${mes} de ${ano}`

}, 1000)

setInterval (() => {

    let data = new Date()
    let hora = data.getHours()
    let fundo = 'white'
    
    if (hora >= 5 && hora < 12) {
        fundo = '#87CEFA';
    }
    if (hora >= 12 && hora < 18) {
        fundo = '#F4A460';
    }
    else {
        fundo = '#4B0082'
    }

    return document.getElementById('container').style.background = fundo
}, 1000)