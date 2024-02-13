const { configureStore, combineReducers } = require("@reduxjs/toolkit");

import { persistStore, persistReducer } from 'redux-persist'
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER
} from "redux-persist";
import foodListingReducers from "./Reducers/foodListingReducers";
import subcriptionListingReducers from './Reducers/subcriptionListingReducers';
import authReducers from './Reducers/authReducers';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: ['err'],
}
const reducer = combineReducers({
  auth:authReducers,
  foodlisting: foodListingReducers,
  subcribeListing: subcriptionListingReducers
})

const persistReducers = persistReducer(persistConfig, reducer)

const store = configureStore({
  reducer: persistReducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export default store