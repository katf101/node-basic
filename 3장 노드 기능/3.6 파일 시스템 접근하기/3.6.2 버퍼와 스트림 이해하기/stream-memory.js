// 이번에는 스트림을 사용하여 파일을 big3.txt로 복사해보겠습니다.

const fs = require("fs");

console.log("before: ", process.memoryUsage().rss);

const readStream = fs.createReadStream("./big.txt");
const writeStream = fs.createWriteStream("./big3.txt");
readStream.pipe(writeStream);
readStream.on("end", () => {
  console.log("stream: ", process.memoryUsage().rss);
});

// 스트림을 사용해서 파일을 복사했더니 메모리를 62MB밖에 차지하지 않습니다.
// 이전 방식이 1GB 용량을 차지했던 것에 비하면 엄청난 개선 효과입니다.
// 큰 파일을 조각내어 작은 버퍼 단위로 옮겼기 때문입니다.
// 이렇게 스트림을 사용하면 효과적으로 데이터를 전송할 수 있습니다.
// 동영상 같은 큰 파일들을 전송할 때 이러한 이유로 스트림을 사용합니다.

// 이제 나머지 fs 메서드를 배워보겠습니다.
