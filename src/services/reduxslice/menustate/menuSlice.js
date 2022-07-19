import { createSlice } from "@reduxjs/toolkit";

const menuSlice = createSlice({
  name: "menu",
  initialState: {
    state: false,
  },

  reducers: {
    toggleMenu(state, action) {
      state.state = action.payload;
    },
  },
});

export const menuActions = menuSlice.actions;

export default menuSlice;
