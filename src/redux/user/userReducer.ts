import { Actions } from "../actions"
import { CHANGE_ACCESS_TOKEN } from "./userAction"

export const initialUserState = {
  accessToken: ""
}

export interface UserState {
  readonly accessToken: string
}

export default (state: UserState = initialUserState, action: Actions) => {
  switch (action.type) {
    case CHANGE_ACCESS_TOKEN:
      return action.payload
    default:
      return state
  }
}