const express = require('express');
const morgan = require('morgan');
const app = express();

app.use(morgan('tiny'));

app.use((req, res, next) => {
  req.time = new Date().toLocaleString();
  console.log('First');
  next();
});

app.use('/secret', (req, res, next) => {
  const { password } = req.query;
  req.time = new Date().toLocaleString();
  if (password == 'ahmad') {
    next();
  }
  res.send('please enter a password');
});

app.use((req, res, next) => {
  console.log('Second');
  next();
});
app.get('/', (req, res) => {
  console.log(req.time);
  res.send('Hello');
});

app.get('/secret', (req, res) => {
  res.send('I am a good person');
});

app.listen(3000, () => {
  console.log('Listening');
});
