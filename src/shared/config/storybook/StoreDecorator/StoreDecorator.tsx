import { ReducersMapObject } from '@reduxjs/toolkit';

import { Story } from '@storybook/react';
import { StateScheme, StoreProvider } from '@/app/providers/StoreProvider';
import { ArticleDetailsReducer } from '@/entities/Article';
import { addNewCommentReducer } from '@/features/AddNewComment';
import { loginReducer } from '@/features/AuthByUsername';
import { profileReducer } from '@/features/EditableFrofileCard';
import { ArticleDetailsPageReducer } from '@/pages/ArticleDetailsPage';

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
