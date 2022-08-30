const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const Product = require('./models/product');
const app = express();

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost:27017/farmStand');
  console.log('Connected to mongodb');
}

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.listen(3000, () => {
  console.log('listening at 3000');
});

app.get('/products', async (req, res) => {
  const products = await Product.find({});

  res.render('products/index', { products });
});

app.get('/products/:id', async (req, res) => {
  const { id } = req.params;
  const products = await Product.findAll({ id: id });

  res.render('products/index', { products });
});
