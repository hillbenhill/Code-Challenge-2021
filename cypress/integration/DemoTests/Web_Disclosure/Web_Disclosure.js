import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'


Given('user is on the landing page for WD site', () => {
    cy.visit(Cypress.env('WDURL'))
    cy.url().should('eq', Cypress.env('WDURL'))
    //cy.log(Cypress.env())
})

Given('the Country filter is available', () => {
    cy.get('table > tbody > tr > td:nth-child(6)')
    cy.contains('Belgium')
    cy.get('#txt-multiselect-static-search-CountryFilter').should('have.attr', 'type', 'search').and('be.visible')
})

When('user selects {string} from the Country filter list on left panel', (Country_Filter) => {

    cy.get('#' + Country_Filter + '-cb-label-CountryFilter').should('contain', Country_Filter)
    cy.get('#Belgium-cb-label-CountryFilter').click()
})

When('clicks on Update button for the country filter list', () => {
    //Wait for aliased route as 'getCountry' to respond with out changing or stubbing the response 
    // to avoid race condition on click update and to use data to verify only Belgium is displayed
    cy.intercept('https://viewpoint.glasslewis.com/WD/Api/Data//Issuers').as('getCountry')

    // Intercept API call to data and inspect response data
    cy.intercept('https://viewpoint.glasslewis.com/WD/Api/Data//Issuers', (req) => {
        req.on('response', (res) => {
    // this will be called after all `before:response` handlers and after the `req.continue` handler
    // but before the response is sent to the browser

            // Get responce boby and count the number of accounts and get the country 
            const object = res.body

            console.log(object.Data)
            for (let i = 0; i < object.Data.length; i++) {
                console.log(object.Data[i].Country);

            }
            
        })
    })




    cy.get('#multiselect-static-target-CountryFilter > .btn-container > #btn-update').then(($btn) => {
        const cls = $btn.attr('class')
        cy.wrap($btn).should('contain', 'Update').click()
        // get at the response body from the the API call 

        cy.wait('@getCountry').then((response) => {
            // can access the low level interception that contains the request body,
            // response body, status, etc

            cy.log(response)
           
        })

        cy.wrap($btn).should('have.class', cls)
        cy.wrap($btn).should('contain', 'Update')
    })


})


Then('the grid displays all meetings that are associated with the country {string}', (countryDisplayed) => {
    //cy.pause()
    cy.get('table > tbody > tr > td:nth-child(5)')
    cy.contains('Belgium')
 
    cy.get('tbody').should('have.attr', 'role', 'rowgroup').find('tr').contains('td',"Belgium").then(($el) => {
        cy.get($el)
    })
})



Then('no meetings associated with any other country appear on the list', () => {

})





