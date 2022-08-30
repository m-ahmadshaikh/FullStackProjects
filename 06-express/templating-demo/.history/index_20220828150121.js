const express = require('express');
const app = express();
const path = require('path')
app.get('/', (req, res) => {
  res.render('home.ejs');
});

app.set('view engine', 'ejs');
app.set('views',path.join(__dirname,'/v'))

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
