const express = require('express');
const app = express();


app.get('/', (req, res) => {
    res.render(./views);
  });

app.set('view engine','ejs');
  

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
