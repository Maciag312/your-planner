import React from "react";
import FixedSizeList from "@material-ui/core/List";
import Task from "./Task";
import './TasksList.css';
const TaskList = ({ tasks }) => {
  const renderedList = tasks.map((task) => {
    return <Task key={task.name} task={task} />;
  });
  return <div className="tasks-list ui relaxed divided list">{renderedList}</div>;
};

export default TaskList;
