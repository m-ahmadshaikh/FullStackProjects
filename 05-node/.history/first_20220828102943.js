// console.log(process.argv);
const jokes = require('give-me-a-joke');

console.log(await jokes.getRandomDadJoke);
