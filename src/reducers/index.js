// @flow
/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from "redux-immutable"
import userReducer, { initialUserState } from "./userReducer"
import type { UserState } from "./userReducer"

/**
 * Creates the main reducer with the dynamically injected ones
 */
export function createReducer() {
  return combineReducers({
    userReducer
  })
}

export type State = {
  ...UserState
}

export const initialState: State = {
  userReducer: initialUserState
}
