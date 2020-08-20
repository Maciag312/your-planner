import React from "react";
import { connect } from "react-redux";
import "./Home.css";

export const Home = (props) => {
  return (
    <div className="home">
      <div className="home-box container">
        <h1 className="home__text">What is your todays goal ?</h1>
        <input className="home__input" />
        <br/>
        <button className="home-button ui blue button">Begin adding your tasks</button>
         <div>{props.authenticated.toString()}</div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  authenticated: state.authenticated,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
