const mongoose = require('mongoose');
const {Schema}

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost:27017/relationshipDB');
}


const productSchema = new m