let cores = ['Branco', 'Azul', 'Verde']

let body = document.getElementsByTagName('body')

//body[0].innerHTML += `<p> ${cores[0]} </p>`
//body[0].innerHTML += `<p> ${cores[1]} </p>`
//body[0].innerHTML += `<p> ${cores[2]} </p>`

//for (let i=0; i<cores.length; i++){
//    let p = document.createElement('p')
//    p.textContent = cores[i]
//    body[0].appendChild(p)
    

//}
cores.forEach((cor, index)=>{
    let p = document.createElement('p')
    p.textContent = cor
    console.log(cor, index)
    body[0].appendChild(p)
})

