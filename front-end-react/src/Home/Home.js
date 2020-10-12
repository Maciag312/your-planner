import React from "react";
import { connect } from "react-redux";
import "./Home.css";
import Button from "@material-ui/core/Button";
import {useHistory} from 'react-router-dom';


export const Home = (props) => {
  let history = useHistory();
  return (
    <div className="home_center">
      <div className="home">
        <div className="home_text">Plan your day with Your Planner</div>
        <Button
          variant="contained"
          style={{
            backgroundColor: "#6E96FE",
            width: "150px",
            alignSelf: "center",
            fontWeight: "600",
            fontSize: "15px",
            boxShadow: "none"
          }}
          onClick={()=>history.push("/planner")}
        >
          <span style={{ color: "white" }}>Get started</span>
          
        </Button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  authentication: state.authentication,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
