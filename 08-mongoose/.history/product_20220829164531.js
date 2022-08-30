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

// const findProduct = async () => {
//   await
// };
// Product.fireSale();
// findProduct();

const animalSchema = new Schema({ name: String, type: String },
    {
      // Assign a function to the "query" object of our animalSchema through schema options.
      // By following this approach, there is no need to create a separate TS type to define the type of the query functions. 
      query:{
        byName(name){
          return this.where({ name: new RegExp(name, 'i') })
        }
      }
    });
    
    // Or, Assign a function to the "query" object of our animalSchema
    animalSchema.query.byName = function(name) {
      return this.where({ name: new RegExp(name, 'i') })
    };
    
    const Animal = mongoose.model('Animal', animalSchema);
    
    Animal.find().byName('fido').exec((err, animals) => {
      console.log(animals);
    });
    
    Animal.findOne().byName('fido').exec((err, animal) => {
      console.log(animal);
    });