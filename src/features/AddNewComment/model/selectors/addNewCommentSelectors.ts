import { StateScheme } from '@/app/providers/StoreProvider';

export const getAddNewCommentText = (state: StateScheme) => state.addNewComment?.text ?? '';
export const getAddNewCommentIsLoading = (state: StateScheme) => state.addNewComment?.isLoading;
export const getAddNewCommentError = (state: StateScheme) => state.addNewComment?.error;
