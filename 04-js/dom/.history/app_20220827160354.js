btn = document.querySelector('button');

btn.addEventListener('click', function () {
  console.log('ho');
  body = document.querySelector('body');
  h1 = document.querySelector('h1');
  const [color,isdark] = genRandomColor();
  h1.innerText = color;
  body.style.backgroundColor = color;
  if(isdark){
    h1.style.color = 'white';
  }else{
    h1.style.color = 'black';
  }
});

const genRandomColor = () => {
  let a = Math.floor(Math.random() * 255);
  let b = Math.floor(Math.random() * 255);
  let c = Math.floor(Math.random() * 255);
  return [`rgb(${a}, ${b}, ${c})`,a+<20 || b<20 || c<20];
};
