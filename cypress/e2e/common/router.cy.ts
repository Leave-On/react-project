import { selectByTestId } from '../../helpers/selectByTestId';

describe('Routing', () => {
	describe('user UNauthorized', () => {
		it('Open main page', () => {
			cy.visit('/');
			cy.get(selectByTestId('MainPage')).should('exist');
		});
		it('Open profile page', () => {
			cy.visit('/profile/1');
			cy.get(selectByTestId('MainPage')).should('exist');
		});
		it('Open unexisting page', () => {
			cy.visit('/asdasdf');
			cy.get(selectByTestId('NotFoundPage')).should('exist');
		});
	});
	describe('user authorized', () => {
		beforeEach(() => {
			cy.login();
		});
		it('Open profile page', () => {
			cy.visit('/profile/1');
			cy.get(selectByTestId('ProfilePage')).should('exist');
		});
		it('Open Articles List', () => {
			cy.visit('/articles');
			cy.get(selectByTestId('ArticlePage')).should('exist');
		});
	});
});
