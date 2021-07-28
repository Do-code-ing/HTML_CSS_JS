// async

async function getName() { // async: 항상 Promise를 반환
    return "Mike";
    return Promise.resolve("Tom"); // 만약 반환 값이 Promise면 return 값을 사용함
    throw new Error("err.."); // throw: 명시적 예외 처리
}

console.log(getName());
// Promise {<fulfilled>: "Mike"}
getName().then((name) => {
    console.log(name);
});
// Mike


// await
// async 함수에서만 사용 가능
function getName2(name) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(name);
        }, 1000);
    });
}

async function showName() {
    const result = await getName2("Mike"); // await Promise-Object, P-O가 처리될 때까지 기다린다.
    console.log(result);
}

console.log("시작");
showName();
// Mike


// Promise -> async, await
const f1 = () => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res("1번 주문 완료");
        }, 1000);
    });
};

const f2 = (message) => {
    console.log(message);
    return new Promise((res, rej) => {
        setTimeout(() => {
            res("2번 주문 완료");
        }, 3000);
    });
};

const f3 = (message) => {
    console.log(message);
    return new Promise((res, rej) => {
        setTimeout(() => {
            res("3번 주문 완료");
        }, 2000);
    });
};

async function order() { // 가독성이 더 좋아진다.
    try {
        const result1 = await f1();
        const result2 = await f2(result1);
        const result3 = await f3(result2);
        console.log(result3);
    } catch (e) {
        console.log(e)
    }
    console.log("종료");
}

order();