import * as React from "react"
import * as ReactDOM from "react-dom"
import { Provider } from "react-redux"
import { BrowserRouter as Router } from "react-router-dom"
import App from "./app"
import "./globalStyles"
import configureStore from "./redux/configureStore"
import registerServiceWorker from "./registerServiceWorker"

const store = configureStore()
const rootElement = document.getElementById("root")

if (rootElement === null) {
  throw new Error("Root element not found")
}
ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  rootElement
)
registerServiceWorker()
