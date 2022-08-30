const express = require('express');

const app = express();

app.use((req,res)=>{
console.log('Got a new request!!');
res.send('Hehe');
});

app.listen(8080,()=>{
    console.log('Listening at 8080!');
})