const service = require("../service/test_service04");

const index = (req, res)=> {
    const mem = service.index();
    res.render("index",{ member : mem });
}
const test1 = (req, res)=> {
    console.log("=== test1 컨트롤러 연결 ===")
    //res.render("test1");
    res.redirect("/");
}
const test2 = (req, res)=> {
    res.render("test2");
}

module.exports = {index, t1:test1, t2:test2};