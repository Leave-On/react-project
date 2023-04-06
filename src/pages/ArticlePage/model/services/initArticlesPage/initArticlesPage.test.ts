import { TestAsyncThunk } from "shared/lib/tests/testAsyncThunk/TestAsyncThunk";
import { fetchArticlesList } from "../fetchArticlesList/fetchArticlesList";
import { initArticlesPage } from "./initArticlesPage";

jest.mock('../fetchArticlesList/fetchArticlesList')

describe('initArticlesPage', () => {

    test('not inited', async () => {
        const thunk = new TestAsyncThunk(initArticlesPage, {
            articlesPage: {
                page: 2,
                ids: [],
                entities: {},
                limit: 4,
                isLoading: false,
                hasMore: true,
                _inited: false
            }
        });

        await thunk.callThunk();

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

        await thunk.callThunk();

        expect(thunk.dispatch).toBeCalledTimes(2)
        expect(fetchArticlesList).not.toHaveBeenCalled()
    });

})