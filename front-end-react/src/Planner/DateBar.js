import React, { Component } from 'react'
import { connect } from 'react-redux'
import {nextDay, previousDay} from './../Store/actions/index'

export const DateBar = (props) => {
    const goNextDay=()=>{
        props.nextDay()
    }
    const goPreviousDay=()=>{
        props.previousDay();
    }
    return (
        <div>
            <h4>Date Bar</h4>
            <button onClick={goPreviousDay} alt="">previous</button>
            {props.day}
            <button onClick={goNextDay} alt="">next</button>
        </div>
    )
}

const mapStateToProps = (state) => ({
    day: state.day
})

const mapDispatchToProps = {
    nextDay, previousDay
}

export default connect(mapStateToProps, mapDispatchToProps)(DateBar)
