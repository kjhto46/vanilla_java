const loginForm = document.getElementById("login-form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");

function onLoginBtnClick() {
    // console.log(loginInput.value);
    // console.log('click');

    const username = loginInput.value;
    // input 에서 최대 길이 설정가능
    // if (username === "") {
    //     console.log("이름을 작성해주세요");
    // } else if(username.length > 15) {
    //     alert("이름이 너무 깁니다.");
    // }


}


loginButton.addEventListener("click",onLoginBtnClick)
