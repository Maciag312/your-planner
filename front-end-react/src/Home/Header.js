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
    buttonSignUp: {
      backgroundColor: 'white',
      color: '#0087FF',
      height: '30px',
     textTransform: 'none',
     '&:hover':{
      backgroundColor: 'white',
      color: '#0087FF',
      boxShadow: "0px 0px 50px",
      transition: "0.3s color",
      
    },
    
  }})

  const buttonLook2 = makeStyles({
    buttonLogIn: {
      backgroundColor: 'transparent',
      color: 'white',
      height: '30px',
     textTransform: 'none',
     '&:hover':{
      color: '#1E58FF',
      boxShadow: "none",
    },
    },
  })
 
  const classes = buttonLook();
  const classes2 = buttonLook2();
  useEffect(() => {
    window.onscroll = () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    };
  }, []);

  return (
    
    <div className="header_center" >
      
    <div className={`header ${show && 'header_scroll'} `}>
      {/* logo  -->left*/}
      <Link to="/">
        <img className={"header__logo"} src={logo_white} alt="" />
      </Link>

      {/* Header blank box*/}

      <div className="header__navBox">
        
        {/* 1st Link  login */}
        <div className="header__nav">
          <Button
          variant="text"
          disableRipple={true}
            className={classes2.buttonLogIn}
            onClick={()=>{history.push("/login")}}
          >
            <div className="header__option">
              Log in
            </div>
          
          </Button>
        </div>
        {/* 2nd Link  Registration  --> right*/}
        <div className="header__nav">
          <Button
            className={classes.buttonSignUp}
            onClick={()=>{history.push("/registration")}}
          >
            <div className="header__option">
               Sign up
            </div>
          </Button>
          
        </div>

      </div>

    </div>
   
    </div>
    
  );
};

export default Header;
