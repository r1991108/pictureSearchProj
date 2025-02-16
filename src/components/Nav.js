import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Search Image</Link>
        </li>
        <li>
          {/* use Link to prevent page refreshing */}
          {/* <a href="/about">About</a> */}
          <Link to="/about">|　About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
