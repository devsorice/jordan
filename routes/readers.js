var express = require('express');
var router = express.Router();


router.get('/pdf', function(req, res, next) {
 res.render('readers/pdf', {});
});


module.exports = router;
