import React, { useState, useEffect } from "react";
import "./Header.css";
import logo_white from "./pngs/logo_white.png";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import {useHistory} from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';

export const Header = (props) => {
  const [show, handleShow] = useState(false);
  //Listener for effect in navBar

  let history= useHistory()

  const  buttonLook = makeStyles({
    root: {
      color: 'white',
      backgroundColor: 'transparent',
      height: '30px',
     textTransform: 'none',
     '&:hover':{
      backgroundColor: 'white',
      color: '#0087FF',
    },
    },
  })
 
  const classes = buttonLook();

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
          <Button
            className={classes.root}
            onClick={()=>{history.push("/login")}}
          >
            <div className="header__option">
              <span className="header__optionLineTwo"> Log in</span>
            </div>
          
          </Button>
        </div>
        {/* 2nd Link  Registration  --> right*/}
        <div className="header__nav">
          <Button
            className={classes.root}
            onClick={()=>{history.push("/registration")}}
          >
            <div className="header__option">
              <span className="header__optionLineTwo"> Registration</span>
            </div>
          </Button>
          
        </div>

      </div>
    </nav>
    </div>
  );
};

export default Header;
