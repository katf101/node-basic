// 노드에서 멀티스레드로 작업을 할 수 있도록 지원하는 모듈
const { Worker, isMainThread, parentPort } = require("worker_threads");

// isMainThread로 분기처리
// 메인 스레드는 if문에서 처리
// 워커 스레드는 else 에서 처리
if (isMainThread) {
  // 부모일 때
  const worker = new Worker(__filename); // 워커 스레드 1개 생성
  worker.on("message", (message) => console.log("from worker", message));
  worker.on("exit", () => console.log("worker exit"));
  worker.postMessage("ping"); // 워커에 보내는 메세지
} else {
  // 워커일 때
  // 부모로 부터 메세지 를 받을 수 있음
  parentPort.on("message", (value) => {
    console.log("from parent", value);
    parentPort.postMessage("pong");
    parentPort.close();
  });
}

// console

// from parent ping
// from worker pong
// worker exit
