describe('User visiting articles page', () => {
	beforeEach(() => {
		cy.login().then((data) => {
			cy.visit('articles');
		});
	});
	it('and articles got loaded successfully', () => {
		cy.getByTestId('ArticleList').should('exist');
		cy.getByTestId('ArticleListItem').should('have.length.greaterThan', 3);
	});
	it('with stub (fixture)', () => {
		cy.intercept('GET', '**/articles?*', { fixture: 'articles.json' });
		cy.getByTestId('ArticleList').should('exist');
		cy.getByTestId('ArticleListItem').should('have.length.greaterThan', 3);
	});
	it.skip('skip this test', () => {
		cy.getByTestId('ArticleList').should('exist');
		cy.get('asd').should('exist');
	});
});
