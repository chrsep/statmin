import { mount } from "enzyme"
import * as React from "react"
import configureStore from "../../redux/configureStore"
import Login from "./Login"

describe("Button Component", () => {
  it("renders correctly", () => {
    mount(<Login store={configureStore()} />)
  })
})
