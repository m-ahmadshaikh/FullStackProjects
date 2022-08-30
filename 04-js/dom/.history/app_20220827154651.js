btn = document.querySelector('button');


btn.addEventListener('click', function () {
  console.log('ho');
  body = document.querySelector('body');
  let a = 255;
  let b=23;
  c=24;
  body.style.backgroundColor = "rgb(" + [a,b,c].join() + ")";
});
