import { fromJS } from "immutable"
import { TypedMap } from "../reduxHelpers"
import { SET_TOKEN_USER, UserActions } from "./userAction"

export const initialUserState = {
  accessToken: ""
}

export type UserState = TypedMap<typeof initialUserState>
export default (
  state: UserState = fromJS(initialUserState),
  action: UserActions
): UserState => {
  switch (action.type) {
    case SET_TOKEN_USER:
      return state.set("accessToken", action.payload)
    default:
      return state
  }
}
