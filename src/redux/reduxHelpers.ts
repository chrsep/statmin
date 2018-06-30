import { Map } from "immutable"

// Makes redux typing easier with less boilerplate
// based on:
// https://medium.com/@martin_hotell/improved-redux-type-safety-with-typescript-2-8-2c11a8062575{

export interface Action<T extends string> {
  type: T
}

export interface ActionWithPayload<T extends string, P> extends Action<T> {
  payload: P
}

export function createAction<T extends string>(type: T): Action<T>
export function createAction<T extends string, P>(
  type: T,
  payload: P
): ActionWithPayload<T, P>
export function createAction<T extends string, P>(type: T, payload?: P) {
  return payload === undefined ? { type } : { type, payload }
}

export type FunctionType = (...args: any[]) => any
export interface ActionCreatorsMapObject {
  [actionCreator: string]: FunctionType
}
export type ActionsUnion<A extends ActionCreatorsMapObject> = ReturnType<
  A[keyof A]
>

export interface TypedMap<T> extends Map<any, any> {
  toJs(): T
  get<K extends keyof T>(key: K): T[K]
  set<K extends keyof T>(key: K, value: T[K]): TypedMap<T>
}
