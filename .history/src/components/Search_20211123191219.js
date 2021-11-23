import React, { useState } from "react";

const Search = ({ searchHandler }) => {
  return (
    <div className="search">
      <input type="text" />
      <button onClick={searchHandler}>Search</button>
    </div>
  );
};

export default Search;
