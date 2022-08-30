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

Product.insertMany([{ name: 'Storm Fiber', price: 300, color: 'red' }]).then(
  (data) => console.log(data)
);

// const findProduct = async () => {
//   await
// };
// Product.fireSale();
// findProduct();
const animalSchema = new Schema(
  { name: String, type: String },
  {
    // Assign a function to the "statics" object of our animalSchema through schema options.
    // By following this approach, there is no need to create a separate TS type to define the type of the statics functions.
    statics: {
      findByName(name) {
        return this.find({ name: new RegExp(name, 'i') });
      },
    },
  }
);
const Animal = mongoose.model('Animal', animalSchema);
let animals =  Animal.findByName('fido');
animals = animals.concat(await Animal.findByBreed('Poodle'));
