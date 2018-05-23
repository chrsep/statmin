// @flow
import React from "react"
import Loadable from "react-loadable"
import styled from "styled-components"

// This file is evaluated when someone imports from
// the folder pages

const Loading = styled.div`
  background: black;
`

// DYNAMIC IMPORTS
const Login = Loadable({
  loader: () => import("./login"),
  loading: () => <Loading>Loading</Loading>
})

const ReposOverview = Loadable({
  loader: () => import("./reposOverview"),
  loading: () => <Loading>Loading</Loading>
})

const PostsOverview = Loadable({
  loader: () => import("./postsOverview"),
  loading: () => <Loading>Loading</Loading>
})

export { Login, ReposOverview, PostsOverview }
