// method

let boy = {
    name: 'Mike',
    showName: function() {
        console.log(this.name) // Python의 self와 비슷한듯
    }
};

let man = boy;
man.name = "Tom";
console.log(boy.name);
// Tom (Python의 class와 유사하게 동작하는듯)
man.showName();
// Tom
boy = null;
man.showName();
// Tom (line 6이 this가 아니라 boy였다면 에러 발생)

// 화살표 함수로 method를 만들고 this를 사용하는 경우,
// this에 대한 참조를 전역 변수, 즉 window에서 하므로
// method는 화살표 함수로 하지 않는 것이 좋다.