const crypto = require("crypto");

const algorithm = "aes-256-cbc";
const key = "abcdefghijklmnopqrstuvwxyz123456";
const iv = "1234567890123456";
const cipher = crypto.createCipheriv(algorithm, key, iv);
let result = cipher.update("암호화할 문장", "utf8", "base64");
result += cipher.final("base64");
console.log("암호화:", result);
// 암호화: iiopeG2GsYlk6ccoBoFvEH2EBDMWv1kK9bNuDjYxiN0=

const decipher = crypto.createDecipheriv(algorithm, key, iv);
let result2 = decipher.update(result, "base64", "utf8");
result2 += decipher.final("utf8");
console.log("복호화:", result2);
// 복호화: 암호화할 문장

// 원래 문장으로 제대로 복호화되었습니다.

// 지금까지 배운 메서드 이외에도 crypto 모듈은 양방향 비대칭형 암호화,
// HMAC 등과 같은 다양한 암호화를 제공하고 있으니 암호화가 필요하면
// 모듈이 어떤 메서드들을 지원하는지 확인해보면 좋습니다.
// 노드 공식 문서(https://nodejs.org/api/crypto.html)에서 확인할 수 있습니다.
// 좀 더 간단하게 암호화를 하고 싶다면 npm 패키지인 crypto-js
// (https://www.npmjs.com/package/crypto-js)를 추천합니다.
