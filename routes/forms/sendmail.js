async function send(html,text){
  	  var nodemailer     = require('nodemailer');
	  // Generate test SMTP service account from ethereal.email
	  // Only needed if you don't have a real mail account for testing
	  let testAccount = await nodemailer.createTestAccount();
	  var smtpConfig = require(__basedir + '/config/smtp.js');
	  // create reusable transporter object using the default SMTP transport
	  let transporter = nodemailer.createTransport(smtpConfig);
	  // send mail with defined transport object
	  let info = await transporter.sendMail({
	    from: '"Francesco" <dev@sorice.info>', // sender address
	    to: '"Francesco" <devsorice@gmail.com>', // list of receivers
	    subject: "Qualcuno ti vuole parlare...", // Subject line
	    text: text, // plain text body
	    html: html // html body
	  });
	  console.log("Message sent: %s", info.messageId);
	  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
	  // Preview only available when sending through an Ethereal account
	  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
	  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}
class Sendmail {
  	constructor() {
  	}
 	submit(app,params,query,body){
	  	app.render('email/'+params.form, { title: 'Form - Dettaglio', form:params.form, 'body':body}, function (err, html) {
	  		var text = JSON.stringify( body, null, 2 );
	 		send(html,text);
	    });
	}
}
module.exports = Sendmail;