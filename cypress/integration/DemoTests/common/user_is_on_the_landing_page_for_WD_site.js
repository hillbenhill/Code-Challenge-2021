import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Given('user is on the landing page for WD site', () => {
    cy.visit(Cypress.env('WDURL'))
    cy.url().should('eq', Cypress.env('WDURL'))
    //cy.log(Cypress.env())
})