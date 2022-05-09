// 이번에는 노드 자체에서 잡아주는 에러를 알아보겠습니다.

// fs.unlink로 존재하지 않는 파일을 지우고 있습니다.
// 에러가 발생하지만 다행히 노드 내장 모듈의 에러는
// 실행 중인 프로세스를 멈추지 않습니다.
// 에러 로그를 기록해두고 나중에 원인을 찾아 수정하면 됩니다.

// 3.6절의 예제에서는 에러가 발생했을 때
// 에러를 throw했습니다. 그런데 throw를 하면 노드 프로세스가 멈춰버립니다.
// 따라서 throw를 하는 경우에는 반드시
// try/catch문으로 throw한 에러를 잡아야 합니다.

const fs = require("fs");

setInterval(() => {
  // 존재하지 않는 파일 지우기
  fs.unlink("./abcdefg.js", (err) => {
    if (err) {
      console.error(err);
    }
  });
}, 1000);
