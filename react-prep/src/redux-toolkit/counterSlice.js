import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

let initialState = {
  counter: 0,
  isLoading: false,
  data: null,
  error: null,
};

export const fetchData = createAsyncThunk("counter/fetchData", async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await response.json();
  return data; // Return the parsed data
});

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state = initialState) => {
      state.counter += 1;
    },
    incrementBy: (state = initialState, action) => {
      state.counter += action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { increment, incrementBy } = counterSlice.actions;

export default counterSlice.reducer;
