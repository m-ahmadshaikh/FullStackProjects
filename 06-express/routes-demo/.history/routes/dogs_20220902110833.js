const express = require('express');
const router = express.Router();


router.get(
    '/',(req,res,next)=>{
        res.send('All Dogs')
    }
)


router.get(
    '/:id',(req,res,next)=>{
        res.send('All Dogs')
    }
)