const pokemonDetail = document.getElementById('pokemonDetail');
const pokemonStats = document.getElementById('pokemonStats');
const serializedData = sessionStorage.getItem('pokemonSelected');
let pokemon = Pokemon;

load()

function load() {
    pokemon = JSON.parse(serializedData)
    console.log(pokemon)
    const newHtml = `<div class="pokemon ${pokemon.type}">
                        <img class="image ${pokemon.type}" src="${pokemon.photo}" 
                            alt="${pokemon.name}">

                        <h1 class="title">${pokemon.name}</h1>
                        <h2 class="number">#${pokemon.number.toString().padStart(3, "0")}</h2>
                        <ol class="types">
                            ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                        </ol> 

                        <div class="medidas">
                            <div class="medidasItem">
                                <div class="medidasImageValue">
                                    <img class="medidasImage" src="https://raw.githubusercontent.com/imjosephe/Pokedex/fca694e3d0db69579df4d599a950d520c6bc0de4/assets/icons/weight-svgrepo-com.svg" 
                                        alt="Balance">
                                    <h1 class="medidasValue">${pokemon.weight} kg</h1>
                                </div>
                                <h1 class="medidasTitle">Weight</h1>
                            </div>
                            <hr class="divider">
                            <div class="medidasItem">
                                <div class="medidasImageValue">
                                    <img class="medidasImage" src="https://raw.githubusercontent.com/imjosephe/Pokedex/fca694e3d0db69579df4d599a950d520c6bc0de4/assets/icons/ruler-svgrepo-com.svg" 
                                        alt="Ruler">
                                    <h1 class="medidasValue">${pokemon.height} m</h1>
                                </div>                                    
                                <h2 class="medidasTitle">Height</h2>
                            </div>
                        </div>
                    </div>`                    
    pokemonDetail.innerHTML += newHtml
    loadStats(pokemon)
}

function loadStats(pokemon) {
    const newHtml = pokemon.stats.map((stat, index) => `
        <li id=${index}>
            <span class="statName">${stat.name}</span>
            <div class="statBar">
                <div class="statBarInner ${pokemon.type}" style="width: ${stat.baseStat}%;">
                    ${stat.baseStat}
                </div>
            </div>
        </li>
    `).join('');

    pokemonStats.innerHTML += newHtml;
}