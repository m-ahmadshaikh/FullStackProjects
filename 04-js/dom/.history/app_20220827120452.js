// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png
const container = document.querySelector('#container');
const img = document.createElement('img');
const baseURL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';
img.src = baseURL + 1 + '.png';
container.append(img);
for(let i =0;i<100;i++){

}