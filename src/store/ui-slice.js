import { createSlice } from '@reduxjs/toolkit';

const uiSlice = createSlice({
  name: 'ui',
  initialState: { toggleCart: false},
  reducers: {
    toggle(state) {
      state.toggleCart = !state.toggleCart;
    },
    
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice;
