import React, { Component } from 'react'
import { connect } from 'react-redux'
import  NavigationBar  from './NavigationBar'
import  SDAadsad  from './DateBar'
import  ProgressBar  from './ProgressBar'

const Planner = (props) => {
   
    
    return (
        <div>
            
            <h1> This is planner</h1>
            <NavigationBar/>
            <SDAadsad/>
            <ProgressBar/>
            
        </div>
    )
}

const mapStateToProps = (state) => ({
   
})

const mapDispatchToProps = {
}

export default connect(mapStateToProps, mapDispatchToProps)(Planner)
