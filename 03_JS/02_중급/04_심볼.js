// 심볼

// property key: 문자형
const obj = {
    1: "1입니다.",
    false: "거짓",
};
console.log(Object.keys(obj));
// (2) ["1", "false"]
console.log(obj["1"]);
// 1입니다.
console.log(obj["false"]);
// 거짓


// Symbol
// 유일성 보장
const a = Symbol();
const b = Symbol();
console.log(a == b);
// false
console.log(a === b);
// false

const id = Symbol('id');
const id2 = Symbol('id');
console.log(id);
// Symbol(id)
console.log(id2);
// Symbol(id)
console.log(id == id2);
// false
console.log(id === id2);
// false


// property key: 심볼형
const user = {
    name: "Mike",
    age: 30,
    [id]: "myid",
};

console.log(user);
// {name: "Mike", age: 30, Symbol(id): "myid"}

// 탐색 건너뜀 주의.
console.log(Object.keys(user));
// (2) ["name", "age"]
console.log(Object.values(user));
// (2) ["Mike", 30]
console.log(Object.entries(user));
// (2) [Array(2), Array(2)]
for (x in user) {
    console.log(x, user[x]);
};
// name Mike
// age 30

const user1 = {
    name: "Mike",
    age: 30,
};

// 어디다 쓰느냐, 못 덮어씌우게 하려고 할 때 쓴다.
// 혹은, 함수같은 걸 숨기기 위해 쓴다.
const id3 = Symbol('id');
user1[id3] = "myid";
user1.name = "myname"; // 덮어씌워짐
console.log(user1);


// Symbol.for(): 전역 심볼
// 하나의 심볼만 보장받을 수 있음
// 없으면 만들고, 있으면 가져오기 때문
// Symbol 함수는 매번 다른 Symbol 값을 생성하지만,
// Symbol.for 메소드는 하나를 생성한 뒤 키를 통해 같은 Symbol을 '공유'
// 코드 어디서든 사용 가능
const id4 = Symbol.for('id');
const id5 = Symbol.for('id');
console.log(id4 === id5);
// true
console.log(Symbol.keyFor(id4)); // 전역 심볼의 이름 보기
// id


// description
const id6 = Symbol('id 입니다.');
console.log(id.description); // 일반 심볼의 이름 보기
// id


// 숨겨진 Symbol key 보는 법
const id7 = Symbol('id');
const user2 = {
    name: "Mike",
    age: 30,
    [id7]: "myid",
};

console.log(Object.getOwnPropertySymbols(user2)); // 오브젝트의 심볼 키만 보기
// [Symbol(id)]
console.log(Reflect.ownKeys(user)); // 오브젝트의 모든 키 보기
// (3) ["name", "age", Symbol(id)]

// 그런데, 대부분의 라이브러리, 내장함수 등은 이런 메소드를 사용하지 않는다.
// 그러니 걱정말고 유일한 property를 추구하고 싶을 때, 심볼을 사용하면 된다.