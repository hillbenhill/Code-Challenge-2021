
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'



Given('A user navigates to the login page', () => {
    cy.visit(Cypress.env('URL3'))
    cy.log(Cypress.env())
})

Given('the field {string} is empty', () => {
    cy.get("#username")
})

Given('the field {string} is empty', () => {
    cy.get("#password")
})

Given('the username field {string} has been populated', (username) => {
    cy.log(Cypress.env())
    cy.get(username).type(Cypress.env('userName'))

})

Given('the password field {string} has been populated', (password) => {
    cy.get(password).type(Cypress.env('passWord'))

})


When('I click on {string}', () => {
    cy.get('#btn-submit-login').click();
   
})

Then('a mandatory fields error message {string} will be displayed to the user', (title) => {
    cy.log(title)
    cy.get('.login-error').should('have.text',title)
    cy.url().should('eq', Cypress.env('URL3'))
    

})




