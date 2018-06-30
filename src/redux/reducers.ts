import { Reducer } from "redux"
import { combineReducers } from "redux-immutable"
import { TypedMap } from "./reduxHelpers"
import UserReducer, { initialUserState } from "./user/userReducer"

export function createReducer(): Reducer<State> {
  return combineReducers({
    user: UserReducer
  })
}

export const initialState = {
  user: initialUserState
}

export type State = TypedMap<typeof initialState>
