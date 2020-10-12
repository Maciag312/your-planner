import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Registration from "./Account/Registration";
import Login from "./Account/Login";
import TaskTimer from "./TaskTimer/TaskTimer";
import Home from "./Home/Home";
import Header from "./Home/Header";
import Statistics from "./Statistics/Statistics";
import TaskTimerView from "./TaskTimer/TaskTimerView";
import Planner from "./Planner/Planner";
import Content from "./Home/Content";
import Footer from "./Home/Footer";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <TaskTimer />
          <Route path="/planner" exact component={Planner} />

          <Route path="/registration" exact component={Registration} />

          <Route path="/timer" exact component={TaskTimerView} />

          <Route path="/login" exact component={Login} />

          <Route path="/statistics" exact component={Statistics} />

          <Route path="/" exact>
            <Header />
            <Home />
            <Content />
            <Footer />
          </Route>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
