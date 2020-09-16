import React, { useEffect, useState, useRef } from "react";
import { connect } from "react-redux";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import IconButton from "@material-ui/core/IconButton";
import { addCategory } from "../../Store/actions";

const Dropdown = (props) => {
  ///////////////////// STATES \\\\\\\\\\\\\\\\\\\\\\\\\\\
  const [dropdownText, setDropdownText] = useState("");
  const [labelOn, setLabelOn] = useState(true);
  const [open, setOpen] = useState(false);

  var ValidatedOptions = [];
  var IncorrectOptions = [];

  ///////////////////// REF \\\\\\\\\\\\\\\\\\\\\\\\\\\
  const ref = useRef();

  ///////////////////// USE EFFECTS \\\\\\\\\\\\\\\\\\\\\\\\\\\
  //#1
  useEffect(() => {
    const onBodyClick = (event) => {
      if (ref.current.contains(event.target)) {
        return;
      }
      setOpen(false);
    };

    document.body.addEventListener("click", onBodyClick);

    return () => {
      document.body.removeEventListener("click", onBodyClick);
    };
  }, []);

  //#2
  useEffect(() => {
    setDropdownText(props.selectedOption);
  }, [props.selectedOption]);

  useEffect(() => {}, []);

  //#3
  useEffect(() => {
    if (dropdownText !== "") {
      setLabelOn(false);
    } else if (dropdownText === "") {
      setLabelOn(true);
    }
  }, [dropdownText]);

  ///////////////////// HANDLERS \\\\\\\\\\\\\\\\\\\\\\\\\\\

  const handleInput = (event) => {
    setDropdownText(event.target.value);
    setOpen(true);
  };

  const handleClick = () => {
    setOpen(!open);
  };

  const categoryRow = (option) => {
    return (
      <div
        key={option.value}
        className="selected item"
        onClick={() => props.onSelectedOptionChange(option.label)}
      >
        <span type="text">{option.label}</span>
      </div>
    );
  };

  const handleAddCategoryClick = () => {
    let trimmedInput = dropdownText.trim();
    let formatedCategory = [];

    formatedCategory[0] = trimmedInput[0].toUpperCase();
    for (let i = 1; i < trimmedInput.length; i++) {
      formatedCategory[i] = trimmedInput[i].toLowerCase();
    }

    props.addCategory(formatedCategory.join(""));
    props.onSelectedOptionChange(formatedCategory.join(""));
  };

  const handleIncorrect = (option) => {
    IncorrectOptions.push(option);
    if (IncorrectOptions.length === props.categories.allCategories.length) {
      return (
        <div
          key={option.value}
          style={{ display: "flex", flexDirection: "row" }}
        >
          <IconButton onClick={handleAddCategoryClick}>
            <AddCircleIcon />
          </IconButton>
          <div style={{ alignSelf: "center" }}>{dropdownText}</div>
        </div>
      );
    }
  };



  const validateInput = (option) => {
    if (dropdownText === "") {
      return categoryRow(option);
    } else if (
      option.label.toLowerCase().includes(dropdownText) ||
      option.label.toUpperCase().includes(dropdownText) ||
      option.label.includes(dropdownText)
    ) {
      return ValidatedOptions.concat(option).map((option) => {
        return categoryRow(option);
      });
    } else return handleIncorrect(option);
  };

  const returnedCategories = props.categories.allCategories.map((option) => {
    return validateInput(option);
  });

  return (
    <div
      ref={ref}
      className="ui form"
      onClick={handleClick}
      style={{ margin: "0" }}
    >
      <div
        className={`ui search selection ${open ? "active" : ""} dropdown`}
        style={{ margin: "0" }}
      >
        <input
          type="text"
          className="search"
          onChange={handleInput}
          value={dropdownText}
          maxLength={20}
          onClick={props.clearSelectedOption}
          style={{ textAlign: "left" }}
          onSubmit={handleAddCategoryClick}
        />

        {labelOn ? <div className="divider default text">Category </div> : ""}

        <i className="dropdown icon"></i>
        <div className={`menu ${open ? "visible transition" : ""} `}>
          {returnedCategories}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  categories: state.categories,
});

const mapDispatchToProps = (dispatch) => ({
  addCategory: (label) => dispatch(addCategory(label)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dropdown);
