import { Reducer } from "redux"
import { combineReducers } from "redux-immutable"
import UserReducer, { initialUserState, UserState } from "./user/userReducer"

export function createReducer(): Reducer<State> {
  return combineReducers({
    user: UserReducer
  })
}

export interface State {
  user: UserState
}

export const initialState: State = {
  user: initialUserState
}
