import React from "react";

import AnimatedInput from "../UI/AnimatedInputs/AnimatedInput/AnimatedInput";
import AnimatedCheckbox from "../UI/AnimatedInputs/AnimatedCheckbox/AnimatedCheckbox";

import classes from "./AuthLoginForm.module.css";

const AuthLoginForm = (props) => {
  return (
    <form className={classes.form} autoComplete="off">
      <AnimatedInput
        label="Email"
        input={{ type: "text", name: "email", id: "email" }}
      />
      <AnimatedInput
        label="Password"
        input={{ type: "password", name: "password", id: "password" }}
      />
      <div className={classes.actions}>
        <AnimatedCheckbox
          label="Remember me"
          input={{ id: "remember-me", name: "remember-me" }}
        />
        <div className={classes["action-forgot"]}>
          <a href="https://google.com">Forgot Password?</a>
        </div>
      </div>

      <button className={classes["submit-button"]} type="submit">
        LOG IN
      </button>
    </form>
  );
};

export default AuthLoginForm;
