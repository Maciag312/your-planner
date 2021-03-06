import React from "react";
import { connect } from "react-redux";
import "./Home.css";
import Button from "@material-ui/core/Button";
import {useHistory} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

export const Home = (props) => {
  let history = useHistory();

  const getStartedButton = makeStyles({
    root:{
      backgroundColor: "#10D39B",
      width: "150px",
      alignSelf: "center",
      fontWeight: "600",
      fontSize: "17px",
      boxShadow: "none",
      color: "white",
      textTransform: 'none',
      '&:hover':{
        backgroundColor: '#10D39B',
        boxShadow: "none",
      },
    }
  });
  const classes = getStartedButton();

  return (
    <div className="home_center">
      <div className="home">
        <div className="home_text_small">Introducing Your Planner</div>
        <div className="home_text_mobile">Organize day with Your Planner</div>
        <div className="home_text">Plan your day and track the time</div>
        <Button
        disableFocusRipple={true}
        className={classes.root}
          variant="contained"
          onClick={()=>history.push("/planner")}
        >
          Get started
          
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
