const mongoose = require('mongoose');
const {Schema} = mongoose;

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost:27017/relationshipDB');
}


const productSchema = new Schema()