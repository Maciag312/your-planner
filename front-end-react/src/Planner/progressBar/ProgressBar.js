import React from "./node_modules/react";
import "./ProgressBar.css";

function ProgressBar(props) {
  const taskBarWidth = 290;
  return (
    <div>
      <div>
        {props.numberOfDone}/{props.numberOfTasks} tasks done
      </div>
      <div className="outside" style={{ width: taskBarWidth + "px" }}>
        <div
          className="inside"
          style={{
            width:
              (taskBarWidth * props.numberOfDone) / props.numberOfTasks + "px",
          }}
        ></div>
      </div>
    </div>
  );
}

export default ProgressBar;
