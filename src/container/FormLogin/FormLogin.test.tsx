import { shallow } from "enzyme"
import * as React from "react"
import { TextField } from "../../presentational"
import { FormLogin } from "./FormLogin"

describe("FormLogin test", () => {
  it("should render correctly", () => {
    const login = jest.fn()
    shallow(<FormLogin login={login} setToken={jest.fn()} />)
  })

  it("should update state onChange", () => {
    const login = jest.fn()
    const setToken = jest.fn()
    const wrapper = shallow(<FormLogin login={login} setToken={setToken} />)
    wrapper.find(TextField).simulate("change", {
      currentTarget: { value: "test" }
    })
    expect(setToken).toHaveBeenCalledTimes(1)
  })
})
