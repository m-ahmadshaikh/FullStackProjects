btn = document.querySelector('button');


btn.addEventListener('click', function () {
  console.log('ho');
  body = document.querySelector('body');
  a = 255;
  b=23;
  c=24;
  body.style.backgroundColor = "rgb(" + [a,b,c].join() + ")";
});
