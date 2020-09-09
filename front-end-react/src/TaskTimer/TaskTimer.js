import React, { useEffect } from "react";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import CheckIcon from "@material-ui/icons/Check";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import ReplayIcon from "@material-ui/icons/Replay";
import { IconButton } from "@material-ui/core";
import "./TaskTimer.css";
import { connect } from 'react-redux'
import { setChosenTask } from "../Store/actions";


 const TaskTimer = (props) => {
   const [timeLeft,setTimeLeft] = React.useState((props.chosenTask.duration/1000).toFixed(0) + "s")

   const [timer, setTimer] = React.useState(0);

   console.log("t :" + timer)

   const onTaskChange = () => {
  }
  const completeTask = () => {
    clearInterval(timer);
    let chosenT = props.chosenTask;
    chosenT.isDone = true;
    props.setChosenTask(Object.assign({},chosenT));
  }

   const calculateTimeLeft = (startDate) => {
     
     let time = (props.chosenTask.duration-(new Date()-startDate));
     if(time>0){
      return (time/1000).toFixed(0) + "s";
     }
     else{
       clearInterval(timer);
       let chosenT = props.chosenTask;
       chosenT.isDone = true;
       props.setChosenTask(Object.assign({},chosenT));
      return "0 s";
     }
   }
   
   const breakTask = () => {
     clearInterval(timer);
   }
   const repeatTask = () => {
     clearInterval(timer);
     let chosenT = props.chosenTask;
     if(chosenT.isDone){
      chosenT.isDone = false;
      props.setChosenTask(chosenT)
     }
     const stDate = new Date();
     setTimer(setInterval(()=>{
     setTimeLeft(calculateTimeLeft(stDate));
     },1000));
   }
   


  useEffect(() => {
    const stDate  = new Date()
    setTimer(setInterval(()=>{
      setTimeLeft(calculateTimeLeft(stDate));},1000))
    return () => {
    }
  }, [])

   useEffect(() => {
    onTaskChange()
    return () => {
    }
  }, [props.chosenTask])

  return (
    <div className="timer">

      
      <IconButton className="timer__back__button">
        <ArrowBackIosIcon className="timer__back__icon" />
      </IconButton>

      <div className="timer__task"> Task: {props.chosenTask.name}</div>

      <div className="timer__time__left">time left:</div>

      <div className="timer__count__down"> {props.chosenTask.isDone?"completed":timeLeft}</div>

      <div className="timer__next__task"> Following task: Matematyka </div>

      <div className="timer__buttons">
        <button onClick={completeTask} className="timer-green-button  ui green button">
          <CheckIcon />
        </button>

        <button onClick={breakTask} className="timer-blue-button ui orange button">
          <ArrowForwardIcon />
        </button>

        <button onClick={repeatTask} className="timer-yellow-button ui yellow button">
          <ReplayIcon />
        </button>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  chosenTask: state.chosenTask
})
const mapDispatchToProps = {
  setChosenTask,
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskTimer);