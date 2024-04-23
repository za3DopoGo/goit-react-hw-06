import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  filters: {
    name: "",
  },
};
const filterSlice = createSlice({
  name: "filter",
  initialState: INITIAL_STATE ,
  reducers: {
    changeFilter(state, action) {
      state.filters.name = action.payload;
    },
  },
});
export const filtersReducer = filterSlice.reducer;
export const { changeFilter } = filterSlice.actions;
export const selectNameFilter = state => state.filter.filters.name;
