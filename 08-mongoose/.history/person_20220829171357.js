const mongoose = require('mongoose');
main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost:27017/productApp');
  console.log('Connected to mongodb');
}

const personSchema = new mongoose.Schema({ first: String, last: String });

personSchema.virtual('fullName').get(function () {
  return `${this.first} ${this.last}`;
});


personSchema.pre('save', async function (save) {
  console.log('about to save');
});

personSchema.post('save', async function (save) {
  console.log('Just saved');
});

