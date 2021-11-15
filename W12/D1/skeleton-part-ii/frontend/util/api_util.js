export const fetchAllPokemon = () => {
  return $.ajax({
    method: "GET",
    url: "/api/pokemon"
  })
}

export const fetchOnePokemon = (pokemonId) => {
  return $.ajax({
    method: "GET",
    url: `/api/pokemon/${pokemonId}` 
  })
}

