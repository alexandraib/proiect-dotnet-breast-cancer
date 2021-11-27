import { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Navigate } from "react-router";
import { authActions } from "../store/auth";

const Welcome = () => {
  const dispatch = useDispatch();
  const email = useSelector((state) => state.auth.userEmail);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const submitHandler = (event) => {
    event.preventDefault();
    dispatch(authActions.logout());
  };

  return (
    <Fragment>
      {isAuthenticated ? (
        <div>
          <h1>
            <p>Welcome, {email}!</p>
          </h1>
          <button onClick={submitHandler}>Logout</button>
        </div>
      ) : (
        <Navigate to="/login" />
      )}
    </Fragment>
  );
};

export default Welcome;
