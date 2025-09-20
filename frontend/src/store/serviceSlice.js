import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  serviceData: [],
};

const serviceSlice = createSlice({
  name: "service",
  initialState,
  reducers: {
    setService(state, action) {
      state.serviceData = action.payload;
    },
  },
});

export const { setService } = serviceSlice.actions;

export default serviceSlice.reducer;
