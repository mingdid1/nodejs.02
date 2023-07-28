const express = require("express");
const member = require("./db/memberDAO");

const app = express();
const router = express.Router();

app.set("views", "./views");
app.set("view engine", "ejs");

app.use("/", router);

const router2 = express.Router();

app.use("/board", router2);

// test1 url 요청시 test1.ejs 연결
// test2 url 요청시 test2.ejs 연결

router.get("/test1", (req, res)=> {
    console.log(member);
    res.render("test1");
});
router.get("/test2", (req, res)=> {
    res.render("test2");
});

router2.get("/index", (req, res)=> {
    res.send("/board/index 연결되었습니다!");
});

router.get("/member/index", (req, res)=> {
    res.render("index");
});

/*
app.get("/", (req, res)=> {
    res.render("index");
});
*/

app.listen(3000, ()=> {console.log("3000 port server")});