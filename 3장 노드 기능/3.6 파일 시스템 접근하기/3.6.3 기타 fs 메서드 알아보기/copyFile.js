// 노드 8.5 버전 이후에는
// createReadStream과 createWriteStream을
// pipe하지 않아도 파일을 복사할 수 있습니다.
// 다음과 같이 하면 됩니다.

const fs = require("fs").promises;

fs.copyFile("readme4.txt", "writeme4.txt")
  .then(() => {
    console.log("복사 완료");
  })
  .catch((error) => {
    console.error(error);
  });

//   readme.txt와 동일한 내용의 writeme4.txt가 생성되었을 것입니다.
//   첫 번째 인수로 복사할 파일을,
//   두 번째 인수로 복사될 경로를,
//   세 번째 인수로 복사 후 실행될 콜백 함수를 넣습니다.
