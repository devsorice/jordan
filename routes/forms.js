var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('forms', { title: 'Form - Indice' });
});

router.get('/show/:form', function(req, res, next) {
  res.render(req.params.form, { title: 'Form - Dettaglio' });
});

module.exports = router;
