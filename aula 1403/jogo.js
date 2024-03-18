//armazenar o número secreto
let numeroSecreto = gerarNumeroSecreto()
let botao = document.getElementById('reiniciar')
//receber o valor do input
//let numeroChute = document.getElementsByTagName('input')
// o queryselector você manipula o objeto através de um seletor do css. A classe é um seletor do css
let numeroChute = document.querySelector('.container__input')
//Contruir a função para gerar um número aleatório de 1 à 20
let tentativa = 0
function gerarNumeroSecreto(){
    let numero = Math.floor(Math.random()*10)+1
    return numero
}
//Função para verificar se o chute é igual ao número aleatório
function verificarChute(){
    tentativa++
    if (numeroChute.value == numeroSecreto){
        //alert ('Acertou')
        
        let paragrafo = document.querySelector('.texto__paragrafo').innerText = "Você acertou"
        let texto = document.querySelectorAll('h1').innerText = `Acertou`
        

        botao.removeAttribute('disable')
        let verificarChute = document.getElementById('verificarchute')
        
    }else if(numeroChute>numeroSecreto){
        //alert ('o número secreto é menor')
        tentativa++
        //alert(`Quantidade de tentativas = ${tentativa}`)
        document.querySelector('.texto__paragrafo').innerText='O número secreto é menor'
    }else{
        //alert('O número secreto é maior')
        tentativa++
        //alert(`Quantidade de tentativas = ${tentativa}`)
        document.querySelector('.texto__paragrafo').innerText='O número secreto é maior'
    } 

}
function reiniciarJogo(){
    alert('Reiniciando')
    numeroSecreto = gerarNumeroSecreto()
    //botao.setAttribute('disable')
    window.location.reload(true)

}