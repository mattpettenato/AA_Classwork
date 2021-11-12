json.set! @pokemon.id do
  json.extract! @pokemon, :id, :name, :items, :moves, :attack, :defense, :poke_type
  json.image_url asset_path("pokemon_snaps/#{@pokemon.image_url}")
end