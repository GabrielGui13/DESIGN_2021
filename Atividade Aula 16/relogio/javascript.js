setInterval(() => {
    const relogio = document.getElementById("relogio")
    const horario = new Date()

    let hora = horario.getHours()
    let minuto = horario.getMinutes()
    let segundo = horario.getSeconds()

    if (hora < 10) hora = '0' + hora
    if (minuto < 10) minuto = '0' + minuto
    if (segundo < 10) segundo = '0' + segundo

    return relogio.innerHTML = `${hora}:${minuto}:${segundo}`
}, 500)

function alterarFundo() {
    var fundo ='white'
    const horario = new Date()
    let hora = horario.getHours()

    if (hora >= 5 && hora < 12) {
        fundo = '#87CEFA';
    }
    if (hora >= 12 && hora < 18) {
        fundo = '#F4A460';
    }
    if (hora >= 18 && hora < 5) {
        fundo = '#4B0082';
    }

    return window.document.body.style.backgroundColor = fundo
}

const diaHoraMes = document.getElementById("data")

setInterval(() => {
    const data = new Date()

    let dia = data.getUTCDate()
    let mes = data.getMonth()
    let ano = data.getFullYear()

    switch (mes) {
        case 0: 
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

    return diaHoraMes.innerHTML = `${dia} de ${mes} de ${ano}`
}, 500);