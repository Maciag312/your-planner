import React, { Component } from 'react'
import { connect } from 'react-redux'
import "./NavigationBar.css"
import { Link } from 'react-router-dom'

export const NavigationBar = () => {
    return (
        <div className="menu">
            <Link>TASKS </Link>
            <Link>STATISTICS</Link>
            <Link>LOG OUT</Link>
        </div>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(NavigationBar)
