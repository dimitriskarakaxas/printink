import React, { useState } from "react";

import { FaCheck } from "react-icons/fa";

import classes from "./AuthLoginForm.module.css";

const AuthLoginForm = (props) => {
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);

  const checkboxClickHandler = () => {
    setIsCheckboxChecked((prevState) => !prevState);
  };

  const iconStyles = { fontSize: "14px", color: "#fff" };
  if (!isCheckboxChecked) {
    iconStyles.transition = "none";
  }

  return (
    <form className={classes.form}>
      <div className={classes["input-container"]}>
        <input
          type="text"
          name="email"
          id="email"
          required
          autoComplete="off"
        />
        <label htmlFor="email">
          <span className={classes["content-name"]}>Email</span>
        </label>
      </div>
      <div className={classes["input-container"]}>
        <input
          type="password"
          name="password"
          id="password"
          required
          autoComplete="off"
        />
        <label htmlFor="password">
          <span className={classes["content-name"]}>Password</span>
        </label>
      </div>
      <div className={classes.actions}>
        <div className={classes["action-remember"]}>
          <div className={classes["checkbox-wrapper"]}>
            <input
              type="checkbox"
              id="remember-user"
              name="rememeber-user"
              onClick={checkboxClickHandler}
            />
            <FaCheck className={classes.icon} style={iconStyles} />
          </div>
          <label htmlFor="remember-user">Remember Me</label>
        </div>

        <div className={classes["action-forgot"]}>
          <a href="#">Forgot Password?</a>
        </div>
      </div>

      <button className={classes["submit-button"]} type="submit">
        LOG IN
      </button>
    </form>
  );
};

export default AuthLoginForm;
