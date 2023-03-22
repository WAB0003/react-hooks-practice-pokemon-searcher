import React, { useState } from "react";

function Search({setSearchPokeName}) {

//*Create a function that handles the change event on the search bar and sets the state based on the value
  const handleChange = (e) => {
    setSearchPokeName(e.target.value)
  }

  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt" onChange={handleChange}/>
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
