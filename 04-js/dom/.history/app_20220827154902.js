btn = document.querySelector('button');
const genRandom = () => {
    let a = Math.floor(Math.random(1 * 255));
    console.log(a);
  };
btn.addEventListener('click', genRandom);


