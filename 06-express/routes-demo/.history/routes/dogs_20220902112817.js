const express = require('express');
const router = express.Router();

const isAdmin = function (req, res, next) {
  if (req.query.isAdmin) {
    next();
  }
  res.send('Not and admin');
};

router.get('/', isAdmin, (req, res, next) => {
  res.send('All Dogs');
});

router.get('/setname')

router.get('/:id', (req, res, next) => {
  res.send('One Dog');
});

router.get('/:id/edit', (req, res, next) => {
  res.send('Editing one dog');
});

module.exports = router;
