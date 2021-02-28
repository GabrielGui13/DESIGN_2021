function alterarFundo () {

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

    return fundo
}

console.log(alterarFundo())