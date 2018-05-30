import React from "react"
import { mount } from "enzyme"
import Login from "./login"

describe("Button Component", () => {
  it("renders correctly", () => {
    mount(<Login />)
  })
})
