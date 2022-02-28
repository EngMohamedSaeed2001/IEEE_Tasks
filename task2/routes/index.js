var express = require('express');
const jwt = require('jsonwebtoken');
var db = require("../models");
const User = db.user;
var router = express.Router();

const secretKey="MFwwDQYJKoZIhvcNAQEBBQADSwAwSAJBANQBl/LHkCb8ikqeWmkgQuYVqKIc71Wf\n" +
                "9FO3ZxByHjYG4iTFgGO88Qi8xO5lHRb0GEfgMkRHL2DNCjnrtn5Skn8CAwEAAQ"
/* GET home page. */
router.post('/', async function (req, res, next) {

  let firstName = req.body.firstName;
  let lastName = req.body.lastName;
  let email = req.body.email;
  let password = req.body.password;


  let user = (await User).build({firstName: firstName, lastName: lastName, email: email, password: password});
  await user.save();

  (User).findAll().then(
      function (data) {
        res.render('table', {users: data});
      }
  );
});

router.get('/', function (req, res, next) {
  res.render('signUp');
});

router.get('/users/table', function (req, res, next) {
  const token = req.cookies.auth;
  if (token) {
    (User).findAll().then(
        function (data) {
          res.render('table', {users: data});
        }
    );
  } else {
    res.render('error',{err:"400",msg:"Please login first",});
  }
});

router.post('/login', function (req, res, next) {

  User.findOne({where: {email: req.body.email}}).then(function (user) {
        let token;
        if (user) {
          let password_valid;

          if (req.body.password === user.password) {
            password_valid = true;
          }

          if (password_valid) {
            token = jwt.sign({
              "id": user.id,
              "email": user.email,
              "firstName": user.firstName
            }, secretKey);
            console.log(token);

            res.cookie('auth', token);
            res.render('success');

          } else {

            res.render("error",{err:"401",msg:"Password incorrect try again",});
          }

        } else {
          res.render("error",{err:"403",msg:'User does not exist please create account',});

        }
      }
  )


});


router.get('/login', function (req, res, next) {
  res.status(200).clearCookie('auth');
  res.render('login');
});


module.exports = router;
