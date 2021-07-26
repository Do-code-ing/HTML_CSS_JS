// 객체

const superman = {
    name: 'clark',
    age: 33,
}

// 접근
superman.name;
superman['age'];
// 추가
superman.gender = 'male';
superman['hairColor'] = 'black';
// 삭제
delete superman.hairColor;


// 단축 프로퍼티
function makeObject(name, age) {
    return {
        name, // 변수명으로 바로 만들 수 있음
        age,
        hobby: "football",
    };
}
const Mike = makeObject('Mike', 30);
console.log(Mike);
// {name: "Mike", age: 30, hobby: "football"}


// 프로퍼티 존재 여부 확인
const superman3 = {
    name: 'clark',
    age: 33,
}
console.log(superman.birthday)
// undefined
console.log('birthday' in superman3)
// false
console.log('age' in superman3)
// true


// for in 반복문(을 통한 객체 순회)
for (let key in superman) {
    console.log(key);
    console.log(superman[key]);
}