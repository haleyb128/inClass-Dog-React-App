import React from "react";
import { Link } from "react-router-dom";

const NavTabs = props => (
  <div class="tabs">
  <ul>
  <li className="nav-item">
      <Link
        to="/"
        className={
          window.location.pathname === "/" ? "nav-link active" : "nav-link"
        }
      >
        Home
      </Link>
    </li>
    <li className="nav-item">
      <Link
        to="/discover"
        className={
          window.location.pathname === "/discover"
            ? "nav-link active"
            : "nav-link"
        }
      >
        Discover
      </Link>
    </li>
    <li className="nav-item">
      <Link
        to="/search"
        className={
          window.location.pathname === "/search"
            ? "nav-link active"
            : "nav-link"
        }
      >
        Search
      </Link>
    </li>
  </ul>
</div>
);

export default NavTabs;
