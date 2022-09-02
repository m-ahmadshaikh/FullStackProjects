const mongoose = require('mongoose');
const { Schema } = mongoose;

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
    min: 0,
  },
  category: {
    type: String,
    required: true,
    lowercase: true,
    enum: ['fruit', 'vegetable', 'dairy'],
  },
  farm: 
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
