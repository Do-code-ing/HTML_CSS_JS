// 형변환

String()
Number()
Boolean()

const mathScore = prompt("수학 몇 점?");
const engScore = prompt("영어 몇 점?");
const result = (mathScore + engScore) / 2;
console.log(result);
// 4540
// 자동 형변환, 좋지 않음
// 명시적 형변환을 할 것

// 주의사항
Number(null)
// 0
Number(undefined)
// NaN