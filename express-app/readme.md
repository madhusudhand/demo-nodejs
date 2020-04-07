
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
