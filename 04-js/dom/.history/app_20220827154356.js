btn = document.querySelector('button');

btn.onClick = () => {
  console.log('hello');
};
btn.addEventListener('click', function () {
  console.log('ho');
  body = document.querySelector('body');
  body.style.backgroundColor = 'olive';
});
