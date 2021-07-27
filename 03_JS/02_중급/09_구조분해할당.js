// 구조 분해 할당
// Destructuring assignment
// 구조 분해 할당 구문은, 배열이나 객체의 속성을 분해해서
// 그 값을 변수에 담을 수 있게 하는 표현식

let users = ["Mike", "Tom", "Jane"];
let [user1, user2, user3] = users;
console.log(user1);
// Mike
console.log(user2);
// Tom
console.log(user3);
// Jane

let [a, b, c] = [1, 2];
console.log(a);
// 1
console.log(b);
// 2
console.log(c);
// undefined

let [d=3, e=4, f=5] = [1, 2];
console.log(d);
// 1
console.log(e);
// 2
console.log(f);
// 5

let [user4, ,user5] = ["Mike", "Tom", "Jane", "Tony"];
console.log(user4);
// Mike
console.log(user5);
// Jane

let g = 1;
let h = 2;
[g, h] = [h, g];
console.log(g);
// 2
console.log(h);
// 1

let user = {name: "Mike", age: 30};
let {name, age} = user;
console.log(name);
// Mike
console.log(age);
// 30

let {name: userName, age: userAge} = user;
console.log(userName);
// Mike
console.log(userAge);
// 30

let {name1, age1, gender="male"} = user;
console.log(gender);
// male