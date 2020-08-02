import React, { Component } from 'react'
import { connect } from 'react-redux'

export const Home = () => {
    return (
        <div>
            <h3>Home page</h3>
        </div>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
