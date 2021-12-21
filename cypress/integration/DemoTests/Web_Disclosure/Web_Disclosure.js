import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

// Declare and initialize global variable
var countryCount = 0;
var countryElementtdRowCount = 0;

// Given steps are in common folder with file named after test step  

// test that the country filter is visible
Given('the Country filter is available', () => {

    cy.get('#txt-multiselect-static-search-CountryFilter').should('have.attr', 'type', 'search').and('be.visible')
})

// Select the country filter based on the feature file variable
When('user selects {string} from the Country filter list on left panel', (Country_Filter) => {

    cy.get('#' + Country_Filter + '-cb-label-CountryFilter').should('contain', Country_Filter)
    cy.get('#Belgium-cb-label-CountryFilter').click()
})

// Click the update button
When('clicks on Update button for the country filter list', () => {
    //Wait for aliased route as 'getCountry' to respond with out changing or stubbing the response 
    // to avoid race condition on click update and to use data to verify only Belgium is displayed

    // Intercept API call to data and inspect response data

   
   // Could re-factor as a custom command  
    // Spy on the API request and inspect the data object 
    cy.intercept('https://viewpoint.glasslewis.com/WD/Api/Data//Issuers', (req) => {
        req.on('response', (res) => {
    // this will be called after all `before:response` handlers and after the `req.continue` handler
    // but before the response is sent to the browser

            // Get responce boby and count the number of accounts and get the country 
            const object = res.body
            

            //console.log(object.Data)
            for (let i = 0; i < object.Data.length; i++) {
                //console.log(object.Data[i].Country);
                if (object.Data[i].Country == 'Belgium') {
                    countryCount++;
                    

                }

            }
            //console.log('countryCount = ' + countryCount)
            
        })
    }).as('getCountry')



    cy.get('#multiselect-static-target-CountryFilter > .btn-container > #btn-update').then(($btn) => {
        const cls = $btn.attr('class')
        cy.wrap($btn).should('contain', 'Update').click()

        // get at the response body from the the API call 
        // wait for API call to return body 
        cy.wait('@getCountry').then((response) => {
            // can access the low level interception that contains the request body,
            // response body, status, etc

            //cy.log(response)
           
        })
        // test button class and text value
        cy.wrap($btn).should('have.class', cls)
        cy.wrap($btn).should('contain', 'Update')
    })


})

// Compare the data object with the DOM elements 
Then('the grid displays all meetings that are associated with the country {string}', (countryDisplayed) => {

    // The grid only displays meetings that are associated with the selected filter
 
    cy.get('tbody').should('have.attr', 'role', 'rowgroup').find('tr').contains('td', countryDisplayed).then(($el) => {
        cy.get($el).should('contain', countryDisplayed)
       
    })
    // the number of table rows with the selected filter is equal to the number returned in the object from the API call 
    cy.get('table > tbody > tr > td:nth-child(6)').should('contain', countryDisplayed).each(($el, index, list) => {

    }).then((list) => {
        expect(list).to.have.length(countryCount)

    })
    
    
    //cy.log(countryCount)
})



Then('no meetings associated with any other country appear on the list', () => {

    
 

    cy.get('table > tbody > tr > td:nth-child(6)').then(($el, index) => {
        
      
        //cy.get($el).invoke('text').should('contain', 'Belgium')
        
        for (let i = 0; i < $el.length; i++) {
            //var testtext = cy.get($el[i]).invoke('text')
            
            
            if (expect($el[i]).to.contain('Belgium')) {
                countryElementtdRowCount++;

            }
            
        }
        // if the $el.length and the countryElementtdRowCount are the same then only Belgium is rendered in the page
        expect($el.length).to.equal(countryElementtdRowCount)

    })


})





