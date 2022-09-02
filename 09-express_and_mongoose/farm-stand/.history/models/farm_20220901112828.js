const mongoose = require('mongoose');
const { Schema } = mongoose;

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
farmSchema.post('findOneAndDelete')

const Farm = mongoose.model('Farm', farmSchema);

module.exports = Farm;
