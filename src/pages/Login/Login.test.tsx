import { mount } from "enzyme"
import * as React from "react"
import Login from "./Login"

describe("Button Component", () => {
  it("renders correctly", () => {
    mount(<Login />)
  })
})
