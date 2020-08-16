import React, { Component, useEffect } from 'react'
import { connect } from 'react-redux'
import {nextDay, previousDay, setDay} from './../Store/actions/index'

export const DateBar = (props) => {


    useEffect(() => {
        const d = new Date()
        const ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d)
        const mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(d)
        const da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d)

        props.setDay(`${da}-${mo}-${ye}`)

        return () => {
            
        }
    }, [])
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
    nextDay, previousDay, setDay
}

export default connect(mapStateToProps, mapDispatchToProps)(DateBar)
