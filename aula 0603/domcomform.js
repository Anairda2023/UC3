//Lição 1
//alert("Olá mundo")
//prompt ("Digite um valor para a minha caixa")
function calcularDesconto() {
//     let preco = prompt("Digite o preço do produto:")
//     let desconto = prompt("Digite o percentual de Desconto:")
//     let novopreco = preco - (preco * (desconto / 100))
//     console.log(novopreco)
//     alert("Novo Preço é " + novopreco)
// }

let preco = document.getElementById('preco')
let desconto = document.getElementById('desconto')
let resultado = document.getElementById('resultado01')
let novopreco = preco.value - (preco.value*(desconto.value/100))
resultado.innerText = novopreco

}
let botao01 = document.getElementById("questao01")
botao01.addEventListener('click', calcularDesconto)

function Celsius() {
//     let c = prompt('Digite o valor em Celsius')
//     let fahrenheit = (1.8 * c) + 32
//     console.log(fahrenheit)
//     alert("A temperatura é fahrenheit é " + fahrenheit)
// }
let temperatura = document.getElementById('celsius')
let resultado = document.getElementById("resultado02")
let fahrenheit = (1.8 * temperatura.value) + 32
resultado.innerText = fahrenheit

}
let botao02 = document.getElementById("questao02")
botao02.addEventListener('click', Celsius)


function areaperimetro() {
//     let base = prompt('Digite o valor da base')
//     let altura = prompt('Digite o valor da altura')
//     let area = base * altura
//     let p = (2 * base) + (2 * altura)
    
//     alert(`O valor da área é: ${area} e o valor do perímetro é: ${p}`)
let base = document.getElementById('base')
let altura =document.getElementById('altura')
let area = base.value * altura.value
let perimetro = 2*base.value + 2*altura.value
let resultado =document.getElementById("resultado03")
resultado.innerText = `A área é: ${area} e o perimetro é: ${perimetro}`


}
// function perimetro{
//     let perimetro = (2*base.value) + (2*altura.value)
//     resultado.innerText = perimetro
// }





let botao03 = document.getElementById("questao03")
botao03.addEventListener('click', areaperimetro )

// }

function Idade() {
//     let ano = prompt('Digite o ano do seu nascimento')
//     let idade = 2024 - ano
//     console.log(idade)
//     alert("A sua idade é: " + idade)
// }
const ano = new Date().getFullYear()
let numero = document.getElementById('ano')
let idade = ano - numero.value
let resultado = document.getElementById("resultado04")
resultado.innerText = idade
}
let botao04 = document.getElementById("questao04")
botao04.addEventListener('click', Idade)
