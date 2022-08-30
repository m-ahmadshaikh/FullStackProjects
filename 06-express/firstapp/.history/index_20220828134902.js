const express = require('express');

const app = express();

// app.use((req, res) => {
//   console.log('Got a new request!!');
//   res.send('Hehe');
// });

app.get('/cat',(req, res)=>{
res.send('HeHe Meow!!');
})

app.get('/r/:subreddit',(req, res)=>{
const {subreddit} = req.params;
res.send(`You are browsing `)
})

app.listen(8080, () => {
  console.log('Listening at 8080!');
});
