import React from "react";
import { useState } from "react";
import LoginForm from "../Components/LoginForm";
import "./Auth.css";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../store/auth";
import { Navigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const [error, setError] = useState("");

  const loginHandler = async (details) => {
    // BackEnd credentials Validations
    const data = { email: details.email, password: details.password }
    try {
      const response = await fetch('https://localhost:5001/api/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(data)
      })
      if (response.status === 200) {
        const res = await response.json()
        // INCLUDE JWT in authStore primit de la request
        function parseJWT(token) {
          var base64Url = token.split('.')[1];
          var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
          var jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
          }).join(''));
          return JSON.parse(jsonPayload);
        };
        const jwt = parseJWT(res)
        dispatch(
          authActions.login({
            email: jwt.email,
            JWToken: res,
            userType: jwt.userType,
          })
        );
        localStorage.setItem("token",res)
      }
      else if (response.status === 400 || response.status === 401) {
        setError("Invalid credentials!")
      }
      else {
        throw new Error("Something went wrong!")
      }
    }
    catch (error) {
      // console.log(error)
    }
  };

  return (
    <React.Fragment>
      <div className="wrapper">
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
