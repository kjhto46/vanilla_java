const clockTitle = document.querySelector(".js-clock");


function getClock() {
    const xmasTime = new Date("2022-12-25 00:00");
    const dateTime = new Date();
    const countDown = xmasTime - dateTime; //ms number 값
    //일,시간,분,초
    const countDownDay = Math.floor(countDown / (1000*60*60*24));
    const countDownHour = Math.floor((countDown / (1000*60*60)) % 24);
    const countDownMin = Math.floor((countDown / (1000*60)) % 60);
    const countDownSec = Math.floor(countDown / 1000 % 60);
    // String 변환 (시간,분,초)
    const dayQuick = String(countDownDay);
    const hoursQuick = String(countDownHour).padStart(2, "0");
    const minutesQuick = String(countDownMin).padStart(2, "0");
    const secondsQuick = String(countDownSec).padStart(2, "0");

    clockTitle.innerText = (`${dayQuick}d ${hoursQuick}h ${minutesQuick}m ${secondsQuick}s`);
}

getClock();
setInterval(getClock,1000);