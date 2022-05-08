
document.querySelector('button').addEventListener('click', getPokemon)

function getPokemon() {
  let pokemonVal = document.querySelector('input').value
  let url = `https://pokeapi.co/api/v2/pokemon/${pokemonVal}`

  fetch(url)
    .then(res => res.json()) // parse response as JSON 
    .then(data => {
      console.log(data)

      document.querySelector('h2').innerText = data.name
      document.querySelector('.mainImg').src = data.sprites.front_default
      document.querySelector('.secondPic').src = data.sprites.back_default
      document.querySelector('h3').innerText = data.abilities[1].ability.name


    })
    .catch(err => {
      console.log(`error ${err}`)
    });
}
