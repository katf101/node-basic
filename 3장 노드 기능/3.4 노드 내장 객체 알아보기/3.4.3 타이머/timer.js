const timeout = setTimeout(() => {
  console.log("1.5초 후 실행");
}, 1500);

const interval = setInterval(() => {
  console.log("1초마다 실행");
}, 1000);

const timeout2 = setTimeout(() => {
  console.log("실행되지 않습니다");
}, 3000);

// 2.5초 후에 실행
setTimeout(() => {
  // timeout2 취소
  clearTimeout(timeout2);
  // interval 취소
  clearInterval(interval);
}, 2500);

const immediate = setImmediate(() => {
  console.log("즉시 실행");
});

const immediate2 = setImmediate(() => {
  console.log("실행되지 않습니다");
});

// immediate2 취소
clearImmediate(immediate2);

// ! setTimeout(콜백, 0)은 사용하지 않는 것을 권장
// setImmediate는 setTimeout(콜백, 0)보다 먼저 실행 (둘다 즉시 실행)
