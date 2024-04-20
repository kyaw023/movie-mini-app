import { configureStore } from "@reduxjs/toolkit";
import { MovieAPI } from "./service/MovieAPI.service";
import PaginationSlice from "./slice/pagination/PaginationSlice";
import FilterSlice from "./slice/Filter/FilterSlice";

export const store = configureStore({
  reducer: {
    pagination: PaginationSlice,
    filter: FilterSlice,
    [MovieAPI.reducerPath]: MovieAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(MovieAPI.middleware),
});
