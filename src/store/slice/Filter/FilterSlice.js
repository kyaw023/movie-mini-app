import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  filterName: "popularity.asc",
  filterLanguage: "en-US",
  filterGenres: null,
};

export const FilterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setFilterName: (state, action) => {
      state.filterName = action.payload;
    },
    setFilterLanguage: (state, action) => {
      state.filterLanguage = action.payload;
    },
    setGenreID: (state, action) => {
      state.filterGenres = action.payload;
    },
  },
});

export const { setFilterName, setFilterLanguage, setGenreID } =
  FilterSlice.actions;
export default FilterSlice.reducer;
