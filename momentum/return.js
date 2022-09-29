
const age = 96;

function calculateKrAge(ageOfForeigner) {
    return ageOfForeigner + 2;
};

const krAge = calculateKrAge(age);

console.log(krAge);
// 리턴으로 돌아다니는 모습을 볼수있다.

// return은 값을 보내는 역활을 한다.
// 예시 주스를 function으로 만들었는데 그것을 꺼내먹을 수있게 해주는게 해주는것
// return을 하지않으면 주스가 만들어진것만 불러서 볼수있는 느낌이라고 생각하면된다.



const calculator ={
    add: function(a, b) {
        return a + b;
    },
    minus:function(a,b) {
        return a - b;
    },
    times:function(a,b) {
        return a * b;
    },
    divide:function(a,b) {
        return a / b;
    },
    power:function(a,b) {
        return a ** b;
    },
};

const plusResult = calculator.add(2,3);
console.log(plusResult);

const minusResult = calculator.minus(plusResult, 10);
const timeResult = calculator.times(10, minusResult);
const divideResult = calculator.divide(timeResult, minusResult);
const powerResult = calculator.power(divideResult, minusResult);



// const calculator ={
//     add: function(a, b) {
//         console.log(a + b);
//     },
//     minus:function(a,b) {
//         console.log(a - b);
//     },
//     divide:function(a,b) {
//         console.log(a / b);
//     },
//     power:function(a,b) {
//         console.log(a ** b);
//     },
// };

// calculator.add(5, 1);
// calculator.minus(15, 7);
// calculator.divide(65, 7);
// calculator.power(5, 12);

// 식이 다보이게 제작
// const calculator = {
//     plus: function (a, b) {
//         console.log(a + "+" + b + "=" + a + b);
//     },
//     minus: function (a, b) {
//         console.log(a + "-" + b + "=" + a - b);
//     },
//     multiple: function (a, b) {
//         console.log(a + "*" + b + "=" + a * b);
//     },
//     divide: function (a, b) {
//         console.log(a + "/" + b + "=" + a / b);
//     },
//     squareRoot: function (a) {
//         console.log(a + "^" + 2 + "=" + a * a);
//     }
// };
// calculator.plus(5, 1);
// calculator.minus(15, 7);
// calculator.multiple(65, 7);
// calculator.divide(5, 12);
// calculator.squareRoot(15, 7);