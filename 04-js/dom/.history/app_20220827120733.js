// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png
const baseURL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';
const container = document.querySelector('#container');
for(let i =1;i<=1000;i++){
    const pokemon = document.createElement('div');
    pokemon.classList.add('pokemon')
    
    pokemon.src = baseURL + i + '.png';
    container.append(img);
    
}