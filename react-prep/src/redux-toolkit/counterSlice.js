const initialState = {
  counter: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.counter += 1;
    },
    incrementBy: (state, action) => {
      state.counter += action.payload;
    },
  },
});

export const { increment, incrementBy } = counterSlice.reducers;

export default counterSlice.reducer;
