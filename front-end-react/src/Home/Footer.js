import React from 'react'
import greyLogo from './pngs/logo_grey.png'
import Button from '@material-ui/core/Button';
import "./Footer.css"

const Footer =()=> {
    return (
        <div className="footer">
            <br/>
            <div className="footer_box">
                <img className="footer_logo" src={greyLogo} alt=""/>
                <Button disableRipple={true} style={{height: '30px',color: "grey"}}>About us</Button>
                <Button disableRipple={true} style={{height: '30px',color: "grey"}}>Contact</Button>

            </div>
            
        </div>
    )
}

export default Footer
