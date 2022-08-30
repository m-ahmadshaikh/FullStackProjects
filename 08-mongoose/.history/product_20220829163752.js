const mongoose = require('mongoose');
main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost:27017/productApp');
  console.log('Connected to mongodb');
}

const productSchema = mongoose.Schema({
  name: String,
  price: Number,
});

const Product = mongoose.model('Product', productSchema);

productSchema.statics.fireSale = function () {
  return this.updateMany({ name: 'StormFiber' }, { name: 'FiberStorm' });
};

// Product.insertMany([{ name: 'Storm Fiber', price: 300, color: 'red' }]).then(
//   (data) => console.log(data)
// );

const findProduct = async () => {
  await Product.fireSale.then((res) => console.log(res));
};
