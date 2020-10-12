import React, { useState, useEffect } from "react";
import "./Header.css";
import logo_white from "./pngs/logo_white.png";
import { Link } from "react-router-dom";

export const Header = (props) => {
  const [show, handleShow] = useState(false);
  //Listener for effect in navBar

  useEffect(() => {
    window.onscroll = () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    };
  }, []);

  return (
    <div className="header_center">
      
    <nav className={`header ${show && "header_dark"}`}>
      {/* logo  -->left*/}
      <Link to="/">
        <img className={"header__logo"} src={logo_white} alt="" />
      </Link>

      {/* Header blank box*/}

      <div className="header__navBox">
        
        {/* 1st Link  login */}
        <div className="header__nav">
          <Link
            className={`header__link ${show && "header__white__link"}`}
            to="/login"
          >
            <div className="header__option">
              <span className="header__optionLineTwo"> Log in</span>
            </div>
          </Link>
        </div>
        {/* 2nd Link  Registration  --> right*/}
        <div className="header__nav">
          <Link
            className={`header__link ${show && "header__white__link"}`}
            to="/registration"
          >
            <div className="header__option">
              <span className="header__optionLineTwo"> Registration</span>
            </div>
          </Link>
        </div>

      </div>
    </nav>
    </div>
  );
};

export default Header;
