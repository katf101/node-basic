// dep1 과 dep2가 서로를 require
const dep1 = require("./dep1");
const dep2 = require("./dep2");

// module.exports 가 함수가아니라
// 빈 객체로 표시됨
// 이러한 현상을 순환참조라고 부름
dep1(); // {}
dep2(); // [Function (anonymous)]
