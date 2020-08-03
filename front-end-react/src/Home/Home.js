import React, { Component } from 'react'
import { connect } from 'react-redux'
import "./Home.css";
export const Home = () => {
    return (
        <div>
             <div className = "home">
            <h1 className = "home__text">What is your todays goal ? </h1>
            <input className= "home__input"/>
            <h1> c</h1>
            <h1> c</h1>
            <h1> c</h1>
            <h1> c</h1>
            <h1> c</h1>
            <h1> c</h1>
            <h1> c</h1>
            <h1> c</h1>
            <h1> c</h1>
            <h1> c</h1>
            <h1> c</h1>
            <h1> c</h1>
            <h1> c</h1>
            <h1> c</h1>
            <h1> c</h1>
        </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
