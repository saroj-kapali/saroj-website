import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  input: { fullName: "", email: "", message: "" },

  getMessageFrom: {},
  updateUser: null,
};
export const contactFormSlice = createSlice({
  name: "contactForm",
  initialState,
  reducers: {
    setFullName: (state, action) => {
      state.input.fullName = action.payload;
    },
    setEmail: (state, action) => {
      state.input.email = action.payload;
    },
    setMessage: (state, aciton) => {
      state.input.message = aciton.payload;
    },
    resetForm: (state) => {
      state.input = { ...initialState.input };
      state.updateUser = null;
    },

    getMessageFrom: (state, action) => {
      state.getMessageFrom = action.payload;
    },

    //
    updateUser: (state, action) => {
      state.updateUser = action.payload;
      if (state.updateUser) {
        state.input.fullName = state.updateUser.fullName || "";
        state.input.email = state.updateUser.email || "";
        state.input.message = state.updateUser.message || "";
      }
    },
  },
});
export const {
  setFullName,
  setEmail,
  setMessage,
  resetForm,
  getMessageFrom,
  updateUser,
} = contactFormSlice.actions;
// export default contactFormSlice.reducer;
