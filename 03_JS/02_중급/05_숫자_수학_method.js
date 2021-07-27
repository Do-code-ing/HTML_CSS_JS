// 숫자, 수학 method (Number, Math)

// toString();
// 10진수 -> 2진수/16진수
let num1 = 10;
console.log(num1.toString());
// 10
console.log(num1.toString(2));
// 1010

let num2 = 255;
console.log(num2.toString(16));
// ff


// Math
console.log(Math.PI);
// 3.141592653589793

let num3 = 5.1;
let num4 = 5.7;
console.log(Math.ceil(num3));
// 6
console.log(Math.ceil(num4));
// 6

console.log(Math.floor(num3));
// 5
console.log(Math.floor(num4));
// 5

console.log(Math.round(num3));
// 5
console.log(Math.round(num4));
// 6

let userRate = 30.1234;
console.log(userRate.toFixed(2));
// 30.12
console.log(userRate.toFixed(0));
// 30
console.log(userRate.toFixed(6));
// 30.123400
// 문자열로 반환되니 주의

let x = Number('x');
console.log(isNaN(x));
// true

let margin = "10px";
console.log(parseInt(margin));
// 10
// 숫자가 아닌것이 나타날 때까지를 숫자로 반환
let redColor = "f3";
console.log(parseInt(redColor, 16));
// 243
// 두 번째 인수로 몇 진법인지를 받는다.

let padding = "18.5%";
console.log(parseFloat(padding));
// 18.5

console.log(Math.random());
// ex) 0.9579893354399927
// 0 ~ 1 사이의 무작위 숫자 반환 (0과 1은 제외)
console.log(Math.floor(Math.random()*100)+1);
// ex) 13
// 1 ~ 100 사이의 무작위 숫자 반환

console.log(Math.max(1, 4, -1, 5, 10, 9, 5.54));
// 10
console.log(Math.min(1, 4, -1, 5, 10, 9, 5.54));
// -1
console.log(Math.abs(-1));
// 1
console.log(Math.pow(2, 10));
// 1024
console.log(Math.sqrt(16));
// 4