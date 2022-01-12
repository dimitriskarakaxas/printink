import React from "react";

import classes from "./AnimatedInput.module.css";

const AnimatedInput = (props) => {
  return (
    <div className={classes["input-container"]}>
      <input {...props.input} autoComplete="off" required />
      <label htmlFor={props.input.id}>
        <span className={classes["content-name"]}>{props.label}</span>
      </label>
    </div>
  );
};

export default AnimatedInput;
