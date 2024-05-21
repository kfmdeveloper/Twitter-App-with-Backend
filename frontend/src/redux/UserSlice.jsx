import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    otherusers: null,
    callprofile: null,
  },
  reducers: {
    getuser: (state, action) => {
      state.user = action.payload;
    },
    getotherusers: (state, action) => {
      state.otherusers = action.payload;
    },
    callprofile: (state, action) => {
      state.callprofile = action.payload;
    },
  },
});
export const { getotherusers, getuser, callprofile } = userSlice.actions;
export default userSlice.reducer;
