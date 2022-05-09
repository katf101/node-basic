// 이번에는 폴더 내용 확인 및 삭제와 관련된 메서드를 알아보겠습니다.

const fs = require("fs").promises;

fs.readdir("./folder")
  .then((dir) => {
    console.log("폴더 내용 확인", dir);
    return fs.unlink("./folder/newFile.js");
  })
  .then(() => {
    console.log("파일 삭제 성공");
    return fs.rmdir("./folder");
  })
  .then(() => {
    console.log("폴더 삭제 성공");
  })
  .catch((err) => {
    console.error(err);
  });

//   node fsDelete를 한 번 더 실행하면 ENOENT 에러가 발생합니다.
//   존재하지 않는 파일을 지웠다는 에러입니다.
