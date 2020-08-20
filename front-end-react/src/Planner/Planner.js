import React from "react";
import { connect } from "react-redux";
import NavigationBar from "./NavigationBar";
import DateBar from "./DateBar";
import ProgressBar from "./ProgressBar";
import TasksList from "./TasksList";
import "./Planner.css";

const Planner = (props) => {
  return (
    <div>
      <h1> This is planner</h1>
      <NavigationBar />
      <DateBar />
      <br />
      <div className="planner-box">
        <ProgressBar
          numberOfDone={props.tasks.filter((t) => t.isDone === true).length}
          numberOfTasks={props.tasks.length}
        />
        <div className="planner-segment ui segment">
          <TasksList tasks={props.tasks} />
        </div>
      </div>

      <div>{props.authenticated.toString()}</div>
      <div>{props.jwt.toString()}</div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  tasks: state.tasks,
  authenticated: state.authenticated,
  jwt: state.jwt,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Planner);
