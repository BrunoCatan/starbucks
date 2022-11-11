const imagem = document.querySelector(".starbucks")
const circulo = document.querySelector(".circulo")

function trocarImagem(endereco) {
    imagem.src = endereco
}

function trocarCor(cor) {
    circulo.style.background = cor
}
