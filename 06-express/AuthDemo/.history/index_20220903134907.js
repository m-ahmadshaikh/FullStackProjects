const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.get('/register', (req, res, next) => {
  res.render('register');
});

app.get('/secret', (req, res, next) => {
  res.send('You cannot view this secret!');
});

app.listen(3000);
