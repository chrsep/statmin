import { shallow } from "enzyme"
import * as React from "react"
import PageLogin from "./PageLogin"

describe("Button Component", () => {
  it("renders correctly", () => {
    const wrapper = shallow(<PageLogin />)
    expect(wrapper).toMatchSnapshot()
  })
})
