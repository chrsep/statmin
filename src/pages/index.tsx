// @flow
import * as React from "react"
import * as Loadable from "react-loadable"
import styled from "styled-components"

// Import into the pages folder goes through here
// This folder configures the code splitting by route with react-loadable

// DYNAMIC IMPORTS
export const Login = Loadable({
  loader: () => import("./login/login"),
  loading: () => <Loading>Loading</Loading>
})

const Loading = styled.div`
  background: black;
`
