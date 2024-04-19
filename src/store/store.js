import { configureStore } from "@reduxjs/toolkit";
import { MovieAPI } from "./service/MovieAPI.service";
import PaginationSlice from "./slice/pagination/PaginationSlice";

export const store = configureStore({
  reducer: {
    pagination: PaginationSlice,
    [MovieAPI.reducerPath]: MovieAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(MovieAPI.middleware),
});
