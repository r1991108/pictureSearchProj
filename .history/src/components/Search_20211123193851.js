import React, { useState } from "react";

const Search = ({ searchHandler, setInput }) => {
  const inputHandler = (e) => {
    console.log(e.target.value);
  };

  return (
    <div className="search">
      <input onChange={inputHandler} type="text" />
      <button onClick={searchHandler}>Search</button>
    </div>
  );
};

export default Search;
