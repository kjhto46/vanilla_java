// const loginForm = document.getElementById("login-form");
// const loginInput = loginForm.querySelector("input");
// const loginButton = loginForm.querySelector("button");



// 1번 강의 내용 단순한 value값을 불러오기였다.
// const loginInput = document.querySelector("#login-form input");
// const loginButton = document.querySelector("#login-form button");

// function onLoginClick() {
//     console.dir(loginInput);
//     console.log("click");
//     console.log(loginInput.value);
// }

// loginButton.addEventListener("click",onLoginClick);

// 2번 강의 내용 단순한 value값을 불러오기였다.
const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");

function onLoginClick() {
    const username = loginInput.value;
    if (username === "") {
        alert("이름을 작성해주세요");
    } else if(username.length > 10) {
        alert("이름이 너무 길잖슴");
    }
}

loginButton.addEventListener("click",onLoginClick);