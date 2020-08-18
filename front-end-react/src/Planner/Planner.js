import React, { Component } from "react";
import { connect } from "react-redux";
import NavigationBar from "./NavigationBar";
import DateBar from "./DateBar";
import ProgressBar from "./ProgressBar";
import TasksList from "./TasksList";

const Planner = (props) => {
  return (
    <div>
      <h1> This is planner</h1>
      <NavigationBar />
      <DateBar />
      <ProgressBar
        numberOfDone={props.tasks.filter((t) => t.isDone === true).length}
        numberOfTasks={props.tasks.length}
      />
      <TasksList tasks={props.tasks} />
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
