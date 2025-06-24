describe('Accessibility Tests', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should have proper heading structure', () => {
    cy.get('h1').should('exist')
    cy.get('h2').should('exist')
  })

  it('should have accessible buttons', () => {
    cy.get('button').each(($button) => {
      cy.wrap($button).should('be.visible')
      cy.wrap($button).should('not.be.disabled')
    })
  })

  it('should have proper form labels', () => {
    cy.selectQuizMode('normal')
    
    // Check that toggle button has proper labeling
    cy.get('input[type="checkbox"]').should('have.attr', 'id')
    cy.get('label').should('have.attr', 'for')
  })

  it('should be keyboard navigable', () => {
    // Test tab navigation
    cy.get('body').tab()
    cy.focused().should('be.visible')
    
    // Continue tabbing through interactive elements
    cy.focused().tab()
    cy.focused().should('be.visible')
  })

  it('should have sufficient color contrast in both modes', () => {
    // Test light mode
    cy.get('body').should('not.have.class', 'dark-mode')
    cy.get('button').should('be.visible')
    
    // Test dark mode
    cy.toggleDarkMode()
    cy.get('body').should('have.class', 'dark-mode')
    cy.get('button').should('be.visible')
  })
})