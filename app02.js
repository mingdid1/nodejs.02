// router: 사용자 url 요청시 연결만 하는 기능
// controller: service 또는 view 로 연결 및 데이터 전송 기능
// service: 사용자로 부터 넘겨받은 값 연산 및 DB에서 넘어온 값 연산 기능
// dao: 데이터 베이스 접근 연산 기능
// view: 화면에 보여주는 기능

const express = require("express");
const router = require("./routers/test_router");

const app = express();
app.set("views", "./views");
app.set("view engine", "ejs");

app.use("/", router);

router.get("/test1", (req, res)=>{
    res.render("test1");
});
router.get("/test2", (req, res)=>{
    res.render("test2");
});

app.listen(3000,()=> {console.log("3000 server")});
