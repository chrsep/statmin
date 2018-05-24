// @flow
import React from "react"
import styled from "styled-components"
import { Route, Link } from "react-router-dom"
import logo from "./assets/logo.svg"
import { Login, ReposOverview, PostsOverview } from "./pages"

// COMPONENT
export default () => (
  <Container>
    <AppHeader>
      <AppLogo src={logo} alt="logo" />
      <Link href="/" to="/">
        Home
      </Link>
      <Link href="/repos" to="/repos">
        notHome
      </Link>
      <Link href="/posts" to="/posts">
        Someone Else Home
      </Link>
    </AppHeader>{" "}
    <Route exact path="/" component={Login} />
    <Route exact path="/repos" component={ReposOverview} />
    <Route exact path="/posts" component={PostsOverview} />
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
