// 이번에는 파일을 만들어보겠습니다.

const fs = require("fs").promises;

fs.writeFile("./writeme.txt", "글이 입력됩니다")
  .then(() => {
    // 성공하면 writeme.txt를 생성, "글이 입력됩니다" 를 txt에 할당
    return fs.readFile("./writeme.txt");
  })
  .then((data) => {
    // "글이 입력됩니다" 를 콘솔에 출력
    console.log(data.toString());
  })
  .catch((err) => {
    console.error(err);
  });
