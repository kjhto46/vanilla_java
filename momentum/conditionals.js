// const age = prompt("나이를 입력해주세요");

// console.log(typeof age);

// ? typeof 란 안에 내용이 무엇인지 확인 할수있음. ex "15"는 string, 15는 number

// ? "15" -> 15 로 바꾸는 법을 공부할 예정
// ? "15"는 string 값인데 이거를 number값으로 변경 가능함.(당연한거)

// parseInt()
// converts a string to an integer.

// ? 아래처럼 차이를 확인할 수 있다.
// console.log(typeof "15", typeof parseInt("15"));
// console.log(age, parseInt(age));


// ? 안에서 밖으로 적용이 되기때문에 prompt 인 팝업 먼저되고 그거의 값을 number로 바꾼다.
const age = parseInt(prompt("나이를 입력해주세요."));

// ? (NaN는 no a number) 
// ? 아래값에 숫자가 나오면 false로 나오는데 이는
// ? 숫자가 아닌것이 아니라는 뜻으로 false는 거임 즉 숫자라는 뜻임 
console.log(isNaN(age));

// ? if 뒤에 조건문(condition)은 boolean 이여야한다(ture of false)
if(isNaN(age) || age < 0) {
    console.log("정상적인 나이를 숫자로 입력해주세요.");
    // condition === true
} else if (age < 18) {
    console.log("당신은 너무 어립니다.");

} else if (age >= 18 && age <= 50) {
    console.log("술마셔도 됩니다.");

} else if (age > 50 && age <= 80) {
    console.log("술 마시는것보다 운동을 하세요.");

} else if (age === 100) {
    console.log("당신은 현명하네요.");
    // ? 아래의 것과 중복되기때문에 순서를 잘 생각해서 할것

} else if (age > 80) {
    console.log("건강하세요.");

} else {
    console.log("술마시기에는 건강을....");
}
// 앞에 내용과 && 뒤에 내용이 둘다 true여야 결과가 true이다.
// AND operator (연산자)
//  || 이거는 OR 둘중에 하나이상이 true라면 결과가 true다

//   ===는 일치연산저, 값과 값의 종류(Data Type)가 모두 같은지를 비교
//   ==는 동등연산자, 값만 같으면 true
//   !==는 같지 않음