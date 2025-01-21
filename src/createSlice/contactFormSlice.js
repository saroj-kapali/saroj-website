import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  fullName: "",
  email: "",
  message: "",
};
export const contactFormSlice = createSlice({
  name: "contactForm",
  initialState,
  reducers: {
    setFullName: (state, action) => {
      state.fullName = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setMessage: (state, aciton) => {
      state.message = aciton.payload;
    },
    resetForm: () => {
      return initialState;
    },
  },
});
export const { setFullName, setEmail, setMessage, resetForm } =
  contactFormSlice.actions;
// export default contactFormSlice.reducer;
