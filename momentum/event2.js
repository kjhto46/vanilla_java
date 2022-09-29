const h1 = document.querySelector("div.hello:first-child h1");

// console.dir(h1); //dir 전체 속성 보기


h1.style.cursor = "pointer";

// 이전에 했던 방식을 event를 지정해서 function이 나오게 할수있다.
function handleMouseLeave(){
    h1.innerText = "마우스 어디가";
}
// h1.addEventListener("mouseleave", handleMouseLeave);
h1.onmouseenter = handleMouseLeave; // on~이 내용에 맞추면 동일한 효과가 나타난다.
// 하지만 니코선생은 addEventListener을 선호한다. 이유는 removeEventListener로 even Listener를 제거 할수있기때문이다.


// window 변경 resize event 예시
function handleWindowResize(){
    document.body.style.backgroundColor = "tomato";
};
window.addEventListener("resize", handleWindowResize);

// window 변경 copy (컨트롤 + c) event 예시
function handleWindowCopy(){
    alert("복사하셨습니다.");
};
window.addEventListener("copy", handleWindowCopy);

// window event 와이파이 연결됐는지 예시

function handleWindowOffline(){
    alert("SOS 와이파이 연결부탁.");
};
function handleWindowOnline(){
    alert("SOS 와이파이 연결됨.");
};
window.addEventListener("offline", handleWindowOffline);

window.addEventListener("online", handleWindowOnline);