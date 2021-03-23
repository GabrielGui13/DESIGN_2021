function removeLi () {
    let lista = prompt('Qual lista voce quer remover?')

    if (lista == 1) document.getElementById('li1').remove()
    else if (lista == 2) document.getElementById('li2').remove()
    else if (lista == 3) document.getElementById('li3').remove()
    else if (lista == 4) document.getElementById('li4').remove()
    else if (lista == 5) document.getElementById('li5').remove()
    else alert('Ocorreu algum erro! Tente novamente.')
}