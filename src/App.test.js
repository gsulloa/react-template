// Maybe check
// https://github.com/Gethyl/ReactReduxTestingUsingJestEnzyme/blob/master/__test__/Home.spec.js

import React from "react"
import createHistory from "history/createBrowserHistory"
import configureStore from "./redux/store"
import { createMemoryStorage } from "storage-memory"
import { shallow, mount, render } from "enzyme"
import toJson from "enzyme-to-json"
import { App } from "./App"

let history
let store
let defaultProps
let persistor

beforeEach(() => {
  history = createHistory()
  const storeObjects = configureStore({}, history, {}, createMemoryStorage())
  store = storeObjects.store
  persistor = storeObjects.persistor
  defaultProps = { history, store, persistor }
})

it("shallow renders without crashing", () => {
  shallow(<App {...defaultProps} />)
})

it("mount renders without crashing", () => {
  mount(<App {...defaultProps} />)
})

it("render renders without crashing", () => {
  render(<App {...defaultProps} />)
})

it("matches snapshot", () => {
  const wrapper = mount(<App {...defaultProps} />)
  expect(toJson(wrapper)).toMatchSnapshot()
})

it("renders children", () => {
  const wrapper = mount(<App {...defaultProps} />)
  expect(wrapper.children().exists()).toBeTruthy()
})
