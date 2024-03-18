let listaDeTarefas = []
let lista = document.getElementById('lista')
let tarefa = document.getElementById('tarefa')
let botao = document.getElementById('adicionar')

function add(event) {
    event.preventDefault()
    if (tarefa.value){
        listaDeTarefas.push(tarefa.value)
        tarefa.value=""
        atualizarlista()
    }else{
        alert('Preencha o campo')
    }
}    
    function atualizarlista(){

    lista.innerHTML=""
    listaDeTarefas.forEach((tarefa,index)=>{
    let item = document.createElement('li')
    item.textContent = tarefa
    
    //item.addEventListener('click', concluido)
    let excluir = document.createElement('button')
    excluir.textContent = "remover"
    excluir.classList.add("botaoRemover")
    excluir.addEventListener('click', function(){remover(index)})
    item.appendChild(excluir)
    lista.appendChild(item)
    
    })
}

    


botao.addEventListener('click', add)
    
function concluido(){
    this.classList.add("concluido")

}
function remover(index){
    listaDeTarefas.splice(index,1)
    atualizarlista()

   }