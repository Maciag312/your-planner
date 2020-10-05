import React from 'react'
import { connect } from 'react-redux'
import "./NavigationBar.css"
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'



export const NavigationBar = (props) => {
    let location = useLocation();
      

    const logout = () =>{
    }
    return (
        <div className="menu">
            <div className="menuinner">
               
                <Link className="link-item" style={location.pathname==="/planner"? {fontWeight: "bolder"}:{fontWeight: "normal"}} disabled={location==="/planner"} to="/planner">TASKS</Link>
                <Link className="link-item"  style={location.pathname==="/statistics"? {fontWeight: "bolder"}:{fontWeight: "normal"}}  disabled={location.pathname==="/statistics"} to="/statistics">STATISTICS</Link>
                <button className="link-item"  onClick={logout}>LOG OUT</button>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(NavigationBar)
