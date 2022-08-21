import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import appReducer from "./appSlice";
import userReducer from "./userSlice";
import navigationReducer from "./navigationSlice";
import classroomReducer from "./classroomSlice";

//eslint-disable-next-line
export default initialState =>
  configureStore({
    reducer: combineReducers({
      app: appReducer,
      user: userReducer,
      navigation: navigationReducer,
      classroom: classroomReducer,
    }),
    preloadedState: initialState,
  });
