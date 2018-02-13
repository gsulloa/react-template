import { combineReducers } from "redux"
import { persistReducer } from "redux-persist"

import storage from "redux-persist/lib/storage" // defaults to localStorage for web and AsyncStorage for react-native

import router from "./modules/router"

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["hydratation", "router"],
}

const combinedReducer = combineReducers({
  router,
})

const persistedReducer = persistReducer(persistConfig, combinedReducer)

export default persistedReducer
