var express = require('express');
var push = express();
global.__root = __dirname +'/';

var mailcontroller =require(__root+'/mail_file/mailcontroller.js');
push.use('/api/get',mailcontroller);

module.exports=push;
