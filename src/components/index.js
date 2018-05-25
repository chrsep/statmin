// @flow
import React from "react"
import Loadable from "react-loadable"

export const Button = Loadable({
  loader: () => import("./button/button"),
  loading: () => <div>Loading</div>
})
