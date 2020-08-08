import React from "react";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import CheckIcon from "@material-ui/icons/Check";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import ReplayIcon from "@material-ui/icons/Replay";
import Fab from '@material-ui/core/Fab';
import { IconButton } from "@material-ui/core";
import "./TaskTimer.css";

export default function TaskTimer() {
  return (
    
        
      <div className="timer">
        <IconButton className="timer__back__button">
          <ArrowBackIosIcon className="timer__back__icon" />
        </IconButton>

        <div className="timer__task"> Task: Fizyka</div>

        <div className="timer__time__left">time left:</div>

        <div className="timer__count__down"> 01:12:34</div>

        <div className="timer__next__task"> Following task: Matematyka </div>

        <div className="timer__buttons">

          <Fab className="timer__check__button" color="primary" >
            <CheckIcon />
          </Fab>


          <Fab  color="secondary">
            <ArrowForwardIcon />
          </Fab>

          <Fab className="timer__replay__button" color="primary">
            <ReplayIcon />
          </Fab>

        </div>

      </div>
    
  );
}
