const { red } = require('colors');
const express = require('express');
const app = express();
const path = require('path');
const redditData = require('./data.json');

app.get('/', (req, res) => {
  res.render('home.ejs');
});

app.get('/rand', (req, res) => {
  const num = Math.floor(Math.random() * 10) + 1;
  res.render('random.ejs', { rand: num });
});

app.get('/cats', (req, res) => {
  const cats = ['motu', 'shair', 'zigzag', 'sukha', 'black'];
  res.render('cats.ejs', { cats });
});
console.log(Object.keys(redditData));
app.get('/r/:subreddit', (req, res) => {
  const { subreddit } = req.params;

  const { name, subscribers, description, posts } = redditData[subreddit];

  res.render('subreddit.ejs', { name, subscribers, description, posts });
});

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
