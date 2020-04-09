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

router.get('/documents', function(req, res, next) {
  res.setHeader('Location', '/docs');
  res.send(301);
});

router.get('/docs', function(req, res, next) {
  // res.end(JSON.stringify({msg: 'hello'}));
  res.send('Hello from Docs');
  // res.render('index', { title: 'Express' });
});

router.post('/login', (req, res) => {
  const cred = req.body;
  const headers = req.headers;

  console.log(headers.authorization);

  if (!cred.username || !cred.password) {
    // reject
    return res.status(400).send({ status: 'not ok'});
  }

  const isValid = checkLogin(cred.username, cred.password);
  if (isValid) {
    res.cookie('is_loggedin', 'yes');
    res.cookie('auth_token', 'qwertyuio', {httpOnly: true, maxAge: 10000});
  }
  res.status(200).send(JSON.stringify({
    status: isValid?'ok':'invalid',
  }));
});

module.exports = router;
