/**
 * Create the store with dynamic reducers
 */

import { fromJS } from "immutable"
import { applyMiddleware, compose, createStore, Store } from "redux"
import createSagaMiddleware from "redux-saga"
import { createReducer, initialState, State } from "./reducers"
import rootSaga from "./sagas"

const sagaMiddleware = createSagaMiddleware()

export default function configureStore(state = initialState) {
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

  sagaMiddleware.run(rootSaga)

  if (process.env.NODE_ENV !== "production") {
    if (module.hot) {
      module.hot.accept("./reducers", () => {
        store.replaceReducer(createReducer())
      })
    }
  }
  return store
}
