
// const hellos = document.getElementsByClassName("hello");
// 
// console.log(hellos);
// 모든 hello class가 선택(불러와진다)


// getElementsByTagName 안에 있는 요소의 이름을 가지고올수있다.
// 예시 div, p, h1, button, figure 기타 등등
// const title = document.getElementsByTagName("h1");
// console.log(title);



// querySelector는 element를 css 반식으로 검색할 수 있다.
// css 식이기때문에 . # 같은 걸로 잡아야한다.
// querySelector는 같은것들이 있다면 오직 첫번째 element것만 가지고온다.
const title = document.querySelector(".hello h1");

console.log(title);
//  !! querySelectorAll은 Selector안의 조건에 부합하는 모든 element를 가져와준다.
const titles = document.querySelectorAll(".hello h1");

console.log(titles);