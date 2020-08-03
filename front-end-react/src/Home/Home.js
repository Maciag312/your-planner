import React, { Component } from "react";
import { connect } from "react-redux";
import "./Home.css";
export const Home = (props) => {
  return (
    <div>
      <div className="home">
        <h1 className="home__text">What is your todays goal ? </h1>
        <input className="home__input" />
        <div>{props.authenticated.toString()}</div>
        <h1> c</h1>
        <h1> c</h1>
        <h1> c</h1>
        <h1> c</h1>
        <h1> c</h1>
        <h1> c</h1>
        <h1> c</h1>
        <h1> c</h1>
        <h1> c</h1>
        <h1> c</h1>
        <h1> c</h1>
        <h1> c</h1>
        <h1> c</h1>
        <h1> c</h1>
        <h1> c</h1>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  authenticated: state.authenticated,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
