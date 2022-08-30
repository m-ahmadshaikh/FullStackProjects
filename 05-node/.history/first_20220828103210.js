// console.log(process.argv);
const jokes = require('give-me-a-joke');

console.log(
  jokes.getRandomDadJoke((joke) => {
    console.log( joke);
  })
);
