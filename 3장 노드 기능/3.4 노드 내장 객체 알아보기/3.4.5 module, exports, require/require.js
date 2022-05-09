console.log("require가 가장 위에 오지 않아도 됩니다.");

module.exports = "저를 찾아보세요.";

require("./var");

console.log("require.cache입니다.");
// require.cache 객체에 require.js나 var.js
// 같은 파일 이름이 속성명으로 들어 있는 것을 볼 수 있다.
console.log(require.cache); // 한 번 require한 파일은 require.cache에 저장됨
console.log("require.main입니다.");
console.log(require.main === module); //true
console.log(require.main.filename);

// require.main은 노드 실행 시 첫 모듈을 가리킵니다.
// 현재 node require로 실행했으므로 require.js가 require.main이 됩니다.
// require.main 객체의 모양은 require.cache의 모듈 객체와 같습니다.
// 현재 파일이 첫 모듈인지 알아보려면 require.main === module을 해보면 됩니다.
// node require로 실행한 경우, var.js에서 require.main === module을 실행하면
// false가 반환될 것입니다.
// 첫 모듈의 이름을 알아보려면 require.main.filename으로 확인하면 됩니다.
