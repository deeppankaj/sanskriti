import { createSlice } from "@reduxjs/toolkit";
import { GetUser } from "../../utility/Data";

const initialState = {
  data: {},
  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: "data",
  initialState,
  reducers: {},
});

export const userSlicevalue = userSlice.reducer;
export const userinfo = state => state.User.data;
