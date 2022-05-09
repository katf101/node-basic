const http = require("http");

http
  // createServer 메서드 뒤에 listen 메서드를 붙이고
  // 클라이언트에 공개할 포트 번호와 포트 연결 완료 후 실행될 콜백 함수를 넣습니다.
  .createServer((req, res) => {
    // res.writeHead는 응답에 대한 정보를 기록하는 메서드입니다.
    // 두 번째 인수로 응답에 대한 정보를 보내는데 콘텐츠의 형식이 HTML임을 알리고 있습니다.
    // 또한 한글 표시를 위해 charset을 utf-8로 지정했습니다.
    // 이 정보가 기록되는 부분을 헤더(Header)라고 부릅니다.
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    // res.write 메서드의 첫 번째 인수는 클라이언트로 보낼 데이터입니다.
    res.write("<h1>Hello Node!</h1>");
    // res.end는 응답을 종료하는 메서드입니다.
    // 만약 인수가 있다면 그 데이터도 클라이언트로 보내고 응답을 종료합니다.
    res.end("<p>Hello Server!</p>");
  })
  .listen(8080, () => {
    // 서버 연결
    console.log("8080번 포트에서 서버 대기 중입니다!");
  });
