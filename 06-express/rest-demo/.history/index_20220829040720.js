const express = require('express');

const comments = ['first','second','third']

const app = express();
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.get('/tacos',(req,res)=>{
    res.send(
        'Get Response'
    )
})


app.post('/tacos',(req,res)=>{
    console.log('Got body:', req.body);
    res.sendStatus(200);
})

app.listen(3000,()=>{
    console.log('listening at 3000');
})