import { ActionsUnion, createAction } from "../reduxHelpers"

export const UPDATE_REPOS = "UPDATE_REPOS"
export const SET_REPOS = "SET_REPOS"

export const ReposAction = {
  setRepos: (repos: string[]) => createAction(SET_REPOS, { repos }),
  updateRepos: () => createAction(UPDATE_REPOS)
}

export type ReposAction = ActionsUnion<typeof ReposAction>
