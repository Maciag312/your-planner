import React, {useEffect } from 'react'
import { connect } from 'react-redux'
import {nextDay, previousDay, setDay} from '../../Store/actions'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import IconButton from '@material-ui/core/IconButton';

import './DateBar.css'

export const DateBar = (props) => {


    useEffect(() => {
        const d = new Date()
        const ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d)
        const mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(d)
        const da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d)
        
        props.setDay(`${da} ${mo} ${ye}`)

        return () => {
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
                <IconButton disableRipple={true} onClick={goPreviousDay}>
                    <ChevronLeftIcon fontSize="large"/>
                </IconButton>
               
                <div className="date-text">
                {props.day}
                </div>
                <IconButton   disableRipple={true} onClick={goNextDay}>
                    <ChevronRightIcon fontSize="large"/>
                </IconButton>
               
            </div>
        </div> 
    )
}

const mapStateToProps = (state) => ({
    day: state.date.day
})

const mapDispatchToProps = {
    nextDay, previousDay, setDay
}

export default connect(mapStateToProps, mapDispatchToProps)(DateBar)
