const express = require('express');
const path = require('path');
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.json());
const comments = [
  { id: 1, username: 'ahmad', comment: 'hehe' },
  { id: 2, username: 'hala', comment: 'haha' },
  { id: 3, username: 'hadiya', comment: 'hqhq' },
];

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//  Get Comments
app.get('/comments', (req, res) => {
  res.render('comments/index.ejs', { comments });
});
//  Post Comments
app.post('/comments', (req, res) => {
  const { username, comment } = req.body;
  comments.push({ username, comment });
  res.redirect('/comments');
});
//  New Comments
app.get('/comments/new', (req, res) => {
  res.render('comments/new.ejs');
});

app.get('/comments/:id', (req, res) => {
  const { id } = req.params;
  let comment = comments.find((c)=>c.id);
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
