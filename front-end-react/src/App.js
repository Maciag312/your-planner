import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Registration from "./Account/Registration";
import Login from "./Account/Login";
import TaskTimer from "./TaskTimer/TaskTimer";
import AddToDo from "./Planner/plannerCore/AddToDo";
import Menu from "./Planner/plannerCore/Menu";
import TasksList from "./Planner/plannerCore/TasksList";
import Home from "./Home/Home";
import Header from "./Home/Header";
import Statistics from "./Statistics/Statistics";

const App = () => {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/planner">
            <div>
              <br/>
              <br/>
              <AddToDo />
              <br />
              <Menu />
              <div className="ui container">
                <div className="ui segment">
                  <TasksList />
                </div>
              </div>
            </div>
          </Route>
          <Route path="/registration">
            <Registration />
          </Route>
          <Route path="/timer">
            <TaskTimer />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/statistics">
            <Statistics />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
