const express = require('express');
const morgan = require('morgan');
const app = express();

app.use(morgan('tiny'));

app.use((req, res, next) => {
  req.time = DateTime.now();
  console.log('First');
  next();
});

app.use((req, res, next) => {
  console.log('Second', req.time);
  next();
});
app.get('/', (req, res) => {
  res.send('Hello', req.time);
});

app.listen(3000, () => {
  console.log('Listening');
});
