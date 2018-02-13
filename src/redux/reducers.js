import { combineReducers } from "redux"
import { persistReducer } from "redux-persist"

import router from "./modules/router"
import authentication from "./modules/authentication"

function configureReducers(storage) {
  const persistConfig = {
    key: "root",
    storage,
    blacklist: ["hydratation", "router"],
    version: 1,
  }

  const combinedReducer = combineReducers({
    router,
    authentication,
  })

  const rootReducer = (state, action) => {
    if (action.type === "RESET") {
      state = undefined
    }
    return combinedReducer(state, action)
  }

  const persistedReducer = persistReducer(persistConfig, rootReducer)
  return persistedReducer
}

export default configureReducers
