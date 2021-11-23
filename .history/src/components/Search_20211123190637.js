import React, { useState } from "react";

const Search = () => {
  let [data, setData] = useState(null);
  const auth = "563492ad6f9170000100000182e90c4547de4c1a86e107ab2e3a4a91 ";
  const initialURL = "https://api.pexels.com/v1/curated?page=1&per_page=15";
  const searchHandler = async () => {
    const dataFetch = await fetch(initialURL, {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: auth,
      },
    });
    let parsedData = await dataFetch.json();
    setData(parsedData);
  };
  return (
    <div className="search">
      <input type="text" />
      <button onClick={searchHandler}>Search</button>
    </div>
  );
};

export default Search;
