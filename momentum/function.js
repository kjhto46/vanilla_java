// function 이란 뭘까 계속 반복해서 사용할 수 있는 코드 조각

// function 특정 코드를 캡슐화해서 여러번 실행할수 있게해준다.

// 이런 반복적인 코드는 좋지 않다. 이런 반복을 줄이고 싶다.
console.log("Hello my name is junhee");
console.log("Hello my name is dal");
console.log("Hello my name is min");
console.log("Hello my name is hee");
console.log("Hello my name is flymn");

function sayHello2(){
    console.log("Hello! my name is ");
};

// () 이 기호가 코드를 실행시키는 버튼이라고 생각하자.
sayHello2();
sayHello2();
sayHello2();
sayHello2();

// argument 인수,는 function을 실행할때 정보를 보낼수 있다.
// function sayHello(){
//     console.log("Hello! my name is ");
// };
// 
// console.log(); // 이러면 아무정보가 없다 내용이 비어있어서
// console.log("hello"); //이러면 정보가 들어가서 내용이 실행이 됨

//sayHello("junhee");  뒤에 이런 내용을 추가하는 반복 function을 만들고싶음

// 인수를 받기 위해서 함수를 선언할 때 function 함수명(argument) {
//     
// }; 를 작성한다. argument는 여러개를 받을 수 있다.
function sayHello(nameOfPerson, age){
     console.log("Hello my name is " + nameOfPerson + " and I'm " + age);
};

sayHello("nico", 20);
sayHello("junhee", 27);
sayHello("tony", 23);
sayHello("razri", 24);
//
function plus(fristNumber, secondNumber) {
    console.log(fristNumber + secondNumber);
};
function divide(a, b) {
    console.log(a / b);
};

// NaN none a number 숫자가 아니라는 뜻
plus(8,60);
divide(90,10);
plus(5,5);

const player = {
   name: "junhee",
   sayHelloTo: function(otherName) {
       console.log("hello! " + otherName + " nice to meet you." + " my name is " + player.name)
   },
};

console.log(player.name);
player.sayHelloTo("nico");
player.sayHelloTo("lynn");