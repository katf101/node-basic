// 노드에서 다른 프로그램을 실행하고 싶거나
// 명령어를 수행하고 싶을 때 사용하는 모듈입니다.
const exec = require("child_process").exec;

var process = exec("dir");

process.stdout.on("data", function (data) {
  console.log(data.toString());
}); // 실행 결과

process.stderr.on("data", function (data) {
  console.error(data.toString());
}); // 실행 에러
