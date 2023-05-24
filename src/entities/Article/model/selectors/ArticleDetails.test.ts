import { StateScheme } from '@/app/providers/StoreProvider';
import {
	getArticleDetailsData,
	getArticleDetailsIsLoading,
	getArticleDetailsError,
} from './ArticleDetails';

describe('getArticleData', () => {
	test('getdata', () => {
		const article = {
			id: '1',
			title: 'title',
		};

		const state: DeepPartial<StateScheme> = {
			articleDetails: {
				data: article,
			},
		};

		expect(getArticleDetailsData(state as StateScheme)).toEqual(article);
	});

	test('empty state', () => {
		const state: DeepPartial<StateScheme> = {};

		expect(getArticleDetailsData(state as StateScheme)).toEqual(undefined);
	});

	test('getLoading', () => {
		const state: DeepPartial<StateScheme> = {
			articleDetails: {
				isLoading: true,
			},
		};

		expect(getArticleDetailsIsLoading(state as StateScheme)).toBe(true);
	});

	test('get error', () => {
		const state: DeepPartial<StateScheme> = {
			articleDetails: {
				error: '123',
			},
		};

		expect(getArticleDetailsError(state as StateScheme)).toBe('123');
	});
});
