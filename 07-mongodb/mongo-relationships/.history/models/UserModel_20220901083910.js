const mongoose = require('mongoose');

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost:27017/relationshipDB');
}

const userSchema = mongoose.Schema({
  user: {
    firstName: String,
    lastName: String,
  },

  addresses: [
    {
      city: String,
      state: String,
    },
  ],
});
