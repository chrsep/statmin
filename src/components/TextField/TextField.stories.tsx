import { storiesOf } from "@storybook/react"
import * as React from "react"
import { ThemeProvider } from "../../styled-components"
import { darkTheme } from "../../theme"
import TextField from "./TextField"

storiesOf("TextField", module).add("With label", () => (
  <ThemeProvider theme={darkTheme}>
    <TextField label="Personal access token" />
  </ThemeProvider>
))
