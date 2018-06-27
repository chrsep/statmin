import * as React from "react"
import * as Loadable from "react-loadable"

export const Button = Loadable({
  loader: () => import("./Button/Button"),
  loading: () => <div>Loading</div>
})

export const PageLogin = Loadable({
  loader: () => import("./PageLogin/PageLogin"),
  loading: () => <div>Loading</div>
})

export const TextField = Loadable({
  loader: () => import("./TextField/TextField"),
  loading: () => <div>Loading</div>
})
