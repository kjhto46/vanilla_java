const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");

const link = document.querySelector("a");

function onLoginSubmit(event) {
    event.preventDefault();
    console.log(event);
    console.log(loginInput.value);
    // preventDefault(); 기본동작 막아주기
}

function handleLinkClick(event){
    event.preventDefault(); //기본동작 막음
    console.log(event);
    alert("클릭"); //<!-- 여기서 기본동작이 잠시 멈춘뒤 확인을 눌렀을때 다시 작동한다.
}

loginForm.addEventListener("submit",onLoginSubmit);
link.addEventListener("click",handleLinkClick);
