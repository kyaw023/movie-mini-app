import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  currentPage: 1,
  totalPage: null,
};

export const PaginationSlice = createSlice({
  name: "pagination",
  initialState,
  reducers: {
    setCurrentPagePlus: (state, action) => {
      state.currentPage += action.payload;
    },
    setCurrentPagePrev: (state, action) => {
      if (state.currentPage > 1) {
        state.currentPage -= action.payload;
      }
    },
  },
});

export const { setCurrentPagePlus, setCurrentPagePrev } =
  PaginationSlice.actions;
export default PaginationSlice.reducer;
