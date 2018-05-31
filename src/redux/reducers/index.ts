import { Reducer } from "redux"
import { combineReducers } from "redux-immutable"
import { Actions } from "./../actions"
import userReducer, { initialUserState, UserState } from "./userReducer"

export function createReducer(): Reducer<State | undefined, Actions> {
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
