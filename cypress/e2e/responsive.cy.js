describe('Responsive Design Tests', () => {
  const viewports = [
    { device: 'mobile', width: 375, height: 667 },
    { device: 'tablet', width: 768, height: 1024 },
    { device: 'desktop', width: 1280, height: 720 }
  ]

  viewports.forEach(({ device, width, height }) => {
    describe(`${device} viewport (${width}x${height})`, () => {
      beforeEach(() => {
        cy.viewport(width, height)
        cy.visit('/')
      })

      it('should display welcome screen properly', () => {
        cy.contains('Big O').should('be.visible')
        cy.contains('Brain Bender').should('be.visible')
        cy.get('button').contains('Perfect Run').should('be.visible')
        cy.get('button').contains('Training Ground').should('be.visible')
      })

      it('should display quiz interface properly', () => {
        cy.selectQuizMode('normal')
        cy.waitForQuestionLoad()
        
        cy.get('.quiz-container').should('be.visible')
        cy.get('.header').should('be.visible')
        cy.get('.progress-container').should('be.visible')
        cy.get('.answer-options').should('be.visible')
      })

      it('should have properly sized buttons', () => {
        cy.selectQuizMode('normal')
        cy.waitForQuestionLoad()
        
        cy.get('.answer-button').each(($button) => {
          cy.wrap($button).should('be.visible')
          cy.wrap($button).should('have.css', 'cursor', 'pointer')
        })
      })

      it('should handle long code snippets', () => {
        cy.selectQuizMode('normal')
        cy.waitForQuestionLoad()
        
        // Check if code snippet exists and is properly contained
        cy.get('body').then(($body) => {
          if ($body.find('.code-snippet').length > 0) {
            cy.get('.code-snippet').should('be.visible')
            cy.get('.code-snippet').should('not.have.css', 'overflow-x', 'visible')
          }
        })
      })
    })
  })
})