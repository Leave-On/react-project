export const addComment = (text: string) => {
	cy.getByTestId('AddNewComment.input').type(text);
	cy.getByTestId('AddNewComment.sendBtn').click();
};
export const removeComment = (commentId: string) => {
	return cy.request({
		method: 'DELETE',
		url: `http://localhost:8000/comments/` + commentId,
		headers: { Authorization: 'asdas' },
	});
};

declare global {
	// eslint-disable-next-line @typescript-eslint/no-namespace
	namespace Cypress {
		interface Chainable {
			addComment(text: string): Chainable<void>;
			removeComment(commentId: string): Chainable<void>;
		}
	}
}
