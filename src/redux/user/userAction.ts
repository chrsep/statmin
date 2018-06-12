import { createAction } from "../actionHelpers"

export const CHANGE_ACCESS_TOKEN = "CHANGE_ACCESS_TOKEN"

export const userActions = {
  changeAccessToken: (token: string) => createAction(CHANGE_ACCESS_TOKEN, token)
}
