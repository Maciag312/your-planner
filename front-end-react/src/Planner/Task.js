import React, { useState } from "react";
import Checkbox from "@material-ui/core/Checkbox";
import "./Task.css";

function Task({ task }) {
  const [play, setPlay] = useState(false);
  const [pause, setPause] = useState(false);
  const [checked, setChecked] = useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  const onPlayClicked = () => {
    setPlay(true);
    setPause(false);
  };
  const onPauseClicked = () => {
    setPlay(false);
    setPause(true);
  };

  const removeTask = () => {
    //TO DO 
  }

  const checkbox = () => {
    return (
      <Checkbox
        checked={checked}
        onChange={handleChange}
        color="primary"
        inputProps={{ "aria-label": "secondary checkbox" }}
      />
    );
  };

  const playPause = () => {
    if (!play && !pause) {
      return (
        <button className="ui icon button" onClick={() => onPlayClicked()}>
          <i className={`play icon`}></i>
        </button>
      );
    } else if (play && !pause) {
      return (
        <button className="ui  icon button" onClick={() => onPauseClicked()}>
          <i className={`pause icon`}></i>
        </button>
      );
    } else if (!play && pause) {
      return (
        <button className="ui icon button" onClick={() => onPlayClicked()}>
          <i className={`play icon`}></i>
        </button>
      );
    }
  };

  return (
    <div className="list-item item">
      <div className="left floated content">
        <div className="task box">
          {task.isTimeLimited ? playPause() : checkbox()}
          {task.name}
        </div>
      </div>
    </div>
  );
}

export default Task;
