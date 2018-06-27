import { shallow } from "enzyme"
import "jest-styled-components"
import * as React from "react"
import TextField from "./TextField"

describe("Button Component", () => {
  it("renders correctly", () => {
    const wrapper = shallow(<TextField />)
    expect(wrapper).toMatchSnapshot()
  })
})
