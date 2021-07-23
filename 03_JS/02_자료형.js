// 자료형

// 문자열 자료형
const name1 = "Mike";
const name2 = 'Mike';
const name3 = `mike`;

const massage1 = "I'm a boy.";
const massage2 = 'I\'m a boy.';

const massage3 = `My name is ${name1}`; // Python의 f"{}"와 비슷한듯
console.log(massage3);

const massage4 = `나는 ${20+7}살 입니다.`;
console.log(massage4);


// 숫자형
const age = 30;
const PI = 3.14;


// Boolean
const a = true;
const b = false;


// null 과 undefined
let age1;
console.log(age1)
// undefined
let user = null;
console.log(user)
//null


// typeof 연산자 (Python에서 type()함수와 비슷한듯)
const name4 = "Mike";
console.log(typeof 3)
// number
console.log(typeof name4)
// string
console.log(typeof true)
// boolean
console.log(typeof "xxx")
// string
console.log(typeof null)
// object (null != 객체, 자바스크립트의 오류인데 하위버젼과의 호환을 위해 수정 X)
console.log(typeof undefined)
// undefined