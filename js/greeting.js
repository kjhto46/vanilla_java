const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const greeting = document.querySelector("#greeting");
const afterLogin = document.querySelector(".afterId");
const clockDiv = document.querySelector(".clockDiv");
const logoutButton = clockDiv.querySelector(".logout_button");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const usernameThatUser = loginInput.value;
    localStorage.setItem(USERNAME_KEY,usernameThatUser);
    // greeting.innerText = "Hello " + username;
    paintGreeting(usernameThatUser);
    // preventDefault(); 기본동작 막아주기
}

function paintGreeting(username){
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
    afterLogin.classList.remove(HIDDEN_CLASSNAME);
    clockDiv.classList.add('toTop');
}


const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
    //show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit",onLoginSubmit);
} else {
    //show the greetings
    paintGreeting(savedUsername);
}

function handelLogoutClick() {
    event.preventDefault();
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    clockDiv.classList.remove('toTop');
    afterLogin.classList.add(HIDDEN_CLASSNAME);
    localStorage.removeItem(USERNAME_KEY);
    localStorage.removeItem(TODOS_KEY);
}

logoutButton.addEventListener("click", handelLogoutClick);