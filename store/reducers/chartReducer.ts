import { createSlice } from "@reduxjs/toolkit";

type StateType = {
  counter: number;
};

const initState: StateType = {
  counter: 1,
};

export const chartSlice = createSlice({
  name: "Slice",
  initialState: initState,
  reducers: {
    incrementCounter: (state, action) => {
      return {
        counter: state.counter + 1,
      };
    },
  },
});

export const { incrementCounter } = chartSlice.actions;
export default chartSlice.reducer;
