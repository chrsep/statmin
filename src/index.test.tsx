// @flow
import * as React from "react"
import { mount } from "enzyme"
import { BrowserRouter as Router } from "react-router-dom"
import { Provider } from "react-redux"
import App from "./app"
import "./globalStyles"
import configureStore from "./configureStore"

it("renders without crashing", () => {
  const store = configureStore()
  mount(
    <Router>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  )
})
