let fundo = document.querySelector("body")
let visualizar = document.querySelector("span")
let botao = document.querySelector("button")

function geradorNumero() {
    const gerador = Math.floor(Math.random()*5)
    console.log(gerador)
    return gerador
}

let coresCodigo = ["#d2d", "#df4", "#5d7", "#a43", "#78f",]
let coresNome = ["Rosa","Amarelo","Verde","Carmesin","Roxo"]

botao.addEventListener("click", function(){
    let numero = geradorNumero()
    fundo.style.backgroundColor = coresCodigo[numero]
    visualizar.textContent = coresNome[numero]
})
