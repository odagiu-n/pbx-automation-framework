describe('Login Test', () => {
    beforeEach(() => {
      cy.visit('/login')
    })
  
    it('should login with valid credentials', () => {
      cy.get('#username').type('testuser')
      cy.get('#password').type('password123')
      cy.get('#login-button').click()
      cy.url().should('include', '/dashboard')
    })
  
    it('should show error with invalid credentials', () => {
      cy.get('#username').type('wronguser')
      cy.get('#password').type('wrongpass')
      cy.get('#login-button').click()
      cy.contains('.error-message', 'Invalid credentials').should('be.visible')
    })
  })