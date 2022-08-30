const express = require('express');
const path = require('path');
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.json());
const comments = [
  { username: 'ahmad', comment: 'hehe' },
  { username: 'hala', comment: 'haha' },
  { username: 'hadiya', comment: 'hqhq' },
];

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/comments', (req, res) => {
  res.render('comments/index.ejs', { comments });
});

app.post('/comments', (req, res) => {
  console.log(req.body
  res.sendStatus(200);
});

app.get('/comments/new', (req, res) => {
  res.render('comments/new.ejs');
});

app.get('/comments/:id', (req, res) => {
  const { id } = req.params;
  let comment = comments[id];
  res.render('comments/comment.ejs', { comment });
  //   res.sendStatus(200);
});

app.post('/comment', (req, res) => {
  console.log('Got body:', req.body);
  res.sendStatus(200);
});

app.patch('/comments/:id', (req, res) => {
  const { id } = req.params;
  comments[id].comment;
});

app.delete('/comments/:id', (req, res) => {});

app.listen(3000, () => {
  console.log('listening at 3000');
});
