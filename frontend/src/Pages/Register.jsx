import React from "react";
import { useSelector } from "react-redux";
import RegisterForm from "../Components/RegisterForm";
import { Navigate } from "react-router";
import { useState } from "react";
import "./Auth.css";

const Register = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const [error, setError] = useState("");

  const registerHandler = (details) => {
    //Check with Backend whether the given email already exists in the Database
    //If already exists -> show error that email already exists
    //Otherwise check the JWT for the type and send the request to the backend (must be logged in for this, otherwise -> login page)
    console.log(details);
  };

  return (
    <React.Fragment>
      <div className="wrapper">
        <RegisterForm registerHandler={registerHandler} error={error} />
      </div>
    </React.Fragment>
  );
};

export default Register;
