import React from "react";
import { Redirect } from "react-router-dom";
import './Task.css';

function Task({ task }) {
  const [play, setPlay] = React.useState(false);
  return (
    <div className="item">
      <div className="task-content content">
        <div class="task-checkbox ui checkbox">
          <input type="checkbox" />
          <label></label>
        </div>
        {task.name}
      </div>
      {/* {task.isDone.toString()}

      {task.name}

      {task.isTimeLimited.toString()}

      {task.duration === 0 ? (
        play === true ? (
          <Redirect to="/timer"></Redirect>
        ) : (
          <div></div>
        )
      ) : (
        <div></div>
      )} */}
    </div>
  );
}

export default Task;
