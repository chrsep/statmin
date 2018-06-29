import { ReposAction } from "./reposAction"

export const initialReposState: ReposState = {
  repos: []
}
export interface ReposState {
  repos: string[]
}
export default (state: ReposState, action: ReposAction) => {
  switch (action.type) {
    default:
      return state
  }
}
