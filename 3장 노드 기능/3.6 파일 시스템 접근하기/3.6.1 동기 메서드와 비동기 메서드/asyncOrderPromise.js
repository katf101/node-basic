// 콜백 지옥은 Promise나 async/await으로 어느 정도 해결할 수 있습니다.

// async,await을 사용하기 위해 promise 값 반환
const fs = require("fs").promises;

console.log("시작");
fs.readFile("./readme2.txt")
  .then((data) => {
    console.log("1번", data.toString());
    return fs.readFile("./readme2.txt");
  })
  .then((data) => {
    console.log("2번", data.toString());
    return fs.readFile("./readme2.txt");
  })
  .then((data) => {
    console.log("3번", data.toString());
    console.log("끝");
  })
  .catch((err) => {
    console.error(err);
  });

// 실행 결과는 asyncOrder.js와 같습니다.

// 지금까지 동기 메서드와 비동기 메서드의 차이를 알아봤습니다.
// 이제 readFile과 readFileSync에서 받아온 data를
// data.toString()으로 변환하는 이유를 알아볼 차례입니다.
// 결론부터 말하자면 toString 메서드를 사용하는 이유는
// data가 버퍼이기 때문입니다.
// 버퍼가 무엇인지 알아봅시다.
