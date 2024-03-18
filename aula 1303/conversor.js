let real = document.getElementById('real')

function calcular() {
    let euro = (real.value) / 5.44
    console.log(euro)
    let resultado = document.getElementById('Resultado')
    resultado.innerText = `O valor em euro é: ${euro.toFixed(2)}`
}
let botao = document.getElementById('converter')
botao.addEventListener('click', calcular)
