const express = require('express');
const path = require('path');
const { v4: uuid } = require('uuid');
const app = express();
const methodOverride = require('method-override');
app.use(methodOverride('_method'));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.json());
const comments = [
  { id: uuid(), username: 'ahmad', comment: 'hehe' },
  { id: uuid(), username: 'hala', comment: 'haha' },
  { id: uuid(), username: 'hadiya', comment: 'hqhq' },
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
  comments.push({ id: uuid(), username, comment });
  res.redirect('/comments');
});
//  New Comments
app.get('/comments/new', (req, res) => {
  res.render('comments/new.ejs');
});

app.get('/comments/:id', (req, res) => {
  const { id } = req.params;
  let comment = comments.find((c) => c.id.toString() === id.toString());
  res.render('comments/comment.ejs', { comment });
  //   res.sendStatus(200);
});

app.get('/comments/:id/edit', (req, res) => {
  const { id } = req.params;
  let comment = comments.find((c) => c.id.toString() === id.toString());
  res.render('comments/edit.ejs', { comment });
  //   res.sendStatus(200);
});

app.patch('/comments/:id', (req, res) => {
  console.log(req.body);
  const newCommentText = req.body.comment;
  const { id } = req.params;
  let comment = comments.find((c) => c.id.toString() === id.toString());
  comment.comment = newCommentText;
  res.redirect('/comments');
});

app.delete('/comments/:id', (req, res) => {
    const { id } = req.params;
   comments.filter((c) => c.id.toString() !== id.toString());
    res.redirect('/comments');
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
