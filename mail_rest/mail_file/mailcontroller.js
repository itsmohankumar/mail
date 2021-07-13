var express = require('express'),
    push = express.Router(),
    bodyParser = require('body-parser'),
    nodemailer = require('nodemailer');

var urlencodedParser = bodyParser.urlencoded({ extended: false })

push.use(bodyParser.json());

push.post('/Entry',urlencodedParser,function(req,res){
	var Total = parseInt(req.body.stack) * parseInt(req.body.price);
	console.log(req.body)
	var smtpTransport = nodemailer.createTransport({
	service : 'Gmail',
	auth    :{
		user:'koodimohan@gmail.com',
		pass:'Thottiyam@15'
	}
});
	var mailOptions = {
		from : 'koodimohan@gmail.com',
		to   : 'gopishanmugam2000@gmail.com',
		subject: 'Find your Bill',
		text : 'price='+Total
	};
	smtpTransport.sendMail(mailOptions,function(error,info){
		if (error) {
			console.log(error);
		} else {
			console.log('Email sent: ' +info.response);
			res.status(200).send("Bill are send your mail & price is="+Total);
		}
	})
});
module.exports=push;