import React from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import Task from "./Task";
import { List} from 'antd';
import noTasksImage from '../../Home/pngs/noTasksImage.jpeg'
import noTasksInFilterFound from '../../Home/pngs/noTasksInFilterFound.jpeg'

const TasksList = (props) => {
  let history = useHistory();

console.log(props);

  const showSelectedTasks = (tasks) => {
    switch (props.visibility) {
      case "SHOW_ALL":
        return (tasks);
      case "SHOW_COMPLETED":
        return  (
          tasks.filter((t) => t.completed.toString() === "true")
        )
      case "SHOW_ACTIVE":
        return tasks.filter((t) => t.completed.toString() === "false");

      default:
        return "Error: Unknown filter";
    }
  };
  const noTasksAvailableComponent = () => {
    return ( <div style={{width: '100%',display: 'flex', flexDirection: 'column', alignItems: 'center',backgroundColor: 'white',paddingTop: '40px' ,paddingBottom: '30px'}}>
        <div style={{width: '40%'}}>
          <img style={{objectFit: 'cover'}} src={noTasksImage}  alt =""/>
        </div>
        <div style={{letterSpacing: '1px', fontSize: '15px', fontWeight: ' 300'}}>
          It looks you suffer from no having tasks :)
        </div>
        
      </div>);
  }
  const noTasksInFilterFoundComponent = () => {
    return  (<div style={{width: '100%',display: 'flex', flexDirection: 'column', alignItems: 'center',backgroundColor: 'white',paddingTop: '40px' ,paddingBottom: '30px'}}>
        <div style={{width: '40%'}}>
          <img src={noTasksInFilterFound} alt=""/>
            </div>
          <div style={{letterSpacing: '1px', fontSize: '15px', fontWeight: ' 300'}}>
          Any tasks found in this filter
        </div>
        </div>
        )
  }
  const showSelectedImage = () => {
    switch (props.visibility) {
      case "SHOW_ALL":
        return noTasksAvailableComponent();
        
      case "SHOW_COMPLETED":
        return noTasksInFilterFoundComponent();
        
      case "SHOW_ACTIVE":
        return noTasksInFilterFoundComponent();
        
      default:
        return "Error: Unknown filter";
    }
  };
  // tasks => przefiltrowane po dacie taski (przekazywane )
  
  const returnedList = showSelectedTasks(props.tasks).map((task,index) => (
  <List.Item key={index}>
    <div style={{width: '100%'}}>
      <Task task={task}></Task>
    </div>

   </List.Item>
  ));

  if (returnedList.length === 0 ) {
    return (
      showSelectedImage()
    );
  }

  return (

    <List style={{width: '50%'}}>{ returnedList}</List>
  );
};

const mapStateToProps = (state) => ({
  todos: state.todos,
  visibility: state.visibility,
});

const mapDispatchToProps = {
}
export default connect(mapStateToProps, mapDispatchToProps)(TasksList);
