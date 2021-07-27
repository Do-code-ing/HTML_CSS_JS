// 배열 메소드 2

let arr = [1, 5, 4, 2, 3];
arr.sort();
console.log(arr);
// (5) [1, 2, 3, 4, 5]

let arr1 = ["a", "c", "d", "e", "b"];
arr1.sort();
console.log(arr1);
// (5) ["a", "b", "c", "d", "e"]

let arr2 = [27, 8, 5, 13];
arr2.sort();
console.log(arr2);
// (4) [13, 27, 5, 8]

function fn(a, b) {
    return a - b; // a와 b를 비교해서 작은 수가 앞으로 갈 수 있게
}

arr2.sort(fn);
console.log(arr2);
// [5, 8, 13, 27]

// 위와 같은 로직은 복잡하기 때문에,
// Lodash 라는 라이브러리를 사용한다.
// _.sortBy(arr); 와 같이 사용한다.
// https://lodash.com/
// 현업에서 많이 쓰이므로 공부할 것

let arr3 = [1, 2, 3, 4, 5];
let result = 0;
arr.forEach((num) => {
    result += num;
});

console.log(result);
// 15
const result1 = arr3.reduce((prev, cur) => { // arr.reduce(함수, 초기값)
    return prev + cur;
}, 0);

console.log(result1);
// 15

let userList = [
    {name: "Mike", age: 30},
    {name: "Tom", age: 10},
    {name: "Jane", age: 27},
    {name: "Sue", age: 26},
    {name: "Harry", age: 42},
    {name: "Steve", age: 60},
]
let result2 = userList.reduce((prev, cur) => {
    if (cur.age > 19) {
        prev.push(cur.name);
    }
    return prev;
}, [])

console.log(result2);
// (5) ["Mike", "Jane", "Sue", "Harry", "Steve"]

// arr.reduceRight(); 배열 우측부터 연산 수행