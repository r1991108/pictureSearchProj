import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          {/* <a href="/about">About</a> */}
          {/* use Link to prevent page refreshing */}
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;