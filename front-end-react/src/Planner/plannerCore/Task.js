import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import Checkbox from "@material-ui/core/Checkbox";
import { toggleTodo } from "../../Store/actions";
import { removeTask } from "../../Store/actions";
import { useHistory } from "react-router-dom";
import { setChosenTask } from "../../Store/actions";
import Box from '@material-ui/core/Box';

const Task = (props) => {
  let history = useHistory();

  const [play, setPlay] = useState(false);
  const [timeLeft, setTimeLeft] = useState(props.todos.chosenTask.durationLeft);

  const styleBox = {
    background: '#84A6FE',
    borderRadius: 6,
    border: 0,
    color: 'white',
    height: 26,
    padding: '0 20px',
    alignSelf: 'center'
  };

  useEffect(() => {
    setTimeLeft(props.todos.chosenTask.durationLeft);
    console.log("wykonuje");
  }, [props.todos.chosenTask.durationLeft]);

  const handlePlayClick = () => {
    console.log("onPlay", play);
    setPlay(!play);
    props.setChosenTask(props.task);
    history.push("/timer");
  };

  const handlePauseClick = () => {
    console.log("onPause", play);
    setPlay(!play);
  };

  const playPause = () => {
    return play ? (
      <button
        className="ui  icon button"
        onClick={() => handlePauseClick(props.task)}
      >
        <i className={`pause icon`}></i>
      </button>
    ) : (
      <button
        className="ui icon button"
        onClick={() => handlePlayClick(props.task)}
      >
        <i className={`play icon`}></i>
      </button>
    );
  };
 

  const formatTime = (s) => {
    if (s <= 0) return "completed";

    let ms = s % 1000;
    s = (s - ms) / 1000;
    let secs = s % 60;
    s = (s - secs) / 60;
    let mins = s % 60;
    let hrs = (s - mins) / 60;

    let result = "";

    if (hrs > 0) {
      result += hrs.toString() + "h ";
    }
    if (mins > 0) {
      result += mins.toString() + "m ";
    }
    if (secs > 0) {
      result += secs.toString() + "s";
    }
    return result;
  };

  return (
    <div
      key={props.task.id}
      completed={props.task.completed.toString()}
      className="item"
      style={{ display: "flex", justifyContent: "space-between" }}
    >
      <div className="left floated content">
        {props.task.isTimeLimited ? (
          playPause()
        ) : (
          <Checkbox
            onClick={() => props.toggleTodo(props.task.id)}
            color="primary"
            inputProps={{ "aria-label": "secondary checkbox" }}
            checked={props.task.completed}
          />
        )}
      </div>

      <div
        className="content"
        style={{
          display: "flex",
          alignSelf: "center",
          width: "75%",
          justifyContent: "center",
        }}
      >
        <div>{props.task.title}</div>
      </div>
      {props.task.isRunning ? (
        <Box style={styleBox}>
          <div style={{marginTop:'4px'}}>
             {formatTime(timeLeft)}
          </div>
         
        </Box>
      ) : (
        <div></div>
      )}
      <div className="right floated content">
        <button
          className="ui negative button"
          onClick={() => props.removeTask(props.task.id)}
        >
          Remove
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  todos: state.todos,
  visibility: state.visibility,
});

const mapDispatchToProps = {
  toggleTodo,
  removeTask,
  setChosenTask,
};
export default connect(mapStateToProps, mapDispatchToProps)(Task);
