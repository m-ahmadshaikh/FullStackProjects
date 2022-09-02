const mongoose = require('mongoose');
const { Schema } = mongoose;

module.exports =  Schema({
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

