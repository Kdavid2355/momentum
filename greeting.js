const form = document.querySelector(".js-form"),
  input = form.querySelector("input"),
  greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser",
  SHOWING_CN = "showing";

function paintGreeting(text){
    form.classList.remove(SHOWING_CN);  // SHOWING_CN 그냥 보기 편하라고 해놓은것임. CSS showing 가져오는것임. "showing" 넣어도 됨.
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `Hello ${text}`;
}

function SaveName(text){
    localStorage.setItem(USER_LS, text)
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = input.value;
    paintGreeting(currentValue);
    SaveName(currentValue);
}


function askForName(){
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit", handleSubmit);
}


function loadName(){
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser === null)  {
        // he is not.
        askForName();
    } else {
        // he is.
        paintGreeting(currentUser);
    }
}


function init() {
    loadName();

}

init();