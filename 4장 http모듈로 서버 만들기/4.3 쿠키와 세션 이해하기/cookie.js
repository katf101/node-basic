const http = require("http");

http
  .createServer((req, res) => {
    console.log(req.url, req.headers.cookie);
    res.writeHead(200, { "Set-Cookie": "mycookie=test" });
    res.end("Hello Cookie");
  })
  .listen(8083, () => {
    console.log("8083번 포트에서 서버 대기 중입니다!");
  });

//   브라우저는 파비콘이 뭔지 HTML에서 유추할 수 없으면
//   서버에 파비콘 정보에 대한 요청을 보냅니다.
//   현재 예제에서는 HTML에 파비콘에 대한 정보를
//   넣어두지 않았으므로 브라우저가 추가로
//   /favicon.ico를 요청한 것입니다.

//   요청 두 개를 통해 우리는 서버가 제대로 쿠키를 심었음을 확인할 수 있습니다.
//   첫 번째 요청(/)을 보내기 전에는 브라우저가 어떠한 쿠키 정보도 가지고 있지 않습니다.
//   서버는 응답의 헤더에 mycookie=test라는 쿠키를 심으라고
//   브라우저에게 명령(Set-Cookie)했습니다.
//   따라서 브라우저는 쿠키를 심었고,
//   두 번째 요청(/favicon.ico)의 헤더에
//   쿠키가 들어 있음을 확인할 수 있습니다.
