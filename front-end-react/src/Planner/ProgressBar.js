import React from 'react'

import './ProgressBar.css';

function ProgressBar(props) {
    const taskBarWidth = 290;
    return (
        <div >
            <h4>It's progress bar</h4>
            <div>{props.numberOfDone}/{props.numberOfTasks} tasks done</div>
            <div className="outside" style={{width: taskBarWidth + "px"}}><div className="inside" style={{width: taskBarWidth*props.numberOfDone/props.numberOfTasks + "px"}} ></div></div>
            
        </div>
    )
}



export default ProgressBar
