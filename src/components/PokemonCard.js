import React, { useState } from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({pokemon}) {
 
  //*Create a Toggle State for click to handle the images
  const [frontBackImg,setFrontBackImg] = useState(true)

  const handleClick = () => {
    setFrontBackImg((frontBackImg)=>!frontBackImg)
  }

  return (
    <Card onClick={handleClick} >
      <div>
        <div className="image">
          <img src={frontBackImg ? pokemon.sprites.front : pokemon.sprites.back} alt="oh no!" />
        </div>
        <div className="content">
          <div className="header">{pokemon.name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {pokemon.hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
