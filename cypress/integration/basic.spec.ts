describe('Basic test', () => {
    
    it('should load the landing page', () => {
        cy.visit('/')

        cy.contains('BGFAQ')
    })
})