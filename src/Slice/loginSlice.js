import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  login: localStorage.getItem("unityLogin")
    ? JSON.parse(localStorage.getItem("unityLogin"))
    : null,
};
export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    loginReducer: (state, action) => {
      state.login = action.payload;
    },
  },
});

export const { loginReducer } = loginSlice.actions;
export default loginSlice.reducer;
