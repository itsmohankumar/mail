var express = require('express'),
    push = express.Router(),
    bodyParser = require('body-parser'),
    nodemailer = require('nodemailer');

var urlencodedParser = bodyParser.urlencodedParser({ extended: false })

push.use(bodyParser.json());

push.post('/Entry',urlencodedParser, function (req, res) {
	var Total = parseInt(req.body.stack) * parseInt(req.body.price);
	console.log(req.body)
	var smtpTransport = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
    user: 'koodimohan@gmail.com',
    pass: 'Thottiyam@15'
     }
 });

    var mailOptions = {
    from: 'koodimohan@gmail.com',
    to: 'tamilvalavan18@gmail.com',
    subject: 'Your Bill',
    text: 'Total='+Total
 };
  smtpTransport.sendMail(mailOptions, function(error, info){
  if (error) {
     console.log(error);
   } else {
     console.log('Email sent: ' + info.response);
     res.status(200).send(" Bills are send your maill & Amount is="+Total);
   }
  
 });
	
});
module.exports = push