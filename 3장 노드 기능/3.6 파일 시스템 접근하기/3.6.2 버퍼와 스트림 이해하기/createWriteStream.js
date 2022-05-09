// 이번에는 파일을 써보겠습니다.

const fs = require("fs");

// 먼저 createWriteStream으로 쓰기 스트림을 만듭니다.
// 첫 번째 인수로는 출력 파일명을 입력합니다.
// 두 번째 인수는 옵션인데, 여기서는 사용하지 않습니다.
const writeStream = fs.createWriteStream("./writeme2.txt");

// finish 이벤트 리스너도 붙였습니다.
// 파일 쓰기가 종료되면 콜백 함수가 호출됩니다.
writeStream.on("finish", () => {
  console.log("파일 쓰기 완료");
});

// writeStream에서 제공하는 write 메서드로 넣을 데이터를 씁니다.
// 여러 번 호출할 수 있습니다.
writeStream.write("이 글을 씁니다.\n");
writeStream.write("한 번 더 씁니다.");

// 데이터를 다 썼다면 end 메서드로 종료를 알립니다.
// 이때 finish 이벤트가 발생합니다.
writeStream.end(); // 파일 쓰기 완료
