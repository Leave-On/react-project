import { FC,  useEffect } from 'react';
import { useDispatch, useStore } from 'react-redux';
import { ReduxStoreWithManager, StateSchemeKey } from 'app/providers/StoreProvider/config/StateScheme';
import { Reducer } from '@reduxjs/toolkit';

export type ReducerList = {
    [name in StateSchemeKey]?: Reducer;
}

export type ReducerListEntry = [StateSchemeKey, Reducer]

interface DynamicModuleLoaderProps {
    reducers: ReducerList;
    removeAfterUnmount?: boolean;
}

export const DynamicModuleLoader: FC<DynamicModuleLoaderProps> = (props) => {
    const { children, reducers,removeAfterUnmount } = props
    const store = useStore() as ReduxStoreWithManager
    const dispatch = useDispatch()
    useEffect(() => {
        Object.entries(reducers).forEach(([name, reducer]) => {
            store.reducerManager.add(name as StateSchemeKey, reducer)
            dispatch({ type: `@INIT ${name} reducer` })
        })


        return () => {
            if (removeAfterUnmount) {
                Object.entries(reducers).forEach(([name]) => {
                    store.reducerManager.remove(name as StateSchemeKey)
                    dispatch({ type: `@DESTROY ${name} reducer` })
                })
            }
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <>
            {children}
        </>
    );
}