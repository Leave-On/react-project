import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { StateScheme } from '@/app/providers/StoreProvider';
import { Article } from '@/entities/Article';
import { fetchArticleRecommendations } from '../services/fetchArticleRecommendations/fetchArticleRecommendations';
import { ArticleDetailsRecommendationsScheme } from '../types/ArticleDetailsRecommendationsScheme';

// Since we don't provide `selectId`, it defaults to assuming `entity.id` is the right field
const recommendationsAdapter = createEntityAdapter<Article>({
	selectId: (article) => article.id,
});

export const getArticleRecommendations = recommendationsAdapter.getSelectors<StateScheme>(
	(state) =>
		state.articleDetailsPage?.recommendations || recommendationsAdapter.getInitialState(),
);

const ArticleDetailsRecommendationsSlice = createSlice({
	name: 'ArticleDetailsRecommendationsSlice',
	initialState: recommendationsAdapter.getInitialState<ArticleDetailsRecommendationsScheme>({
		error: undefined,
		isLoading: false,
		ids: [],
		entities: {},
	}),
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchArticleRecommendations.pending, (state, action) => {
				state.error = undefined;
				state.isLoading = true;
			})
			.addCase(fetchArticleRecommendations.fulfilled, (state, action) => {
				state.isLoading = false;
				recommendationsAdapter.setAll(state, action.payload);
			})
			.addCase(fetchArticleRecommendations.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload;
			});
	},
});

export const { reducer: ArticleDetailsRecommendationsReducer } = ArticleDetailsRecommendationsSlice;
