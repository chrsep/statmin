import * as React from "react"
import { storiesOf } from "storybook__react"
import { ThemeProvider } from "../../styled-components"
import { darkTheme } from "../../theme"
import TextField from "./TextField"

storiesOf("TextField", module).add("With label", () => (
  <ThemeProvider theme={darkTheme}>
    <TextField label="Personal access token" />
  </ThemeProvider>
))
