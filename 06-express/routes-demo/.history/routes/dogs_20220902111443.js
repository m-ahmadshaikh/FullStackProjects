const express = require('express');
const router = express.Router();

router.use((res,))

router.get('/', (req, res, next) => {
  res.send('All Dogs');
});

router.get('/:id', (req, res, next) => {
  res.send('One Dog');
});

router.get('/:id/edit', (req, res, next) => {
  res.send('Editing one dog');
});

module.exports = router;
