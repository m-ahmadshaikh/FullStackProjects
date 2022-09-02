const mongoose = require('mongoose');
const { Schema } = mongoose;
const Product = require('./product');

const farmSchema = Schema({
  name: {
    type: String,
    required: [true, 'Farm Field is required'],
  },
  city: {
    type: String,
  },
  email: {
    type: String,
    required: [true, 'Email Field is required'],
  },
  products: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Product',
    },
  ],
});
farmSchema.post('findOneAndDelete', async function (data) {
  if (data.products.length) {
    const res = await Product.deleteMany({ _id: { $in: data.products } });
    console.log(res);
  }
});

const Farm = mongoose.model('Farm', farmSchema);

module.exports = Farm;
