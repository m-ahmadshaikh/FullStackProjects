const express = require('express');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.get('/tacos',(req,res)=>{
    res.send(
        'Get Response'
    )
})


app.post('/tacos',(req,res)=>{
    res.send(
        'Post Response'
    )
})

app.listen(3000,()=>{
    console.log('listening at 3000');
})