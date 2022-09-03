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

userSchema.statics.findAndValidate = async function (username, password) {
  const user = await this.findOne({ username });
  await bcrypt.compare(password, user.password);
};

module.exports = mongoose.model('User', userSchema);