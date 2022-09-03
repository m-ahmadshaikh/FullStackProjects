const express = require('express');
const router = express.Router();
const session = require('express-session');
const cookieParser = require('cookie-parser');
const isAdmin = function (req, res, next) {
  if (req.query.isAdmin) {
    return next();
  }
  return res.send('Not and admin');
};
router.use(
  session({ secret: 'notgoodsecret', resave: false, saveUninitialized: false })
);

router.use('/viewcount', (req, res, next) => {
  if (req.session.viewcount) {
    req.session.viewcount += 1;
  } else {
    req.session.viewcount = 1;
  }
  res.send(req.session.viewcount);
});
router.use(cookieParser('signed'));

router.get('/', isAdmin, (req, res, next) => {
  console.log(req.cookies);
  res.send('All Dogs');
});

router.get('/setname', (req, res, next) => {
  res.cookie('name', 'ahmad', { signed: true });
  res.send('name set');
});

router.get('/:id', (req, res, next) => {
  const { name = 'hehe' } = req.signedCookies;
  res.send(name);
});

router.get('/:id/edit', (req, res, next) => {
  res.send('Editing one dog');
});

module.exports = router;
