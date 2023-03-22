import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({allPokemon, searchPokeName }) {
  
  //!Create a variale for all pokemeon to display that takes into account the Searched Pokemon Name
  const pokemonToDisplay = allPokemon.filter((pokemon)=>{
    if (searchPokeName==="") {
      return true
    }else{
      return pokemon.name.includes(searchPokeName)
    }
  })

  //!Create a list of pokemon to map into web application
  const pokemonList = pokemonToDisplay.map((pokemon)=>{
    return (
        <PokemonCard key={pokemon.id} pokemon={pokemon} />
    )
  })

  return (
    <Card.Group itemsPerRow={6}>
      {pokemonList}
    </Card.Group>
  );
}

export default PokemonCollection;
