import React, { Component } from 'react'
import { connect } from 'react-redux'

export const NavigationBar = () => {
    return (
        <div>
            <h4>Navigation bar</h4>
        </div>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(NavigationBar)
