const mes = 'dezembro'.toLowerCase()
let numeroMes = 13

function mesFinal () {
    
    switch (mes) {
        case 'janeiro': 
            numeroMes = 1 
            break
        case 'fevereiro': 
            numeroMes = 2 
            break
        case 'março': 
            numeroMes = 3 
            break
        case 'abril': 
            numeroMes = 4 
            break
        case 'maio': 
            numeroMes = 5 
            break
        case 'junho': 
            numeroMes = 6 
            break
        case 'julho': 
            numeroMes = 7 
            break
        case 'agosto': 
            numeroMes = 8 
            break
        case 'setembro': 
            numeroMes = 9 
            break
        case 'outubro': 
            numeroMes = 10 
            break
        case 'novembro': 
            numeroMes = 11 
            break
        case 'dezembro': 
            numeroMes = 12 
            break
        default:
            break
    }
    return numeroMes
}

numeroMes = mesFinal()

function trimestre (tri) {
    if (numeroMes > 0 && numeroMes <= 3) tri = 'primeiro'
    else if (numeroMes >= 4 && numeroMes <= 6) tri = 'segundo'
    else if (numeroMes >= 7 && numeroMes <= 9) tri = 'terceiro'
    else if (numeroMes >= 10 && numeroMes <= 12) tri = 'quarto'

    return tri
}

function final () {
    if (numeroMes > 12) console.log('Mes invalido')
    else console.log(`O ${mesFinal()}° mes do ano eh ${mes}, e esta no ${trimestre()} trimestre`)
}

final()
