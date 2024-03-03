import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {persistReducer} from "redux-persist";
import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import authReducer from "./Auth/auth.slice"
import cartSlice from "./cartSlice";
import favouriteSlice from "./favouriteSlice";

const persisitAuthConfig={
  key: "auth",
  storage
}

const persisitCartConfig={
  key: "cart",
  storage
}

const persisitFavouriteConfig={
  key: "favourite",
  storage
}


export const rootReducer = combineReducers({
  auth: persistReducer(persisitAuthConfig, authReducer),
  cart: persistReducer(persisitCartConfig, cartSlice),
  favourite: persistReducer(persisitFavouriteConfig, favouriteSlice)
})




export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);