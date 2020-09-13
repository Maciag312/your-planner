import React, { useState } from "react";
import { connect } from "react-redux";
import { addTask } from "../../Store/actions";
import Dropdown from "../reusableComponents/Dropdown";
import { TimePicker } from "antd";
import moment from "moment";
import "./AddToDo.js";
import "antd/dist/antd.css";

export const AddToDo = (props) => {
  const [selectedOption, setSelectedOption] = useState("");
  const [time, setTime] = useState('')
  const [text, setText] = useState("");

  const handleClick = () => {
    if (text !== "") {
      props.addTask(text, selectedOption);
      setText(""); //request TODO
      clearSelectedOption();
    }
  };

  // const validateDropdown = () => {
  //   if (selectedOption === "") {
  //     return (
  //       <div class="ui pointing red basic label">Please enter a value</div>
  //     );
  //   } else selectedOption;
  // };

  const onFormSubmit = (event) => {
    if (text !== "") {
      event.preventDefault();
      props.addTask(text, selectedOption);
      setText(""); //request TODO
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
    <div style={{ display: "flex" }}>
      <form
        style={{
          display: "flex",
          width: "73%",
          marginLeft: "10px",
          marginRight: "10px",
          alignSelf: "center",
        }}
        onSubmit={onFormSubmit}
        className="ui form"
      >
        <input
          className="ui input"
          value={text}
          onChange={handleChange}
          maxLength={70}
        />
      </form>

      <div style={{width: "200px", backgroundColor: 'green'}}>
        <TimePicker inputReadOnly={true} showNow={false} />
      </div>
        
      <div style={{ height: "38px" }}>
        <Dropdown
          selectedOption={selectedOption}
          onSelectedOptionChange={setSelectedOption}
          clearSelectedOption={clearSelectedOption}
        />
      </div>
        
      <div
        className="ui positive button"
        onClick={handleClick}
        style={{ marginLeft: "10px", alignSelf: "center" }}
      >
        Add task
      </div>
    </div>
  );
};

export default connect(null, { addTask })(AddToDo);
