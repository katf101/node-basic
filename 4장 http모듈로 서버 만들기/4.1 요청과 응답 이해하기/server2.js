// res.write와 res.end에 일일이 HTML을 적는 것은 비효율적이므로
// 미리 HTML 파일을 만들어두면 좋을 것 같습니다.
// 그 HTML 파일을 fs 모듈로 읽어서 전송할 수 있습니다.
// 다음 예제를 통해 배워보겠습니다.

const http = require("http");
const fs = require("fs").promises;

http
  .createServer(async (req, res) => {
    // async일땐 try,catch로 에러처리!
    try {
      const data = await fs.readFile("./server2.html");
      res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
      res.end(data);
    } catch (err) {
      console.error(err);
      res.writeHead(500, { "Content-Type": "text/plain; charset=utf-8" }); // plain 은 일반 문자열
      res.end(err.message);
    }
  })
  .listen(8081, () => {
    console.log("8081번 포트에서 서버 대기 중입니다!");
  });
