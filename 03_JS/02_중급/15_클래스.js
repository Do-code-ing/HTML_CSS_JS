// 클래스

// 기존 생성자 함수
const User = function (name, age) {
    this.name = name;
    this.age = age;
    this.showName = function () {
        console.log(this.name);
    };
};

const mike = new User("Mike", 30);

// 클래스 (ES6~)
class User2 {
    constructor(name, age) { // constructor: 객체를 만드는 생성자 함수 (Python의 def __init__(): 인듯?)
        this.name = name;
        this.age = age;
    }
    showName() {
        console.log(this.name);
    }
}

const tom = new User2("Tom", 19);

// 차이점
// 생성자 함수로 만들면, 메소드가 그대로 인스턴스 객체에 있는 반면,
// 클래스로 만들면 프로토 타입에 있다. (메모리가 효율적일듯)

// 기존 생성자 함수를 클래스와 동일하게 만들기
const User3 = function (name, age) {
    this.name = name;
    this.age = age;
    // this.showName = function () {
    //     console.log(this.name);
    // };
};

User3.prototype.showName = function () {
    console.log(this.name);
};

// for 문에서 클래스의 메소드는 나오지 않음
for (const p in mike) {
    console.log(p);
}
// name, age, showName
for (const p in tom) {
    console.log(p);
}
// name, age


// 상속
class Car {
    constructor(color) {
        this.color = color;
        this.wheels = 4;
    }
    drive() {
        console.log("drive..");
    }
    stop() {
        console.log("STOP!");
    }
}

class Bmw extends Car { // 상속받기
    constructor(color) { // 동일한 인수를 받고,
        super(color); // 상속자 오버라이딩해야 함
        this.navigation = 1;
    }
    park() {
        console.log("PARK");
    }
    stop() { // 메소드 오버라이딩 (method overriding)
        super.stop(); // 부모의 메소드 그대로 사용
        console.log("OFF");
    }
}

const z4 = new Bmw("Blue");