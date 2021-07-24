// 배열

let days = ['mon', 'tue', 'wed'];
console.log(days);
days[1] = '화요일'; // 변경
console.log(days.length); // 길이
days.push('thu'); // Python의 append (pop은 같음)
days.unshift('sun'); // Python의 deque의 appendleft (shift == popleft)

for (let i = 0; i < days.length; i++) { // index를 이용한 순회, for i in range(len(days)):
    console.log(days[i]);
}

for (let day of days) { // 자체 순회, for day in days:
    console.log(day);
}