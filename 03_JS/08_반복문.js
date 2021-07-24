// 반복문

// for 문 (초기값, 한계값, i증가)
for (let i = 0; i < 10; i++) {
    console.log(i);
}

// while 문
let i = 0;
while (i < 10) {
    console.log(i);
    i++;
}

// do while 문 (적어도 코드가 한 번은 실행됨/거의 사용안하는듯)
i = 0;
do {
    i++;
} while (i < 10) {
    console.log(i);
    i++;
}

// break, continue
while (true) {
    let answer = confirm("계속 할까요?")
    if (!answer) {
        console.log("흥")
        break;
    }
}