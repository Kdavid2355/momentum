const toDoForm = document.querySelector(".js-toDoForm");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = 'toDos';

function paintToDo(text){
    console.log(text);
    console.log("3");
}

function handleSubmit (event){
    console.log("2");
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);

}


function loadToDos(){
    const toDos = localStorage.getItem(TODOS_LS);
    if(toDos !== null){

    } 
}


function init(){
    loadToDos();
    toDoForm.addEventListener("submit", help);
    
    console.log("1");
}

init();

function init(){
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit);
    
    console.log("1");
}

init();
