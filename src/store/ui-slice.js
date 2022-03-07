import { createSlice } from '@reduxjs/toolkit';

const uiSlice = createSlice({
  name: 'ui',
  initialState: { toggleCart: false},
  reducers: {
    toggle(state) {
      //show/ hide cart
      state.toggleCart = !state.toggleCart;
    },
    
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice;
