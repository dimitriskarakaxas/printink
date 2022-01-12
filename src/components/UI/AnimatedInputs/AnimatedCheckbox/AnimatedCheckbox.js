import React, { useState } from "react";

import { FaCheck } from "react-icons/fa";

import classes from "./AnimatedCheckbox.module.css";

const AnimatedCheckbox = (props) => {
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);

  const checkboxClickHandler = () => {
    setIsCheckboxChecked((prevState) => !prevState);
  };

  const iconStyles = { fontSize: "14px", color: "#fff" };
  if (!isCheckboxChecked) {
    iconStyles.transition = "none";
  }

  return (
    <div className={classes["action-remember"]}>
      <div className={classes["checkbox-wrapper"]}>
        <input
          {...props.input}
          type="checkbox"
          onClick={checkboxClickHandler}
        />
        <FaCheck className={classes.icon} style={iconStyles} />
      </div>
      <label htmlFor={props.input.id}>{props.label}</label>
    </div>
  );
};

export default AnimatedCheckbox;
