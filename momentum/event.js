const title = document.querySelector("div.hello:first-child h1");

// console.dir(title); //dir 전체 속성 보기


title.style.cursor = "pointer";


// addEventListener  event에 대해 listen 한다고한다.
// ()로 바로 실행하는 것이 아닌 아래의 클릭으로 실행되게 하였다.
function handleTitleClick(){
    console.log("title was clicked!");
    title.style.color = "blue";
}
// !! addEventListener로 (클릭 이벤트를 볼것이고 , 그거에 대해 function(handleTitleClick)이 동작하길 원한다)
title.addEventListener("click", handleTitleClick);

function handleMouseEnter(){
    title.innerText = "마우스 호버했군요";
}
title.addEventListener("mouseenter", handleMouseEnter);


function handleMouseLeave(){
    title.innerText = "마우스 어디가";
}
title.addEventListener("mouseleave", handleMouseLeave);