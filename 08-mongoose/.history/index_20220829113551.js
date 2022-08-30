const mongoose = require('mongoose');
main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost:27017/movieApp');
  console.log('Connected to mongodb');
}

const movieSchema = new mongoose.Schema({
  title: String, 
  year: Number,
  score: Number,
  rating: Number,
});

const Movie = mongoose.model('Movie', movieSchema);

const dontBreathe = new Movie({title:"Dont breathe",year:2021,score:7.9,rating:8.0});
const sholay = new Movie({title:"Sholay",year:1976,score:7.9,rating:8.0});
const terminator = new Movie({title:"Terminator",year:2999,score:7.9,rating:8.0}); 

Movie.insertMany