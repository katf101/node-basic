// 다음은 1GB 용량의 텍스트 파일을 만드는 코드입니다.
// 먼저 현재 드라이브에 충분한 용량이 남아 있는지 확인하고 실행해야 합니다.
// 시간이 조금 많이 소요될 수 있습니다.

const fs = require("fs");
const file = fs.createWriteStream("./big.txt");

for (let i = 0; i <= 100000; i++) {
  file.write(
    "안녕하세요. 엄청나게 큰 파일을 만들어 볼 것입니다. 각오 단단히 하세요!\n"
  );
}
file.end();
