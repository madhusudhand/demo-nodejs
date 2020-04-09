var express = require('express');
var router = express.Router();

const checkLogin = require('../helpers/auth-helper');
const getUser = require('../helpers/user-helper');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.status(301).header({ Location: '/users/details'}).send({});
});

router.get('/details', function(req, res, next) {
  console.log(req.query);
  const queryParams = req.query;
  const user = getUser(queryParams.username);
  if (!user) {
    return res.send('User not found'); 
  }
  res.send('Hello from ' + user.fullName);
});

router.get('/login', (req, res) => {
  res.cookie('is_loggedin', 'yes');
  res.cookie('auth_token', 'qwertyuio', {httpOnly: true, maxAge: 1000000});
  res.send(200);
});

router.get('/:username', function(req, res) {
  // console.log(req.headers);
  const pathParams = req.params;
  const user = getUser(pathParams.username);
  if (!user) {
    return res.send('User not found'); 
  }

  // res.setHeader('content-type', 'applicaton/json');
  // const result = JSON.stringify({ message: 'Hello from ' + user.fullName});
  res.send('Hello');
});

module.exports = router;
