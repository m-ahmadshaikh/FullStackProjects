const express = require('express');

const app = express();

app.get('/tacos',(req,res)=>{
    res.send(
        'Get Response'
    )
})


app.post('/tacos',(req,res)=>{
    res.send(
        'Get Response'
    )
})