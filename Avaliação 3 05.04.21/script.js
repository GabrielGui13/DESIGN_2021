$(document).ready(function() {
    var aux = 1
    $("#sorteio").click(function() {
        var x = Math.floor((Math.random() * 10) + 1);

        $("#resultado").text(x);
        $("ul").append(`<li> Sorteio #${aux} = ${x}</li>`);
        aux++;
    });
});