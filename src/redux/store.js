import { configureStore } from "@reduxjs/toolkit";
import contactsSlice from "./contacts/slice";
import filtersSlice from "./filters/slice";
import authSlice from "./auth/slice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    contacts: contactsSlice,
    filters: filtersSlice,
  },
});
