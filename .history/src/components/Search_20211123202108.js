import React from "react";

const Search = ({ searchHandler, setInput }) => {
  const inputHandler = (e) => {
    // console.log(e.target.value);
    setInput(e.target.value);
  };

  return (
    <div className="search">
      <input onChange={inputHandler} type="text" />
      <input type="submit" value="Search" onClick={searchHandler}>
      
    </div>
  );
};

export default Search;
