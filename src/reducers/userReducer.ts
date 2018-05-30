import { Action } from "../actions"

export const initialUserState = {
  accessToken: ""
}

export type UserState = {
  readonly accessToken: string
}

export default (state: UserState = initialUserState, action: Action) => {
  switch (action.type) {
    case "CHANGE_ACCESS_TOKEN":
      return action.token
    default:
      return state
  }
}
