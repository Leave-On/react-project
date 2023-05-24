export const setRate = (starsCount = 5, feedback = 'feedback') => {
	cy.getByTestId('StarRating.' + starsCount).click();
	cy.getByTestId('RatingCard.input').type(feedback);
	cy.getByTestId('RatingCard.sendBtn').click();
};

declare global {
	// eslint-disable-next-line @typescript-eslint/no-namespace
	namespace Cypress {
		interface Chainable {
			setRate(starsCount: number, feedback: string): Chainable<void>;
		}
	}
}
