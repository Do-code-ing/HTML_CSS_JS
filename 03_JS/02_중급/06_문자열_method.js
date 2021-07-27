// 문자열 메소드

let desc = `오늘은 맑고 화창한
날씨가 계속 되겠습니다.
내일은 비소식이 있겠습니다.`;
console.log(desc);
// 오늘은 맑고 화창한
// 날씨가 계속 되겠습니다.
// 내일은 비소식이 있겠습니다.

let desc1 ="안녕하세요.";
console.log(desc1.length);
// 6
console.log(desc1[2]);
// 하

let desc2 = "Hi guys. Nice to meet you.";
console.log(desc2.toUpperCase());
// HI GUYS. NICE TO MEET YOU.
console.log(desc2.toLowerCase());
// hi guys. nice to meet you.

console.log(desc2.indexOf("to"));
// 14
console.log(desc2.indexOf("man"));
// -1

let desc3 = "abcdefg";
console.log(desc3.slice(2));
// cdefg
console.log(desc3.slice(0, 5));
// abcde
console.log(desc3.slice(2, -2));
// cde

console.log(desc3.substring(2, 5)); // n~m or m~n
// cde
console.log(desc3.substring(5, 2));
// cde

console.log(desc3.substr(2, 4)); // n부터 m개
// cdef
console.log(desc3.substr(-4, 2));
// de

let desc4 = " coding        ";
console.log(desc4.trim()); // Python의 strip()과 비슷한듯
// coding

let hello = "hello!";
console.log(hello.repeat(3));
// hello!hello!hello!

let a = "a";
let result = a.codePointAt(0);
console.log(result);
// 97
console.log(String.fromCodePoint(result));
// a

let list = [
    "01. 들어가며",
    "02. JS의 역사",
    "03. 자료형",
    "04. 함수",
    "05. 배열",
];

let newList = [];
for (let i = 0; i < list.length; i++) {
    newList.push(list[i].slice(4));
}

console.log(newList);
// (5) ["들어가며", "JS의 역사", "자료형", "함수", "배열"]
// 0: "들어가며"
// 1: "JS의 역사"
// 2: "자료형"
// 3: "함수"
// 4: "배열"
// length: 5
// __proto__: Array(0)

function hasCola(str) {
    if (str.includes("콜라")) { // Python에서 if "콜라" in str:과 비슷한듯
        console.log("금칙어가 있습니다.");
    } else {
        console.log("통과");
    }
}

hasCola("와 사이다가 짱이야!");
// 통과
hasCola("무슨 소리, 콜라가 최고");
// 금칙어가 있습니다.
hasCola("콜라");
// 금칙어가 있습니다.