const express = require('express');
const app = express();


app.get('/register',(req,res,next)=>{
    res.render('view/register')
})

app.get('/secret', (req, res, next) => {
  res.send('You cannot view this secret!');
});

app.listen(3000);
