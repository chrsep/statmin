import * as React from "react"
import * as ReactDOM from "react-dom"
import { Provider } from "react-redux"
import { BrowserRouter as Router } from "react-router-dom"
import App from "./App"
import "./globalStyles"
import configureStore from "./redux/configureStore"
import registerServiceWorker from "./registerServiceWorker"
import { ThemeProvider } from "./styled-components"
import { darkTheme } from "./theme"

const rootElement = document.getElementById("root")
if (rootElement === null) {
  throw new Error("Root element not found")
}
const Wrapper = () => (
  <Provider store={configureStore()}>
    <Router>
      <ThemeProvider theme={darkTheme}>
        <App />
      </ThemeProvider>
    </Router>
  </Provider>
)
ReactDOM.render(<Wrapper />, rootElement)
if (module.hot) {
  module.hot.accept("./App", () => {
    ReactDOM.render(<Wrapper />, rootElement)
  })
}
registerServiceWorker()
