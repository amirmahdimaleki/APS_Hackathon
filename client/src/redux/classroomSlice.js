import { createSlice } from "@reduxjs/toolkit";

export const appSlice = createSlice({
  name: "classroom",
  initialState: {
    classrooms: [],
    classroomId: null,
    homeworks: [],
    homework: null,
  },
  reducers: {
    setClassrooms: (state, { payload }) => {
      if (payload) state.classrooms = payload;
    },
    setClassroomId: (state, { payload }) => {
      if (payload) state.classroomId = payload;
    },
    setHomeworks: (state, { payload }) => {
      if (payload) state.homeworks = payload;
    },
    setHomework: (state, { payload }) => {
      if (payload) state.homework = payload;
    },
  },
});

export const { setClassrooms, setClassroomId, setHomeworks, setHomework } = appSlice.actions;

export default appSlice.reducer;
