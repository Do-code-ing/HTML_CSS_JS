// switch

// if 문과 같지만,
// 케이스가 다양할 경우,
// 코드를 더 간결하게 작성할 수 있다.

let fruit = prompt("무슨 과일을 사고 싶나요?");

switch (fruit) {
    case '사과':
        console.log("100원 입니다.");
        break;
    case '바나나':
        console.log("200원 입니다.");
        break;
    case '키위':
        console.log("300원 입니다.");
        break;
    case '멜론':
    case '수박':
        console.log("500원 입니다.");
        break;
    default: // else
        console.log("그런 과일은 없습니다.")
}