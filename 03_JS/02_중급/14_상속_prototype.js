// 상속, prototype

const car = {
    wheels: 4,
    drive() {
        console.log("drive..");
    },
}

const bmw = {
    color: "red",
    navigation: 1,
};

const benz = {
    color: "black",
};

const audi = {
    color: "blue",
};

bmw.__proto__ = car; // 상속
benz.__proto__ = car;
audi.__proto__ = car;
console.log(bmw);
// {color: "red", navigation: 1}
// color: "red"
// navigation: 1
// __proto__:
//      drive: ƒ drive()
//      wheels: 4
//      __proto__: Object

for (p in bmw) { // for 문에서는 다 나옴
    console.log(p);
}
// color
// navigation
// wheels
// drive

console.log(Object.keys(bmw)); // Object.keys() 에서는 안나옴
// (2) ["color", "navigation"]

const Bmw = function (color) {
    this.color = color;
};

Bmw.prototype.wheels = 4; // 메모리 효율성
Bmw.prototype.drive = function () {
    console.log("drive..");
};

const x5 = new Bmw("red");
const z4 = new Bmw("blue");

console.log(x5);
// Bmw {color: "red"}
// color: "red"
// __proto__:
//      drive: ƒ ()
//      wheels: 4
//      constructor: ƒ (color)
//      __proto__: Object

console.log(z4 instanceof Bmw); // 어느 것으로부터 만들어졌는지,
// true
console.log(z4.constructor === Bmw);
// true

Bmw.prototype = { // 이렇게 선언하면 편하겠지만, 기존의 prototype에 덮어 씌워지므로
    wheels: 4,    // 위에서처럼 하나씩 선언하는게 좋음
    drive() {
        console.log("drive..");
    },
    navigation: 1,
    stop() {
        console.log("STOP!");
    },
};

// closure를 이용한 데이터 변경 못하게하기
const Bmw2 = function (color) {
    const c = color;
    this.getColor = function () {
        console.log(c);
    };
};

const x3 = new Bmw2("red");
x3.getColor();
// red