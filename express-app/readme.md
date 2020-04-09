
## Types of requests

RESTful

GET
POST
PUT/UPDATE
DELETE

## query params

req.query

## dynamic routes / path params

:yourvariable

req.params

## headers

get - req.headers
set - res.setHeader

auth

## status code

set - res.status(code)
    - res.send(code)


## routes

```
/
  /
  /about
  /docs
/users
  /
  /details

---------

/
/about
/docs
/users
/users/details

/hello

```



/login - GET [form un, pw]
/login - POST [un, pw]
  - auth > validate un.pw
  - generate rand token and store in db (user_session)
  - send a cookie (auth_token)

/user/profile
  - GET
  - middleware (recieve cookie auth_token)
  - validate (if set / query user_session for token against username)
  - if exists - ok (next())
  - reject
  - cb (which gives user details)
