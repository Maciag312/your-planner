import React from "react";
import "./ProgressBar.css";

function ProgressBar(props) {
  const taskBarWidth = 290;
  console.log(props);
  let isThereAnyTasks = props.numberOfTasks===0?false:true;
  
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
              ((taskBarWidth * props.numberOfDone) / (isThereAnyTasks?(props.numberOfTasks):1) + "px"),
          }}
        ></div>
      </div>
    </div>
  );
}

export default ProgressBar;
