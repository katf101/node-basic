// 한 번에 여러 서버를 실행할 수도 있습니다.
// createServer를 원하는 만큼 호출하면 됩니다.

const http = require("http");

http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    res.write("<h1>Hello Node!</h1>");
    res.end("<p>Hello Server!</p>");
  })
  .listen(8080, () => {
    // 서버 연결
    console.log("8080번 포트에서 서버 대기 중입니다!");
  });

http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    res.write("<h1>Hello Node!</h1>");
    res.end("<p>Hello Server!</p>");
  })
  .listen(8081, () => {
    // 서버 연결
    console.log("8081번 포트에서 서버 대기 중입니다!");
  });

//   각각 localhost:8080과 localhost:8081 주소로 서버에 접속할 수 있습니다.
//   이때 포트 번호가 달라야 한다는 점에 주의하세요.
//   포트 번호가 같으면 EADDRINUSE 에러가 발생합니다.
//   단, 실무에서는 이런 식으로 서버를 여러 개 띄우는 일은 드뭅니다.
