// @flow
import * as React from "react"
import styled from "styled-components"
import { Route } from "react-router-dom"
import { Login } from "./pages"
import logo from "./assets/logo.svg"

// COMPONENT
export default () => (
  <React.Fragment>
    <AppHeader>
      <AppLogo src={logo} alt="logo" />
      Statmin
    </AppHeader>{" "}
    <Route exact path="/" component={Login} />
  </React.Fragment>
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
