let p = document.getElementsByTagName("p")

console.log(p.length)

document.getElementById("resultgeral").innerText=`Total = ${p.length}`

let article = document.getElementsByTagName("article")
let paragrafosArticle = article[0].getElementsByTagName("p")

document.getElementById("resultarticle").innerHTML=`O número de parágrafos no article é ${paragrafosArticle.length}`


