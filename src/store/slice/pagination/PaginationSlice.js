import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  currentPage: 1,
  totalPage: null,
};

export const PaginationSlice = createSlice({
  name: "pagination",
  initialState,
  reducers: {
    setCurrentPagePlus: (state) => {
      state.currentPage += 1;
    },
    setCurrentPagePrev: (state) => {
      if (state.currentPage > 1) {
        state.currentPage -= 1;
      }
    },
  },
});

export const { setCurrentPagePlus, setCurrentPagePrev } =
  PaginationSlice.actions;
export default PaginationSlice.reducer;
