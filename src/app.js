// @flow
import React from "react"
import styled from "styled-components"
import { Route } from "react-router-dom"
import { Login } from "./pages"
import logo from "./assets/logo.svg"

// COMPONENT
export default () => (
  <Container>
    <AppHeader>
      <AppLogo src={logo} alt="logo" />
    </AppHeader>{" "}
    <Route exact path="/" component={Login} />
  </Container>
)

// STYLES (using styled-components)
const Container = styled.div`
  text-align: center;
`
const AppHeader = styled.header`
  background-color: #222;
  height: 150px;
  padding: 20px;
  color: white;
`
const AppLogo = styled.img`
  animation: App-logo-spin infinite 20s linear;
  height: 80px;
`
