iniciar_baralho()
referencias = Array.from(Array(52).keys(0, 52))

function iniciar_baralho() {
    var div_baralho = document.getElementsByClassName("baralho")[0]

    var pos_x = 1;
    var pos_y = 1;
    var contador = 0;

    for (let i = 1; i <= 4; i++) {
        pos_y = 1
        for (let j = 1; j <= 13; j++) {
            var carta = document.createElement("div")
            carta.className = "div" + contador;
            carta.style.display = "inline"

            var imagem = document.createElement("img")
            imagem.className = "img" + contador;

            imagem.style.background = "url(/res/baralho.png) -" + pos_y + "px -" + pos_x + "px"
            imagem.style.backgroundColor = "#fff"
            pos_y += 47
            imagem.style.width = 46 + "px"
            imagem.style.height = 63 + "px"
            imagem.style.position = "relative"
            imagem.style.marginRight = "-26px"

            carta.appendChild(imagem)
            div_baralho.appendChild(carta)

            contador++;
        }
        pos_x += 64
    }

}


function array_aleatorio(referencias) {
    var controle = referencias.length,
        aux, pos;

    while (controle > 0) {
        pos = Math.floor(Math.random() * controle);
        controle--;
        aux = referencias[controle];
        referencias[controle] = referencias[pos];
        referencias[pos] = aux;
    }
    return referencias;
}

function embaralhar() {
    array_embaralhado = array_aleatorio(referencias)
    for (let i = 0; i < 52; i++) {

        var div = document.getElementsByClassName("div" + i + "")[0]
        var img = document.querySelector(".div" + i + ">img")
        var div_aux = document.getElementsByClassName("div" + array_embaralhado[i] + "")[0]
        var img_aux = document.querySelector(".div" + array_embaralhado[i] + ">img")
        div.appendChild(img_aux)
        div_aux.appendChild(img)
    }
}

function ordenar() {
    for (let i = 0; i < 52; i++) {
        var div = document.getElementsByClassName("div" + i + "")[0]
        var img = document.querySelector(".img" + i + "")
        div.appendChild(img)
    }
}