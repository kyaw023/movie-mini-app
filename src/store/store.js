import { configureStore } from "@reduxjs/toolkit";
import { MovieAPI } from "./service/MovieAPI.service";

export const store = configureStore({
  reducer: {
    [MovieAPI.reducerPath]: MovieAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(MovieAPI.middleware),
});
