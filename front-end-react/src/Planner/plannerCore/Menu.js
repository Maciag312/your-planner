import React, { useState } from "react";
import { connect } from "react-redux";
import { setVisibilityFilter } from "../../Store/actions";
import { VisibilityFilters } from "../../Store/actions";

const Menu = (props) => {
  const [activeAll, setActiveAll] = useState(true);
  const [activeComplete, setActiveComplete] = useState(false);
  const [activeActive, setActiveActive] = useState(false);

  const activeAllChange = () => {
    props.setVisibilityFilter(VisibilityFilters.SHOW_ALL);
    setActiveAll(true);
    setActiveComplete(false);
    setActiveActive(false);
  };

  const activeCompleteChange = () => {
    props.setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED);
    setActiveAll(false);
    setActiveComplete(true);
    setActiveActive(false);
  };

  const activeActiveChange = () => {
    props.setVisibilityFilter(VisibilityFilters.SHOW_ACTIVE);
    setActiveAll(false);
    setActiveComplete(false);
    setActiveActive(true);
  };
  return (
    <div className="ui secondary pointing menu">
      <href
        onClick={() => activeAllChange()}
        className={` item ${activeAll ? "active" : ""}`}
      >
        All Tasks
      </href>
      <href
        onClick={() => activeCompleteChange()}
        className={` item ${activeComplete ? "active" : ""} `}
      >
        Completed
      </href>
      <href
        onClick={() => activeActiveChange()}
        className={` item ${activeActive ? "active" : ""} `}
      >
        Active
      </href>
    </div>
  );
};
const mapStateToProps = (state) => ({
  visibility: state.visibility,
});

const mapDispatchToProps = (dispatch) => ({
  setVisibilityFilter: (filter) => dispatch(setVisibilityFilter(filter)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Menu);
