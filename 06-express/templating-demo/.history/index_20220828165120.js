const { red } = require('colors');
const express = require('express');
const app = express();
const path = require('path');
const redditData = require('./data.json');

app.get('/', (req, res) => {
  res.render('home.ejs');
});

app.use(express.static(__dirname + '/public'));
app.set('views', path.join(__dirname, '/views/'));

app.get('/rand', (req, res) => {
  const num = Math.floor(Math.random() * 10) + 1;
  res.render('random.ejs', { rand: num });
});

app.get('/cats', (req, res) => {
  const cats = ['motu', 'shair', 'zigzag', 'sukha', 'black'];
  res.render('cats.ejs', { cats });
});

app.get('/r/:subreddit', (req, res) => {
  const { subreddit } = req.params;
  const keys = Object.keys(redditData);
  if (keys.includes(subreddit)) {
    const { name, subscribers, description, posts } = redditData[subreddit];

    res.render('subreddit.ejs', { name, subscribers, description, posts });
  } else {
    res.render('empty.ejs');
  }
});

app.set('view engine', 'ejs');

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
