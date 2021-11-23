import React from "react";

const Pictures = ({ data, index }) => {
  return (
    <div className="picture" key={index}>
      {console.log(data.src.large)}

      <div className="imageContainer">
        <img src={data.src.large} alt=""></img>
      </div>
      <p>
        Download Image :
        <a target="_blank" href={data.src.large} style={{ color: "blue" }}>
          Click Here
        </a>
      </p>
    </div>
  );
};

export default Pictures;
