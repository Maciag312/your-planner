import React, { useEffect } from "react";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import CheckIcon from "@material-ui/icons/Check";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import ReplayIcon from "@material-ui/icons/Replay";
import { IconButton } from "@material-ui/core";
import "./TaskTimer.css";
import { connect } from "react-redux";
import {setChosenTask, setAllTasksRunningFalse, alterTask, setTaskRunning, setTaskTime} from "../Store/actions"

import { useLocation, useHistory } from "react-router-dom";


//TODO 1. break task toggle to start/stop and save time to chosen task and task 
 const TaskTimer = (props) => {

  const formatTime = (s) => {
    if(s<=0) return "completed"

    let ms = s % 1000;
    s = (s - ms) / 1000;
    let secs = s % 60;
    s = (s - secs) / 60;
    let mins = s % 60;
    let hrs = (s - mins) / 60;

    let result = ""

    if(hrs>0){
      result += hrs.toString() + "h ";
    }
    if(mins>0){
      result += mins.toString() + "m ";
    }
    if(secs>0){ 
      result += secs.toString() + "s";
    }
    return result
 }
  
  let loc = useLocation();
  let his = useHistory();

const [timeLeft,setTimeLeft] = React.useState(formatTime(props.chosenTask.durationLeft));
const [isRunning, setRunning ] = React.useState(false);
const [indexIntervalTaskTime, setIndexIntervalTaskTime] = React.useState(0);

const saveTask = (chosenTas) => {
  alterTask(Object.assign(chosenTas))
}


const getFollowingTask = (currentTask) => {
  let taskIndex = props.tasks.map(t=>t.id).indexOf(currentTask.id)
  if(taskIndex>=props.tasks.length){
    console.log("no task")
    return undefined
   }else{
      return props.tasks[taskIndex+1]
    } 
  }

  const getFollowingTaskName = () => {
    let t = getFollowingTask(props.chosenTask)
    if(t===undefined) return "There is no following task"
    else return t.title;
  }

  const intervalTaskTimer = () => {
    if(props.chosenTask.isRunning){
      console.log("intervalTaskTimer")
      var index = setInterval(() => {
       if(!updateTaskTimeEverySecond()){clearInterval(index)};
      }, 1000);
      setIndexIntervalTaskTime(index);
    }
  }

  const updateTaskTimeEverySecond = () => {
    let chT = props.chosenTask;
    if(chT.durationLeft > 1000){
      chT.durationLeft -= 1000;
    }else{
      chT.isRunning = false;
      setRunning(false)
      document.title = "completed"
      chT.completed = true;
      chT.durationLeft = 0;
    }
    console.log(chT);
    let time = formatTime(chT.durationLeft)
    document.title = time;
    setTimeLeft(time);
    saveTask(chT);
    props.setTaskTime(chT)
    if(chT.durationLeft<=0)
      return false //when chosen task is finished itreturns false to clear interval 
    return true
  }
  
  const clearIntervalTimer = () => {
    console.log("clear interval " + indexIntervalTaskTime )
    clearInterval(indexIntervalTaskTime);
  }

  const onTaskChange = () => {
    console.log("all task on false")
    props.setAllTasksRunningFalse()
    props.setTaskRunning(props.chosenTask)
    clearInterval(indexIntervalTaskTime)
    let chT = props.chosenTask;
    setTimeLeft(formatTime(chT.durationLeft));
    chT.isRunning = true;
    setRunning(true)
    saveTask(chT);
    console.log("on task change");
    intervalTaskTimer()
    
  }
  const completeTask = () => {
    console.log("complete task");
    let chT = props.chosenTask;
    chT.durationLeft = 0;
    chT.completed = true;
    setTimeLeft(formatTime(chT.durationLeft));
    saveTask(chT);
  }

  const isTaskViewPresent=()=>{
    return loc.pathname==="/timer"?true:false;
  }

  
   const goToPlanner = () => {
     his.push("/planner");
   }
   const toggleStopTask = () => {
    console.log("toggle stop task");
    if(props.chosenTask.isRunning){
      let chT = props.chosenTask;
      chT.isRunning = false;
      setRunning(false)
      saveTask(chT);
      clearIntervalTimer();
      document.title = "stopped"

    }else if(!props.chosenTask.completed){
      let chT = props.chosenTask;
      chT.isRunning = true;
      setRunning(true)
      saveTask(chT);
      intervalTaskTimer();
    }
   }
   const repeatTask = () => {
    clearIntervalTimer()
    console.log("repeat task");
    let chT = props.chosenTask;
    chT.durationLeft = chT.initialDuration;
    chT.isRunning = true;
    setRunning(true)
    chT.completed = false;
    console.log(chT)
    setTimeLeft(formatTime(chT.durationLeft));
    saveTask(chT);
    intervalTaskTimer()
   }   


   useEffect(() => {
    onTaskChange()
  }, [props.chosenTask.id])

  

  return (<div>
    {isTaskViewPresent()?
    <div className="timer">
      
      <IconButton className="timer__back__button">
        <ArrowBackIosIcon onClick={goToPlanner} className="timer__back__icon" />
      </IconButton>

      <div className="timer__task"> Task: {props.chosenTask.title}</div>

      <div className="timer__time__left">time left:</div>

      <div className="timer__count__down">
        {" "}
        {timeLeft}
      </div>

      <div className="timer__next__task"> Following task: {getFollowingTaskName()} </div>

      <div className="timer__buttons">
        <button
          onClick={completeTask}
          className="timer-green-button  ui green button"
        >
          <CheckIcon />
        </button>

        <button
          onClick={toggleStopTask}
          className={isRunning?"timer-blue-button ui red button":"timer-blue-button ui yellow button"}
        >
          {isRunning}
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
  chosenTask: state.todos.chosenTask,
  tasks: state.todos.allTasks
});

const mapDispatchToProps = {
setChosenTask, alterTask, setAllTasksRunningFalse, setTaskRunning, setTaskTime
}

export default connect(mapStateToProps,mapDispatchToProps)(TaskTimer);