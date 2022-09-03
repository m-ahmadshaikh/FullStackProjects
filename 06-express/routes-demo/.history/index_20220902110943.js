const express = require('express');
const dogRoutes = require('./routes/dogs');


app.use('/',dogRoutes)