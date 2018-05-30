import * as React from "react"
import { mount } from "enzyme"
import Button from "./button"

describe("Button Component", () => {
  it("renders correctly", () => {
    mount(<Button />)
  })
})
