// createReadStream으로 파일을 읽고
// 그 스트림을 전달받아 createWriteStream으로
// 파일을 쓸 수도 있습니다. 파일 복사와 비슷합니다.
// 스트림끼리 연결하는 것을 ‘파이핑한다’고 표현합니다.
// 액체가 흐르는 관(파이프(pipe))처럼
// 데이터가 흐른다고 해서 지어진 이름입니다.

const fs = require("fs");

// readme4.txt 를 읽어서
const readStream = fs.createReadStream("readme4.txt");

// writeme3.txt 에 전달 한 후
const writeStream = fs.createWriteStream("writeme3.txt");

// 파일 생성 (복사와 비슷)
readStream.pipe(writeStream);

// readme4.txt와 똑같은 내용의 writeme3.txt가 생성되었을 것입니다.
// 미리 읽기 스트림과 쓰기 스트림을 만들어둔 후
// 두 개의 스트림 사이를 pipe 메서드로 연결하면
// 저절로 데이터가 writeStream으로 넘어갑니다.
// 따로 on('data')나 writeStream.write를 하지 않아도
// 알아서 전달되므로 편리합니다. 노
// 드 8.5 버전이 나오기 전까지는 이 방식으로 파일을 복사하곤 했습니다.
// 새로운 파일 복사 방식은 3.6.3절에 나옵니다.
