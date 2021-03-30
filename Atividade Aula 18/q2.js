let titulo = document.title
document.getElementById("titulo").innerHTML = titulo

function trocarTitulo() {
    var ask = prompt("Voce deseja alterar o titulo da pagina? (S) ou (N)")

    if (ask.toUpperCase() == "N") {
        alert("Ok, você é quem manda!... vou deixar como está.")
        return
    }    
    else if (ask.toUpperCase() == "S") {
        var mudanca = prompt("Digite o novo titulo")
        document.getElementById("titulo").innerHTML = mudanca
        return document.title = mudanca 
    }
    else alert("Houve algum erro! Tente novamente")
}