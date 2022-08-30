const express = require('express');
const app = express();


app.get('/', (req, res) => {
    res.send('Hey Hehe!');
  });
  

app.use(3000, () => {
  console.log('Listening on port 3000');
});
