const mongoose = require('mongoose');
const { Schema } = mongoose;

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost:27017/relationshipDB');
}

const productSchema = new Schema({
  name: String,
  price: String,
  season: {
    type: String,
    enum: ['summer', 'winter', 'spring', 'autumn'],
  },
});

const farmSchema = new Schema({
  name: String,
  products: [
    {
      type: Schema.Types.ObjectId,
      ref: Product,
    },
  ],
});
const Product = new mongoose.model('Product', productSchema);
const Farm = new mongoose.model('Farm', farmSchema);

const addProduct = async () => {
  const watermelon = new Product({
    name: 'King Watermelon',
    price: 100,
    season: 'summer',
  });

  const melonRes = await watermelon.save();
  const farm = new Farm({
    name: 'Full Belly Farms',
  });
  farm.products.push(watermelon);
  const farmRes = await farm.save();
  console.log(farmRes);
  mongoose.connection.close();
};

addProduct();