import React from "react";
import { connect } from "react-redux";
import NavigationBar from "./navigationBar/NavigationBar";
import DateBar from "./dateBar/DateBar";
import ProgressBar from "./progressBar/ProgressBar";
import TasksList from "./plannerCore/TasksList";
import AddToDo from "./plannerCore/AddToDo"
import Menu from './plannerCore/Menu';
const Planner = (props) => {
  
  const getFilterdByDateTasks = () => {
    return (props.tasks.filter((t) => t.date === props.day));
  }
  
  return (
    <div>
      <NavigationBar />
      <DateBar />
      <br />
      <ProgressBar
        numberOfDone={getFilterdByDateTasks().filter((t) =>t.completed === true).length} //nie działa jeszcze dla time limited
        numberOfTasks={getFilterdByDateTasks().length}
      />
      <br/>
      <br/>
      <AddToDo />
      <br />
      <Menu />
      <div style={{ display: 'flex',width:'100%',justifyContent: 'center'}}>
          <TasksList style={{width: '50%'}} tasks={getFilterdByDateTasks()} />
       
      </div>

    </div>
  );
};

const mapStateToProps = (state) => ({
  categories: state.categories,
  tasks: state.todos.allTasks,
  day: state.date.day
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Planner);
