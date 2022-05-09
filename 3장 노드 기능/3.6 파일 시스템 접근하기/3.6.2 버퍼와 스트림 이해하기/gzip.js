// pipe는 스트림 사이에 여러 번 연결할 수 있습니다.
// 다음 코드는 파일을 읽은 후 gzip 방식으로 압축하는 코드입니다.

// 노드에서는 파일을 압축하는 zlib이라는 모듈도 제공합니다.
const zlib = require("zlib");
const fs = require("fs");

const readStream = fs.createReadStream("./readme4.txt");

// zlib의 createGzip이라는 메서드가 스트림을 지원하므로
// readStream과 writeStream 중간에서 파이핑을 할 수 있습니다.
const zlibStream = zlib.createGzip();
// 버퍼 데이터가 전달되다가 gzip 압축을 거친 후 파일로 써집니다.

const writeStream = fs.createWriteStream("./readme4.txt.gz");
readStream.pipe(zlibStream).pipe(writeStream);

// readme4.txt.gz 파일이 생성됩니다.
// 압축된 파일이라 내용물을 읽기는 힘듭니다.

// 이렇게 전체 파일을 모두 버퍼에 저장하는 readFile 메서드와
// 부분으로 나눠 읽는 createRead Stream 메서드를 알아봤습니다.
// 이 두 메서드의 메모리 사용량이 얼마나 다른지 실제로 확인해보겠습니다.
