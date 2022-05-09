// fs 모듈은 파일 시스템에 접근하는 모듈입니다.
// 즉, 파일을 생성하거나 삭제하고, 읽거나 쓸 수 있습니다.
const fs = require("fs");

// 파일 경로 지정
fs.readFile("./readme.txt", (err, data) => {
  if (err) {
    throw err;
  }
  console.log(data);
  // <Buffer ec a0 80 eb a5 bc 20 ec 9d bd ec 96 b4 ec a3 bc ec 84 b8 ec 9a 94 2e>
  // 2진 법을 16진법으로 바꿈

  // 16진법을 해석하기 위해 toString 사용
  console.log(data.toString());
  // 저를 읽어주세요.
});
