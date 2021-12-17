import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Given('user is on the landing page for WD site', () => {
    cy.visit(Cypress.env('WDURL'))
    cy.url().should('eq', Cypress.env('WDURL'))
    cy.log(Cypress.env())
})

//Company filter test 
When('user clicks the Company Name {string} hyper-link', (companyLink) => {
   // cy.intercept('https://viewpoint.glasslewis.com/WD/Api/Data//UiSettings?SiteId=DemoClient&_=1639752574943')
        //.as('getCompany')
    cy.get('[aria-label="Go to the next page"]').click()
    cy.get('.k-current-page >.k-link').should('contain', '2')
    cy.contains(companyLink).click()

/*    cy.wait('@getCompany').then((response) => {
        // can access the low level interception that contains the request body,
        // response body, status, etc

        cy.log(response)

    })*/

})

// Company filter test
Then('the user lands onto the {string} vote card page.', (companyDisplayed) => {
    cy.log(Cypress.env('ATVI_securityId'))
    // the url should include ATVI_securityId 17453
    cy.url()
    cy.get('#txt-detail-info-Security-Id-From-Distributor')

})

// Company filter test
Then('{string} should appear in the top banner', (companyDisplayed) => {
    cy.get('#detail-issuer-name').should('contain', companyDisplayed)
})