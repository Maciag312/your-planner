import React, { useState, useEffect } from "react";
import "./Header.css";
import logo_white from "./pngs/logo_white.png";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import logo_small from "./pngs/logo192.png";
import { IconContext } from "react-icons";


export const Header = (props) => {
  const [show, handleShow] = useState(false);
  const [sidebar, setSidebar] = useState(false);
  //Listener for effect in navBar

  let history = useHistory()

  const showSidebar = () => setSidebar(!sidebar);

  const buttonLook = makeStyles({
    buttonSignUp: {
      backgroundColor: 'white',
      color: '#0087FF',
      height: '30px',
      textTransform: 'none',
      '&:hover': {
        backgroundColor: 'white',
        color: '#0087FF',
        boxShadow: "0px 0px 50px",
        transition: "0.3s color",

      },

    }
  })

  const buttonLookFunctions = makeStyles({
    buttonFunctions: {
      backgroundColor: 'transparent',
      color: 'white',
      height: '100%',
      textTransform: 'none',
      boxShadow: "none",
      '&:hover': {
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
    <>
    <IconContext.Provider value={{color: '#fff'}} >
    <div className={sidebar ? `header_navbar open` : 'header_navbar'}>

    
    <div className={sidebar ? `header_logo_box open` : 'header_logo_box'}>
          <Link to="/">
            <img className={"header__logo"} src={logo_white} alt="" />
            <img className={"header__logo__small"} src={logo_small} alt="" />
          </Link>
        </div>

      <div onClick={()=>showSidebar()} className={sidebar ? `menu-btn open` : 'menu-btn'}>
      <div className="menu-btn__burger"></div>
      </div>
        
      <div className={sidebar ? 'header active' : `header ${show && 'header_scroll'}`}>
        
       </div>


        {/* Links: Functions, AboutUs  */}

        <div className={sidebar ? `header__navBox__after__logo open` : 'header__navBox__after__logo'}>
          <div className="header__nav">
            <Link className={classes3.buttonFunctions}  >
              <div className="header__option">
                Functions
            </div>
            </Link>
          </div>

          <div className="header__nav">
            <Link className={classes3.buttonFunctions}>
              <div className="header__option">
                About us
            </div>
            </Link>
          </div>

        </div>

        {/* Link LogIn, Button SignUp */}
        <div className={sidebar ? `header__navBox open` : 'header__navBox'}>
          {/*  Link  login */}
          <div className={sidebar ? `header__nav open` : 'header__nav'}>
            <Link
              className={classes3.buttonFunctions}
              onClick={() => { history.push("/login") }}
            >
              <div className="header__option__registration">
                Log in
            </div>
            </Link>
          </div>

          <div className="header__nav">
            <Button
              className={classes.buttonSignUp}
              disableRipple={true}
              onClick={() => { history.push("/registration") }}
            >
              <div className="header__option__registration">
                Sign up
            </div>
            </Button>
          </div>
        </div>

      </div>
      </IconContext.Provider>


    </>
  );
};

export default Header;
