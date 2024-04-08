function acessarLivros() {
    let estarLogado = localStorage.getItem('logado')
    console.log(estarLogado)
    
    if (estarLogado != null){
        window.open('http://127.0.0.1:3000/Biblioteca/livro.html')
        
    }else{
        alert ('Você precisa se logar')
        window.open('http://127.0.0.1:3000/Biblioteca/biblioteca.html')
    }

}

let acessarLivro = document.getElementById('verificarLivro')
acessarLivro.addEventListener("click", acessarLivros)
// let usuarios  = JSON.parse(localStorage.getItem('users')) || []



// let botaoCadastro = document.querySelector('.cadastro')
// botaoCadastro.addEventListener('click', cadastrarUser)
// let botaoLogin =  document.querySelector('.login')
// botaoLogin.addEventListener('click', Login)

// function cadastrarUser(event){
//      let nomeUser = document.getElementById('cadUsuario').value 
//      let senha = document.getElementById('cadSenha').value
//      let confirmarSenha =  document.getElementById('confirmarSenha').value
//      if(!nomeUser && !senha && !confirmarSenha){
//      alert('Preencha todos os campos')
//      event.preventDefault()  
//      }

//     if(usuarios.find((u) => u.usuario === nomeUser) ){
//     alert('O nome de usuário já existe')  
//     event.preventDefault()     
//     }else{
//     if(senha===confirmarSenha){
//      let user = {usuario: nomeUser,  senha:senha }
//      usuarios.push(user)
//      salvarUser()
//      alert('Usuário cadastrado com sucesso!')
//      nomeUser.value = ""
            
//             senha =  ""
//             confirmarSenha = ""
//         }else{
//         alert('Senhas incompativeis')
//         }
//      }     
// }

// function Login(event){

//     let loginUser = document.getElementById('usuario').value
//     let loginSenha = document.getElementById('senha').value
//     let user = usuarios.find((u) => u.usuario === loginUser) 
//     //let senhaUserBanco = usuarios.find((u) => u.senha === loginSenha)

//     if(!loginUser || !loginSenha){
//         alert('Preencha todos os campos')
//         return
//     }

//     if(user){
//         if(loginSenha===user.senha){
//             alert('Bem Vindo!')
//             window.open('https://www.google.com/')
        
//         }else{
//             alert('Senha incorreta') 
//             event.preventDefault()   
//         }
//     }else{
//         alert('Usuário não encontrado.') 
//         event.preventDefault()
//     }  
// }




// function salvarUser(){
//     localStorage.setItem('users', JSON.stringify(usuarios))
// }
