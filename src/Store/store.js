import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialStateCounter = { counter: 0 };

const CounterSlice = createSlice({
  name: "counter",
  initialState: initialStateCounter,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increaseBy(state, action) {
      state.counter += action.payload;
    },
    decreaseBy(state, action) {
      state.counter -= action.payload;
    },
  },
});

const initialAuth = { auth: false };

const AuthSlice = createSlice({
  name: "auth",
  initialState: initialAuth,
  reducers: {
    login(state) {
      state.auth = true;
    },
    logout(state) {
      state.auth = false;
    },
  },
});

const store = configureStore({
  reducer: {
    counter: CounterSlice.reducer,
    auth: AuthSlice.reducer,
  },
});

export const CounterActions = CounterSlice.actions;
export const AuthActions = AuthSlice.actions;

export default store;
