import React, { Component, useEffect } from 'react'
import { connect } from 'react-redux'
import {nextDay, previousDay, setDay} from './../Store/actions/index'
import leftarrow from "../Home/pngs/leftarrow.png"
import rightarrow from "../Home/pngs/rightarrow.png"
import './DateBar.css'
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
        <div style={{ justifyContent: "center", display: "flex" }}>
            <div className="date-wrapper">
                <button className="date-button" onClick={goPreviousDay} alt=""><img alt=""  src={leftarrow}></img></button>
                <div className="date-text">
                {props.day}
                </div>
                <button className="date-button" onClick={goNextDay} alt=""><img alt="" src={rightarrow}></img></button>
            </div>
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
