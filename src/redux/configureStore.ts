/**
 * Create the store with dynamic reducers
 */

import { fromJS } from "immutable"
import { applyMiddleware, compose, createStore, Store } from "redux"
import createSagaMiddleware from "redux-saga"
import { createReducer, initialState, State } from "./reducers"

const sagaMiddleware = createSagaMiddleware()

export default function configureStore(state: State = initialState) {
  const middlewares = [sagaMiddleware]
  const enhancers = [applyMiddleware(...middlewares)]

  // Setup Redux DevTools
  /* eslint-disable no-underscore-dangle */
  const composeEnhancers =
    process.env.NODE_ENV !== "production" &&
    typeof window === "object" &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      : compose
  /* eslint-enable */

  const store: Store<State> = createStore(
    createReducer(),
    fromJS(state),
    composeEnhancers(...enhancers)
  )

  // Extensions
  // TODO: uncomment when needed
  //   store.runSaga = sagaMiddleware.run
  //   store.injectedReducers = {} // Reducer registry
  //   store.injectedSagas = {} // Saga registry

  // TODO: If reducer not hot reload, un-comment below
  //   if (module.hot) {
  //     module.hot.accept("./reducers", () => {
  //       store.replaceReducer(createReducer(store.injectedReducers))
  //     })
  //   }
  if (process.env.NODE_ENV !== "production") {
    if (module.hot) {
      module.hot.accept("./reducers", () => {
        store.replaceReducer(createReducer())
      })
    }
  }
  return store
}
