const express = require('express');
const app = express();
const path = require('path')

app.set('view',path.join(__dirname,'views'));