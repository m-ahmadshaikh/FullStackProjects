const mongoose = require('mongoose');
main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost:27017/movieApp');
  console.log('Connected to mongodb');
}

const movieSchema = new Schema({
    title:  String, // String is shorthand for {type: String}
    year: Number,
    score:   Number,
    rating: Number
    
  });

  mongoose.model('Movie',mo)