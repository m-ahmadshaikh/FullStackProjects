const mongoose = require('mongoose');

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost:27017/relationshipDB');
}

const userSchema = mongoose.Schema({
    user:String,
    city:String,
    state:String,
    addresses:[]
})

