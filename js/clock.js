const clock = document.querySelector("h2#clock");

// function sayHello() {
//     console.log("hello");
// }

// setInterval(sayHello, 5000); 5000ms 마다 반복적으로 내용이 나옴
//setTimeout(sayHello,5000); //5000ms에 1번 내용이 나옴

function getClock() {
    const dateQuick = new Date();
    //아래 작업 String로 숫자 값으로 불러오는 시간을 string으로 변경 
    //padStart(2, "0") 글내용은 최소 2글자로 작업할거고 빈공간은 0으로 채운다는 뜻
    //padStart(4, "x") 라고 있으면 "1" 이 "xxx1"로 변경된다
    const hoursQuick = String(dateQuick.getHours()).padStart(2, "0");
    const minutesQuick = String(dateQuick.getMinutes()).padStart(2, "0");
    const secondsQuick = String(dateQuick.getSeconds()).padStart(2, "0");
    clock.innerText = (`${hoursQuick}:${minutesQuick}:${secondsQuick}`);
    //
    //clock.innerText = dateQuick.toLocaleTimeString(); //쉽게 출력가능한 기능 뒤에 00초까지 계산되어있음
}
getClock();
setInterval(getClock,1000);