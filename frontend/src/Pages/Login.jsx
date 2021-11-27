import React from "react";
import { useState } from "react";
import LoginForm from "../Components/LoginForm";
import "./Login.css";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../store/auth";
import { Navigate } from "react-router-dom";

const Login = () => {
  const hardCodedData = {
    email: "bezos23@amazon.com",
    password: "bezz23",
  };

  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const [error, setError] = useState("");

  const loginHandler = (details) => {
    // BackEnd credentials Validations
    if (
      details.email === hardCodedData.email &&
      details.password === hardCodedData.password
    ) {
      dispatch(
        authActions.login({ email: details.email, password: details.password })
      );
    } else {
      setError("Invalid Credentials");
    }
  };

  return (
    <React.Fragment>
      <div className="login-wrapper">
        {isAuthenticated ? (
          <Navigate to="/welcome" />
        ) : (
          <LoginForm loginHandler={loginHandler} error={error} />
        )}
      </div>
    </React.Fragment>
  );
};

export default Login;
