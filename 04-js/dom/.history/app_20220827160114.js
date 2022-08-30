btn = document.querySelector('button');

btn.addEventListener('click', function () {
  console.log('ho');
  body = document.querySelector('body');
  h1 = document.querySelector('h1');
  const [color,isbool] = genRandomColor();
  h1.innerText = color;
  body.style.backgroundColor = color;
  if(isbool){
    h1.style.color = 'white';
  }
});

const genRandomColor = () => {
  let a = Math.floor(Math.random() * 255);
  let b = Math.floor(Math.random() * 255);
  let c = Math.floor(Math.random() * 255);
  return [`rgb(${a}, ${b}, ${c})`,a<20];
};
