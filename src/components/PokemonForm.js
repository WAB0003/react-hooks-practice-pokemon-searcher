import React, { useState } from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({BaseURL, handleNewPokemon}) {
  //Create a state for tracking the values of the form and place in the form inputs
  const[formData, setFormData]=useState({
    name:"",
    hp:"",
    frontUrl:"",
    backUrl:"",
  })
//create an onChange event for each value in the form
 function handleFormChange(e) {
  setFormData({
    ...formData,
    [e.target.name]:e.target.value,
 })
}

//!create new object from values provided from formData based on what's needed in server
const newPokemonObj = {
  name: formData.name ,
  hp: Number(formData.hp),
  sprites: {
    front: formData.frontUrl,
    back: formData.backUrl,
  },
}



//*Take new object and when form is submitted, persist to the data base
const handleSubmit = (e) => {
  e.preventDefault()

  fetch(BaseURL, {
    method: "POST",
    headers: {
      "Content-Type":"application/json",
    },
    body:JSON.stringify(newPokemonObj)
  })
  .then((r)=>r.json())
  .then((newPokemon)=>handleNewPokemon(newPokemon))

  setFormData({
    name:"",
    hp:"",
    frontUrl:"",
    backUrl:"",
  })
}





  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={handleSubmit}
      >
        <Form.Group widths="equal">
          <Form.Input fluid label="Name" placeholder="Name" name="name" value={formData.name} onChange={handleFormChange}/>
          <Form.Input fluid label="hp" placeholder="hp" name="hp" value={formData.hp} onChange={handleFormChange}/>
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            value={formData.frontUrl}
            onChange={handleFormChange}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            value={formData.backUrl}
            onChange={handleFormChange}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;


// {
//   "id": 1,
//   "name": "bulbasaur",
//   "hp": 40,
//   "sprites": {
//     "front": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
//     "back": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png"
//   }
