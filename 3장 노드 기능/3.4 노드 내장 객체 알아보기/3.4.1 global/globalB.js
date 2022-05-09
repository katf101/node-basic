// A에는 global.message 를 할당 받음
const A = require("./globalA");

global.message = "안녕하세요";
console.log(A());
