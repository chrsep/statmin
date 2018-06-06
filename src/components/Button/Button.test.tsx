import { shallow } from "enzyme"
import "jest-styled-components"
import * as React from "react"
import { darkTheme } from "../../theme"
import Button from "./Button"

describe("Button Component", () => {
  it("renders correctly", () => {
    const wrapper = shallow(<Button theme={darkTheme} />)
    expect(wrapper).toMatchSnapshot()
  })
})
