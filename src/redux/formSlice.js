import { createSlice } from '@reduxjs/toolkit';

export const formSlice = createSlice({
  name: 'form',
  initialState: [],
  reducers: {
    addFormData: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { addFormData } = formSlice.actions;

export default formSlice.reducer;
