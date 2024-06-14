const pokemonList = document.getElementById('pokemonList');
const loadMoreButton = document.getElementById('loadMoreButton');
const limit = 10;
const maxRecords = 151;
let offset = 0;
let pokemonsLoaded = [];

function showPokemonDetail(id) {    
    const serializedData = JSON.stringify(pokemonsLoaded[id - 1])
    sessionStorage.setItem('pokemonSelected', serializedData)
    window.location.href = 'pokemon-detail.html'
}

function loadPokemonItens(offset, limit) {
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        pokemonsLoaded = pokemonsLoaded.concat(pokemons)
        
        const newHtml = pokemons.map((pokemon) => `
            <li id=${pokemon.number} class="pokemon ${pokemon.type}" onclick="showPokemonDetail(id);">
                <span class="number">#${pokemon.number.toString().padStart(3, "0")}</span>
                <span class="name">${pokemon.name}</span>
    
                <div class="detail">
                    <ol class="types">
                        ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                    </ol>
    
                    <img src="${pokemon.photo}" 
                        alt="${pokemon.name}">
                </div>
            </li>
        `)
        .join('');

        pokemonList.innerHTML += newHtml;
    });
}

loadPokemonItens(offset, limit)

loadMoreButton.addEventListener('click', () => {
    offset += limit;
    
    const qtdRecordNextPage = offset + limit

    if (qtdRecordNextPage >= maxRecords) {
        loadPokemonItens(offset, maxRecords - offset)
        loadMoreButton.parentElement.removeChild(loadMoreButton)
    } else {
        loadPokemonItens(offset, limit);
    }
})

