const crypto = require("crypto");

// 먼저 randomBytes() 메서드로 64바이트 길이의 문자열을 만듭니다.
crypto.randomBytes(64, (err, buf) => {
  // 이것이 salt가 됩니다.
  const salt = buf.toString("base64");
  console.log("salt:", salt);
  // salt: OnesIj8wznyKgHva1fmulYAgjf/OGLmJnwfy8pIABchHZF/Wn2AM2Cn/9170Y1AdehmJ0E5CzLZULps+daF6rA==

  // sha512로 변환된 결괏값을 다시
  // sha512로 변환하는 과정을 10만 번 반복하는 겁니다.
  crypto.pbkdf2("비밀번호", salt, 100000, 64, "sha512", (err, key) => {
    console.log("password:", key.toString("base64"));
    // password: b4/FpSrZulVY28trzNXsl4vVfhOKBPxyVAvwnUCWvF1nnXS1zsU1Paq2p68VwUfhB0LDD44hJOf+tLe3HMLVmQ==
  });
});

// randomBytes이므로 매번 실행할 때마다 결과가 달라집니다.
// 따라서 salt를 잘 보관하고 있어야 비밀번호도 찾을 수 있습니다.

// pbkdf2는 간단하지만 bcrypt나 scrypt보다 취약하므로
// 나중에 더 나은 보안이 필요하면 bcrypt나 scrypt 방식을 사용하면 됩니다.
// 이 책에서는 나중에 회원의 비밀번호를 암호화할 때 bcrypt 방식을 사용합니다.
