import { ActionsUnion } from "./actionHelpers"
import { ReposAction } from "./repos/reposAction"
import { UserActions } from "./user/userAction"

export const Actions = {
  ...UserActions,
  ...ReposAction
}

export type Actions = ActionsUnion<typeof Actions>
