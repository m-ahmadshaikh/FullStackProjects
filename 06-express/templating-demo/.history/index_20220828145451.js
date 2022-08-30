const express = require('express');
const app = express();


app.get('/', (req, res) => {
    res.ren('Hey Hehe!');
  });

app.set('view engine','ejs');
  

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
