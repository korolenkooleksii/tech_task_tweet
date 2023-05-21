import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import { usersApi } from "./usersApi";
import { persistedFollowersIdReducer } from "./followersIdSlice";

export const store = configureStore({
  reducer: {
    followersId: persistedFollowersIdReducer,
    [usersApi.reducerPath]: usersApi.reducer,
  },

  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    usersApi.middleware,
  ],
});

export const persistor = persistStore(store);

setupListeners(store.dispatch);
