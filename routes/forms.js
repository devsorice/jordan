var express = require('express');
var router = express.Router();
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('forms', { title: 'Form - Indice' });
});
router.get('/show/:form', function(req, res, next) {
  res.render('forms/'+req.params.form, { title: 'Form - Dettaglio', form:req.params.form});
});
router.post('/send/:form', function(req, res, next) {
	var Form = require(__dirname+'/forms/'+req.params.form);
	var form = new Form();
	form.submit(res.app,req.params,req.query,req.body);
	var pug = require('pug');
	var html = pug.render('h1 ciao');
	//res.send(html);
	res.render('email/'+req.params.form, { title: 'Form - Dettaglio', form:req.params.form, 'body':req.body});
});
module.exports = router;