// 배열 메소드 1

let arr = [];
arr.push(); // append
arr.pop(); // pop
arr.unshift(); // appendleft
arr.shift(); // popleft

let arr1 = [1, 2, 3, 4, 5];
arr1.splice(1, 2); // 특정 요소 지움, (1부터 2개)
console.log(arr1);
// (3) [1, 4, 5]

let arr2 = [1, 2, 3, 4, 5];
arr2.splice(1, 3, 100, 200); // 인덱스 1부터 3개 지우고, 100, 200 끼워넣기
console.log(arr2);
// (4) [1, 100, 200, 5]

let arr3 = ["나는", "철수", "입니다"];
arr3.splice(1, 0, "대한민국", "소방관"); // 인덱스 1에 아무것도 안지우고 끼워넣기
console.log(arr3);
// (5) ["나는", "대한민국", "소방관", "철수", "입니다"]

let arr4 = [1, 2, 3, 4, 5];
let result = arr4.splice(1, 2);
console.log(arr4);
// (3) [1, 4, 5]
console.log(result);
// (2) [2, 3]

let arr5 = [1, 2, 3, 4, 5];
console.log(arr5.slice(1, 4));
// (3) [2, 3, 4]

let arr6 = [1, 2, 3, 4, 5];
let arr7 = arr6.slice(); // 아무것도 넣지 않으면 복사됨
let arr8 = [...arr6]; // === arr6.slice()
arr7[2] = 8;
arr8[3] = 6;
console.log(arr6);
// (5) [1, 2, 3, 4, 5]
console.log(arr7);
// (5) [1, 2, 8, 4, 5]
console.log(arr8);
// (5) [1, 2, 3, 6, 5]

let arr9 = [1, 2];
console.log(arr9.concat([3, 4], 5, 6)); // append + extend 인듯
// (6) [1, 2, 3, 4, 5, 6]

let users = ["Mike", "Tom", "Jane"];
users.forEach((name, index) => { // 함수를 인자로 받음
    console.log(`${index}: ${name}`);
});
// 0: Mike
// 1: Tom
// 2: Jane

let arr10 = [1, 2, 3, 4, 5 , 1, 2, 3];
console.log(arr10.indexOf(3));
// 2
console.log(arr10.indexOf(3, 3));
// 7
console.log(arr10.lastIndexOf(3)); // rindex
// 7

let arr11 = [1, 2, 3];
console.log(arr11.includes(2));
// true
console.log(arr11.includes(8));
// false

let arr12 = [1, 2, 3, 4, 5];
const result1 = arr12.find((item) => { // 함수를 인자로 받음
    return item % 2 === 0;
});

console.log(result1);
// 2

let userList = [
    {name: "Mike", age: 30},
    {name: "Jane", age: 27},
    {name: "Tom", age: 10},
];

const result2 = userList.find((user) => {
    if (user.age < 19) {
        return true;
    }
    return false;
});

console.log(result2);
// {name: "Tom", age: 10}

const result3 = userList.findIndex((user) => { // 함수를 인자로 받음
    if (user.age < 19) {
        return true;
    }
    return false;
});

console.log(result3);
// 2

let arr13 = [1, 2, 3, 4, 5, 6];
const result4 = arr13.filter((item) => { // 함수를 인자로 받음
    return item % 2 === 0;
})

console.log(result4);
// (3) [2, 4, 6]

let arr14 = [1, 2, 3, 4, 5];
console.log(arr14.reverse());
// (5) [5, 4, 3, 2, 1]

let userList1 = [
    {name: "Mike", age: 30},
    {name: "Jane", age: 27},
    {name: "Tom", age: 10},
];

let newUserList = userList1.map((user, index) => {
    return Object.assign({}, user, {
        id: index + 1,
        isAdult: user.age > 19,
    });
});

console.log(newUserList);
// 3) [{…}, {…}, {…}]
// 0: {name: "Mike", age: 30, id: 1, isAdult: true}
// 1: {name: "Jane", age: 27, id: 2, isAdult: true}
// 2: {name: "Tom", age: 10, id: 3, isAdult: false}
// length: 3
// __proto__: Array(0)

let arr15 = ["안녕", "나는", "철수야"];
let result5 = arr15.join(" ");
console.log(result5);
// 안녕 나는 철수야

const users1 = "Mike,Jane,Tom,Tony";
console.log(users1.split(","));
// (4) ["Mike", "Jane", "Tom", "Tony"]

let user4 = {
    name: "Mike",
    age: 30,
};

let userList2 = ["Mike", "Tom", "Jane"];
console.log(Array.isArray(user4));
// false
console.log(Array.isArray(userList2));
// true