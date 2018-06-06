import * as React from "react"
import * as Loadable from "react-loadable"

export const Button = Loadable({
  loader: () => import("./Button/Button"),
  loading: () => <div>Loading</div>
})
