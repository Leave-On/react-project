import { Article } from '../../../src/entities/Article';

const defaultArticle = {
	title: 'TESTING ARTICLE!!!',
	subtitle: 'Just stop being delusional.',
	img: 'https://avatars.mds.yandex.net/i?id=3e5a66ce8f8bfc513a3385d70a7605bf737a0780-4140339-images-thumbs&n=13',
	views: 1712,
	createdAt: '26.02.2022',
	userId: '1',
	type: ['IT'],
	blocks: [],
};

export const createArticle = (article?: Article) => {
	return cy
		.request({
			method: 'POST',
			url: 'http://localhost:8000/articles',
			headers: { Authorization: 'asdas' },
			body: article ?? defaultArticle,
		})
		.then((resp) => resp.body);
};

export const removeArticle = (articleId: string) => {
	return cy.request({
		method: 'DELETE',
		url: `http://localhost:8000/articles/${articleId}`,
		headers: { Authorization: 'asdas' },
	});
};

declare global {
	// eslint-disable-next-line @typescript-eslint/no-namespace
	namespace Cypress {
		interface Chainable {
			createArticle(article?: Article): Chainable<Article>;
			removeArticle(articleId: string): Chainable<void>;
		}
	}
}
