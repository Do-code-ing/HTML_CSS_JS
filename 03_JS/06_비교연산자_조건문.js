// 비교 연산자

const a = 1;
const b = "1";
console.log(a == b);
// true, 동등연산자
console.log(a === b);
// false, 일치연산자 (타입까지 비교)


// 조건문
const age = Number(prompt("나이를 입력하세요."))
if (age > 19) {
    console.log("환영합니다.")
} else if(age === 19) {
    console.log("수능 잘 치세요.")
} else {
    console.log("안녕히 가세요.")
}