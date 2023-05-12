import { ReducersMapObject } from '@reduxjs/toolkit';
import { Story } from '@storybook/react';
import { StateScheme, StoreProvider } from '@/app/providers/StoreProvider';
import { loginReducer } from '@/features/AuthByUsername/testing';
import { ArticleDetailsReducer } from '@/entities/Article/testing';
import { addNewCommentReducer } from '@/features/AddNewComment/testing';
import { profileReducer } from '@/features/EditableProfileCard/testing';
import { ArticleDetailsPageReducer } from '@/pages/ArticleDetailsPage/testing';

const defaultAsyncReducers: DeepPartial<ReducersMapObject<StateScheme>> = {
    loginForm: loginReducer,
    profile: profileReducer,
    articleDetails: ArticleDetailsReducer,
    addNewComment: addNewCommentReducer,
    articleDetailsPage: ArticleDetailsPageReducer
}

export const StoreDecorator = (
    state: DeepPartial<StateScheme>,
    asyncReducers?: DeepPartial<ReducersMapObject<StateScheme>>
) => (StoryComponent: Story) => (
    <StoreProvider initialState={state} asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}>
        <StoryComponent />
    </StoreProvider>
)
