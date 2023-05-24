import { ReduxStoreWithManager, StateScheme, StateSchemeKey } from '@/app/providers/StoreProvider';
import { Reducer } from '@reduxjs/toolkit';
import { ReactNode, useEffect } from 'react';
import { useStore } from 'react-redux';
import { useAppDispatch } from '../../hooks/useAppDispatch/useAppDispatch';

export type ReducerList = {
	[name in StateSchemeKey]?: Reducer<NonNullable<StateScheme[name]>>;
};

export type ReducerListEntry = [StateSchemeKey, Reducer];

interface DynamicModuleLoaderProps {
	reducers: ReducerList;
	removeAfterUnmount?: boolean;
	children: ReactNode;
}

export const DynamicModuleLoader = (props: DynamicModuleLoaderProps) => {
	const { children, reducers, removeAfterUnmount = true } = props;
	const store = useStore() as ReduxStoreWithManager;
	const dispatch = useAppDispatch();
	useEffect(() => {
		const mountedReducers = store.reducerManager.getReducerMap();
		Object.entries(reducers).forEach(([name, reducer]) => {
			const mounted = mountedReducers[name as StateSchemeKey];
			if (!mounted) {
				store.reducerManager.add(name as StateSchemeKey, reducer);
				dispatch({ type: `@INIT ${name} reducer` });
			}
		});

		return () => {
			if (removeAfterUnmount) {
				Object.entries(reducers).forEach(([name]) => {
					store.reducerManager.remove(name as StateSchemeKey);
					dispatch({ type: `@DESTROY ${name} reducer` });
				});
			}
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return <>{children}</>;
};
