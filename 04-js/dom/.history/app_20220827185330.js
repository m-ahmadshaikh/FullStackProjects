//cardimageurl: https://images.unsplash.com/photo-1534158914592-062992fbe900?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3784&q=80

const firstScore = document.querySelector('.first_score');

const secondScore = document.querySelector('.second_score');

const firstButton = document.querySelector('.button_1');

const secondButton = document.querySelector('.button_2');

const resetButton = document.querySelector('.reset');

const select = document.querySelector('#level');

let playerOneScore = 0;

let playerTwoScore = 0;

let upto = 1;

select.addEventListener('change', (event) => {
  upto = event.target.value;
});

firstButton.addEventListener('click', () => {
  firstScore.innerText = playerOneScore += 1;
  if (playerOneScore >= upto) {
    firstButton.disabled = true;
    secondButton.disabled = true;
  }
});

secondButton.addEventListener('click', () => {
  secondScore.innerText = playerTwoScore += 1;
  if (playerTwoScore >= upto) {
    firstButton.disabled = true;
    secondButton.disabled = true;
  }
});

resetButton.addEventListener('click', () => {
  firstScore.innerText = playerOneScore = 0;
  secondScore.innerText = playerTwoScore = 0;
  firstButton.disabled = false;
    secondButton.disabled = true;
});
