import * as React from "react"

import { storiesOf } from "@storybook/react"
import { action } from "@storybook/addon-actions"

import Button from "./button"

storiesOf("Button", module)
  .add("with text", () => (
    <Button onClick={action("clicked")}>Grant Access</Button>
  ))
  .add("with some emoji", () => (
    <Button onClick={action("clicked")}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ))
