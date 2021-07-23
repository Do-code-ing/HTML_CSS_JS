// 변수
name = "Mike";
age = 30;
// name = "Mike"; 의 경우 전역 변수와 지역 변수가 혼동할 여지가 있으므로 사용에 주의 
// class = "수업"; 의 경우, 예약어로써, 이미 JS에서 선언된 이름이므로 사용할 수 없음

// alert() // 경고창 띄우기
console.log // 로그 띄우기

// 변수 선언에 있어서 보장할 수 없기 때문에,
// let, const를 사용해야 한다.
let _name = "Mike";
// 1000 lines
// let _name = "google";
// 사용하려할 때, 오류가 뜬다. Uncaught SyntaxError: Identifier '_name' has already been declared

// let의 경우, 의도적으로 사용하지 않음으로써 변수 선언을 다시할 수 있다.
// 최초로 사용하는 모든 변수에 let을 사용함으로써 그 변수명이 중복되는지 확인할 수 있다.

// const: 절대로 바뀌지 않는 상수 (수정 X)
// 파이, 최대값, 생일 등
// 대문자로 선언하는게 좋음 (대문자면 상수임을 약속)
const ABC = "안녕하세요."

// 변하지 않는 값은 const
// 변할 수 있는 값은 let으로 선언하기