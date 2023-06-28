import { configureStore } from '@reduxjs/toolkit';
import { userSlicevalue } from './Slices/UserSlice';
import { mapSliceval } from '../pages/mapbook/MapSlice';

export const store = configureStore({
  reducer: {
    user: userSlicevalue,
    map:mapSliceval    
  },
});