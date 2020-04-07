var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.end('Hello World');
  // res.render('index', { title: 'Express' });
});

router.get('/about', function(req, res, next) {
  res.end('About page');
  // res.render('index', { title: 'Express' });
});

router.get('/docs', function(req, res, next) {
  res.end('this is docs page');
  // res.render('index', { title: 'Express' });
});

module.exports = router;
