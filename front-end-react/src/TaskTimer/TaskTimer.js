import React, { useEffect } from "react";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import CheckIcon from "@material-ui/icons/Check";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import ReplayIcon from "@material-ui/icons/Replay";
import { IconButton } from "@material-ui/core";
import "./TaskTimer.css";
import { connect } from "react-redux";
import {setChosenTask} from "../Store/actions"

import { useLocation, useHistory } from "react-router-dom";


//TODO 1. change break task to stop task and go to following task 
//TODO 2. create in redux find following task and set following task 
 const TaskTimer = (props) => {
  
  let loc = useLocation();
  let his = useHistory();

   const [timeLeft,setTimeLeft] = React.useState((props.chosenTask.duration/1000).toFixed(0) + "s")
  const [timer, setTimer] = React.useState(0);

  console.log("t :" + timer);


  const onTaskChange = () => {
    console.log(" on task change")
    let chosenTask = props.chosenTask;
    chosenTask.isRunning = true;
    setTimeLeft((props.chosenTask.duration/1000).toFixed(0) + "s");
    props.setChosenTask(chosenTask)
    clearInterval(timer);
    const stDate  = new Date()
    setTimer(setInterval(()=>{
      setTimeLeft(calculateTimeLeft(stDate));},1000))
  }
  const completeTask = () => {
    clearInterval(timer);
    let chosenT = props.chosenTask;
    chosenT.isDone = true;
    document.title = "completed"
    props.setChosenTask(Object.assign({},chosenT));
  }

  const isTaskViewPresent=()=>{
    return loc.pathname==="/timer"?true:false;
  }
   const calculateTimeLeft = (startDate) => {
     let time = (props.chosenTask.duration-(new Date()-startDate));
     if(props.chosenTask.isRunning){
      if(time>0){
        document.title = (time/1000).toFixed(0) + "s";
        return (time/1000).toFixed(0) + "s";
      }
      else{
        console.log("Clear")
        clearInterval(timer);
        let chosenT = props.chosenTask;
        chosenT.isRunning = false;
        chosenT.isDone = true;
        props.setChosenTask(Object.assign({},chosenT));
        document.title = "completed";
        return "0 s";
      }
   }
  }
   const goToPlanner = () => {
     his.push("/planner");
   }
   const breakTask = () => {
     clearInterval(timer);
   }
   const repeatTask = () => {
     clearInterval(timer);
     let chosenT = props.chosenTask;
     if(chosenT.isDone){
      chosenT.isDone = false;
      chosenT.isRunning = true;
      props.setChosenTask(chosenT)
     }
     const stDate = new Date();
     setTimer(setInterval(()=>{
     setTimeLeft(calculateTimeLeft(stDate));
     },1000));
   }   


   useEffect(() => {
    onTaskChange()
    return () => {
    }
  }, [props.chosenTask.id])

  

  return (<div>
    {isTaskViewPresent()?
    <div className="timer">
      
      <IconButton className="timer__back__button">
        <ArrowBackIosIcon onClick={goToPlanner} className="timer__back__icon" />
      </IconButton>

      <div className="timer__task"> Task: {props.todos.chosenTask.title}</div>

      <div className="timer__time__left">time left:</div>

      <div className="timer__count__down">
        {" "}
        {props.todos.chosenTask.isDone ? "completed" : timeLeft}
      </div>

      <div className="timer__next__task"> Following task: Matematyka </div>

      <div className="timer__buttons">
        <button
          onClick={completeTask}
          className="timer-green-button  ui green button"
        >
          <CheckIcon />
        </button>

        <button
          onClick={breakTask}
          className="timer-blue-button ui orange button"
        >
          <ArrowForwardIcon />
        </button>

        <button
          onClick={repeatTask}
          className="timer-yellow-button ui yellow button"
        >
          <ReplayIcon />
        </button>
      </div>
    </div>:<div></div>}</div>
  );
};

const mapStateToProps = (state) => ({
  todos: state.todos,
});

const mapDispatchToProps = {
setChosenTask 
}

export default connect(mapStateToProps,mapDispatchToProps)(TaskTimer);
