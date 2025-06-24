// Custom commands for the Big O Quiz app

Cypress.Commands.add('selectQuizMode', (mode) => {
  if (mode === 'normal') {
    cy.get('button').contains('Perfect Run').click()
  } else if (mode === 'training') {
    cy.get('button').contains('Training Ground').click()
  }
})

Cypress.Commands.add('answerQuestion', (answerText) => {
  cy.get('.answer-button').contains(answerText).click()
})

Cypress.Commands.add('waitForQuestionLoad', () => {
  cy.get('.question-area', { timeout: 10000 }).should('be.visible')
})

Cypress.Commands.add('checkProgressBar', (expectedProgress) => {
  cy.get('.progress-text').should('contain', `${expectedProgress}%`)
})

Cypress.Commands.add('toggleDarkMode', () => {
  cy.get('input[type="checkbox"]').click()
})

Cypress.Commands.add('goHome', () => {
  cy.get('[title="home"]').click()
})