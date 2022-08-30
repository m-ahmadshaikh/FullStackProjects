const express = require('express');

const app = express();

app.use(()=>{
console.log('Got a new request!!');
});

app.listen(8080,()=>{
    console.log('Listening at 8080!');
})