const display = document.querySelector(".cardLeft");
const searchButton = document.querySelector("#searchButton");
const stats = document.querySelector(".cardRight");
const displayArea = document.querySelector(".displayPokemon");

async function fetchPokemon(name) {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
  const data = await response.json();

  //   creating elements and populating data
  const div = document.createElement("div");
  div.className = "pokemonName clear";
  const divImg = document.createElement("div");
  const img = document.createElement("img");
  img.className = "clear";

  div.innerText = data.name;
  const p = document.createElement("p");

  console.log(data.sprites["front_default"]);
  img.src = data.sprites["front_default"];
  const hp = data.stats[0].base_stat;
  const attack = data.stats[1].base_stat;
  const defense = data.stats[2].base_stat;
  const spAttack = data.stats[3].base_stat;
  const spDefense = data.stats[4].base_stat;
  const speed = data.stats[5].base_stat;
  const pokemonStats = `
  hp: ${hp}
  attack: ${attack}
  defense: ${defense}
  spAttack: ${spAttack}
  spDefense: ${spDefense}
  speed: ${speed}
  `;

  p.innerText = pokemonStats;
  p.className = "clear";
  // add element to DOM
  display.appendChild(div);
  display.appendChild(img);
  stats.appendChild(p);
}

function clearDisplay() {
  const select = document.querySelectorAll(".clear");
  //   console.log(select);
  if (select.length === 0) {
    return;
  }
  select.forEach((e) => {
    const parent = e.parentNode;
    parent.removeChild(e);
  });
}

searchButton.addEventListener("click", searchPokemon);

async function searchPokemon() {
  clearDisplay();
  const name = document.querySelector("#searchBar").value;
  if (!name) {
    return;
  }
  await fetchPokemon(name);
}
