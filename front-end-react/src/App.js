import React from 'react';
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Registration from './Account/Registration'
import Login from './Account/Login'
import TaskTimer from './TaskTimer/TaskTimer';
import Planner from './Planner/Planner';
import Home from './Home/Home';
import Header from './Home/Header';

function App() {


    return (
        <Router>
      <div className="app">
        
        <Switch>
          <Route path="/planner">
              <Planner/>
          </Route>
          <Route path="/statistics">
            <h1> Statistics</h1>
          </Route>
          <Route path="/registration">
            <Registration/>
          </Route>
          <Route path="/timer">
            <TaskTimer/>
          </Route>
          <Route path="/login">
              <Login/>
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
