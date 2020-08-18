import React from "react";
import FixedSizeList from "@material-ui/core/List";
import Task from "./Task";
const TaskList = ({ tasks }) => {
    const renderedList = tasks.map((task)=> {return <Task key={task.name} task={task}/>});
  return (
    <FixedSizeList>
        {renderedList}
    </FixedSizeList>
  );
};

export default TaskList;
