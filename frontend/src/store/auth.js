import { createSlice } from "@reduxjs/toolkit";

const authInitialState = {
  userEmail: "",
  userPassword: "",
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "authentication",
  initialState: authInitialState,
  reducers: {
    login(state, action) {
      state.isAuthenticated = true;
      state.userEmail = action.payload.email;
      state.userPassword = action.payload.password;
    },
    logout(state) {
      state.isAuthenticated = false;
      state.userEmail = "";
      state.userPassword = "";
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
