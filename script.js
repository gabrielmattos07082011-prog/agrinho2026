let valor = 0;

function adicionar(pontos){

    valor += pontos;

    if(valor > 100){
        valor = 100;
    }

    document.getElementById("barra").style.width = valor + "%";

    document.getElementById("resultado").innerHTML =
    "Sustentabilidade: " + valor + "%";

    if(valor === 100){
        document.getElementById("resultado").innerHTML =
        "🎉 Fazenda 100% Sustentável!";
    }
}
