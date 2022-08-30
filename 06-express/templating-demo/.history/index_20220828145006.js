const express = require('express');
const app = express();



app.use(3000, () => {
  console.log('Listening on port 3000');
});
