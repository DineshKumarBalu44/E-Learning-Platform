import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="container">
      <nav className="navbar">
      <div className="navbar_title">
          <div className="title_line">
            <h1>Cogniverse</h1>
          </div>
          <div className="title_line">
            <h5>The Digital Academy</h5>
          </div>
        </div>
        
        <ul className="navbar_links">
          <li className="nav_link"><Link className="nav_links" to="/"><b>Home</b></Link></li>
          <li className="nav_link"><Link className="nav_links" to="/products"><b>Courses</b></Link></li>
          <li className="nav_link"><Link className="nav_links" to="/contact"><b>Contact</b></Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
