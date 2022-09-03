const express = require('express');
const router = express.Router();
var cookieParser = require('cookie-parser')
const isAdmin = function (req, res, next) {
  if (req.query.isAdmin) {
    next();
  }
  res.send('Not and admin');
};

router.get('/', isAdmin, (req, res, next) => {
  res.send('All Dogs');
});

router.get('/setname', (req, res, next) => {
  res.cookie('name', 'ahmad');
  res.send('name set');
});

router.get('/:id', (req, res, next) => {
  res.send('One Dog');
});

router.get('/:id/edit', (req, res, next) => {
  res.send('Editing one dog');
});

module.exports = router;
