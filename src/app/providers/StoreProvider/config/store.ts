import { configureStore } from '@reduxjs/toolkit'
import { counterReduser } from 'entities/Counter'
import { StateScheme } from './StateScheme'

export function createReduxStore(initialState?: StateScheme) {
  return configureStore<StateScheme>({
    reducer: {
      counter: counterReduser
    },
    devTools: __IS_DEV__,
    preloadedState: initialState
  })
}
