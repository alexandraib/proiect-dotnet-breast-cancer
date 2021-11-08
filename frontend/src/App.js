import { Route, Routes } from "react-router";
import Welcome from "./Pages/Welcome";
import Users from "./Pages/Users";
import { Fragment } from "react";

function App() {
  return (
    <Fragment>
      <Routes>
        <Route path="/users" element={<Users />} />
        <Route path="/welcome" element={<Welcome />} />
      </Routes>
    </Fragment>
  );
}

export default App;
