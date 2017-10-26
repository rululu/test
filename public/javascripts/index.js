var express = require('express');
var router = express.Router();
var fs=require("fs");
router.get('/', function(req, res, next) {
	var data=fs.readFileSync("write.txt","utf-8")
	var t2=$("#text2").val()
	var t=$("#text").val()
	fs.writeFile("write.txt",t2+t,"utf-8")
});

module.exports = router;
