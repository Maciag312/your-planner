import React from "react";
import Task from "./Task";
import "./TasksList.css";

const TaskList = ({ tasks }) => {
  const renderedList = tasks.map((task) => {
    return <Task key={task.name} task={task} />;
  });

  return (
    <div className="tasks-list ui middle aligned divided list ">
      {renderedList}
    </div>
  );
};

export default TaskList;
