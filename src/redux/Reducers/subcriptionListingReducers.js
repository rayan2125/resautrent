

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    subscribeList: [],
};

const subcriptionListingSlice = createSlice({
  name: "subcriptionListing",
  initialState,
  reducers: {
    addSubscribe: (state, action) => {
      state.subscribeList.push(action.payload);
      
    },
    removeSubcribe: (state, action) => {
      state.subscribeList = state.subscribeList.filter(
        (food) => food.id !== action.payload
      );
    },
  },
});

export const { addSubscribe, removeSubcribe } = subcriptionListingSlice.actions;

export default subcriptionListingSlice.reducer;
