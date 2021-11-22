import React from "react";
import { useState } from "react";
import LoginForm from "../Components/LoginForm";
import "./Login.css";

const Login = () => {
  const hardCodedData = {
    email: "bezos23@amazon.com",
    password: "bezz23",
  };

  const [user, setUser] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const loginHandler = (details) => {
    if (
      details.email === hardCodedData.email &&
      details.password === hardCodedData.password
    ) {
      console.log("Logged In.");
      setUser({ email: details.email, password: details.password });
    } else {
      console.log("No Match");
      setError("Invalid Credentials");
    }
  };

  const logoutHandler = () => {
    setUser({ email: "", password: "" });
    setError("");
  };

  return (
    <React.Fragment>
      <div className="login-wrapper">
        {user.email !== "" ? (
          <div className="welcome">
            <h2>Welcome</h2>
            <button onClick={logoutHandler}>Logout</button>
          </div>
        ) : (
          <LoginForm loginHandler={loginHandler} error={error} />
        )}
      </div>
    </React.Fragment>
  );
};

export default Login;
