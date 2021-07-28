// Generator
// 함수의 실행을 중간에 멈췄다가 재개할 수 있는 기능

function* fn() {    // function* 로 선언
    try {
        console.log(1); // yield문을 만나기 전까지 코드를 실행하고,
        yield 1;        // 만나면 yield 오른쪽 값인 value와 함수가 끝났는지를 나타내는 done을 반환한다.
        console.log(2);
        yield 2;
        console.log(3);
        console.log(4);
        yield 3;
        return "Finish";
    } catch (e) {
        console.log(e)
    }
}

const a = fn();
console.log(a.next()); // gener.next() 를 통해 코드 진행
console.log(a.throw(new Error("err"))); // gener.throw() 를 통해 예외 처리 후 강제 종료
console.log(a.return()); // gener.return() 을 통해 함수 강제 종료

const arr = [1, 2, 3, 4, 5];
for (num of arr) { // for of 를 통해서 순회할 수 있다면 iterator를 가지고 있다.
    console.log(num);
}

console.log(a[Symbol.iterator]() === a);
// true


// next() 에 인수 전달
function* fn2() {
    const num1 = yield "첫 번째 숫자를 입력하세요."; // next() 에 전달한 인수가 num1에 저장
    console.log(num1);

    const num2 = yield "두 번째 숫자를 입력하세요.";
    console.log(num2);

    return num1 + num2;
}

const b = fn2();

// 값을 미리 만들어 두지 않음 (어떤 값이 필요한 순간까지 계산을 미룰 수 있음)
function* fn3() {
    let index = 0;
    while (true) {      // 무한루프이지만
        yield index++;  // yield 문이 있어서 next() 를 호출할 때만 값을 증가시킴
    }
}

const c = fn3();

// yield*
function* gen1() {
    yield "W";
    yield "o";
    yield "r";
    yield "l";
    yield "d";
}

function* gen2() {
    yield "Hello,";
    yield* gen1(); // 다른 generator 불러오기
    yield "!";
}

const xx = gen2();