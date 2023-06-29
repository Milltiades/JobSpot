import { createSlice } from "@reduxjs/toolkit";

const citySlice = createSlice({
  name: "name",
  initialState: {
    value: ''
  },
  reducers: {
    chooseCity: (state, action) => {
      state.value = action.payload;
    },
  },
});


export const {chooseCity} = citySlice.actions

export default citySlice.reducer