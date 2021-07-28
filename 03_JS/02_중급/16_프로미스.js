// 프로미스 (Promise)
// 비동기 작업을 callback 지옥없이 할 수 있다.

// 판매자 입장 (작업 수행)
const pr = new Promise((resolve, reject) => { // resolve: 성공, reject: 실패 callback함수라고 부름
    // code
    setTimeout(() => {
        resolve("OK") // 성공했을 때
    }, 1000)
    setTimeout(() => {
        reject(new Error("error..")) // 실패했을 때
    }, 1000)
});

// 1. 처음 상태
// state: pending(대기)
// result: undefined

// 2. resolve(value)
// state: fulfilled(이행됨)
// result: value

// 3. reject(error)
// state: rejeted(거부됨)
// result: error


// 소비자 입장 (소비자에게 띄워줄 문구, 어떤 동작)
pr.then( // (if True or try?)
    function (result) { // 성공(이행)했을 때 실행
        console.log(result + " 가지러 가자.")
    }
).catch ( // 거부되었을 때 (else or except?), 가독성을 위해 catch를 사용하는 것이 좋다.
    function (err) { // 실패(거부)했을 때 실행
        console.log("다시 주문해주세요..")
    }
).finally ( // 항상 실행되는 코드 (finally?), 로딩 화면같은 걸 없앨 때 유용하다.
    function () {
        console.log("--- 주문 끝 ---")
    }
)


// callback
const f1 = (callback) => {
    setTimeout(function () {
        console.log("1번 주문 완료");
        callback();
    }, 1000);
};

const f2 = (callback) => {
    setTimeout(function () {
        console.log("2번 주문 완료");
        callback();
    }, 3000);
};

const f3 = (callback) => {
    setTimeout(function () {
        console.log("3번 주문 완료");
        callback();
    }, 2000);
};

// [callback hell]
// console.log("시작");
// f1(function () {
//     f2(function () {
//         f3(function (){
//             console.log("끝");
//         });
//     });
// });


// Promise를 이용한 코드
const ff1 = () => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res("1번 주문 완료");
        }, 1000);
    });
};

const ff2 = (message) => {
    console.log(message);
    return new Promise((res, rej) => {
        setTimeout(() => {
            res("2번 주문 완료");
        }, 3000);
    });
};

const ff3 = (message) => {
    console.log(message);
    return new Promise((res, rej) => {
        setTimeout(() => {
            res("3번 주문 완료");
        }, 2000);
    });
};

// console.log("시작");
// ff1()
//     .then((res) => ff2(res))
//     .then((res) => ff3(res))
//     .then((res) => console.log(res))
//     .catch(console.log)
//     .finally(() => {
//         console.log("끝");
//     }
// );


// Promise.all
// Promise를 한꺼번에 실행
// 하나라도 실패하면, 아무것도 안보여줌
console.time("x");
Promise.all([ff1(), ff2(), ff3()]).then((res) => {
    console.log(res);
    console.timeEnd("x");
});

// Promise.race
// Promise.all과 같이 동작하지만,
// 제일 먼저 완료된 것만 보여줌