function calcularNumeros() {
    var numeros = prompt("Digite dois numeros (X X)")
    var numerosSeparados = numeros.split(' ')
    var x1 = numerosSeparados[0]
    var x2 = numerosSeparados[1]

    if (isNaN(x1) == false && isNaN(x2) == false) {
        alert(`${x1} + ${x2} = ${parseInt(x1) + parseInt(x2)}`)
        alert(`${x1} - ${x2} = ${x1 - x2}`)
        alert(`${x1} * ${x2} = ${x1 * x2}`)
        alert(`${x1} / ${x2} = ${x1 / x2}`)
    }
    else alert("Algum dos valores nao e um numero")

    return
}