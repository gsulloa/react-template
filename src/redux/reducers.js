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

  const persistedReducer = persistReducer(persistConfig, combinedReducer)
  return persistedReducer
}

// const rootReducer = (state, action) => {
//   if (action.type === "CLEAR_STORE") {
//     const { hydratation } = state
//     state = { hydratation }
//   }
//   return reducer(state, action)
// }

export default configureReducers
