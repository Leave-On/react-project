import { ReduxStoreWithManager, StateSchemeKey } from '@/app/providers/StoreProvider';
import { Reducer } from '@reduxjs/toolkit';
import { ReactNode, useEffect } from 'react';
import { useDispatch, useStore } from 'react-redux';

export type ReducerList = {
    [name in StateSchemeKey]?: Reducer;
}

export type ReducerListEntry = [StateSchemeKey, Reducer]

interface DynamicModuleLoaderProps {
    reducers: ReducerList;
    removeAfterUnmount?: boolean;
    children: ReactNode;
}

export const DynamicModuleLoader = (props: DynamicModuleLoaderProps) => {
    const {
        children,
        reducers,
        removeAfterUnmount = true
    } = props
    const store = useStore() as ReduxStoreWithManager
    const dispatch = useDispatch()
    useEffect(() => {
        const mountedReducers =  store.reducerManager.getReducerMap()
        Object.entries(reducers).forEach(([name, reducer]) => {
            const mounted = mountedReducers[name as StateSchemeKey]
            if (!mounted) {
                store.reducerManager.add(name as StateSchemeKey, reducer)
                dispatch({ type: `@INIT ${name} reducer` })
            }

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