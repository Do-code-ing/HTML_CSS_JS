// 함수 표현식
let showError = function() {
    console.log('error');
}

showError();

let showError2 = () => {
    console.log('error');
}

showError2();

const sayHello = function(name) {
    const msg = `Hello ${name}`;
    console.log(msg);
}

sayHello('Mike');

// 화살표 함수 (많이 쓰이는 중, 익숙해질 것)
const sayHello2 = (name) => {
    const msg = `Hello ${name}`;
    console.log(msg);
}

sayHello2('Mike');

const add = (num1, num2) => (num1 + num2);
console.log(add(1, 2));