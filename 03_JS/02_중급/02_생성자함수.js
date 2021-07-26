// 생성자 함수

// 객체 리터럴 (Object-Literal)
let user = {
    name: "Mike",
    age: 30,
}
// 이 객체 리터럴을 여러개 만들어야 할 때 생성자 함수를 사용한다.
// (Python의 class와 비슷한듯)

function User(name, age) { // 보통 첫 글자는 대문자로
    this.name = name;
    this.age = age;
}

let user1 = new User("Mike", 30); // new 연산자를 사용해서 호출
let user2 = new User("Jane", 22);
let user3 = new User("Tom", 17);

// method 추가
function User(name, age) { // 보통 첫 글자는 대문자로
    // this = {}; <- new 연산자의 동작 과정

    this.name = name;
    this.age = age;
    this.sayName = function() {
        console.log(this.name);
    };

    // return this; <- new 연산자의 동작 과정
}

let user5 = new User("Han", 40);
user5.sayName();
// Han

let user6 = User("Han", 40);
console.log(user6)
// undefined