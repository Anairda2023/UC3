//Lição 1
//alert("Olá mundo")
//prompt ("Digite um valor para a minha caixa")
function calcularDesconto() {
    let preco = prompt("Digite o preço do produto:")
    let desconto = prompt("Digite o percentual de Desconto:")
    let novopreco = preco - (preco * (desconto / 100))
    console.log(novopreco)
    alert("Novo Preço é " + novopreco)
}

function Celsius() {
    let c = prompt('Digite o valor em Celsius')
    let fahrenheit = (1.8 * c) + 32
    console.log(fahrenheit)
    alert("A temperatura é fahrenheit é " + fahrenheit)
}

function Perimetro() {
    let base = prompt('Digite o valor da base')
    let altura = prompt('Digite o valor da altura')
    let area = base * altura
    let p = (2 * base) + (2 * altura)
    
    alert(`O valor da área é: ${area} e o valor do perímetro é: ${p}`)

}

function Idade() {
    let ano = prompt('Digite o ano do seu nascimento')
    let idade = 2024 - ano
    console.log(idade)
    alert("A sua idade é: " + idade)
}

