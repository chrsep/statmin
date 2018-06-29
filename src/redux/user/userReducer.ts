import { SET_TOKEN_USER, UserActions } from "./userAction"

export const initialUserState: UserState = {
  accessToken: ""
}

export interface UserState {
  readonly accessToken: string
}

export default (
  state: UserState = initialUserState,
  action: UserActions
): UserState => {
  switch (action.type) {
    case SET_TOKEN_USER:
      return { ...state, accessToken: action.payload }
    default:
      return state
  }
}
