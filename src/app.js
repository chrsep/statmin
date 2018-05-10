// @flow
import React from "react"
import styled from "styled-components"
import { Route } from "react-router-dom"
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
const Home = () => (
  <AppIntro>
    To get started, edit <code> src / App.js </code> and save to reload.{" "}
  </AppIntro>
)
const NotHome = () => <AppIntro>This is not home</AppIntro>
const SomeoneElseHome = () => <AppIntro>This is someone else's home</AppIntro>

const App = () => (
  <Container>
    <AppHeader>
      <AppLogo src={logo} alt="logo" />
      <AppTitle> Welcome to React </AppTitle>{" "}
    </AppHeader>{" "}
    <Route exact path="/" component={Home} />
    <Route exact path="/nothome" component={NotHome} />
    <Route exact path="/someoneelsehome" component={SomeoneElseHome} />
  </Container>
)

export default App
