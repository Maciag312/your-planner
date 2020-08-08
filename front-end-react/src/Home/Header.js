import React, { useState, useEffect } from "react";
import "./Header.css";
import logo_dark from "./pngs/logo_dark.png";
import logo_white from "./pngs/logo_white.png";
import { Link } from "react-router-dom";

export const Header = (props) => {
  const [show, handleShow] = useState(false);
  //Listener for effect in navBar

  useEffect(() => {
    window.onscroll = () => {
      
      if (window.scrollY > 40) {
        handleShow(true);
      } else handleShow(false);
    };
  }, []);

  

  return (
    <nav className={`header ${show && "header__dark"}`}>
      {/* logo  -->left*/}
      <Link to="/">
        <img
          className={"header__logo"}
          src={show ? logo_white : logo_dark}
          alt=""
        />
      </Link>

      {/* Header blank box*/}

      {/* 1st Link Sign in  --> right*/}

      <div className="header__navBox">
        
        <div className="header__nav">
          <Link
            className={`header__link ${show && "header__white__link"}`}
            to="/login"
          >
            <div className="header__option">
              <span className="header__optionLineOne"> Hello Kamil </span>
              <span className="header__optionLineTwo"> Sign out</span>
            </div>
          </Link>
        </div>

        {/* 2nd Link Your tasks  --> right*/}
        <div className="header__nav">
          <Link
            className={`header__link ${show && "header__white__link"}`}
            to="/planner"
          >
            <div className="header__option">
              <span className="header__optionLineOne"> Kamil's </span>
              <span className="header__optionLineTwo"> Tasks</span>
            </div>
          </Link>
        </div>

        {/* 3rd Link  Statistics  --> right*/}
        <div className="header__nav">
          <Link
            className={`header__link ${show && "header__white__link"}`}
            to="/statistics"
          >
            <div className="header__option">
              <span className="header__optionLineOne"> Kamil's </span>
              <span className="header__optionLineTwo"> Statistics</span>
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Header;
