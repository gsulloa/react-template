import React, { Component } from "react"
import PropTypes from "prop-types"
import { Provider, connect } from "react-redux"
import { ConnectedRouter } from "react-router-redux"

import { devlog } from "./utils/log"
import Nav from "./Nav"
import { PersistGate } from "redux-persist/integration/react"

export class App extends Component {
  static propTypes = {
    store: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
    persistor: PropTypes.object.isRequired,
  }

  render() {
    devlog("App", this.state, this.props)
    return (
      <Provider store={this.props.store}>
        <PersistGate loading={null} persistor={this.props.persistor}>
          <ConnectedRouter history={this.props.history}>
            <Nav />
          </ConnectedRouter>
        </PersistGate>
      </Provider>
    )
  }
}

export default connect()(App)
