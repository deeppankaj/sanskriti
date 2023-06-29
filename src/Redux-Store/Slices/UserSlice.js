// collectionSlice.js

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { database } from "../../configuration/Firebase";
import { collection, doc, getDoc, onSnapshot } from "firebase/firestore";

const initialState = {
  data: [],
  loading: false,
  error: null,
};

export const fetchUser = createAsyncThunk(
  "collection/fetchuser",
  async () => {
    const id =localStorage.getItem("token")
    const docRef = doc(database, "user",id);
    const docSnap = await getDoc(docRef);
    console.log(docSnap);
    const data = docSnap.data();
    return data;
  }
);

const userSlice = createSlice({
  name: "collection",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.loading = "dfgdfgdfg";
        state.data = action.payload;
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.loading = "fgdfgdf";
        state.error = action.error;
      });
  },
});


export const userSlicevalue = userSlice.reducer;
export const userinfo = state => state.user.data;
