import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const initialState = {
  followersId: [],
};

const followersIdSlice = createSlice({
  name: "followersId",
  initialState,
  reducers: {
    addFollowersId(state, action) {
      state.followersId.push(action.payload);
    },
    removeFollowersId(state, action) {
      state.followersId = state.followersId.filter(
        (followerId) => followerId !== action.payload
      );
    },
  },
});

const persistConfig = {
  key: "followersId",
  storage,
  whitelist: ["followersId"],
};

export const persistedFollowersIdReducer = persistReducer(
  persistConfig,
  followersIdSlice.reducer
);

export const { addFollowersId, removeFollowersId } = followersIdSlice.actions;
