// @flow
import React from "react"
import ReactDOM from "react-dom"
import App from "../../src/app"

it("renders without crashing", () => {
  const a: string = ""
  a.charAt(2)
  const div = document.createElement("div")
  ReactDOM.render(<App />, div)
  ReactDOM.unmountComponentAtNode(div)
})
