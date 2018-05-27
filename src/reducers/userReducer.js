// @flow
import type { Action } from "../actions"

export const initialUserState = {
  accessToken: ""
}

export type UserState = {
  +accessToken: string
}

export default (state: UserState = initialUserState, action: Action) => {
  switch (action.type) {
    case "CHANGE_ACCESS_TOKEN":
      return action.token
    default:
      return state
  }
}
