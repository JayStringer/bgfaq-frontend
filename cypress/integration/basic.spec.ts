describe('Basic test', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should load the landing page', () => {
    cy.contains('BGFAQ')
  })

  it('should request games after submitting search', () => {
    const searchTerm = 'pancakes'

    cy.intercept(
      { query: { searchTerm: 'pancakes' } },
      { fixture: 'games-list.json' }
    )

    cy.get('[data-cy=search-box]').type(`${searchTerm}{enter}`)
    cy.contains('Agricola').click()

    cy.location('href').should('contain', '/game/1')
  })
})
