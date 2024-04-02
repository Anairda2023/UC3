let usuarios = json.parse(localStorage.getItem('user')) ||[]
let senhas = json.parse(localStorage.getItem('senha')) || []
let emails = json.parse(localStorage.getItem('email')) || []
let confirmarsenhas = json.parse(localStorage.getItem('confirmarSenha')) || []


let botaCadastro = document.querySelector('.cadastro form.botao')
botaCadastro.addEventListener('click', cadastrarUser)

function cadastrarUser(){
    
    let usuario = document.getElementById('CadUsuario').value
    let senha = document.getElementById('CadSenha').value
    let email = document.getElementById('email').value
    let confirmarSenha = document.getElementById('confirmarSenha').value
    if(!usuario && !email && !senha && !confirmarSenha){
        alert ('Preencha todos os campos')
        return
    }
    if(senha===confirmarSenha){
        let user = { usuario: usuario, email:email , senha:senha}
        usuarios.push(user)
    }
}

     