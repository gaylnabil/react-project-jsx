import React, { useState } from "react";
import "./navbar.css";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from '../../assets/logo.svg'


const Menu = () => (
  
    <div className="menu">
      <p><a href="#home">Home</a></p>
      <p><a href="#wgpt3">What is GPT?</a></p>
      <p><a href="#possibility">Open AI</a></p>
      <p><a href="#features">Case Studies</a></p>
      <p><a href="#blog">Library</a></p>
    </div>
)


// BEN -> Block Element Modifier
const Navbar = () => {

  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="nga__navbar">
      <div className="nga__navbar-links">
        <div className="nga__navbar-links_logo">
            <img src={logo} alt="logo" />
        </div>
        <div className="nga__navbar-links_container" >
            <Menu/>
        </div>
      </div>
      <div className="nga__navbar-sign">
          <p>Sign in</p>
          <button type="submit" >Sign up</button>
      </div>
      <div className="nga__navbar-menu">
        {toggleMenu 
        ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false) }></RiCloseLine>
        : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} ></RiMenu3Line>
        }
        {toggleMenu && (
          <div className="nga__navbar-menu_container scale-up-center" >
            <div className="nga__navbar-menu_container-links" >
              <Menu />
              <div className="nga__navbar-menu_container-links-sign">
                <p>Sign in</p>
                <button type="submit" >Sign up</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
