import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

// Given steps are in common folder with file named after test step  

//Company filter test - select company filter link from page 2 of the grid list  
When('user clicks the Company Name {string} hyper-link', (companyLink) => {

    // set alias on loaded client page  
    cy.intercept('https://viewpoint.glasslewis.com/WD/MeetingDetail/?siteId=DemoClient&securityId=17453&meetingId=958156').as('CompanyName')

    cy.get('[aria-label="Go to the next page"]').click()
    // assert that page 
    cy.get('.k-current-page >.k-link').should('contain', '2')

    // click on element that contains company link 
    cy.contains(companyLink).click()

    // wait on client page to load 
    cy.wait('@CompanyName').then((response) => {
        // can access the low level interception that contains the request body,
        // response body, status, etc

        //cy.log(response)

    })

})

// Company filter test
Then('the user lands onto the {string} vote card page.', (companyDisplayed) => {

   // cy.log(Cypress.env('ATVI_securityId'))

    // Assert that the company name is visible
    cy.contains(companyDisplayed).should('be.visible')

    // Assert that the security id in the URL is equal to that set up for the company
    cy.url().should('include', Cypress.env('ATVI_securityId'))
    cy.get('#txt-detail-info-Security-Id-From-Distributor').should('contain', '00507V109')

})

// Company filter test
Then('{string} should appear in the top banner', (companyDisplayed) => {

    //assert that the company name is in the banner element 
    cy.get('#detail-issuer-name').should('contain', companyDisplayed)
})