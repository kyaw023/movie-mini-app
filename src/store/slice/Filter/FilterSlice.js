import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filterName: "popularity.asc",
  filterLanguage: "en-US",
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
  },
});

export const { setFilterName, setFilterLanguage } = FilterSlice.actions;
export default FilterSlice.reducer;
