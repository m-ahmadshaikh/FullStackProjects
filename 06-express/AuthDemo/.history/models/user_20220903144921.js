const mongoose = require('mongoose');

const bcrypt = require('bcrypt');

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

userSchema.pre('save',async function(next){

  const hash = await bcrypt.hash(password, saltRounds);
  this.password = 'not a password';
  next()
})

userSchema.statics.findOneAndValidate = async function (username, password) {
  const user = await this.findOne({ username });
  const isValid = await bcrypt.compare(password, user.password);
  return isValid ? user : false;
};

module.exports = mongoose.model('User', userSchema);
