import { Reducer } from "redux"
import { combineReducers } from "redux-immutable"
import userReducer, { initialUserState, UserState } from "./userReducer"

export function createReducer(): Reducer<State> {
  return combineReducers({
    userReducer
  })
}

export interface State {
  userReducer: UserState
}

export const initialState: State = {
  userReducer: initialUserState
}
