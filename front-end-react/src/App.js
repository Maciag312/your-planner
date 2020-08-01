import React from 'react';
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
    return (
        <Router>
      <div className="app">
        <Switch>
          <Route path="/planner">
            <h1> This is planner</h1>
          </Route>
          <Route path="/statistics">
            <h1> Statistics</h1>
          </Route>
          <Route path="/registry">
            <h1>This is breaks compinent</h1>
          </Route>
          <Route path="/timer">
            <h1>Timer here</h1>
          </Route>
          <Route path="/login">
            <h1>Login page</h1>
          </Route>
          <Route path="/" >
            
          </Route>
        </Switch>
      </div>
    </Router>
    )
}

export default App
