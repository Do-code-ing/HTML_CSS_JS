// 함수

function showError() {
    alert("에러가 발생했습니다. 다시 시도해주세요.");
}

showError()


function sayHello(name = 'friend') { // default 값 설정 가능
    let msg = "Hello";
    if (name) {
        msg += `, ${name}`;
    }
    console.log(msg);
}

sayHello();
sayHello("Mike");
sayHello("Tom");
sayHello("Jane");

function add(num1, num2) {
    return num1 + num2;
}

const result = add(2, 3);
console.log(result);