// 논리 연산자

1 || 2 // or
1 && 2 // and
!2 // not

const age = prompt("나이가...?");
const isAge = age > 19;

if (!isAge) {
    console.log("돌아가..")
}

const gender = "F";
const Name = "Jane";
const isAdult = true;

if (gender === "M" && Name === "Mike" || isAdult) {
    console.log("통과")
} else {
    console.log("돌아가.")
}