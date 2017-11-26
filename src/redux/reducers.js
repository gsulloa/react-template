import { combineReducers } from "redux"

import hydratation from "./modules/hydratation"
import router from "./modules/router"

import authentication from "./modules/authentication"

const reducer = combineReducers({
  hydratation,
  router,
  authentication,
})

const rootReducer = (state, action) => {
  if (action.type === "CLEAR_STORE") {
    const { hydratation } = state
    state = { hydratation }
  }
  return reducer(state, action)
}

export default rootReducer
