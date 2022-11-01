const fetch = require('node-fetch');

// function statement
function fetchMalePokemons(){
    fetch('https://pokeapi.co/api/v2/gender/2/')
    .then(res => res.json())
    .then(json => console.log(json))
}

fetchMalePokemons();

// ---------------------------------
// Handling exceptions, client and server errors
function checkStatus(res) {
  if (res.ok) { // res.status >= 200 && res.status < 300
      return res;
  } else {
      throw MyCustomError(res.statusText);
  }
}

function fetchFemalePokemons(){
  fetch('https://pokeapi.co/api/v2/gender/1/')
    .then(checkStatus)
    .then(res => res.json())
    .then(json => console.log(json))
    .catch(err => console.error(err));;
}

fetchFemalePokemons();