import * as React from "react"
import { Route } from "react-router-dom"
import logo from "./assets/logo.svg"
import { Login } from "./pages"
import styled from "./styled-components"

// COMPONENT
export default () => (
  <>
    <AppHeader>
      <AppLogo src={logo} alt="logo" />
      statmin
    </AppHeader>{" "}
    <Route exact={true} path="/" component={Login} />
  </>
)

// STYLES (using styled-components)
const AppHeader = styled.header`
  color: white;
  display: flex;
  align-items: center;
  font-size: 2.2rem;
  padding: 1.8rem;
`
const AppLogo = styled.img`
  animation: App-logo-spin infinite 20s linear;
  height: 3rem;
  margin-right: 1rem;
`
