import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import Checkbox from "@material-ui/core/Checkbox";
import DeleteIcon from '@material-ui/icons/Delete';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import IconButton from '@material-ui/core/IconButton';
import PauseIcon from '@material-ui/icons/Pause';
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
    background: '#008BFF',
    borderRadius: 6,
    border: 0,
    color: 'white',
    height: '23px',
    padding: '0 20px',
    marginRight: '30px',
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
      <IconButton  edge="start" style={{}}onClick={() => handlePauseClick(props.task)}>
        <PauseIcon fontSize="large"  style={{fill: "#008BFF"}}/>
      </IconButton>
      
    ) : (
      <IconButton
      edge="start"
      disableRipple = 'true'
        onClick={() => handlePlayClick(props.task)}
     >
       <PlayArrowIcon  fontSize="large"  style={{fill: "#008BFF"}}/>
     </IconButton>
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
console.log(props)
  return (
    <div
      key={props.task.id}
      completed={props.task.completed.toString()}
      className="item"
      style={{ height: '50px',display: "flex", alignItems:'center'}}
    >
      <div style={{}}>
        {props.task.isTimeLimited ? (
          playPause()
        ) : (
          <Checkbox
            onClick={() => props.toggleTodo(props.task.id)}
            color="primary"
            inputProps={{ "aria-label": "secondary checkbox" }}
            checked={props.task.completed}
            style ={{marginRight: '4px'}}
          />
        )}
      </div>

      <div
        className="content"
        style={{
          display: "flex",
          height: '30px',
          alignSelf: "center",
          width: "75%",
          justifyContent: "center",
        }}
      >
        <div>{props.task.title}</div>
      </div>
      
      <div style={{display: 'flex', justifyContent:'flex-end', width: '100%'}}>
        {props.task.isRunning ? (
        <Box style={styleBox}>
          <div style={{display: 'flex',height: '100%',alignItems: 'center'}}>
             {formatTime(timeLeft)}
          </div>
        </Box>
      ) : (
        <div></div>
      )}
      
        <IconButton disableRipple="true" >
        <DeleteIcon onClick={() => props.removeTask(props.task.id)} />
        </IconButton>
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
