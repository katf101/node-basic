// readFile 메서드를 사용하여 big.txt를 big2.txt로 복사해보겠습니다.

const fs = require("fs");

console.log("before: ", process.memoryUsage().rss);

const data1 = fs.readFileSync("./big.txt");
fs.writeFileSync("./big2.txt", data1);
console.log("buffer: ", process.memoryUsage().rss);

// 처음에 18MB였던 메모리 용량이 순식간에 1GB를 넘었습니다.
// 1GB 용량의 파일을 복사하기 위해 메모리에 파일을
// 모두 올려둔 후 writeFileSync를 수행했기 때문입니다.
