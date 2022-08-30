btn = document.querySelector('button');

btn.addEventListener('click', function () {
  console.log('ho');
  body = document.querySelector('body');
  h1 = document.querySelector('body');
  const color = genRandomColor()
  body.style.backgroundColor = genRandomColor;
});

const genRandomColor = () => {
  let a = Math.floor(Math.random() * 255);
  let b = Math.floor(Math.random() * 255);
  let c = Math.floor(Math.random() * 255);
  return `rgb(${a},${b},${c})`;
};
