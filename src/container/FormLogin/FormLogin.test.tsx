import { shallow } from "enzyme"
import * as React from "react"
import { TextField } from "../../presentational"
import configureStore from "../../redux/configureStore"
import FormLogin from "./FormLogin"

describe("FormLogin test", () => {
  it("should render correctly", () => {
    shallow(<FormLogin store={configureStore()} />)
  })

  it("should update state onChange", () => {
    const wrapper = shallow(<FormLogin store={configureStore()} />).dive()
    wrapper.find(TextField).simulate("change", {
      currentTarget: { value: "test" }
    })
    expect(wrapper.state("token")).toBe("test")
  })
})
