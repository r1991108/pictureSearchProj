import React from "react";

const Search = ({ searchHandler, setInput }) => {
  const inputHandler = (e) => {
    // console.log(e.target.value);
    setInput(e.target.value);
  };

  return (
    <div className="search">
      <input onChange={inputHandler} type="text" id="name" />
      <input type="submit" value="Search" onClick={searchHandler} />
      {/* <button onClick={searchHandler}>Search</button> */}
    </div>
  );
};

export default Search;
