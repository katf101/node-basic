// 스트림을 배울 때 on('data', 콜백) 또는
// on('end', 콜백)을 사용했습니다.
// 바로 data라는 이벤트와 end라는 이벤트가 발생할 때
// 콜백 함수를 호출하도록 이벤트를 등록한 것입니다.
// createReadStream 같은 경우는 내부적으로 알아서
// data와 end 이벤트를 호출하지만,
// 우리가 직접 이벤트를 만들 수도 있습니다.

//다음 예제를 통해 이벤트를 만들고, 호출하고, 삭제해봅시다.
const EventEmitter = require("events");

const myEvent = new EventEmitter();
myEvent.addListener("event1", () => {
  console.log("이벤트 1");
});
myEvent.on("event2", () => {
  console.log("이벤트 2");
});
myEvent.on("event2", () => {
  console.log("이벤트 2 추가");
});
myEvent.once("event3", () => {
  console.log("이벤트 3");
}); // 한 번만 실행됨

myEvent.emit("event1"); // 이벤트 호출
myEvent.emit("event2"); // 이벤트 호출

myEvent.emit("event3"); // 이벤트 호출
myEvent.emit("event3"); // 실행 안 됨

myEvent.on("event4", () => {
  console.log("이벤트 4");
});
myEvent.removeAllListeners("event4");
myEvent.emit("event4"); // 실행 안 됨

const listener = () => {
  console.log("이벤트 5");
};
myEvent.on("event5", listener);
myEvent.removeListener("event5", listener);
myEvent.emit("event5"); // 실행 안 됨

console.log(myEvent.listenerCount("event2"));

// 이제는 스트림에서 봤던 on('data')와 on('end')에 대해서도
// 어느 정도 감이 올 겁니다.
// 겉으로 이 이벤트를 호출하는 코드는 없지만,
// 내부적으로는 chunk를 전달할 때마다 data 이벤트를 emit하고 있습니다.
// 완료되었을 경우에는 end 이벤트를 emit한 것입니다.

// 이제 직접 이벤트를 만들 수 있으므로 다양한 동작을 직접 구현할 수 있습니다.
// 웹 서버를 구축할 때 많이 사용됩니다.

// 지금까지 배운 개념들만으로도 서버를 만들기에 충분합니다.
// 하지만 서버를 운영할 때 코드에 에러가 발생하는 것은 치명적이므로,
// 마지막으로 에러를 처리하는 방법을 배워보겠습니다.
// 다음 절에서 알아봅시다.
