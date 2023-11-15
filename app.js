// express framework 불러오기
const express = require('express');
// express를 통해 웹 서버 할당
const app = express();
// 호출시 origin (요청 도메인)이 달라도 요청 허용하는 라이브러리
const cors = require('cors');
// 프로그램 port : 3000 할당
const port = 3000;

app.use(cors());

// 프로그램이 3000을 열고, 요청 대기
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
