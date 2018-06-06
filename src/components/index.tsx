import * as React from "react"
import * as Loadable from "react-loadable"

export const Button = Loadable({
  loader: () => import("./button/button"),
  loading: () => <div>Loading</div>
})
