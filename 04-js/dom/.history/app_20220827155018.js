btn = document.querySelector('button');

const genRandom = () => {
    let a = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    let c = Math.floor(Math.random() * 255);
    return
  };

btn.addEventListener('click', function () {
  console.log('ho');
  body = document.querySelector('body');
  let a = 255;
  let b = 23;
  let c = 24;
  body.style.backgroundColor = 'rgb(' + [a, b, c].join() + ')';
});
