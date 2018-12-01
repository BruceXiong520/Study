const express = require('express');
var router = express.Router();
var pool = require("../pool.js");

router.post('/login',(req,res)=>{
	var $uname=req.body.uname;
	var $pwd=req.body.pwd;
	
	res.send("uname:"+$uname+"pwd"+$pwd);
});
router.get('/list',(req,res)=>{
	var $start=req.query.start;
	var $count=parseInt(req.query.count);
	
	
	pool.query("SELECT * FROM xz_user LIMIT ?,?",[($start-1)*$count,$count],(err,result)=>{
		if(err) throw err;
		res.send(result);
		
	});


});
module.exports = router;