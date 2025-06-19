describe('Big O Quiz Application', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should display the welcome screen', () => {
    cy.contains('Big O').should('be.visible')
    cy.contains('Brain Bender').should('be.visible')
    cy.contains('Select the mode you want to play:').should('be.visible')
    cy.get('button').contains('Perfect Run').should('be.visible')
    cy.get('button').contains('Training Ground').should('be.visible')
  })

  it('should start normal mode quiz', () => {
    cy.selectQuizMode('normal')
    cy.contains('Big O Notation').should('be.visible')
    cy.get('.quiz-container').should('be.visible')
    cy.get('.progress-container').should('be.visible')
  })

  it('should start training mode quiz', () => {
    cy.selectQuizMode('training')
    cy.contains('Big O Notation').should('be.visible')
    cy.get('.quiz-container').should('be.visible')
    cy.get('.progress-container').should('be.visible')
  })

  it('should display question content', () => {
    cy.selectQuizMode('normal')
    cy.waitForQuestionLoad()
    
    // Should have either code snippet or question text
    cy.get('body').then(($body) => {
      if ($body.find('.code-snippet').length > 0) {
        cy.get('.code-snippet').should('be.visible')
      } else {
        cy.get('.question-text').should('be.visible')
      }
    })
    
    // Should have answer options
    cy.get('.answer-options').should('be.visible')
    cy.get('.answer-button').should('have.length.at.least', 2)
  })

  it('should allow answering questions in normal mode', () => {
    cy.selectQuizMode('normal')
    cy.waitForQuestionLoad()
    
    // Answer first question
    cy.get('.answer-button').first().click()
    
    // Should progress to next question or show results
    cy.wait(1000) // Wait for transition
    
    // Check if we moved to next question or finished
    cy.get('body').then(($body) => {
      if ($body.find('.results').length > 0) {
        cy.get('.results').should('be.visible')
        cy.contains('Quiz Finished!').should('be.visible')
      } else {
        cy.get('.question-area').should('be.visible')
      }
    })
  })

  it('should show progress bar updates', () => {
    cy.selectQuizMode('normal')
    cy.waitForQuestionLoad()
    
    // Initial progress should be 0%
    cy.checkProgressBar(0)
    
    // Answer a question
    cy.get('.answer-button').first().click()
    cy.wait(1000)
    
    // Progress should have increased
    cy.get('.progress-text').should('not.contain', '0%')
  })

  it('should toggle dark mode', () => {
    // Check initial state (light mode)
    cy.get('body').should('not.have.class', 'dark-mode')
    
    // Toggle to dark mode
    cy.toggleDarkMode()
    cy.get('body').should('have.class', 'dark-mode')
    
    // Toggle back to light mode
    cy.toggleDarkMode()
    cy.get('body').should('not.have.class', 'dark-mode')
  })

  it('should return to home from quiz', () => {
    cy.selectQuizMode('normal')
    cy.waitForQuestionLoad()
    
    // Go back to home
    cy.goHome()
    
    // Should be back at welcome screen
    cy.contains('Brain Bender').should('be.visible')
    cy.get('button').contains('Perfect Run').should('be.visible')
  })

  it('should complete a full quiz in normal mode', () => {
    cy.selectQuizMode('normal')
    
    // Answer all questions (assuming there are questions in the quiz)
    const answerQuestions = (count = 0) => {
      cy.get('body').then(($body) => {
        if ($body.find('.results').length > 0) {
          // Quiz is finished
          cy.get('.results').should('be.visible')
          cy.contains('Quiz Finished!').should('be.visible')
          cy.contains('You scored').should('be.visible')
          cy.get('button').contains('Restart Quiz').should('be.visible')
          return
        } else if ($body.find('.answer-button').length > 0 && count < 50) {
          // Still have questions to answer
          cy.get('.answer-button').first().click()
          cy.wait(1000)
          answerQuestions(count + 1)
        }
      })
    }
    
    answerQuestions()
  })

  it('should restart quiz from results screen', () => {
    cy.selectQuizMode('normal')
    
    // Complete the quiz quickly by answering first option
    const completeQuiz = (attempts = 0) => {
      if (attempts > 50) return // Prevent infinite loop
      
      cy.get('body').then(($body) => {
        if ($body.find('.results').length > 0) {
          // Quiz completed
          cy.get('button').contains('Restart Quiz').click()
          cy.waitForQuestionLoad()
          cy.checkProgressBar(0) // Should be back to 0%
        } else if ($body.find('.answer-button').length > 0) {
          cy.get('.answer-button').first().click()
          cy.wait(500)
          completeQuiz(attempts + 1)
        }
      })
    }
    
    completeQuiz()
  })

  it('should handle training mode correctly', () => {
    cy.selectQuizMode('training')
    cy.waitForQuestionLoad()
    
    // In training mode, wrong answers should keep you on the same question
    // This test assumes we can identify correct vs incorrect answers
    cy.get('.answer-button').should('have.length.at.least', 2)
    
    // Try answering (we can't know which is correct without the quiz data)
    cy.get('.answer-button').first().click()
    cy.wait(1000)
    
    // Should either progress or stay on same question
    cy.get('.question-area').should('be.visible')
  })
})