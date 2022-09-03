const express = require('express');
const app = express();
const dogRoutes = require('./routes/dogs');

app.use('/', dogRoutes);

app.listen(3000);
