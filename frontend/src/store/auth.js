import { createSlice } from "@reduxjs/toolkit";

function parseJWT(token) {
  var base64Url = token.split('.')[1];
  var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  var jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
    return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
  }).join(''));
  return JSON.parse(jsonPayload);
};

const authInitialState = {
  userEmail: localStorage.getItem("token") ? parseJWT(localStorage.getItem("token")).email : "",
  userType: localStorage.getItem("token") ? parseJWT(localStorage.getItem("token")).userType : "",
  isAuthenticated: localStorage.getItem("token") ? true : false,
  JWToken: localStorage.getItem("token") ? localStorage.getItem("token") : "",
};

const authSlice = createSlice({
  name: "authentication",
  initialState: authInitialState,
  reducers: {
    login(state, action) {
      state.isAuthenticated = true;
      state.userEmail = action.payload.email;
      state.JWToken = action.payload.JWToken;
      state.userType = action.payload.userType;
    },
    logout(state) {
      state.isAuthenticated = false;
      state.userEmail = "";
      state.JWToken = "";
      state.userType = "";
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
