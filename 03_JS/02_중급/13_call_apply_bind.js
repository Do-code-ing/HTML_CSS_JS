// call, apply, bind
// 함수 호출 방식과 관계없이 this 를 지정할 수 있음

// call
const mike = {
    name: "Mike",
};
const tom = {
    name: "Tom",
};

function showThisName() {
    console.log(this.name);
}

showThisName.call();
// 
showThisName.call(mike);
// Mike
showThisName.call(tom);
// Mike

function update(birthYear, occupation) {
    this.birthYear = birthYear;
    this.occupation = occupation;
}

update.call(mike, 1999, "singer"); // 첫 매개변수 => this, 그 이후 매개변수는 함수의 인수
console.log(mike);
// {name: "Mike", birthYear: 1999, occupation: "singer"}
update.call(tom, 2002, "teacher");
console.log(tom);
// {name: "Tom", birthYear: 2002, occupation: "teacher"}


// apply (== call)
const nums = [3, 10, 1, 6, 4];
const minNum = Math.min.call(null, ...nums);
const maxNum = Math.max.call(null, ...nums);
console.log(minNum, maxNum);
// 1 10

const minNum2 = Math.min.apply(null, nums);
const maxNum2 = Math.max.apply(null, nums);
console.log(minNum2, maxNum2);
// 1 10


// bind
// 함수의 this 값을 영구히 바꿀 수 있다.

const updateMike = update.bind(mike);
updateMike(1980, "police");
console.log(mike);
// {name: "Mike", birthYear: 1980, occupation: "police"}

const user = {
    name: "Mike",
    showName: function () {
        console.log(`Hello, ${this.name}`);
    },
};

user.showName();
// Hello, Mike

let fn = user.showName;
fn();
// Hello, (this를 잃어버림)
fn.call(user);
// Hello, Mike
fn.apply(user);
// Hello, Mike

let boundFn = fn.bind(user);
boundFn();
// Hello, Mike