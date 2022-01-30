import React, { useState, useEffect } from "react";
import Search from "../components/Search";
import Pictures from "../components/Pictures";
import { v4 as uuidv4 } from "uuid";

const Homepage = () => {
  const [input, setInput] = useState("");
  let [data, setData] = useState(null);
  let [page, setPage] = useState(1);
  let [currentSearch, setCurrentSearch] = useState("");
  const auth = "563492ad6f9170000100000182e90c4547de4c1a86e107ab2e3a4a91 ";
  const initialURL = "https://api.pexels.com/v1/curated?page=1&per_page=15";
  const searchURL = `https://api.pexels.com/v1/search?query=${currentSearch}&per_page=15&page=1`;

  // fetch data from pexels api
  const searchHandler = async (url) => {
    setPage(2);
    const dataFetch = await fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: auth,
      },
    });
    let parsedData = await dataFetch.json();
    setData(parsedData.photos);

    // console.log(data);
  };

  // load more picture
  const morepictureHandler = async () => {
    let newURL;
    if (input === "") {
      newURL = `https://api.pexels.com/v1/curated?page=${page}&per_page=15`;
    } else {
      newURL = `https://api.pexels.com/v1/search?query=${input}&per_page=15&page=${page}`;
    }
    setPage(page + 1);
    const dataFetch = await fetch(newURL, {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: auth,
      },
    });
    let parsedData = await dataFetch.json();
    setData(data.concat(parsedData.photos));
    // console.log(data);
  };

  // fetch data when the page loads up
  useEffect(() => {
    searchHandler(initialURL);
  }, []);

  useEffect(() => {
    if (currentSearch === "") {
      searchHandler(initialURL);
    } else {
      searchHandler(searchURL);
    }
  }, [currentSearch]);

  return (
    <div style={{ minHeight: "100vh" }}>
      <Search
        searchHandler={() => {
          console.log("test");
          setCurrentSearch(input);
        }}
        setInput={setInput}
      />

      <div className="pictures">
        {data &&
          data.map((d) => {
            return <Pictures key={uuidv4()} data={d} />;
          })}
      </div>
      <div className="morePicture">
        <button onClick={morepictureHandler}>Load More</button>
      </div>
    </div>
  );
};

export default Homepage;
