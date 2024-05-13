import { configureStore } from "@reduxjs/toolkit";

// slices
import headerSlice from "../features/header/slice";
import workSlice from "../features/works/slice";
import contactValidation from "../features/contacts/slice";

const store = configureStore({
  reducer: {
    headerSlice,
    workSlice,
    contactValidation,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
