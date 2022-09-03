const express = require('express');
const path = require('path');
const app = express();
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const User = require('./models/user');
const session = require('express-session');

app.use(
  session({ secret: 'notagoodsecret', resave: false, saveUninitialized: true })
);

const saltRounds = 10;
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: true }));

mongoose.connect('mongodb://localhost:27017/authDemo');
app.get('/register', (req, res, next) => {
  res.render('register');
});

const requireLogin = (req,res,next)=>{
if(req.ses)
}

app.get('/home', async (req, res, next) => {
  const users = await User.find({});
  res.render('home', { users });
});

app.get('/secret', (req, res, next) => {
  if (req.session.user_id) {
    return res.render('secret');
  }
  return res.redirect('/login');
});
app.post('/login', async (req, res, next) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });
  const check = await bcrypt.compare(password, user.password);
  if (check) {
    req.session.user_id = user._id;
    return res.redirect('/secret');
  }
  return res.redirect('login');
});
app.get('/login', async (req, res, next) => {
  res.render('login');
});
app.post('/logout', (req, res) => {
  req.session.user_id = null;
  res.redirect('/login');
});
app.post('/signup', async (req, res, next) => {
  const { username, password } = req.body;
  const hash = await bcrypt.hash(password, saltRounds);
  const user = new User({ username: username, password: hash });
  await user.save();
  req.session.user_id = user._id;

  res.redirect('/home');
});

app.listen(3000);
