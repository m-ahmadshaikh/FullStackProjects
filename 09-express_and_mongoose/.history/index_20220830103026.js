const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const Product = require('./models/product');
var methodOverride = require('method-override');
const app = express();
app.use(methodOverride('_method'));
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

app.get('/products/:id/edit', async (req, res) => {
  const { id } = req.params;
  const product = await Product.findById(id);
  res.render('products/update', { product });
});
//update
app.put('/products/:id', async (req, res) => {
  const { id } = req.params;
  const { name, price, category } = req.body;
  const product = await Product.findById(id);
product.name = name;
  product.price = name;
  product.categro = name;
  await doc.save();
  res.redirect('products/');
});
app.post('/products', (req, res) => {
  const { name, price, category } = req.body;
  Product.create({ name, price, category })
    .then((d) => {
      console.log(d);
    })
    .catch((err) => {
      console.log(err);
    });
  res.redirect('products/');
});
