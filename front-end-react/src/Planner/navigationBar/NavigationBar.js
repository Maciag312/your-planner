import React from 'react'
import { connect } from 'react-redux'
import "./NavigationBar.css"
import Button from '@material-ui/core/Button';
import {useHistory} from 'react-router-dom'
import {makeStyles} from '@material-ui/core/styles'
import logo512_YP from '../../Home/pngs/logo512_YP.png'


export const NavigationBar = (props) => {
   
      
const history = useHistory();

const navLook = makeStyles({
    root:{
        height: '100%',
        color: "white"
    }
});

const classes = navLook();
    const logout = () =>{
    }
    return (
        <div className="menu">
    
            <div className="menuinner">
                   <img className ="logo_small"src ={logo512_YP} alt=""/>
                <Button style ={{textTransform: 'none', fontSize: '15px', fontWeight: '200'}} disableRipple="true" className={classes.root} onClick={()=>{history.push("/planner")}}>Tasks</Button>
                <Button style ={{textTransform: 'none', fontSize: '15px', fontWeight: '200'}} disableRipple="true" className={classes.root} onClick={()=>{history.push("/statistics")}} >Statistics</Button>
                <Button style ={{textTransform: 'none', fontSize: '15px', fontWeight: '200'}} disableRipple="true" className={classes.root}  onClick={logout}>Log out</Button>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(NavigationBar)
