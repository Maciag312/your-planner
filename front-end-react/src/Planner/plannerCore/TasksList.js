import React from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import Task from "./Task";
import { List} from 'antd';


const TasksList = (props) => {
  let history = useHistory();

console.log(props);
  const showSelectedTasks = () => {
    switch (props.visibility) {
      case "SHOW_ALL":
        return returnedList;
      case "SHOW_COMPLETED":
        return returnedList.filter((t) => t.props.children.props.children.props.task.completed.toString()=== "true");//

      case "SHOW_ACTIVE":
        return returnedList.filter((t) => t.props.children.props.children.props.task.completed.toString()=== "false");

      default:
        return "Error: Unknown filter";
    }
  };
  // tasks => przefiltrowane po dacie taski (przekazywane )
  const returnedList = props.tasks.map((task) => (
  <List.Item >
    <div style={{width: '100%'}}>
      <Task task={task}></Task>
    </div>
   
   </List.Item>
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
    <List style={{width: '50%'}}>{showSelectedTasks()}</List>
  );
};

const mapStateToProps = (state) => ({
  todos: state.todos,
  visibility: state.visibility,
});

const mapDispatchToProps = {
}
export default connect(mapStateToProps, mapDispatchToProps)(TasksList);
