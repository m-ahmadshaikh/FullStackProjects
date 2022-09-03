const mongoose = require('mongoose');

const bcrypt = require('bcrypt');

const saltRounds = 10;

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

userSchema.pre('save', async function (next) {
  if(!this.isModified)next()
  const hash = await bcrypt.hash(this.password, saltRounds);
  this.password = hash;
  next();
});

userSchema.statics.findOneAndValidate = async function (username, password) {
  const user = await this.findOne({ username });
  const isValid = await bcrypt.compare(password, user.password);
  return isValid ? user : false;
};

module.exports = mongoose.model('User', userSchema);
