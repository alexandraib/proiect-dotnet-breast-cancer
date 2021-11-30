import { createSlice } from "@reduxjs/toolkit";

const authInitialState = {
  userEmail: "",
  userType: "",
  isAuthenticated: false,
  JWToken: "",
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
