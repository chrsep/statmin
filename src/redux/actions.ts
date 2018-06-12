import { ActionsUnion } from "./actionHelpers"
import { userActions } from "./user/userAction"

export const Actions = {
  ...userActions
}

export type Actions = ActionsUnion<typeof Actions>
