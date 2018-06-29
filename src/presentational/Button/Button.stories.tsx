import * as React from "react"
import { action } from "storybook__addon-actions"
import { storiesOf } from "storybook__react"
import { darkTheme } from "../../theme"
import Button from "./Button"

storiesOf("Button", module)
  .add("with text", () => (
    <Button onClick={action("clicked")} theme={darkTheme}>
      Grant Access
    </Button>
  ))
  .add("with some emoji", () => (
    <Button onClick={action("clicked")} theme={darkTheme}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ))
