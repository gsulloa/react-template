import React from "react"
import ReactDOM from "react-dom"
import createHistory from "history/createBrowserHistory"

import App from "./App"
import Api from "./Api"
import configureStore from "./redux/store"
import { devlog } from "./utils/log"

const history = createHistory()
const api = new Api(process.env.REACT_APP_API || "http://localhost:3000")

// Redux required objects
const initialState = {}
const { store, persistor } = configureStore(initialState, history, { api })

devlog("index.js", "store", store, "persistor", persistor)

export default ReactDOM.render(
  <App store={store} history={history} persistor={persistor} />,
  document.getElementById("root") || document.createElement("root")
)
