const express = require('express');
const morgan = require('morgan');
const app = express();

app.use(morgan('tiny'));

app.listen(3000, () => {
  console.log('Listening');
});

app.get('/',(req,res)=>{
    res.send('')
})
