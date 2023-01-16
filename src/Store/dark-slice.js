import { createSlice } from "@reduxjs/toolkit";

const initialState = { isDarkModeOn: false };

const darkSlice = createSlice({
  name: "dark-slice",
  initialState: initialState,
  reducers: {
    darkMode: (state, action) => {
      state.isDarkModeOn = !state.isDarkModeOn;
    //   return{
    //     this is what is happening 
    //     ...state,
    //     isDarkModeOn : true
    //   }
    },
  },
});

export const darkModeActions = darkSlice.actions

export default darkSlice;
