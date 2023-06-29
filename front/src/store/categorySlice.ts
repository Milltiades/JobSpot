import { createSlice } from "@reduxjs/toolkit";

const categorySlice = createSlice({
  name: "name",
  initialState: {
    value: ''
  },
  reducers: {
    chooseCategory: (state, action) => {
      state.value = action.payload;
    },
  },
});


export const {chooseCategory} = categorySlice.actions

export default categorySlice.reducer