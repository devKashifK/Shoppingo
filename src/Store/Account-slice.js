import { createSlice } from "@reduxjs/toolkit";

const accounts = JSON.parse(localStorage.getItem("account"))
  ? JSON.parse(localStorage.getItem("account"))
  : [];

const AccountSlice = createSlice({
  name: "Account",
  initialState: {
    login: false,
    account: accounts,
  },
  reducers: {
    LoggedIn: (state, action) => {
      state.login = true;
    },
    addAccount: (state, action) => {
      state.account = [...state.account, action.payload];
      localStorage.setItem("account", JSON.stringify(state.account));
    },
  },
});

export const AccountActions = AccountSlice.actions;

export default AccountSlice;
