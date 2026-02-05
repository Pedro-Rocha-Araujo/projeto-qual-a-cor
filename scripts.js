let fundo = document.querySelector("body")
let visualizar = document.querySelector("span")
let botao = document.querySelector("button")
let botaoNomes = document.querySelector("#nomes")
let botaoHexadecimal = document.querySelector("#hexadecimal")

let tipoEscrita = 0






function geradorNumero() {
    const gerador = Math.floor(Math.random()*5)
    console.log(gerador)
    return gerador
}


let coresCodigo = ["#d2d", "#df4", "#5d7", "#a43", "#78f",]
let coresNome = ["Rosa","Amarelo","Verde","Carmesin","Roxo"]



botaoNomes.addEventListener("click", function(event){
    event.preventDefault()
    tipoEscrita = 0
})

botaoHexadecimal.addEventListener("click", function(event){
    event.preventDefault()
    tipoEscrita = 1
})




botao.addEventListener("click", function(){
    let numero = geradorNumero()
    fundo.style.backgroundColor = coresCodigo[numero]
    if(tipoEscrita === 0){
        visualizar.textContent = coresNome[numero]
    }
    else{
        visualizar.textContent = coresCodigo[numero]
    } 
})
