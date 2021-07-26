// 변수

// var
// 한 번 선언된 변수를 다시 선언할 수 있다.
var var1 = 1;
var var1 = 2;

// var는 선언하기 전에 사용할 수 있다. (호이스팅/hoisting)
console.log(var2); // 그러나, undefined로 나온다. (선언과 초기화는 되었으나(호이스팅), 할당이 되지않아서..)
var var2 = 3;

// 호이스팅:
// 스코프 내부 어디서든 변수 선언은 최상위에 선언된 것처럼 행동
// var, let, const 모두 호이스팅 되나,
// let, const의 경우 TDZ(Temporal Dead Zone) 때문에,
// 먼저 호출하는 경우 사용할 수 없다.

let age = 30;
function showAge() {
    console.log(age);
    // let age = 20; // error, 바로 윗 줄이 TDZ
}

showAge();

// 변수의 생성 과정
// 1. 선언 단계
// 2. 초기화 단계
// 3. 할당 단계

// var
// 1. 선언 및 초기화가 동시에 이루어짐
// 2. 할당

// let
// 1. 선언
// 2. 초기화
// 3. 할당

// const
// 1. 선언 + 초기화 + 할당



// var: 함수 스코프 (function-scoped)
// 함수 지역에서 선언했다면, 다른 지역에서는 사용할 수 없음
var var1 = "nothing";
function functionVar() {
    var var1 = "something";
}

console.log(var1);
// nothing

if (var1 == "nothing") {
    var var5 = "Oh, No";
}
console.log(var5);
// Oh, No


// let, const: 블록 스코프 (block-scoped)
// 함수, if 문, for 문, while 문 등에서 선언했다면, 다른 지역에서는 사용할 수 없음
// block-scoped: {} 안의 영역
let let1 = "abc";
function functionLet() {
    let let1 = "def";    
}

console.log(let1);
// abc

if (let1 == "abc") {
    let let2 = "YES"
}

console.log(let2);
// ReferenceError