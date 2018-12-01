const express = require('express');
const bodyParser = require('body-parser');
var userRouter = require('./routers/user.js');
var server = express();
server.listen(3000,()=>{
	console.log('服务器启动成功...');
});


server.use(bodyParser.urlencoded({extended:false}));
server.use(express.static('public'));
server.use(express.static('routers'));
server.use('/user',userRouter);
