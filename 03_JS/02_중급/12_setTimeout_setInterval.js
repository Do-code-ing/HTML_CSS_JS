// setTimeout: 일정 시간이 지난 후 함수를 실행

function showName(name) {
    console.log(name);
}

setTimeout(showName, 3000, "Mike"); // setTimeout(함수, 몇초뒤(ms), 인수)
// 3초 뒤, Mike
const tId = setTimeout(showName, 3000, "Mike");
clearTimeout(tId); // 중단


// setInterval: 일정 시간 간격으로 함수를 반복

const tId2 = setInterval(showName, 3000, "Mike");
// 3초 간격으로, Mike, Mike, ...
clearInterval(tId2); // 중단 (한 번은 실행하는 듯)

let num = 0;
function showTime() {
    console.log(`안녕하세요. 접속하신지 ${num++}초가 지났습니다.`);
    if (num > 5) {
        clearInterval(tId3);
    }
}

const tId3 = setInterval(showTime, 1000);
// 안녕하세요. 접속하신지 0초가 지났습니다.
// 안녕하세요. 접속하신지 1초가 지났습니다.
// 안녕하세요. 접속하신지 2초가 지났습니다.
// 안녕하세요. 접속하신지 3초가 지났습니다.
// 안녕하세요. 접속하신지 4초가 지났습니다.
// 안녕하세요. 접속하신지 5초가 지났습니다.