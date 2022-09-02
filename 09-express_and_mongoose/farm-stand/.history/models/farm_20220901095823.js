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
  location:{
    type:String,
    required:[true,'Farm Field is required']
},

});
