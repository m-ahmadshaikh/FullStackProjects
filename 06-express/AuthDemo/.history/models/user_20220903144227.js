const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, 'Username cannot be blank'],
  },
  password: {
    type: String,
    required: [true, 'Password cannot be blank'],
  },
});

userSchema.statics.findAndValidate = async function(username,password){
  this.findOne({username})
}

module.exports = mongoose.model('User', userSchema);
