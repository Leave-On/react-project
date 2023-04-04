import {
    createEntityAdapter,
    createSlice,
    PayloadAction
} from '@reduxjs/toolkit'
import { StateScheme } from 'app/providers/StoreProvider'
import { Article, ArticleView } from 'entities/Article'
import { ARTICLES_VIEW_LOCAL_STORAGE_KEY } from 'shared/const/localstorage'
import { fetchArticlesList } from '../services/fetchArticlesList/fetchArticlesList'
import { ArticlesPageScheme } from '../types/articlesPageSheme'

const articlesAdapter = createEntityAdapter<Article>({
    selectId: (article) => article.id
})

export const getArticles = articlesAdapter.getSelectors<StateScheme>(
    state => state.articlesPage || articlesAdapter.getInitialState()
)

const articlesPageSlice = createSlice({
    name: 'ArticleDetailsCommentsSlice',
    initialState: articlesAdapter.getInitialState<ArticlesPageScheme>({
        error: undefined,
        isLoading: false,
        view: ArticleView.BLOCKS,
        entities: {},
        ids: []
    }),
    reducers: {
        setView: (state, action: PayloadAction<ArticleView>) => {
            state.view = action.payload
            localStorage.setItem(ARTICLES_VIEW_LOCAL_STORAGE_KEY, action.payload)
        },
        initState: (state) => {
            state.view = localStorage.getItem(ARTICLES_VIEW_LOCAL_STORAGE_KEY) as ArticleView
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticlesList.pending, (state, action) => {
                state.error = undefined
                state.isLoading = true
            })
            .addCase(fetchArticlesList.fulfilled, (state, action: PayloadAction<Article[]>) => {
                state.isLoading = false
                articlesAdapter.setAll(state, action.payload)
            })
            .addCase(fetchArticlesList.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload
            })
    }
})

export const { reducer: articlesPageReducer, actions: articlesPageActions } = articlesPageSlice