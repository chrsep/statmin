import { ActionsUnion, createAction } from "../actionHelpers"

export const CHANGE_ACCESS_TOKEN = "CHANGE_ACCESS_TOKEN"
export const GET_REPO_LIST = "GET_REPO_LIST"

export const userActions = {
  changeAccessToken: (token: string) =>
    createAction(CHANGE_ACCESS_TOKEN, token),
  getRepoList: (token: string) => createAction(GET_REPO_LIST, token)
}

export type userActions = ActionsUnion<typeof userActions>
