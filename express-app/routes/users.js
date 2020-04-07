var express = require('express');
var router = express.Router();

const checkLogin = require('../helpers/auth-helper');
const getUser = require('../helpers/user-helper');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.status(301).header({ Location: '/users/details'}).send({});
});

router.get('/:username', function(req, res, next) {
  console.log(req.headers);
  const pathParams = req.params;
  const user = getUser(pathParams.username);
  if (!user) {
    return res.send('User not found'); 
  }
  res.setHeader('content-type', 'applicaton/json');
  const result = JSON.stringify({ message: 'Hello from ' + user.fullName});
  res.send(result);
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

router.post('/login', (req, res) => {
  const cred = req.body;
  const headers = req.headers;

  console.log(headers.authorization);

  if (!cred.username || !cred.password) {
    // reject
    return res.status(400).send({ status: 'not ok'});
  }

  const isValid = checkLogin(cred.username, cred.password);
  res.status(200).send({
    status: isValid?'ok':'invalid',
  });
});

module.exports = router;
