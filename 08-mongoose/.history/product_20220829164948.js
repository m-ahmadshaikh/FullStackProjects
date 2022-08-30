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
  return this.updateMany({ name: 'Storm Fiber' }, { name: 'FiberStorm' });
};

// Product.insertMany([{ name: 'Storm Fiber', price: 300, color: 'red' }]).then(
//   (data) => console.log(data)
// );

// Product.fireSale();
// findProduct();



// Or, Assign a function to the "statics" object of our animalSchema
productSchema.statics.findByName = function (name) {
  return this.updateMany({ name: 'Storm Fiber' }, { name: 'FiberStorm' });
};
// Or, equivalently, you can call `animalSchema.static()`.
// animalSchema.static('findByBreed', function (breed) {
//   return this.find({ breed });
// });

const findProduct = async () => {const Product = mongoose.model('Product', productSchema);


  let animals = await Animal.findByName('fido');
  animals = animals.concat(await Animal.findByBreed('Poodle'));
};

findProduct();
