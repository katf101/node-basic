setImmediate(() => {
  console.log("immediate");
});

// 마이크로태스크(microtask)
process.nextTick(() => {
  console.log("nextTick");
});

setTimeout(() => {
  console.log("timeout");
}, 0);

// 마이크로태스크(microtask)
Promise.resolve().then(() => console.log("promise"));
