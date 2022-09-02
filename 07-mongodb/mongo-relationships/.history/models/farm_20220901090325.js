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
  products: [Schema.Types.ObjectId],
});
const Product = new mongoose.model('Product', productSchema);
const Farm = new mongoose.model('Farm',farmSchema);


const addProduct = async()=>{

    const watermelon = new Product({
        name: 'King Watermelon',
        price: 100,
        season: 'summer',
      });

watermelon.save();
}

