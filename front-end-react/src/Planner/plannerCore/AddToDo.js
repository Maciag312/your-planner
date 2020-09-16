import React, { useRef, useState, useEffect } from "react";
import { connect } from "react-redux";
import { addTask } from "../../Store/actions";
import Dropdown from "../reusableComponents/Dropdown";
import { TimePicker } from "antd";
import moment from "moment";
import "./AddToDo.css";
import "antd/dist/antd.css";

export const AddToDo = (props) => {
  const [selectedOption, setSelectedOption] = useState("");
  const [duration, setDuration] = useState(0);
  const [text, setText] = useState("");
  const [showTime, setShowTime] = useState("");

  const ref = useRef();
 

  const handleClick = () => {
    if (text !== "") {
      add();
      setDuration(0);
      setShowTime("");
      setText(""); //request TODO
      clearSelectedOption();
    }
  };
  
  const onTimeChange = (time, timeString) => {
    var d = new moment(timeString, "HH:mm:ss");

    var hours = d.hours() * 3600000;
    var minutes = d.minutes() * 60000;
    var seconds = d.seconds() * 1000;

    var milis = hours + minutes + seconds;

    setShowTime(time);
    setDuration(milis);
  };

  const add = () =>
    props.addTask(
      text,
      selectedOption,
      duration !== 0 ? true : false, //isTimeLimited
      duration,
      props.date.day
    );

  const onFormSubmit = (event) => {
    console.log("ref: ", ref.current);
    console.log("event: ", event.target);

    if (ref.current.contains(event.target) && text !== "") {
      event.preventDefault();
      add();
      setText(""); //request TODO
      setShowTime("");
      setDuration(0);
      clearSelectedOption();
    } else event.preventDefault();
  };

  const handleChange = (event) => {
    setText(event.target.value);
  }; //request TODO

  const clearSelectedOption = () => {
    setSelectedOption("");
  };

  return (
    <form ref={ref} className="add_container">
      <form onSubmit={onFormSubmit} className="add_form ui form">
        <input
          className="ui input"
          value={text}
          onChange={handleChange}
          maxLength={70}
        />
      </form>

      <div className="add_picker_container">
        <TimePicker
          className="add_picker"
          inputReadOnly={true}
          showNow={false}
          onChange={onTimeChange}
          allowClear={true}
          value={showTime}
        />
      </div>

      <form className="add_dropdown_container">
        <Dropdown
          selectedOption={selectedOption}
          onSelectedOptionChange={setSelectedOption}
          clearSelectedOption={clearSelectedOption}
        />
      </form>

      <div
        className="add_positive_button ui positive button"
        onClick={handleClick}
      >
        Add task
      </div>
    </form>
  );
};
const mapStateToProps = (state) => ({
  date: state.date,
});

export default connect(mapStateToProps, { addTask })(AddToDo);
