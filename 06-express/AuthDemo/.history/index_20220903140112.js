const express = require('express');
const path = require('path');
const app = express();
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const User = require('./models/user');
const saltRounds = 10;
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: true }));

mongoose.connect('mongodb://localhost:27017/authDemo');
app.get('/register', (req, res, next) => {
  res.render('register');
});

app.get('/secret', (req, res, next) => {
  res.send('You cannot view this secret!');
});

app.post('/signup', async (req, res, next) => {
  const { username, password } = req.body;
  const hash = await bcrypt.hash(password, saltRounds);
  const user = new User({username: username,password:hash});
  user.save()
  res.send(hash);
});

app.listen(3000);
