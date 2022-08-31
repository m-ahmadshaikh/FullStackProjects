const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const Product = require('./models/product');
const AppError = require('./AppError');
ObjectId = require('mongodb').ObjectId;
var methodOverride = require('method-override');
const { wrap } = require('module');
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

function wrapAsync(func) {
  return function (req, res, next) {
    func(req, res, next).catch((e) => next(e));
  };
}
app.get(
  '/products',
  wrapAsync(async (req, res, next) => {
    const { category } = req.query;

    let products;
    if (category) {
      products = await Product.find({ category: category });
    } else {
      products = await Product.find({});
    }

    res.render('products/index', { products, category });
  })
);

app.get('/products/new', (req, res) => {
  res.render('products/new');
});
app.put('/products/:id/edit', async (req, res, next) => {
  const { id } = req.params;
  const { name, price, category } = req.body;
  try {
    const product = await Product.findByIdAndUpdate(
      id,
      { name, price, category },
      { runValidators: true }
    );
    res.redirect('/products');
  } catch (e) {
    return next(e);
  }

  //   res.send('good');
});
app.get(
  '/products/:id',
  wrapAsync(async (req, res, next) => {
    const { id } = req.params;

    let product;

    product = await Product.findById(id);

    if (!product) {
      return next(new AppError(404, 'Product Not Found'));
    }
    res.render('products/product', { product });
  })
);

app.get(
  '/products/:id/edit',
  wrapAsync(async (req, res, next) => {
    const { id } = req.params;

    const product = await Product.findById(id);
    res.render('products/update', { product });
  })
);
//update

app.post(
  '/products',
  wrapAsync((req, res, next) => {
    const { name, price, category } = req.body;

    Product.create({ name, price, category })
      .then((d) => {
        console.log(d);
      })
      .catch((err) => {
        next(err);
      });
    res.redirect('products/');
  })
);

app.delete('/products/:id/delete', async (req, res, next) => {
  const { id } = req.params;
  try {
    await Product.findByIdAndDelete(id)
      .then((d) => {
        console.log(d);
      })
      .catch((err) => {
        console.log(err);
      });
    res.redirect('/products');
  } catch (e) {
    return next(e);
  }
});

app.use((err, req, res, next) => {
  const { status = 500, message = 'Some Error' } = err;
  res.status(status).send(message);
});
