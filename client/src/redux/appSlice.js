import { createSlice } from "@reduxjs/toolkit";

export const appSlice = createSlice({
  name: "app",
  initialState: {
    visualViewportWidth: window?.visualViewport?.width,
    gridDefaultPage: {},
  },
  reducers: {
    setVisualViewportWidth: state => {
      state.visualViewportWidth = window.visualViewport.width;
    },
    setGridDefaultPage: (state, action) => {
      if (!action.payload) {
        state.gridDefaultPage = {};
      } else state.gridDefaultPage[action.payload.key] = action.payload.page;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setVisualViewportWidth, setGridDefaultPage, incrementByAmount } = appSlice.actions;

export default appSlice.reducer;
