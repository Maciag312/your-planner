import React from "react";
import { Redirect } from "react-router-dom";

function Task({ task }) {
  const [play, setPlay] = React.useState(false);
  return (
    <div>
      {task.isDone.toString()}
      
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
      )}
    </div>
  );
}

export default Task;
