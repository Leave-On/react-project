import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { addNewCommentScheme } from '../types/addNewComment';

const initialState: addNewCommentScheme = {
	isLoading: false,
	error: undefined,
	text: '',
};

export const addNewCommentSlice = createSlice({
	name: 'addNewComment',
	initialState,
	reducers: {
		setText: (state, action: PayloadAction<string>) => {
			state.text = action.payload;
		},
	},
	// extraReducers: (builder) => {
	//     builder
	//         .addCase(loginByUsername.pending, (state, action) => {
	//             state.error = undefined
	//             state.isLoading = true
	//         })
	//         .addCase(loginByUsername.fulfilled, (state, action) => {
	//             state.isLoading = false
	//         })
	//         .addCase(loginByUsername.rejected, (state, action) => {
	//             state.isLoading = false
	//             state.error = action.payload
	//         })
	// }
});

export const { actions: addNewCommentActions } = addNewCommentSlice;
export const { reducer: addNewCommentReducer } = addNewCommentSlice;
