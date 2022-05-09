// 순서대로 출력하고 싶다면 다음 메서드를 사용할 수도 있습니다.

const fs = require("fs");

console.log("시작");
let data = fs.readFileSync("./readme2.txt");
console.log("1번", data.toString());
data = fs.readFileSync("./readme2.txt");
console.log("2번", data.toString());
data = fs.readFileSync("./readme2.txt");
console.log("3번", data.toString());
console.log("끝");

// 코드의 모양이 많이 바뀌었습니다.
// readFile 대신 readFileSync라는 메서드를 사용했습니다.
// 그런데 콜백 함수를 넣는 대신 직접 return 값을 받아옵니다.
// 그 값을 다음 줄부터 바로 사용할 수 있습니다.

// console
// 시작
// 1번 저를 여러 번 읽어보세요.
// 2번 저를 여러 번 읽어보세요.
// 3번 저를 여러 번 읽어보세요.
// 끝
