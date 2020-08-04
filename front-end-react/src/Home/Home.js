import React, { Component } from "react";
import { connect } from "react-redux";
import "./Home.css";
export const Home = (props) => {
  return (
    <div className="home">
      <span className="home__text">What is your todays goal ? </span>
      <input className="home__input" />
      <button className="home__button">Begin adding your tasks</button>
      <div>{props.authenticated.toString()}</div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  authenticated: state.authenticated,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
