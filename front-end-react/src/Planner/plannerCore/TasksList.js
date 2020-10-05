import React, { useState} from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import Task from "./Task";

const TasksList = (props) => {
  let history = useHistory();

  const showSelectedTasks = () => {
    switch (props.visibility) {
      case "SHOW_ALL":
        return returnedList;
      case "SHOW_COMPLETED":
        return returnedList.filter((t) => t.props.completed === "true");

      case "SHOW_ACTIVE":
        return returnedList.filter((t) => t.props.completed === "false");

      default:
        return "Error: Unknown filter";
    }
  };

  // const handlePlayClick = (task) => {
  //   console.log("onPlay", play);
  //   setPlay(!play);
  //   props.setChosenTask(task);
  //   history.push("/timer");
  // };

  // const handlePauseClick = (task) => {
  //   console.log("onPause", play);
  //   setPlay(!play);
  // };

  // const playPause = (task) => {
  //   return play ? (
  //     <button
  //       className="ui  icon button"
  //       onClick={() => handlePauseClick(task)}
  //     >
  //       <i className={`pause icon`}></i>
  //     </button>
  //   ) : (
  //     <button className="ui icon button" onClick={() => handlePlayClick(task)}>
  //       <i className={`play icon`}></i>
  //     </button>
  //   );
  // };

  const returnedList = props.tasks.map((task) => (
    <Task task={task}></Task>

    // <div
    //   key={task.id}
    //   completed={task.completed.toString()}
    //   className="item"
    //   style={{ display: "flex", justifyContent: "space-between" }}
    // >
    //   <div className="left floated content">
    //     {task.isTimeLimited ? (
    //       playPause(task)
    //     ) : (
    //       <Checkbox
    //         onClick={() => props.toggleTodo(task.id)}
    //         color="primary"
    //         inputProps={{ "aria-label": "secondary checkbox" }}
    //         checked={task.completed}
    //       />
    //     )}
    //   </div>

    //   <div
    //     className="content"
    //     style={{
    //       display: "flex",
    //       alignSelf: "center",
    //       width: "75%",
    //       justifyContent: "center",
    //     }}
    //   >
    //     <div>{task.title}</div>
    //   </div>
    //   <div className="right floated content">
    //     <button
    //       className="ui negative button"
    //       onClick={() => props.removeTask(task.id)}
    //     >
    //       Remove
    //     </button>
    //   </div>
    // </div>
  ));

  if (returnedList.length === 0) {
    return (
      <div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          You have no tasks to do :)
        </div>
      </div>
    );
  }
  return (
    <div className="ui middle aligned divided list">{showSelectedTasks()}</div>
  );
};

const mapStateToProps = (state) => ({
  todos: state.todos,
  visibility: state.visibility,
  
});

const mapDispatchToProps = {
}
export default connect(mapStateToProps, mapDispatchToProps)(TasksList);
