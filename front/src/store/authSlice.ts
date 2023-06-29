import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "name",
  initialState: {
    value: 'logged out'
  },
  reducers: {
    isAuth: (state, action) => {
      state.value = action.payload;
    },
  },
});


export const {isAuth} = authSlice.actions

export default authSlice.reducer