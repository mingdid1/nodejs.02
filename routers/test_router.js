const express = require("express");
const member = require("../db/memberDAO");
const router = express.Router();

router.get("/", (req, res)=> {
    console.log("DBMember : ", member);
    res.render("index");
});

module.exports = router;