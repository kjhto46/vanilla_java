const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");

function onLoginSubmit(event) {
    event.preventDefault();
    console.log(event);
    console.log(loginInput.value);
    // preventDefault(); 기본동작 막아주기
}

loginForm.addEventListener("submit",onLoginSubmit);
