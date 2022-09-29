// if 랑 else를 통한 js 설정
const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick(){
    // 이방법은 모든 class를 삭제 시킨다. (그래서 안쓴다)
    // if (h1.className === "active") {
    //     h1.className = "";
    // } else {
    //     h1.className = "active";
    // }

    // classList로 class 추가 빼기 작업
    // contains html에 element의 .class 에 포함되어 있는지 알려준다.
    // const clickedClass = "active";
    // if (h1.classList.contains(clickedClass)) {
    //     h1.classList.remove(clickedClass);
    // } else {
    //     h1.classList.add(clickedClass);
    // }

    //단순하게 on off처럼 나올때는 toggle을 사용한다.
    h1.classList.toggle("active");

}

h1.addEventListener("click", handleTitleClick);
