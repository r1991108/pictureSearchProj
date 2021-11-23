import React, { useState, useEffect } from "react";
import Search from "../components/Search";
import Pictures from "../components/Pictures";

const Homepage = () => {
  const [input, setInput] = useState("");
  let [data, setData] = useState(null);
  const auth = "563492ad6f9170000100000182e90c4547de4c1a86e107ab2e3a4a91 ";
  const initialURL = "https://api.pexels.com/v1/curated?page=1&per_page=15";
  const searchURL = `https://api.pexels.com/v1/search?query=${input}&per_page=15&page=1`;

  // fetch data from pexels api
  const searchHandler = async (url) => {
    const dataFetch = await fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: auth,
      },
    });
    let parsedData = await dataFetch.json();
    setData(parsedData.photos);
    console.log(data);
  };

  // fetch data when the page loads up
  useEffect(() => {
    searchHandler(initialURL);
  }, []);

  return (
    <div style={{ minHeight: "100vh" }}>
      <Search
        searchHandler={() => {
          Search(searchURL);
        }}
        setInput={setInput}
      />

      <div className="pictures">
        {data &&
          data.map((d) => {
            return <Pictures data={d} />;
          })}
      </div>
    </div>
  );
};

export default Homepage;
