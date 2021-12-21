import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'



//Company filter test 
When('user clicks the Company Name {string} hyper-link', (companyLink) => {

    cy.get('[aria-label="Go to the next page"]').click()
    cy.get('.k-current-page >.k-link').should('contain', '2')
    cy.contains(companyLink).click()

})

// Company filter test
Then('the user lands onto the {string} vote card page.', (companyDisplayed) => {
    cy.log(Cypress.env('ATVI_securityId'))
    cy.url().should('include', Cypress.env('ATVI_securityId'))
    cy.get('#txt-detail-info-Security-Id-From-Distributor').should('contain', '00507V109')

})

// Company filter test
Then('{string} should appear in the top banner', (companyDisplayed) => {
    cy.get('#detail-issuer-name').should('contain', companyDisplayed)
})