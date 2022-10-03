const  rendomForm = document.querySelector(".rendomForm");
const  maxNum = rendomForm.querySelector(".maxNum");
const  chooseNum = rendomForm.querySelector(".chooseNum");
// innerText
const ptext = document.querySelector(".paint");
const resultText = document.querySelector(".result");

function handleRendomSubmit(event){
    event.preventDefault();
    const maxTopNum = maxNum.value;
    const chooseTopNum = chooseNum.value;
    const randomNum = Math.ceil(Math.random() * maxTopNum) 

    // 선택, 기계 선택 텍스트
    ptext.innerText = `You chose: ${chooseTopNum}, the machine chose: ${randomNum}`;
    // if문 조건 1,2
    if (maxTopNum <= 0) {
        alert("please write more then 0.");
    } else if (parseInt(chooseTopNum) !== randomNum) {
        resultText.innerText = "You Lose!";
    } else if (parseInt(chooseTopNum) === randomNum) {
        resultText.innerText = "You Win!";
    }
}

rendomForm.addEventListener("submit", handleRendomSubmit);