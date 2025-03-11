import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface counterType {
  count: number;
  name: string;
}

const initialState: counterType = {
  count: 0,
  name: "lorem",
};

const counterReduser = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      return { ...state, count: state.count + 1 };
    },
    decrement: (state) => {
      state.count -= 1;
    },
    setNumber: (state, action: PayloadAction<{ num: number }>) => {
      return { ...state, count: action.payload.num };
    },
  },
});

export default counterReduser.reducer;

export const { decrement, increment, setNumber } = counterReduser.actions;
