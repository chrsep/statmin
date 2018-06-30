import { ActionsUnion, createAction } from "../reduxHelpers"

export const SET_TOKEN_USER = "SET_TOKEN_USER"
export const LOGIN_USER = "LOGIN_USER"

export const UserActions = {
  login: () => createAction(LOGIN_USER),
  setAcessToken: (token: string) => createAction(SET_TOKEN_USER, token)
}

export type UserActions = ActionsUnion<typeof UserActions>
