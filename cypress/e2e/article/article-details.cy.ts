let currentArticleId = ''
describe('User visiting article details page', () => {
    beforeEach(() => {
        cy.login()
        cy.createArticle().then(article => {
            currentArticleId = article.id

            cy.visit(`/articles/${article.id}`)
        })
    })
    afterEach(() => {
        cy.removeArticle(currentArticleId)
    })

    it('and article content is loaded', () => {
        cy.getByTestId('ArticleDetails.info').should('exist')
    })
    it('and article recommendations did load', () => {
        cy.getByTestId('ArticleRecomendationsList').should('exist')
    })
    it('and comments got published', () => {
        cy.getByTestId('ArticleDetails.info')
        cy.getByTestId('AddNewComment').scrollIntoView()
        cy.addComment('TEST text')
        cy.getByTestId('CommentCard.content').should('have.length', 1)

    })
    it('and rates the article', () => {
        cy.getByTestId('ArticleDetails.info')
        cy.getByTestId('RatingCard').scrollIntoView()
        cy.setRate(4, 'feedback')
        cy.get('[data-selected=true]').should('have.length', 4)

    })
    it('rates the article with stubs (fixtures)', () => {
        cy.intercept('GET', '**/articles/*', { fixture:  'article-details.json' })
        cy.getByTestId('ArticleDetails.info')
        cy.getByTestId('RatingCard').scrollIntoView()
        cy.setRate(4, 'feedback')
        cy.get('[data-selected=true]').should('have.length', 4)

    })
})