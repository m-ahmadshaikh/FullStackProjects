const mongoose = require('mongoose');
const Product = require('./models/product');

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost:27017/farmStand');
  console.log('Connected to mongodb');
}

const p = new Product({
  name: 'Ruby Grapefruit',
  price: 1.99,
  category: 'fruit',
});

// p.save()
//   .then((d) => {
//     console.log(d);
//   })
//   .catch((e) => console.log(e));

Product.insertMany(
  [{ name: 'Ruby Grapefruit', price: 1.99, category: 'fruit' }],
  function (err) {console.log(err)}
);
