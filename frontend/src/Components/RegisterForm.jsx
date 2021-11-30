import { useState } from "react";
import "./AuthForm.css";

const RegisterForm = (props) => {
  const [credentials, setCredentials] = useState({
    userEmail: "",
    userPassword: "",
    userFirstName: "",
    userLastName: "",
    ruserPassword: "",
  });
  const submitHandler = (event) => {
    event.preventDefault();
    props.registerHandler(credentials);
  };

  const emailHandler = (e) => {
    e.preventDefault();
    setCredentials({ ...credentials, userEmail: e.target.value });
  };
  const passwordHandler = (e) => {
    e.preventDefault();
    setCredentials({ ...credentials, userPassword: e.target.value });
  };
  const firstNameHandler = (e) => {
    e.preventDefault();
    setCredentials({ ...credentials, userFirstName: e.target.value });
  };
  const lastNameHandler = (e) => {
    e.preventDefault();
    setCredentials({ ...credentials, userLastName: e.target.value });
  };
  const rpasswordHandler = (e) => {
    e.preventDefault();
    setCredentials({ ...credentials, ruserPassword: e.target.value });
  };

  return (
    <form onSubmit={submitHandler} className="login-form">
      <div className="form-container">
        <h2>Register</h2>
        {props.error !== "" ? <div className="error">{props.error}</div> : ""}
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            value={credentials.userEmail}
            onChange={emailHandler}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={passwordHandler}
            value={credentials.userPassword}
          />
        </div>
        <div className="form-group">
          <label htmlFor="rpassword">Repeat Password:</label>
          <input
            type="password"
            name="rpassword"
            id="rpassword"
            onChange={rpasswordHandler}
            value={credentials.ruserPassword}
          />
        </div>
        <div className="form-group">
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            onChange={firstNameHandler}
            value={credentials.userFirstName}
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            onChange={lastNameHandler}
            value={credentials.userLastName}
          />
        </div>
        <input type="submit" value="Register" />
      </div>
    </form>
  );
};

export default RegisterForm;
