import { createSlice } from "@reduxjs/toolkit";

export const navigationSlice = createSlice({
  name: "navigation",
  initialState: {
    // avatar: null,
    // account: null,
    currentRoute: null,
  },
  reducers: {
    setCurrentRoute: (state, { payload }) => {
      if (!payload) state.currentRoute = payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setCurrentRoute } = navigationSlice.actions;

export default navigationSlice.reducer;
