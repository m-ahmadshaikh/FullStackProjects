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

Product.statics.fireSale = function(){
    this.findAll({name:'StormFi'})
}

Product.insertMany([{ name: 'Storm Fiber', price: 300, color: 'red' }]).then(
  (data) => console.log(data)
);
