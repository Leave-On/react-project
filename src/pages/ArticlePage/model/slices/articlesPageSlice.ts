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
        ids: [],
        page: 1,
        hasMore: true,
        _inited: false
    }),
    reducers: {
        setView: (state, action: PayloadAction<ArticleView>) => {
            state.view = action.payload
            localStorage.setItem(ARTICLES_VIEW_LOCAL_STORAGE_KEY, action.payload)
            // state.limit = action.payload === ArticleView.LIST ? 4 : 9
        },
        setPage: (state, action: PayloadAction<number>) => {
            state.page = action.payload
        },
        initState: (state) => {
            const view = localStorage.getItem(ARTICLES_VIEW_LOCAL_STORAGE_KEY) as ArticleView
            state.view = view
            state.limit = view === ArticleView.LIST ? 4 : 9
            state._inited = true
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
                articlesAdapter.addMany(state, action.payload)
                state.hasMore = action.payload.length > 0
            })
            .addCase(fetchArticlesList.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload
            })
    }
})

export const { reducer: articlesPageReducer, actions: articlesPageActions } = articlesPageSlice