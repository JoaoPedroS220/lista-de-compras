const taskInput = document.getElementById("textInput");
const taskBtn = document.getElementById("addTaskBtn");
const table = document.getElementById("table");
const clearBtn = document.getElementById("clearListBtn");



taskInput.addEventListener("keydown", (e) => {
    if(e.key === "Enter"){
     adicionarItem();     
    }   
});

clearBtn.addEventListener("click", () => {
  table.innerHTML = "";
})

taskBtn.addEventListener("click", adicionarItem)


function adicionarItem(){
  const inText = taskInput.value.trim();
  //condição pra dectar se eu não escrevi algo no input de texto
  if(!inText){
         alert('Por favor, insira uma tarefa válida.')
     } else {
      const liRowContainer = document.createElement("tr");     //cria os elementos filhos do table
      const liItemContainer = document.createElement("td");
      const liActionContainer = document.createElement("td");
      

      const listItem = document.createElement("p");  //cria o "p" que vai ser usado pra mostrar o testo na tela
      listItem.innerText = inText;
      liItemContainer.appendChild(listItem);
      liRowContainer.appendChild(liItemContainer);
      
      taskInput.value = "";
      
      const removeItem = document.createElement("button"); //cria o elemento button
      removeItem.classList.add('btnRemover'); //cria uma classe pro botão
      liActionContainer.appendChild(removeItem); //faz o button ser um elemento filho do td
      liRowContainer.appendChild(liActionContainer);
      table.appendChild(liRowContainer);
      removeItem.innerText = "remover";
      removeItem.onclick = function(){deletarItem(this)};

      //guia pra colocar o icone
      //criar o icone com createElement
      //adicionar os atributos "style=, class="
      //colocar o icone dentro do botão
      //setAtribute

     function deletarItem(item){
      const fileira = item.parentNode.parentNode;
      fileira.parentNode.removeChild(fileira);
    }

      //  listItem.innerText = inText; //o li vai pegar o texto/conteudo dentro do input de texto
      //  taskList.appendChild(listItem); //vai fazer que o li seja filho do tasklist(ul)
      //  taskInput.value = ""; //limpa o conteudo do campo depois que eu clicar o botão
     }

}






  
  //função para adicionar uma nova tarefa
  // function adicionarTarefas(){
   
  //    const taskText = taskInput.value.trim();
  
  //    if(!taskText.value){
  //     alert('Por favor, insira uma tarefa válida.')
  //    } 
    
  // }