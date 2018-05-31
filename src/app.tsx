// @flow
import * as React from "react"
import { Route } from "react-router-dom"
import styled from "styled-components"
import logo from "./assets/logo.svg"
import { Login } from "./pages"

// COMPONENT
export default () => (
  <>
    <AppHeader>
      <AppLogo src={logo} alt="logo" />
      Statmin
    </AppHeader>{" "}
    <Route exact={true} path="/" component={Login} />
  </>
)

// STYLES (using styled-components)
const AppHeader = styled.header`
  height: 2rem;
  padding: 1rem;
  color: white;
  display: flex;
  align-items: center;
`
const AppLogo = styled.img`
  animation: App-logo-spin infinite 20s linear;
  height: 2rem;
`
