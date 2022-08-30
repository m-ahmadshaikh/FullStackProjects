// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png
const baseURL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';
const container = document.querySelector('#container');
const img = document.createElement('img');
img.src = baseURL + 1 + '.png';
container.append(img);
for(let i =0;i<100;i++){

}