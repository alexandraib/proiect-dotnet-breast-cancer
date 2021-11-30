import React from "react";
import { useSelector } from "react-redux";
import RegisterForm from "../Components/RegisterForm";
import { Navigate } from "react-router";
import { useState } from "react";
import "./Auth.css";

const Register = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const userType = useSelector((state) => state.auth.userType);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const registerHandler = async (details) => {
    //Check with Backend whether the given email already exists in the Database
    //If already exists -> show error that email already exists
    //Otherwise check the JWT for the type and send the request to the backend (must be logged in for this, otherwise -> login page)
    //Test
    const data = { email: details.userEmail, password: details.userPassword, firstName: details.userFirstName, lastName: details.userLastName, userType: userType === "admin" ? "medic" : "patient" }
    try {
      const response = await fetch('https://localhost:5001/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(data)
      })
      if (response.status === 200) {
        const res = await response.json()
        setError("")
        setSuccessMessage("New user added!")
      }
      else if (response.status === 409) {
        setSuccessMessage("")
        setError("This email is already in use!")
      }
      else {
        throw new Error("Something went wrong!")
      }
    }
    catch (error) {
      console.log(error)
    }
  };

  return (
    <React.Fragment>
      <div className="wrapper">
        <RegisterForm registerHandler={registerHandler} error={error} success={successMessage} />
      </div>
    </React.Fragment>
  );
};

export default Register;
