const mongoose = require('mongoose');
main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost:27017/movieApp');
  console.log('Connected to mongodb');
}

const productSchema = mongoose.Schema({
  name: String,
  price: Number,
});

const Product = mongoose.model('Product', productSchema);

Product.insertMany([{ name: Nestle, price: 300 }]).then((data) =>
  console.log(data)
);
