import { compose, createStore, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import logger from "redux-logger"
import promiseMiddleware from "redux-promise-middleware"
import { persistStore } from "redux-persist"
import { routerMiddleware } from "react-router-redux"

import reducers from "./reducers"
import storage from "redux-persist/lib/storage" // defaults to localStorage for web and AsyncStorage for react-native

export default function configureStore(
  initialState = {},
  history = {},
  { api } = {},
  customStorage = storage
) {
  const shouldLog = process.env.NODE_ENV === "development"

  // Setup middleware
  const middleware = [
    thunk.withExtraArgument({ api }),
    promiseMiddleware(),
    routerMiddleware(history),
  ]
  if (shouldLog) {
    middleware.push(logger)
  }

  // Setup middlewares and enhancers
  const enhancer = compose(applyMiddleware(...middleware))

  // Create redux store
  const store = createStore(reducers(customStorage), initialState, enhancer)
  const persistor = persistStore(store)

  return { store, persistor }
}
