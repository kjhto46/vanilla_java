const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";

function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    // greeting.innerText = "Hello " + username;
    greeting.innerText = `Hello ${username}`; // 1번 옆 ` 버튼 취향차이
    greeting.classList.remove(HIDDEN_CLASSNAME);
    // preventDefault(); 기본동작 막아주기
}


loginForm.addEventListener("submit",onLoginSubmit);
link.addEventListener("click",handleLinkClick);
