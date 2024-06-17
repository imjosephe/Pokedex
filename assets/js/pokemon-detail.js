const pokemonDetail = document.getElementById('pokemonDetail');
const pokemonStats = document.getElementById('pokemonStats');
const serializedData = sessionStorage.getItem('pokemonSelected');
const imageWeigth = 'https://raw.githubusercontent.com/imjosephe/Pokedex/fca694e3d0db69579df4d599a950d520c6bc0de4/assets/icons/weight-svgrepo-com.svg';
const imageHeight = 'https://raw.githubusercontent.com/imjosephe/Pokedex/fca694e3d0db69579df4d599a950d520c6bc0de4/assets/icons/ruler-svgrepo-com.svg';

load()

function load() {
    pokemon = JSON.parse(serializedData)

    const newHtml = `<div class="pokemon ${pokemon.type}">
                        <div id=image-container>
                            <img class="image ${pokemon.type}" src="${pokemon.photo}" 
                                alt="${pokemon.name}">
                        </div>

                        <h1 id=title>${pokemon.name}</h1>
                        <h2 id=number>#${pokemon.number.toString().padStart(3, "0")}</h2>
                        <ol id=types>
                            ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                        </ol> 

                        <div class="medidas">
                            <div class="medidasItem">
                                <div class="medidasImageValue">
                                    <img class="medidasImage" src="${imageWeigth}" 
                                        alt="Balance">
                                    <h1 class="medidasValue">${pokemon.weight} kg</h1>
                                </div>
                                <h1 class="medidasTitle">Weight</h1>
                            </div>

                            <hr id=divider>

                            <div class="medidasItem">
                                <div class="medidasImageValue">
                                    <img class="medidasImage" src="${imageHeight}" 
                                        alt="Ruler">
                                    <h1 class="medidasValue">${pokemon.height} m</h1>
                                </div>                                    
                                <h2 class="medidasTitle">Height</h2>
                            </div>
                        </div>
                    </div>`                    
    pokemonDetail.innerHTML += newHtml
    
    loadStats(pokemon)
    paint(pokemon)
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

function paint(pokemon) {    
    const styles = getComputedStyle(document.documentElement);    
    let colors = []
    pokemon.types.map((type) => {
        colors = colors.concat(styles.getPropertyValue(`--${type}-color`))
    })

    document.documentElement.style.setProperty('--primary-color', `${colors[0]}`);

    const types = document.getElementsByClassName("type");
    for (let index = 0; index < types.length; index++) {
        const element = types[index];
        element.style.color = colors[index];
        element.style.border = `solid ${colors[index]}`
    }
}