iniciar_baralho()
referencias = Array.from(Array(56).keys(1, 57))

function iniciar_baralho() {
    var div_baralho = document.getElementsByClassName("baralho")[0]

    var pos_x = 1;
    var pos_y = 1;
    var contador = 0;

    for (let i = 1; i <= 4; i++) {
        pos_y = 1
        for (let j = 1; j <= 13; j++) {
            var carta = document.createElement("div")
            carta.className = contador

            carta.style.display = 'inline'
            var imagem = document.createElement("img")
                //imagem.src = "/res/baralho.png"
            imagem.className = 'img' + contador;

            imagem.style.background = "url(/res/baralho.png) -" + pos_y + "px -" + pos_x + "px"
            imagem.style.backgroundColor = "#fff"
            pos_y += 47
            imagem.style.width = 46 + 'px'
            imagem.style.height = 63 + 'px'


            carta.appendChild(imagem)
            div_baralho.appendChild(carta)
            contador++;
        }
        pos_x += 64
        contador++;
    }

}