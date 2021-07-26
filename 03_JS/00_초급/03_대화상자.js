// 대화상자

// alert: 알려줌
// prompt: 입력받음
// confirm: 확인받음

const name1 = prompt("이름을 입력하세요.");
alert("환영합니다." + name1 + "님");
const date = prompt("예약일을 입력해주세요.", "2021-07-") // default 값 설정 가능

const isAdult = confirm("당신은 성인입니까?");
console.log(isAdult)
// true

// 단점
// 1. 스크립트 일시정지
// 2. 스타일링 X