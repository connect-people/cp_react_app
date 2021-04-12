import {createSlice} from '@reduxjs/toolkit';

export const homeStore = createSlice({
  name: 'home',
  initialState: [],
  reducers: {
    addProduct(state, action) {
      state.push(action.payload);
    },
    deleteProduct(state, action) {
      const index = state.findIndex((p) => p.id === action.payload);
      state.splice(index, 1);
    },
  },
});

const {actions, reducer} = homeStore;

export const {addProduct, deleteProduct} = actions;

export default reducer;