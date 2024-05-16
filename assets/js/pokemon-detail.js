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

                        <div class="detail">
                            <ol class="types">
                                ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                            </ol>
                            <div class="medidas">
                                <div class="weight"> 
                                    <h1 class="weightValue">${pokemon.weight} kg</h1>
                                    <h2>Weight</h2>
                                </div>
                                <hr class="divider">
                                <div class="height"> 
                                    <h1 class="heightValue">${pokemon.height} m</h1>
                                    <h2>Height</h2>
                                </div>
                            </div>
                        </div>
                    </div>`                    
    pokemonDetail.innerHTML += newHtml;
}