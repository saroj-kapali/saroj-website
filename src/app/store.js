import { configureStore } from "@reduxjs/toolkit";
import { mockUserApi } from "../createApi/mockUserApi";
import { contactFormSlice } from "../createSlice/contactFormSlice";
// import contactFormReducer from "../createSlice/contactFormSlice";
export const store = configureStore({
  reducer: {
    [mockUserApi.reducerPath]: mockUserApi.reducer,
    contactForm: contactFormSlice.reducer,
  },
  middleware: (getDefaultMiddleWare) =>
    getDefaultMiddleWare().concat([mockUserApi.middleware]),
});
