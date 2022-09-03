const express = require('express');
const path = require('path');
const app = express();

const mongoose = require('mongoose');
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
mongoose.connect('mongodb://localhost:27017/test');
app.get('/register', (req, res, next) => {
  res.render('register');
});

app.get('/secret', (req, res, next) => {
  res.send('You cannot view this secret!');
});

app.post('/signup', (req, res, next) => {
  const { username, password } = req.query;
  res.send(username);
});

app.listen(3000);
