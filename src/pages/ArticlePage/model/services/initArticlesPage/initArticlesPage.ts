import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import { ArticleSortField, ArticleType } from "entities/Article";
import { ArticlePageAsync } from "pages/ArticlePage/ui/ArticlePage/ArticlePage.async";
import { SortOrder } from "shared/types";
import { getArticlesPageInited } from "../../selectors/articlePageSelectors";
import { articlesPageActions } from "../../slices/articlesPageSlice";
import { fetchArticlesList } from "../fetchArticlesList/fetchArticlesList";


export const initArticlesPage = createAsyncThunk<
    void,
    URLSearchParams,
    ThunkConfig<string>
    >(
        'articlesPage/initArticlesPage',
        async (searchParams, thunkApi) => {
            const {  getState, dispatch } = thunkApi;
            const inited = getArticlesPageInited(getState())

            if (!inited) {
                const sortFromUrl = searchParams.get('sort') as ArticleSortField
                const orderFromUrl = searchParams.get('order') as SortOrder
                const searchFromUrl = searchParams.get('search')
                const typeFromUrl = searchParams.get('type') as ArticleType

                if (sortFromUrl) {
                    dispatch(articlesPageActions.setSort(sortFromUrl))
                }

                if (orderFromUrl) {
                    dispatch(articlesPageActions.setOrder(orderFromUrl))
                }

                if (searchFromUrl) {
                    dispatch(articlesPageActions.setSearch(searchFromUrl))
                }

                if (typeFromUrl) {
                    dispatch(articlesPageActions.setType(typeFromUrl))
                }

                dispatch(articlesPageActions.initState())
                dispatch(fetchArticlesList({}))
            }
        },
    );