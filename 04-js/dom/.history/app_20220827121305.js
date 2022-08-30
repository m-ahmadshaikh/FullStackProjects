// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png
const baseURL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';
const container = document.querySelector('#container');
for(let i =1;i<=898;i++){
    const pokemon = document.createElement('div');
    pokemon.classList.add('pokemon')

    const label = document.createElement('span');
    label.innerText = `#${i}`;

    const img = document.createElement('img')
    img.src = baseURL + i + '.png';

    
    pokemon.append(img);
    pokemon.append(label);
    container.append(pokemon)
}