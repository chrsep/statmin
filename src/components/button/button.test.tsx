import { mount } from "enzyme"
import * as React from "react"
import Button from "./button"

describe("Button Component", () => {
  it("renders correctly", () => {
    mount(<Button />)
  })
})
