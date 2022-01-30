import React from "react";

const Search = ({ searchHandler, setInput }) => {
  const inputHandler = (e) => {
    // console.log(e.target.value);
    setInput(e.target.value);
  };

  return (
    <div className="search">
      <input
        onChange={inputHandler}
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            // console.log(e.key);
            searchHandler();
          }
        }}
        type="text"
        id="name"
      />

      <button onClick={searchHandler}>Search</button>
    </div>
  );
};

export default Search;
