// @flow
import React from "react"
import Loadable from "react-loadable"
import styled from "styled-components"

// Import into the pages folder goes through here
// This folder configures the code splitting by route with react-loadable

// DYNAMIC IMPORTS
export const Login = Loadable({
  loader: () => import("./login"),
  loading: () => <Loading>Loading</Loading>
})

export const ReposOverview = Loadable({
  loader: () => import("./reposOverview"),
  loading: () => <Loading>Loading</Loading>
})

export const PostsOverview = Loadable({
  loader: () => import("./postsOverview"),
  loading: () => <Loading>Loading</Loading>
})

const Loading = styled.div`
  background: black;
`
