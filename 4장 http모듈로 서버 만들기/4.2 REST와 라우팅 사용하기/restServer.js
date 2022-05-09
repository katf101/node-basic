const http = require("http");
const fs = require("fs").promises;

const users = {}; // 데이터 저장용

// 다른 HTTP 요청 메서드들을 추가하고,
// 데이터베이스 대용으로 users라는 객체를 선언하여 사용자 정보를 저장했습니다.
// POST /user 요청에서는 사용자를 새로 저장하고 있으며,
// PUT /user/아이디 요청에서는 해당 아이디의 사용자 데이터를 수정하고 있습니다.
// DELETE /user/아이디 요청에서는 해당 아이디의 사용자를 제거합니다.

// POST와 PUT 요청을 처리할 때 조금 특이한 것을 볼 수 있습니다.
// 바로 req.on('data')와 req.on('end')의 사용입니다.
// 요청의 본문에 들어 있는 데이터를 꺼내기 위한 작업이라고 보면 됩니다.
// req와 res도 내부적으로는 스트림(각각 readStream과 writeStream)으로 되어 있으므로
// 요청/응답의 데이터가 스트림 형식으로 전달됩니다.
// 또한 on에서 볼 수 있듯이 이벤트도 달려 있습니다.
// 3장에서 배웠던 내용들입니다.
// 다만 받은 데이터는 문자열이므로 JSON으로 만드는 JSON.parse 과정이 필요합니다.

http
  .createServer(async (req, res) => {
    // async 를 사용 했으므로 try, catch 로 에러처리
    try {
      console.log(req.method, req.url);
      if (req.method === "GET") {
        if (req.url === "/") {
          const data = await fs.readFile("./restFront.html");
          // writeHead는 Header를 작성 ( Header란 data들의 data, 메타데이터 )
          // 개발자모드의 네트워크 -> Headers 부분을 살펴보면 됩니다.
          res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
          // res.end 로 함수가 종료되지 않음
          return res.end(data); // 그러므로 return을 사용하여 종료
        } else if (req.url === "/about") {
          const data = await fs.readFile("./about.html");
          res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
          return res.end(data);
        } else if (req.url === "/users") {
          res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
          return res.end(JSON.stringify(users));
        }
        // /도 /about도 /users도 아니면
        try {
          const data = await fs.readFile(`.${req.url}`);
          return res.end(data);
        } catch (err) {
          // 주소에 해당하는 라우트를 못 찾았다는 404 Not Found error 발생
        }
      } else if (req.method === "POST") {
        if (req.url === "/user") {
          let body = "";
          // 요청의 body를 stream 형식으로 받음
          req.on("data", (data) => {
            body += data;
          });
          // 요청의 body를 다 받은 후 실행됨
          return req.on("end", () => {
            console.log("POST 본문(Body):", body);
            const { name } = JSON.parse(body);
            const id = Date.now();
            users[id] = name;
            // 201, 성공적으로 생성됨
            res.writeHead(201);
            res.end("ok");
          });
        }
      } else if (req.method === "PUT") {
        if (req.url.startsWith("/user/")) {
          const key = req.url.split("/")[2];
          let body = "";
          req.on("data", (data) => {
            body += data;
          });
          return req.on("end", () => {
            console.log("PUT 본문(Body):", body);
            users[key] = JSON.parse(body).name;
            return res.end(JSON.stringify(users));
          });
        }
      } else if (req.method === "DELETE") {
        if (req.url.startsWith("/user/")) {
          const key = req.url.split("/")[2];
          delete users[key];
          return res.end(JSON.stringify(users));
        }
      }
      res.writeHead(404);
      return res.end("NOT FOUND");
    } catch (err) {
      console.error(err);
      res.writeHead(500);
      res.end(err);
    }
  })
  .listen(8082, () => {
    console.log("8082번 포트에서 서버 대기 중입니다");
  });
