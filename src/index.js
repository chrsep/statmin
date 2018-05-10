// #flow
import React from "react"
import ReactDOM from "react-dom"
import App from "./app"
import registerServiceWorker from "./registerServiceWorker"
import "./globalStyles"

ReactDOM.render(<App />, document.getElementById("root"))
registerServiceWorker()
