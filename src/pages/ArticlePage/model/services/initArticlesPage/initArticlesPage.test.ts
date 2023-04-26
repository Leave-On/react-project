import { ArticleSortField } from "entities/Article";
import { useSearchParams } from "react-router-dom";
import { TestAsyncThunk } from "shared/lib/tests/testAsyncThunk/TestAsyncThunk";
import { fetchArticlesList } from "../fetchArticlesList/fetchArticlesList";
import { initArticlesPage } from "./initArticlesPage";

jest.mock('../fetchArticlesList/fetchArticlesList')

describe('initArticlesPage', () => {
    const [searchParams] = useSearchParams();
    test('not inited', async () => {
        const thunk = new TestAsyncThunk(initArticlesPage, {
            articlesPage: {
                page: 2,
                ids: [],
                entities: {},
                limit: 4,
                isLoading: false,
                hasMore: true,
                _inited: false,
                order: 'asc',
                sort: ArticleSortField.CREATED,
                search: ''
            }
        });

        await thunk.callThunk(searchParams);

        expect(thunk.dispatch).toBeCalledTimes(4)
        expect(fetchArticlesList).toBeCalled()
    });

    test('inited', async () => {
        const thunk = new TestAsyncThunk(initArticlesPage, {
            articlesPage: {
                page: 2,
                ids: [],
                entities: {},
                limit: 4,
                isLoading: false,
                hasMore: false,
                _inited: true
            }
        });

        await thunk.callThunk(searchParams);

        expect(thunk.dispatch).toBeCalledTimes(2)
        expect(fetchArticlesList).not.toHaveBeenCalled()
    });

})