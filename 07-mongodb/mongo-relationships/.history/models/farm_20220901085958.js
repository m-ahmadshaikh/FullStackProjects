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


const Product = new mongoose.model('Product',productSchema);

const watermelon = new Product({
    name:'King Watermelon',
    price: 100,
    season: 'Summer'
})