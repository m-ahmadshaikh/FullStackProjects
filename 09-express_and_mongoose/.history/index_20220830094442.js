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
app.use(express.urlencoded({ extended: true }));
app.listen(3000, () => {
  console.log('listening at 3000');
});

app.get('/products', async (req, res) => {
  const products = await Product.find({});

  res.render('products/index', { products });
});

app.get('/products/new', (req, res) => {
  res.render('products/new');
});

app.get('/products/:id', async (req, res) => {
  const { id } = req.params;
  const product = await Product.findById(id);
  res.render('products/product', { product });
});

app.post('/products', (req, res) => {
  const { name, price, category } = req.body;

  console.log(name);
  res.
});
