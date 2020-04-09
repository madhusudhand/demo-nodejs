module.exports = function(req, res, next){
  console.log('hello');

  const cookies = req.cookies;
  if (cookies.auth_token) {
    next();
  } else {
    res.send(401);
  }
}