import React from 'react'
import { Redirect } from 'react-router-dom';

function Task(t) {
    const [play, setPlay] = React.useState(false);
    return (
        <div>
            {t.isDone.toString()}
            {t.name}
            {t.isTimeLimited}
            {t.duration===0?(play===true?<Redirect to="/timer"></Redirect>:<div></div>):<div></div>}
        </div>
    )
}

export default Task
