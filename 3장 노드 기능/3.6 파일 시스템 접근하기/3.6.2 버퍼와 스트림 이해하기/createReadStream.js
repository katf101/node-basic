// 파일을 읽는 스트림 메서드로는 createReadStream이 있습니다.
// 다음과 같이 사용합니다.

const fs = require("fs");

// 먼저 createReadStream으로 읽기 스트림을 만듭니다.
// 첫 번째 인수로 읽을 파일 경로를 넣습니다.
// 두 번째 인수는 옵션 객체인데 highWaterMark라는 옵션이
// 버퍼의 크기(바이트 단위)를 정할 수 있는 옵션입니다
// 기본값은 64KB이지만,
// 여러 번 나눠서 보내는 모습을 보여주기 위해 16B로 낮췄습니다.
const readStream = fs.createReadStream("./readme3.txt", { highWaterMark: 16 });
const data = [];

// readStream은 이벤트 리스너를 붙여서 사용합니다.
// 보통 data, end, error 이벤트를 사용합니다.
// readStream.on('data')와 같이 이벤트 리스너를 붙이면 됩니다.
readStream.on("data", (chunk) => {
  data.push(chunk);
  console.log("data :", chunk, chunk.length);
});

readStream.on("end", () => {
  console.log("end :", Buffer.concat(data).toString());
});

readStream.on("error", (err) => {
  console.log("error :", err);
});

// 파일을 읽는 도중 에러가 발생하면 error 이벤트가 호출되고,
// 파일 읽기가 시작되면 data 이벤트가 발생합니다.
// 16B씩 읽도록 설정했으므로 파일의 크기가 16B보다 크다면
// 여러 번 발생할 수도 있습니다.
// 파일을 다 읽으면 end 이벤트가 발생합니다.

// 예제에서는 미리 data 배열을 만들어놓고
// 들어오는 chunk들을 하나씩 push한 뒤 마지막에
// Buffer.concat()으로 합쳐서 다시 문자열을 만들었습니다.

// 파일의 크기가 99B라 무려 일곱 번에 걸쳐 데이터를 전송했습니다.
// 하지만 기본값으로는 64KB씩 전송하므로
// 대부분의 txt 파일들은 한 번에 전송됩니다.

// console

// data : <Buffer ec a0 80 eb 8a 94 20 ec a1 b0 ea b8 88 ec 94 a9> 16
// data : <Buffer 20 ec a1 b0 ea b8 88 ec 94 a9 20 eb 82 98 eb 88> 16
// data : <Buffer a0 ec 84 9c 20 ec a0 84 eb 8b ac eb 90 a9 eb 8b> 16
// data : <Buffer 88 eb 8b a4 2e 20 eb 82 98 eb 88 a0 ec a7 84 20> 16
// data : <Buffer ec a1 b0 ea b0 81 ec 9d 84 20 63 68 75 6e 6b eb> 16
// data : <Buffer 9d bc ea b3 a0 20 eb b6 80 eb a6 85 eb 8b 88 eb> 16
// data : <Buffer 8b a4 2e> 3
// end : 저는 조금씩 조금씩 나눠서 전달됩니다. 나눠진 조각을 chunk라고 부릅니다.
