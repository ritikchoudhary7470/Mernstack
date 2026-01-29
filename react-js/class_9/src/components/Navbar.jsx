import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = ({single}) => {
  return (
    <nav className="navbar">
      {/* Left */}
      <div className="nav-left">
        <ul>
          <li><Link to="/">Home</Link></li>
          {/* <li><Link to="/about">About</Link></li> */}
          <li><Link className="btn cart" to="/cart">Cart {single?.length > 0 ? single?.length : '' }</Link></li>
        </ul>
      </div>

      {/* Center */}
      <div className="nav-center">
        <input type="text" placeholder="Search..." />
      </div>

      {/* Right */}
      <div className="nav-right">
        <Link to="/login" className="btn login">Login</Link>
        <Link to="/signup" className="btn signup">Sign Up</Link>
      </div>
    </nav>
  );
};

export default Navbar;
