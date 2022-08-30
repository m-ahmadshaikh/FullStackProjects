btn = document.querySelector('button');

btn.addEventListener('click', genRandom);

const genRandom = () => {
  let a = Math.floor(Math.random(1 * 255));
  console.log(a);
};
