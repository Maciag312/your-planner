import React from "react";
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
        return returnedList.filter((t) => t.props.task.completed.toString() === "true");

      case "SHOW_ACTIVE":
        return returnedList.filter((t) => t.props.task.completed.toString() === "false");

      default:
        return "Error: Unknown filter";
    }
  };

  console.log(props.todos.allTasks)
  const returnedList = props.todos.allTasks.map((task) => (
   <Task task={task}></Task>
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
    <div className="ui middle aligned divided list" >{showSelectedTasks()}</div>
  );
};

const mapStateToProps = (state) => ({
  todos: state.todos,
  visibility: state.visibility,
});

const mapDispatchToProps = {
}
export default connect(mapStateToProps, mapDispatchToProps)(TasksList);
