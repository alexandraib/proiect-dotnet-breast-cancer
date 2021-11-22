import { useState } from "react";
import "./LoginForm.css";

const LoginForm = (props) => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });

  const submitHandler = (event) => {
    event.preventDefault();
    props.loginHandler(credentials);
  };

  const emailHandler = (event) => {
    setCredentials({ ...credentials, email: event.target.value });
  };

  const passwordHandler = (event) => {
    setCredentials({ ...credentials, password: event.target.value });
  };

  return (
    <form onSubmit={submitHandler} className="login-form">
      <div className="form-container">
        <h2>Login</h2>
        {props.error !== "" ? <div className="error">{props.error}</div> : ""}
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            value={credentials.email}
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
            value={credentials.password}
          />
        </div>
        <input type="submit" value="Login" />
      </div>
    </form>
  );
};
export default LoginForm;
