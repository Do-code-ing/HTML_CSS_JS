// 나머지 매개변수 (Rest parameters)

function add(...numbers) {
    let result = 0;
    numbers.forEach((num) => (result += num));
    console.log(result);
}

add(1, 2, 3);
// 6
add(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
// 55

function User(name, age, ...skills) { // 나머지 매개변수는 항상 마지막에
    this.name = name;
    this.age = age;
    this.skills = skills;
}

const user1 = new User("Mike", 30, "HTML", "CSS");
const user2 = new User("Tom", 20, "JS", "React");
const user3 = new User("Jane", 10, "English");
console.log(user1);
// User {name: "Mike", age: 30, skills: Array(2)}
// age: 30
// name: "Mike"
// skills: (2) ["HTML", "CSS"]
// __proto__: Object
console.log(user2);
// User {name: "Tom", age: 20, skills: Array(2)}
// age: 20
// name: "Tom"
// skills: (2) ["JS", "React"]
// __proto__: Object
console.log(user3);
// User {name: "Jane", age: 10, skills: Array(1)}
// age: 10
// name: "Jane"
// skills: ["English"]
// __proto__: Object


// 전개 구문 (Spread syntax)

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let result = [0, ...arr1, ...arr2, 7, 8, 9];
console.log(result);
// (10) [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

let arr3 = [...arr1];
console.log(arr3);
// (3) [1, 2, 3]

let user4 = {name: "Mike", age: 30};
let user5 = {...user4};
user5.name = "Tom";
console.log(user4);
// {name: "Mike", age: 30}
console.log(user5);
// {name: "Tom", age: 30}

let user6 = {name: "Mike"};
let info = {age: 30};
let fe = ["JS", "React"];
let lang = ["Korean", "English"];

user6 = {
    ...user6,
    ...info,
    skills: [...fe, ...lang],
};
console.log(user6);
// {name: "Mike", age: 30, skills: Array(4)}
// age: 30
// name: "Mike"
// skills: (4) ["JS", "React", "Korean", "English"]
// __proto__: Object