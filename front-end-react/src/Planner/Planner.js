import React, { useState } from "react";
import { connect } from "react-redux";
import NavigationBar from "./NavigationBar";
import DateBar from "./DateBar";
import ProgressBar from "./ProgressBar";
import TasksList from "./TasksList";
import "./Planner.css";
import Dropdown from "./components/Dropdown";

const Planner = (props) => {
  const [selectedCat, setSelectedCat] = useState(props.categories[0]);
  const [category, setCategory] = useState("");
  const [taskText, setTaskText] = useState("");

  const getFilterdByDateTasks = () => {
    return props.tasks.filter(t=>t.date===props.day)
  }
  return (
    <div>
      <NavigationBar />
      <DateBar />
      <br />
      <ProgressBar
        numberOfDone={props.tasks.filter((t) => t.isDone === true).length}
        numberOfTasks={props.tasks.length}
      />
      <br />
      <div className="category-input-box">
        <div className="newTask-and-submit">
          <div className="input-form ui form">
            <div className="field">
              <input
                value={taskText}
                onChange={(e) => setTaskText(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="category-and-addNew">
          <Dropdown
            className="dropdown"
            categories={props.categories}
            selectedCat={selectedCat}
            onSelectedCatChange={setSelectedCat}
          />

          <div className="ui form">
            <div className="field">
              <input
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              />
            </div>
          </div>
          <button className="positive ui button">Submit</button>
        </div>
      </div>

      <br />

      <div className="planner-list">
        <div className="planner-segment ui segment">
          <TasksList tasks={getFilterdByDateTasks()} />
        </div>
      </div>

      <div>{props.authenticated.toString()}</div>
      <div>{props.jwt.toString()}</div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  categories: state.categories,
  tasks: state.tasks,
  authenticated: state.authenticated,
  jwt: state.jwt,
  day: state.day
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Planner);
