import { combineReducers } from "redux"
import { persistReducer } from "redux-persist"

import router from "./modules/router"

function configureReducers(storage) {
  const persistConfig = {
    key: "root",
    storage,
    blacklist: ["hydratation", "router"],
    version: 1,
  }

  const combinedReducer = combineReducers({
    router,
  })

  const persistedReducer = persistReducer(persistConfig, combinedReducer)
  return persistedReducer
}

export default configureReducers
