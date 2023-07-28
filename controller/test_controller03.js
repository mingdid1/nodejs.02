const member = require("../db/memberDAO");
const index = (req, res)=> {
    console.log("index 컨트롤러 연결");
    console.log( member );
    res.render("index");
}

const test1 = (req, res)=> {
    res.render("test1");
}
const test2 = (req, res)=> {
    res.render("test2");
}

module.exports = {index, t1:test1, t2:test2};
// key값과 value 이름이 같을경우 그냥 하나의 값만 작성해주면 되고
// 다르게 작성할 경우 key:value값으로 작성해줘야한다.