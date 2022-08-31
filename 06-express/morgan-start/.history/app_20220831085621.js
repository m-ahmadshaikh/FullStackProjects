const express = require('express');
const morgan = require('morgan');
const app = express();

app.use(morgan('tiny'));

app.use((req,res,next)=>{
    console.log('First')
    next()
})

app.get('/', (req, res) => {
  res.send('Hello');
});


app.listen(3000, () => {
    console.log('Listening');
  });
  