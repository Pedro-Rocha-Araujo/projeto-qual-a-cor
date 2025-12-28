// Atribuindo as variáveis
let gerador = Math.floor(Math.random()*5)
let fundo = document.querySelector("body")
let visualizar = document.querySelector("span")
// Teste no console pra ver se esta batendo
console.log(gerador)
// Listas com os códigos e nomes
let coresCodigo = ["#d2d", "#df4", "#5d7", "#a43", "#78f",]
let coresNome = ["Rosa","Amarelo","Verde","Carmesin","Roxo"]
// Ação de mudar a cor
fundo.style.backgroundColor = (coresCodigo[gerador])

visualizar.textContent = coresNome[gerador]