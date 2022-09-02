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
  location: {
    type: String,
    required: [true, 'Location Field is required'],
  },
  products: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Product',
    },
  ],
});

const Farm = new mongoose.model('Farm',farmSchema);