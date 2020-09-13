import React from 'react';
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Registration from './Account/Registration'
import Login from './Account/Login'
import TaskTimer from './TaskTimer/TaskTimer';
import TaskTimerView from './TaskTimer/TaskTimerView';

import Planner from './Planner/Planner';
import Home from './Home/Home';
import Header from './Home/Header';
import Statistics from './Statistics/Statistics'

const App = () => {


    return (
        <Router>
      <div className="app">
      <TaskTimer/>
        <Switch>
          <Route path="/planner">
              <Planner/>
          </Route>
          <Route path="/registration">
            <Registration/>
          </Route>
          <Route path="/timer">
            <TaskTimerView/>
          </Route>
          <Route path="/login">
              <Login/>
          </Route>
          <Route path="/statistics">
              <Statistics/>
          </Route>
          <Route path="/" >
            <Header/>
            <Home/>
          </Route>
        </Switch>
      </div>
    </Router>
    )
}

export default App
