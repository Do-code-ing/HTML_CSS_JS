// 객체 메소드 (Object methods), 계산된 프로퍼티 (Computed property)

// Computed property
let a = "age";

const user = {
    name: "Mike",
    [a]: 30, // age: 30
};

// 식 자체를 넣는 것도 가능함
const user2 = {
    [1+4]: 5,
    ["안녕"+"하세요"]: "Hello",
};


// Object Methods

// 1. 객체 복제
// Object.assign({}, object1, object2, ...)
// {} + object1 + object2 + ...
// {} 에 object1을 덮어 씌우고, 그 위에 object2를 덮어 씌우고, ...
const cloneUser = user; // X

const cloneUser2 = Object.assign({}, user);
console.log(cloneUser2);
// {name: "Mike", age: 30}

const cloneUser3 = Object.assign({gender: "male"}, user);
console.log(cloneUser3);
// {gender: "male", name: "Mike", age: 30}

const cloneUser4 = Object.assign(user, {name: "Tom"});
console.log(cloneUser4);
// {name: "Tom", age: 30}

const name = {
    name: "Mike",
};
const info1 = {
    age: 30,
};
const info2 = {
    gender: "male",
};
const newUser = Object.assign(name, info1, info2);
console.log(newUser);
// {name: "Mike", age: 30, gender: "male"}

// 2. 키 배열 반환
// Object.keys(object)
const user3 = {
    name: "Mike",
    age: 30,
    gender: "male",
};
console.log(Object.keys(user3));
// (3) ["name", "age", "gender"]

// 3. 값 배열 반환
// Object.values(object)
console.log(Object.values(user3));
// practice.js:61 (3) ["Mike", 30, "male"]

// 4. 키/값 배열 반환
// Object.entries(object)
console.log(Object.entries(user3));
// (3) [Array(2), Array(2), Array(2)]
// 0: (2) ["name", "Mike"]
// 1: (2) ["age", 30]
// 2: (2) ["gender", "male"]

// 5. 키/값 배열을 객체로
// Object.fromEntries()
const arr = [
    ["name", "Mike"],
    ["age", 30],
    ["gender", "male"],
];
console.log(Object.fromEntries(arr));
// {name: "Mike", age: 30, gender: "male"}