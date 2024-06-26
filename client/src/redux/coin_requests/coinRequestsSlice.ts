import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { fetchAllCoinRequestsApi } from "./coinRequestsApi";

interface CoinRequest {
  id: number;
  amount: number;
  status: string;
  user_id: number;
  createdAt: string;
  updatedAt: string;
  user: User;
}

interface User {
  id: number;
  username: string;
  email: string;
}

interface PostState {
  coinRequests: CoinRequest[] | null;
}

const initialState: PostState = {
  coinRequests: [],
};

export const fetchAllCoinRequests = createAsyncThunk<CoinRequest[] | null>(
  "coinRequests/fetchAllCoinRequests",
  async (_, { getState }) => {
    const state = getState() as RootState;
    const { info } = state.user;
    if (info) {
      const result = await fetchAllCoinRequestsApi();
      return result ?? null;
    }
    return null;
  }
);

const coinRequestsSlice = createSlice({
  name: "coin request",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAllCoinRequests.fulfilled, (state, action) => {
      state.coinRequests = action.payload;
    });
  },
});

export const {} = coinRequestsSlice.actions;
export default coinRequestsSlice.reducer;
