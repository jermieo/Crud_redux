import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
  isLoadingADDBtn: false,
  isLoadingUpdateBtn: true,
};

const cslice = createSlice({
  name: "Add&Update",
  initialState,
  reducers: {
    ADD: (state, action) => {
      state.value.push(action.payload);
      console.log(state.valu, "ADD -> state.value");
    },
    Update: (state, action) => {
      state.value = action.payload;
      console.log(state.value, "Update -> state.value");
    },
    Detele: (state, action) => {
      state.value = action.payload;
      console.log(state.value, "delete->state.value");
    },
  },
});

export const { ADD, Update, Detele } = cslice.actions;
export default cslice.reducer;
