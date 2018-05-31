import { action } from "@storybook/addon-actions"
import { storiesOf } from "@storybook/react"
import * as React from "react"
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
