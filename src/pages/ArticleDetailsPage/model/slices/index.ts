import { combineReducers } from '@reduxjs/toolkit';
import { ArticleDetailsPageSheme } from '../types';
import { articleDetailsCommentsReducer } from './ArticleDetailsCommentsSlice';
import { ArticleDetailsRecommendationsReducer } from './ArticleDetailsRecommendationsSlice';

export const ArticleDetailsPageReducer = combineReducers<ArticleDetailsPageSheme>({
	recommendations: ArticleDetailsRecommendationsReducer,
	comments: articleDetailsCommentsReducer,
});
