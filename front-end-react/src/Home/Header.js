import React, { useState, useEffect } from "react";
import "./Header.css";
import logo_white from "./pngs/logo_white.png";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import {useHistory} from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import { IconButton } from "@material-ui/core";
import logo_small from "./pngs/logo192.png";
import Drawer from "./Drawer";

export const Header = (props) => {
  const [show, handleShow] = useState(false);
  const [drawerOn, setDrawerOn] = useState(false);

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

  const buttonLookFunctions = makeStyles({
    buttonFunctions: {
      backgroundColor: 'transparent',
      color: 'white',
      height: '100%',
     textTransform: 'none',
     boxShadow: "none",
     '&:hover':{
      color: '#1E58FF',
      display: 'inline',
    },
    },
  })
 
  const classes = buttonLook();
 
  const classes3 = buttonLookFunctions();
  
  useEffect(() => {
    window.onscroll = () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    };
  }, []);

  return (
      
    <div className={`header ${show && 'header_scroll'} `}>
      {/* logo  -->left*/}
      <div className="header_logo_box">
      <Link to="/">
        <img className={"header__logo"} src={logo_white} alt="" />
        <img className={"header__logo__small"} src={logo_small} alt="" />
      </Link>
      </div>

      {/* Header blank box*/}

      <div className ="header__navBox__after__logo">
      <div className="header__nav">
        <Link className={classes3.buttonFunctions}  >
        <div className="header__option">
             Functions
            </div>
      </Link>
      </div>
      
      <div className="header__nav">
        <Link className={classes3.buttonFunctions}  >
        <div className="header__option">
             About us
            </div>
      </Link>
      </div>
      </div>

      <div className="header__navBox">


        {/* 1st Link  login */}
        <div className="header__nav">
          <Link
          
            className={classes3.buttonFunctions}
            onClick={()=>{history.push("/login")}}
          >
            <div className="header__option__registration">
              Log in
            </div>
          
          </Link>
        </div>
        {/* 2nd Link  Registration  --> right*/}
        <div className="header__nav">
          <Button
            className={classes.buttonSignUp}
            disableRipple={true}
            onClick={()=>{history.push("/registration")}}
          >
            <div className="header__option__registration">
               Sign up
            </div>
          </Button>
          
        </div>
      </div>
        <div className="menu-icon"> 
        <IconButton disableRipple={true} onClick={()=> {setDrawerOn(!drawerOn)}}>
          <MenuIcon fontSize='large' style={{color: "white"}}/>
        </IconButton>
        </div>
        <Drawer drawerOn={drawerOn} onDrawerChange={setDrawerOn} />
    </div>
  
    
  );
};

export default Header;
