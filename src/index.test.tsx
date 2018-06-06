import { mount } from "enzyme"
import * as React from "react"
import { Provider } from "react-redux"
import { BrowserRouter as Router } from "react-router-dom"
import App from "./app"
import "./globalStyles"
import configureStore from "./redux/configureStore"

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
