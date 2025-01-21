import { configureStore } from "@reduxjs/toolkit";
import { mockUserApi } from "../createApi/mockUserApi";
import { contactFormSlice } from "../createSlice/contactFormSlice";
import { getMockUserApi } from "../createApi/getMockUserApi";
import { setupListeners } from "@reduxjs/toolkit/query";
// import contactFormReducer from "../createSlice/contactFormSlice";
export const store = configureStore({
  reducer: {
    [mockUserApi.reducerPath]: mockUserApi.reducer,
    [getMockUserApi.reducerPath]: getMockUserApi.reducer,
    // [deleteMockUserApi.reducerPath]: deleteMockUserApi.reducer,
    contactForm: contactFormSlice.reducer,
  },
  middleware: (getDefaultMiddleWare) =>
    getDefaultMiddleWare().concat([
      mockUserApi.middleware,
      getMockUserApi.middleware,
    ]),
});
setupListeners(store.dispatch);
