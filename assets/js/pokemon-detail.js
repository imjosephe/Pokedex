const pokemonDetail = document.getElementById('pokemonDetail');
const serializedData = sessionStorage.getItem('pokemonSelected');
let pokemon = Pokemon;

load()

function load() {
    pokemon = JSON.parse(serializedData)
    
    const newHtml = `<div class="pokemon">
                        <img class="image" src="${pokemon.photo}" 
                            alt="${pokemon.name}">
                        <h1 class="title">${pokemon.name}</h1>
                        <h2 class="number">#${pokemon.number.toString().padStart(3, "0")}</h2>
                    </div>`                    
    pokemonDetail.innerHTML += newHtml;
}