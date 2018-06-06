import { action } from "@storybook/addon-actions"
import { storiesOf } from "@storybook/react"
import * as React from "react"
import { darkTheme } from "../../theme"
import TextField from "./TextField"

storiesOf("TextField", module).add("With label", () => (
  <TextField onClick={action("clicked")} theme={darkTheme} />
))
