import React from 'react'
import { connect } from 'react-redux'
import "./NavigationBar.css"
import Button from '@material-ui/core/Button';
import {useHistory} from 'react-router-dom'
import {makeStyles} from '@material-ui/core/styles'

export const NavigationBar = (props) => {
   
      
const history = useHistory();

const navLook = makeStyles({
    root:{
        height: '100%'
        
    }
});

const classes = navLook();
    const logout = () =>{
    }
    return (
        <div className="menu">
            <div className="menuinner">
                <Button disableRipple="true" className={classes.root} onClick={()=>{history.push("/planner")}}>Tasks</Button>
                <Button disableRipple="true" className={classes.root} onClick={()=>{history.push("/statistics")}} >Statistics</Button>
                <Button disableRipple="true" className={classes.root}  onClick={logout}>Log out</Button>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(NavigationBar)
