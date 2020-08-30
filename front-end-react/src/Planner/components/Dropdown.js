import React, { useState, useEffect, useRef } from "react";

const Dropdown = ({ categories, selectedCat, onSelectedCatChange }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const onBodyClick = (event) => {
      if (ref.current.contains(event.target)) {
        return;
      } else setOpen(false);
    };

    document.body.addEventListener("click", onBodyClick);
    return () => {
      document.body.removeEventListener("click", onBodyClick);
    };
  }, []);

  const renderedCategories = categories.map((category) => {
    if (category.value === selectedCat.value) {
      return null;
    }

    return (
      <div
        key={category.value}
        className="item"
        onClick={() => onSelectedCatChange(category)}
      >
        {category.label}
      </div>
    );
  });

  return (
    <div ref={ref} className="ui form">
      <div className="field">
        <div
          onClick={() => setOpen(!open)}
          className={`ui selection dropdown ${open ? `visible active` : ""}`}
        >
          <i className="dropdown icon" />
          <div className="text">{selectedCat.label}</div>
          <div className={`menu ${open ? `visible transition` : ""}`}>
            {renderedCategories}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
