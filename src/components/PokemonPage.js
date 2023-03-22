import React, { useState , useEffect } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
 //*Create variable & State variable for Base URL for the API
 const BaseURL = "http://localhost:3001/pokemon/"
 const [allPokemon, setAllPokemon] = useState([])

 const [searchPokeName, setSearchPokeName]=useState("")

 useEffect(()=>{
   fetch(BaseURL)
   .then(r=>r.json())
   .then(pokemon=>setAllPokemon(pokemon))
 },[])

 const handleNewPokemon = (newPokemon) => {
  setAllPokemon((previousPokemonList)=>[newPokemon,...previousPokemonList])
 }



  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm BaseURL= {BaseURL} handleNewPokemon={handleNewPokemon} />
      <br />
      <Search setSearchPokeName={setSearchPokeName} />
      <br />
      <PokemonCollection allPokemon={allPokemon} searchPokeName={searchPokeName}/>
    </Container>
  );
}

export default PokemonPage;
