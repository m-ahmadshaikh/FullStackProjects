const express = require('express');

const app = express();

// app.use((req, res) => {
//   console.log('Got a new request!!');
//   res.send('Hehe');
// });

app.get('/cat', (req, res) => {
  res.send('HeHe Meow!!');
});

app.get('/r/:subreddit', (req, res) => {
  const { subreddit } = req.params;
  res.send(`<h1>You are browsing ${subreddit}</h1>`);
});
app.get('/search', (req, res) => {
    const { q } = req.query;
    res.send(`<h1>You are browsing ${subreddit}</h1>`);
  });
  
app.listen(8080, () => {
  console.log('Listening at 8080!');
});
