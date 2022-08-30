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
{subreddit} = req.params;

})

app.listen(8080, () => {
  console.log('Listening at 8080!');
});
