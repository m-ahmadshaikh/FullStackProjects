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

const Person = mongoose.model('Person', personSchema);

personSchema.pre('save',async function(save){
    
    save();
})