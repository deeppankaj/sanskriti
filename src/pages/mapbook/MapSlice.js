// collectionSlice.js

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { database } from "../../configuration/Firebase";
import { collection, doc, getDoc, onSnapshot } from "firebase/firestore";

const initialState = {
  data: [],
  loading: false,
  error: null,
};

export const fetchMapData = createAsyncThunk(
  "collection/fetchData",
  async () => {
    const docRef = doc(database, "Maps","Dwarka Expressway Project Eazimaps Mapbook");
    const docSnap = await getDoc(docRef);
    const data = docSnap.data();
    return data;
  }
);

const mapSlice = createSlice({
  name: "collection",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMapData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMapData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchMapData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error;
      });
  },
});

export const mapSliceval = mapSlice.reducer;
