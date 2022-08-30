// console.log(process.argv);
const cow = require('cowsay');
const jokes = require('give-me-a-joke');

jokes.getRandomDadJoke((joke) => {
  console.log(joke);
});
