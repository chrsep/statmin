import { shallow } from "enzyme"
import "jest-styled-components"
import * as React from "react"
import { darkTheme } from "../../theme"
import TextField from "./TextField"

describe("Button Component", () => {
  it("renders correctly", () => {
    const wrapper = shallow(<TextField theme={darkTheme} />)
    expect(wrapper).toMatchSnapshot()
  })
})
