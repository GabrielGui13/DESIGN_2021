
function imprimirNome () {
    const input = document.getElementById('nome').value
    const retornarNome = document.getElementById('voltaNome')
    let data = new Date()
    let hora = data.getHours()
    let retornoBom = 'sim'
    
    if (hora >= 5 && hora < 12) {
        retornoBom = 'Bom dia'
    }
    if (hora >= 12 && hora < 18) {
        retornoBom = 'Boa tarde'
    }
    if (hora >= 18 && hora < 5){
        retornoBom = 'Boa noite'
    }
    else if (hora >= -3 && hora < 0) {
        retornoBom = 'Boa noite'
    }

    return retornarNome.innerHTML = `${retornoBom} ${input}`
}

function fundo () {
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

    return document.body.style.background = fundo
}

function imprimirNumeros () {
    const input = document.getElementById('numeros').value
    let numbers = input.split(' ')
    const retornarNumeros = document.getElementById('voltaNumeros')

    return retornarNumeros.innerHTML = numbers[0] * numbers[1]
}