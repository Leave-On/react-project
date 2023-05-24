import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ScrollSaveScheme } from '../types/ScrollSaveScheme';

const initialState: ScrollSaveScheme = {
	scroll: {},
};

export const ScrollSaveSlice = createSlice({
	name: 'ScrollSaveSlice',
	initialState,
	reducers: {
		setScrollPosition: (
			state,
			{ payload }: PayloadAction<{ path: string; position: number }>,
		) => {
			state.scroll[payload.path] = payload.position;
		},
	},
});

export const { actions: ScrollSaveActions } = ScrollSaveSlice;
export const { reducer: ScrollSaveReducer } = ScrollSaveSlice;
