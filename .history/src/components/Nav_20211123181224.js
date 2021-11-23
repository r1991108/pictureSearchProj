import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <ul>
        <li>{/* <Link To="/">Home</Link> */}</li>
        <li>
          <a href="/about">About</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
