// console.log(process.argv);
const jokes = require('give-me-a-joke');

  jokes.getRandomDadJoke((joke) => {
    console.log( joke);
  })
);
