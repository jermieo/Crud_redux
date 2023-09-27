import { configureStore } from "@reduxjs/toolkit";
import rdata from "./CreateSclice";
export const store = configureStore({
  reducer: {
    confistore: rdata,
  },
});
