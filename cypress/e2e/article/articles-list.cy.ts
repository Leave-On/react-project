describe('User visiting articles page', () => {
    beforeEach(() => {
        cy.login().then(data => {
            cy.visit('articles')
        })
    })
    it('and articles got loaded successfully', () => {
        cy.getByTestId('ArticleList').should('exist')
        cy.getByTestId('ArticleListItem').should('have.length.greaterThan', 3)
    })
})