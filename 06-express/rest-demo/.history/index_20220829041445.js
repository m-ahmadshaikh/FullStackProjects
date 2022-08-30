const express = require('express');
const path = require('path');

const comments = ['first', 'second', 'third'];

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/comments', (req, res) => {
  res.send('Get Response');
});

app.get('/comments/:id', (req, res) => {
  const { id } = req.params;
  console.log(id);
  res.sendStatus(200);
});

app.post('/comment', (req, res) => {
  console.log('Got body:', req.body);
  res.sendStatus(200);
});

app.patch('/comments/:id', (req, res) => {});

app.delete('/comments/:id', (req, res) => {});

app.listen(3000, () => {
  console.log('listening at 3000');
});
