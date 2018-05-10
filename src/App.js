// @flow
import React from "react"
import styled from "styled-components"
import logo from "./assets/logo.svg"

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
const AppTitle = styled.h1`
  font-size: 1.5em;
`
const AppIntro = styled.p`
  font-size: large;
`

const App = () => (
  <Container>
    <AppHeader>
      <AppLogo src={logo} alt="logo" />
      <AppTitle> Welcome to React </AppTitle>{" "}
    </AppHeader>{" "}
    <AppIntro>
      To get started, edit <code> src / App.js </code> and save to reload.{" "}
    </AppIntro>{" "}
  </Container>
)

export default App
