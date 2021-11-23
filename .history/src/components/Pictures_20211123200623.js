import React from "react";

const Pictures = ({ data }) => {
  return (
    <div className="picture">
      {console.log(data.src.large)}

      <div className="imageContainer">
        <img src={data.src.large} alt=""></img>
      </div>
      <p>
        Download Image :
        <a target="_blank" href={data.src.large} style={{ color: "red" }}>
          Click Here
        </a>
      </p>
    </div>
  );
};

export default Pictures;
