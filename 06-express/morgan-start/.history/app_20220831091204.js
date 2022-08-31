const express = require('express');
const morgan = require('morgan');
const app = express();

app.use(morgan('tiny'));

app.use((req, res, next) => {
  req.time = new Date().toLocaleString();
  console.log('First');
  next();
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
    console.log(req.time);
    res.send('Hello');
  });

app.listen(3000, () => {
  console.log('Listening');
});
