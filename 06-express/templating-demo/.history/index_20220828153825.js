const express = require('express');
const app = express();
const path = require('path');

app.get('/', (req, res) => {
  res.render('home.ejs');
});

app.get('/rand', (req, res) => {
  const num = Math.floor(Math.random() * 10) + 1;
  res.render('random.ejs', { rand: num });
});


app.get('/cats', (req, res) => {
  const cats = ['Math.floor(Math.random() * 10) + 1'];
  res.render('cats.ejs', { rand: num });
});

app.get('/r/:subreddit', (req, res) => {
  const { subreddit } = req.params;
  res.render('subreddit.ejs', { subreddit });
});

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
