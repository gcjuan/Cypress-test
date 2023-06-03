import LoginPage from '../pages/loginPage'

describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://practicetestautomation.com/practice-test-login/')
    LoginPage.login('student','Password123')
    
    cy.contains('Logged In Successfully').should('be.visible');
  })
})