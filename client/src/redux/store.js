import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import appReducer from "./appSlice";
import userReducer from "./userSlice";

//eslint-disable-next-line
export default initialState =>
  configureStore({
    reducer: combineReducers({
      app: appReducer,
      user: userReducer,
    }),
    preloadedState: initialState,
  });
