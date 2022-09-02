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
      _id: { id: false },
      street: String,
      city: String,
      state: String,
      country: String,
    },
  ],
});

const createUser = async () => {
  const User = new mongoose.model('User', userSchema);
  const harry = new User({
    user: {
      firstName: 'Harry',
      lastName: 'Potter',
    },
    addresses: [
      {
        street: 'Seseme street',
        city: 'New york',
        state: 'NY',
        country: 'USA',
      },
    ],
  });
  const res = await harry.save();
  console.log(res);
};

createUser().then();

mongoose.connection.close();
