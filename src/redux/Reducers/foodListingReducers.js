import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  foodList: [],
  imgUrl:[]
};

const foodListingSlice = createSlice({
  name: "foodListing",
  initialState,
  reducers: {
    addFood: (state, action) => {
      state.foodList.push(action.payload);
    },
    addImgUrl:(state,action)=>{
      state.imgUrl ,action.payload
    },
    removeFood: (state, action) => {
      state.foodList = state.foodList.filter(
        (food) => food.id !== action.payload
      );
    },
    removeAllFood: (state) => {
      state.foodList = [];
    },
  },
});

export const { addFood,addImgUrl, removeFood, removeAllFood } = foodListingSlice.actions;

export default foodListingSlice.reducer;
