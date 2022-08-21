import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    // avatar: null,
    // account: null,
    id: null,
    roles: [],
    classrooms: [],
    jwt: "",
  },
  reducers: {
    setRole: (state, { payload }) => {
      if (!state.roles.role) {
        state.roles = payload.roles;
      }
    },
    setJWT: (state, { payload }) => {
      if (payload) state.jwt = payload;
    },
    setClassrooms: (state, { payload }) => {
      if (state.classrooms.classroom) state.classrooms = payload.classrooms;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setClassrooms, setJWT, setRole } = userSlice.actions;

export default userSlice.reducer;
