import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "../../assests/logo.svg";
import "./navbar.css";

const Navbar = () => {
  const [toggleMenu, setToggleMEnu] = useState(false);

  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <img src={logo} alt="" />
        </div>
        <div className="gpt3__navbar-links_container">
          <p>
            {" "}
            <a href="#home">Home</a>{" "}
          </p>
          <p>
            {" "}
            <a href="#wgpt3">What is GPT?</a>{" "}
          </p>
          <p>
            {" "}
            <a href="#possibility">Open AI</a>{" "}
          </p>
          <p>
            {" "}
            <a href="#features">Case Studies</a>{" "}
          </p>
          <p>
            {" "}
            <a href="#blog">Library</a>{" "}
          </p>
        </div>
      </div>
      <div className="gpt3__navbar-sign">
        <p>Sign in</p>
        <button type="button">Sign up</button>
      </div>
      <div className="gpt3__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMEnu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMEnu(true)}
          />
        )}

        {toggleMenu && (
          <div className="gpt3__navbar-menu_container scale-up-center">
            <div className="gpt3__navbar-menu_container-links"></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
