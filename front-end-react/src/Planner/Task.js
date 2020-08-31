import React, { useState } from "react";
import Checkbox from "@material-ui/core/Checkbox";
import "./Task.css";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import {setChosenTask}  from '../Store/actions';

function Task(props) {
  let history = useHistory();

  const [play, setPlay] = useState(false);
  const [checked, setChecked] = useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  const onPlayClicked = () => {
    setPlay(true);
    history.push("/timer");
    props.dispatch(setChosenTask)
  };
  const onPauseClicked = () => {
    setPlay(false);
  };

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
    return play ? (
      <button className="ui  icon button" onClick={() => onPauseClicked()}>
        <i className={`pause icon`}></i>
      </button>
    ) : (
      <button className="ui icon button" onClick={() => onPlayClicked()}>
        <i className={`play icon`}></i>
      </button>
    );
  };

  return (
    <div className="item">
      <div className="left floated content">
        <div className="task box">
          {props.task.isTimeLimited ? playPause() : checkbox()}
          {props.task.name}
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return { chosenTask: state.chosenTask };
};

const mapDispatchToProps  = {
  setChosenTask
}

export default connect(mapStateToProps,mapDispatchToProps)(Task);
