import * as React from "react"
import * as ReactDOM from "react-dom"
import { BrowserRouter as Router } from "react-router-dom"
import { Provider } from "react-redux"
import App from "./app"
import configureStore from "./configureStore"
import registerServiceWorker from "./registerServiceWorker"
import "./globalStyles"

const store = configureStore()
const rootElement = document.getElementById("root")

if (rootElement === null) throw new Error("Root element not found")
ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  rootElement
)
registerServiceWorker()
