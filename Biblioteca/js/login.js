let usuarios = JSON.parse(localStorage.getItem('users')) || []

// let botaoCadastro = document.querySelector('.cadastro form .botao')
// botaoCadastro.addEventListener('click', cadastrarUser)
let botaoLogin =  document.querySelector('.login form .botao')
botaoLogin.addEventListener('click', Login)

// function cadastrarUser(event){
//     let nomeUser = document.getElementById('cadUsuario').value 
//     let cadEmail = document.getElementById('email').value
//     let senha = document.getElementById('cadSenha').value
//     let confirmarSenha =  document.getElementById('confirmarSenha').value
//     if(!nomeUser && !cadEmail && !senha && !confirmarSenha){
//         alert('Preencha todos os campos, sujeito!!!')
//         event.preventDefault()  
//     }
//     //verificar se existe um usuario ou email já cadastrado
//     if(usuarios.find((u) => u.usuario === nomeUser) || usuarios.find((u) => u.email === cadEmail) ){
//         alert('O nome de usuário ou E-mail já existe!')  
//         event.preventDefault()     
//     }else{
//         if(senha===confirmarSenha){
//             let user = {usuario: nomeUser, email:cadEmail, senha:senha }
//             usuarios.push(user)
//             salvarUser()
//             alert('Usuário cadastrado com sucesso!')
//             nomeUser.value = ""
//             cadEmail.value = ""
//             senha =  ""
//             confirmarSenha = ""
//         }else{
//             alert('Senhas incompativeis')
//         }
//     }     
// }

function Login(event){
   //event.preventDefault()
    let loginUser = document.getElementById('usuario').value
    let loginSenha = document.getElementById('senha').value
    let user = usuarios.find((u) => u.usuario === loginUser) 
    //let senhaUserBanco = usuarios.find((u) => u.senha === loginSenha)
    if(!loginSenha || !loginUser){
        alert('Preencha todos os campos')
        
    }


   

    if(user){
        if (loginSenha==user.senha){
            alert('Bem Vindo!')
            localStorage.setItem('logado', 'sim')
            window.open('http://127.0.0.1:3000/Biblioteca/biblioteca.html')
        }else{ 
            alert('Senha incorreta')
        }
    }else{    
        
        alert('Cadastro não encontrado!')
        
    }
}




function salvarUser(){
    localStorage.setItem('users', JSON.stringify(usuarios))
    
}