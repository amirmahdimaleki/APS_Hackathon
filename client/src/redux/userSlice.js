import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    // avatar: null,
    // account: null,
    id: null,
    members: [],
    roles: [],
    classrooms: [],
    jwt: "",
  },
  reducers: {
    setRole: (state, { payload }) => {
      if (!state.roles.role) {
        state.roles = payload;
      }
    },
    setJWT: (state, { payload }) => {
      if (payload) state.jwt = payload;
    },
    setClassrooms: (state, { payload }) => {
      if (state.classrooms.classroom) state.classrooms = payload;
    },
    setMembers: (state, { payload }) => {
      if (state.members) state.members = payload;
    },
  },
});

export const { setClassrooms, setJWT, setRole } = userSlice.actions;

export default userSlice.reducer;
