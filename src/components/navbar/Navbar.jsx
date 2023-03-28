import React from "react";
import { RiMenu3Line, RiCloseLin } from "react-icons/ri";
import logo from "../../assests/GPT-3.svg";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-link">
        <div className="gpt3__navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
