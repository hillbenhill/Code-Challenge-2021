// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

/*Cypress.Commands.add("login", () => {

    cy.visit(Commands.env.('URL'))
    cy.get('#username').type(Cypress.env('my-user'))
    cy.get('#pwd').type(Cypress.env('My-PW'))

});*/
Cypress.Commands.add("login", (URL, username, password) => {
    //adding a new command named login
    cy.visit(URL)
    cy.get("#username").type(username);
    cy.get("#password").type(password);
    cy.get('#btn-submit-login').click();
   // cy.contains("Sign in").click();
});




/*Cypress.Commands.add('loginByForm', (username, password) => {
    Cypress.log({
        name: 'loginByForm',
        message: `${username} | ${password}`,
    })

    return cy.request({
        method: 'POST',
        url: '',
        form: true,
        
        body: {
            username,
            password,
        },
    }).its('body.user.token').should('exist')
});*/


/*Cypress.Commands.add('loginByCSRF', (username, password, csrfToken) => {
    cy.request({
        method: 'POST',
        url: '',
        form: true,
        failOnStatusCode: false, // dont fail so we can make assertions
        form: true, // we are submitting a regular form body
        body: {
            username,
            password,
            _csrf: csrfToken, // insert this as part of form body
        },
    })
})*/





