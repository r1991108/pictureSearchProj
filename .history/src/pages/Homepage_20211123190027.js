import React,{useState} from "react";
import Search from "../components/Search";

const Homepage = () => {
    const [(input,setInput)] = useState("");
  const auth = "563492ad6f9170000100000182e90c4547de4c1a86e107ab2e3a4a91 ";
  const initialURL = "https://api.pexels.com/v1/curated?page=1&per_page=15";
  const searchURL = `https://api.pexels.com/v1/search?query=${input}&per_page=15&page=1`
  ;
  return (
    <div style={{ minHeight: "100vh" }}>
      <Search />
    </div>
  );
};

export default Homepage;
