//@ts-nocheck
import { configureStore, ReducersMapObject, } from '@reduxjs/toolkit'
import { counterReducer } from 'entities/Counter'
import { userReducer } from 'entities/User'
import { useDispatch } from 'react-redux'
import { To, NavigateOptions } from 'react-router-dom'
import { $api } from 'shared/api/api'
import { createReducerManager } from './reducerManager'
import { StateScheme, ThunkExtraArg } from './StateScheme'

export function createReduxStore(
    initialState?: StateScheme,
    asyncReducers?: ReducersMapObject<StateScheme>,
    navigate?: (to: To, options?: NavigateOptions) => void
) {

    const rootReducers: ReducersMapObject = {
        ...asyncReducers,
        counter: counterReducer,
        user: userReducer,
    }

    const reducerManager = createReducerManager(rootReducers)

    const extraArg: ThunkExtraArg = {
        api: $api,
        navigate
    }

    const store = configureStore<StateScheme>({
        reducer: <unknown> reducerManager.reduce as  ReducersMapObject<StateScheme>,
        devTools: __IS_DEV__,
        preloadedState: initialState,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware({
            thunk: {
                extraArgument: extraArg
            }
        })
    })
    store.reducerManager = reducerManager
    return store
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']
export const useAppDispatch = () => useDispatch<AppDispatch>()