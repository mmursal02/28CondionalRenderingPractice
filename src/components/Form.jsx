import React from "react";
import Inputs from "./Inputs";

function Form(props) {
  return (
    <form className="form">
      <Inputs type="text" placeholder="Username" />
      <Inputs type="password" placeholder="Password" />
      {!props.isRegistered && (
        <Inputs type="password" placeholder="Confirm Password" />
      )}
      <button type="submit">{props.isRegistered ? "Login" : "Register"}</button>
    </form>
  );
}

export default Form;
