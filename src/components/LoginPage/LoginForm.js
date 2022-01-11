import React from "react";

import AuthLoginForm from "./AuthLoginForm";

import classes from "./LoginForm.module.css";
import LogoImg from "./Image.png";

const LoginForm = (props) => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.container}>
        <img src={LogoImg} alt="Logo" />
        <p className={classes["info-text"]}>Log in to your account!</p>
        <AuthLoginForm />
      </div>
    </div>
  );
};

export default LoginForm;
