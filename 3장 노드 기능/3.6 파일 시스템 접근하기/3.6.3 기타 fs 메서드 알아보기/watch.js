// 마지막으로 파일/폴더의 변경 사항을 감시할 수 있는
// watch 메서드를 알아보겠습니다.
// 빈 텍스트 파일인 target.txt를 만들고 watch.js를 작성합니다.

const fs = require("fs");

fs.watch("./target.txt", (eventType, filename) => {
  console.log(eventType, filename);
});

// // 내용물 수정 후
// change target.txt
// change target.txt
// // 파일명 변경 또는 파일 삭제 후
// rename target.txt

// 내용물을 수정할 때는 change 이벤트가 발생하고,
// 파일명을 변경하거나 파일을 삭제하면 rename 이벤트가 발생합니다.
// rename 이벤트가 발생한 후에는 더 이상 watch가 수행되지 않습니다.
// change 이벤트가 두 번씩 발생하기도 하므로 실무에서 사용할 때는
// 주의가 필요합니다.
