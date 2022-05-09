// 비동기 방식으로 하되 순서를 유지하고 싶다면 어떻게 해야 할까요?

const fs = require("fs");

console.log("시작");
fs.readFile("./readme2.txt", (err, data) => {
  if (err) {
    throw err;
  }
  console.log("1번", data.toString());
  fs.readFile("./readme2.txt", (err, data) => {
    if (err) {
      throw err;
    }
    console.log("2번", data.toString());
    fs.readFile("./readme2.txt", (err, data) => {
      if (err) {
        throw err;
      }
      console.log("3번", data.toString());
      console.log("끝");
    });
  });
});

// 이전 readFile의 콜백에 다음 readFile을 넣으면 됩니다.
// 이른바 콜백 지옥이 펼쳐지지만 적어도 순서가 어긋나는 일은 없습니다.

//console

// 시작
// 1번 저를 여러 번 읽어보세요.
// 2번 저를 여러 번 읽어보세요.
// 3번 저를 여러 번 읽어보세요.
// 끝
