import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavigationBar } from './NavigationBar'
import { DateBar } from './DateBar'
import { ProgressBar } from './ProgressBar'

export const Planner = () => {
    return (
        <div>
            <h1> This is planner</h1>
            <NavigationBar/>
            <DateBar/>
            <ProgressBar/>
            
        </div>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Planner)
