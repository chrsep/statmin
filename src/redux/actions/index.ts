import { ActionsUnion, ActionWithPayload } from "../actionHelpers"
import { userActions } from "./userAction"

export const Actions = {
  ...userActions
}

export type Actions = ActionsUnion<typeof Actions>
