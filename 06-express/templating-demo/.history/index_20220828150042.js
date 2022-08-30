const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.render('home.ejs');
});

app.set('view engine', 'ejs');
app.set('views','')

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
